<template>
    <div class="terms-page">
        <AppHeader />

        <main class="main-content">
            <div class="container">
                <div class="page-header">
                    <h1>{{ $t('TermsOfServicePage.header.title') }}</h1>
                    <p>{{ $t('TermsOfServicePage.header.lastUpdated') }}</p>
                </div>

                <div class="terms-content">
                    <section>
                        <h2>{{ $t('TermsOfServicePage.generalInformation.title') }}</h2>
                        <p v-html="$t('TermsOfServicePage.generalInformation.description1', {}, { raw: true })"></p>
                        <p v-html="$t('TermsOfServicePage.generalInformation.description2', {}, { raw: true })"></p>
                        <p>{{ $t('TermsOfServicePage.generalInformation.description3') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.changes.title') }}</h2>
                        <p>{{ $t('TermsOfServicePage.changes.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.informationSubmitted.title') }}</h2>
                        <p v-html="$t('TermsOfServicePage.informationSubmitted.description1', {}, { raw: true })"></p>
                        <p>{{ $t('TermsOfServicePage.informationSubmitted.description2') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.jurisdictionalIssues.title') }}</h2>
                        <p>{{ $t('TermsOfServicePage.jurisdictionalIssues.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.rulesOfConduct.title') }}</h2>
                        <ul>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.threateningMaterial') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.unauthorizedUse') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.collectInformation') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.interfereDisrupt') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.restrictInhibit') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.reproduceModify') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.reverseEngineer') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.removeNotices') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.frameMirror') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.botsSpiders') }}</li>
                            <li>{{ $t('TermsOfServicePage.rulesOfConduct.responsibleCosts') }}</li>
                        </ul>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.monitoring.title') }}</h2>
                        <p>{{ $t('TermsOfServicePage.monitoring.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.thirdPartyMaterials.title') }}</h2>
                        <p>{{ $t('TermsOfServicePage.thirdPartyMaterials.description1') }}</p>
                        <p v-html="$t('TermsOfServicePage.thirdPartyMaterials.description2', {}, { raw: true })"></p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.disclaimerOfWarranties.title') }}</h2>
                        <p v-html="$t('TermsOfServicePage.disclaimerOfWarranties.description1', {}, { raw: true })"></p>
                        <p v-html="$t('TermsOfServicePage.disclaimerOfWarranties.description2', {}, { raw: true })"></p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.filtering.title') }}</h2>
                        <p v-html="$t('TermsOfServicePage.filtering.description', {}, { raw: true })"></p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.copyrightInfringementClaims.title') }}</h2>
                        <p v-html="$t('TermsOfServicePage.copyrightInfringementClaims.description', {}, { raw: true })">
                        </p>
                    </section>

                    <section>
                        <h2>{{ $t('TermsOfServicePage.miscellaneous.title') }}</h2>
                        <p v-html="$t('TermsOfServicePage.miscellaneous.description1', {}, { raw: true })"></p>
                        <p>{{ $t('TermsOfServicePage.miscellaneous.description2') }}</p>
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
.terms-page {
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

.terms-content {
    max-width: 900px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 3rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.terms-content section {
    margin-bottom: 2rem;
}

.terms-content section:last-child {
    margin-bottom: 0;
}

.terms-content h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #8b5cf6;
    position: relative;
    padding-left: 1rem;
}

.terms-content h2:before {
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

.terms-content p {
    font-size: 0.9rem;
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.terms-content ul {
    margin-bottom: 1rem;
    padding-left: 0;
}

.terms-content li {
    list-style: none;
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #e0e0e0;
    font-size: 0.9rem;
    line-height: 1.5;
}

.terms-content li:before {
    content: '·';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: #8b5cf6;
    font-weight: bold;
    font-size: 1.2rem;
}

.terms-content strong {
    color: #fff;
    font-weight: 600;
}

.terms-content a {
    color: #8b5cf6;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.terms-content a:hover {
    color: #c084fc;
    border-bottom-color: #c084fc;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {

    .terms-header {
        padding: 40px 0;
    }

    .terms-title {
        font-size: 36px;
    }

    .terms-subtitle {
        font-size: 18px;
    }

    .terms-content {
        padding: 60px 0;
    }

    .terms-content h1 {
        font-size: 28px;
        margin-bottom: 24px;
    }

    .terms-content h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .terms-content h3 {
        font-size: 20px;
        margin-bottom: 16px;
    }

    .terms-content p {
        font-size: 16px;
        margin-bottom: 16px;
    }

    .terms-content li {
        font-size: 16px;
        margin-bottom: 8px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .main-content {
        padding-top: 70px;
    }

    .terms-header {
        padding: 20px 0;
    }

    .terms-title {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .terms-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .terms-content {
        padding: 20px 0;
    }

    .terms-content h1 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .terms-content h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .terms-content h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .terms-content h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .terms-content p {
        font-size: 12px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .terms-content li {
        font-size: 12px;
        margin-bottom: 10px;
        padding-left: 10px;
    }

    .terms-content li:before {
        font-size: 0.8rem;
    }
}
</style>
