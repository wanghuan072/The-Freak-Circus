import { generateSitemap } from './sitemap.js'
import { generateRobots } from './robots.js'
import fs from 'fs'
import path from 'path'

// Vite插件：自动生成SEO文件
export function seoPlugin() {
    return {
        name: 'seo-plugin',
        configureServer(server) {
            // 开发环境：动态生成站点地图和robots.txt
            server.middlewares.use('/sitemap.xml', (req, res, next) => {
                const sitemapContent = generateSitemap()
                res.setHeader('Content-Type', 'application/xml')
                res.end(sitemapContent)
            })

            server.middlewares.use('/robots.txt', (req, res, next) => {
                const robotsContent = generateRobots()
                res.setHeader('Content-Type', 'text/plain')
                res.end(robotsContent)
            })
        },
        writeBundle() {
            // 生产环境：生成站点地图
            const sitemapContent = generateSitemap()
            const sitemapPath = path.resolve(process.cwd(), 'dist/sitemap.xml')
            fs.writeFileSync(sitemapPath, sitemapContent, 'utf8')
            console.log('✅ Generated sitemap.xml')

            // 生成robots.txt
            const robotsContent = generateRobots()
            const robotsPath = path.resolve(process.cwd(), 'dist/robots.txt')
            fs.writeFileSync(robotsPath, robotsContent, 'utf8')
            console.log('✅ Generated robots.txt')
        }
    }
}
