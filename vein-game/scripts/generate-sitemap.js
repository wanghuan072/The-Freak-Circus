import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://veingame.net'
}

// 支持的语言列表
const supportedLocales = ['en', 'de']

// 生成本地化路径
function createLocalizedPath(path, locale = 'en') {
  if (locale === 'en') {
    return path
  }
  return `/${locale}${path}`
}

// 基础路由配置
const baseRoutes = [
  { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/vein-guides', name: 'guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/vein-wiki', name: 'wiki', priority: 0.8, changefreq: 'weekly' },
  { path: '/vein-items', name: 'items', priority: 0.8, changefreq: 'weekly' },
  { path: '/vein-items/weapons', name: 'items-weapons', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/armor', name: 'items-armor', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/clothing', name: 'items-clothing', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/consumables', name: 'items-consumables', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/special', name: 'items-special', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/materials', name: 'items-materials', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/ammo', name: 'items-ammo', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/medical', name: 'items-medical', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/tools', name: 'items-tools', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-items/misc', name: 'items-misc', priority: 0.7, changefreq: 'weekly' },
  { path: '/vein-map', name: 'map', priority: 0.7, changefreq: 'monthly' },
  { path: '/vein-map-detail', name: 'map-detail', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy-policy', name: 'privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', name: 'terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/copyright', name: 'copyright', priority: 0.3, changefreq: 'yearly' },
  { path: '/about-us', name: 'about-us', priority: 0.3, changefreq: 'yearly' },
  { path: '/contact-us', name: 'contact-us', priority: 0.3, changefreq: 'yearly' }
]

// 动态加载数据（支持多语言）
async function loadData(locale = 'en') {
  const data = {
    guides: [],
    wiki: [],
    items: {
      weapons: [],
      armor: [],
      clothing: [],
      consumables: [],
      special: [],
      materials: [],
      ammo: [],
      medical: [],
      tools: [],
      misc: []
    }
  }

  // 加载 guides 数据
  try {
    const guideModule = await import(`../src/data/guide/${locale}.js`)
    data.guides = guideModule.guides || guideModule.default || []
  } catch (error) {
    console.warn(`Failed to load guides (${locale}):`, error.message)
    data.guides = []
  }

  // 加载 wiki 数据
  try {
    const wikiModule = await import(`../src/data/wiki/${locale}.js`)
    data.wiki = wikiModule.wiki || wikiModule.default || []
  } catch (error) {
    console.warn(`Failed to load wiki (${locale}):`, error.message)
    data.wiki = []
  }

  // 加载 items 数据
  const itemCategories = ['weapons', 'armor', 'clothing', 'consumables', 'special', 'materials', 'ammo', 'medical', 'tools', 'misc']
  
  for (const category of itemCategories) {
    try {
      const itemModule = await import(`../src/data/items/${category}/${locale}.js`)
      data.items[category] = itemModule.default || itemModule.items || []
    } catch (error) {
      console.warn(`Failed to load items/${category} (${locale}):`, error.message)
      data.items[category] = []
    }
  }

  return data
}

// 生成URL XML
function generateUrlXml(path, lastmod, priority, changefreq) {
  const roundedPriority = priority.toFixed(1)
  return `  <url>
    <loc>${seoConfig.fullDomain}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${roundedPriority}</priority>
  </url>`
}

// 生成站点地图（支持多语言）
async function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  // 加载所有语言的数据
  const allData = {}
  for (const locale of supportedLocales) {
    allData[locale] = await loadData(locale)
  }

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // 生成基础路由（为每种语言生成）
  baseRoutes.forEach(route => {
    supportedLocales.forEach(locale => {
      const localizedPath = createLocalizedPath(route.path, locale)
      sitemapXml += `\n${generateUrlXml(localizedPath, lastmod, route.priority, route.changefreq)}`
    })
  })

  // 为 guides 生成URL（为每种语言生成）
  supportedLocales.forEach(locale => {
    const guides = allData[locale].guides || []
    guides.forEach(guide => {
      if (!guide || !guide.addressBar) return
      const guidePath = createLocalizedPath(`/vein-guides${guide.addressBar}`, locale)
      sitemapXml += `\n${generateUrlXml(guidePath, guide.publishDate || lastmod, 0.8, 'monthly')}`
    })
  })

  // 为 wiki 生成URL（为每种语言生成）
  supportedLocales.forEach(locale => {
    const wikis = allData[locale].wiki || []
    wikis.forEach(wiki => {
      if (!wiki || !wiki.addressBar) return
      const wikiPath = createLocalizedPath(`/vein-wiki${wiki.addressBar}`, locale)
      sitemapXml += `\n${generateUrlXml(wikiPath, wiki.publishDate || lastmod, 0.7, 'monthly')}`
    })
  })

  // 为 items 生成URL（为每种语言生成）
  const itemCategories = ['weapons', 'armor', 'clothing', 'consumables', 'special', 'materials', 'ammo', 'medical', 'tools', 'misc']
  
  supportedLocales.forEach(locale => {
    for (const category of itemCategories) {
      const items = allData[locale].items[category] || []
      items
        .filter(item => item && item.showDetail !== false && item.addressBar)
        .forEach(item => {
          const itemPath = createLocalizedPath(`/vein-items/${category}${item.addressBar}`, locale)
          sitemapXml += `\n${generateUrlXml(itemPath, item.publishDate || lastmod, 0.6, 'monthly')}`
        })
    }
  })

  sitemapXml += `\n</urlset>`
  return sitemapXml
}

// 生成并保存站点地图
async function main() {
  try {
    console.log('📦 Loading data for all locales...')
    
    console.log('🗺️  Generating multilingual sitemap...')
    const sitemapContent = await generateSitemap()
    
    const publicPath = path.join(__dirname, '../public/sitemap.xml')
    const distPath = path.join(__dirname, '../dist/sitemap.xml')

    // 确保public目录存在
    const publicDir = path.dirname(publicPath)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(publicPath, sitemapContent, 'utf8')
    console.log('✅ Generated sitemap.xml in public folder')

    // 如果dist目录存在，也复制一份
    if (fs.existsSync(path.join(__dirname, '../dist'))) {
      fs.writeFileSync(distPath, sitemapContent, 'utf8')
      console.log('✅ Generated sitemap.xml in dist folder')
    }

    const urlCount = (sitemapContent.match(/<url>/g) || []).length
    console.log(`✅ Total URLs in sitemap: ${urlCount}`)
    
    // 统计各语言的URL数量
    const enUrls = sitemapContent.match(/<loc>https:\/\/veingame\.net\/[^<]*<\/loc>/g) || []
    const enUrlCount = enUrls.filter(url => !url.includes('/de/')).length
    const deUrlCount = enUrls.filter(url => url.includes('/de/')).length
    
    console.log('\n📊 URLs by language:')
    console.log(`   English (en): ${enUrlCount}`)
    console.log(`   German (de): ${deUrlCount}`)
    console.log(`   Total: ${urlCount}`)
    
    // 验证生成的站点地图
    const validation = sitemapContent.includes('<?xml') && 
                      sitemapContent.includes('<urlset') && 
                      sitemapContent.includes('</urlset>')
    
    if (validation) {
      console.log('\n✅ Sitemap validation passed')
    } else {
      console.warn('\n⚠️  Sitemap validation failed')
    }
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

main()

