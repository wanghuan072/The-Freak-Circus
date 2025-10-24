<template>
    <div class="home-page">
        <AppHeader />

        <!-- Hero Section -->
        <section class="section hero">
            <div class="container">
                <h1 class="hero-title">{{ $t('HomePage.hero.title') }}</h1>
                <div class="hero-content">
                    <p class="hero-subtitle">{{ $t('HomePage.hero.subtitle') }}</p>
                    <div class="hero-description">
                        <p>{{ $t('HomePage.hero.description') }}</p>
                        <!-- Platform Support -->
                        <div class="hero-platforms">
                            <p><strong>{{ $t('HomePage.hero.platforms') }}</strong></p>
                        </div>
                    </div>
                    <div class="hero-buttons">
                        <button class="btn btn-primary" @click="scrollToGame">{{ $t('HomePage.hero.playButton')
                        }}</button>
                        <a href="/wiki" class="btn btn-secondary">{{ $t('HomePage.hero.learnButton') }}</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 移动端横幅广告1 -->
        <aside class="ad-section" v-if="isMobile">
            <ins class="eas6a97888e10" data-zoneid="5746162"></ins>
        </aside>

        <!-- Play Game Section -->
        <section class="section play-game">
            <div class="container">
                <h2 class="section-title">Play The Freak Circus Online</h2>
                <div class="play-game-content">
                    <div class="game-container">
                        <!-- 背景毛玻璃效果 -->
                        <div class="game-background">
                            <div class="background-blur"></div>
                        </div>

                        <!-- 蒙版层 -->
                        <div class="game-mask" v-if="!gameLoaded" @click="loadGame">
                            <div class="game-icon">
                                <img src="/images/game-play.webp" alt="The Freak Circus Icon">
                            </div>
                            <div class="play-button" @click.stop="loadGame">
                                <div class="play-icon">▶</div>
                                <span>PLAY</span>
                            </div>
                        </div>

                        <!-- 游戏iframe -->
                        <iframe v-if="gameLoaded" src="https://html-classic.itch.zone/html/14081436/index.html"
                            width="100%" height="600" frameborder="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- PC端底部粘性横幅广告 -->
        <ins class="eas6a97888e17" data-zoneid="5746154" v-if="!isMobile"></ins>

        <!-- PC粘性左侧横幅广告1 -->
        <aside class="ad-section" v-if="!isMobile">
            <ins class="eas6a97888e17" data-zoneid="5746158"></ins>
        </aside>

        <!-- PC端粘性右侧横幅广告2 -->
        <aside class="ad-section" v-if="!isMobile">
            <ins class="eas6a97888e17" data-zoneid="5746160"></ins>
        </aside>

        <!-- 原生广告1 -->
        <div class="container">
            <ins class="eas6a97888e20" data-zoneid="5746168"></ins>
        </div>

        <!-- About Section -->
        <section class="section about">
            <div class="container">
                <h2 class="section-title">{{ $t('HomePage.about.title') }}</h2>
                <div class="about-content">
                    <div class="about-wrapper">
                        <div class="about-text">
                            <p>{{ $t('HomePage.about.description') }}</p>
                        </div>
                        <div class="about-image">
                            <img src="/images/about-img.webp" alt="The Freak Circus Game Screenshot">
                        </div>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card">
                            <h3>{{ $t('HomePage.about.feature1') }}</h3>
                            <p>{{ $t('HomePage.about.feature1Desc') }}</p>
                        </div>
                        <div class="feature-card">
                            <h3>{{ $t('HomePage.about.feature2') }}</h3>
                            <p>{{ $t('HomePage.about.feature2Desc') }}</p>
                        </div>
                        <div class="feature-card">
                            <h3>{{ $t('HomePage.about.feature3') }}</h3>
                            <p>{{ $t('HomePage.about.feature3Desc') }}</p>
                        </div>
                        <div class="feature-card">
                            <h3>{{ $t('HomePage.about.feature4') }}</h3>
                            <p>{{ $t('HomePage.about.feature4Desc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Characters Section -->
        <section class="section characters">
            <div class="container">
                <h2 class="section-title">{{ $t('HomePage.characters.title') }}</h2>
                <div class="characters-content">
                    <div class="characters-intro">
                        <p>{{ $t('HomePage.characters.subtitle') }}</p>
                    </div>
                    <div class="characters-grid">
                        <div class="character-card">
                            <div class="character-image">
                                <img src="/images/characters_01.webp" alt="Pierrot Character">
                            </div>
                            <div class="character-info">
                                <h3>{{ $t('HomePage.characters.pierrotName') }}</h3>
                                <p>{{ $t('HomePage.characters.pierrotDesc') }}</p>
                                <a href="/pierrot" class="character-link">{{ $t('HomePage.characters.pierrotLearnMore')
                                    }}
                                    →</a>
                            </div>
                        </div>
                        <div class="character-card">
                            <div class="character-image">
                                <img src="/images/characters_02.webp" alt="Harlequin Character">
                            </div>
                            <div class="character-info">
                                <h3>{{ $t('HomePage.characters.harlequinName') }}</h3>
                                <p>{{ $t('HomePage.characters.harlequinDesc') }}</p>
                                <a href="/harlequin" class="character-link">{{
                                    $t('HomePage.characters.harlequinLearnMore')
                                    }} →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 移动端横幅广告2 -->
        <aside class="ad-section" v-if="isMobile">
            <ins class="eas6a97888e10" data-zoneid="5746164"></ins>
        </aside>

        <!-- FAQ Section -->
        <section class="section faq">
            <div class="container">
                <h2 class='section-title'>{{ $t('HomePage.faq.title') }}</h2>
                <div class="faq-content">
                    <div class="faq-list">
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question1') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer1') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question2') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer2') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question3') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer3') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question4') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer4') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question5') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer5') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question6') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer6') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question7') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer7') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question8') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer8') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question9') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer9') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question10') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer10') }}</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">{{ $t('HomePage.faq.question11') }}</h3>
                            <p class="faq-answer">{{ $t('HomePage.faq.answer11') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- CTA Section -->
        <section class="section cta">
            <div class="container">
                <h2 class="section-title">{{ $t('HomePage.cta.title') }}</h2>
                <div class="cta-content">
                    <p class="cta-text">{{ $t('HomePage.cta.subtitle') }}</p>

                    <div class="cta-buttons">
                        <a href="https://garula.itch.io/the-freak-circus/download/eyJpZCI6MzYzMTY4NSwiZXhwaXJlcyI6MTc1ODc5NDEwMX0%3d.UCS9ynX2%2fBoZ7LMylvRkrpUsjAQ%3d"
                            target="_blank" class="btn btn-primary btn-large">{{ $t('HomePage.cta.downloadButton')
                            }}</a>
                        <a href="/wiki" class="btn btn-secondary btn-large">{{ $t('HomePage.cta.learnButton') }}</a>
                    </div>

                    <!-- Reviews Section -->
                    <div class="reviews-section">
                        <h3 class="reviews-title">What Players Say</h3>
                        <div class="reviews-grid">
                            <div v-for="review in reviews" :key="review.id" class="review-card">
                                <div class="review-header">
                                    <img :src="review.avatar" :alt="review.name" class="review-avatar">
                                    <div class="review-info">
                                        <h4 class="review-name">{{ review.name }}</h4>
                                        <span class="review-date">{{ formatDate(review.date) }}</span>
                                    </div>
                                </div>
                                <p class="review-comment">{{ review.comment }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <AppFooter />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { reviews } from '@/data/reviews.js'
import '@/assets/css/public.css'

import { useDeviceDetection } from '@/utils/useDeviceDetection.js'
const { isMobile } = useDeviceDetection()

// 加载广告脚本
onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://a.magsrv.com/ad-provider.js'
    script.async = true
    script.type = 'application/javascript'
    document.head.appendChild(script)

    script.onload = () => {
        if (window.AdProvider) {
            window.AdProvider.push({ "serve": {} })
        }
    }
})

// 游戏加载状态
const gameLoaded = ref(false)

// 格式化日期
const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

// 获取评论头像
const getReviewAvatar = (index) => {
    const avatars = [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=3'
    ]
    return avatars[index] || avatars[0]
}

// 滑动到游戏板块
const scrollToGame = () => {
    const playGameSection = document.querySelector('.play-game')
    if (playGameSection) {
        playGameSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

// 加载游戏
const loadGame = () => {
    gameLoaded.value = true
    // 滑动到游戏板块
    setTimeout(() => {
        const playGameSection = document.querySelector('.play-game')
        if (playGameSection) {
            playGameSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }, 100)
}
</script>

<style scoped>
.home-page {
    min-height: 100vh;
}

.section {
    position: relative;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
}


.section.hero {
    height: 100vh;
    padding: 70px 0 0 0;
}

/* Hero Section */
.hero-title {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 25%, #ff6b9d 50%, #c44569 75%, #f8b500 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: -0.02em;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    z-index: 3;
}

.hero-subtitle {
    font-size: 24px;
    margin-bottom: 24px;
    opacity: 0.9;
    text-align: center;
    position: relative;
    z-index: 3;
}

.hero-description {
    margin-bottom: 32px;
    text-align: center;
    position: relative;
    z-index: 3;
}

.hero-description p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 16px;
    opacity: 0.9;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.hero-link {
    color: #8b5cf6;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.hero-link:hover {
    color: #c084fc;
    text-decoration: underline;
}



.hero-platforms {
    margin-top: 24px;
    text-align: center;
}

.hero-platforms p {
    margin-bottom: 8px;
    font-size: 14px;
    color: #ccc;
    opacity: 0.9;
}

.hero-platforms strong {
    color: #8b5cf6;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 3;
}

/* Hero Section 内容样式 */
.section.hero .hero-content {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    position: relative;
    z-index: 2;
}

/* Play Game Section 内容样式 */
.section.play-game .play-game-content {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* About Section 内容样式 */
.section.about .about-content {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Features Section 内容样式 */
.section.features .features-content {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Characters Section 内容样式 */
.section.characters .characters-content {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* FAQ Section 内容样式 */
.section.faq .faq-content {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* FAQ Section 样式 */
.faq-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 24px;
}

.faq-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.faq-question {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.4;
}

.faq-answer {
    color: #ccc;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

/* CTA Section 内容样式 */
.section.cta .cta-content {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Play Game Section */
.game-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

/* 背景毛玻璃效果 */
.game-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/home_img_02.webp') center/cover no-repeat;
    z-index: 1;
}

.background-blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

/* 蒙版层 */
.game-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    gap: 30px;
}

.game-mask:hover {
    background: rgba(0, 0, 0, 0.3);
}

/* 游戏图标 */
.game-icon {
    width: 120px;
    height: 120px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border: 3px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.game-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.game-mask:hover .game-icon {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
}

/* Play按钮 */
.play-button {
    display: flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(135deg, #ff6b6b, #ff8e53);
    padding: 16px 32px;
    border-radius: 50px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    transition: all 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.play-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6);
    background: linear-gradient(135deg, #ff7b7b, #ff9a63);
}

.play-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    font-size: 14px;
}

.play-button span {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
}

.game-container iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    position: relative;
    z-index: 1;
}

/* About Section */
.about-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
}

.about-text p {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 1.8;
}

.about-image img {
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Features Section */
.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.feature-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: #8b5cf6;
    margin-bottom: 16px;
    font-size: 24px;
}

.feature-card p {
    font-size: 14px;
    line-height: 1.5;
}

/* Characters Section */
.characters-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
}

.character-card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    background: rgba(255, 255, 255, 0.05);
    padding: 32px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
    text-align: center;
}

.character-card:hover {
    transform: translateY(-5px);
}

.character-image img {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
}

.character-info h3 {
    color: #8b5cf6;
    margin-bottom: 16px;
    font-size: 24px;
}

.characters-intro {
    text-align: center;
    margin-bottom: 32px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.characters-intro p {
    font-size: 18px;
    line-height: 1.6;
    opacity: 0.9;
}

.content-link {
    color: #8b5cf6;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.content-link:hover {
    color: #c084fc;
    text-decoration: underline;
}

.character-link {
    display: inline-block;
    color: #8b5cf6;
    text-decoration: none;
    font-weight: 600;
    margin-top: 16px;
    padding: 8px 16px;
    border: 1px solid #8b5cf6;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.character-link:hover {
    background: rgba(139, 92, 246, 0.1);
    color: #c084fc;
    border-color: #c084fc;
    transform: translateY(-1px);
}


/* CTA Section */

.cta-text {
    font-size: 19px;
    margin-bottom: 32px;
    opacity: 0.9;
    text-align: center;
}

.cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Common Styles */
.section-title {
    font-size: 48px;
    text-align: center;
    margin-bottom: 32px;
    background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 25%, #ff6b9d 50%, #c44569 75%, #f8b500 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    z-index: 3;
}

.btn {
    padding: 16px 32px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: #8b5cf6;
    color: #fff;
}

.btn-primary:hover {
    background: #7c3aed;
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
}

.btn-secondary:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
}

.btn-large {
    padding: 24px 48px;
    font-size: 19px;
}

.section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(10, 0, 20, 0.7) 100%);
    z-index: 0;
}

.section.hero {
    background-image: url('/images/home_img_01.webp');
    /* 保持视差效果，同时优化LCP */
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    /* LCP优化 - 不影响视差效果 */
    contain: paint;
}

.section.play-game {
    background-image: url('/images/home_img_03.webp');
}

.section.about {
    background-image: url('/images/home_img_04.webp');
}

.section.characters {
    background-image: url('/images/home_img_05.webp');
}

.section.faq {
    background-image: url('/images/home_img_02.webp');
}

/* Ad Section */
.ad-section {
    padding: 20px 0;
    text-align: center;
}

.ad-section ins {
    display: block;
    margin: 0 auto;
}

.section.cta {
    background-image: url('/images/home_img_06.webp');
}

/* Reviews Section */
.reviews-section {
    margin: 48px 0;
    padding: 32px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.reviews-title {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 32px;
    background: linear-gradient(135deg, #8b5cf6, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}


.reviews-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.review-card {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.review-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(139, 92, 246, 0.2);
}

.review-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
}

.review-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(139, 92, 246, 0.3);
}

.review-info {
    flex: 1;
}

.review-name {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin: 0 0 4px 0;
}


.review-date {
    font-size: 12px;
    color: #999;
}

.review-comment {
    font-size: 14px;
    line-height: 1.6;
    color: #e0e0e0;
    margin: 0;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
    .section.hero {
        height: auto;
        padding-top: 100px;
    }

    .hero-title {
        font-size: 40px;
    }

    .hero-subtitle {
        font-size: 20px;
    }

    .section-title {
        font-size: 36px;
    }

    .about-wrapper {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .characters-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .reviews-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .section.hero {
        padding-top: 90px;
    }

    .hero-title {
        font-size: 22px;
        margin-bottom: 20px;
    }

    .section-title {
        font-size: 20px;
        margin-bottom: 20px;
    }

    .reviews-title {
        font-size: 18px;
    }

    .review-name {
        font-size: 16px;
    }

    .hero-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .hero-description p {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .game-container {
        aspect-ratio: 2/3;
    }

    .section.play-game .play-game-content {
        padding: 10px;
    }

    .play-button {
        padding: 5px 20px;
        font-size: 14px;
    }

    .play-icon {
        width: 15px;
        height: 15px;
    }

    .play-button span {
        font-size: 14px;
    }


    .game-mask {
        gap: 10px;
    }

    .about-wrapper {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .about-text p {
        font-size: 12px;
        margin-bottom: 10px;
    }


    .character-info p {
        font-size: 12px;
    }

    .review-comment {
        font-size: 12px;
    }

    .character-info h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .character-link {
        margin-top: 10px;
        font-size: 12px;
        padding: 5px 10px;
    }

    .section.faq .faq-content {
        padding: 10px;
    }

    .faq-question {
        font-size: 16px;
    }

    .faq-answer {
        font-size: 12px;
    }

    /* Spacing - Mobile */
    .section {
        padding: 20px 0;

    }

    .hero {
        padding: 80px 0 20px 0;
    }

    .section.hero .hero-content {
        padding: 10px;
    }

    .about-content {
        padding: 10px;
    }

    .characters-content {
        padding: 10px;
    }

    .faq-content {
        padding: 10px;
    }

    .cta-content {
        padding: 10px;
    }

    .section.about .about-content {
        padding: 10px;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: 10px;
        margin-top: 10px;
    }

    .feature-card {
        padding: 10px;
    }

    .feature-card h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .feature-card p {
        font-size: 12px;
    }

    .section.characters .characters-content {
        padding: 10px;
    }

    .characters-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .character-card {
        padding: 10px;
        gap: 10px;
    }

    .characters-intro {
        margin-bottom: 10px;
    }

    .characters-intro p {
        font-size: 12px;
    }

    .reviews-section {
        padding: 10px;
        margin: 20px 0 0 0;
    }

    .reviews-grid {
        grid-template-columns: 1fr;
        gap: 10px;
        margin-top: 20px;
    }

    .review-card {
        padding: 10px;
    }

    .review-header {
        gap: 10px;
        margin-bottom: 10px;
    }

    .review-avatar {
        width: 32px;
        height: 32px;
    }

    .faq-item {
        padding-bottom: 10px;
    }

    .faq-list {
        gap: 10px;
    }

    /* Buttons - Mobile */
    .hero-buttons {
        gap: 10px;
        flex-direction: column;
    }

    .section.cta .cta-content {
        padding: 10px;
    }

    .cta-text {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .cta-buttons {
        gap: 10px;
        flex-direction: column;
    }

    .reviews-title {
        margin-bottom: 10px;
    }





    .btn {
        padding: 8px 16px;
        font-size: 12px;
    }

    .btn-large {
        padding: 10px 20px;
    }

    .game-icon {
        width: 80px;
        height: 80px;
    }

    /* Hero Section Mobile */
    .hero-description {
        margin-bottom: 10px;
    }


    .hero-platforms {
        margin-top: 20px;
    }

    .hero-platforms p {
        font-size: 12px;
    }
}
</style>