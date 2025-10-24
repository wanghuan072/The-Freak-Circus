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
    // 优化的构建配置 - 针对LCP优化
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
    // 使用esbuild压缩 - 更快的构建
    minify: 'esbuild',
    // 设置合理的chunk大小警告限制
    chunkSizeWarningLimit: 1000,
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 优化资源内联 - 更小的内联限制
    assetsInlineLimit: 1024,
    // 启用源码映射用于调试
    sourcemap: false,
    // 优化CSS
    cssMinify: true,
    // 优化构建输出
    reportCompressedSize: false,
  },
  // 开发服务器配置
  server: {
    hmr: {
      overlay: false
    }
  }
})
