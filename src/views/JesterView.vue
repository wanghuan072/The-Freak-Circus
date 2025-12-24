<template>
  <div class="character-detail-page">
    <AppHeader />

    <main class="main-content">
      <!-- Character Header -->
      <div class="character-header">
        <div class="container">
          <div class="header-content">
            <div class="character-info">
              <h1 class="character-name">{{ $t('JesterPage.header.name') }}</h1>
              <p
                class="character-subtitle"
                v-html="$t('JesterPage.header.subtitle', {}, { raw: true })"
              ></p>
              <p
                class="character-description"
                v-html="$t('JesterPage.header.description', {}, { raw: true })"
              ></p>
            </div>
            <div class="character-image">
              <img src="/images/characters_03.webp" alt="Jester Character" />
            </div>
          </div>
        </div>
      </div>

      <!-- Character Details -->
      <div class="character-details">
        <div class="container">
          <div class="details-grid">
            <!-- About Section -->
            <div class="detail-section">
              <h2 class="section-title">{{ $t('JesterPage.about.title') }}</h2>
              <div class="content-card">
                <p v-html="$t('JesterPage.about.description1', {}, { raw: true })"></p>
                <p v-html="$t('JesterPage.about.description2', {}, { raw: true })"></p>
                <p v-html="$t('JesterPage.about.description3', {}, { raw: true })"></p>
              </div>
            </div>

            <!-- Personality Traits -->
            <div class="detail-section">
              <h2 class="section-title">{{ $t('JesterPage.traits.title') }}</h2>
              <div class="traits-list">
                <div class="trait-item">
                  <h3>{{ $t('JesterPage.traits.storyteller.title') }}</h3>
                  <p
                    v-html="$t('JesterPage.traits.storyteller.description', {}, { raw: true })"
                  ></p>
                </div>
                <div class="trait-item">
                  <h3>{{ $t('JesterPage.traits.observer.title') }}</h3>
                  <p v-html="$t('JesterPage.traits.observer.description', {}, { raw: true })"></p>
                </div>
                <div class="trait-item">
                  <h3>{{ $t('JesterPage.traits.knowledge.title') }}</h3>
                  <p v-html="$t('JesterPage.traits.knowledge.description', {}, { raw: true })"></p>
                </div>
                <div class="trait-item">
                  <h3>{{ $t('JesterPage.traits.narrator.title') }}</h3>
                  <p v-html="$t('JesterPage.traits.narrator.description', {}, { raw: true })"></p>
                </div>
              </div>
            </div>

            <!-- Special Abilities -->
            <div class="detail-section">
              <h2 class="section-title">{{ $t('JesterPage.abilities.title') }}</h2>
              <div class="abilities-list">
                <div class="ability-item">
                  <h3>{{ $t('JesterPage.abilities.loreRevelation.title') }}</h3>
                  <p
                    v-html="
                      $t('JesterPage.abilities.loreRevelation.description', {}, { raw: true })
                    "
                  ></p>
                </div>
                <div class="ability-item">
                  <h3>{{ $t('JesterPage.abilities.puppetPerformance.title') }}</h3>
                  <p
                    v-html="
                      $t('JesterPage.abilities.puppetPerformance.description', {}, { raw: true })
                    "
                  ></p>
                </div>
                <div class="ability-item">
                  <h3>{{ $t('JesterPage.abilities.propheticInsight.title') }}</h3>
                  <p
                    v-html="
                      $t('JesterPage.abilities.propheticInsight.description', {}, { raw: true })
                    "
                  ></p>
                </div>
              </div>
            </div>

            <!-- Relationships -->
            <div class="detail-section">
              <h2 class="section-title">{{ $t('JesterPage.relationships.title') }}</h2>
              <div class="relationships-list">
                <div class="relationship-item">
                  <h3>{{ $t('JesterPage.relationships.protagonist.title') }}</h3>
                  <p
                    v-html="
                      $t('JesterPage.relationships.protagonist.description', {}, { raw: true })
                    "
                  ></p>
                </div>
                <div class="relationship-item">
                  <h3>{{ $t('JesterPage.relationships.pierrotHarlequin.title') }}</h3>
                  <p
                    v-html="
                      $t('JesterPage.relationships.pierrotHarlequin.description', {}, { raw: true })
                    "
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Character Gallery -->
      <div class="character-gallery">
        <div class="container">
          <h2 class="section-title">{{ $t('JesterPage.gallery.title') }}</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="/images/jester-01.webp" alt="Jester Art 1" />
            </div>
            <div class="gallery-item">
              <img src="/images/jester-02.webp" alt="Jester Art 2" />
            </div>
            <div class="gallery-item">
              <img src="/images/jester-03.webp" alt="Jester Art 3" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'
</script>

<style scoped>
.character-detail-page {
  min-height: 100vh;
  background: #000;
  color: #fff;
}

.main-content {
  padding-top: 80px;
}

/* Character Header */
.character-info:deep(a) {
  color: #f59e0b;
}

.character-header {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: 60px 0;
  border-bottom: 1px solid rgba(245, 158, 11, 0.2);
}

.header-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.character-name {
  font-size: 64px;
  font-weight: 900;
  margin-bottom: 16px;
  background: linear-gradient(
    135deg,
    #f59e0b 0%,
    #d97706 25%,
    #b45309 50%,
    #92400e 75%,
    #78350f 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.character-subtitle {
  font-size: 24px;
  color: #f59e0b;
  margin-bottom: 24px;
  font-weight: 600;
}

.character-description {
  font-size: 18px;
  line-height: 1.8;
  color: #ccc;
  max-width: 500px;
}

.character-image {
  text-align: center;
}

.character-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(245, 158, 11, 0.3);
  border: 2px solid rgba(245, 158, 11, 0.2);
}

/* Character Details */
.character-details {
  padding: 80px 0;
  background: #000;
}

.details-grid {
  display: grid;
  gap: 60px;
}

.detail-section {
  background: rgba(245, 158, 11, 0.05);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(245, 158, 11, 0.1);
  backdrop-filter: blur(10px);
}

.detail-section:deep(a) {
  color: #f59e0b;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 32px;
  background: linear-gradient(
    135deg,
    #f59e0b 0%,
    #d97706 25%,
    #b45309 50%,
    #92400e 75%,
    #78350f 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
}

.content-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(245, 158, 11, 0.1);
}

.content-card p {
  font-size: 18px;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 20px;
}

.content-card p:last-child {
  margin-bottom: 0;
}

/* Traits List */
.traits-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.trait-item {
  background: rgba(245, 158, 11, 0.1);
  border-radius: 15px;
  padding: 24px;
  border: 1px solid rgba(245, 158, 11, 0.2);
  transition: transform 0.3s ease;
}

.trait-item:hover {
  transform: translateY(-5px);
}

.trait-item h3 {
  color: #f59e0b;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.trait-item p {
  color: #ccc;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

/* Abilities List */
.abilities-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.ability-item {
  background: rgba(245, 158, 11, 0.1);
  border-radius: 15px;
  padding: 24px;
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-left: 4px solid #f59e0b;
}

.ability-item h3 {
  color: #f59e0b;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.ability-item p {
  color: #ccc;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

/* Relationships List */
.relationships-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.relationship-item {
  background: rgba(245, 158, 11, 0.1);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(245, 158, 11, 0.2);
  transition: transform 0.3s ease;
}

.relationship-item:hover {
  transform: translateY(-5px);
}

.relationship-item h3 {
  color: #f59e0b;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
}

.relationship-item p {
  color: #ccc;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

/* Character Gallery */
.character-gallery {
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%);
  border-top: 1px solid rgba(245, 158, 11, 0.2);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
}

.gallery-item {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(245, 158, 11, 0.2);
  border: 1px solid rgba(245, 158, 11, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .character-header {
    padding: 40px 0;
  }

  .header-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .character-name {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .character-subtitle {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .character-description {
    font-size: 16px;
    max-width: 100%;
    margin-bottom: 16px;
  }

  .character-details {
    padding: 60px 0;
  }

  .details-grid {
    gap: 40px;
  }

  .detail-section {
    padding: 30px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .content-card {
    padding: 20px;
  }

  .content-card p {
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.6;
  }

  .character-gallery {
    padding: 60px 0;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }

  .character-header {
    padding: 20px 0;
  }

  .header-content {
    gap: 10px;
  }

  .character-name {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .character-subtitle {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .character-description {
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  .character-image img {
    width: 100%;
    max-width: 100%;
  }

  .character-details {
    padding: 20px 0;
  }

  .details-grid {
    gap: 10px;
  }

  .detail-section {
    padding: 10px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .content-card {
    padding: 10px;
  }

  .content-card p {
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  .trait-item {
    padding: 10px;
  }

  .trait-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .trait-item p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .abilities-list {
    gap: 10px;
  }

  .ability-item {
    padding: 10px;
  }

  .ability-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .ability-item p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .relationship-item {
    padding: 10px;
  }

  .relationship-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .relationship-item p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .traits-list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .relationships-list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .character-gallery {
    padding: 20px 0;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 10px;
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    aspect-ratio: 3/2;
  }
}
</style>

