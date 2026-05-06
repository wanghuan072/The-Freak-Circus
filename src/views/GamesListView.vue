<template>
  <div class="games-list-page">
    <AppHeader />

    <main class="main-content">
      <!-- Header Section -->
      <div class="games-header">
        <div class="container">
          <div class="header-content">
            <h1 class="page-title">{{ $t('GamesListPage.header.title') }}</h1>
            <p class="page-subtitle">{{ $t('GamesListPage.header.subtitle') }}</p>
          </div>

        </div>
      </div>

      <!-- Games List Section -->
      <div class="games-content">
        <div class="container">
          <!-- 联盟广告已停用（仅首页保留）
          <div class="adsterra-native-wrap">
            <div id="container-20f454a6b133aad5da418bed2ee46fa4"></div>
          </div>
          <div v-if="!isMobile" class="adsterra-banner-slot" ref="ad728aRef"></div>
          <div v-if="isMobile" class="adsterra-banner-slot" ref="ad300aRef"></div>
          -->
          <div ref="gAds0" class="adsterra-native-wrap">
            <ins
              v-if="!isMobile"
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-5437957765171705"
              data-ad-slot="3600146881"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <ins
              v-else
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-5437957765171705"
              data-ad-slot="1185736536"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>

          <div ref="gAds1" class="adsterra-banner-slot">
            <ins
              v-if="!isMobile"
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-5437957765171705"
              data-ad-slot="8023891485"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <ins
              v-else
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-5437957765171705"
              data-ad-slot="1185736536"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>

          <div class="games-grid">
            <a
              v-for="game in games"
              :key="game.id"
              :href="getLocalizedPath(`/games/${game.addressBar}`)"
              class="game-card"
            >
              <div class="game-image-wrapper">
                <img :src="game.imageUrl" :alt="game.imageAlt" class="game-image" />
                <div class="game-overlay">
                  <span class="play-button">
                    {{ $t('GamesListPage.viewDetails') }}
                  </span>
                </div>
              </div>
              <div class="game-info">
                <h2 class="game-title">{{ game.title }}</h2>
                <p class="game-description">{{ game.description }}</p>
                <div class="game-meta">
                  <span class="game-date">{{ formatDate(game.publishDate) }}</span>
                  <span class="game-link">{{ $t('GamesListPage.playNow') }}</span>
                </div>
              </div>
            </a>
          </div>

          <!--
          <div v-if="!isMobile" class="adsterra-banner-slot" ref="ad728bRef"></div>
          <div v-if="isMobile" class="adsterra-banner-slot" ref="ad300bRef"></div>
          -->
          <div ref="gAds2" class="adsterra-banner-slot">
            <ins
              v-if="!isMobile"
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-5437957765171705"
              data-ad-slot="1818565461"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <ins
              v-else
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-5437957765171705"
              data-ad-slot="1185736536"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
      </div>
    </main>



    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'
import { supportedLanguages } from '@/i18n'

const isMobile = ref(false)
const gAds0 = ref(null)
const gAds1 = ref(null)
const gAds2 = ref(null)

onMounted(() => {
  const mq = window.matchMedia('(max-width: 1023px)')
  const apply = () => {
    isMobile.value = mq.matches
  }
  apply()
  mq.addEventListener('change', apply)
})

function waitAdsenseLoaded() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    let n = 0
    const id = setInterval(() => {
      n += 1
      if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
        clearInterval(id)
        resolve()
      } else if (n > 200) {
        clearInterval(id)
        resolve()
      }
    }, 50)
  })
}

async function pushAdsenseInPage() {
  await waitAdsenseLoaded()
  await nextTick()
  await nextTick()
  const roots = [gAds0, gAds1, gAds2]
  for (const r of roots) {
    await nextTick()
    const wrap = r.value
    if (!wrap?.querySelector) continue
    const ins = wrap.querySelector('ins.adsbygoogle')
    if (!ins) continue
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (_) {}
    await new Promise((res) => requestAnimationFrame(() => res()))
  }
}

watch(isMobile, () => {
  void pushAdsenseInPage()
})

onMounted(() => {
  void pushAdsenseInPage()
})

// --- 联盟广告 script（已与模板一并注释）：恢复时请取消本节与模板中对应注释块 ---
// import { useAdsterraPageAds } from '@/composables/useAdsterraPageAds'
// const ad728aRef = ref(null)
// const ad728bRef = ref(null)
// const ad300aRef = ref(null)
// const ad300bRef = ref(null)
// const { isMobile } = useAdsterraPageAds([ad728aRef, ad728bRef], [ad300aRef, ad300bRef])

const { locale } = useI18n()
const route = useRoute()
const games = ref([])

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
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const loadGamesData = async () => {
  try {
    // 动态加载游戏数据
    const gamesData = await import(`@/data/${locale.value}/games.js`)
    games.value = gamesData.default
  } catch (error) {
    console.error('Failed to load games data:', error)
    // 回退到英文
    if (locale.value !== 'en') {
      const gamesData = await import('@/data/en/games.js')
      games.value = gamesData.default
    }
  }
}

// 监听语言变化，重新加载游戏数据
watch(
  locale,
  () => {
    loadGamesData()
  },
  { immediate: false }
)

onMounted(() => {
  loadGamesData()
})
</script>

<style scoped>
.games-list-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.games-header {
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

.games-content {
  padding: 60px 0;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.game-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: block;
  text-decoration: none;
  color: inherit;
}

.game-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.game-image-wrapper {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.game-overlay {
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

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-button {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: linear-gradient(135deg, #a855f7 0%, #c084fc 100%);
  transform: scale(1.05);
}

.game-info {
  padding: 1rem;
}

.game-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}

.game-description {
  color: #ccc;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  line-height: 1.4;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.game-date {
  color: #888;
  font-size: 0.9rem;
}

.game-link {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.game-link:hover {
  color: #a855f7;
}

@media (max-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .page-title {
    font-size: 2rem;
  }
}
</style>
