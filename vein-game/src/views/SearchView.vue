<template>
  <div class="search-view">
    <!-- Search Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">{{ $t('searchPage.header.title') }}</h1>
          <p class="page-subtitle" v-if="searchQuery">
            {{ $t('searchPage.header.subtitle1') }} <strong>"{{ searchQuery }}"</strong>
          </p>
          <p class="page-subtitle" v-else>
            {{ $t('searchPage.header.subtitle2') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Search Results -->
    <section class="search-results-section">
      <div class="container">
        <!-- Loading State -->
        <div v-if="isSearching" class="loading-state">
          <p>{{ $t('searchPage.searching') }}</p>
        </div>

        <!-- No Results -->
        <div v-else-if="!searchQuery || totalResults === 0" class="no-results">
          <div class="no-results-icon">🔍</div>
          <h2>{{ $t('searchPage.noResults.title') }}</h2>
          <p v-if="searchQuery">
            {{ $t('searchPage.noResults.content1') }} "{{ searchQuery }}"{{ $t('searchPage.noResults.content2') }} <router-link to="/vein-guides" class="inline-link">{{ $t('searchPage.noResults.link1') }}</router-link>, <router-link to="/vein-wiki" class="inline-link">{{ $t('searchPage.noResults.link2') }}</router-link>, {{ $t('searchPage.noResults.content3') }} <router-link to="/vein-items" class="inline-link">{{ $t('searchPage.noResults.link3') }}</router-link>.
          </p>
          <p v-else>
            {{ $t('searchPage.noResults.content4') }}
          </p>
        </div>

        <!-- Results Summary -->
        <div v-else class="results-summary">
          <p class="results-count">
            {{ $t('searchPage.results.found') }} <strong>{{ totalResults }}</strong> {{ totalResults !== 1 ? $t('searchPage.results.results') : $t('searchPage.results.result') }}
            <span v-if="searchQuery"> {{ $t('searchPage.results.for') }} "{{ searchQuery }}"</span>
          </p>
        </div>

        <!-- Guides Results -->
        <div v-if="searchResults.guides.length > 0" class="results-category">
          <h2 class="category-title">
            <span class="category-icon">📚</span>
            {{ $t('searchPage.results.guides') }} ({{ searchResults.guides.length }})
          </h2>
          <div class="guides-grid">
            <div
              v-for="guide in searchResults.guides"
              :key="guide.id"
              class="guide-card"
              @click="goToGuide(guide.addressBar)"
            >
              <div class="guide-image-container" v-if="guide.imageUrl">
                <img
                  :src="guide.imageUrl"
                  :alt="guide.imageAlt || guide.title"
                  class="guide-image"
                  loading="lazy"
                />
              </div>
              <div class="guide-card-content">
                <h3 class="guide-title">{{ guide.title }}</h3>
                <p class="guide-description">{{ guide.description }}</p>
                <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
                  <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <div class="guide-footer">
                  <span class="update-date">{{ formatDate(guide.publishDate) }}</span>
                  <span class="view-link">VIEW GUIDE →</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Wiki Results -->
        <div v-if="searchResults.wiki.length > 0" class="results-category">
          <h2 class="category-title">
            <span class="category-icon">📖</span>
            {{ $t('searchPage.results.wiki') }} ({{ searchResults.wiki.length }})
          </h2>
          <div class="articles-grid">
            <div
              v-for="item in searchResults.wiki"
              :key="item.id"
              class="article-card"
              @click="goToWiki(item.addressBar)"
            >
              <div class="card-image-container">
                <img :src="item.imageUrl" :alt="item.imageAlt" class="card-image">
              </div>
              <h3 class="card-title">{{ item.title }}</h3>
            </div>
          </div>
        </div>

        <!-- Items Results -->
        <div v-if="searchResults.items.length > 0" class="results-category">
          <h2 class="category-title">
            <span class="category-icon">🎒</span>
            {{ $t('searchPage.results.items') }} ({{ searchResults.items.length }})
          </h2>
          <div class="table-section">
            <div class="table-container">
              <table class="items-table">
                <thead>
                  <tr>
                    <th class="preview-col">Preview</th>
                    <th class="name-col">Name</th>
                    <th class="desc-col">Description</th>
                    <th class="category-col">Category</th>
                    <th class="type-col">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in searchResults.items"
                    :key="`${item.category}-${item.id}`"
                    class="table-row"
                    @click="goToItem(item.category, item.addressBar)"
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
                    <td class="category-cell">
                      <span class="category-pill">{{ getCategoryName(item.category) }}</span>
                    </td>
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
    </section>
  </div>
</template>

<script setup>
import { onMounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSearch } from '../composables/useSearch'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { searchResults, isSearching, totalResults, search, clearSearch } = useSearch()

// 从路由参数获取搜索关键词
const searchQuery = computed(() => {
  return route.query.q || ''
})

// 执行搜索
const performSearch = async () => {
  const query = searchQuery.value
  if (query) {
    await search(query)
  } else {
    clearSearch()
  }
}

onMounted(() => {
  performSearch()
})

// 监听路由变化
watch(() => route.query.q, () => {
  performSearch()
})

// 监听语言变化，重新搜索
watch(() => locale.value, () => {
  if (searchQuery.value) {
    performSearch()
  }
})

const goToGuide = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(getLocalizedPath(`/vein-guides${path}`))
}

const goToWiki = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(getLocalizedPath(`/vein-wiki${path}`))
}

const goToItem = (category, addressBar) => {
  if (!addressBar || addressBar === '/') return
  const path = addressBar.startsWith('/') ? addressBar.slice(1) : addressBar
  router.push(getLocalizedPath(`/vein-items/${category}/${path}`))
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return `Updated ${date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })}`
}

const getCategoryName = (category) => {
  const categoryMap = {
    weapons: 'Weapons',
    armor: 'Armor',
    clothing: 'Clothing',
    consumables: 'Consumables',
    special: 'Special',
    materials: 'Materials',
    ammo: 'Ammo',
    medical: 'Medical',
    tools: 'Tools',
    misc: 'Misc'
  }
  return categoryMap[category] || category
}
</script>

<style scoped>
.search-view {
  min-height: 100vh;
}

.page-header {
  padding: 80px 0 40px;
}

.page-header-content {
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 16px 0;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  color: rgba(255, 215, 215, 0.7);
  font-size: 1.1rem;
  margin: 0;
}

.page-subtitle strong {
  color: var(--accent);
  font-weight: 600;
}

.search-results-section {
  padding: 0 0 60px 0;
}

.loading-state,
.no-results {
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 210, 210, 0.7);
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.no-results h2 {
  font-size: 2rem;
  color: var(--text);
  margin: 0 0 16px 0;
}

.no-results p {
  font-size: 1.1rem;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.results-summary {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 54, 54, 0.2);
}

.results-count {
  color: rgba(255, 210, 210, 0.7);
  font-size: 1rem;
}

.results-count strong {
  color: var(--accent);
  font-weight: 700;
}

.results-category {
  margin-bottom: 60px;
}

.results-category:last-child {
  margin-bottom: 0;
}

.category-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.category-icon {
  font-size: 2rem;
}

/* Guides Grid */
.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.guide-card {
  background: rgba(30, 0, 0, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(255, 54, 54, 0.2);
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.guide-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(26, 0, 0, 0.8);
  position: relative;
}

.guide-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.guide-card:hover .guide-image {
  transform: scale(1.05);
}

.guide-card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.guide-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffd8d8;
  margin-bottom: 5px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.guide-description {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.4;
  margin-bottom: 10px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
}

.tag {
  background: transparent;
  border: 1px solid rgba(255, 54, 54, 0.3);
  color: rgba(255, 210, 210, 0.7);
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.7rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.guide-card:hover .tag {
  border-color: rgba(255, 54, 54, 0.6);
  color: var(--accent);
}

.guide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 54, 54, 0.1);
  margin-top: auto;
}

.update-date {
  color: rgba(255, 210, 210, 0.6);
  font-size: 0.85rem;
}

.view-link {
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.4);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
}

.guide-card:hover .view-link {
  color: #fff;
  text-shadow: 0 0 8px rgba(255, 54, 54, 0.6);
}

/* Wiki Articles Grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.article-card {
  background-color: rgba(30, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 54, 54, 0.2);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.article-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.4);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
}

.card-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(26, 0, 0, 0.8);
}

.card-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .card-image {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffd8d8;
  text-align: center;
  padding: 16px;
  margin: 0;
  line-height: 1.4;
}

/* Items Table */
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

.preview-col {
  width: 90px;
  min-width: 90px;
  text-align: center;
}

.name-col {
  width: 200px;
  min-width: 200px;
}

.desc-col {
  width: auto;
}

.category-col {
  width: 140px;
  min-width: 140px;
}

.type-col {
  width: 160px;
  min-width: 160px;
}

.preview-cell {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-cell span {
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

.category-cell {
  text-align: center;
}

.category-pill {
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.75rem;
  border-radius: 999px;
  background: rgba(255, 54, 54, 0.15);
  color: var(--accent);
  border: 1px solid rgba(255, 54, 54, 0.3);
  font-weight: 600;
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

.inline-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 54, 54, 0.3);
  transition: all 0.3s ease;
}

.inline-link:hover {
  color: #fff;
  border-bottom-color: var(--accent);
  text-shadow: 0 0 8px rgba(255, 54, 54, 0.5);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .articles-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .table-container {
    overflow-x: auto;
  }

  .items-table {
    min-width: 100%;
  }

  .name-col {
    width: 180px;
    min-width: 180px;
  }

  .category-col {
    width: 120px;
    min-width: 120px;
  }

  .type-col {
    width: 140px;
    min-width: 140px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .page-header {
    padding: 40px 0 20px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .page-subtitle {
    font-size: 0.9rem;
  }

  .search-results-section {
    padding: 0 0 40px 0;
  }

  .results-category {
    margin-bottom: 40px;
  }

  .category-title {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .category-icon {
    font-size: 1.5rem;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
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

  .preview-col {
    width: 70px;
    min-width: 70px;
  }

  .name-col {
    width: 220px;
    min-width: 220px;
  }

  .desc-col {
    min-width: 200px;
  }

  .category-col {
    width: 120px;
    min-width: 120px;
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

  .category-pill,
  .type-pill {
    font-size: 12px;
    padding: 3px 8px;
  }

  .guide-title {
    font-size: 16px;
  }

  .guide-description {
    font-size: 12px;
  }

  .card-title {
    font-size: 0.9rem;
    padding: 12px;
  }

  .no-results {
    padding: 40px 20px;
  }

  .no-results-icon {
    font-size: 3rem;
  }

  .no-results h2 {
    font-size: 1.5rem;
  }

  .no-results p {
    font-size: 0.9rem;
  }
}
</style>

