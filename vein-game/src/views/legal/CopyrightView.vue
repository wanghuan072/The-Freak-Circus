<template>
  <div class="legal-page">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">Copyright</h1>
        <p class="page-date">Last Updated: {{ currentDate }}</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Copyright Notice</h2>
            <p>
              © {{ currentYear }} VEIN Fan Hub. All rights reserved. This website and its content are protected by copyright laws.
            </p>

            <h2>Ownership</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of VEIN Fan Hub or its content suppliers and is protected by international copyright laws.
            </p>

            <h2>Trademark Notice</h2>
            <p>
              VEIN is a trademark of Ramjet Studios. This website is not affiliated with or endorsed by Ramjet Studios. All references to VEIN, Ramjet Studios, and related trademarks are used for informational purposes only.
            </p>

            <h2>Fair Use</h2>
            <p>
              This website contains information about the VEIN game for educational and informational purposes. We believe our use of game-related content falls under fair use as we provide commentary, analysis, and community resources.
            </p>

            <h2>User-Generated Content</h2>
            <p>
              Users who submit content to our website retain ownership of their original content but grant VEIN Fan Hub a license to use, display, and distribute that content on our website.
            </p>

            <h2>DMCA Policy</h2>
            <p>
              If you believe that any content on our website infringes your copyright, please contact us at <a href="mailto:wyong@veingame.net">wyong@veingame.net</a> with the following information:
            </p>
            <ul>
              <li>Your contact information</li>
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>The location of the allegedly infringing material on our website</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement that the information in your notice is accurate</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For copyright-related inquiries, please contact us at <a href="mailto:wyong@veingame.net">wyong@veingame.net</a>.
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

const currentYear = computed(() => {
  return new Date().getFullYear()
})

setSEO({
  title: 'Copyright - VEIN Fan Hub - veingame.net',
  description: 'Copyright information for VEIN Fan Hub. Learn about our copyright policies and intellectual property rights.',
  keywords: 'copyright, VEIN game, intellectual property, DMCA, fair use'
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

