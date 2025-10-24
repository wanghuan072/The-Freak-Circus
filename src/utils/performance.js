// 性能优化工具函数
import { nextTick } from 'vue'

/**
 * 延迟执行函数，避免阻塞主线程
 * @param {Function} fn - 要执行的函数
 * @param {number} delay - 延迟时间（毫秒）
 */
export function defer(fn, delay = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      fn()
      resolve()
    }, delay)
  })
}

/**
 * 使用requestAnimationFrame优化DOM操作
 * @param {Function} fn - 要执行的函数
 */
export function raf(fn) {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      fn()
      resolve()
    })
  })
}

/**
 * 批量DOM操作，减少重排重绘
 * @param {Function} fn - 包含DOM操作的函数
 */
export async function batchDOMOperations(fn) {
  // 使用requestIdleCallback在浏览器空闲时执行
  if ('requestIdleCallback' in window) {
    return new Promise(resolve => {
      requestIdleCallback(() => {
        fn()
        resolve()
      })
    })
  } else {
    // 降级到setTimeout
    return defer(fn, 1)
  }
}

/**
 * 图片懒加载优化
 * @param {string} selector - 图片选择器
 */
export function setupLazyLoading(selector = 'img[data-src]') {
  if (!('IntersectionObserver' in window)) {
    // 降级处理
    document.querySelectorAll(selector).forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute('data-src')
      }
    })
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        if (img.dataset.src) {
          // 预加载图片
          const imageLoader = new Image()
          imageLoader.onload = () => {
            img.src = img.dataset.src
            img.classList.add('loaded')
            img.removeAttribute('data-src')
          }
          imageLoader.src = img.dataset.src
        }
        observer.unobserve(img)
      }
    })
  }, {
    rootMargin: '50px',
    threshold: 0.1
  })

  document.querySelectorAll(selector).forEach(img => {
    observer.observe(img)
  })
}

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
    document.head.appendChild(link)
  })
}

/**
 * 防抖函数
 * @param {Function} fn - 要防抖的函数
 * @param {number} delay - 延迟时间
 */
export function debounce(fn, delay = 300) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

/**
 * 节流函数
 * @param {Function} fn - 要节流的函数
 * @param {number} delay - 延迟时间
 */
export function throttle(fn, delay = 300) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      fn.apply(this, args)
    }
  }
}

/**
 * 性能监控
 */
export class PerformanceMonitor {
  constructor() {
    this.metrics = {}
  }

  mark(name) {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(name)
    }
  }

  measure(name, startMark, endMark) {
    if ('performance' in window && 'measure' in performance) {
      performance.measure(name, startMark, endMark)
      const measure = performance.getEntriesByName(name)[0]
      this.metrics[name] = measure.duration
    }
  }

  getMetrics() {
    return this.metrics
  }
}

/**
 * 优化Vue组件的性能
 * @param {Object} component - Vue组件选项
 */
export function optimizeComponent(component) {
  // 添加性能优化的mixin
  const performanceMixin = {
    mounted() {
      // 组件挂载后延迟非关键操作
      nextTick(() => {
        this.$nextTick(() => {
          // 延迟执行非关键初始化
          setTimeout(() => {
            this.onDelayedMount?.()
          }, 100)
        })
      })
    }
  }

  if (component.mixins) {
    component.mixins.push(performanceMixin)
  } else {
    component.mixins = [performanceMixin]
  }

  return component
}