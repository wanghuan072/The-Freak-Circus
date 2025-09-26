<template>
    <div class="updates-page">
        <AppHeader />

        <main class="main-content">
            <!-- Updates Header -->
            <div class="updates-header">
                <div class="container">
                    <div class="header-content">
                        <h1 class="updates-title">{{ $t('UpdatesPage.header.title') }}</h1>
                        <p class="updates-subtitle">{{ $t('UpdatesPage.header.subtitle') }}</p>
                        <div class="updates-navigation">
                            <a href="/" class="nav-link">{{ $t('UpdatesPage.header.backToHome') }}</a>
                            <a href="/wiki" class="nav-link">{{ $t('UpdatesPage.header.wiki') }}</a>
                            <a href="/pierrot" class="nav-link">{{ $t('UpdatesPage.header.pierrot') }}</a>
                            <a href="/harlequin" class="nav-link">{{ $t('UpdatesPage.header.harlequin') }}</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Updates Content -->
            <div class="updates-content">
                <div class="container">
                    <div class="updates-list">
                        <!-- Update 1: Almost There (Latest) -->
                        <article class="update-block">
                            <h2 class="update-title">{{ $t('UpdatesPage.updates.almostThere.title') }}</h2>
                            <div class="update-content">
                                <p>{{ $t('UpdatesPage.updates.almostThere.description1') }}</p>
                                <p>{{ $t('UpdatesPage.updates.almostThere.description2') }}</p>
                                <p>{{ $t('UpdatesPage.updates.almostThere.description3') }}</p>
                                <p v-html="$t('UpdatesPage.updates.almostThere.description4', {}, { raw: true })"></p>
                                <p>{{ $t('UpdatesPage.updates.almostThere.description5') }}</p>
                            </div>
                        </article>

                        <!-- Update 2: Monthly Update -->
                        <article class="update-block">
                            <h2 class="update-title">{{ $t('UpdatesPage.updates.monthlyUpdate.title') }}</h2>
                            <div class="update-content">
                                <p>{{ $t('UpdatesPage.updates.monthlyUpdate.description1') }}</p>
                                <p>{{ $t('UpdatesPage.updates.monthlyUpdate.description2') }}</p>
                                <p>{{ $t('UpdatesPage.updates.monthlyUpdate.description3') }}</p>
                                <p v-html="$t('UpdatesPage.updates.monthlyUpdate.description4', {}, { raw: true })"></p>
                                <p>{{ $t('UpdatesPage.updates.monthlyUpdate.description5') }}</p>
                            </div>
                        </article>

                        <!-- Update 3: 1 Month Anniversary -->
                        <article class="update-block">
                            <h2 class="update-title">{{ $t('UpdatesPage.updates.anniversary.title') }}</h2>
                            <div class="update-content">
                                <p v-html="$t('UpdatesPage.updates.anniversary.celebration', {}, { raw: true })"></p>
                                <p>{{ $t('UpdatesPage.updates.anniversary.thankYou') }}</p>

                                <h3 class="content-heading">{{ $t('UpdatesPage.updates.anniversary.dia2Title') }}</h3>
                                <p>{{ $t('UpdatesPage.updates.anniversary.dia2Description') }}</p>

                                <h3 class="content-heading">{{ $t('UpdatesPage.updates.anniversary.summaryTitle') }}
                                </h3>
                                <ul class="update-list">
                                    <li v-html="$t('UpdatesPage.updates.anniversary.summary1', {}, { raw: true })"></li>
                                    <li>{{ $t('UpdatesPage.updates.anniversary.summary2') }}</li>
                                    <li v-html="$t('UpdatesPage.updates.anniversary.summary3', {}, { raw: true })"></li>
                                    <li>{{ $t('UpdatesPage.updates.anniversary.summary4') }}</li>
                                    <li>{{ $t('UpdatesPage.updates.anniversary.summary5') }}</li>
                                    <li v-html="$t('UpdatesPage.updates.anniversary.summary6', {}, { raw: true })"></li>
                                </ul>
                            </div>
                        </article>

                        <!-- Update 4: Future Updates -->
                        <article class="update-block">
                            <h2 class="update-title">{{ $t('UpdatesPage.updates.futureUpdates.title') }}</h2>
                            <div class="update-content">
                                <p>{{ $t('UpdatesPage.updates.futureUpdates.description1') }}</p>
                                <p v-html="$t('UpdatesPage.updates.futureUpdates.description2', {}, { raw: true })"></p>
                                <p>{{ $t('UpdatesPage.updates.futureUpdates.description3') }}</p>
                                <p v-html="$t('UpdatesPage.updates.futureUpdates.description4', {}, { raw: true })"></p>
                                <p v-html="$t('UpdatesPage.updates.futureUpdates.description5', {}, { raw: true })"></p>
                                <p v-html="$t('UpdatesPage.updates.futureUpdates.description6', {}, { raw: true })"></p>
                                <p v-html="$t('UpdatesPage.updates.futureUpdates.description7', {}, { raw: true })"></p>
                            </div>
                        </article>

                        <!-- Update 5: Chinese Language -->
                        <article class="update-block">
                            <h2 class="update-title">{{ $t('UpdatesPage.updates.chineseLanguage.title') }}</h2>
                            <div class="update-content">
                                <p>{{ $t('UpdatesPage.updates.chineseLanguage.description1') }}</p>
                                <p>{{ $t('UpdatesPage.updates.chineseLanguage.description2') }}</p>
                                <p v-html="$t('UpdatesPage.updates.chineseLanguage.description3', {}, { raw: true })">
                                </p>
                            </div>
                        </article>

                        <!-- Update 6: Pronoun Options -->
                        <article class="update-block">
                            <h2 class="update-title">{{ $t('UpdatesPage.updates.pronounOptions.title') }}</h2>
                            <div class="update-content">
                                <h3 class="content-heading">{{
                                    $t('UpdatesPage.updates.pronounOptions.personalizationTitle') }}</h3>
                                <p>{{ $t('UpdatesPage.updates.pronounOptions.description1') }}</p>
                                <p v-html="$t('UpdatesPage.updates.pronounOptions.description2', {}, { raw: true })">
                                </p>

                                <h3 class="content-heading">{{
                                    $t('UpdatesPage.updates.pronounOptions.englishSupportTitle') }}</h3>
                                <p>{{ $t('UpdatesPage.updates.pronounOptions.description3') }}</p>
                            </div>
                        </article>

                        <!-- Update 7: Thank You (Oldest) -->
                        <article class="update-block">
                            <h2 class="update-title">{{ $t('UpdatesPage.updates.thankYou.title') }}</h2>
                            <div class="update-content">
                                <h3 class="content-heading">{{ $t('UpdatesPage.updates.thankYou.gratitudeTitle') }}</h3>
                                <p v-html="$t('UpdatesPage.updates.thankYou.description1', {}, { raw: true })"></p>
                                <p v-html="$t('UpdatesPage.updates.thankYou.description2', {}, { raw: true })"></p>
                                <p>{{ $t('UpdatesPage.updates.thankYou.description3') }}</p>
                                <p v-html="$t('UpdatesPage.updates.thankYou.description4', {}, { raw: true })"></p>
                                <p v-html="$t('UpdatesPage.updates.thankYou.description5', {}, { raw: true })"></p>
                            </div>
                        </article>
                    </div>
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
.updates-page {
    min-height: 100vh;
    background: #331a1a;
    color: #f5d07a;
}

.main-content {
    padding-top: 80px;
}

/* Updates Header */
.updates-header {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(51, 26, 26, 0.8) 100%);
    padding: 60px 0;
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.header-content {
    text-align: center;
}

.updates-title {
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #f5c542 0%, #f5d07a 25%, #f0a800 50%, #e89c3d 75%, #d4af37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
    letter-spacing: -0.02em;
}

.updates-subtitle {
    font-size: 20px;
    color: #f5d07a;
    margin-bottom: 32px;
    font-weight: 600;
}

.updates-navigation {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
}

.nav-link {
    color: #f5d07a;
    text-decoration: none;
    padding: 12px 24px;
    border: 1px solid rgba(245, 208, 122, 0.3);
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.nav-link:hover {
    background: rgba(245, 208, 122, 0.2);
    border-color: #f5c542;
    color: #f5c542;
}

/* Updates Content */
.updates-content {
    padding: 80px 0;
    background: #331a1a;
}

.updates-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 800px;
    margin: 0 auto;
}

/* Update Block */
.update-block {
    background: rgba(74, 30, 30, 0.3);
    border-radius: 15px;
    padding: 30px;
    border: 1px solid rgba(245, 208, 122, 0.1);
    backdrop-filter: blur(10px);
}

.update-block:deep(a) {
    color: #4287f5;
    text-decoration: none;
    font-weight: 600;
}

.update-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 24px;
    color: #f5c542;
    text-transform: uppercase;
}

/* Update Content */
.update-content {
    line-height: 1.8;
}

.content-heading {
    color: #f5c542;
    font-size: 20px;
    font-weight: 700;
    margin: 24px 0 16px 0;
    text-transform: uppercase;
}

.update-content p {
    color: #f5d07a;
    font-size: 16px;
    margin-bottom: 16px;
}

.update-content p:last-child {
    margin-bottom: 0;
}

.update-content strong {
    color: #f5c542;
    font-weight: 700;
}

.update-list {
    list-style: none;
    padding: 0;
    margin: 16px 0;
}

.update-list li {
    color: #f5d07a;
    font-size: 16px;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
}

.update-list li::before {
    content: "•";
    color: #f5c542;
    font-size: 18px;
    position: absolute;
    left: 0;
    top: 0;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {

    .updates-header {
        padding: 40px 0;
    }

    .updates-title {
        font-size: 36px;
    }

    .updates-subtitle {
        font-size: 18px;
    }

    .updates-navigation {
        flex-direction: column;
        gap: 12px;
    }

    .updates-content {
        padding: 60px 0;
    }

    .update-item {
        padding: 30px;
        margin-bottom: 30px;
    }

    .update-title {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .update-content {
        padding: 20px;
    }

    .update-content p {
        font-size: 16px;
        margin-bottom: 16px;
    }

    .update-list {
        margin: 16px 0;
    }

    .update-list li {
        font-size: 14px;
        margin-bottom: 6px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .main-content {
        padding-top: 70px;
    }

    .updates-header {
        padding: 20px 0;
    }

    .updates-title {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .updates-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .updates-navigation {
        gap: 10px;
    }

    .nav-link {
        font-size: 12px;
        padding: 5px 10px;
    }

    .updates-content {
        padding: 20px 0;
    }

    .update-item {
        padding: 10px;
        margin-bottom: 10px;
    }

    .update-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .update-content {
        padding: 10px;
    }

    .update-content p {
        font-size: 12px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .update-list {
        margin: 10px 0;
    }

    .update-list li {
        font-size: 12px;
        margin-bottom: 10px;
        padding-left: 10px;
    }
}
</style>