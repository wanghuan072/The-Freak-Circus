import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Wiki 数据 composable
 */
export function useWikiData() {
  const { locale } = useI18n()
  const wikiData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/wiki/${currentLang}.js`)
      const wiki = module.wiki || module.default || []
      wikiData.value = Array.isArray(wiki) ? wiki : []
    } catch (err) {
      error.value = err.message || 'Failed to load wiki data'
      wikiData.value = []
    } finally {
      loading.value = false
    }
  }

  const findWikiByAddressBar = (addressBar) => {
    const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
    return wikiData.value.find(w => w.addressBar === path) || null
  }

  const findWikiById = (id) => {
    return wikiData.value.find(w => w.id === id) || null
  }

  const getOtherWikis = (currentId) => {
    return wikiData.value.filter(w => w.id !== currentId).slice(0, 10)
  }

  return {
    wiki: wikiData,
    loading,
    error,
    loadData,
    findWikiByAddressBar,
    findWikiById,
    getOtherWikis
  }
}


