<template>
  <div class="map-detail-view">
    <!-- Detail Header / Breadcrumb -->
    <section class="detail-header-section">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/vein-map" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            {{ $t('mapDetailPage.breadcrumb.map') }}
          </router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ $t('mapDetailPage.breadcrumb.interactive') }}</span>
        </div>

        <div class="map-detail-content">
          <div class="map-detail-text">
            <h1 class="map-title">{{ $t('mapDetailPage.header.title') }}</h1>
            <p class="map-description">
              {{ $t('mapDetailPage.header.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Content -->
    <section class="map-content">
      <div class="container">
        <h2 class="section-title">{{ $t('mapDetailPage.content.title') }}</h2>
        <div class="map-container">
          <div class="map-iframe-wrapper">
            <iframe src="https://point-atlas.io/map/vein_waylander_68" class="map-iframe" :title="$t('mapDetailPage.header.title')" frameborder="0" allowfullscreen loading="lazy"></iframe>
          </div>


          <!-- <InteractiveMapCanvas
            :markers="markers"
            image-src="/images/map.webp"
            :initial-center="{ x: 0.62, y: 0.53 }"
            :initial-scale="1.6"
          /> -->
          
          <div class="map-info">
            <div class="info-card">
              <h3>{{ $t('mapDetailPage.content.features.title') }}</h3>
              <ul>
                <li><strong>{{ $t('mapDetailPage.content.features.zoom') }}</strong> {{ $t('mapDetailPage.content.features.zoomValue') }}</li>
                <li><strong>{{ $t('mapDetailPage.content.features.pan') }}</strong> {{ $t('mapDetailPage.content.features.panValue') }}</li>
                <li><strong>{{ $t('mapDetailPage.content.features.tooltips') }}</strong> {{ $t('mapDetailPage.content.features.tooltipsValue') }}</li>
                <li><strong>{{ $t('mapDetailPage.content.features.images') }}</strong> {{ $t('mapDetailPage.content.features.imagesValue') }}</li>
              </ul>
            </div>
            
            <div class="info-card">
              <h3>{{ $t('mapDetailPage.content.navigation.title') }}</h3>
              <ul>
                <li>{{ $t('mapDetailPage.content.navigation.tip1') }}</li>
                <li>{{ $t('mapDetailPage.content.navigation.tip2') }}</li>
                <li>{{ $t('mapDetailPage.content.navigation.tip3') }}</li>
                <li>{{ $t('mapDetailPage.content.navigation.tip4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, nextTick, watch } from 'vue'
import { useSEO } from '../seo/composables.js'
import { useI18n } from 'vue-i18n'
import { seoConfig } from '../seo/config.js'
// import InteractiveMapCanvas from '../components/InteractiveMapCanvas.vue'

const { setSEO } = useSEO()
const { t, te, locale } = useI18n()

// const markers = [
//   {
//     id: 'rook-cavern',
//     title: 'Rook Cavern',
//     description: '111',
//     x: 0.64,
//     y: 0.56
//   },
//   {
//     id: 'cold-brook',
//     title: 'Cold Brook Cavern',
//     description: '靠近湖泊的背包与矿点位置。',
//     x: 0.48,
//     y: 0.58
//   },
//   {
//     id: 'legion-post',
//     title: 'Legion Post #0607',
//     description: '中心位置，可作为中期基地的候选点。',
//     x: 0.50,
//     y: 0.55
//   },
//   {
//     id: 'werrenrath-island',
//     title: 'Werrenrath Island',
//     description: '岛屿据点，天然防御高，适合安全基地。',
//     x: 0.36,
//     y: 0.32
//   }
// ]

// 更新SEO
const updateSEO = () => {
  let tdk = null
  if (te('tdk.mapDetail')) {
    tdk = t('tdk.mapDetail', {}, { returnObjects: true })
  }
  setSEO({
    title: tdk?.title || 'VEIN Interactive Map - Full World Map Explorer',
    description: tdk?.description || 'Explore the complete interactive map of VEIN game world.',
    keywords: tdk?.keywords || 'VEIN interactive map, VEIN game map',
    author: seoConfig.defaults.author,
    image: seoConfig.defaults.image,
    type: 'website'
  })
}

onMounted(async () => {
  await nextTick()
  updateSEO()
})

// 监听语言变化，更新 SEO
watch(() => locale.value, () => {
  updateSEO()
})
</script>

<style scoped>
.map-detail-view {
  min-height: 100vh;
}

.detail-header-section {
  padding: 60px 0 40px;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), transparent);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
  color: rgba(255, 210, 210, 0.7);
}

.breadcrumb-arrow {
  width: 16px;
  height: 16px;
  color: rgba(255, 210, 210, 0.5);
}

.breadcrumb-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 210, 210, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--accent);
}

.breadcrumb-current {
  color: rgba(255, 210, 210, 0.6);
}

.map-detail-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.map-title {
  font-size: 3rem;
  margin: 0 0 16px;
  color: var(--text);
  font-weight: 700;
  background: linear-gradient(135deg, rgba(255, 230, 230, 0.95), rgba(255, 200, 200, 0.85));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.map-description {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.8;
  font-size: 1.05rem;
  margin: 0;
}

.map-content {
  padding: 0 0 60px 0;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  text-align: center;
}

.map-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.map-iframe-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* 4:3 aspect ratio */
  position: relative;
  background: rgba(20, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.map-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.map-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.info-card {
  background: linear-gradient(135deg, rgba(20, 0, 0, 0.7), rgba(25, 0, 0, 0.5));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
}

.info-card h3 {
  margin: 0 0 16px;
  font-size: 1.3rem;
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

.info-card ul {
  margin: 0;
  padding-left: 20px;
  list-style: none;
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.8;
}

.info-card ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.info-card ul li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.9rem;
}

.info-card ul li strong {
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .detail-header-section {
    padding: 50px 0 30px;
  }

  .map-title {
    font-size: 2.5rem;
  }

  .map-iframe-wrapper {
    padding-bottom: 80%;
  }

  .map-info {
    grid-template-columns: 1fr;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .detail-header-section {
    padding: 40px 0 20px;
  }

  .breadcrumb {
    font-size: 0.8rem;
    margin-bottom: 16px;
  }

  .map-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .map-description {
    font-size: 12px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .map-content {
    padding: 0 0 20px 0;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .map-iframe-wrapper {
    padding-bottom: 100%;
    border-radius: 12px;
  }

  .map-info {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-card {
    padding: 20px;
  }

  .info-card h3 {
    font-size: 20px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .info-card ul {
    font-size: 12px;
    line-height: 1.6;
  }

  .info-card ul li {
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
</style>

