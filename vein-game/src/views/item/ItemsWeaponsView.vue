<template>
  <div class="weapons-view">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Weapons</h1>
        <p class="page-subtitle">
          Complete weapons database for VEIN game. Browse all melee and ranged weapons available in VEIN survival game.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading weapons...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading weapons: {{ error }}</p>
      </div>

      <!-- Bladed Weapons Table -->
      <div v-if="!loading && !error && bladedItems.length > 0" class="table-section">
        <div class="section-header">
          <h2 class="section-title">Bladed Weapons</h2>
          <span class="section-count">{{ bladedItems.length }} items</span>
        </div>
        <div class="table-container">
          <table class="weapons-table">
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
                v-for="item in bladedItems"
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

      <!-- Ranged Weapons Table -->
      <div v-if="!loading && !error && rangedItems.length > 0" class="table-section">
        <div class="section-header">
          <h2 class="section-title">Ranged Weapons</h2>
          <span class="section-count">{{ rangedItems.length }} items</span>
        </div>
        <div class="table-container">
          <table class="weapons-table">
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
                v-for="item in rangedItems"
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

      <!-- Firearms Weapons Table -->
      <div v-if="!loading && !error && firearmsItems.length > 0" class="table-section">
        <div class="section-header">
          <h2 class="section-title">Firearms Weapons</h2>
          <span class="section-count">{{ firearmsItems.length }} items</span>
        </div>
        <div class="table-container">
          <table class="weapons-table">
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
                v-for="item in firearmsItems"
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

      <!-- Firearms Attachments Table -->
      <div v-if="!loading && !error && firearmsAttachmentsItems.length > 0" class="table-section">
        <div class="section-header">
          <h2 class="section-title">Firearms Attachments</h2>
          <span class="section-count">{{ firearmsAttachmentsItems.length }} items</span>
        </div>
        <div class="table-container">
          <table class="weapons-table">
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
                v-for="item in firearmsAttachmentsItems"
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

      <!-- Explosive Weapons Table -->
      <div v-if="!loading && !error && explosiveItems.length > 0" class="table-section">
        <div class="section-header">
          <h2 class="section-title">Explosive Weapons</h2>
          <span class="section-count">{{ explosiveItems.length }} items</span>
        </div>
        <div class="table-container">
          <table class="weapons-table">
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
                v-for="item in explosiveItems"
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
const { data: itemsData, loading, error, loadData } = useItemsData('weapons')

// Type 映射表：根据语言返回对应的 type 值
const TYPE_MAP = {
  en: {
    bladed: 'bladed',
    ranged: 'blunt',
    firearms: 'firearms',
    firearmsAttachments: 'firearms-attachments',
    explosive: 'explosive',
  },
  de: {
    bladed: 'klingenwaffen',        // 对应 "Klingenwaffen"
    ranged: 'stumpf',                // 对应 "Stumpf"
    firearms: 'schusswaffen',        // 对应 "Schusswaffen"
    firearmsAttachments: 'schusswaffen-aufsätze', // 对应 "Schusswaffen-Aufsätze"
    explosive: 'sprengwaffen',       // 对应 "Sprengwaffen"
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
const bladedItems = computed(() => {
  const currentLang = getCurrentLocale() || locale.value || 'en'
  const targetType = TYPE_MAP[currentLang]?.bladed || TYPE_MAP.en.bladed
  const filtered = filterByType(targetType)
  if (import.meta.env.DEV) {
    console.log(`[ItemsWeaponsView] bladedItems - lang: ${currentLang}, targetType: "${targetType}", count: ${filtered.length}, total items: ${itemsData.value?.length || 0}`)
  }
  return filtered
})
const rangedItems = computed(() => {
  const currentLang = getCurrentLocale() || locale.value || 'en'
  const targetType = TYPE_MAP[currentLang]?.ranged || TYPE_MAP.en.ranged
  const filtered = filterByType(targetType)
  if (import.meta.env.DEV) {
    console.log(`[ItemsWeaponsView] rangedItems - lang: ${currentLang}, targetType: "${targetType}", count: ${filtered.length}`)
  }
  return filtered
})
const firearmsItems = computed(() => {
  const currentLang = getCurrentLocale() || locale.value || 'en'
  const targetType = TYPE_MAP[currentLang]?.firearms || TYPE_MAP.en.firearms
  const filtered = filterByType(targetType)
  if (import.meta.env.DEV) {
    console.log(`[ItemsWeaponsView] firearmsItems - lang: ${currentLang}, targetType: "${targetType}", count: ${filtered.length}`)
  }
  return filtered
})
const firearmsAttachmentsItems = computed(() => {
  const currentLang = getCurrentLocale() || locale.value || 'en'
  const targetType = TYPE_MAP[currentLang]?.firearmsAttachments || TYPE_MAP.en.firearmsAttachments
  const filtered = filterByType(targetType)
  if (import.meta.env.DEV) {
    console.log(`[ItemsWeaponsView] firearmsAttachmentsItems - lang: ${currentLang}, targetType: "${targetType}", count: ${filtered.length}`)
  }
  return filtered
})
const explosiveItems = computed(() => {
  const currentLang = getCurrentLocale() || locale.value || 'en'
  const targetType = TYPE_MAP[currentLang]?.explosive || TYPE_MAP.en.explosive
  const filtered = filterByType(targetType)
  if (import.meta.env.DEV) {
    console.log(`[ItemsWeaponsView] explosiveItems - lang: ${currentLang}, targetType: "${targetType}", count: ${filtered.length}`)
  }
  return filtered
})

onMounted(async () => {
  // 等待路由守卫设置语言
  await nextTick()
  // 直接从路由路径中提取语言，更可靠
  const currentLang = getCurrentLocale()
  if (import.meta.env.DEV) {
    console.log(`[ItemsWeaponsView] onMounted - locale.value: ${locale.value}, getCurrentLocale(): ${currentLang}`)
  }
  await loadData('weapons', currentLang)
})

// 监听语言变化，重新加载数据
watch(() => locale.value, async (newLocale) => {
  if (import.meta.env.DEV) {
    console.log(`[ItemsWeaponsView] Language changed to: ${newLocale}`)
  }
  await loadData('weapons', newLocale)
}, { immediate: false })

const onItemClick = (item) => {
  if (item && item.showDetail === false) return
  const id = (item.addressBar || '').replace('/', '')
  if (!id) return
  router.push(getLocalizedPath(`/vein-items/weapons/${id}`))
}
</script>

<style scoped>
.weapons-view {
  min-height: 100vh;
  padding-bottom: 80px;
}

.weapons-section {
  margin-top: 60px;
}

.weapons-section:first-of-type {
  margin-top: 0;
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

.table-container {
  border-radius: 16px;
  background-color: rgba(20, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow-x: auto;
}

.weapons-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.weapons-table th {
  text-align: left;
  padding: 16px;
  font-size: 0.9rem;
  color: #ffd8d8;
  background: rgba(255, 54, 54, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.weapons-table td {
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

.name-meta {
  font-size: 0.8rem;
  color: rgba(255, 210, 210, 0.5);
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
  .weapons-view {
    padding-bottom: 40px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .weapons-view {
    padding-bottom: 20px;
  }

  .table-section {
    padding-bottom: 10px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
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

  .weapons-table {
    min-width: 100%;
    width: max-content;
  }

  .weapons-table th {
    padding: 5px 10px;
    font-size: 12px;
  }

  .weapons-table td {
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
