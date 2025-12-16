<template>
  <div class="items-detail-view">
    <!-- Detail Header / Breadcrumb -->
    <section class="detail-header-section" v-if="item">
      <div class="container">
        <div class="breadcrumb">
          <router-link :to="getLocalizedPath('/vein-items')" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            {{ $t('itemsDetailPage.breadcrumb.items') }}
          </router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <router-link :to="getLocalizedPath(`/vein-items/${category}`)" class="breadcrumb-link">{{ categoryTitle }}</router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ item.title || 'Item Detail' }}</span>
        </div>

        <div class="items-detail-content">
          <div class="items-detail-text">
            <h1 class="items-title">{{ item.title }}</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="items-content" v-if="item">
      <div class="container">
        <div class="content-layout">
          <!-- Left Content -->
          <div class="left-content">
            <div class="detail-article">
              <div class="hero-box">
                <div class="hero-meta">
                  <h2 class="hero-title">{{ item.title }}</h2>
                  <div class="hero-tags" v-if="item.type">
                    <span class="tag">{{ item.type }}</span>
                  </div>
                </div>
              </div>
              <div class="detail-html" v-html="item.detailsHtml"></div>
            </div>
          </div>

          <!-- Right Sidebar -->
          <div class="right-sidebar">
            <div class="info-box">
              <div class="info-box-header">
                <h3 class="info-box-title">{{ item.title }}</h3>
              </div>
              <div class="info-image" v-if="item.imageUrl">
                <img :src="item.imageUrl" :alt="item.imageAlt" class="info-image-img">
              </div>
            </div>

            <div class="nav-box" v-if="otherItems.length > 0">
              <h4 class="nav-title">{{ $t('itemsDetailPage.navigation.other') }} {{ categoryTitle }}</h4>
              <div class="nav-links">
                <router-link
                  v-for="it in otherItems"
                  :key="it.id"
                  :to="getLocalizedPath(`/vein-items/${category}/${(it.addressBar || '').replace('/', '')}`)"
                  class="nav-link"
                >
                  {{ it.title }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Found -->
    <section class="items-content" v-else>
      <div class="container">
        <div class="not-found">
          <h2>{{ $t('itemsDetailPage.notFound.title') }}</h2>
          <p>{{ $t('itemsDetailPage.notFound.description') }}</p>
          <router-link :to="getLocalizedPath(`/vein-items/${category}`)" class="btn-hero btn-secondary">{{ $t('itemsDetailPage.notFound.back') }} {{ categoryTitle }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useItemsData } from '../../composables/useItemsData'
import { useLocalizedPath } from '../../composables/useLocalizedPath'

const route = useRoute()
const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const category = String(route.params.category || '')
const id = String(route.params.id || '')
const { data, loadData, findByAddress, getOtherItems } = useItemsData(category)
const item = ref(null)

const categoryTitle = computed(() => {
  const titles = {
    weapons: 'Weapons',
    equipment: 'Equipment',
    ammunition: 'Ammunition',
    key: 'Keys',
    fish: 'Fish'
  }
  return titles[category] || category.charAt(0).toUpperCase() + category.slice(1)
})

const otherItems = computed(() => {
  if (!item.value) return []
  return getOtherItems(item.value.id)
})

const loadItemData = async () => {
  const currentCategory = String(route.params.category || category)
  const currentId = String(route.params.id || id)
  // 确保使用当前语言加载数据
  const currentLang = locale.value || 'en'
  await loadData(currentCategory, currentLang)
  item.value = findByAddress(currentCategory, currentId)
}

onMounted(async () => {
  // 等待下一个 tick，确保路由守卫已经设置了语言
  await nextTick()
  await loadItemData()
})

// 监听路由完整路径变化（包括语言前缀变化）
watch(() => route.fullPath, async (newPath, oldPath) => {
  // 如果路径发生变化，重新加载数据
  if (newPath !== oldPath && oldPath) {
    await nextTick() // 等待路由守卫设置语言
    await loadItemData()
  }
}, { immediate: false })

// 监听路由参数变化
watch(() => [route.params.category, route.params.id], async ([newCategory, newId]) => {
  if (newCategory && newId) {
    await nextTick() // 等待路由守卫设置语言
    const currentLang = locale.value || 'en'
    await loadData(String(newCategory), currentLang)
    item.value = findByAddress(String(newCategory), String(newId))
  }
}, { immediate: false })

// 监听语言变化，重新加载数据
watch(() => locale.value, async (newLocale, oldLocale) => {
  // 只有当语言真正变化时才重新加载
  if (newLocale !== oldLocale && oldLocale !== undefined) {
    await loadItemData()
  }
}, { immediate: false })
</script>

<style scoped>
.items-detail-view {
  min-height: 100vh;
}

.detail-header-section {
  padding: 80px 0 40px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: rgba(255, 210, 210, 0.7);
  margin-bottom: 20px;
}

.breadcrumb-link {
  color: rgba(255, 210, 210, 0.7);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--accent);
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
}

.breadcrumb-arrow {
  width: 16px;
  height: 16px;
  opacity: 0.6;
}

.breadcrumb-current {
  color: var(--text);
  font-weight: 500;
}

.items-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 24px 0;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.items-content {
  padding: 0 0 80px;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  margin: 0 auto;
}

.left-content {
  background-color: rgba(30, 0, 0, 0.4);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-box {
  margin-bottom: 32px;
}

.hero-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
}

.hero-meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffd8d8;
  margin: 0;
}

.hero-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.hero-tags .tag {
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 54, 54, 0.12);
  color: var(--accent);
  border: 1px solid rgba(255, 54, 54, 0.25);
  font-size: 0.85rem;
  font-weight: 600;
}

.detail-html {
  line-height: 1.8;
}

.detail-html h2 {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin: 30px 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 54, 54, 0.3);
}

.detail-html h2:first-child {
  margin-top: 0;
}

.detail-html h3 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text);
  margin: 24px 0 16px 0;
  padding-left: 16px;
  position: relative;
}

.detail-html h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  border-radius: 2px;
}

.detail-html p {
  color: rgba(255, 210, 210, 0.78);
  margin-bottom: 16px;
  font-size: 14px;
}

.detail-html strong {
  color: #fff;
  font-weight: 600;
}

.detail-html ul,
.detail-html ol {
  color: rgba(255, 210, 210, 0.78);
  margin-bottom: 20px;
  padding-left: 20px;
}

.detail-html li {
  margin-bottom: 8px;
}

.detail-html ul li::marker {
  color: var(--accent);
}

.detail-html table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  text-align: left;
}

.detail-html table th,
.detail-html table td {
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 210, 210, 0.78);
}

.detail-html table th {
  background: rgba(255, 54, 54, 0.1);
  color: #fff;
  font-weight: 600;
}

.detail-html a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

.detail-html a:hover {
  color: var(--accent-soft);
}

.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-box {
  background-color: rgba(30, 0, 0, 0.4);
  border: 2px solid var(--accent);
  border-radius: 16px;
  overflow: hidden;
}

.info-box-header {
  background-color: var(--accent);
  padding: 16px;
}

.info-box-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1c0000;
  margin: 0;
  text-align: center;
}

.info-image {
  padding: 16px;
}

.info-image-img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.info-details {
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-label {
  font-size: 0.75rem;
  color: rgba(255, 210, 210, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 0.9rem;
  color: rgba(255, 210, 210, 0.8);
  font-weight: 500;
}

.nav-box {
  background-color: rgba(30, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
}

.nav-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 16px 0;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-link {
  color: rgba(255, 210, 210, 0.7);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.nav-link:hover {
  color: var(--accent);
  background: rgba(255, 54, 54, 0.1);
}

.not-found {
  text-align: center;
  padding: 80px 20px;
  color: rgba(255, 210, 210, 0.7);
}

.not-found h2 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 16px;
}

.not-found p {
  margin-bottom: 24px;
  font-size: 1.1rem;
}

.not-found .btn-hero {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.not-found .btn-secondary {
  background: rgba(255, 54, 54, 0.1);
  color: var(--accent);
  border: 1px solid rgba(255, 54, 54, 0.3);
}

.not-found .btn-secondary:hover {
  background: rgba(255, 54, 54, 0.2);
  border-color: rgba(255, 54, 54, 0.5);
  transform: translateY(-2px);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .detail-header-section {
    padding: 40px 0 20px;
  }

  .items-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .content-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .right-sidebar {
    order: -1;
  }

  .info-box {
    max-width: 400px;
    margin: 0 auto;
  }

  .left-content {
    padding: 24px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .detail-header-section {
    padding: 20px 0;
  }

  .items-content {
    padding: 20px 0;
  }

  .items-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .breadcrumb {
    font-size: 12px;
    gap: 8px;
    margin-bottom: 10px;
  }

  .breadcrumb-link {
    font-size: 12px;
  }

  .breadcrumb-icon,
  .breadcrumb-arrow {
    width: 14px;
    height: 14px;
  }

  .breadcrumb-current {
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .content-layout {
    gap: 20px;
  }

  .left-content {
    padding: 10px;
  }

  .right-sidebar {
    gap: 20px;
  }

  .hero-box {
    margin-bottom: 20px;
  }

  .hero-image {
    margin-bottom: 10px;
    max-width: 100%;
    height: auto;
  }

  .hero-title {
    font-size: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .hero-tags .tag {
    font-size: 12px;
    padding: 4px 10px;
  }

  .info-box {
    width: 100%;
  }

  .info-box-header {
    padding: 10px;
  }

  .info-box-title {
    font-size: 14px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .info-image {
    padding: 10px;
  }

  .nav-box {
    padding: 10px;
  }

  .nav-title {
    font-size: 14px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-link {
    font-size: 12px;
    padding: 8px 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  /* Detail Article 移动端样式已移至 global.css */
  .detail-html {
    padding: 0;
  }

  .detail-html p {
    font-size: 12px;
    margin-bottom: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .detail-html h2 {
    font-size: 20px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .detail-html h3 {
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .detail-html ul,
  .detail-html ol {
    margin-bottom: 10px;
    padding-left: 12px;
  }

  .detail-html li {
    margin-bottom: 10px;
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .detail-html table {
    margin-bottom: 10px;
    font-size: 12px;
    overflow-x: auto;
    display: block;
    -webkit-overflow-scrolling: touch;
  }

  .detail-html table th,
  .detail-html table td {
    padding: 5px 10px;
    font-size: 12px;
  }

  .not-found {
    padding: 20px;
  }

  .not-found h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .not-found p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .not-found .btn-hero {
    font-size: 12px;
    padding: 10px 20px;
  }
}
</style>

