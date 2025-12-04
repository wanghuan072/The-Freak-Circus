<template>
  <div class="pierrot-coloring-page">
    <AppHeader />

    <main class="main-content">
      <!-- Header Section -->
      <div class="coloring-header">
        <div class="container">
          <div class="header-content">
            <h1 class="page-title">{{ $t('PierrotColoringPage.header.title') }}</h1>
            <p class="page-subtitle">{{ $t('PierrotColoringPage.header.subtitle') }}</p>
            <div class="header-navigation">
              <a href="/" class="nav-link">{{ $t('PierrotColoringPage.header.backToHome') }}</a>
              <a href="/pierrot" class="nav-link">{{ $t('PierrotColoringPage.header.pierrot') }}</a>
              <a href="/wiki" class="nav-link">{{ $t('PierrotColoringPage.header.wiki') }}</a>
              <a href="/download" class="nav-link">{{
                $t('PierrotColoringPage.header.download')
              }}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Section -->
      <div class="gallery-section">
        <div class="container">
          <h2 class="section-title">{{ $t('PierrotColoringPage.gallery.title') }}</h2>
          <div class="masonry-grid">
            <div v-for="image in coloringImages" :key="image.id" class="gallery-item">
              <div class="image-container">
                <img :src="image.src" :alt="image.alt" />
              </div>
              <h3 class="image-title">{{ image.title }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="about-section">
        <div class="container">
          <h2 class="section-title">{{ $t('PierrotColoringPage.about.title') }}</h2>
          <div class="content-card">
            <p v-html="$t('PierrotColoringPage.about.description1', {}, { raw: true })"></p>
            <p v-html="$t('PierrotColoringPage.about.description2', {}, { raw: true })"></p>
            <p v-html="$t('PierrotColoringPage.about.description3', {}, { raw: true })"></p>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'

// Coloring images data
const coloringImages = ref([
  {
    id: 1,
    src: '/images/coloring/pierro-01.webp',
    alt: 'Pierrot Kawaii Coloring Page 1',
    title: 'Pierrot',
  },
  {
    id: 2,
    src: '/images/coloring/pierro-02.webp',
    alt: 'Pierrot Kawaii Coloring Page 2',
    title: 'Pierrot',
  },
  {
    id: 3,
    src: '/images/coloring/pierro-03.webp',
    alt: 'Pierrot Kawaii Coloring Page 3',
    title: 'Pierrot',
  },
  {
    id: 4,
    src: '/images/coloring/pierro-04.webp',
    alt: 'Pierrot Kawaii Coloring Page 4',
    title: 'Pierrot',
  },
  {
    id: 5,
    src: '/images/coloring/pierro-05.webp',
    alt: 'Pierrot Kawaii Coloring Page 5',
    title: 'Pierrot',
  },
  {
    id: 6,
    src: '/images/coloring/pierro-06.webp',
    alt: 'Pierrot Kawaii Coloring Page 6',
    title: 'Pierrot',
  },
  {
    id: 7,
    src: '/images/coloring/pierro-07.webp',
    alt: 'Pierrot Kawaii Coloring Page 7',
    title: 'Pierrot',
  },
  {
    id: 8,
    src: '/images/coloring/pierro-08.webp',
    alt: 'Pierrot Kawaii Coloring Page 8',
    title: 'Pierrot',
  },
  {
    id: 9,
    src: '/images/coloring/pierro-09.webp',
    alt: 'Pierrot Kawaii Coloring Page 9',
    title: 'Pierrot',
  },
  {
    id: 10,
    src: '/images/coloring/pierro-10.webp',
    alt: 'Pierrot Kawaii Coloring Page 10',
    title: 'Pierrot',
  },
  {
    id: 11,
    src: '/images/coloring/pierro-11.webp',
    alt: 'Pierrot Kawaii Coloring Page 11',
    title: 'Pierrot',
  },
  {
    id: 12,
    src: '/images/coloring/pierro-12.webp',
    alt: 'Pierrot Kawaii Coloring Page 12',
    title: 'Pierrot',
  },
  {
    id: 13,
    src: '/images/coloring/pierro-13.webp',
    alt: 'Pierrot Kawaii Coloring Page 13',
    title: 'Pierrot',
  },
  {
    id: 14,
    src: '/images/coloring/pierro-14.webp',
    alt: 'Pierrot Kawaii Coloring Page 14',
    title: 'Pierrot',
  },
  {
    id: 15,
    src: '/images/coloring/pierro-15.webp',
    alt: 'Pierrot Kawaii Coloring Page 15',
    title: 'Pierrot',
  },
  {
    id: 16,
    src: '/images/coloring/pierro-16.webp',
    alt: 'Pierrot Kawaii Coloring Page 16',
    title: 'Pierrot',
  },
  {
    id: 17,
    src: '/images/coloring/pierro-17.webp',
    alt: 'Pierrot Kawaii Coloring Page 17',
    title: 'Pierrot',
  },
  {
    id: 18,
    src: '/images/coloring/pierro-18.webp',
    alt: 'Pierrot Kawaii Coloring Page 18',
    title: 'Pierrot',
  },
  {
    id: 19,
    src: '/images/coloring/pierro-19.webp',
    alt: 'Pierrot Kawaii Coloring Page 19',
    title: 'Pierrot',
  },
  {
    id: 20,
    src: '/images/coloring/pierro-20.webp',
    alt: 'Pierrot Kawaii Coloring Page 20',
    title: 'Pierrot',
  },
  {
    id: 21,
    src: '/images/coloring/pierro-21.webp',
    alt: 'Pierrot Kawaii Coloring Page 21',
    title: 'Pierrot',
  },
  {
    id: 22,
    src: '/images/coloring/pierro-22.webp',
    alt: 'Pierrot Kawaii Coloring Page 22',
    title: 'Pierrot',
  },
  {
    id: 23,
    src: '/images/coloring/pierro-23.webp',
    alt: 'Pierrot Kawaii Coloring Page 23',
    title: 'Pierrot',
  },
  {
    id: 24,
    src: '/images/coloring/pierro-24.webp',
    alt: 'Pierrot Kawaii Coloring Page 24',
    title: 'Pierrot',
  },
  {
    id: 25,
    src: '/images/coloring/pierro-25.webp',
    alt: 'Pierrot Kawaii Coloring Page 25',
    title: 'Pierrot',
  },
])
</script>

<style scoped>
.pierrot-coloring-page {
  min-height: 100vh;
  background: #000;
  color: #fff;
}

.main-content {
  padding-top: 80px;
}

/* Header Section */
.coloring-header {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: 60px 0;
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.header-content {
  text-align: center;
}

.page-title {
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 16px;
  background: linear-gradient(
    135deg,
    #8b5cf6 0%,
    #a855f7 25%,
    #c084fc 50%,
    #e879f9 75%,
    #f0abfc 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 20px;
  color: #c084fc;
  margin-bottom: 32px;
  font-weight: 600;
}

.header-navigation {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 12px 24px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: #8b5cf6;
  color: #c084fc;
}

/* Gallery Section */
.gallery-section {
  padding: 80px 0;
  background: #000;
}

.section-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 24px;
  background: linear-gradient(
    135deg,
    #8b5cf6 0%,
    #a855f7 25%,
    #c084fc 50%,
    #e879f9 75%,
    #f0abfc 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  text-transform: uppercase;
}

/* Masonry Grid - True Waterfall Layout */
.masonry-grid {
  column-count: 4;
  column-gap: 12px;
  column-fill: balance;
  column-width: 250px;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;
  min-width: 0;
}

.image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  flex: 1;
}

.image-container:hover {
  transform: translateY(-4px);
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.02);
}

.image-title {
  font-size: 18px;
  font-weight: 600;
  margin-top: 16px;
  color: #ccc;
  text-align: center;
  padding: 0 8px;
}

/* About Section */
.about-section {
  padding: 80px 0;
  background: #000;
}

.about-section .content-card {
  background: rgba(139, 92, 246, 0.05);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(10px);
  max-width: 800px;
  margin: 0 auto;
}

.content-card p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #ccc;
}

.content-card:deep(a) {
  color: #c084fc;
}

.content-card p:last-child {
  margin-bottom: 0;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .coloring-header {
    padding: 40px 0;
  }

  .page-title {
    font-size: 36px;
  }

  .page-subtitle {
    font-size: 18px;
  }

  .header-navigation {
    flex-direction: column;
    gap: 12px;
  }

  .gallery-section {
    padding: 60px 0;
  }

  .masonry-grid {
    column-count: 2;
    column-gap: 16px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .about-section {
    padding: 60px 0;
  }

  .about-section .content-card {
    padding: 20px;
  }

  .content-card p {
    font-size: 16px;
    margin-bottom: 16px;
  }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }

  .coloring-header {
    padding: 20px 0;
  }

  .page-title {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .page-subtitle {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .header-navigation {
    gap: 10px;
  }

  .nav-link {
    font-size: 12px;
    padding: 5px 10px;
  }

  .gallery-section {
    padding: 20px 0;
  }

  .masonry-grid {
    column-count: 1;
    column-gap: 10px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .about-section {
    padding: 20px 0;
  }

  .about-section .content-card {
    padding: 10px;
  }

  .content-card p {
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 10px;
  }
}
</style>
