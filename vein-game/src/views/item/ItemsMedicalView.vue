<template>
  <div class="items-category-view">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Medical</h1>
        <p class="page-subtitle">
          Medkits, first-aid supplies, and pharmaceuticals that stabilize injuries across VEIN's brutal seasons.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading medical items...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading medical items: {{ error }}</p>
      </div>

      <!-- Items Table -->
      <div v-if="!loading && !error && bandagesItems.length > 0" class="table-section">
        <div class="section-header">
          <h2 class="section-title">Bandages</h2>
          <span class="section-count">{{ bandagesItems.length }} items</span>
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
                v-for="item in bandagesItems"
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
                <td class="desc-cell">{{ item.description || 'No description available.' }}</td>
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
const { data: itemsData, loading, error, loadData } = useItemsData('medical')

// Type 映射表：根据语言返回对应的 type 值
const TYPE_MAP = {
  en: {
    bandages: 'bandages',
  },
  de: {
    bandages: 'verbandsmaterial',  // 对应 "Verbandsmaterial"
  }
}

const normalizeType = (value) => {
  if (!value) return ''
  return String(value).trim().toLowerCase()
}

// 过滤函数：根据 type 值过滤 items
const filterByType = (targetType) => {
  if (!itemsData.value || itemsData.value.length === 0) return []
  
  const normalizedTarget = normalizeType(targetType)
  return (itemsData.value || []).filter((item) => {
    const normalizedItemType = normalizeType(item.type)
    return normalizedItemType === normalizedTarget
  })
}

// 使用 computed 来响应语言变化
const bandagesItems = computed(() => {
  const currentLang = getCurrentLocale() || locale.value || 'en'
  const targetType = TYPE_MAP[currentLang]?.bandages || TYPE_MAP.en.bandages
  const filtered = filterByType(targetType)
  if (import.meta.env.DEV) {
    console.log(`[ItemsMedicalView] bandagesItems - lang: ${currentLang}, targetType: "${targetType}", count: ${filtered.length}, total items: ${itemsData.value?.length || 0}`)
  }
  return filtered
})

onMounted(async () => {
  // 等待路由守卫设置语言
  await nextTick()
  // 直接从路由路径中提取语言，更可靠
  const currentLang = getCurrentLocale()
  if (import.meta.env.DEV) {
    console.log(`[ItemsMedicalView] onMounted - locale.value: ${locale.value}, getCurrentLocale(): ${currentLang}`)
  }
  await loadData('medical', currentLang)
})

// 监听语言变化，重新加载数据
watch(() => locale.value, async (newLocale) => {
  if (import.meta.env.DEV) {
    console.log(`[ItemsMedicalView] Language changed to: ${newLocale}`)
  }
  await loadData('medical', newLocale)
}, { immediate: false })

const onItemClick = (item) => {
  if (item && item.showDetail === false) return
  const id = (item.addressBar || '').replace('/', '')
  if (!id) return
  router.push(getLocalizedPath(`/vein-items/medical/${id}`))
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
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 54, 54, 0.2);
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
  width: 75px;
  height: 75px;
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
