// 此文件已废弃，站点地图使用静态文件 public/sitemap.xml
// 请使用 scripts/generate-sitemap.js 和 npm run generate-sitemap 命令生成站点地图
// 
// 此文件保留只是为了兼容性，返回空内容

export function generateSitemap() {
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<!-- 站点地图已改为静态文件，位于 public/sitemap.xml -->\n<!-- 使用 npm run generate-sitemap 生成 -->\n</urlset>'
}

export function generateSitemapWithHreflang() {
    return generateSitemap()
}

export function generateSitemapIndex() {
    return '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</sitemapindex>'
}

export function generateLanguageSitemap() {
    return generateSitemap()
}
