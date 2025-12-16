<template>
  <div class="wiki-view">
    <!-- Header Section -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">{{ $t('wikiPage.header.title') }}</h1>
          <p class="page-subtitle">
            {{ $t('wikiPage.header.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Wiki Articles -->
    <section class="articles-section">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>{{ $t('wikiPage.loading') }}</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>{{ $t('wikiPage.error') }} {{ error }}</p>
        </div>
        
        <!-- Section Title -->
        <h2 class="section-title" v-if="!loading && !error">{{ $t('wikiPage.allArticles') }}</h2>
        <p class="section-note" v-if="!loading && !error">
          {{ $t('wikiPage.sectionNote') }}
        </p>
        
        <!-- Articles Grid -->
        <div class="articles-grid" v-if="!loading && !error">
          <div
            v-for="item in allWikis"
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
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us-section">
      <div class="container">
        <h2 class="section-title">{{ $t('wikiPage.whyChoose.title') }}</h2>
        <p class="section-subtitle">
          {{ $t('wikiPage.whyChoose.subtitle') }}
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>{{ $t('wikiPage.whyChoose.features.knowledge.title') }}</h3>
            <p>
              {{ $t('wikiPage.whyChoose.features.knowledge.content') }} <router-link to="/vein-wiki/mechanics" class="inline-link">{{ $t('wikiPage.whyChoose.features.knowledge.link') }}</router-link> {{ $t('wikiPage.whyChoose.features.knowledge.content2') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>{{ $t('wikiPage.whyChoose.features.mechanics.title') }}</h3>
            <p>
              {{ $t('wikiPage.whyChoose.features.mechanics.content') }} <router-link to="/vein-wiki/mechanics" class="inline-link">{{ $t('wikiPage.whyChoose.features.mechanics.link') }}</router-link> {{ $t('wikiPage.whyChoose.features.mechanics.content2') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚔️</div>
            <h3>{{ $t('wikiPage.whyChoose.features.skills.title') }}</h3>
            <p>
              {{ $t('wikiPage.whyChoose.features.skills.content') }} <router-link to="/vein-wiki/skills" class="inline-link">{{ $t('wikiPage.whyChoose.features.skills.link') }}</router-link> {{ $t('wikiPage.whyChoose.features.skills.content2') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏗️</div>
            <h3>{{ $t('wikiPage.whyChoose.features.building.title') }}</h3>
            <p>
              {{ $t('wikiPage.whyChoose.features.building.content') }} <router-link to="/vein-wiki/building" class="inline-link">{{ $t('wikiPage.whyChoose.features.building.link') }}</router-link> {{ $t('wikiPage.whyChoose.features.building.content2') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚗</div>
            <h3>{{ $t('wikiPage.whyChoose.features.vehicles.title') }}</h3>
            <p>
              {{ $t('wikiPage.whyChoose.features.vehicles.content') }} <router-link to="/vein-wiki/vehicles" class="inline-link">{{ $t('wikiPage.whyChoose.features.vehicles.link') }}</router-link> {{ $t('wikiPage.whyChoose.features.vehicles.content2') }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🍳</div>
            <h3>{{ $t('wikiPage.whyChoose.features.recipes.title') }}</h3>
            <p>
              {{ $t('wikiPage.whyChoose.features.recipes.content') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">{{ $t('wikiPage.faq.title') }}</h2>
        <div class="faq-grid">
          <article class="faq-item">
            <h3>{{ $t('wikiPage.faq.items.information.question') }}</h3>
            <p>
              {{ $t('wikiPage.faq.items.information.answer1') }}
            </p>
            <p>
              {{ $t('wikiPage.faq.items.information.answer2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('wikiPage.faq.items.controls.question') }}</h3>
            <p>
              {{ $t('wikiPage.faq.items.controls.answer1') }} <router-link to="/vein-wiki/controls" class="inline-link">{{ $t('wikiPage.faq.items.controls.link') }}</router-link> {{ $t('wikiPage.faq.items.controls.answer2') }}
            </p>
            <p>
              {{ $t('wikiPage.faq.items.controls.answer3') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('wikiPage.faq.items.skills.question') }}</h3>
            <p>
              {{ $t('wikiPage.faq.items.skills.answer1') }} <router-link to="/vein-wiki/skills" class="inline-link">{{ $t('wikiPage.faq.items.skills.link') }}</router-link> {{ $t('wikiPage.faq.items.skills.answer2') }}
            </p>
            <p>
              {{ $t('wikiPage.faq.items.skills.answer3') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('wikiPage.faq.items.recipes.question') }}</h3>
            <p>
              {{ $t('wikiPage.faq.items.recipes.answer1') }} <router-link to="/vein-wiki/cooking-recipes" class="inline-link">{{ $t('wikiPage.faq.items.recipes.link') }}</router-link> {{ $t('wikiPage.faq.items.recipes.answer2') }}
            </p>
            <p>
              {{ $t('wikiPage.faq.items.recipes.answer3') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('wikiPage.faq.items.building.question') }}</h3>
            <p>
              {{ $t('wikiPage.faq.items.building.answer1') }}
            </p>
            <p>
              {{ $t('wikiPage.faq.items.building.answer2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ $t('wikiPage.faq.items.updated.question') }}</h3>
            <p>
              {{ $t('wikiPage.faq.items.updated.answer1') }}
            </p>
            <p>
              {{ $t('wikiPage.faq.items.updated.answer2') }}
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
import { useWikiData } from '../../composables/useWikiData'
import { useLocalizedPath } from '../../composables/useLocalizedPath'

const router = useRouter()
const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { wiki, loading, error, loadData } = useWikiData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 监听语言变化，重新加载数据
watch(() => locale.value, () => {
  loadData()
})

// 所有 wiki 条目
const allWikis = computed(() => {
  return wiki.value || []
})

const goToWiki = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(getLocalizedPath(`/vein-wiki${path}`))
}
</script>

<style scoped>
.wiki-view {
  min-height: 100vh;
}

.articles-section {
  padding: 0 0 40px 0;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  text-align: center;
}

.section-note {
  text-align: center;
  color: rgba(255, 210, 210, 0.82);
  margin: -10px auto 26px;
  max-width: 860px;
  line-height: 1.7;
}

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

.loading-state,
.error-state {
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 210, 210, 0.7);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .articles-section {
    padding: 0 0 20px 0;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .article-card {
    padding: 0;
  }

  .card-title {
    font-size: 12px;
    padding: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
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
