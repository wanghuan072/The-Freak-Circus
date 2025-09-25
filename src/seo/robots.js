import { seoConfig } from './config.js'

// 生成robots.txt内容
export function generateRobots() {
    return `User-agent: *
Allow: /

# 允许所有搜索引擎爬取
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# 站点地图位置
Sitemap: ${seoConfig.fullDomain}/sitemap.xml

# 爬取延迟（可选）
Crawl-delay: 1

# 禁止爬取的文件类型（如果有的话）
# Disallow: *.pdf$
# Disallow: *.doc$
# Disallow: *.docx$

# 禁止爬取的目录（如果有的话）
# Disallow: /admin/
# Disallow: /private/
`
}
