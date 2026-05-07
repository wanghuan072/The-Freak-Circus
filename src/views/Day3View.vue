<template>
  <div class="updates-page day3-page">
    <AppHeader />

    <header
      class="day3-hero"
      :style="{ backgroundImage: `linear-gradient(135deg, rgba(20,8,12,0.92) 0%, rgba(51,26,26,0.88) 50%, rgba(30,12,40,0.9) 100%), url('/images/home_img_01.webp')` }"
    >
      <div class="day3-hero__inner container">
        <p class="day3-hero__eyebrow">Walkthrough &amp; route prep</p>
        <h1 class="day3-hero__title">{{ $t('Day3Page.header.title') }}</h1>
        <p class="day3-hero__subtitle">{{ $t('Day3Page.header.subtitle') }}</p>
        <nav class="day3-hero__nav" aria-label="Day 3 guide shortcuts">
          <a href="/" class="day3-chip">{{ $t('Day3Page.header.backToHome') }}</a>
          <a href="/blog" class="day3-chip">{{ $t('Day3Page.header.blog') }}</a>
          <a href="/wiki" class="day3-chip">{{ $t('Day3Page.header.wiki') }}</a>
          <a href="/download" class="day3-chip">{{ $t('Day3Page.header.download') }}</a>
        </nav>
      </div>
    </header>

    <main class="main-content day3-main">
      <div class="container day3-container">
        <div class="updates-list day3-flow">
          <article class="update-block day3-intro-grid">
            <div class="update-content day3-intro-text">
              <p v-html="$t('Day3Page.intro', {}, { raw: true })"></p>
            </div>
            <figure class="day3-media-card">
              <img
                src="/images/blog/blog02.webp"
                :alt="$t('Day3Page.images.day2TentsAlt')"
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
                class="day3-media-card__img"
              />
              <figcaption class="day3-media-card__cap">
                {{ $t('Day3Page.images.day2TentsAlt') }}
              </figcaption>
            </figure>
          </article>

          <article class="update-block">
            <h2 class="update-title">{{ $t('Day3Page.compare.title') }}</h2>
            <div class="update-content">
              <p v-html="$t('Day3Page.compare.intro', {}, { raw: true })"></p>
              <div class="day3-table-panel" v-html="$t('Day3Page.compare.tableHtml', {}, { raw: true })"></div>
            </div>
          </article>

          <article class="update-block">
            <h2 class="update-title">{{ $t('Day3Page.whatIs.title') }}</h2>
            <div class="update-content">
              <p v-html="$t('Day3Page.whatIs.p1', {}, { raw: true })"></p>
              <p v-html="$t('Day3Page.whatIs.p2', {}, { raw: true })"></p>
            </div>
          </article>

          <article class="update-block">
            <h2 class="update-title">{{ $t('Day3Page.prepare.title') }}</h2>
            <div class="update-content">
              <p v-html="$t('Day3Page.prepare.p1', {}, { raw: true })"></p>
              <p v-html="$t('Day3Page.prepare.p2', {}, { raw: true })"></p>
              <ul class="day3-checklist" v-html="$t('Day3Page.prepare.list', {}, { raw: true })"></ul>
              <p v-html="$t('Day3Page.prepare.p3', {}, { raw: true })"></p>

              <h3 class="day3-subhead">{{ $t('Day3Page.prepare.tipsTitle') }}</h3>
              <div v-html="$t('Day3Page.prepare.tipsIntro', {}, { raw: true })"></div>
              <ul class="day3-bullet-list" v-html="$t('Day3Page.prepare.tipsList', {}, { raw: true })"></ul>
            </div>
          </article>

          <article class="update-block">
            <h2 class="update-title">{{ $t('Day3Page.expectations.title') }}</h2>
            <div class="update-content">
              <p v-html="$t('Day3Page.expectations.p1', {}, { raw: true })"></p>
              <div class="day3-callout-grid" role="list">
                <section class="day3-callout" role="listitem">
                  <span class="day3-callout__badge" aria-hidden="true">01</span>
                  <h3 class="day3-callout__title">{{ $t('Day3Page.expectations.card1Title') }}</h3>
                  <div class="day3-callout__body" v-html="$t('Day3Page.expectations.card1Body', {}, { raw: true })"></div>
                </section>
                <section class="day3-callout" role="listitem">
                  <span class="day3-callout__badge" aria-hidden="true">02</span>
                  <h3 class="day3-callout__title">{{ $t('Day3Page.expectations.card2Title') }}</h3>
                  <div class="day3-callout__body" v-html="$t('Day3Page.expectations.card2Body', {}, { raw: true })"></div>
                </section>
                <section class="day3-callout" role="listitem">
                  <span class="day3-callout__badge" aria-hidden="true">03</span>
                  <h3 class="day3-callout__title">{{ $t('Day3Page.expectations.card3Title') }}</h3>
                  <div class="day3-callout__body" v-html="$t('Day3Page.expectations.card3Body', {}, { raw: true })"></div>
                </section>
              </div>
            </div>
          </article>

          <article class="update-block">
            <h2 class="update-title">{{ $t('Day3Page.routes.title') }}</h2>
            <div class="update-content day3-route-deck">
              <article class="day3-route-card">
                <img
                  class="day3-route-card__img"
                  src="/images/characters_01.webp"
                  :alt="$t('Day3Page.images.pierrotCardAlt')"
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                <h3 class="day3-route-card__title">{{ $t('Day3Page.routes.pierrotTitle') }}</h3>
                <div class="day3-route-card__body" v-html="$t('Day3Page.routes.pierrotBody', {}, { raw: true })"></div>
              </article>
              <article class="day3-route-card">
                <img
                  class="day3-route-card__img"
                  src="/images/characters_02.webp"
                  :alt="$t('Day3Page.images.harlequinCardAlt')"
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                <h3 class="day3-route-card__title">{{ $t('Day3Page.routes.harlequinTitle') }}</h3>
                <div class="day3-route-card__body" v-html="$t('Day3Page.routes.harlequinBody', {}, { raw: true })"></div>
              </article>
              <article class="day3-route-card day3-route-card--wide">
                <img
                  class="day3-route-card__img day3-route-card__img--banner"
                  src="/images/game-play.webp"
                  :alt="$t('Day3Page.images.dualCardAlt')"
                  width="640"
                  height="320"
                  loading="lazy"
                  decoding="async"
                />
                <h3 class="day3-route-card__title">{{ $t('Day3Page.routes.dualTitle') }}</h3>
                <div class="day3-route-card__body" v-html="$t('Day3Page.routes.dualBody', {}, { raw: true })"></div>
              </article>
            </div>
          </article>

          <article class="update-block">
            <h2 class="update-title">{{ $t('Day3Page.faq.title') }}</h2>
            <div class="update-content day3-faq">
              <details class="day3-faq__item" open>
                <summary class="day3-faq__q">{{ $t('Day3Page.faq.q1') }}</summary>
                <div class="day3-faq__a" v-html="$t('Day3Page.faq.a1', {}, { raw: true })"></div>
              </details>
              <details class="day3-faq__item">
                <summary class="day3-faq__q">{{ $t('Day3Page.faq.q2') }}</summary>
                <div class="day3-faq__a" v-html="$t('Day3Page.faq.a2', {}, { raw: true })"></div>
              </details>
              <details class="day3-faq__item">
                <summary class="day3-faq__q">{{ $t('Day3Page.faq.q3') }}</summary>
                <div class="day3-faq__a" v-html="$t('Day3Page.faq.a3', {}, { raw: true })"></div>
              </details>
              <details class="day3-faq__item">
                <summary class="day3-faq__q">{{ $t('Day3Page.faq.q4') }}</summary>
                <div class="day3-faq__a" v-html="$t('Day3Page.faq.a4', {}, { raw: true })"></div>
              </details>
            </div>
          </article>

          <article class="update-block">
            <h2 class="update-title">{{ $t('Day3Page.moreOnSite.title') }}</h2>
            <div class="update-content">
              <p v-html="$t('Day3Page.moreOnSite.p1', {}, { raw: true })"></p>
            </div>
          </article>

          <article class="update-block update-block--muted">
            <div class="update-content">
              <p v-html="$t('Day3Page.disclaimer', {}, { raw: true })"></p>
            </div>
          </article>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { watchEffect, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'

const { t } = useI18n()

function stripHtml(html) {
  if (!html || typeof html !== 'string') return ''
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const SITE = 'https://thefreakcircus.org'

let schemaEl = null

watchEffect(() => {
  const faqMainEntity = [1, 2, 3, 4].map((i) => ({
    '@type': 'Question',
    name: t(`Day3Page.faq.q${i}`),
    acceptedAnswer: {
      '@type': 'Answer',
      text: stripHtml(t(`Day3Page.faq.a${i}`)),
    },
  }))

  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE}/day-3#webpage`,
      url: `${SITE}/day-3`,
      name: t('Day3Page.header.title'),
      description: t('seo.day3.description'),
      isPartOf: { '@type': 'WebSite', name: 'thefreakcircus.org', url: SITE },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE}/images/home_img_01.webp`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t('Day3Page.header.title'),
          item: `${SITE}/day-3`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqMainEntity,
    },
  ]

  const payload = { '@context': 'https://schema.org', '@graph': graph }

  if (typeof document === 'undefined') return

  if (!schemaEl) {
    schemaEl = document.createElement('script')
    schemaEl.type = 'application/ld+json'
    schemaEl.setAttribute('data-day3-ld', '1')
    document.head.appendChild(schemaEl)
  }
  schemaEl.textContent = JSON.stringify(payload)
})

onUnmounted(() => {
  schemaEl?.remove()
  schemaEl = null
})
</script>

<style scoped>
/* --- Lists (prepare) --- */
.day3-page ul.day3-checklist {
  list-style: none;
  margin: 16px 0 20px;
  padding: 0;
}

.day3-page ul.day3-checklist :deep(li) {
  color: #f5d07a;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
}

.day3-page ul.day3-checklist :deep(li)::before {
  content: '✓';
  color: #f5c542;
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 0;
}

.day3-page ul.day3-checklist :deep(a) {
  color: #4287f5;
  text-decoration: none;
  font-weight: 600;
}

.day3-bullet-list {
  list-style: none;
  margin: 12px 0 8px;
  padding: 0;
}

.day3-page ul.day3-bullet-list :deep(li) {
  color: #f5d07a;
  font-size: 16px;
  line-height: 1.65;
  margin-bottom: 10px;
  padding-left: 22px;
  position: relative;
}

.day3-page ul.day3-bullet-list :deep(li)::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a855f7, #f5c542);
}

.day3-page ul.day3-bullet-list :deep(code) {
  background: rgba(0, 0, 0, 0.35);
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.9em;
  color: #f0d78c;
}

.day3-page ul.day3-bullet-list :deep(a) {
  color: #4287f5;
  font-weight: 600;
  text-decoration: none;
}

/* --- Hero --- */
.day3-hero {
  position: relative;
  padding-top: 80px;
  min-height: min(52vh, 520px);
  background-size: cover;
  background-position: center 28%;
  border-bottom: 1px solid rgba(139, 92, 246, 0.25);
}

.day3-hero__inner {
  position: relative;
  z-index: 1;
  padding: 48px 16px 56px;
  text-align: center;
}

.day3-hero__eyebrow {
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(245, 208, 122, 0.75);
}

.day3-hero__title {
  margin: 0 0 16px;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 900;
  line-height: 1.15;
  background: linear-gradient(135deg, #fceea3 0%, #f5c542 35%, #e070c0 70%, #c084fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
}

.day3-hero__subtitle {
  margin: 0 auto 28px;
  max-width: 44rem;
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  color: #f5d07a;
  line-height: 1.55;
  font-weight: 600;
}

.day3-hero__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.day3-chip {
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(245, 208, 122, 0.35);
  backdrop-filter: blur(8px);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease;
}

.day3-chip:hover {
  background: rgba(139, 92, 246, 0.35);
  border-color: #f5c542;
  transform: translateY(-1px);
}

/* --- Layout --- */
.day3-main {
  padding: 40px 0 80px;
  background: #331a1a;
}

.day3-container {
  max-width: 960px;
}

.day3-flow.updates-list {
  max-width: none;
  gap: 28px;
}

.day3-intro-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;
}

@media (min-width: 900px) {
  .day3-intro-grid {
    grid-template-columns: 1.15fr 0.85fr;
    align-items: stretch;
  }
}

.day3-media-card {
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(245, 208, 122, 0.15);
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.day3-media-card__img {
  display: block;
  width: 100%;
  height: auto;
}

.day3-media-card__cap {
  padding: 12px 14px;
  font-size: 13px;
  line-height: 1.45;
  color: rgba(245, 208, 122, 0.8);
  background: rgba(30, 12, 18, 0.6);
}

.day3-subhead {
  margin: 28px 0 8px;
  font-size: 18px;
  font-weight: 800;
  color: #f5c542;
}

/* --- Table --- */
.day3-table-panel :deep(.day3-table-scroll) {
  overflow-x: auto;
  margin: 16px 0 4px;
  border-radius: 12px;
  border: 1px solid rgba(245, 208, 122, 0.12);
}

.day3-table-panel :deep(table.day3-table) {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
  font-size: 15px;
  background: rgba(0, 0, 0, 0.2);
}

.day3-table-panel :deep(caption) {
  caption-side: top;
  text-align: left;
  padding: 12px 14px;
  font-size: 13px;
  font-weight: 700;
  color: #f5c542;
  background: rgba(139, 92, 246, 0.12);
}

.day3-table-panel :deep(thead th) {
  text-align: left;
  padding: 12px 14px;
  color: #fceea3;
  background: rgba(74, 30, 30, 0.65);
  border-bottom: 1px solid rgba(245, 208, 122, 0.15);
}

.day3-table-panel :deep(tbody th) {
  text-align: left;
  padding: 12px 14px;
  color: #f5c542;
  font-weight: 800;
  width: 86px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  vertical-align: top;
}

.day3-table-panel :deep(tbody td) {
  padding: 12px 14px;
  color: #f5d07a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  vertical-align: top;
}

.day3-table-panel :deep(tbody tr:last-child th),
.day3-table-panel :deep(tbody tr:last-child td) {
  border-bottom: none;
}

.day3-table-panel :deep(a) {
  color: #4287f5;
  font-weight: 600;
  text-decoration: none;
}

/* --- Callouts --- */
.day3-callout-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 20px;
}

@media (min-width: 720px) {
  .day3-callout-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
}

.day3-callout {
  position: relative;
  padding: 18px 16px 18px 48px;
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.25);
  background: linear-gradient(145deg, rgba(40, 18, 28, 0.65) 0%, rgba(25, 10, 30, 0.5) 100%);
}

.day3-callout__badge {
  position: absolute;
  left: 14px;
  top: 16px;
  font-size: 12px;
  font-weight: 900;
  color: rgba(245, 208, 122, 0.45);
}

.day3-callout__title {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 800;
  color: #f5c542;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.day3-callout__body :deep(p) {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: #f5d07a;
}

.day3-callout__body :deep(a) {
  color: #4287f5;
  font-weight: 600;
  text-decoration: none;
}

/* --- Route cards --- */
.day3-route-deck {
  display: grid;
  gap: 18px;
}

@media (min-width: 640px) {
  .day3-route-deck {
    grid-template-columns: repeat(2, 1fr);
  }
}

.day3-route-card {
  margin: 0;
  padding: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(245, 208, 122, 0.12);
  background: rgba(0, 0, 0, 0.22);
}

.day3-route-card--wide {
  grid-column: 1 / -1;
}

.day3-route-card__img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: top center;
}

.day3-route-card__img--banner {
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.day3-route-card__title {
  margin: 0;
  padding: 14px 16px 6px;
  font-size: 17px;
  font-weight: 800;
  color: #f5c542;
}

.day3-route-card__body {
  padding: 0 16px 18px;
}

.day3-route-card__body :deep(p) {
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
  color: #f5d07a;
}

.day3-route-card__body :deep(a) {
  color: #4287f5;
  font-weight: 600;
  text-decoration: none;
}

/* --- FAQ --- */
.day3-faq {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.day3-faq__item {
  border-radius: 10px;
  border: 1px solid rgba(245, 208, 122, 0.12);
  background: rgba(0, 0, 0, 0.18);
  padding: 0;
}

.day3-faq__q {
  cursor: pointer;
  list-style: none;
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 700;
  color: #fceea3;
}

.day3-faq__q::-webkit-details-marker {
  display: none;
}

.day3-faq__item[open] .day3-faq__q {
  border-bottom: 1px solid rgba(245, 208, 122, 0.1);
}

.day3-faq__a {
  padding: 0 16px 14px;
}

.day3-faq__a :deep(p) {
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
  color: #f5d07a;
}

.day3-faq__a :deep(a) {
  color: #4287f5;
  font-weight: 600;
  text-decoration: none;
}

.update-block--muted {
  opacity: 0.92;
  border-style: dashed;
}
</style>

<style scoped>
.updates-page {
  min-height: 100vh;
  background: #331a1a;
  color: #f5d07a;
}

.main-content {
  padding-top: 0;
}

.updates-content {
  padding: 80px 0;
  background: #331a1a;
}

.updates-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.update-block {
  background: rgba(74, 30, 30, 0.3);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(245, 208, 122, 0.1);
  backdrop-filter: blur(10px);
}

.update-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 24px;
  color: #f5c542;
  text-transform: uppercase;
}

.update-content {
  line-height: 1.8;
}

.update-content p {
  color: #f5d07a;
  font-size: 16px;
  margin-bottom: 16px;
}

.update-content p:last-child {
  margin-bottom: 0;
}

.update-content :deep(a) {
  color: #4287f5;
  text-decoration: none;
  font-weight: 600;
}

.update-content :deep(strong) {
  color: #f5c542;
}

@media (max-width: 1024px) {
  .updates-content {
    padding: 60px 0;
  }

  .update-title {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .day3-page ul.day3-checklist :deep(li),
  .day3-page ul.day3-bullet-list :deep(li) {
    font-size: 12px;
  }

  .main-content {
    padding-top: 0;
  }

  .day3-hero {
    min-height: auto;
    padding-top: 72px;
  }

  .day3-hero__inner {
    padding: 28px 12px 36px;
  }

  .update-block {
    padding: 14px;
  }

  .updates-content {
    padding: 24px 0 28px;
  }

  .updates-list {
    gap: 14px;
  }

  .update-content p {
    font-size: 12px;
    line-height: 1.6;
  }

  .update-title {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .day3-callout__body :deep(p) {
    font-size: 12px;
  }

  .day3-route-card__body :deep(p) {
    font-size: 12px;
  }

  .day3-table-panel :deep(table.day3-table) {
    font-size: 12px;
    min-width: 440px;
  }
}
</style>
