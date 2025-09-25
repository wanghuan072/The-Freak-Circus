import { seoConfig } from './config.js'

// 路由配置（基于现有的路由结构）
const routes = [
    { path: '/', name: 'home' },
    { path: '/pierrot', name: 'pierrot' },
    { path: '/harlequin', name: 'harlequin' },
    { path: '/wiki', name: 'wiki' },
    { path: '/updates', name: 'updates' },
    { path: '/download', name: 'download' },
    { path: '/about-us', name: 'about' },
    { path: '/contact-us', name: 'contact' },
    { path: '/privacy-policy', name: 'privacy' },
    { path: '/terms-of-service', name: 'terms' },
    { path: '/copyright', name: 'copyright' }
]

// 获取路由配置（通用函数）
function getRouteConfig(path) {
    const route = routes.find(r => r.path === path) || { name: 'home' }
    return {
        priority: seoConfig.priorities[route.name] || 0.5,
        changefreq: seoConfig.changefreq[route.name] || 'monthly'
    }
}

// 生成URL（通用函数）
function generateUrl(path, lang = 'en') {
    return lang === 'en'
        ? `${seoConfig.fullDomain}${path}`
        : `${seoConfig.fullDomain}/${lang}${path}`
}

// 生成单个URL的XML（通用函数）
function generateUrlXml(path, lang = 'en', lastmod = new Date().toISOString().split('T')[0], includeHreflang = false) {
    const url = generateUrl(path, lang)
    const config = getRouteConfig(path)

    let xml = `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>`

    if (includeHreflang) {
        xml += `\n${generateHreflangXml(path)}`
    }

    xml += `\n  </url>`
    return xml
}

// 生成hreflang标签（通用函数）
function generateHreflangXml(path) {
    let hreflangXml = ''

    seoConfig.supportedLanguages.forEach(lang => {
        const url = lang === 'en'
            ? `${seoConfig.fullDomain}${path}`
            : `${seoConfig.fullDomain}/${lang}${path}`

        hreflangXml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>\n`
    })

    // 添加x-default
    const defaultUrl = `${seoConfig.fullDomain}${path}`
    hreflangXml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`

    return hreflangXml
}

// 生成站点地图XML（通用函数）
function generateSitemapXml(includeHreflang = false) {
    const lastmod = new Date().toISOString().split('T')[0]

    const xmlns = includeHreflang
        ? 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml"'
        : 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'

    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${xmlns}>`

    // 为每个路由和每种语言生成URL
    routes.forEach(route => {
        seoConfig.supportedLanguages.forEach(lang => {
            sitemapXml += `\n${generateUrlXml(route.path, lang, lastmod, includeHreflang)}`
        })
    })

    sitemapXml += `\n</urlset>`
    return sitemapXml
}

// 生成完整的站点地图XML（简化版本，只有4个基本字段）
export function generateSitemap() {
    return generateSitemapXml(false)
}

// 生成带hreflang的站点地图XML（多语言版本）
export function generateSitemapWithHreflang() {
    return generateSitemapXml(true)
}

// 生成多语言站点地图索引
export function generateSitemapIndex() {
    const lastmod = new Date().toISOString().split('T')[0]

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${seoConfig.fullDomain}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`
}

// 生成特定语言的站点地图
export function generateLanguageSitemap(language) {
    const lastmod = new Date().toISOString().split('T')[0]

    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

    routes.forEach(route => {
        sitemapXml += `\n${generateUrlXml(route.path, language, lastmod, false)}`
    })

    sitemapXml += `\n</urlset>`
    return sitemapXml
}
