<template>
  <div class="guides-view">
    <!-- Guide Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">{{ $t('guidesPage.header.title') }}</h1>
          <p class="page-subtitle">
            {{ $t('guidesPage.header.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Guide Categories -->
    <section class="guide-categories">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>{{ $t('guidesPage.loading') }}</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>{{ $t('guidesPage.error') }} {{ error }}</p>
        </div>
        
        <!-- All Guides -->
        <div class="category-section" v-if="!loading && !error">
          <h2 class="section-title">{{ $t('guidesPage.allGuides') }}</h2>
          <div class="guides-grid">
            <div 
              v-for="guide in allGuides" 
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
                  <span class="view-link">{{ $t('guidesPage.viewLink') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us-section">
      <div class="container">
        <h2 class="section-title">{{ $t('guidesPage.whyChoose.title') }}</h2>
        <p class="section-subtitle">
          {{ $t('guidesPage.whyChoose.subtitle') }}
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>{{ $t('guidesPage.whyChoose.features.comprehensive.title') }}</h3>
            <p>
              {{ $t('guidesPage.whyChoose.features.comprehensive.content') }} <router-link to="/vein-guides/ultimate-world-settings-guide" class="inline-link">{{ $t('guidesPage.whyChoose.features.comprehensive.link') }}</router-link> {{ $t('guidesPage.whyChoose.features.comprehensive.content2') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>{{ $t('guidesPage.whyChoose.features.expert.title') }}</h3>
            <p>
              {{ $t('guidesPage.whyChoose.features.expert.content') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>{{ $t('guidesPage.whyChoose.features.updated.title') }}</h3>
            <p>
              {{ $t('guidesPage.whyChoose.features.updated.content') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📍</div>
            <h3>{{ $t('guidesPage.whyChoose.features.locations.title') }}</h3>
            <p>
              {{ $t('guidesPage.whyChoose.features.locations.content') }} <router-link to="/vein-guides/vein-best-base-location-survival-guide" class="inline-link">{{ $t('guidesPage.whyChoose.features.locations.link1') }}</router-link> {{ $t('guidesPage.whyChoose.features.locations.content2') }} <router-link to="/vein-guides/vein-best-loot-locations" class="inline-link">{{ $t('guidesPage.whyChoose.features.locations.link2') }}</router-link> {{ $t('guidesPage.whyChoose.features.locations.content2') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚙️</div>
            <h3>{{ $t('guidesPage.whyChoose.features.settings.title') }}</h3>
            <p>
              {{ $t('guidesPage.whyChoose.features.settings.content') }} <router-link to="/vein-guides/ultimate-world-settings-guide" class="inline-link">{{ $t('guidesPage.whyChoose.features.settings.link') }}</router-link> {{ $t('guidesPage.whyChoose.features.settings.content2') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>{{ $t('guidesPage.whyChoose.features.community.title') }}</h3>
            <p>
              {{ $t('guidesPage.whyChoose.features.community.content') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">{{ $t('guidesPage.faq.title') }}</h2>
        <div class="faq-grid">
          <article class="faq-item">
            <h3>{{ $t('guidesPage.faq.items.topics.question') }}</h3>
            <p>
              {{ $t('guidesPage.faq.items.topics.answer1') }}
            </p>
            <p>
              {{ $t('guidesPage.faq.items.topics.answer2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('guidesPage.faq.items.beginners.question') }}</h3>
            <p>
              {{ $t('guidesPage.faq.items.beginners.answer1') }} <router-link to="/vein-guides/ultimate-world-settings-guide" class="inline-link">{{ $t('guidesPage.faq.items.beginners.link') }}</router-link> {{ $t('guidesPage.faq.items.beginners.answer2') }}
            </p>
            <p>
              {{ $t('guidesPage.faq.items.beginners.answer3') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('guidesPage.faq.items.updated.question') }}</h3>
            <p>
              {{ $t('guidesPage.faq.items.updated.answer1') }}
            </p>
            <p>
              {{ $t('guidesPage.faq.items.updated.answer2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('guidesPage.faq.items.locations.question') }}</h3>
            <p>
              {{ $t('guidesPage.faq.items.locations.answer1') }} <router-link to="/vein-guides/how-to-find-clinton-correctional-facility-armory" class="inline-link">{{ $t('guidesPage.faq.items.locations.link') }}</router-link>{{ $t('guidesPage.faq.items.locations.answer2') }}
            </p>
            <p>
              {{ $t('guidesPage.faq.items.locations.answer3') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('guidesPage.faq.items.multiplayer.question') }}</h3>
            <p>
              {{ $t('guidesPage.faq.items.multiplayer.answer1') }}
            </p>
            <p>
              {{ $t('guidesPage.faq.items.multiplayer.answer2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('guidesPage.faq.items.spoilers.question') }}</h3>
            <p>
              {{ $t('guidesPage.faq.items.spoilers.answer1') }}
            </p>
            <p>
              {{ $t('guidesPage.faq.items.spoilers.answer2') }}
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '../composables/useGuideData'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const router = useRouter()
const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { guides, loading, error, loadData } = useGuideData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 监听语言变化，重新加载数据
watch(() => locale.value, () => {
  loadData()
})

// 所有指南
const allGuides = computed(() => {
  return guides.value || []
})

const goToGuide = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(getLocalizedPath(`/vein-guides${path}`))
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
    'getting-started': 'GETTING STARTED',
    'walkthroughs': 'WALKTHROUGHS',
    'advanced': 'ADVANCED'
  }
  return categoryMap[category] || 'GUIDE'
}
</script>

<style scoped>
.guides-view {
  min-height: 100vh;
  position: relative;
}

.guide-categories {
  padding: 0 0 40px 0;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  text-align: center;
}

.category-section {
  margin-bottom: 40px;
}

.category-section:last-child {
  margin-bottom: 0;
}

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

.guide-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.4);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
}

.guide-card:hover::before {
  opacity: 1;
}

.guide-card-header {
  margin-bottom: 16px;
}

.category-tag {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
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

.guide-card:hover .view-link {
  color: #fff;
  text-shadow: 0 0 8px rgba(255, 54, 54, 0.6);
}

.loading-state,
.error-state {
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 210, 210, 0.7);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .guide-categories {
    padding: 0 0 20px 0;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .guide-card {
    padding: 0;
  }

  .guide-title {
    font-size: 16px;
  }

  .guide-description {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .category-tag {
    font-size: 0.6rem;
    padding: 3px 8px;
  }

  .tag {
    font-size: 12px;
    padding: 3px 8px;
  }

  .update-date {
    font-size: 12px;
  }

  .view-link {
    font-size: 12px;
  }

  .guide-footer {
    padding-top: 5px;
  }

  .loading-state,
  .error-state {
    padding: 20px;
    font-size: 12px;
  }
}

/* Why Choose Us Section */
.why-choose-us-section {
  padding: 60px 0;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), rgba(30, 0, 0, 0.6));
  border-top: 1px solid rgba(255, 54, 54, 0.1);
  border-bottom: 1px solid rgba(255, 54, 54, 0.1);
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 215, 215, 0.7);
  margin: 0 auto 40px;
  max-width: 800px;
  font-size: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.feature-card {
  background: rgba(30, 0, 0, 0.6);
  border: 1px solid rgba(255, 54, 54, 0.2);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.4);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  display: block;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffd8d8;
  margin: 0 0 12px 0;
}

.feature-card p {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
}

/* FAQ Section */
.faq-section {
  padding: 60px 0;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.faq-item {
  background: rgba(30, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(255, 54, 54, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.faq-item h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffd8d8;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.faq-item p {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.6;
  margin: 0 0 12px 0;
  font-size: 0.9rem;
}

  .faq-item p:last-child {
    margin-bottom: 0;
  }

  .inline-link {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid rgba(255, 54, 54, 0.3);
    transition: all 0.3s ease;
    position: relative;
  }

  .inline-link:hover {
    color: #fff;
    border-bottom-color: var(--accent);
    text-shadow: 0 0 8px rgba(255, 54, 54, 0.5);
  }

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .faq-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .why-choose-us-section,
  .faq-section {
    padding: 40px 0;
  }

  .section-subtitle {
    font-size: 0.9rem;
    margin-bottom: 30px;
    padding: 0 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
  }

  .feature-card {
    padding: 24px 20px;
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  .feature-card h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .feature-card p {
    font-size: 0.85rem;
  }

  .faq-grid {
    margin-top: 30px;
    gap: 16px;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-item h3 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .faq-item p {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }

  .inline-link {
    font-size: 0.85rem;
    border-bottom-width: 1px;
  }
}
</style>
