<template>
    <div class="game-detail-page">
        <AppHeader :class="{ 'hidden': webFullscreen }" />

        <main class="main-content">
            <!-- Game Not Found -->
            <div v-if="!game && !loading" class="game-not-found">
                <div class="container">
                    <h1>Game Not Found</h1>
                    <p>The game you're looking for doesn't exist or has been removed.</p>
                    <a href="/games" class="btn btn-primary">Back to Games</a>
                </div>
            </div>

            <!-- Game Detail Page -->
            <div class="game-detail" v-if="game">
                <div class="container">
                    <div class="game-wrapper">
                        <!-- Left Side -->
                        <div class="game-left" :class="{ 'web-fullscreen': webFullscreen }">
                            <!-- Game Player Box with Control Bar -->
                            <div class="player-wrapper">
                                <div class="player-box">
                                    <!-- Before Loading -->
                                    <div v-if="!gameLoaded" class="player-preview">
                                        <div class="game-icon-frame">
                                            <img :src="game.imageUrl" :alt="game.imageAlt" />
                                        </div>
                                        <button class="play-btn" @click="loadGame">
                                            PLAY
                                        </button>
                                    </div>

                                    <!-- After Loading -->
                                    <iframe v-else id="game-iframe" :src="game.iframeUrl" width="100%" height="100%"
                                        frameborder="0" allowfullscreen>
                                    </iframe>
                                </div>

                                <!-- Game Control Bar -->
                                <div class="game-control-bar">
                                    <h1 class="control-title">{{ game.title }}</h1>
                                    <div class="control-buttons">
                                        <button class="control-btn" @click="toggleWebFullscreen" title="Web Fullscreen">
                                            <svg t="1761533741648" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="2821" width="200" height="200">
                                                <path
                                                    d="M547.4 197.4v46l200.3 0.1L546.1 444l32.4 32.6 201.9-200.7v200.9h46V197.5zM471.4 584.4l-32.6-32.6L243.6 747V547.9h-46v278.7h279v-46H275z"
                                                    p-id="2822" fill="#ffffff"></path>
                                            </svg>
                                        </button>
                                        <button class="control-btn" @click="toggleFullscreen" title="Fullscreen">
                                            <svg t="1761533710420" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="2608" width="200" height="200">
                                                <path
                                                    d="M95.500388 368.593511c0 11.905658-9.637914 21.543572-21.543573 21.543572-11.877311 0-21.515225-9.637914-21.515225-21.543572V188.704684c0-37.502824 15.307275-71.575684 39.997343-96.265751s58.762928-39.997342 96.265751-39.997343h179.888827c11.905658 0 21.543572 9.637914 21.543572 21.515225 0 11.905658-9.637914 21.543572-21.543572 21.543573H188.704684c-25.625512 0-48.926586 10.488318-65.821282 27.383014s-27.383014 40.19577-27.383014 65.821282v179.888827z m559.906101-273.093123c-11.877311 0-21.515225-9.637914-21.515226-21.543573 0-11.877311 9.637914-21.515225 21.515226-21.515225h179.917174c37.502824 0 71.547337 15.307275 96.237404 39.997343s40.025689 58.762928 40.02569 96.265751v179.888827c0 11.905658-9.637914 21.543572-21.543572 21.543572-11.877311 0-21.515225-9.637914-21.515226-21.543572V188.704684c0-25.625512-10.488318-48.926586-27.411361-65.821282-16.894696-16.894696-40.19577-27.383014-65.792935-27.383014h-179.917174z m273.12147 559.906101c0-11.877311 9.637914-21.515225 21.515226-21.515226 11.905658 0 21.543572 9.637914 21.543572 21.515226v179.917174c0 37.474477-15.335622 71.547337-40.02569 96.237404s-58.734581 39.997342-96.237404 39.997343h-179.917174c-11.877311 0-21.515225-9.637914-21.515226-21.515225s9.637914-21.543572 21.515226-21.543573h179.917174c25.597165 0 48.898239-10.488318 65.792935-27.383014 16.923043-16.894696 27.411361-40.19577 27.411361-65.792935v-179.917174z m-559.934448 273.093123c11.905658 0 21.543572 9.666261 21.543572 21.543573s-9.637914 21.515225-21.543572 21.515225H188.704684c-37.502824 0-71.575684-15.307275-96.265751-39.997343s-39.997342-58.762928-39.997343-96.237404v-179.917174c0-11.877311 9.637914-21.515225 21.515225-21.515226 11.905658 0 21.543572 9.637914 21.543573 21.515226v179.917174c0 25.597165 10.488318 48.898239 27.383014 65.792935s40.19577 27.383014 65.821282 27.383014h179.888827z"
                                                    fill="#ffffff" p-id="2609"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Game Details HTML -->
                            <div class="game-html" v-html="game.detailsHtml"></div>
                        </div>

                        <!-- Right Side -->
                        <div class="game-right" :class="{ 'hidden': webFullscreen }">
                            <!-- Game Info -->
                            <div class="game-info">
                                <h1 class="game-title">{{ game.title }}</h1>
                                <span class="game-date">{{ formatDate(game.publishDate) }}</span>
                                <p class="game-desc">{{ game.description }}</p>
                            </div>

                            <!-- Comments -->
                            <div class="comments">
                                <h3 class="comments-heading">{{ $t('GameDetailPage.allReviews') }}</h3>
                                <div class="comment-list" v-if="game.comments && game.comments.length">
                                    <div v-for="comment in game.comments" :key="comment.id" class="comment">
                                        <div class="comment-avatar">{{ comment.author.charAt(0).toUpperCase() }}</div>
                                        <div class="comment-body">
                                            <div class="comment-top">
                                                <span class="comment-author">{{ comment.author }}</span>
                                                <span class="comment-stars">{{ '★'.repeat(comment.rating || 5) }}{{
                                                    comment.rating < 5 ? '☆'.repeat(5 - comment.rating) : '' }}</span>
                                            </div>
                                            <div class="comment-date">{{ comment.date }}</div>
                                            <div class="comment-text">{{ comment.text }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="no-comments" v-else>
                                    <p>{{ $t('GameDetailPage.noComments') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <AppFooter :class="{ 'hidden': webFullscreen }" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()
const { locale } = useI18n()
const game = ref(null)
const gameLoaded = ref(false)
const loading = ref(true)

const gameId = computed(() => route.params.id)

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const loadGame = () => {
    gameLoaded.value = true
}

const webFullscreen = ref(false)

const toggleWebFullscreen = () => {
    webFullscreen.value = !webFullscreen.value
    if (webFullscreen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe')
    if (!iframe) return

    if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`)
        })
    } else {
        document.exitFullscreen()
    }
}

const loadGameData = async () => {
    try {
        loading.value = true
        // 动态加载游戏数据
        const gamesData = await import(`@/data/${locale.value}/games.js`)
        const games = gamesData.default
        // 使用 addressBar 来查找游戏（路由参数实际上是 addressBar 的值）
        game.value = games.find(g => g.addressBar === gameId.value)

        // 如果没有找到，回退到英文
        if (!game.value && locale.value !== 'en') {
            const enGamesData = await import('@/data/en/games.js')
            const enGames = enGamesData.default
            game.value = enGames.find(g => g.addressBar === gameId.value)
        }
    } catch (error) {
        console.error('Failed to load game data:', error)
    } finally {
        loading.value = false
    }
}

// 监听语言变化，重新加载游戏数据
watch(locale, () => {
    loadGameData()
}, { immediate: false })

onMounted(() => {
    loadGameData()
})
</script>

<style scoped>
.game-detail-page {
    min-height: 100vh;
    background: #000;
}

.main-content {
    padding-top: 80px;
}

.game-detail {
    padding: 120px 0 60px;
}

.game-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
}

/* Left Side */
.game-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    transition: all 0.3s ease;
}

.game-left.web-fullscreen {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background: #000 !important;
    z-index: 9999 !important;
    gap: 0;
    padding: 20px;
    margin: 0 !important;
}

.game-left.web-fullscreen .player-wrapper {
    height: 100vh;
}

.game-left.web-fullscreen .player-box {
    height: calc(100vh - 60px);
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
}

.game-left.web-fullscreen .game-control-bar {
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: 2px solid #333;
}

.game-left.web-fullscreen .game-html {
    display: none;
}

.hidden {
    display: none !important;
}

.player-wrapper {
    display: flex;
    flex-direction: column;
}

.player-box {
    background: #1a1a1a;
    border: 2px solid #333;
    border-radius: 8px 8px 0 0;
    height: 600px;
    position: relative;
    overflow: hidden;
}

.player-preview {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 20px;
}

.game-icon-frame {
    width: 150px;
    height: 150px;
    border: 3px solid #4a90e2;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
}

.game-icon-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.play-btn {
    background: #ff6b9d;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 12px 50px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.play-btn:hover {
    background: #ff8e53;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 157, 0.5);
}

.player-box iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}

.game-control-bar {
    background: #1a1a1a;
    border: 2px solid #333;
    border-top: none;
    border-radius: 0 0 8px 8px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
}

.control-title {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin: 0;
}

.control-buttons {
    display: flex;
    gap: 8px;
}

.control-btn {
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #333;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #fff;
}

.control-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #555;
}

.control-btn svg {
    width: 16px;
    height: 16px;
}

.game-html {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 8px;
    color: #fff;
}

.game-html :deep(h2) {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #fff;
}

.game-html :deep(h3) {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
}

.game-html :deep(p) {
    margin-bottom: 1rem;
    color: #ccc;
}

.game-html :deep(ul) {
    list-style: none;
    padding: 0;
}

.game-html :deep(li) {
    padding: 0.5rem 0;
    color: #ccc;
}

.game-html :deep(li)::before {
    content: "• ";
    color: #8b5cf6;
    margin-right: 0.5rem;
}

/* Right Side */
.game-right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.game-info {
    padding: 20px;
}

.game-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
}

.game-date {
    display: block;
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.game-desc {
    color: #ccc;
    line-height: 1.6;
    font-size: 0.9rem;
    margin: 0;
}

/* Comments */
.comments {
    padding: 20px;
}

.comments-heading {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
}

.comment-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.comment {
    display: flex;
    gap: 12px;
    padding: 10px 0;
}

.comment-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
    flex-shrink: 0;
}

.comment-body {
    flex: 1;
}

.comment-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.3rem;
}

.comment-author {
    font-weight: 600;
    color: #fff;
    font-size: 0.9rem;
}

.comment-stars {
    color: #ffd700;
    font-size: 0.9rem;
}

.comment-date {
    color: #888;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
}

.comment-text {
    color: #ccc;
    line-height: 1.4;
    font-size: 0.85rem;
}

.no-comments {
    padding: 2rem 0;
    text-align: center;
}

.no-comments p {
    color: #888;
    font-size: 0.9rem;
    margin: 0;
}

.game-not-found {
    padding: 120px 0;
    text-align: center;
}

.game-not-found h1 {
    font-size: 2.5rem;
    font-weight: 900;
    color: #fff;
    margin-bottom: 1rem;
}

.game-not-found p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 2rem;
}

.btn-primary {
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #a855f7 0%, #c084fc 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
    .game-wrapper {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .game-right {
        order: 2;
    }

    .game-left {
        order: 1;
    }

    .player-box {
        height: 550px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .main-content {
        padding-top: 70px;
    }

    .game-detail {
        padding: 20px 0;
    }

    .game-wrapper {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .game-left {
        gap: 1.5rem;
    }

    .player-box {
        height: 400px;
    }

    .player-preview {
        padding: 30px 20px;
    }

    .game-icon-frame {
        width: 120px;
        height: 120px;
    }

    .play-btn {
        padding: 12px 40px;
        font-size: 14px;
    }

    .game-control-bar {
        padding: 10px 15px;
    }

    .control-title {
        font-size: 0.9rem;
    }

    .control-btn {
        width: 28px;
        height: 28px;
    }

    .control-btn svg {
        width: 14px;
        height: 14px;
    }

    .game-html {
        padding: 15px;
    }

    .game-html :deep(h2) {
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
    }

    .game-html :deep(h3) {
        font-size: 1rem;
    }

    .game-html :deep(p) {
        font-size: 0.9rem;
    }

    .game-info {
        padding: 15px;
    }

    .game-title {
        font-size: 1.3rem;
    }

    .game-date {
        font-size: 0.85rem;
    }

    .game-desc {
        font-size: 0.85rem;
    }

    .comments {
        padding: 15px;
    }

    .comments-heading {
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    .no-comments {
        padding: 1.5rem 0;
    }

    .no-comments p {
        font-size: 0.85rem;
    }

    .comment {
        padding: 8px 0;
    }

    .comment-avatar {
        width: 28px;
        height: 28px;
        font-size: 0.85rem;
    }

    .comment-author {
        font-size: 0.85rem;
    }

    .comment-date {
        font-size: 0.75rem;
        margin-bottom: 0.4rem;
    }

    .comment-text {
        font-size: 0.8rem;
    }

    .comment-stars {
        font-size: 0.85rem;
    }

    .game-not-found h1 {
        font-size: 1.5rem;
    }

    .game-not-found p {
        font-size: 1rem;
    }
}
</style>
