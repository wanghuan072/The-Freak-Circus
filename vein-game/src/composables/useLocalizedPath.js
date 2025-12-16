import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

// 支持的语言列表
const supportedLocales = ['en', 'de']

/**
 * 从路径中提取语言
 */
export function extractLocaleFromPath(path) {
  const pathSegments = path.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]
  
  if (supportedLocales.includes(firstSegment)) {
    return firstSegment
  }
  return 'en' // 默认英文
}

/**
 * 获取本地化路径的 composable
 */
export function useLocalizedPath() {
  const { locale } = useI18n()
  const route = useRoute()
  
  const getLocalizedPath = (path) => {
    // 优先从当前路由路径中提取语言（更可靠）
    // 这样可以确保即使 locale.value 还没有更新，也能使用正确的语言前缀
    const currentLocale = extractLocaleFromPath(route.path)
    
    let localizedPath
    if (currentLocale === 'en') {
      localizedPath = path
    } else {
      localizedPath = `/${currentLocale}${path}`
    }
    
    // 调试日志（仅在开发环境）
    if (import.meta.env.DEV) {
      console.log(`[useLocalizedPath] getLocalizedPath - route.path: ${route.path}, currentLocale: ${currentLocale}, input path: ${path}, output: ${localizedPath}`)
    }
    
    return localizedPath
  }
  
  // 从当前路由路径中提取语言（更可靠）
  const getCurrentLocale = () => {
    return extractLocaleFromPath(route.path)
  }
  
  return {
    getLocalizedPath,
    getCurrentLocale,
    locale
  }
}

