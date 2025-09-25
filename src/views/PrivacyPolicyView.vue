<template>
    <div class="privacy-policy-page">
        <AppHeader />

        <main class="main-content">
            <div class="container">
                <div class="page-header">
                    <h1>{{ $t('PrivacyPolicyPage.header.title') }}</h1>
                    <p>{{ $t('PrivacyPolicyPage.header.lastUpdated') }}</p>
                </div>

                <div class="policy-content">
                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.generalInformation.title') }}</h2>
                        <p v-html="$t('PrivacyPolicyPage.generalInformation.description1', {}, { raw: true })"></p>
                        <p>{{ $t('PrivacyPolicyPage.generalInformation.description2') }}</p>
                        <p v-html="$t('PrivacyPolicyPage.generalInformation.description3', {}, { raw: true })"></p>
                    </section>

                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.dataCollection.title') }}</h2>

                        <h3>{{ $t('PrivacyPolicyPage.dataCollection.dataYouProvide.title') }}</h3>
                        <p>{{ $t('PrivacyPolicyPage.dataCollection.dataYouProvide.description') }}</p>
                        <ul>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataYouProvide.name') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataYouProvide.email') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataYouProvide.otherInfo') }}</li>
                        </ul>

                        <h3>{{ $t('PrivacyPolicyPage.dataCollection.dataCollectedAutomatically.title') }}</h3>
                        <p>{{ $t('PrivacyPolicyPage.dataCollection.dataCollectedAutomatically.description') }}</p>
                        <ul>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataCollectedAutomatically.ipAddress') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataCollectedAutomatically.browserType') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataCollectedAutomatically.referringPage') }}
                            </li>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataCollectedAutomatically.deviceIdentifiers')
                                }}</li>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataCollectedAutomatically.cookieData') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.dataCollection.dataCollectedAutomatically.userInteraction') }}
                            </li>
                        </ul>

                        <h3>{{ $t('PrivacyPolicyPage.dataCollection.thirdPartyData.title') }}</h3>
                        <p>{{ $t('PrivacyPolicyPage.dataCollection.thirdPartyData.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.whyWeCollectData.title') }}</h2>
                        <p>{{ $t('PrivacyPolicyPage.whyWeCollectData.description') }}</p>
                        <ul>
                            <li>{{ $t('PrivacyPolicyPage.whyWeCollectData.providingServices') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.whyWeCollectData.contractualObligations') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.whyWeCollectData.marketingCommunications') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.whyWeCollectData.statisticalAnalysis') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.whyWeCollectData.legalCompliance') }}</li>
                        </ul>
                        <p>{{ $t('PrivacyPolicyPage.whyWeCollectData.legalBases') }}</p>
                        <p v-html="$t('PrivacyPolicyPage.whyWeCollectData.note', {}, { raw: true })"></p>
                    </section>

                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.dataRetention.title') }}</h2>
                        <p>{{ $t('PrivacyPolicyPage.dataRetention.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.gdprRights.title') }}</h2>
                        <p>{{ $t('PrivacyPolicyPage.gdprRights.description') }}</p>
                        <ul>
                            <li>{{ $t('PrivacyPolicyPage.gdprRights.accessUpdateDelete') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.gdprRights.rectification') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.gdprRights.objectToProcessing') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.gdprRights.restrictProcessing') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.gdprRights.dataPortability') }}</li>
                            <li>{{ $t('PrivacyPolicyPage.gdprRights.withdrawConsent') }}</li>
                        </ul>
                        <p>{{ $t('PrivacyPolicyPage.gdprRights.verification') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.yourRights.title') }}</h2>
                        <p v-html="$t('PrivacyPolicyPage.yourRights.description1', {}, { raw: true })"></p>
                        <p>{{ $t('PrivacyPolicyPage.yourRights.description2') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.cookies.title') }}</h2>

                        <h3>{{ $t('PrivacyPolicyPage.cookies.whatAreCookies.title') }}</h3>
                        <p>{{ $t('PrivacyPolicyPage.cookies.whatAreCookies.description') }}</p>

                        <h3>{{ $t('PrivacyPolicyPage.cookies.typesOfCookies.title') }}</h3>
                        <ul>
                            <li v-html="$t('PrivacyPolicyPage.cookies.typesOfCookies.firstParty', {}, { raw: true })">
                            </li>
                            <li v-html="$t('PrivacyPolicyPage.cookies.typesOfCookies.thirdParty', {}, { raw: true })">
                            </li>
                        </ul>

                        <h3>{{ $t('PrivacyPolicyPage.cookies.whichCookiesWeUse.title') }}</h3>
                        <p v-html="$t('PrivacyPolicyPage.cookies.whichCookiesWeUse.description', {}, { raw: true })">
                        </p>

                        <h3>{{ $t('PrivacyPolicyPage.cookies.howToManage.title') }}</h3>
                        <p>{{ $t('PrivacyPolicyPage.cookies.howToManage.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.securityMeasures.title') }}</h2>
                        <p>{{ $t('PrivacyPolicyPage.securityMeasures.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('PrivacyPolicyPage.contactInformation.title') }}</h2>
                        <p>{{ $t('PrivacyPolicyPage.contactInformation.description') }}</p>
                        <ul>
                            <li v-html="$t('PrivacyPolicyPage.contactInformation.email', {}, { raw: true })"></li>
                            <li v-html="$t('PrivacyPolicyPage.contactInformation.website', {}, { raw: true })"></li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>

        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
.privacy-policy-page {
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

.policy-content {
    max-width: 900px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 3rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.policy-content section {
    margin-bottom: 2rem;
}

.policy-content section:last-child {
    margin-bottom: 0;
}

.policy-content h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #8b5cf6;
    position: relative;
    padding-left: 1rem;
}

.policy-content h2:before {
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

.policy-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #c084fc;
}

.policy-content p {
    font-size: 0.9rem;
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.policy-content ul {
    margin-bottom: 1rem;
    padding-left: 0;
}

.policy-content li {
    list-style: none;
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #e0e0e0;
    font-size: 0.9rem;
    line-height: 1.5;
}

.policy-content li:before {
    content: '·';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: #8b5cf6;
    font-weight: bold;
    font-size: 1.2rem;
}

.policy-content strong {
    color: #fff;
    font-weight: 600;
}

.policy-content em {
    color: #999;
    font-style: italic;
}

.policy-content a {
    color: #8b5cf6;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.policy-content a:hover {
    color: #c084fc;
    border-bottom-color: #c084fc;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {

    .policy-header {
        padding: 40px 0;
    }

    .policy-title {
        font-size: 36px;
    }

    .policy-subtitle {
        font-size: 18px;
    }

    .policy-content {
        padding: 60px 0;
    }

    .policy-content h1 {
        font-size: 28px;
        margin-bottom: 24px;
    }

    .policy-content h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .policy-content h3 {
        font-size: 20px;
        margin-bottom: 16px;
    }

    .policy-content p {
        font-size: 16px;
        margin-bottom: 16px;
    }

    .policy-content li {
        font-size: 16px;
        margin-bottom: 8px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .main-content {
        padding-top: 70px;
    }

    .policy-header {
        padding: 20px 0;
    }

    .policy-title {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .policy-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .policy-content {
        padding: 20px 0;
    }

    .policy-content h1 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .policy-content h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .policy-content h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .policy-content h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .policy-content p {
        font-size: 12px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .policy-content li {
        font-size: 12px;
        margin-bottom: 10px;
        padding-left: 10px;
    }

    .policy-content li:before {
        font-size: 0.8rem;
    }
}
</style>
