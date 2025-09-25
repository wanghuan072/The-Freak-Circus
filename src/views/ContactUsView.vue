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
                    <section>
                        <h2>{{ $t('ContactPage.getInTouch.title') }}</h2>
                        <p>{{ $t('ContactPage.getInTouch.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('ContactPage.contactInformation.title') }}</h2>
                        <p v-html="$t('ContactPage.contactInformation.email', {}, { raw: true })"></p>
                        <p>{{ $t('ContactPage.contactInformation.responseTime') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('ContactPage.responseTime.title') }}</h2>
                        <ul>
                            <li><strong>{{ $t('ContactPage.responseTime.weekdays') }}:</strong> {{
                                $t('ContactPage.responseTime.weekdaysTime') }}</li>
                            <li><strong>{{ $t('ContactPage.responseTime.weekends') }}:</strong> {{
                                $t('ContactPage.responseTime.weekendsTime') }}</li>
                        </ul>
                    </section>

                    <section>
                        <h2>{{ $t('ContactPage.whatWeCanHelpWith.title') }}</h2>
                        <ul>
                            <li><strong>{{ $t('ContactPage.whatWeCanHelpWith.accountIssues') }}:</strong> {{
                                $t('ContactPage.whatWeCanHelpWith.accountIssuesDesc') }}</li>
                            <li><strong>{{ $t('ContactPage.whatWeCanHelpWith.websiteFeedback') }}:</strong> {{
                                $t('ContactPage.whatWeCanHelpWith.websiteFeedbackDesc') }}</li>
                            <li><strong>{{ $t('ContactPage.whatWeCanHelpWith.contentRequests') }}:</strong> {{
                                $t('ContactPage.whatWeCanHelpWith.contentRequestsDesc') }}</li>
                            <li><strong>{{ $t('ContactPage.whatWeCanHelpWith.technicalSupport') }}:</strong> {{
                                $t('ContactPage.whatWeCanHelpWith.technicalSupportDesc') }}</li>
                            <li><strong>{{ $t('ContactPage.whatWeCanHelpWith.partnershipInquiries') }}:</strong> {{
                                $t('ContactPage.whatWeCanHelpWith.partnershipInquiriesDesc') }}</li>
                            <li><strong>{{ $t('ContactPage.whatWeCanHelpWith.generalQuestions') }}:</strong> {{
                                $t('ContactPage.whatWeCanHelpWith.generalQuestionsDesc') }}</li>
                        </ul>
                    </section>

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
                            <li><strong>{{ $t('ContactPage.faq.contentUpdate.question') }}</strong><br>{{
                                $t('ContactPage.faq.contentUpdate.answer') }}</li>
                            <li><strong>{{ $t('ContactPage.faq.contentSafety.question') }}</strong><br>{{
                                $t('ContactPage.faq.contentSafety.answer') }}</li>
                            <li><strong>{{ $t('ContactPage.faq.suggestContent.question') }}</strong><br>{{
                                $t('ContactPage.faq.suggestContent.answer') }}</li>
                        </ul>
                    </section>

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
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
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
