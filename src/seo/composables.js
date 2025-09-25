import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { seoConfig } from './config.js'

// SEO composable
export function useSEO() {
    const route = useRoute()
    const router = useRouter()
    const { t, locale } = useI18n()

    // 当前页面的SEO数据
    const currentSEO = ref({})

    // 获取当前语言
    const currentLanguage = computed(() => {
        return route.path.startsWith('/zh') ? 'zh' : 'en'
    })

    // 获取当前页面路径（去除语言前缀）
    const currentPath = computed(() => {
        const path = route.path
        return path.startsWith('/zh') ? path.substring(3) || '/' : path
    })

    // 获取Canonical URL
    const canonicalUrl = computed(() => {
        const baseUrl = currentLanguage.value === 'zh'
            ? `${seoConfig.fullDomain}/zh${currentPath.value}`
            : `${seoConfig.fullDomain}${currentPath.value}`
        return baseUrl
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
        updateMetaTag('og:site_name', 'The Freak Circus', 'property')

        // Twitter Card标签
        updateMetaTag('twitter:card', 'summary_large_image', 'name')
        updateMetaTag('twitter:title', seo.title, 'name')
        updateMetaTag('twitter:description', seo.description, 'name')
        updateMetaTag('twitter:image', seo.image, 'name')

        // Canonical URL
        updateCanonicalLink()

        // 语言标签
        updateLanguageTags()
    }

    // 更新单个meta标签
    const updateMetaTag = (name, content, attribute = 'name') => {
        if (!content) return

        let tag = document.querySelector(`meta[${attribute}="${name}"]`)
        if (!tag) {
            tag = document.createElement('meta')
            tag.setAttribute(attribute, name)
            document.head.appendChild(tag)
        }
        tag.setAttribute('content', content)
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

    // 更新语言标签
    const updateLanguageTags = () => {
        // 更新html lang属性
        document.documentElement.lang = currentLanguage.value

        // 添加hreflang标签
        updateHreflangTags()
    }

    // 更新hreflang标签
    const updateHreflangTags = () => {
        // 移除现有的hreflang标签
        const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]')
        existingHreflang.forEach(tag => tag.remove())

        // 为每种支持的语言添加hreflang标签
        seoConfig.supportedLanguages.forEach(lang => {
            const href = lang === 'zh'
                ? `${seoConfig.fullDomain}/zh${currentPath.value}`
                : `${seoConfig.fullDomain}${currentPath.value}`

            const link = document.createElement('link')
            link.setAttribute('rel', 'alternate')
            link.setAttribute('hreflang', lang)
            link.setAttribute('href', href)
            document.head.appendChild(link)
        })

        // 添加x-default
        const defaultHref = `${seoConfig.fullDomain}${currentPath.value}`
        const defaultLink = document.createElement('link')
        defaultLink.setAttribute('rel', 'alternate')
        defaultLink.setAttribute('hreflang', 'x-default')
        defaultLink.setAttribute('href', defaultHref)
        document.head.appendChild(defaultLink)
    }

    // 生成结构化数据
    const generateStructuredData = (pageType = 'WebPage') => {
        const baseData = {
            '@context': 'https://schema.org',
            '@type': pageType,
            name: currentSEO.value.title,
            description: currentSEO.value.description,
            url: canonicalUrl.value,
            inLanguage: currentLanguage.value,
            publisher: {
                '@type': 'Organization',
                name: 'The Freak Circus',
                url: seoConfig.fullDomain
            }
        }

        // 根据页面类型添加特定数据
        if (pageType === 'VideoGame') {
            baseData.genre = 'Visual Novel'
            baseData.gamePlatform = ['PC', 'Mac', 'Linux']
            baseData.operatingSystem = ['Windows', 'macOS', 'Linux']
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
        currentLanguage,
        currentPath,
        canonicalUrl,
        setSEO,
        updateMetaTags,
        generateStructuredData,
        addStructuredData
    }
}
