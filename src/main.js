import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { nextTick } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { localizeAllLinks } from './utils/localizeLinks.js'
import { preloadCriticalResources } from './utils/performance.js'

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

// 路由变化后处理链接本地化
router.afterEach(() => {
  nextTick(() => {
    localizeAllLinks()
  })
})

app.mount('#app')