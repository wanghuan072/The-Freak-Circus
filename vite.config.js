import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { seoPlugin } from './src/seo/vite-plugin.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    seoPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // 优化构建配置
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vue核心库
          if (id.includes('node_modules/vue/') && !id.includes('node_modules/vue-router') && !id.includes('node_modules/vue-i18n')) {
            return 'vue-core'
          }
          // Vue Router
          if (id.includes('node_modules/vue-router')) {
            return 'vue-router'
          }
          // Vue I18n
          if (id.includes('node_modules/vue-i18n')) {
            return 'vue-i18n'
          }
          // Pinia状态管理
          if (id.includes('node_modules/pinia')) {
            return 'pinia'
          }
          // 语言文件单独分块
          if (id.includes('/locales/')) {
            return 'locales'
          }
          // 视图组件
          if (id.includes('/views/')) {
            return 'views'
          }
          // 公共组件
          if (id.includes('/components/')) {
            return 'components'
          }
          // 其他node_modules
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    // 启用压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 1000
  },
  // 开发服务器配置
  server: {
    // 启用HTTP/2
    https: false,
    // 设置缓存
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})
