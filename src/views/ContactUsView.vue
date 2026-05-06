<template>
  <div class="contact-page">
    <AppHeader />
    <main class="main-content">
      <div class="container">
        <div class="page-header">
          <h1>{{ $t('ContactPage.header.title') }}</h1>
          <p>{{ $t('ContactPage.header.lastUpdated') }}</p>
        </div>
        <div class="contact-content">
          <!-- 联盟广告已停用（仅首页保留）
          <div class="adsterra-native-wrap">
            <div id="container-20f454a6b133aad5da418bed2ee46fa4"></div>
          </div>
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
          <section>
            <h2>{{ $t('ContactPage.getInTouch.title') }}</h2>
            <p>{{ $t('ContactPage.getInTouch.description') }}</p>
          </section>

          <section>
            <h2>{{ $t('ContactPage.contactInformation.title') }}</h2>
            <p>
              <strong>{{ $t('ContactPage.contactInformation.email') }}</strong>
              <a href="mailto:wyong@thefreakcircus.org\">wyong@thefreakcircus.org</a>
            </p>
            <p>{{ $t('ContactPage.contactInformation.responseTime') }}</p>
          </section>

          <!--
          <div v-if="!isMobile" class="adsterra-banner-slot" ref="ad728bRef"></div>
          <div v-if="isMobile" class="adsterra-banner-slot" ref="ad300bRef"></div>
          -->

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
          <section>
            <h2>{{ $t('ContactPage.responseTime.title') }}</h2>
            <ul>
              <li>
                <strong>{{ $t('ContactPage.responseTime.weekdays') }}:</strong>
                {{ $t('ContactPage.responseTime.weekdaysTime') }}
              </li>
              <li>
                <strong>{{ $t('ContactPage.responseTime.weekends') }}:</strong>
                {{ $t('ContactPage.responseTime.weekendsTime') }}
              </li>
            </ul>
          </section>

          <section>
            <h2>{{ $t('ContactPage.whatWeCanHelpWith.title') }}</h2>
            <ul>
              <li>
                <strong>{{ $t('ContactPage.whatWeCanHelpWith.accountIssues') }}:</strong>
                {{ $t('ContactPage.whatWeCanHelpWith.accountIssuesDesc') }}
              </li>
              <li>
                <strong>{{ $t('ContactPage.whatWeCanHelpWith.websiteFeedback') }}:</strong>
                {{ $t('ContactPage.whatWeCanHelpWith.websiteFeedbackDesc') }}
              </li>
              <li>
                <strong>{{ $t('ContactPage.whatWeCanHelpWith.contentRequests') }}:</strong>
                {{ $t('ContactPage.whatWeCanHelpWith.contentRequestsDesc') }}
              </li>
              <li>
                <strong>{{ $t('ContactPage.whatWeCanHelpWith.technicalSupport') }}:</strong>
                {{ $t('ContactPage.whatWeCanHelpWith.technicalSupportDesc') }}
              </li>
              <li>
                <strong>{{ $t('ContactPage.whatWeCanHelpWith.partnershipInquiries') }}:</strong>
                {{ $t('ContactPage.whatWeCanHelpWith.partnershipInquiriesDesc') }}
              </li>
              <li>
                <strong>{{ $t('ContactPage.whatWeCanHelpWith.generalQuestions') }}:</strong>
                {{ $t('ContactPage.whatWeCanHelpWith.generalQuestionsDesc') }}
              </li>
            </ul>
          </section>

          <!--
          <div v-if="!isMobile" class="adsterra-banner-slot" ref="ad728cRef"></div>
          <div v-if="isMobile" class="adsterra-banner-slot" ref="ad300cRef"></div>
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
          <section>
            <h2>{{ $t('ContactPage.beforeYouContactUs.title') }}</h2>
            <p>{{ $t('ContactPage.beforeYouContactUs.description') }}</p>
            <ul>
              <li>{{ $t('ContactPage.beforeYouContactUs.specificQuestion') }}</li>
              <li>{{ $t('ContactPage.beforeYouContactUs.errorMessages') }}</li>
              <li>{{ $t('ContactPage.beforeYouContactUs.stepsTried') }}</li>
              <li>{{ $t('ContactPage.beforeYouContactUs.deviceInfo') }}</li>
            </ul>
          </section>

          <section>
            <h2>{{ $t('ContactPage.faq.title') }}</h2>
            <ul>
              <li>
                <strong>{{ $t('ContactPage.faq.contentUpdate.question') }}</strong
                ><br />{{ $t('ContactPage.faq.contentUpdate.answer') }}
              </li>
              <li>
                <strong>{{ $t('ContactPage.faq.contentSafety.question') }}</strong
                ><br />{{ $t('ContactPage.faq.contentSafety.answer') }}
              </li>
              <li>
                <strong>{{ $t('ContactPage.faq.suggestContent.question') }}</strong
                ><br />{{ $t('ContactPage.faq.suggestContent.answer') }}
              </li>
            </ul>
          </section>

          <!--
          <div v-if="!isMobile" class="adsterra-banner-slot" ref="ad728dRef"></div>
          <div v-if="isMobile" class="adsterra-banner-slot" ref="ad300dRef"></div>
          -->

          <div ref="gAds3" class="adsterra-banner-slot">
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
          <section>
            <h2>{{ $t('ContactPage.businessHours.title') }}</h2>
            <p>{{ $t('ContactPage.businessHours.description') }}</p>
          </section>

          <section>
            <h2>{{ $t('ContactPage.privacy.title') }}</h2>
            <p>{{ $t('ContactPage.privacy.description') }}</p>
          </section>

          <section>
            <h2>{{ $t('ContactPage.thankYou.title') }}</h2>
            <p>{{ $t('ContactPage.thankYou.description') }}</p>
          </section>
        </div>
      </div>
    </main>



    <AppFooter />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'

const isMobile = ref(false)
const gAds0 = ref(null)
const gAds1 = ref(null)
const gAds2 = ref(null)
const gAds3 = ref(null)

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
  const roots = [gAds0, gAds1, gAds2, gAds3]
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
// import { ref } from 'vue'
// import { useAdsterraPageAds } from '@/composables/useAdsterraPageAds'
// const ad728bRef = ref(null)
// const ad728cRef = ref(null)
// const ad728dRef = ref(null)
// const ad300bRef = ref(null)
// const ad300cRef = ref(null)
// const ad300dRef = ref(null)
// const { isMobile } = useAdsterraPageAds(
//   [ad728bRef, ad728cRef, ad728dRef],
//   [ad300bRef, ad300cRef, ad300dRef]
// )
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #0a0a0a;
  color: #fff;
}

.main-content {
  padding: 6rem 0 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8b5cf6, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-header p {
  color: #999;
  font-size: 1rem;
  font-style: italic;
}

.contact-content {
  max-width: 900px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.contact-content section {
  margin-bottom: 2rem;
}

.contact-content section:last-child {
  margin-bottom: 0;
}

.contact-content h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #8b5cf6;
  position: relative;
  padding-left: 1rem;
}

.contact-content h2:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 30px;
  background: linear-gradient(135deg, #8b5cf6, #c084fc);
  border-radius: 2px;
}

.contact-content p {
  font-size: 0.9rem;
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.contact-content ul {
  margin-bottom: 1rem;
  padding-left: 0;
}

.contact-content li {
  list-style: none;
  position: relative;
  padding: 0.5rem 0 0.5rem 1.5rem;
  color: #e0e0e0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-content li:before {
  content: '·';
  position: absolute;
  left: 0;
  top: 0.5rem;
  color: #8b5cf6;
  font-weight: bold;
  font-size: 1.2rem;
}

.contact-content strong {
  color: #fff;
  font-weight: 600;
}

.contact-content a {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.contact-content a:hover {
  color: #c084fc;
  border-bottom-color: #c084fc;
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }

  .contact-header {
    padding: 20px 0;
  }

  .contact-title {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .contact-subtitle {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .contact-content {
    padding: 20px 0;
  }

  .contact-content h1 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .contact-content h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .contact-content h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .contact-content h4 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .contact-content p {
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  .contact-content li {
    font-size: 12px;
    margin-bottom: 10px;
    padding-left: 10px;
  }

  .contact-content li:before {
    font-size: 0.8rem;
  }
}
</style>
