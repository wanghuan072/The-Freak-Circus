// SEO插件 - 处理全局SEO更新
export function createSEOPlugin() {
  return {
    install(app, options) {
      // 在应用实例上添加SEO方法
      app.config.globalProperties.$updateSEO = (seoData) => {
        // 更新页面标题
        if (seoData.title) {
          document.title = seoData.title
        }
        
        // 更新meta标签
        updateMetaTag('description', seoData.description)
        updateMetaTag('keywords', seoData.keywords)
        updateMetaTag('author', seoData.author)
        
        // Open Graph标签
        updateMetaTag('og:title', seoData.title, 'property')
        updateMetaTag('og:description', seoData.description, 'property')
        updateMetaTag('og:image', seoData.image, 'property')
        updateMetaTag('og:type', seoData.type, 'property')
        
        // Twitter Card标签
        updateMetaTag('twitter:title', seoData.title, 'name')
        updateMetaTag('twitter:description', seoData.description, 'name')
        updateMetaTag('twitter:image', seoData.image, 'name')
        
        // 更新Canonical URL
        updateCanonicalLink(seoData.canonicalUrl)
      }
    }
  }
}

// 更新单个meta标签
function updateMetaTag(name, content, attribute = 'name') {
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
function updateCanonicalLink(url) {
  if (!url) return
  
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}

