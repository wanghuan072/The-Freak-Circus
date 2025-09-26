<template>
    <div class="download-page">
        <AppHeader />

        <main class="main-content">
            <!-- Download Header -->
            <div class="download-header">
                <div class="container">
                    <div class="header-content">
                        <h1 class="download-title">{{ $t('DownloadPage.header.title') }}</h1>
                        <p class="download-subtitle">{{ $t('DownloadPage.header.subtitle') }}</p>
                        <div class="download-navigation">
                            <a href="/" class="nav-link">{{ $t('DownloadPage.header.backToHome') }}</a>
                            <a href="/wiki" class="nav-link">{{ $t('DownloadPage.header.wiki') }}</a>
                            <a href="/pierrot" class="nav-link">{{ $t('DownloadPage.header.pierrot') }}</a>
                            <a href="/harlequin" class="nav-link">{{ $t('DownloadPage.header.harlequin') }}</a>
                            <a href="/updates" class="nav-link">{{ $t('DownloadPage.header.updates') }}</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Download Content -->
            <div class="download-content">
                <div class="container">
                    <div class="download-grid">
                        <!-- Main Download Section -->
                        <div class="download-main">
                            <div class="download-card">
                                <h2 class="section-title">{{ $t('DownloadPage.main.title') }}</h2>
                                <p class="download-description"
                                    v-html="$t('DownloadPage.main.description', {}, { raw: true })"></p>

                                <div class="download-features">
                                    <h3 class="features-title">{{ $t('DownloadPage.main.featuresTitle') }}</h3>
                                    <ul class="features-list">
                                        <li v-html="$t('DownloadPage.main.feature1', {}, { raw: true })"></li>
                                        <li v-html="$t('DownloadPage.main.feature2', {}, { raw: true })"></li>
                                        <li v-html="$t('DownloadPage.main.feature3', {}, { raw: true })"></li>
                                        <li v-html="$t('DownloadPage.main.feature4', {}, { raw: true })"></li>
                                        <li v-html="$t('DownloadPage.main.feature5', {}, { raw: true })"></li>
                                    </ul>
                                </div>

                                <div class="download-cta">
                                    <a href="https://garula.itch.io/the-freak-circus/download/eyJpZCI6MzYzMTY4NSwiZXhwaXJlcyI6MTc1ODc2Mjc2OH0%3d.2edGDidshJQAvVyM7AlEIZKX6jo%3d"
                                        target="_blank" class="download-button">
                                        {{ $t('DownloadPage.main.downloadButton') }}
                                    </a>
                                    <p class="cta-description"
                                        v-html="$t('DownloadPage.main.downloadDescription', {}, { raw: true })"></p>
                                </div>
                            </div>

                            <!-- Platform Information -->
                            <div class="platform-info">
                                <h3 class="section-title">{{ $t('DownloadPage.platforms.title') }}</h3>
                                <div class="platforms-grid">
                                    <div class="platform-item">
                                        <h4>{{ $t('DownloadPage.platforms.windows.title') }}</h4>
                                        <p v-html="$t('DownloadPage.platforms.windows.description', {}, { raw: true })">
                                        </p>
                                    </div>
                                    <div class="platform-item">
                                        <h4>{{ $t('DownloadPage.platforms.macos.title') }}</h4>
                                        <p v-html="$t('DownloadPage.platforms.macos.description', {}, { raw: true })">
                                        </p>
                                    </div>
                                    <div class="platform-item">
                                        <h4>{{ $t('DownloadPage.platforms.linux.title') }}</h4>
                                        <p v-html="$t('DownloadPage.platforms.linux.description', {}, { raw: true })">
                                        </p>
                                    </div>
                                    <div class="platform-item">
                                        <h4>{{ $t('DownloadPage.platforms.web.title') }}</h4>
                                        <p v-html="$t('DownloadPage.platforms.web.description', {}, { raw: true })"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Sidebar -->
                        <aside class="download-sidebar">
                            <div class="sidebar-section">
                                <h3 class="sidebar-title">{{ $t('DownloadPage.sidebar.gameInfo.title') }}</h3>
                                <div class="info-box">
                                    <div class="info-item">
                                        <strong>{{ $t('DownloadPage.sidebar.gameInfo.genre') }}</strong> {{
                                            $t('DownloadPage.sidebar.gameInfo.genreValue') }}
                                    </div>
                                    <div class="info-item">
                                        <strong>{{ $t('DownloadPage.sidebar.gameInfo.rating') }}</strong> {{
                                            $t('DownloadPage.sidebar.gameInfo.ratingValue') }}
                                    </div>
                                    <div class="info-item">
                                        <strong>{{ $t('DownloadPage.sidebar.gameInfo.price') }}</strong> {{
                                            $t('DownloadPage.sidebar.gameInfo.priceValue') }}
                                    </div>
                                    <div class="info-item">
                                        <strong>{{ $t('DownloadPage.sidebar.gameInfo.platform') }}</strong> {{
                                            $t('DownloadPage.sidebar.gameInfo.platformValue') }}
                                    </div>
                                    <div class="info-item">
                                        <strong>{{ $t('DownloadPage.sidebar.gameInfo.languages') }}</strong> {{
                                            $t('DownloadPage.sidebar.gameInfo.languagesValue') }}
                                    </div>
                                </div>
                            </div>

                            <div class="sidebar-section">
                                <h3 class="sidebar-title">{{ $t('DownloadPage.sidebar.quickLinks.title') }}</h3>
                                <nav class="sidebar-nav">
                                    <a href="/" class="sidebar-link">{{ $t('DownloadPage.sidebar.quickLinks.home')
                                        }}</a>
                                    <a href="/wiki" class="sidebar-link">{{ $t('DownloadPage.sidebar.quickLinks.wiki')
                                        }}</a>
                                    <a href="/pierrot" class="sidebar-link">{{
                                        $t('DownloadPage.sidebar.quickLinks.pierrot')
                                        }}</a>
                                    <a href="/harlequin" class="sidebar-link">{{
                                        $t('DownloadPage.sidebar.quickLinks.harlequin')
                                        }}</a>
                                    <a href="/updates" class="sidebar-link">{{
                                        $t('DownloadPage.sidebar.quickLinks.updates')
                                        }}</a>
                                </nav>
                            </div>

                            <div class="sidebar-section">
                                <h3 class="sidebar-title">{{ $t('DownloadPage.sidebar.warnings.title') }}</h3>
                                <div class="warning-box">
                                    <p><strong
                                            v-html="$t('DownloadPage.sidebar.warnings.description', {}, { raw: true })"></strong>
                                    </p>
                                    <ul class="warning-list">
                                        <li>{{ $t('DownloadPage.sidebar.warnings.warning1') }}</li>
                                        <li>{{ $t('DownloadPage.sidebar.warnings.warning2') }}</li>
                                        <li>{{ $t('DownloadPage.sidebar.warnings.warning3') }}</li>
                                        <li>{{ $t('DownloadPage.sidebar.warnings.warning4') }}</li>
                                        <li>{{ $t('DownloadPage.sidebar.warnings.warning5') }}</li>
                                    </ul>
                                    <p>{{ $t('DownloadPage.sidebar.warnings.ageWarning') }}</p>
                                </div>
                            </div>

                            <div class="sidebar-section">
                                <h3 class="sidebar-title">{{ $t('DownloadPage.sidebar.official.title') }}</h3>
                                <div class="official-info">
                                    <p v-html="$t('DownloadPage.sidebar.official.description', {}, { raw: true })"></p>

                                    <div class="official-link">
                                        <a href="https://garula.itch.io/the-freak-circus" target="_blank"
                                            class="official-button">
                                            {{ $t('DownloadPage.sidebar.official.visitButton') }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <!-- Additional Information -->
                    <div class="additional-info">
                        <div class="info-section">
                            <h3 class="section-title">{{ $t('DownloadPage.additional.about.title') }}</h3>
                            <p v-html="$t('DownloadPage.additional.about.description1', {}, { raw: true })"></p>
                            <p v-html="$t('DownloadPage.additional.about.description2', {}, { raw: true })"></p>
                        </div>

                        <div class="info-section">
                            <h3 class="section-title">{{ $t('DownloadPage.additional.development.title') }}</h3>
                            <p v-html="$t('DownloadPage.additional.development.description', {}, { raw: true })"></p>
                        </div>

                        <div class="info-section">
                            <h3 class="section-title">{{ $t('DownloadPage.additional.community.title') }}</h3>
                            <p v-html="$t('DownloadPage.additional.community.description', {}, { raw: true })"></p>
                        </div>
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
.download-page {
    min-height: 100vh;
    background: #000;
    color: #fff;
}

.main-content {
    padding-top: 80px;
}

/* Download Header */
.download-header {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
    padding: 60px 0;
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.header-content {
    text-align: center;
}

.download-title {
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

.download-subtitle {
    font-size: 20px;
    color: #c084fc;
    margin-bottom: 32px;
    font-weight: 600;
}

.download-navigation {
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

/* Download Content */
.download-content {
    padding: 80px 0;
    background: #000;
}

.download-grid {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 60px;
    margin-bottom: 60px;
}

/* Main Download Section */
.download-main {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.download-main:deep(a) {
    color: #c084fc;
}

.download-card {
    background: rgba(139, 92, 246, 0.05);
    border-radius: 20px;
    padding: 40px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    backdrop-filter: blur(10px);
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

.download-description {
    font-size: 18px;
    line-height: 1.8;
    color: #ccc;
    margin-bottom: 32px;
}

.download-features {
    margin-bottom: 32px;
}

.features-title {
    color: #c084fc;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
}

.features-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.features-list li {
    color: #ccc;
    font-size: 16px;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
}

.features-list li::before {
    content: "•";
    color: #8b5cf6;
    font-size: 18px;
    position: absolute;
    left: 0;
    top: 0;
}

.content-link {
    color: #c084fc;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.content-link:hover {
    color: #8b5cf6;
    text-decoration: underline;
}

/* Download CTA */
.download-cta {
    text-align: center;
    padding: 32px;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 15px;
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.download-button {
    display: inline-block;
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #c084fc 50%, #e879f9 75%, #f0abfc 100%);
    color: #fff;
    text-decoration: none;
    padding: 20px 40px;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
    border: 2px solid transparent;
}

.download-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
    border-color: #c084fc;
}

.cta-description {
    color: #c084fc;
    font-size: 14px;
    margin-top: 16px;
    font-style: italic;
}

/* Platform Information */
.platform-info {
    background: rgba(139, 92, 246, 0.05);
    border-radius: 20px;
    padding: 40px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    backdrop-filter: blur(10px);
}

.platforms-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 24px;
}

.platform-item {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 12px;
    padding: 20px;
    border: 1px solid rgba(139, 92, 246, 0.2);
    text-align: center;
}

.platform-item h4 {
    color: #c084fc;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
}

.platform-item p {
    color: #ccc;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}

/* Sidebar */
.download-sidebar {
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

.warning-box {
    background: rgba(255, 107, 107, 0.1);
    border-radius: 10px;
    padding: 16px;
    border: 1px solid rgba(255, 107, 107, 0.2);
}

.warning-box p {
    color: #ccc;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 12px;
}

.warning-box strong {
    color: #ff6b6b;
}

.warning-list {
    list-style: none;
    padding: 0;
    margin: 12px 0;
}

.warning-list li {
    color: #ccc;
    font-size: 14px;
    margin-bottom: 4px;
    padding-left: 16px;
    position: relative;
}

.warning-list li::before {
    content: "⚠";
    color: #ff6b6b;
    position: absolute;
    left: 0;
    top: 0;
}

.official-info {
    color: #ccc;
    font-size: 14px;
    line-height: 1.6;
}

.official-info p {
    margin-bottom: 16px;
}

.official-button {
    display: inline-block;
    background: rgba(139, 92, 246, 0.2);
    color: #c084fc;
    text-decoration: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 1px solid rgba(139, 92, 246, 0.3);
}

.official-button:hover {
    background: rgba(139, 92, 246, 0.3);
    color: #8b5cf6;
    border-color: #8b5cf6;
}

/* Additional Information */
.additional-info {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.info-section {
    background: rgba(139, 92, 246, 0.05);
    border-radius: 20px;
    padding: 40px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    backdrop-filter: blur(10px);
}

.info-section p {
    color: #ccc;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 16px;
}

.info-section:deep(a) {
    color: #c084fc;
}

.info-section p:last-child {
    margin-bottom: 0;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {

    .download-header {
        padding: 40px 0;
    }

    .download-title {
        font-size: 36px;
    }

    .download-subtitle {
        font-size: 18px;
    }

    .download-navigation {
        flex-direction: column;
        gap: 12px;
    }

    .download-content {
        padding: 60px 0;
    }

    .download-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .download-section {
        padding: 30px;
    }

    .section-title {
        font-size: 28px;
        margin-bottom: 24px;
    }

    .download-button {
        padding: 16px 32px;
        font-size: 18px;
    }

    .info-section {
        padding: 20px;
    }

    .info-section p {
        font-size: 16px;
        margin-bottom: 16px;
    }

    .platforms-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .platform-item {
        padding: 20px;
    }

    .platform-icon {
        font-size: 32px;
        margin-bottom: 12px;
    }

    .platform-name {
        font-size: 16px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .main-content {
        padding-top: 70px;
    }

    .download-header {
        padding: 20px 0;
    }

    .download-title {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .download-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .download-navigation {
        gap: 10px;
    }

    .nav-link {
        font-size: 12px;
        padding: 5px 10px;
    }

    .download-content {
        padding: 20px 0;
    }

    .download-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .download-section {
        padding: 10px;
    }

    .section-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .download-button {
        padding: 10px 20px;
        font-size: 12px;
    }

    .info-section {
        padding: 10px;
    }

    .info-section p {
        font-size: 12px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .platforms-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .platform-item {
        padding: 10px;
    }

    .platform-icon {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .platform-name {
        font-size: 12px;
    }

    .warning-section {
        padding: 10px;
    }

    .warning-section h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .warning-section p {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .warning-list {
        gap: 10px;
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
}
</style>
