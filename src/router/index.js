import { createRouter, createWebHistory } from 'vue-router'
import { useSEO } from '@/seo'

// 页面配置
const pageConfigs = [
  { path: '/', component: 'HomeView', name: 'Home' },
  { path: '/pierrot', component: 'PierrotView', name: 'Pierrot' },
  { path: '/harlequin', component: 'HarlequinView', name: 'Harlequin' },
  { path: '/wiki', component: 'WikiView', name: 'Wiki' },
  { path: '/updates', component: 'UpdatesView', name: 'Updates' },
  { path: '/download', component: 'DownloadView', name: 'Download' },
  { path: '/privacy-policy', component: 'PrivacyPolicyView', name: 'PrivacyPolicy' },
  { path: '/terms-of-service', component: 'TermsOfServiceView', name: 'TermsOfService' },
  { path: '/copyright', component: 'CopyrightView', name: 'Copyright' },
  { path: '/about-us', component: 'AboutUsView', name: 'AboutUs' },
  { path: '/contact-us', component: 'ContactUsView', name: 'ContactUs' }
]

// 支持的语言列表
const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt'] // 添加新语言时只需修改这里

// 动态生成路由
function generateRoutes() {
  const routes = []

  // 为每种语言生成路由
  supportedLanguages.forEach(lang => {
    pageConfigs.forEach(page => {
      const isDefaultLang = lang === 'en'
      const path = isDefaultLang ? page.path : `/${lang}${page.path}`
      const name = isDefaultLang ? page.name : `${page.name}${lang.charAt(0).toUpperCase() + lang.slice(1)}`

      routes.push({
        path,
        name,
        component: () => import(`@/views/${page.component}.vue`)
      })
    })
  })

  return routes
}

// 生成路由配置
const routes = generateRoutes()

// 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 检测URL中的语言
function detectLanguageFromPath(path) {
  for (const lang of supportedLanguages) {
    if (lang === 'en') continue // 英文是默认语言，不需要前缀
    if (path.startsWith(`/${lang}`)) {
      return lang
    }
  }
  return 'en' // 默认返回英文
}

// 路由守卫：根据URL设置语言和SEO
router.beforeEach(async (to, from, next) => {
  // 从URL路径中检测语言
  const detectedLanguage = detectLanguageFromPath(to.path)

  try {
    // 导入i18n实例并设置语言
    const { default: i18n } = await import('@/i18n')

    // 强制设置语言
    i18n.global.locale.value = detectedLanguage
    localStorage.setItem('language', detectedLanguage)

    // 设置HTML的lang属性
    document.documentElement.lang = detectedLanguage

    // 设置SEO
    setPageSEO(to, detectedLanguage)

    next()
  } catch (error) {
    console.error('Language switching error:', error)
    next()
  }
})

// 设置页面SEO的函数
function setPageSEO(route, language) {
  // 获取页面SEO配置
  const seoKey = getSEOKey(route.path, language)

  // 动态导入语言文件获取SEO数据
  import(`@/locales/${language}.json`).then((localeData) => {
    const seoData = localeData.default?.seo?.[seoKey]

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
  })
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
    '/harlequin': 'harlequin',
    '/wiki': 'wiki',
    '/updates': 'updates',
    '/download': 'download',
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