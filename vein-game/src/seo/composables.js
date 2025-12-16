import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import i18n from '../i18n'
import { seoConfig } from './config.js'

/**
 * 加载数据模块（用于 SEO）
 */
const loadDataForSEO = async (dataType, category = null, lang = 'en') => {
  try {
    if (dataType === 'items' && category) {
      const module = await import(`../data/items/${category}/${lang}.js`).catch(() => 
        import(`../data/items/${category}/en.js`)
      )
      return module
    } else if (dataType === 'guide') {
      const module = await import(`../data/guide/${lang}.js`).catch(() => 
        import(`../data/guide/en.js`)
      )
      return module
    } else if (dataType === 'wiki') {
      const module = await import(`../data/wiki/${lang}.js`).catch(() => 
        import(`../data/wiki/en.js`)
      )
      return module
    } else {
      throw new Error(`Unknown data type: ${dataType}`)
    }
  } catch (error) {
    console.warn(`Failed to load data for SEO: ${dataType}${category ? `/${category}` : ''} (lang: ${lang})`, error)
    return null
  }
}

// SEO composable
export function useSEO() {
  const route = useRoute()

  // 当前页面的SEO数据
  const currentSEO = ref({})

  // 获取当前页面路径
  const currentPath = computed(() => {
    return route.path
  })

  // 获取Canonical URL
  const canonicalUrl = computed(() => {
    return `${seoConfig.fullDomain}${currentPath.value}`
  })

  // 设置页面SEO数据
  const setSEO = (seoData) => {
    currentSEO.value = {
      ...seoConfig.defaults,
      ...seoData
    }
    updateMetaTags()
  }

  // 更新HTML meta标签
  const updateMetaTags = () => {
    if (typeof document === 'undefined') return

    const seo = currentSEO.value

    // 更新title
    document.title = seo.title || seoConfig.defaults.title

    // 更新或创建meta标签
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author)

    // Open Graph标签
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image, 'property')
    updateMetaTag('og:url', canonicalUrl.value, 'property')
    updateMetaTag('og:type', seo.type, 'property')
    updateMetaTag('og:site_name', 'VEIN Game Community', 'property')

    // Twitter Card标签
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image, 'name')
    updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

    // Canonical URL
    updateCanonicalLink()
  }

  // 更新单个meta标签
  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return

    // 查找现有标签
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (tag) {
      // 如果标签存在，直接更新content
      tag.setAttribute('content', content)
    } else {
      // 如果标签不存在，创建新标签
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      tag.setAttribute('content', content)
      document.head.appendChild(tag)
    }
  }

  // 更新Canonical链接
  const updateCanonicalLink = () => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl.value)
  }

  // 生成结构化数据
  const generateStructuredData = (pageType = 'WebPage') => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': pageType,
      name: currentSEO.value.title,
      description: currentSEO.value.description,
      url: canonicalUrl.value,
      publisher: {
        '@type': 'Organization',
        name: 'VEIN Game Community',
        url: seoConfig.fullDomain,
        logo: {
          '@type': 'ImageObject',
          url: `${seoConfig.fullDomain}/images/logo.png`
        },
        sameAs: [
          `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
          `https://facebook.com/${seoConfig.social.facebook}`,
          `https://instagram.com/${seoConfig.social.instagram}`,
          `https://discord.gg/${seoConfig.social.discord}`
        ]
      }
    }

    // 根据页面类型添加特定数据
    if (pageType === 'VideoGame') {
      baseData.genre = 'Survival Horror'
      baseData.gamePlatform = ['PC']
      baseData.operatingSystem = ['Windows']
      baseData.applicationCategory = 'Game'
    }

    if (pageType === 'Article') {
      baseData.author = {
        '@type': 'Organization',
        name: 'VEIN Game Community'
      }
      baseData.datePublished = new Date().toISOString()
      baseData.dateModified = new Date().toISOString()
    }

    return baseData
  }

  // 添加结构化数据到页面
  const addStructuredData = (data) => {
    if (typeof document === 'undefined') return

    // 移除现有的结构化数据
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // 添加新的结构化数据
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  return {
    currentSEO,
    currentPath,
    canonicalUrl,
    setSEO,
    updateMetaTags,
    generateStructuredData,
    addStructuredData
  }
}

// 路由名称到SEO key的映射
const routeToSeoKey = {
  'home': 'home',
  'guides': 'guides',
  'guide-detail': 'guideDetail',
  'wiki': 'wiki',
  'wiki-detail': 'wikiDetail',
  'items': 'items',
  'items-weapons': 'itemsWeapons',
  'items-armor': 'itemsArmor',
  'items-clothing': 'itemsClothing',
  'items-consumables': 'itemsConsumables',
  'items-special': 'itemsSpecial',
  'items-materials': 'itemsMaterials',
  'items-ammo': 'itemsAmmo',
  'items-medical': 'itemsMedical',
  'items-tools': 'itemsTools',
  'items-misc': 'itemsMisc',
  'items-detail': 'itemsDetail',
  'map': 'map',
  'map-detail': 'mapDetail',
  'search': 'search',
  'privacy-policy': 'privacyPolicy',
  'terms-of-service': 'termsOfService',
  'copyright': 'copyright',
  'about-us': 'aboutUs',
  'contact-us': 'contactUs'
}


// 动态路由名称集合（需要从数据加载 SEO 的路由）
const dynamicRouteNames = new Set([
  'guide-detail',
  'wiki-detail',
  'items-detail'
])

// 自动SEO composable - 监听路由变化自动设置SEO
export function useAutoSEO() {
  const { setSEO, generateStructuredData, addStructuredData } = useSEO()
  const route = useRoute()
  const { locale } = useI18n()
  
  // 处理SEO的函数
  const handleSEO = async () => {
    const routeName = route.name
    // 从路由名称中提取基础名称（移除语言后缀，如 'home-en' -> 'home', 'items-weapons-de' -> 'items-weapons'）
    let baseRouteName = routeName
    if (typeof routeName === 'string') {
      // 检查是否是带语言后缀的路由名称（以 '-en' 或 '-de' 结尾）
      const supportedLocales = ['en', 'de']
      for (const loc of supportedLocales) {
        if (routeName.endsWith(`-${loc}`)) {
          baseRouteName = routeName.slice(0, -(loc.length + 1)) // 移除 '-en' 或 '-de'
          break
        }
      }
    }
    // 如果提取后的名称不在映射中，使用原始名称
    const actualRouteName = routeToSeoKey[baseRouteName] ? baseRouteName : routeName
    const seoKey = routeToSeoKey[actualRouteName]

    let finalSEOData = {
      ...seoConfig.defaults
    }
    let hasSeoData = false

    // 先从 i18n 获取静态页面的 TDK
    if (seoKey && !dynamicRouteNames.has(actualRouteName)) {
      try {
        // 直接访问 i18n 的 messages，避免警告
        const messages = i18n.global.messages.value || i18n.global.messages
        const currentLocale = locale.value || 'en'
        const localeMessages = messages[currentLocale]
        
        if (localeMessages && localeMessages.tdk && localeMessages.tdk[seoKey]) {
          const tdk = localeMessages.tdk[seoKey]
          if (tdk && typeof tdk === 'object' && tdk.title) {
            finalSEOData = {
              ...finalSEOData,
              title: tdk.title,
              description: tdk.description || finalSEOData.description,
              keywords: tdk.keywords || finalSEOData.keywords
            }
            hasSeoData = true
          }
        } else {
          if (import.meta.env.DEV) {
            console.warn(`TDK not found for route: ${routeName} (base: ${actualRouteName}, seoKey: ${seoKey}) in locale: ${currentLocale}`)
          }
        }
      } catch (error) {
        // 如果 i18n 中没有对应的 TDK，输出警告
        if (import.meta.env.DEV) {
          console.warn(`Failed to get TDK for route: ${routeName}:`, error)
        }
      }
    }

    if (dynamicRouteNames.has(actualRouteName)) {
      try {
        let item = null
        
        const currentLang = locale.value || 'en'
        
        if (actualRouteName === 'guide-detail') {
          // 加载 guide 数据
          const module = await loadDataForSEO('guide', null, currentLang)
          if (module?.default || module?.guides) {
            const guides = module.default || module.guides || []
            const searchId = route.params.id || ''
            const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
            
            item = guides.find(g => {
              if (!g.addressBar) return false
              const cleanAddressBar = g.addressBar.replace(/^\//, '').replace(/\/$/, '')
              return cleanAddressBar === cleanSearchId
            })
          }
        } else if (actualRouteName === 'wiki-detail') {
          // 加载 wiki 数据
          const module = await loadDataForSEO('wiki', null, currentLang)
          if (module?.default || module?.wiki) {
            const wikis = module.default || module.wiki || []
            const searchId = route.params.id || ''
            const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
            
            item = wikis.find(w => {
              if (!w.addressBar) return false
              const cleanAddressBar = w.addressBar.replace(/^\//, '').replace(/\/$/, '')
              return cleanAddressBar === cleanSearchId
            })
          }
        } else if (actualRouteName === 'items-detail') {
          // 加载 items 数据
          const category = route.params.category || 'weapons'
          const module = await loadDataForSEO('items', category, currentLang)
          if (module?.default) {
            const items = module.default || []
            const searchId = route.params.id || ''
            const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
            
            item = items.find(i => {
              if (!i.addressBar) return false
              const cleanAddressBar = i.addressBar.replace(/^\//, '').replace(/\/$/, '')
              return cleanAddressBar === cleanSearchId
            })
          }
        }
        
        if (item) {
          if (item.seo) {
            finalSEOData = {
              ...finalSEOData,
              title: item.seo.title || item.title || finalSEOData.title,
              description: item.seo.description || item.description || finalSEOData.description,
              keywords: item.seo.keywords || finalSEOData.keywords,
              image: item.imageUrl || finalSEOData.image,
              type: 'article'
            }
            hasSeoData = true
          } else {
            finalSEOData = {
              ...finalSEOData,
              title: item.title ? `${item.title} - VEIN Game` : finalSEOData.title,
              description: item.description || finalSEOData.description,
              image: item.imageUrl || finalSEOData.image,
              type: 'article'
            }
            hasSeoData = !!item.description || !!item.title
          }
        }
      } catch (error) {
        console.warn('Failed to load dynamic SEO data:', error)
      }
    }

    // 即使没有从 i18n 获取到数据，也要设置 SEO（使用默认值或已获取的数据）
    setSEO(finalSEOData)
    
    // 添加结构化数据
    const structuredData = generateStructuredData(finalSEOData.type === 'article' ? 'Article' : 'WebPage')
    addStructuredData(structuredData)
  }
  
  // 监听路由变化
  watch(
    [() => route.fullPath, () => route.name],
    async () => {
      await handleSEO()
    },
    { immediate: true }
  )
}

