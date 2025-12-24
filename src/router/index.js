import { createRouter, createWebHistory } from 'vue-router'
import { useSEO } from '@/seo'
import i18n, { detectLanguageFromPath, loadLocale, supportedLanguages } from '@/i18n'

// 按需加载语言文件 - 用于SEO数据
const localeDataMap = {}

// 动态加载语言文件（用于SEO，与i18n的loadLocale不同）
async function loadLocaleForSEO(lang) {
  if (!localeDataMap[lang]) {
    try {
      const locale = await import(`@/locales/${lang}.json`)
      localeDataMap[lang] = locale.default
    } catch (error) {
      console.warn(`Failed to load locale ${lang}:`, error)
      // 回退到英文
      if (lang !== 'en') {
        const enLocale = await import('@/locales/en.json')
        localeDataMap[lang] = enLocale.default
      }
    }
  }
  return localeDataMap[lang]
}

// 页面配置
const pageConfigs = [
  { path: '/', component: 'HomeView', name: 'Home' },
  { path: '/pierrot', component: 'PierrotView', name: 'Pierrot' },
  { path: '/pierrot-coloring', component: 'PierrotColoringView', name: 'PierrotColoring' },
  { path: '/harlequin', component: 'HarlequinView', name: 'Harlequin' },
  { path: '/jester', component: 'JesterView', name: 'Jester' },
  { path: '/doctor', component: 'DoctorView', name: 'Doctor' },
  { path: '/ticket-taker', component: 'TicketTakerView', name: 'TicketTaker' },
  { path: '/wiki', component: 'WikiView', name: 'Wiki' },
  { path: '/updates', component: 'UpdatesView', name: 'Updates' },
  { path: '/download', component: 'DownloadView', name: 'Download' },
  { path: '/games', component: 'GamesListView', name: 'GamesList' },
  { path: '/blog', component: 'BlogListView', name: 'BlogList' },
  { path: '/privacy-policy', component: 'PrivacyPolicyView', name: 'PrivacyPolicy' },
  { path: '/terms-of-service', component: 'TermsOfServiceView', name: 'TermsOfService' },
  { path: '/copyright', component: 'CopyrightView', name: 'Copyright' },
  { path: '/about-us', component: 'AboutUsView', name: 'AboutUs' },
  { path: '/contact-us', component: 'ContactUsView', name: 'ContactUs' }
]

// 构建路径的辅助函数
const buildPath = (lang, basePath) => {
  if (lang === 'en') return basePath
  if (basePath === '/') return `/${lang}`
  return `/${lang}${basePath}`
}

// 生成路由配置 - 使用flatMap简化
const routes = supportedLanguages.flatMap(lang =>
  pageConfigs.map(page => ({
    path: buildPath(lang, page.path),
    name: lang === 'en' ? page.name : `${page.name}${lang.charAt(0).toUpperCase() + lang.slice(1)}`,
    component: () => import(`@/views/${page.component}.vue`)
  }))
)

// 添加游戏详情页路由（动态路由）
supportedLanguages.forEach(lang => {
  const prefix = lang === 'en' ? '' : `/${lang}`
  routes.push({
    path: `${prefix}/games/:id`,
    name: lang === 'en' ? 'GameDetail' : `GameDetail${lang.charAt(0).toUpperCase() + lang.slice(1)}`,
    component: () => import('@/views/GameDetailView.vue')
  })
})

// 添加博客详情页路由（动态路由）
supportedLanguages.forEach(lang => {
  const prefix = lang === 'en' ? '' : `/${lang}`
  routes.push({
    path: `${prefix}/blog/:id`,
    name: lang === 'en' ? 'BlogDetail' : `BlogDetail${lang.charAt(0).toUpperCase() + lang.slice(1)}`,
    component: () => import('@/views/BlogDetailView.vue')
  })
})

// 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由守卫：根据URL设置语言和SEO
router.beforeEach(async (to, from, next) => {
  // 从URL路径中检测语言
  const detectedLanguage = detectLanguageFromPath(to.path)

  try {
    // 加载语言文件到i18n实例
    if (detectedLanguage !== 'en') {
      await loadLocale(detectedLanguage)
    }

    // 加载语言文件到localeDataMap（用于SEO）
    await loadLocaleForSEO(detectedLanguage) // 加载当前语言的SEO数据

    // 设置语言
    i18n.global.locale.value = detectedLanguage
    localStorage.setItem('language', detectedLanguage)

    // 设置HTML的lang属性
    document.documentElement.lang = detectedLanguage

    // 设置页面SEO
    await setPageSEO(to, detectedLanguage)

    next()
  } catch (error) {
    console.error('Language switching error:', error)
    next()
  }
})

// 设置页面SEO的函数 - 根据当前语言使用对应的SEO数据
async function setPageSEO(route, language) {
  // 获取页面SEO配置
  const seoKey = getSEOKey(route.path, language)

  // 确保当前语言的数据已加载
  if (!localeDataMap[language]) {
    await loadLocaleForSEO(language)
  }

  // 确保英文数据已加载（作为后备）
  if (!localeDataMap['en']) {
    await loadLocaleForSEO('en')
  }

  // 使用当前语言的SEO数据，如果没有则使用英文数据作为后备
  const localeData = localeDataMap[language] || localeDataMap['en']
  const seoData = localeData?.seo?.[seoKey]

  if (seoData && typeof document !== 'undefined') {
    // 更新页面标题
    document.title = seoData.title

    // 更新meta标签
    updateMetaTag('description', seoData.description)
    updateMetaTag('keywords', seoData.keywords)

    // 更新Open Graph标签
    updateMetaTag('og:title', seoData.title, 'property')
    updateMetaTag('og:description', seoData.description, 'property')
    updateMetaTag('og:url', `https://thefreakcircus.org${route.path}`, 'property')

    // 更新Twitter Card标签
    updateMetaTag('twitter:title', seoData.title, 'name')
    updateMetaTag('twitter:description', seoData.description, 'name')

    // 更新Canonical URL
    updateCanonicalLink(`https://thefreakcircus.org${route.path}`)
  }
}

// 根据路径获取SEO配置键
function getSEOKey(path, language) {
  // 移除语言前缀
  let cleanPath = path
  if (language !== 'en') {
    cleanPath = path.replace(`/${language}`, '') || '/'
  }

  const pathMap = {
    '/': 'home',
    '/pierrot': 'pierrot',
    '/pierrot-coloring': 'pierrotColoring',
    '/harlequin': 'harlequin',
    '/jester': 'jester',
    '/doctor': 'doctor',
    '/ticket-taker': 'ticketTaker',
    '/wiki': 'wiki',
    '/updates': 'updates',
    '/download': 'download',
    '/games': 'games',
    '/blog': 'blog',
    '/about-us': 'about',
    '/contact-us': 'contact',
    '/privacy-policy': 'privacy',
    '/terms-of-service': 'terms',
    '/copyright': 'copyright'
  }

  return pathMap[cleanPath] || 'home'
}

// 更新meta标签的辅助函数
function updateMetaTag(name, content, attribute = 'name') {
  if (!content) return

  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

// 更新Canonical链接的辅助函数
function updateCanonicalLink(href) {
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', href)
}

export default router