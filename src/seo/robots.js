import { seoConfig } from './config.js'

// 生成robots.txt内容
export function generateRobots() {
    return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${seoConfig.fullDomain}/sitemap.xml
`
}
