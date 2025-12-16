<template>
  <div class="guide-detail-view">
    <!-- Guide Detail Header -->
    <section class="guide-detail-header" v-if="guide">
      <div class="container">
        <div class="breadcrumb">
          <router-link :to="getLocalizedPath('/vein-guides')" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            {{ $t('guideDetailPage.breadcrumb.guides') }}
          </router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ guide.title }}</span>
        </div>

        <div class="guide-detail-content">
          <div class="guide-detail-text">
            <h1 class="guide-title">{{ guide.title }}</h1>

            <div class="guide-detail-meta">
              <div class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span class="meta-text">{{ formatDate(guide.publishDate) }}</span>
              </div>
            </div>

            <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
              <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide Content -->
    <section class="guide-content" v-if="guide">
      <div class="container">
        <div class="content-layout">
          <!-- Left Content -->
          <div class="left-content">
            <div class="detail-article" ref="contentRef" v-html="guide.detailsHtml"></div>
          </div>

          <!-- Right Sidebar -->
          <div class="right-sidebar">
            <div class="guide-info-box">
              <div class="info-box-header">
                <h3 class="info-box-title">{{ guide?.title }}</h3>
              </div>
              <!-- Guide Meta Info -->
              <div class="guide-meta">
                <div class="meta-item">
                  <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <span class="meta-text">{{ formatDate(guide?.publishDate) }}</span>
                </div>
              </div>

              <!-- Guide Tags -->
              <div class="guide-tags" v-if="guide?.tags && guide.tags.length > 0">
                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <!-- Guide navigation -->
            <div class="guide-navigation" v-if="previousGuide || nextGuide">
              <h4 class="nav-title">{{ $t('guideDetailPage.navigation.title') }}</h4>
              <div class="nav-grid">
                <router-link
                  v-if="previousGuide"
                  :to="getLocalizedPath(`/vein-guides${previousGuide.addressBar}`)"
                  class="nav-card nav-card-prev"
                >
                  <div class="nav-card-direction">{{ $t('guideDetailPage.navigation.previous') }}</div>
                  <div class="nav-card-title">{{ previousGuide.title }}</div>
                  <div class="nav-card-meta">
                    <span v-if="previousGuide.category">{{ getCategoryName(previousGuide.category) }}</span>
                    <span>{{ formatDate(previousGuide.publishDate) }}</span>
                  </div>
                </router-link>
                <router-link
                  v-if="nextGuide"
                  :to="getLocalizedPath(`/vein-guides${nextGuide.addressBar}`)"
                  class="nav-card nav-card-next"
                >
                  <div class="nav-card-direction">{{ $t('guideDetailPage.navigation.next') }}</div>
                  <div class="nav-card-title">{{ nextGuide.title }}</div>
                  <div class="nav-card-meta">
                    <span v-if="nextGuide.category">{{ getCategoryName(nextGuide.category) }}</span>
                    <span>{{ formatDate(nextGuide.publishDate) }}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Found -->
    <section class="guide-content" v-else>
      <div class="container">
        <div class="not-found">
          <h2>Guide Not Found</h2>
          <p>The guide you're looking for doesn't exist.</p>
          <router-link :to="getLocalizedPath('/vein-guides')" class="btn-hero btn-secondary">Back to Guides</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '../composables/useGuideData'
import { useLocalizedPath } from '../composables/useLocalizedPath'
import { useInternalLinks } from '../composables/useInternalLinks'

const route = useRoute()
const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { guides, loadData, findGuideByAddressBar } = useGuideData()
const guide = ref(null)
const contentRef = ref(null)

// Handle internal links in HTML content
useInternalLinks(contentRef)

// 初始化加载数据并查找 guide
const initGuide = async () => {
  await nextTick() // 等待路由守卫设置语言
  await loadData()
  const guideId = route.params.id
  guide.value = findGuideByAddressBar(`/${guideId}`)
}

onMounted(async () => {
  await initGuide()
})

// 监听路由完整路径变化（包括语言前缀变化）
watch(() => route.fullPath, async (newPath, oldPath) => {
  if (newPath !== oldPath && oldPath) {
    await nextTick() // 等待路由守卫设置语言
    await initGuide()
  }
}, { immediate: false })

// 监听路由参数变化，更新当前 guide
watch(() => route.params.id, async () => {
  await nextTick() // 等待路由守卫设置语言
  await loadData()
  const guideId = route.params.id
  guide.value = findGuideByAddressBar(`/${guideId}`)
})

// 监听语言变化，重新加载数据
watch(() => locale.value, async (newLocale, oldLocale) => {
  // 只有当语言真正变化时才重新加载
  if (newLocale !== oldLocale && oldLocale !== undefined) {
    await initGuide()
  }
}, { immediate: false })

const currentGuideIndex = computed(() => {
  if (!guide.value) return -1
  return guides.value.findIndex(g => g.id === guide.value.id)
})

const previousGuide = computed(() => {
  if (currentGuideIndex.value <= 0) return null
  return guides.value[currentGuideIndex.value - 1] || null
})

const nextGuide = computed(() => {
  if (currentGuideIndex.value === -1) return null
  return guides.value[currentGuideIndex.value + 1] || null
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getCategoryName = (category) => {
  const categoryMap = {
    'getting-started': 'Getting Started',
    'walkthroughs': 'Walkthroughs',
    'advanced': 'Advanced'
  }
  return categoryMap[category] || 'Guide'
}
</script>

<style scoped>
.guide-detail-view {
  min-height: 100vh;
}

/* Guide Detail Header */
.guide-detail-header {
  padding: 80px 0 40px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 0.875rem;
  color: rgba(255, 210, 210, 0.7);
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

/* Guide Title (H1) */
.guide-title {
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

.guide-detail-text {
  max-width: 800px;
}

.guide-detail-meta {
  margin-bottom: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 210, 210, 0.7);
  font-size: 0.9rem;
}

.meta-icon {
  width: 16px;
  height: 16px;
  color: var(--accent);
}

.meta-text {
  font-weight: 500;
}

.category-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(255, 54, 54, 0.3);
  margin-bottom: 16px;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(255, 54, 54, 0.1);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 54, 54, 0.2);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(255, 54, 54, 0.2);
  transform: translateY(-1px);
}

/* Guide Content */
.guide-content {
  padding: 0 0 80px;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
}

/* Left Content */
.left-content {
  background-color: rgba(30, 0, 0, 0.4);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Right Sidebar */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.guide-info-box {
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

.guide-category-info {
  padding: 16px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.guide-meta {
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.guide-info-box .guide-tags {
  padding: 16px;
}

/* Navigation */
.guide-navigation {
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

.nav-grid {
  display: grid;
  gap: 12px;
}

.nav-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--text);
  background: linear-gradient(135deg, rgba(255, 54, 54, 0.08), rgba(255, 54, 54, 0.02));
  border: 1px solid rgba(255, 54, 54, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.nav-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(255, 54, 54, 0.18);
  border-color: rgba(255, 54, 54, 0.35);
  background: linear-gradient(135deg, rgba(255, 54, 54, 0.12), rgba(255, 54, 54, 0.04));
}

.nav-card-prev {
  align-items: flex-start;
}

.nav-card-next {
  align-items: flex-end;
  text-align: right;
}

.nav-card-direction {
  font-size: 0.75rem;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}

.nav-card-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}

.nav-card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: rgba(255, 210, 210, 0.6);
}

.nav-card-next .nav-card-meta {
  flex-direction: row-reverse;
  text-align: right;
}

/* Detail Article Styles 已移至 global.css */

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .guide-detail-header {
    padding: 40px 0 20px;
  }

  .guide-title {
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

  .guide-info-box {
    max-width: 400px;
    margin: 0 auto;
  }

  .left-content {
    padding: 24px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .guide-detail-header {
    padding: 20px 0;
  }

  .guide-content {
    padding: 20px 0;
  }

  .guide-title {
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

  .guide-detail-meta {
    margin-bottom: 10px;
  }

  .meta-item {
    font-size: 12px;
    gap: 6px;
  }

  .meta-icon {
    width: 14px;
    height: 14px;
  }

  .meta-text {
    font-size: 12px;
  }

  .tag {
    font-size: 12px;
    padding: 4px 10px;
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

  .guide-info-box {
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

  .guide-category-info,
  .guide-meta,
  .guide-info-box .guide-tags {
    padding: 10px;
  }

  .guide-navigation {
    padding: 10px;
  }

  .nav-title {
    font-size: 14px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .nav-grid {
    gap: 10px;
  }

  .nav-card {
    padding: 10px;
  }

  .nav-card-title {
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .nav-card-direction,
  .nav-card-meta {
    font-size: 12px;
  }

  /* Detail Article 移动端样式已移至 global.css */

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
</style>

