import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Items 数据配置映射
const ITEMS_DATA_CONFIG = {
  weapons: { routePath: '/items/weapons' },
  armor: { routePath: '/items/armor' },
  clothing: { routePath: '/items/clothing' },
  consumables: { routePath: '/items/consumables' },
  special: { routePath: '/items/special' },
  materials: { routePath: '/items/materials' },
  ammo: { routePath: '/items/ammo' },
  medical: { routePath: '/items/medical' },
  tools: { routePath: '/items/tools' },
  misc: { routePath: '/items/misc' },
}

/**
 * 加载指定类别的 items 数据
 */
const loadItemsData = async (category, lang = 'en') => {
  try {
    const module = await import(`../data/items/${category}/${lang}.js`)
    const data = module.default || module.items || []
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error(`Failed to load items data for category: ${category} (lang: ${lang})`, error)
    // 如果加载失败，尝试回退到英文
    if (lang !== 'en') {
      try {
        const fallbackModule = await import(`../data/items/${category}/en.js`)
        const data = fallbackModule.default || fallbackModule.items || []
        return Array.isArray(data) ? data : []
      } catch (fallbackError) {
        console.error(`Failed to load fallback items data for category: ${category}`, fallbackError)
        return []
      }
    }
    return []
  }
}

/**
 * Items 数据 composable
 */
export function useItemsData(initialCategory) {
  const { locale } = useI18n()
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)
  const categoryRef = ref(initialCategory || '')

  const loadData = async (category = categoryRef.value, lang = null) => {
    categoryRef.value = category
    loading.value = true
    error.value = null
    try {
      // 优先使用传入的 lang 参数，如果没有则使用 locale.value，最后回退到 'en'
      const currentLang = lang !== null && lang !== undefined ? lang : (locale.value || 'en')
      
      // 调试日志（仅在开发环境）
      if (import.meta.env.DEV) {
        console.log(`[useItemsData] Loading data for category: ${category}, lang: ${currentLang}, locale.value: ${locale.value}, passed lang: ${lang}`)
      }
      
      data.value = await loadItemsData(category, currentLang)
      
      // 调试日志：显示加载的数据数量
      if (import.meta.env.DEV) {
        console.log(`[useItemsData] Loaded ${data.value.length} items for category: ${category}, lang: ${currentLang}`)
      }
    } catch (e) {
      error.value = e.message || 'Failed to load items data'
      data.value = []
      if (import.meta.env.DEV) {
        console.error(`[useItemsData] Error loading data for category: ${category}`, e)
      }
    } finally {
      loading.value = false
    }
  }

  const findByAddress = (category, idSlug) => {
    const list = data.value || []
    return list.find((item) => {
      if (!item || !item.addressBar) return false
      const slug = String(item.addressBar).replace(/^\//, '')
      return slug === idSlug
    })
  }

  const findById = (id) => {
    return data.value.find(item => item.id === id) || null
  }

  const getOtherItems = (currentId) => {
    return data.value.filter(item => item.id !== currentId && item.showDetail !== false).slice(0, 10)
  }

  return {
    data,
    loading,
    error,
    config: ITEMS_DATA_CONFIG,
    loadData,
    findByAddress,
    findById,
    getOtherItems
  }
}

