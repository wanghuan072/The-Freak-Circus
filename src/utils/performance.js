// 性能优化工具函数

/**
 * 预加载关键资源
 * @param {string[]} resources - 资源URL数组
 */
export function preloadCriticalResources(resources) {
  resources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    link.as = resource.endsWith('.css') ? 'style' : 'image'
    if (resource.endsWith('.webp')) {
      link.fetchPriority = 'high'
    }
    document.head.appendChild(link)
  })
}