<template>
    <div class="copyright-page">
        <AppHeader />

        <main class="main-content">
            <div class="container">
                <div class="page-header">
                    <h1>{{ $t('CopyrightPage.header.title') }}</h1>
                    <p>{{ $t('CopyrightPage.header.lastUpdated') }}</p>
                </div>

                <div class="copyright-content">
                    <section>
                        <h2>{{ $t('CopyrightPage.copyrightStatement.title') }}</h2>
                        <p v-html="$t('CopyrightPage.copyrightStatement.description', {}, { raw: true })"></p>
                    </section>

                    <section>
                        <h2>{{ $t('CopyrightPage.whatWeOwn.title') }}</h2>
                        <ul>
                            <li><strong>{{ $t('CopyrightPage.whatWeOwn.originalContent') }}:</strong> {{
                                $t('CopyrightPage.whatWeOwn.originalContentDesc') }}</li>
                            <li><strong>{{ $t('CopyrightPage.whatWeOwn.websiteDesign') }}:</strong> {{
                                $t('CopyrightPage.whatWeOwn.websiteDesignDesc') }}</li>
                            <li><strong>{{ $t('CopyrightPage.whatWeOwn.originalImages') }}:</strong> {{
                                $t('CopyrightPage.whatWeOwn.originalImagesDesc') }}</li>
                            <li><strong>{{ $t('CopyrightPage.whatWeOwn.codeSoftware') }}:</strong> {{
                                $t('CopyrightPage.whatWeOwn.codeSoftwareDesc') }}</li>
                        </ul>
                    </section>

                    <section>
                        <h2>{{ $t('CopyrightPage.thirdPartyContent.title') }}</h2>
                        <p v-html="$t('CopyrightPage.thirdPartyContent.description', {}, { raw: true })"></p>
                    </section>

                    <section>
                        <h2>{{ $t('CopyrightPage.fairUsePolicy.title') }}</h2>
                        <p>{{ $t('CopyrightPage.fairUsePolicy.description') }}</p>
                        <p><strong>{{ $t('CopyrightPage.fairUsePolicy.allowedUses') }}:</strong></p>
                        <ul>
                            <li>{{ $t('CopyrightPage.fairUsePolicy.personalStudy') }}</li>
                            <li>{{ $t('CopyrightPage.fairUsePolicy.educational') }}</li>
                            <li>{{ $t('CopyrightPage.fairUsePolicy.nonCommercial') }}</li>
                            <li>{{ $t('CopyrightPage.fairUsePolicy.criticism') }}</li>
                        </ul>
                        <p><strong>{{ $t('CopyrightPage.fairUsePolicy.restrictedUses') }}:</strong></p>
                        <ul>
                            <li>{{ $t('CopyrightPage.fairUsePolicy.commercialReproduction') }}</li>
                            <li>{{ $t('CopyrightPage.fairUsePolicy.massDistribution') }}</li>
                            <li>{{ $t('CopyrightPage.fairUsePolicy.modification') }}</li>
                            <li>{{ $t('CopyrightPage.fairUsePolicy.removalAttribution') }}</li>
                        </ul>
                    </section>

                    <section>
                        <h2>{{ $t('CopyrightPage.dmcaCompliance.title') }}</h2>
                        <p>{{ $t('CopyrightPage.dmcaCompliance.description') }}</p>
                        <p><strong>{{ $t('CopyrightPage.dmcaCompliance.requirements') }}:</strong></p>
                        <ul>
                            <li>{{ $t('CopyrightPage.dmcaCompliance.specificDetails') }}</li>
                            <li>{{ $t('CopyrightPage.dmcaCompliance.proofOwnership') }}</li>
                            <li>{{ $t('CopyrightPage.dmcaCompliance.formalNotice') }}</li>
                        </ul>
                    </section>

                    <section>
                        <h2>{{ $t('CopyrightPage.attributionRequirements.title') }}</h2>
                        <p>{{ $t('CopyrightPage.attributionRequirements.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('CopyrightPage.licenseRequests.title') }}</h2>
                        <p>{{ $t('CopyrightPage.licenseRequests.description') }}</p>
                        <p><strong>{{ $t('CopyrightPage.licenseRequests.requirements') }}:</strong></p>
                        <ul>
                            <li>{{ $t('CopyrightPage.licenseRequests.specificContent') }}</li>
                            <li>{{ $t('CopyrightPage.licenseRequests.intendedPurpose') }}</li>
                            <li>{{ $t('CopyrightPage.licenseRequests.duration') }}</li>
                            <li>{{ $t('CopyrightPage.licenseRequests.contactInfo') }}</li>
                        </ul>
                    </section>

                    <section>
                        <h2>{{ $t('CopyrightPage.contactInformation.title') }}</h2>
                        <p>{{ $t('CopyrightPage.contactInformation.email') }}wyong@thefreakcircus.org</p>
                    </section>

                    <section>
                        <h2>{{ $t('CopyrightPage.updatesToCopyrightNotice.title') }}</h2>
                        <p>{{ $t('CopyrightPage.updatesToCopyrightNotice.description1') }}</p>
                        <p>{{ $t('CopyrightPage.updatesToCopyrightNotice.description2') }}</p>
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
import '@/assets/css/public.css'
</script>

<style scoped>
.copyright-page {
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

.copyright-content {
    max-width: 900px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 3rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.copyright-content section {
    margin-bottom: 2rem;
}

.copyright-content section:last-child {
    margin-bottom: 0;
}

.copyright-content h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #8b5cf6;
    position: relative;
    padding-left: 1rem;
}

.copyright-content h2:before {
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

.copyright-content p {
    font-size: 0.9rem;
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.copyright-content ul {
    margin-bottom: 1rem;
    padding-left: 0;
}

.copyright-content li {
    list-style: none;
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #e0e0e0;
    font-size: 0.9rem;
    line-height: 1.5;
}

.copyright-content li:before {
    content: '·';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: #8b5cf6;
    font-weight: bold;
    font-size: 1.2rem;
}

.copyright-content strong {
    color: #fff;
    font-weight: 600;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {

    .copyright-header {
        padding: 40px 0;
    }

    .copyright-title {
        font-size: 36px;
    }

    .copyright-subtitle {
        font-size: 18px;
    }

    .copyright-content {
        padding: 60px 0;
    }

    .copyright-content h1 {
        font-size: 28px;
        margin-bottom: 24px;
    }

    .copyright-content h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .copyright-content h3 {
        font-size: 20px;
        margin-bottom: 16px;
    }

    .copyright-content p {
        font-size: 16px;
        margin-bottom: 16px;
    }

    .copyright-content li {
        font-size: 16px;
        margin-bottom: 8px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .main-content {
        padding-top: 70px;
    }

    .copyright-header {
        padding: 20px 0;
    }

    .copyright-title {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .copyright-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .copyright-content {
        padding: 20px 0;
    }

    .copyright-content h1 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .copyright-content h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .copyright-content h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .copyright-content h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .copyright-content p {
        font-size: 12px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .copyright-content li {
        font-size: 12px;
        margin-bottom: 10px;
        padding-left: 10px;
    }

    .copyright-content li:before {
        font-size: 0.8rem;
    }
}
</style>
