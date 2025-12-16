<template>
  <div class="legal-page">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">Terms of Service</h1>
        <p class="page-date">Last Updated: {{ currentDate }}</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using VEIN Fan Hub, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2>Use of Website</h2>
            <p>
              You may use our website for lawful purposes only. You agree not to use the website in any way that violates any applicable laws or regulations, or that could harm, disable, or impair the website.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of VEIN Fan Hub or its content suppliers and is protected by copyright and other intellectual property laws. VEIN is a trademark of Ramjet Studios. This website is not affiliated with or endorsed by Ramjet Studios.
            </p>

            <h2>User Content</h2>
            <p>
              If you submit any content to our website, you grant us a non-exclusive, royalty-free license to use, reproduce, and distribute that content. You represent that you have the right to grant such license.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The information on this website is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or usefulness of any information on the website. We are not responsible for any errors or omissions in the content.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, VEIN Fan Hub shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the "Last Updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at <a href="mailto:wyong@veingame.net">wyong@veingame.net</a>.
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
  title: 'Terms of Service - VEIN Fan Hub - veingame.net',
  description: 'Terms of Service for VEIN Fan Hub. Read our terms and conditions for using our website and services.',
  keywords: 'terms of service, VEIN game, terms and conditions, user agreement'
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
}
</style>

