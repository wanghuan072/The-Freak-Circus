<template>
  <div class="blog-detail-page">
    <AppHeader />

    <main class="main-content">
      <!-- Blog Not Found -->
      <div v-if="!blog && !loading" class="blog-not-found">
        <div class="container">
          <h1>{{ $t('BlogDetailPage.notFound.title') }}</h1>
          <p>{{ $t('BlogDetailPage.notFound.description') }}</p>
          <a href="/blog" class="btn btn-primary">{{ $t('BlogDetailPage.notFound.backToBlog') }}</a>
        </div>
      </div>

      <!-- Blog Detail Page -->
      <div class="blog-detail" v-if="blog">
        <div class="container">
          <!-- Breadcrumb -->
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-link">{{ $t('BlogDetailPage.breadcrumb.home') }}</a>
            <span class="breadcrumb-separator">/</span>
            <a href="/blog" class="breadcrumb-link">{{ $t('BlogDetailPage.breadcrumb.blog') }}</a>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current">{{ blog.title }}</span>
          </div>

          <div class="blog-wrapper">
            <!-- Left Side - Main Content -->
            <div class="blog-left">
              <!-- Blog Header -->
              <div class="blog-header-section">
                <h1 class="blog-title">{{ blog.title }}</h1>
                <div class="blog-meta-info">
                  <div class="meta-item">
                    <svg
                      class="meta-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                    <span class="meta-text">{{ formatDate(blog.publishDate) }}</span>
                  </div>
                </div>
                <div class="blog-tags" v-if="blog.tags && blog.tags.length > 0">
                  <span v-for="tag in blog.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>

              <!-- Blog Featured Image -->
              <div class="blog-featured-image" v-if="blog.imageUrl">
                <img :src="blog.imageUrl" :alt="blog.imageAlt" />
              </div>

              <!-- Blog Content -->
              <div class="blog-html" v-html="blog.detailsHtml"></div>
            </div>

            <!-- Right Side - Sidebar -->
            <div class="blog-right">
              <!-- Blog Info -->
              <div class="blog-info-box">
                <h3 class="info-box-title">{{ $t('BlogDetailPage.sidebar.aboutThisPost') }}</h3>
                <div class="blog-meta">
                  <div class="meta-item">
                    <svg
                      class="meta-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                    <span class="meta-text">{{ formatDate(blog.publishDate) }}</span>
                  </div>
                </div>

                <!-- Blog Tags -->
                <div class="blog-tags" v-if="blog.tags && blog.tags.length > 0">
                  <h4 class="tags-title">{{ $t('BlogDetailPage.sidebar.tags') }}</h4>
                  <div class="tags-list">
                    <span v-for="tag in blog.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                </div>
              </div>

              <!-- Related Links -->
              <div class="related-links-box">
                <h3 class="info-box-title">{{ $t('BlogDetailPage.sidebar.relatedLinks') }}</h3>
                <ul class="related-links-list">
                  <li>
                    <a href="/">{{ $t('BlogDetailPage.sidebar.home') }}</a>
                  </li>
                  <li>
                    <a href="/games">{{ $t('BlogDetailPage.sidebar.games') }}</a>
                  </li>
                  <li>
                    <a href="/wiki">{{ $t('BlogDetailPage.sidebar.wiki') }}</a>
                  </li>
                  <li>
                    <a href="/updates">{{ $t('BlogDetailPage.sidebar.updates') }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'

const route = useRoute()
const { locale } = useI18n()
const blog = ref(null)
const loading = ref(true)

const blogId = computed(() => route.params.id)

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const setSEO = () => {
  if (blog.value && blog.value.seo) {
    document.title = blog.value.seo.title
    updateMetaTag('description', blog.value.seo.description)
    updateMetaTag('keywords', blog.value.seo.keywords)
    // 更新 Open Graph 标签
    updateMetaTag('og:title', blog.value.seo.title, 'property')
    updateMetaTag('og:description', blog.value.seo.description, 'property')
    updateMetaTag('og:url', `https://thefreakcircus.org${route.path}`, 'property')
    if (blog.value.imageUrl) {
      updateMetaTag('og:image', `https://thefreakcircus.org${blog.value.imageUrl}`, 'property')
    }
    // 更新 Twitter Card 标签
    updateMetaTag('twitter:title', blog.value.seo.title, 'name')
    updateMetaTag('twitter:description', blog.value.seo.description, 'name')
    // 更新 Canonical URL
    updateCanonicalLink(`https://thefreakcircus.org${route.path}`)
  }
}

const updateMetaTag = (name, content, attribute = 'name') => {
  if (!content) return
  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const updateCanonicalLink = (href) => {
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', href)
}

const loadBlogData = async () => {
  try {
    loading.value = true
    // 动态加载博客数据
    const blogData = await import(`@/data/blog/${locale.value}.js`)
    const blogs = blogData.default
    // 使用 addressBar 来查找博客
    blog.value = blogs.find((b) => b.addressBar === blogId.value)

    // 如果没有找到，回退到英文
    if (!blog.value && locale.value !== 'en') {
      const enBlogData = await import('@/data/blog/en.js')
      const enBlogs = enBlogData.default
      blog.value = enBlogs.find((b) => b.addressBar === blogId.value)
    }

    if (blog.value) {
      setSEO()
    }
  } catch (error) {
    console.error('Failed to load blog data:', error)
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
.blog-detail-page {
  min-height: 100vh;
  background: #000;
  color: #fff;
}

.main-content {
  padding-top: 80px;
}

.blog-detail {
  padding: 120px 0 60px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.breadcrumb-link {
  color: #8b5cf6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #c084fc;
}

.breadcrumb-separator {
  color: #666;
}

.breadcrumb-current {
  color: #ccc;
}

.blog-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

/* Left Side */
.blog-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-header-section {
  margin-bottom: 1rem;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
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
}

.blog-meta-info {
  margin-bottom: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  font-size: 0.9rem;
}

.meta-icon {
  width: 16px;
  height: 16px;
  color: #8b5cf6;
}

.meta-text {
  font-weight: 500;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
}

.tag {
  background: rgba(139, 92, 246, 0.2);
  color: #c084fc;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(139, 92, 246, 0.3);
  transform: translateY(-1px);
}

.blog-featured-image {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.blog-featured-image img {
  width: 100%;
  height: auto;
  display: block;
}

.blog-html {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(30, 20, 30, 0.95) 100%);
  padding: 48px;
  border-radius: 20px;
  color: #fff;
  line-height: 1.9;
  border: 1px solid rgba(139, 92, 246, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.blog-html :deep(.blog-content-wrapper) {
  max-width: 100%;
}

.blog-html :deep(h1) {
  font-size: 2.5rem;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 2rem;
  color: #fff;
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
  line-height: 1.2;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
}

.blog-html :deep(h2) {
  font-size: 2rem;
  font-weight: 800;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: #fff;
  background: linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
  position: relative;
  padding-left: 1rem;
  border-left: 4px solid #8b5cf6;
}

.blog-html :deep(h2:first-of-type) {
  margin-top: 0;
}

.blog-html :deep(h3) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #c084fc;
  line-height: 1.4;
  padding-left: 0.75rem;
  border-left: 3px solid rgba(139, 92, 246, 0.5);
}

.blog-html :deep(p) {
  margin-bottom: 1.5rem;
  color: #e0e0e0;
  font-size: 1.05rem;
  line-height: 1.9;
  text-align: justify;
}

.blog-html :deep(p:first-of-type) {
  font-size: 1.15rem;
  color: #f0f0f0;
  font-weight: 500;
  margin-bottom: 2rem;
}

.blog-html :deep(ul),
.blog-html :deep(ol) {
  margin-bottom: 2rem;
  padding-left: 0;
  list-style: none;
}

.blog-html :deep(ul > li),
.blog-html :deep(ol > li) {
  margin-bottom: 1rem;
  color: #e0e0e0;
  padding-left: 1.75rem;
  position: relative;
  line-height: 1.8;
  font-size: 1.05rem;
}

.blog-html :deep(ul > li::before) {
  content: '▸';
  position: absolute;
  left: 0;
  color: #8b5cf6;
  font-weight: bold;
  font-size: 1.2rem;
}

.blog-html :deep(ol) {
  counter-reset: item;
}

.blog-html :deep(ol > li) {
  counter-increment: item;
  padding-left: 2rem;
}

.blog-html :deep(ol > li::before) {
  content: counter(item) '.';
  position: absolute;
  left: 0;
  color: #8b5cf6;
  font-weight: bold;
  font-size: 1.1rem;
}

.blog-html :deep(a) {
  color: #a855f7;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  border-bottom: 1px solid rgba(168, 85, 247, 0.3);
  padding-bottom: 2px;
}

.blog-html :deep(a:hover) {
  color: #c084fc;
  border-bottom-color: #c084fc;
  text-shadow: 0 0 8px rgba(168, 85, 247, 0.5);
}

.blog-html :deep(strong) {
  color: #fff;
  font-weight: 700;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
  padding: 2px 6px;
  border-radius: 4px;
}

.blog-html :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.blog-html :deep(hr) {
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.5) 50%, transparent 100%);
  margin: 3rem 0;
}

.blog-html :deep(blockquote) {
  border-left: 4px solid #8b5cf6;
  padding-left: 1.5rem;
  margin: 2rem 0;
  color: #d0d0d0;
  font-style: italic;
  background: rgba(139, 92, 246, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 8px;
}

.blog-html :deep(code) {
  background: rgba(139, 92, 246, 0.2);
  color: #c084fc;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.blog-html :deep(pre) {
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid rgba(139, 92, 246, 0.3);
  margin: 2rem 0;
}

.blog-html :deep(pre code) {
  background: transparent;
  padding: 0;
  color: #e0e0e0;
}

/* Right Side */
.blog-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-info-box {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
}

.info-box-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-meta {
  margin-bottom: 1.5rem;
}

.tags-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ccc;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.related-links-box {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
}

.related-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.related-links-list li {
  margin-bottom: 0.75rem;
}

.related-links-list a {
  color: #8b5cf6;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  display: block;
  padding: 8px 0;
}

.related-links-list a:hover {
  color: #c084fc;
  padding-left: 8px;
}

.blog-not-found {
  padding: 120px 0;
  text-align: center;
}

.blog-not-found h1 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1rem;
}

.blog-not-found p {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2rem;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: #fff;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #a855f7 0%, #c084fc 100%);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .blog-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .blog-right {
    order: 2;
  }

  .blog-left {
    order: 1;
  }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }

  .blog-detail {
    padding: 20px 0;
  }

  .blog-wrapper {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .blog-title {
    font-size: 1.8rem;
  }

  .blog-html {
    padding: 20px;
  }

  .blog-html :deep(h2) {
    font-size: 1.4rem;
  }

  .blog-html :deep(h3) {
    font-size: 1.2rem;
  }

  .blog-html :deep(p) {
    font-size: 0.9rem;
  }

  .blog-info-box,
  .related-links-box {
    padding: 16px;
  }

  .breadcrumb {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .blog-not-found h1 {
    font-size: 1.5rem;
  }

  .blog-not-found p {
    font-size: 1rem;
  }
}
</style>

