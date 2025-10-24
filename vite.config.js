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
    // 优化构建配置 - 平衡性能和稳定性
    rollupOptions: {
      output: {
        // 优化代码分割 - 改善LCP
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // 分离Vue相关库
            if (id.includes('vue') || id.includes('@vue')) {
              return 'vue-vendor'
            }
            // 分离其他第三方库
            return 'vendor'
          }
          // 分离大型组件
          if (id.includes('HomeView.vue')) {
            return 'home'
          }
          if (id.includes('AppHeader.vue')) {
            return 'header'
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
    // 优化资源内联 - 平衡性能和包大小
    assetsInlineLimit: 4096,
    // 启用源码映射用于调试
    sourcemap: false,
    // 优化CSS
    cssMinify: true,
    // 优化构建输出
    target: 'es2015',
    // 优化构建性能
    reportCompressedSize: false,
  },
  // 开发服务器配置
  server: {
    hmr: {
      overlay: false
    }
  }
})
