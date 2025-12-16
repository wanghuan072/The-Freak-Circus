<template>
  <div class="home-view">
    <main>
      <!-- Hero Section -->
      <section class="hero hero-background">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <p class="badge">{{ $t('homePage.hero.badge') }}</p>
              <h1 class="hero-title">{{ $t('homePage.hero.title') }}</h1>
              <p class="hero-subtitle">
                {{ $t('homePage.hero.subtitle') }}
              </p>
              <div class="hero-actions">
                <router-link
                  to="/vein-map"
                  class="btn-hero btn-steam"
                >
                  <span>{{ $t('homePage.hero.button1') }}</span>
                </router-link>
                <a href="/vein-guides" class="btn-hero btn-secondary">{{ $t('homePage.hero.button2') }}</a>
              </div>
              <div class="hero-stats">
                <div class="stat">
                  <p class="label">{{ $t('homePage.hero.stats.releaseDate') }}</p>
                  <p class="value">{{ $t('homePage.hero.stats.releaseDateValue') }}</p>
                </div>
                <div class="stat">
                  <p class="label">{{ $t('homePage.hero.stats.genre') }}</p>
                  <p class="value">{{ $t('homePage.hero.stats.genreValue') }}</p>
                </div>
                <div class="stat">
                  <p class="label">{{ $t('homePage.hero.stats.platform') }}</p>
                  <p class="value">{{ $t('homePage.hero.stats.platformValue') }}</p>
                </div>
              </div>
            </div>
            <div class="hero-video">
              <div class="video-player">
                <div class="video-thumbnail" v-if="!isVideoPlaying">
                  <div class="video-mask">
                    <span>{{ $t('homePage.hero.video.title') }}</span>
                  </div>
                  <div class="play-button" @click="playVideo">▶</div>
                </div>
                <div class="video-iframe" v-else>
                  <iframe
                    src="https://www.youtube.com/embed/qjLDbxB-Xt4"
                    frameborder="0"
                    allowfullscreen
                    class="video-frame"
                  ></iframe>
                  <button class="close-video" @click="closeVideo">×</button>
                </div>
                <div class="video-info">
                  <div class="video-header">
                    <span>{{ $t('homePage.hero.video.developer') }}</span>
                    <span class="dot"></span>
                    <span>{{ $t('homePage.hero.video.briefing') }}</span>
                  </div>
                  <p>
                    {{ $t('homePage.hero.video.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What is Section -->
      <section class="what-is">
        <div class="container">
          <h2 class="section-title">{{ $t('homePage.whatIs.title') }}</h2>
          <p class="section-subtitle">
            {{ $t('homePage.whatIs.subtitle') }}
          </p>
          <div class="what-is-content">
            <div class="what-is-image">
              <img src="/images/what-01.webp" alt="VEIN Game" />
            </div>
            <div class="what-is-text">
              <h3>{{ $t('homePage.whatIs.scavenging.title') }}</h3>
              <p>
                {{ $t('homePage.whatIs.scavenging.content1') }} <router-link to="/vein-guides/vein-best-loot-locations" class="inline-link">{{ $t('homePage.whatIs.scavenging.link1') }}</router-link> {{ $t('homePage.whatIs.scavenging.content2') }}
              </p>
              <p>
                {{ $t('homePage.whatIs.scavenging.content3') }} <router-link to="/vein-wiki/controls" class="inline-link">{{ $t('homePage.whatIs.scavenging.link2') }}</router-link> {{ $t('homePage.whatIs.scavenging.content4') }}
              </p>
            </div>
          </div>
          <div class="what-is-content reverse">
            <div class="what-is-image">
              <img src="/images/what-02.webp" alt="VEIN Game" />
            </div>
            <div class="what-is-text">
              <h3>{{ $t('homePage.whatIs.dynamic.title') }}</h3>
              <p>
                {{ $t('homePage.whatIs.dynamic.content1') }} <router-link to="/vein-wiki/mechanics" class="inline-link">{{ $t('homePage.whatIs.dynamic.link1') }}</router-link> {{ $t('homePage.whatIs.dynamic.content2') }}
              </p>
              <p>
                {{ $t('homePage.whatIs.dynamic.content3') }}
              </p>
            </div>
          </div>
          <div class="what-is-content">
            <div class="what-is-image">
              <img src="/images/what-03.webp" alt="VEIN Game" />
            </div>
            <div class="what-is-text">
              <h3>{{ $t('homePage.whatIs.defending.title') }}</h3>
              <p>
                {{ $t('homePage.whatIs.defending.content1') }} <router-link to="/vein-guides/vein-best-base-location-survival-guide" class="inline-link">{{ $t('homePage.whatIs.defending.link1') }}</router-link> {{ $t('homePage.whatIs.defending.content2') }} <router-link to="/vein-wiki/building" class="inline-link">{{ $t('homePage.whatIs.defending.link2') }}</router-link> {{ $t('homePage.whatIs.defending.content3') }}
              </p>
              <p>
                {{ $t('homePage.whatIs.defending.content4') }} <router-link to="/vein-wiki/skills" class="inline-link">{{ $t('homePage.whatIs.defending.link3') }}</router-link> {{ $t('homePage.whatIs.defending.content5') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Guides Section -->
      <section class="guides-section">
        <div class="container">
          <h2 class="section-title">{{ $t('homePage.guides.title') }}</h2>
          <p class="section-subtitle">
            {{ $t('homePage.guides.subtitle') }}
          </p>
          <div class="guides-grid">
            <article
              v-for="guide in homeGuides"
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
                  <span class="view-link">{{ $t('homePage.guides.viewLink') }}</span>
                </div>
              </div>
            </article>
          </div>
          <div class="guides-actions" v-if="homeGuides.length > 0">
            <router-link to="/vein-guides" class="btn-hero btn-secondary">{{ $t('homePage.guides.viewAll') }}</router-link>
          </div>
        </div>
      </section>

      <!-- Game Information -->
      <section class="game-info">
        <div class="container">
          <h2 class="section-title">{{ $t('homePage.gameInfo.title') }}</h2>
          <p class="section-subtitle">
            {{ $t('homePage.gameInfo.subtitle') }}
          </p>
          <div class="info-layout">
            <div class="info-card">
              <h3>{{ $t('homePage.gameInfo.snapshot.title') }}</h3>
              <ul>
                <li>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.title') }}</span>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.titleValue') }}</span>
                </li>
                <li>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.developer') }}</span>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.developerValue') }}</span>
                </li>
                <li>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.release') }}</span>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.releaseValue') }}</span>
                </li>
                <li>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.platform') }}</span>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.platformValue') }}</span>
                </li>
                <li>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.modes') }}</span>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.modesValue') }}</span>
                </li>
                <li>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.contentAdvisory') }}</span>
                  <span>{{ $t('homePage.gameInfo.snapshot.fields.contentAdvisoryValue') }}</span>
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>{{ $t('homePage.gameInfo.requirements.title') }}</h3>
              <div class="requirements">
                <div>
                  <p class="req-label">{{ $t('homePage.gameInfo.requirements.minimum') }}</p>
                  <ul>
                    <li>{{ $t('homePage.gameInfo.requirements.minimumItems.os') }}</li>
                    <li>{{ $t('homePage.gameInfo.requirements.minimumItems.memory') }}</li>
                    <li>{{ $t('homePage.gameInfo.requirements.minimumItems.directx') }}</li>
                    <li>{{ $t('homePage.gameInfo.requirements.minimumItems.storage') }}</li>
                  </ul>
                </div>
                <div>
                  <p class="req-label">{{ $t('homePage.gameInfo.requirements.recommended') }}</p>
                  <ul>
                    <li>{{ $t('homePage.gameInfo.requirements.recommendedItems.os') }}</li>
                    <li>{{ $t('homePage.gameInfo.requirements.recommendedItems.memory') }}</li>
                    <li>{{ $t('homePage.gameInfo.requirements.recommendedItems.directx') }}</li>
                    <li>{{ $t('homePage.gameInfo.requirements.recommendedItems.network') }}</li>
                    <li>{{ $t('homePage.gameInfo.requirements.recommendedItems.storage') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="language-table">
            <table>
              <thead>
                <tr>
                  <th>{{ $t('homePage.gameInfo.language.table.language') }}</th>
                  <th>{{ $t('homePage.gameInfo.language.table.interface') }}</th>
                  <th>{{ $t('homePage.gameInfo.language.table.audio') }}</th>
                  <th>{{ $t('homePage.gameInfo.language.table.subtitles') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ $t('homePage.gameInfo.language.table.english') }}</td>
                  <td>✓</td>
                  <td></td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>{{ $t('homePage.gameInfo.language.table.additional') }}</td>
                  <td colspan="3">
                    {{ $t('homePage.gameInfo.language.table.additionalValue') }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Planned Features -->
      <section class="planned-section">
        <div class="container">
          <h2 class="section-title">{{ $t('homePage.planned.title') }}</h2>
          <p class="section-subtitle">
            {{ $t('homePage.planned.subtitle') }}
          </p>
          <div class="planned-grid">
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.multiplayer.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.multiplayer.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.environment.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.environment.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.ai.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.ai.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.inventory.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.inventory.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.world.title') }}</h3>
              <p>{{ $t('homePage.planned.features.world.description') }}</p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.usable.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.usable.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.fortification.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.fortification.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.survivalism.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.survivalism.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.characters.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.characters.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.trade.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.trade.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.vehicles.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.vehicles.description') }}
              </p>
            </article>
            <article class="planned-card">
              <h3>{{ $t('homePage.planned.features.grid.title') }}</h3>
              <p>
                {{ $t('homePage.planned.features.grid.description') }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Reviews -->
      <section class="reviews-section">
        <div class="container">
          <h2 class="section-title">{{ $t('homePage.reviews.title') }}</h2>
          <p class="section-subtitle">{{ $t('homePage.reviews.subtitle') }}</p>
          <div class="reviews-grid">
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">X</span>
                <div>
                  <h4>XxBoyEatsGirlxX</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "This review is counted in the overall review score because this user purchased the game directly on Steam or got a free license of a free game
Recommended
71.4 hrs on record (55.2 hrs at review time)
Early Access Review
Posted: 15 November
I am a 7 Days to Die fanatic. Absolutely love that game but have watched as the game missed the mark with updates, patches and DLC.
Vein is THE BEST zombie survival game I have played. Period.
A cross of seven days and proj Z in first person. The jaw dropping amount of content these 2 developers have put into this game is astounding. And their road map and constant updates lets me know these devs love their baby!
I'm not sure I need to play any other game than this one.
Vein is a beautiful well crafted world that is only going to get better!"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">C</span>
                <div>
                  <h4>Cole</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "Ill start of by saying that this is going to be the next great zombie survival game. The realism is incredible. What you expect to happen in real life, happens in the game so it makes survival feel real. The fact you can search and demolish just about anything is a huge bright spot. I can already picture the multiplayer servers where a clan has control of the prison (like in the walking dead) while having parts of their team exploring and negotiating with other settlements that maybe control and entire town (yes its possible)"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">M</span>
                <div>
                  <h4>Mariner</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "World interactivity in VEIN game is wild—being able to open anything, move
                anything, and weaponize junk makes this survival game feel alive."
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">R</span>
                <div>
                  <h4>Refgain</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "Great game. These devs kicks ass compared to sucky EA or any other multi million company!!!!"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">R</span>
                <div>
                  <h4>reznov</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "absolute banger of a game. It's rusty, a bit buggy on the edges but it's new and being worked on; Even then, I love it, been playing for a while and I'm excited to keep doing so and see how the game grows. Keep it up, people."
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">A</span>
                <div>
                  <h4>Archive</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "Excellent game. The POIs are very good. The ability to continually expand is excellent. However, killing animals does not yield enough. If the animal was infected or diseased, understandable. Looking forward to the next update."
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="faq-section">
        <div class="container">
          <h2 class="section-title">{{ $t('homePage.faq.title') }}</h2>
          <div class="faq-grid">
            <article class="faq-item">
              <h3>{{ $t('homePage.faq.items.whatIs.question') }}</h3>
              <p>
                {{ $t('homePage.faq.items.whatIs.answer') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ $t('homePage.faq.items.platforms.question') }}</h3>
              <p>
                {{ $t('homePage.faq.items.platforms.answer') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ $t('homePage.faq.items.different.question') }}</h3>
              <p>
                {{ $t('homePage.faq.items.different.answer1') }} <router-link to="/vein-wiki/mechanics" class="inline-link">{{ $t('homePage.faq.items.different.link') }}</router-link> {{ $t('homePage.faq.items.different.answer2') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ $t('homePage.faq.items.multiplayer.question') }}</h3>
              <p>
                {{ $t('homePage.faq.items.multiplayer.answer1') }} <router-link to="/vein-guides" class="inline-link">{{ $t('homePage.faq.items.multiplayer.link') }}</router-link>{{ $t('homePage.faq.items.multiplayer.answer2') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ $t('homePage.faq.items.languages.question') }}</h3>
              <p>
                {{ $t('homePage.faq.items.languages.answer') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ $t('homePage.faq.items.demo.question') }}</h3>
              <p>
                {{ $t('homePage.faq.items.demo.answer') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ $t('homePage.faq.items.content.question') }}</h3>
              <p>
                {{ $t('homePage.faq.items.content.answer') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ $t('homePage.faq.items.updates.question') }}</h3>
              <p>
                {{ $t('homePage.faq.items.updates.answer') }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Join VEIN survival game network today</h2>
            <p>
              Add VEIN game to your wishlist or download the free demo to learn VEIN survival game
              mechanics, stock your hideout, and rally friends before Early Access begins. The demo
              lets you experience the core gameplay of this post-apocalyptic survival multiplayer
              sandbox game, with access to a small region and skill progression up to level 50.
              Discover why VEIN game is one of the most anticipated survival games of 2025.
            </p>
            <p>
              Early Access launches October 24, 2025, bringing the full VEIN survival game
              experience. Join the community and help shape the future of VEIN game through your
              feedback during Early Access. VEIN survival game continues to evolve based on player
              input, making your voice important in the development of VEIN game.
            </p>
            <div class="cta-actions">
              <a
                href="https://store.steampowered.com/app/1857950/VEIN/"
                class="btn-hero btn-steam"
                target="_blank"
                rel="noreferrer nofollow"
              >
                Get Early Access
              </a>
              <a
                href="https://vein.gg/"
                class="btn-hero btn-secondary"
                target="_blank"
                rel="noreferrer nofollow"
              >
                Follow Official Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '../composables/useGuideData'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const router = useRouter()
const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { guides, loadHomeGuidesOnly } = useGuideData()

const isVideoPlaying = ref(false)

const playVideo = () => {
  isVideoPlaying.value = true
}

const closeVideo = () => {
  isVideoPlaying.value = false
}

// 初始化加载首页指南数据
onMounted(() => {
  loadHomeGuidesOnly()
})

// 监听语言变化，重新加载数据
watch(() => locale.value, () => {
  loadHomeGuidesOnly()
})

// 首页显示的指南（isHome: true）
const homeGuides = computed(() => {
  return guides.value || []
})

const goToGuide = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(getLocalizedPath(`/vein-guides${path}`))
}

const getCategoryName = (category) => {
  const categoryMap = {
    'getting-started': 'GETTING STARTED',
    'walkthroughs': 'WALKTHROUGHS',
    'advanced': 'ADVANCED'
  }
  return categoryMap[category] || 'GUIDE'
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
</script>

<style scoped>
section {
  padding: 50px 0;
  position: relative;
  z-index: 1;
}

.hero {
  padding: 50px 0;
}

.hero-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 48px;
  align-items: center;
}

.badge {
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 10px 0;
}

.hero-title {
  font-size: 48px;
  color: #ffe8e8;
  line-height: 1.2;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-subtitle {
  color: rgba(255, 225, 225, 0.78);
  font-size: 14px;
  margin-bottom: 20px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.btn-hero {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.08em;
}

.btn-steam {
  background: linear-gradient(135deg, #ff3636 0%, #ff6b6b 100%);
  color: #1c0000;
  box-shadow: 0 8px 24px rgba(255, 54, 54, 0.35);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}

.btn-hero:hover {
  transform: translateY(-2px);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.stat {
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.stat .label {
  font-size: 14px;
  color: rgba(255, 210, 210, 0.65);
}

.stat .value {
  font-size: 14px;
  font-weight: 600;
  color: #ffe1e1;
}

.hero-video .video-player {
  background: rgba(12, 0, 0, 0.88);
  border: 1px solid rgba(255, 54, 54, 0.25);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.video-thumbnail {
  aspect-ratio: 16 / 9;
  position: relative;
  background: url('/images/video-bg.webp') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-thumbnail::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 0, 0, 0.6), rgba(15, 0, 0, 0.75));
  z-index: 1;
  pointer-events: none;
}

.video-mask {
  position: relative;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 30px 40px;
  text-align: center;
  letter-spacing: 0.3em;
  color: rgba(255, 212, 212, 0.7);
}

.play-button {
  position: absolute;
  z-index: 2;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 54, 54, 0.9);
  color: #1c0000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-button:hover {
  transform: scale(1.05);
}

.video-iframe {
  position: relative;
  aspect-ratio: 16 / 9;
}

.video-frame {
  width: 100%;
  height: 100%;
}

.close-video {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}

.video-info {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.video-header {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
}

.video-header .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 130, 130, 0.5);
}

.section-title {
  font-size: 40px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 10px;
  color: #ffe3e3;
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 215, 215, 0.7);
  margin: 0 auto 40px;
}

.what-is-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
}

.what-is-content.reverse {
  direction: rtl;
}

.what-is-content.reverse > * {
  direction: ltr;
}

.what-is-image {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.what-is-image img {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.what-is-text h3 {
  font-size: 24px;
  line-height: 1.2;
  color: #ffd2d2;
  margin-bottom: 15px;
}

.what-is-text p {
  color: rgba(255, 210, 210, 0.78);
  margin-bottom: 15px;
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

.guides-actions {
  margin-top: 32px;
  text-align: center;
}

.info-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.info-card {
  background: rgba(20, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
}

.info-card h3 {
  margin-bottom: 16px;
  color: #ffd8d8;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-card ul li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  color: rgba(255, 220, 220, 0.78);
}

.info-card ul li:last-child {
  border-bottom: none;
}

.requirements {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.req-label {
  font-weight: 600;
  color: var(--accent);
}

.language-table table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.language-table th,
.language-table td {
  padding: 12px 16px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.language-table th {
  background: rgba(255, 54, 54, 0.12);
  color: #ffdcdc;
}

.language-table td {
  color: rgba(255, 215, 215, 0.75);
}

.planned-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.planned-card {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(25, 0, 0, 0.55);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease, border 0.2s ease;
}

.planned-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.35);
}

.planned-card h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #ffd0d0;
}

.planned-card p {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.5;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.review-card {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(40, 0, 0, 0.45);
}

.reviewer {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 54, 54, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--accent);
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

.faq-item {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(30, 0, 0, 0.4);
}

.faq-item h3 {
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 10px;
  color: #ffd6d6;
}

.cta-content {
  text-align: center;
  border-radius: 24px;
  padding: 20px;
  border: 1px solid rgba(255, 54, 54, 0.35);
  background: linear-gradient(135deg, rgba(120, 0, 0, 0.6), rgba(10, 0, 0, 0.9));
}

.cta-actions {
  margin-top: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .what-is-content {
    grid-template-columns: 1fr;
  }

  .planned-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .info-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  section {
    padding: 20px 0;
  }

  .hero {
    padding: 20px 0;
  }

  .badge{
    font-size: 0.6rem;
  }

  .hero-content {
    gap: 10px;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .video-info{
    padding: 10px;
  }

  .video-info p{
    font-size: 12px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .what-is-text h3 {
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .guide-card {
    padding: 0;
  }

  .guide-card-content {
    padding: 10px;
  }

  .guide-title {
    font-size: 16px;
  }

  .guide-description {
    font-size: 12px;
    margin-bottom: 5px;
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

  .info-card h3 {
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .planned-card h3 {
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .faq-item h3 {
    font-size: 14px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .language-table th,
  .language-table td{
    padding: 5px 10px;
  }

  .language-table th{
    font-size: 12px;
  }

  .language-table td{
    font-size: 12px;
  }

  .what-is-text p,
  .guide-card p,
  .planned-card p,
  .info-card ul li,
  .faq-item p,
  .hero-subtitle,
  .section-subtitle {
    font-size: 12px;
    margin-bottom: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .inline-link {
    font-size: 12px;
    border-bottom-width: 1px;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .planned-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .info-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .what-is-content {
    gap: 20px;
    margin-bottom: 20px;
  }

  .hero-actions {
    gap: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .guides-actions {
    margin-top: 10px;
  }

  .cta-actions {
    margin-top: 20px;
    gap: 10px;
    flex-wrap: wrap;
  }

  .stat {
    padding: 5px 10px;
  }

  .stat .label{
    font-size: 12px;
  }

  .stat .value{
    font-size: 12px;
  }

  .guide-card {
    padding: 10px;
  }

  .info-card {
    padding: 10px;
  }

  .planned-card {
    padding: 10px;
  }

  .review-card {
    padding: 10px;
  }

  .review-card p{
    font-size: 12px;
  }

  .faq-item {
    padding: 10px;
  }

  .cta-content {
    padding: 10px;
  }

  .cta-content p{
    font-size: 12px;
  }

  .hero-video,
  .video-player,
  .video-thumbnail,
  .video-iframe,
  .video-frame {
    max-width: 100%;
    width: 100%;
  }

  .what-is-image img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }

  .btn-hero {
    font-size: 12px;
    padding: 10px 20px;
    white-space: nowrap;
  }

  .language-table {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .language-table table {
    min-width: 100%;
    width: max-content;
  }
}

</style>

