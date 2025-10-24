import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // 优化的构建配置
    rollupOptions: {
      output: {
        // 精细代码分割 - 减少未使用JavaScript
        manualChunks: (id) => {
          // 第三方库分离
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue'
            if (id.includes('pinia')) return 'pinia'
            if (id.includes('vue-router')) return 'router'
            return 'vendor'
          }
          // i18n语言文件分离
          if (id.includes('locales')) {
            if (id.includes('en.json')) return 'i18n-en'
            if (id.includes('zh.json')) return 'i18n-zh'
            if (id.includes('ja.json')) return 'i18n-ja'
            return 'i18n-other'
          }
          // 组件分离
          if (id.includes('components')) return 'components'
          if (id.includes('views')) return 'views'
        }
      }
    },
    // 使用Terser压缩 - 更好的压缩效果
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        unused: true,
        dead_code: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    // 设置合理的chunk大小警告限制
    chunkSizeWarningLimit: 1000,
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 设置资源内联限制
    assetsInlineLimit: 4096,
  },
  // 开发服务器配置
  server: {
    // 启用HTTP/2
    https: false,
    // 设置缓存
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    },
    // HMR配置 - 修复WebSocket连接问题
    hmr: {
      port: 5173,
      host: 'localhost'
    },
    // 监听配置
    watch: {
      usePolling: false,
      interval: 100
    }
  }
})
