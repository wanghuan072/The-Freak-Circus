import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 性能优化：预加载关键资源
const preloadCriticalResources = (resources) => {
    resources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = resource
        link.fetchpriority = 'high'
        document.head.appendChild(link)
    })
}

// 延迟导入工具函数，避免阻塞主线程
const initializeApp = async () => {
    // 预加载关键资源
    preloadCriticalResources([
        '/images/home_img_01.webp',
        '/images/home_img_02.webp',
        '/images/game-play.webp'
    ])

    const { localizeAllLinks, watchLanguageChange } = await import('./utils/localizeLinks.js')

    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(i18n)

    // 性能优化：使用requestAnimationFrame延迟应用挂载
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