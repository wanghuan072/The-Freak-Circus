import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 延迟导入工具函数，避免循环依赖
const initializeApp = async () => {
  const { localizeAllLinks, watchLanguageChange } = await import('./utils/localizeLinks.js')
  const { preloadCriticalResources } = await import('./utils/performance.js')

  // 预加载关键资源
  preloadCriticalResources([
    '/images/home_img_01.webp',
    '/images/game-play.webp',
    '/images/logo.webp'
  ])

  const app = createApp(App)

  app.use(createPinia())
  app.use(router)
  app.use(i18n)

  // 性能优化：延迟非关键初始化
  requestAnimationFrame(() => {
    app.mount('#app')
    
    // 页面加载完成后处理所有链接
    document.addEventListener('DOMContentLoaded', () => {
      localizeAllLinks()
      watchLanguageChange()
    })

    // 路由变化后也处理链接
    router.afterEach(() => {
      localizeAllLinks()
    })
  })
}

// 立即执行初始化
initializeApp().catch(console.error)