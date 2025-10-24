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
        manualChunks: {
          // 将Vue相关库分离
          vue: ['vue', 'vue-router', 'vue-i18n'],
          // 将工具库分离
          utils: ['pinia']
        }
      }
    },
    // 启用压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // 移除未使用的代码
        unused: true,
        dead_code: true
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
