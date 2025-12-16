<template>
  <div class="legal-page">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">About Us</h1>
        <p class="page-date">Last Updated: {{ currentDate }}</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Welcome to VEIN Fan Hub</h2>
            <p>
              VEIN Fan Hub is an unofficial community resource dedicated to the VEIN survival game. We are passionate fans who have created this website to help fellow survivors navigate the challenges of the game.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide comprehensive, accurate, and up-to-date information about VEIN game. We archive gameplay notes, hardware targets, and patch updates so survivors can track Early Access progress and improve their gaming experience.
            </p>

            <h2>What We Offer</h2>
            <p>
              We provide a wide range of resources including:
            </p>
            <ul>
              <li>Comprehensive game guides and walkthroughs</li>
              <li>Detailed wiki with game mechanics and features</li>
              <li>Complete items database with stats and information</li>
              <li>Interactive maps and location guides</li>
              <li>Community-driven content and updates</li>
            </ul>

            <h2>Our Commitment</h2>
            <p>
              We are committed to maintaining the accuracy and quality of our content. Our team regularly updates information based on game patches, community feedback, and verified gameplay data.
            </p>

            <h2>Disclaimer</h2>
            <p>
              VEIN Fan Hub is an independent, fan-operated website. We are not affiliated with, endorsed by, or connected to Ramjet Studios or the official VEIN game. All game-related content is used for informational purposes only.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions, suggestions, or feedback, please feel free to contact us at <a href="mailto:wyong@veingame.net">wyong@veingame.net</a>. We appreciate your support and contributions to the VEIN community.
            </p>

            <h2>Thank You</h2>
            <p>
              Thank you for visiting VEIN Fan Hub. We hope our resources help you survive and thrive in the world of VEIN!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSEO } from '../../seo/composables.js'

const { setSEO } = useSEO()

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
})

setSEO({
  title: 'About Us - VEIN Fan Hub - veingame.net',
  description: 'Learn about VEIN Fan Hub, an unofficial community resource for VEIN survival game. Discover our mission, what we offer, and how we help players.',
  keywords: 'about VEIN Fan Hub, VEIN game community, VEIN resources, VEIN fan site'
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-header {
  padding: 60px 0 40px;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), transparent);
}

.page-title {
  font-size: 3rem;
  margin: 0 0 16px;
  color: var(--text);
  font-weight: 700;
  text-align: center;
}

.page-date {
  text-align: center;
  color: rgba(255, 210, 210, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

.legal-content {
  padding: 40px 0 80px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.legal-text {
  color: rgba(255, 210, 210, 0.85);
  line-height: 1.8;
}

.legal-text h2 {
  font-size: 1.8rem;
  color: rgba(255, 230, 230, 0.95);
  margin: 40px 0 16px;
  font-weight: 600;
}

.legal-text h2:first-child {
  margin-top: 0;
}

.legal-text p {
  font-size: 1rem;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text ul {
  margin: 20px 0;
  padding-left: 30px;
  list-style: disc;
}

.legal-text li {
  font-size: 1rem;
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text a {
  color: var(--accent);
  text-decoration: none;
}

.legal-text a:hover {
  text-decoration: underline;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .legal-header {
    padding: 50px 0 30px;
  }

  .page-title {
    font-size: 2.5rem;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .legal-header {
    padding: 40px 0 20px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .page-date {
    font-size: 12px;
  }

  .legal-content {
    padding: 30px 0 60px;
  }

  .legal-text h2 {
    font-size: 20px;
    margin: 30px 0 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .legal-text p {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .legal-text ul {
    padding-left: 20px;
  }

  .legal-text li {
    font-size: 12px;
    margin-bottom: 8px;
  }
}
</style>

