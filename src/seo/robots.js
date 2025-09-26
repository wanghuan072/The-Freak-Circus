import { seoConfig } from './config.js'

// 生成robots.txt内容
export function generateRobots() {
    return `User-agent: *
Allow: /

# Allow all search engines to crawl
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Sitemap location
Sitemap: ${seoConfig.fullDomain}/sitemap.xml

# Optional crawl delay (some bots may ignore this)
Crawl-delay: 1

# Disallow specific file types if needed
# Disallow: *.pdf$
# Disallow: *.doc$
# Disallow: *.docx$

# Disallow specific directories if needed
# Disallow: /admin/
# Disallow: /private/
`
}
