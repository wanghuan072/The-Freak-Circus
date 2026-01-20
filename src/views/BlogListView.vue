<template>
  <div class="blog-list-page">
    <AppHeader />

    <main class="main-content">
      <!-- Blog Header -->
      <div class="blog-header">
        <div class="container">
          <div class="header-content">
            <h1 class="page-title">{{ $t('BlogListPage.header.title') }}</h1>
            <p class="page-subtitle">{{ $t('BlogListPage.header.subtitle') }}</p>
          </div>
        </div>
      </div>

      <!-- Blog List Section -->
      <div class="blog-content">
        <div class="container">
          <div v-if="loading" class="loading-state">
            <p>{{ $t('BlogListPage.loading') }}</p>
          </div>

          <div v-if="error" class="error-state">
            <p>{{ $t('BlogListPage.error') }} {{ error }}</p>
          </div>

          <div v-if="!loading && !error" class="blog-grid">
            <a
              v-for="blog in blogs"
              :key="blog.id"
              :href="getLocalizedPath(`/blog/${blog.addressBar}`)"
              class="blog-card"
            >
              <div class="blog-image-wrapper">
                <img :src="blog.imageUrl" :alt="blog.imageAlt" class="blog-image" loading="lazy" />
                <div class="blog-overlay">
                  <span class="view-button">
                    {{ $t('BlogListPage.viewDetails') }}
                  </span>
                </div>
              </div>
              <div class="blog-info">
                <h2 class="blog-title">{{ blog.title }}</h2>
                <p class="blog-description">{{ blog.description }}</p>
                <div class="blog-tags" v-if="blog.tags && blog.tags.length > 0">
                  <span v-for="tag in blog.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <div class="blog-meta">
                  <span class="blog-date">{{ formatDate(blog.publishDate) }}</span>
                  <span class="blog-link">{{ $t('BlogListPage.readMore') }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'
import { supportedLanguages } from '@/i18n'

const { locale } = useI18n()
const route = useRoute()
const blogs = ref([])
const loading = ref(false)
const error = ref(null)

// 获取本地化路径
const getLocalizedPath = (path) => {
  // 从当前路由路径中提取语言
  const pathSegments = route.path.split('/').filter(Boolean)
  const supportedLangs = supportedLanguages.filter((l) => l !== 'en')
  const currentLang =
    pathSegments[0] && supportedLangs.includes(pathSegments[0]) ? pathSegments[0] : 'en'

  // 如果当前语言是英文，直接返回路径
  if (currentLang === 'en') {
    return path
  }

  // 否则添加语言前缀
  return `/${currentLang}${path}`
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const loadBlogData = async () => {
  try {
    loading.value = true
    error.value = null
    // 动态加载博客数据
    const blogData = await import(`@/data/blog/${locale.value}.js`)
    blogs.value = blogData.default
  } catch (err) {
    console.error('Failed to load blog data:', err)
    error.value = err.message || 'Failed to load blog data'
    // 回退到英文
    if (locale.value !== 'en') {
      try {
        const enBlogData = await import('@/data/blog/en.js')
        blogs.value = enBlogData.default
      } catch (enError) {
        console.error('Failed to load English blog data:', enError)
        blogs.value = []
      }
    } else {
      blogs.value = []
    }
  } finally {
    loading.value = false
  }
}

// 监听语言变化，重新加载博客数据
watch(
  locale,
  () => {
    loadBlogData()
  },
  { immediate: false }
)

onMounted(() => {
  loadBlogData()
})
</script>

<style scoped>
.blog-list-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.blog-header {
  padding: 120px 0 60px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.header-content {
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(
    135deg,
    #ff6b6b 0%,
    #ff8e53 25%,
    #ff6b9d 50%,
    #c44569 75%,
    #f8b500 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #ccc;
}

.blog-content {
  padding: 60px 0;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 40px;
  color: #ccc;
}

.error-state {
  color: #ff6b6b;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.blog-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: block;
  text-decoration: none;
  color: inherit;
}

.blog-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.blog-image-wrapper {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.blog-card:hover .blog-overlay {
  opacity: 1;
}

.blog-card:hover .blog-image {
  transform: scale(1.1);
}

.view-button {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-button:hover {
  background: linear-gradient(135deg, #a855f7 0%, #c084fc 100%);
  transform: scale(1.05);
}

.blog-info {
  padding: 1.5rem;
}

.blog-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.blog-description {
  color: #ccc;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(139, 92, 246, 0.2);
  color: #c084fc;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-date {
  color: #888;
  font-size: 0.85rem;
}

.blog-link {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.blog-link:hover {
  color: #a855f7;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }
}
</style>



