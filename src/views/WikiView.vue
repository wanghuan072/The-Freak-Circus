<template>
    <div class="wiki-page">
        <AppHeader />

        <main class="main-content">
            <!-- Wiki Header -->
            <div class="wiki-header">
                <div class="container">
                    <div class="header-content">
                        <h1 class="wiki-title">{{ $t('WikiPage.header.title') }}</h1>
                        <p class="wiki-subtitle" v-html="$t('WikiPage.header.subtitle', {}, { raw: true })"></p>
                        <div class="wiki-navigation">
                            <a href="/" class="nav-link">{{ $t('WikiPage.header.backToHome') }}</a>
                            <a href="/pierrot" class="nav-link">{{ $t('WikiPage.header.pierrot') }}</a>
                            <a href="/harlequin" class="nav-link">{{ $t('WikiPage.header.harlequin') }}</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wiki Content -->
            <div class="wiki-content">
                <div class="container">
                    <div class="content-grid">
                        <!-- Main Article -->
                        <article class="main-article">
                            <section class="wiki-section">
                                <h2 class="section-title">{{ $t('WikiPage.gameOverview.title') }}</h2>
                                <div class="content-card">
                                    <p v-html="$t('WikiPage.gameOverview.description1', {}, { raw: true })"></p>
                                    <p v-html="$t('WikiPage.gameOverview.description2', {}, { raw: true })"></p>
                                    <p v-html="$t('WikiPage.gameOverview.description3', {}, { raw: true })"></p>
                                </div>
                            </section>

                            <section class="wiki-section">
                                <h2 class="section-title">{{ $t('WikiPage.gamePremise.title') }}</h2>
                                <div class="content-card">
                                    <p v-html="$t('WikiPage.gamePremise.description1', {}, { raw: true })"></p>
                                    <p v-html="$t('WikiPage.gamePremise.description2', {}, { raw: true })"></p>
                                    <p v-html="$t('WikiPage.gamePremise.description3', {}, { raw: true })"></p>
                                </div>
                            </section>

                            <section class="wiki-section">
                                <h2 class="section-title">{{ $t('WikiPage.currentFeatures.title') }}</h2>
                                <div class="content-card">
                                    <div class="features-list">
                                        <div class="feature-item">
                                            <h3>{{ $t('WikiPage.currentFeatures.originalArtwork.title') }}</h3>
                                            <p
                                                v-html="$t('WikiPage.currentFeatures.originalArtwork.description', {}, { raw: true })">
                                            </p>
                                        </div>
                                        <div class="feature-item">
                                            <h3>{{ $t('WikiPage.currentFeatures.multipleEndings.title') }}</h3>
                                            <p
                                                v-html="$t('WikiPage.currentFeatures.multipleEndings.description', {}, { raw: true })">
                                            </p>
                                        </div>
                                        <div class="feature-item">
                                            <h3>{{ $t('WikiPage.currentFeatures.matureThemes.title') }}</h3>
                                            <p
                                                v-html="$t('WikiPage.currentFeatures.matureThemes.description', {}, { raw: true })">
                                            </p>
                                        </div>
                                        <div class="feature-item">
                                            <h3>{{ $t('WikiPage.currentFeatures.interactiveStorytelling.title') }}</h3>
                                            <p
                                                v-html="$t('WikiPage.currentFeatures.interactiveStorytelling.description', {}, { raw: true })">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="wiki-section">
                                <h2 class="section-title">{{ $t('WikiPage.contentWarnings.title') }}</h2>
                                <div class="content-card warning-card">
                                    <div class="warning-header">
                                        <h3>{{ $t('WikiPage.contentWarnings.header.title') }}</h3>
                                        <p
                                            v-html="$t('WikiPage.contentWarnings.header.description', {}, { raw: true })">
                                        </p>
                                    </div>
                                    <div class="warning-list">
                                        <div class="warning-item">
                                            <h4>{{ $t('WikiPage.contentWarnings.psychologicalElements.title') }}</h4>
                                            <p
                                                v-html="$t('WikiPage.contentWarnings.psychologicalElements.description', {}, { raw: true })">
                                            </p>
                                        </div>
                                        <div class="warning-item">
                                            <h4>{{ $t('WikiPage.contentWarnings.darkThemes.title') }}</h4>
                                            <p
                                                v-html="$t('WikiPage.contentWarnings.darkThemes.description', {}, { raw: true })">
                                            </p>
                                        </div>
                                        <div class="warning-item">
                                            <h4>{{ $t('WikiPage.contentWarnings.characterDynamics.title') }}</h4>
                                            <p
                                                v-html="$t('WikiPage.contentWarnings.characterDynamics.description', {}, { raw: true })">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="wiki-section">
                                <h2 class="section-title">{{ $t('WikiPage.developmentStatus.title') }}</h2>
                                <div class="content-card">
                                    <p v-html="$t('WikiPage.developmentStatus.description1', {}, { raw: true })"></p>
                                    <p v-html="$t('WikiPage.developmentStatus.description2', {}, { raw: true })"></p>
                                    <ul class="development-list">
                                        <li v-html="$t('WikiPage.developmentStatus.extendedRoutes', {}, { raw: true })">
                                        </li>
                                        <li
                                            v-html="$t('WikiPage.developmentStatus.additionalEndings', {}, { raw: true })">
                                        </li>
                                        <li
                                            v-html="$t('WikiPage.developmentStatus.enhancedArtwork', {}, { raw: true })">
                                        </li>
                                        <li
                                            v-html="$t('WikiPage.developmentStatus.newLanguageSupport', {}, { raw: true })">
                                        </li>
                                        <li
                                            v-html="$t('WikiPage.developmentStatus.improvedMechanics', {}, { raw: true })">
                                        </li>
                                    </ul>
                                    <p v-html="$t('WikiPage.developmentStatus.description3', {}, { raw: true })"></p>
                                </div>
                            </section>

                            <section class="wiki-section">
                                <h2 class="section-title">{{ $t('WikiPage.howToPlay.title') }}</h2>
                                <div class="content-card">
                                    <p v-html="$t('WikiPage.howToPlay.description1', {}, { raw: true })"></p>
                                    <p v-html="$t('WikiPage.howToPlay.description2', {}, { raw: true })"></p>
                                    <ol class="play-instructions">
                                        <li v-html="$t('WikiPage.howToPlay.step1', {}, { raw: true })"></li>
                                        <li v-html="$t('WikiPage.howToPlay.step2', {}, { raw: true })"></li>
                                        <li v-html="$t('WikiPage.howToPlay.step3', {}, { raw: true })"></li>
                                        <li v-html="$t('WikiPage.howToPlay.step4', {}, { raw: true })"></li>
                                    </ol>
                                    <p v-html="$t('WikiPage.howToPlay.description3', {}, { raw: true })"></p>
                                    <p v-html="$t('WikiPage.howToPlay.description4', {}, { raw: true })"></p>
                                </div>
                            </section>
                        </article>

                        <!-- Sidebar -->
                        <aside class="wiki-sidebar">
                            <div class="sidebar-section">
                                <h3 class="sidebar-title">{{ $t('WikiPage.sidebar.quickNavigation.title') }}</h3>
                                <nav class="sidebar-nav">
                                    <a href="/" class="sidebar-link">{{ $t('WikiPage.sidebar.quickNavigation.home')
                                    }}</a>
                                    <a href="/pierrot" class="sidebar-link">{{
                                        $t('WikiPage.sidebar.quickNavigation.pierrot') }}</a>
                                    <a href="/harlequin" class="sidebar-link">{{
                                        $t('WikiPage.sidebar.quickNavigation.harlequin') }}</a>
                                </nav>
                            </div>

                            <div class="sidebar-section">
                                <h3 class="sidebar-title">{{ $t('WikiPage.sidebar.gameInformation.title') }}</h3>
                                <div class="info-box">
                                    <div class="info-item">
                                        <strong>{{ $t('WikiPage.sidebar.gameInformation.genre') }}:</strong> {{
                                            $t('WikiPage.sidebar.gameInformation.genreValue') }}
                                    </div>
                                    <div class="info-item">
                                        <strong>{{ $t('WikiPage.sidebar.gameInformation.rating') }}:</strong> {{
                                            $t('WikiPage.sidebar.gameInformation.ratingValue') }}
                                    </div>
                                    <div class="info-item">
                                        <strong>{{ $t('WikiPage.sidebar.gameInformation.platform') }}:</strong> {{
                                            $t('WikiPage.sidebar.gameInformation.platformValue') }}
                                    </div>
                                    <div class="info-item">
                                        <strong>{{ $t('WikiPage.sidebar.gameInformation.languages') }}:</strong> {{
                                            $t('WikiPage.sidebar.gameInformation.languagesValue') }}
                                    </div>
                                </div>
                            </div>

                            <div class="sidebar-section">
                                <h3 class="sidebar-title">{{ $t('WikiPage.sidebar.mainCharacters.title') }}</h3>
                                <div class="character-preview">
                                    <div class="character-item">
                                        <a href="/pierrot" class="character-preview-link">
                                            <h4>{{ $t('WikiPage.sidebar.mainCharacters.pierrot.name') }}</h4>
                                            <p
                                                v-html="$t('WikiPage.sidebar.mainCharacters.pierrot.description', {}, { raw: true })">
                                            </p>
                                        </a>
                                    </div>
                                    <div class="character-item">
                                        <a href="/harlequin" class="character-preview-link">
                                            <h4>{{ $t('WikiPage.sidebar.mainCharacters.harlequin.name') }}</h4>
                                            <p
                                                v-html="$t('WikiPage.sidebar.mainCharacters.harlequin.description', {}, { raw: true })">
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </aside>
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
.wiki-page {
    min-height: 100vh;
    background: #000;
    color: #fff;
}

.main-content {
    padding-top: 80px;
}

/* Wiki Header */
.wiki-header {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
    padding: 60px 0;
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.header-content {
    text-align: center;
}

.wiki-title {
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #c084fc 50%, #e879f9 75%, #f0abfc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
    letter-spacing: -0.02em;
}

.wiki-subtitle {
    font-size: 20px;
    color: #c084fc;
    margin-bottom: 32px;
    font-weight: 600;
}

.wiki-navigation {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    padding: 12px 24px;
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.nav-link:hover {
    background: rgba(139, 92, 246, 0.2);
    border-color: #8b5cf6;
    color: #c084fc;
}

/* Wiki Content */
.wiki-content {
    padding: 80px 0;
    background: #000;
}

.content-grid {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 60px;
}

/* Main Article */
.main-article {
    background: rgba(139, 92, 246, 0.05);
    border-radius: 20px;
    padding: 40px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    backdrop-filter: blur(10px);
}

.wiki-section {
    margin-bottom: 48px;
}

.wiki-section:last-child {
    margin-bottom: 0;
}

.wiki-section:deep(a) {
    color: #c084fc;
}


.section-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 24px;
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #c084fc 50%, #e879f9 75%, #f0abfc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
}

.content-card {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    padding: 30px;
    border: 1px solid rgba(139, 92, 246, 0.1);
}

.content-card p {
    font-size: 18px;
    line-height: 1.8;
    color: #ccc;
    margin-bottom: 20px;
}

.content-card p:last-child {
    margin-bottom: 0;
}

.character-link {
    color: #c084fc;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.character-link:hover {
    color: #8b5cf6;
}

.play-link {
    color: #c084fc;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.play-link:hover {
    color: #8b5cf6;
}

/* Features List */
.features-list {
    display: grid;
    gap: 24px;
}

.feature-item {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 15px;
    padding: 24px;
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.feature-item h3 {
    color: #c084fc;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
}

.feature-item p {
    color: #ccc;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

/* Warning Card */
.warning-card {
    border: 2px solid rgba(255, 107, 107, 0.3);
    background: rgba(255, 107, 107, 0.05);
}

.warning-header h3 {
    color: #ff6b6b;
    font-size: 24px;
    margin-bottom: 16px;
}

.warning-list {
    display: grid;
    gap: 16px;
    margin-top: 20px;
}

.warning-item {
    background: rgba(255, 107, 107, 0.1);
    border-radius: 10px;
    padding: 16px;
    border: 1px solid rgba(255, 107, 107, 0.2);
}

.warning-item h4 {
    color: #ff6b6b;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
}

.warning-item p {
    color: #ccc;
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
}

/* Development List */
.development-list {
    list-style: none;
    padding: 0;
    margin: 20px 0;
}

.development-list li {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 8px;
    border-left: 4px solid #8b5cf6;
    color: #ccc;
}

/* Play Instructions */
.play-instructions {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    counter-reset: step-counter;
}

.play-instructions li {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 8px;
    padding: 16px 20px;
    margin-bottom: 12px;
    border-left: 4px solid #8b5cf6;
    color: #ccc;
    counter-increment: step-counter;
    position: relative;
    padding-left: 50px;
}

.play-instructions li::before {
    content: counter(step-counter);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: #8b5cf6;
    color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
}

/* Sidebar */
.wiki-sidebar {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.sidebar-section {
    background: rgba(139, 92, 246, 0.05);
    border-radius: 15px;
    padding: 24px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    backdrop-filter: blur(10px);
}

.sidebar-title {
    color: #c084fc;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    text-transform: uppercase;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.sidebar-link {
    color: #ccc;
    text-decoration: none;
    padding: 12px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    border: 1px solid rgba(139, 92, 246, 0.1);
}

.sidebar-link:hover {
    background: rgba(139, 92, 246, 0.2);
    color: #c084fc;
    border-color: #8b5cf6;
}

/* Info Box */
.info-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.info-item {
    color: #ccc;
    font-size: 14px;
    line-height: 1.6;
}

.info-item strong {
    color: #c084fc;
}

/* Character Preview */
.character-preview {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.character-item {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 10px;
    padding: 16px;
    border: 1px solid rgba(139, 92, 246, 0.2);
    transition: transform 0.3s ease;
}

.character-item:hover {
    transform: translateY(-2px);
}

.character-preview-link {
    text-decoration: none;
    color: inherit;
}

.character-preview-link h4 {
    color: #c084fc;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
}

.character-preview-link p {
    color: #ccc;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {

    .wiki-header {
        padding: 40px 0;
    }

    .wiki-title {
        font-size: 36px;
    }

    .wiki-subtitle {
        font-size: 18px;
    }

    .wiki-navigation {
        flex-direction: column;
        gap: 12px;
    }

    .wiki-content {
        padding: 60px 0;
    }

    .content-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .main-article {
        order: 1;
    }

    .sidebar {
        order: 2;
        width: 100%;
    }

    .wiki-section {
        margin-bottom: 40px;
    }

    .section-title {
        font-size: 28px;
        margin-bottom: 24px;
    }

    .content-card {
        padding: 20px;
    }

    .content-card p {
        font-size: 16px;
        margin-bottom: 16px;
    }

    .sidebar-section {
        margin-bottom: 30px;
    }

    .sidebar-title {
        font-size: 20px;
        margin-bottom: 16px;
    }

    .info-box {
        padding: 16px;
    }

    .info-item {
        font-size: 14px;
        margin-bottom: 8px;
    }

    .character-preview {
        gap: 16px;
    }

    .character-item {
        padding: 16px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .main-content {
        padding-top: 70px;
    }

    .wiki-header {
        padding: 20px 0;
    }

    .wiki-title {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .wiki-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .wiki-navigation {
        gap: 10px;
    }

    .nav-link {
        font-size: 12px;
        padding: 5px 10px;
    }

    .wiki-content {
        padding: 20px 0;
    }

    .content-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .wiki-section {
        margin-bottom: 10px;
    }

    .section-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .content-card {
        padding: 10px;
    }

    .content-card p {
        font-size: 12px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .feature-item {
        padding: 10px;
    }

    .feature-item h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .feature-item p {
        font-size: 12px;
    }

    .warning-card {
        padding: 10px;
    }

    .warning-header h3 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .warning-list {
        gap: 10px;
        margin-top: 10px;
    }

    .warning-item {
        padding: 10px;
    }

    .warning-item h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .warning-item p {
        font-size: 12px;
    }

    .development-list {
        margin: 10px 0;
    }

    .development-list li {
        padding: 10px;
        margin-bottom: 10px;
        font-size: 12px;
    }

    .play-instructions {
        margin: 10px 0;
    }

    .play-instructions li {
        padding: 10px;
        margin-bottom: 10px;
        font-size: 12px;
    }

    .sidebar-section {
        margin-bottom: 10px;
    }

    .sidebar-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .info-box {
        padding: 10px;
    }

    .info-item {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .character-preview {
        gap: 10px;
    }

    .character-item {
        padding: 10px;
    }

    .character-preview-link h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .character-preview-link p {
        font-size: 12px;
    }
}
</style>
