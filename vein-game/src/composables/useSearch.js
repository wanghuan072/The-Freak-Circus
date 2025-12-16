import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * 搜索功能 composable
 */
export function useSearch() {
  const { locale } = useI18n()
  const searchQuery = ref('')
  const searchResults = ref({
    guides: [],
    wiki: [],
    items: []
  })
  const isSearching = ref(false)
  const allItems = ref([])
  const cachedLang = ref(null)

  // 加载所有物品数据
  const loadAllItems = async (lang = null) => {
    const currentLang = lang || locale.value || 'en'
    
    // 如果语言变化，清除缓存
    if (cachedLang.value && cachedLang.value !== currentLang) {
      allItems.value = []
      cachedLang.value = null
    }
    
    // 如果已有缓存且语言相同，直接返回
    if (allItems.value.length > 0 && cachedLang.value === currentLang) {
      return allItems.value
    }

    try {
      const categories = ['weapons', 'armor', 'clothing', 'consumables', 'special', 'materials', 'ammo', 'medical', 'tools', 'misc']
      const itemsPromises = categories.map(category => 
        import(`../data/items/${category}/${currentLang}.js`).catch(() => 
          import(`../data/items/${category}/en.js`)
        )
      )
      const itemsModules = await Promise.all(itemsPromises)
      
      const items = []
      itemsModules.forEach((module, index) => {
        const category = categories[index]
        const categoryItems = module.default || []
        categoryItems.forEach(item => {
          items.push({
            ...item,
            category,
            type: 'item'
          })
        })
      })
      
      allItems.value = items
      cachedLang.value = currentLang
      return items
    } catch (error) {
      console.error('Failed to load items for search:', error)
      return []
    }
  }

  /**
   * 搜索函数
   */
  const search = async (query, lang = null) => {
    if (!query || query.trim().length === 0) {
      searchResults.value = { guides: [], wiki: [], items: [] }
      return
    }

    isSearching.value = true
    const searchTerm = query.toLowerCase().trim()
    const currentLang = lang || locale.value || 'en'

    try {
      // 加载指南数据
      const guidesModule = await import(`../data/guide/${currentLang}.js`).catch(() => 
        import(`../data/guide/en.js`)
      )
      const guides = guidesModule.guides || guidesModule.default || []

      // 搜索指南
      const guidesResults = (guides || []).filter(guide => {
        const title = (guide.title || '').toLowerCase()
        const description = (guide.description || '').toLowerCase()
        const tags = (guide.tags || []).join(' ').toLowerCase()
        return title.includes(searchTerm) || 
               description.includes(searchTerm) || 
               tags.includes(searchTerm)
      }).map(guide => ({ ...guide, type: 'guide' }))

      // 加载Wiki数据
      const wikiModule = await import(`../data/wiki/${currentLang}.js`).catch(() => 
        import(`../data/wiki/en.js`)
      )
      const wiki = wikiModule.wiki || wikiModule.default || []

      // 搜索Wiki
      const wikiResults = (wiki || []).filter(w => {
        const title = (w.title || '').toLowerCase()
        const description = (w.description || '').toLowerCase()
        return title.includes(searchTerm) || description.includes(searchTerm)
      }).map(w => ({ ...w, type: 'wiki' }))

      // 搜索物品
      const items = await loadAllItems(currentLang)
      const itemsResults = items.filter(item => {
        const title = (item.title || '').toLowerCase()
        const description = (item.description || '').toLowerCase()
        const type = (item.type || '').toLowerCase()
        return title.includes(searchTerm) || 
               description.includes(searchTerm) || 
               type.includes(searchTerm)
      }).map(item => ({ ...item, type: 'item' }))

      searchResults.value = {
        guides: guidesResults,
        wiki: wikiResults,
        items: itemsResults
      }
    } catch (error) {
      console.error('Search error:', error)
      searchResults.value = { guides: [], wiki: [], items: [] }
    } finally {
      isSearching.value = false
    }
  }

  /**
   * 获取搜索结果总数
   */
  const totalResults = computed(() => {
    return searchResults.value.guides.length + 
           searchResults.value.wiki.length + 
           searchResults.value.items.length
  })

  /**
   * 清空搜索结果
   */
  const clearSearch = () => {
    searchQuery.value = ''
    searchResults.value = { guides: [], wiki: [], items: [] }
  }

  return {
    searchQuery,
    searchResults,
    isSearching,
    totalResults,
    search,
    clearSearch
  }
}


