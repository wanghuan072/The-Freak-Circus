import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import gamesEn from '../src/data/en/games.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
    fullDomain: 'https://thefreakcircus.org',
    supportedLanguages: ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']
}

// 路由配置
const routes = [
    { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
    { path: '/pierrot', name: 'pierrot', priority: 0.8, changefreq: 'weekly' },
    { path: '/pierrot-coloring', name: 'pierrotColoring', priority: 0.7, changefreq: 'monthly' },
    { path: '/harlequin', name: 'harlequin', priority: 0.8, changefreq: 'weekly' },
    { path: '/wiki', name: 'wiki', priority: 0.7, changefreq: 'weekly' },
    { path: '/updates', name: 'updates', priority: 0.6, changefreq: 'weekly' },
    { path: '/download', name: 'download', priority: 0.9, changefreq: 'weekly' },
    { path: '/games', name: 'games', priority: 0.8, changefreq: 'weekly' },
    { path: '/about-us', name: 'about', priority: 0.5, changefreq: 'yearly' },
    { path: '/contact-us', name: 'contact', priority: 0.5, changefreq: 'yearly' },
    { path: '/privacy-policy', name: 'privacy', priority: 0.3, changefreq: 'yearly' },
    { path: '/terms-of-service', name: 'terms', priority: 0.3, changefreq: 'yearly' },
    { path: '/copyright', name: 'copyright', priority: 0.3, changefreq: 'yearly' }
]

// 生成URL
function generateUrl(path, lang = 'en') {
    return lang === 'en'
        ? `${seoConfig.fullDomain}${path}`
        : `${seoConfig.fullDomain}/${lang}${path}`
}

// 生成单个URL的XML
function generateUrlXml(path, lang, lastmod, priority, changefreq) {
    const url = generateUrl(path, lang)

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

// 生成站点地图
function generateSitemap() {
    const lastmod = new Date().toISOString().split('T')[0]

    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

    // 为每个路由和每种语言生成URL
    routes.forEach(route => {
        seoConfig.supportedLanguages.forEach(lang => {
            sitemapXml += `\n${generateUrlXml(route.path, lang, lastmod, route.priority, route.changefreq)}`
        })
    })

    // 为每个游戏和每种语言生成URL
    const games = gamesEn?.default || gamesEn
    if (games && Array.isArray(games)) {
        games.forEach(game => {
            seoConfig.supportedLanguages.forEach(lang => {
                const gamePath = `/games/${game.addressBar}`
                sitemapXml += `\n${generateUrlXml(gamePath, lang, game.publishDate || lastmod, 0.9, 'monthly')}`
            })
        })
    }

    sitemapXml += `\n</urlset>`
    return sitemapXml
}

// 生成并保存站点地图
try {
    const sitemapContent = generateSitemap()
    const publicPath = path.join(__dirname, '../public/sitemap.xml')
    const distPath = path.join(__dirname, '../dist/sitemap.xml')

    fs.writeFileSync(publicPath, sitemapContent, 'utf8')
    console.log('✅ Generated sitemap.xml in public folder')

    // 如果dist目录存在，也复制一份
    if (fs.existsSync(path.join(__dirname, '../dist'))) {
        fs.writeFileSync(distPath, sitemapContent, 'utf8')
        console.log('✅ Generated sitemap.xml in dist folder')
    }

    console.log(`✅ Total URLs in sitemap: ${(sitemapContent.match(/<url>/g) || []).length}`)
} catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
}

