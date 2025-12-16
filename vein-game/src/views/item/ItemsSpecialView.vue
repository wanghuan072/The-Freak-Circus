<template>
  <div class="items-category-view">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Special Items</h1>
        <p class="page-subtitle">
          Rare drops, event rewards, and unique artifacts that showcase VEIN game's evolving sandbox.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading special items...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading special items: {{ error }}</p>
      </div>

      <!-- Items Table -->
      <div v-if="!loading && !error && keysItems.length > 0" class="table-section">
        <div class="section-header">
          <h2 class="section-title">Keys Items</h2>
          <span class="section-count">{{ keysItems.length }} items</span>
        </div>
        <div class="table-container">
          <table class="items-table">
            <thead>
              <tr>
                <th class="preview-col">Preview</th>
                <th class="name-col">Name</th>
                <th class="desc-col">Description</th>
                <th class="type-col">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in keysItems"
                :key="item.id"
                @click="onItemClick(item)"
                :class="['table-row', { 'disabled': item.showDetail === false }]"
              >
                <td class="preview-cell">
                  <img
                    v-if="item.imageUrl"
                    :src="item.imageUrl"
                    :alt="item.imageAlt || item.title"
                    class="preview-thumb"
                    loading="lazy"
                  />
                  <span v-else>—</span>
                </td>
                <td class="name-cell">
                  <div class="name-primary">{{ item.title }}</div>
                </td>
                <td class="desc-cell" v-html="item.description || 'No description available.'"></td>
                <td class="type-cell">
                  <span class="type-pill" v-if="item.type">{{ item.type }}</span>
                  <span v-else>—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Schematics Items -->
      <div v-if="!loading && !error && schematicsItems.length > 0" class="table-section">
        <div class="section-header">
          <h2 class="section-title">Schematics Items</h2>
          <span class="section-count">{{ schematicsItems.length }} items</span>
        </div>
        <div class="table-container">
          <table class="items-table">
            <thead>
              <tr>
                <th class="preview-col">Preview</th>
                <th class="name-col">Name</th>
                <th class="desc-col">Description</th>
                <th class="type-col">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in schematicsItems"
                :key="item.id"
                @click="onItemClick(item)"
                :class="['table-row', { 'disabled': item.showDetail === false }]"
              >
                <td class="preview-cell">
                  <img
                    v-if="item.imageUrl"
                    :src="item.imageUrl"
                    :alt="item.imageAlt || item.title"
                    class="preview-thumb"
                    loading="lazy"
                  />
                  <span v-else>—</span>
                </td>
                <td class="name-cell">
                  <div class="name-primary">{{ item.title }}</div>
                </td>
                <td class="desc-cell" v-html="item.description || 'No description available.'"></td>
                <td class="type-cell">
                  <span class="type-pill" v-if="item.type">{{ item.type }}</span>
                  <span v-else>—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useItemsData } from '../../composables/useItemsData'
import { useLocalizedPath } from '../../composables/useLocalizedPath'

const router = useRouter()
const { locale } = useI18n()
const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()
const { data: itemsData, loading, error, loadData } = useItemsData('special')

// Type 映射表：根据语言返回对应的 type 值
const TYPE_MAP = {
  en: {
    keys: 'keys',
    schematics: 'schematics',
  },
  de: {
    keys: 'schlüssel',  // 对应 "Schlüssel"
    schematics: 'baupläne',  // 对应 "Baupläne"
  }
}

const normalizeType = (value) => {
  if (!value) return ''
  // 转换为字符串，去除首尾空格，转为小写
  return String(value).trim().toLowerCase()
}

// 过滤函数：根据 type 值过滤 items
const filterByType = (targetType) => {
  if (!itemsData.value || itemsData.value.length === 0) return []
  
  const normalizedTarget = normalizeType(targetType)
  
  if (import.meta.env.DEV) {
    console.log(`[ItemsSpecialView] filterByType - targetType: "${targetType}", normalized: "${normalizedTarget}"`)
  }
  
  const filtered = (itemsData.value || []).filter((item) => {
    const normalizedItemType = normalizeType(item.type)
    const matches = normalizedItemType === normalizedTarget
    
    if (import.meta.env.DEV && matches) {
      console.log(`[ItemsSpecialView] Match found - item.type: "${item.type}", normalized: "${normalizedItemType}"`)
    }
    
    return matches
  })
  
  if (import.meta.env.DEV) {
    console.log(`[ItemsSpecialView] filterByType result - found ${filtered.length} items out of ${itemsData.value.length}`)
  }
  
  return filtered
}

// 使用 computed 来响应语言变化
const keysItems = computed(() => {
  // 优先从路由路径获取语言，更可靠
  const currentLang = getCurrentLocale() || locale.value || 'en'
  const targetType = TYPE_MAP[currentLang]?.keys || TYPE_MAP.en.keys
  const filtered = filterByType(targetType)
  if (import.meta.env.DEV) {
    console.log(`[ItemsSpecialView] keysItems - lang: ${currentLang}, targetType: "${targetType}", count: ${filtered.length}, total items: ${itemsData.value?.length || 0}`)
    if (itemsData.value && itemsData.value.length > 0) {
      const uniqueTypes = [...new Set(itemsData.value.map(item => item.type).filter(Boolean))]
      console.log(`[ItemsSpecialView] keysItems - available types in data:`, uniqueTypes)
    }
  }
  return filtered
})

const schematicsItems = computed(() => {
  // 优先从路由路径获取语言，更可靠
  const currentLang = getCurrentLocale() || locale.value || 'en'
  const targetType = TYPE_MAP[currentLang]?.schematics || TYPE_MAP.en.schematics
  const filtered = filterByType(targetType)
  if (import.meta.env.DEV) {
    console.log(`[ItemsSpecialView] schematicsItems - lang: ${currentLang}, targetType: "${targetType}", count: ${filtered.length}, total items: ${itemsData.value?.length || 0}`)
    if (itemsData.value && itemsData.value.length > 0) {
      const uniqueTypes = [...new Set(itemsData.value.map(item => item.type).filter(Boolean))]
      console.log(`[ItemsSpecialView] schematicsItems - available types in data:`, uniqueTypes)
    }
  }
  return filtered
})

onMounted(async () => {
  // 等待路由守卫设置语言
  await nextTick()
  // 直接从路由路径中提取语言，更可靠
  const currentLang = getCurrentLocale()
  if (import.meta.env.DEV) {
    console.log(`[ItemsSpecialView] onMounted - locale.value: ${locale.value}, getCurrentLocale(): ${currentLang}`)
  }
  await loadData('special', currentLang)
})

// 监听语言变化，重新加载数据
watch(() => locale.value, async (newLocale) => {
  if (import.meta.env.DEV) {
    console.log(`[ItemsSpecialView] Language changed to: ${newLocale}`)
  }
  await loadData('special', newLocale)
}, { immediate: false })

const onItemClick = (item) => {
  if (item && item.showDetail === false) return
  const id = (item.addressBar || '').replace('/', '')
  if (!id) return
  router.push(getLocalizedPath(`/vein-items/special/${id}`))
}
</script>

<style scoped>
.items-category-view {
  min-height: 100vh;
  padding-bottom: 80px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.section-count {
  font-size: 0.85rem;
  color: rgba(255, 210, 210, 0.7);
  padding: 4px 12px;
  background: rgba(255, 54, 54, 0.1);
  border-radius: 999px;
  border: 1px solid rgba(255, 54, 54, 0.2);
}

.table-section {
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(255, 54, 54, 0.2);
}

.table-section {
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(255, 54, 54, 0.2);
}

.table-container {
  border-radius: 16px;
  background-color: rgba(20, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow-x: auto;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.items-table th {
  text-align: left;
  padding: 16px;
  font-size: 0.9rem;
  color: #ffd8d8;
  background: rgba(255, 54, 54, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.items-table td {
  padding: 5px;
  color: rgba(255, 210, 210, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.name-col {
  width: 200px;
  min-width: 200px;
}

.desc-col {
  width: auto;
}

.type-col {
  width: 160px;
  min-width: 160px;
}

.preview-col {
  width: 90px;
  min-width: 90px;
  text-align: center;
}

.preview-cell {
  text-align: center;
}

.preview-cell span{
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-thumb {
  width: 80px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.name-primary {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.desc-cell {
  font-size: 14px;
  line-height: 1.6;
}

.type-cell {
  text-align: center;
}

.type-pill {
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.75rem;
  border-radius: 999px;
  background: rgba(255, 54, 54, 0.15);
  color: var(--accent);
  border: 1px solid rgba(255, 54, 54, 0.3);
}

.table-row {
  cursor: pointer;
  transition: background 0.2s ease;
}

.table-row:hover {
  background: rgba(255, 54, 54, 0.05);
}

.table-row.disabled {
  cursor: default;
}

.table-row.disabled:hover {
  background: transparent;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 80px 20px;
  color: rgba(255, 210, 210, 0.7);
  font-size: 1.1rem;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .items-category-view {
    padding-bottom: 40px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .items-category-view {
    padding-bottom: 20px;
  }

  .table-section {
    margin-bottom: 20px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .section-count {
    font-size: 12px;
    padding: 3px 8px;
  }

  .table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .items-table {
    min-width: 100%;
    width: max-content;
  }

  .items-table th {
    padding: 5px 10px;
    font-size: 12px;
  }

  .items-table td {
    padding: 5px 10px;
    font-size: 12px;
  }

  .name-col {
    width: 220px;
    min-width: 220px;
  }

  .desc-col {
    min-width: 200px;
  }

  .type-col {
    width: 100px;
    min-width: 100px;
  }

  .name-primary {
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .preview-col {
    width: 70px;
    min-width: 70px;
  }

  .preview-thumb {
    width: 36px;
    height: 36px;
    border-radius: 6px;
  }

  .desc-cell {
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .type-pill {
    font-size: 12px;
    padding: 3px 8px;
  }

  .loading-state,
  .error-state {
    padding: 20px;
    font-size: 12px;
  }
}
</style>
