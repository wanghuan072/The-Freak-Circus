<template>
    <div class="about-page">
        <AppHeader />

        <main class="main-content">
            <div class="container">
                <div class="page-header">
                    <h1>{{ $t('AboutPage.header.title') }}</h1>
                    <p>{{ $t('AboutPage.header.lastUpdated') }}</p>
                </div>

                <div class="about-content">
                    <section>
                        <h2>{{ $t('AboutPage.whoWeAre.title') }}</h2>
                        <p>{{ $t('AboutPage.whoWeAre.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('AboutPage.mission.title') }}</h2>
                        <p>{{ $t('AboutPage.mission.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('AboutPage.whatWeOffer.title') }}</h2>
                        <ul>
                            <li><strong>{{ $t('AboutPage.whatWeOffer.guides') }}</strong></li>
                            <li><strong>{{ $t('AboutPage.whatWeOffer.updates') }}</strong></li>
                            <li><strong>{{ $t('AboutPage.whatWeOffer.community') }}</strong></li>
                            <li><strong>{{ $t('AboutPage.whatWeOffer.features') }}</strong></li>
                        </ul>
                    </section>

                    <section>
                        <h2>{{ $t('AboutPage.commitment.title') }}</h2>
                        <p>{{ $t('AboutPage.commitment.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('AboutPage.community.title') }}</h2>
                        <p>{{ $t('AboutPage.community.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('AboutPage.qualityAssurance.title') }}</h2>
                        <p>{{ $t('AboutPage.qualityAssurance.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('AboutPage.regularUpdates.title') }}</h2>
                        <p>{{ $t('AboutPage.regularUpdates.description') }}</p>
                    </section>

                    <section>
                        <h2>{{ $t('AboutPage.contactUs.title') }}</h2>
                        <p v-html="$t('AboutPage.contactUs.description', {}, { raw: true })"></p>
                    </section>

                    <section>
                        <h2>{{ $t('AboutPage.joinCommunity.title') }}</h2>
                        <p>{{ $t('AboutPage.joinCommunity.description') }}</p>
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
.about-page {
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

.about-content {
    max-width: 900px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 3rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.about-content section {
    margin-bottom: 2rem;
}

.about-content section:last-child {
    margin-bottom: 0;
}

.about-content h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #8b5cf6;
    position: relative;
    padding-left: 1rem;
}

.about-content h2:before {
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

.about-content p {
    font-size: 0.9rem;
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.about-content ul {
    margin-bottom: 1rem;
    padding-left: 0;
}

.about-content li {
    list-style: none;
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #e0e0e0;
    font-size: 0.9rem;
    line-height: 1.5;
}

.about-content li:before {
    content: '·';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: #8b5cf6;
    font-weight: bold;
    font-size: 1.2rem;
}

.about-content strong {
    color: #fff;
    font-weight: 600;
}

.about-content a {
    color: #8b5cf6;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.about-content a:hover {
    color: #c084fc;
    border-bottom-color: #c084fc;
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .main-content {
        padding-top: 70px;
    }

    .about-header {
        padding: 20px 0;
    }

    .about-title {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .about-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .about-content {
        padding: 20px 0;
    }

    .about-content h1 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .about-content h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .about-content h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .about-content h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .about-content p {
        font-size: 12px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .about-content li {
        font-size: 12px;
        margin-bottom: 10px;
        padding-left: 10px;
    }

    .about-content li:before {
        font-size: 0.8rem;
    }
}
</style>
