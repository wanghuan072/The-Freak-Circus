import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { localizeAllLinks, watchLanguageChange } from './utils/localizeLinks.js'
import './assets/css/public.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

// 页面加载完成后处理所有链接
document.addEventListener('DOMContentLoaded', () => {
    localizeAllLinks()
    watchLanguageChange()
})

// 路由变化后也处理链接
router.afterEach(() => {
    // 立即处理链接，不延迟
    localizeAllLinks()
})