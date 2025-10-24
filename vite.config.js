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
    // 简化的构建配置
    rollupOptions: {
      output: {
        // 基础代码分割 - 只分离第三方库
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    // 使用默认压缩
    minify: 'esbuild',
    // 设置合理的chunk大小警告限制
    chunkSizeWarningLimit: 1000,
    // 启用CSS代码分割
    cssCodeSplit: true,
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
