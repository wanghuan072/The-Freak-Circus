import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/css/global.css'
import { createSEOPlugin } from './seo/plugin.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(createSEOPlugin())

app.mount('#app')
