<template>
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <router-link :to="getLocalizedPath('/')" class="logo" @click="closeMenu">
          <img class="logo-image" src="/images/logo.webp" alt="VEIN Logo">
          <span class="logo-text">VEIN Game</span>
        </router-link>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
        </button>
        <div class="menu-overlay" :class="{ open: isMenuOpen }" @click="closeMenu"></div>
        <div class="search-container">
          <div class="search-box">
            <input
              type="text"
              v-model="searchInput"
              @keyup.enter="handleSearch"
              @input="handleSearchInput"
              :placeholder="$t('common.search.placeholder')"
              class="search-input"
              :aria-label="$t('common.search.ariaLabel')"
            />
            <button @click="handleSearch" class="search-button" :aria-label="$t('common.search.ariaLabel')">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <div v-if="showSuggestions && suggestions.length > 0" class="search-suggestions">
              <div
                v-for="suggestion in suggestions"
                :key="suggestion.id"
                class="suggestion-item"
                @click="selectSuggestion(suggestion)"
              >
                <span class="suggestion-type">{{ suggestion.type }}</span>
                <span class="suggestion-title">{{ suggestion.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <nav class="nav-links" :class="{ open: isMenuOpen }">
          <router-link :to="getLocalizedPath('/')" @click="closeMenu">{{ $t('common.nav.home') }}</router-link>
          <router-link :to="getLocalizedPath('/vein-guides')" @click="closeMenu">{{ $t('common.nav.guides') }}</router-link>
          <router-link :to="getLocalizedPath('/vein-wiki')" @click="closeMenu">{{ $t('common.nav.wiki') }}</router-link>
          <router-link :to="getLocalizedPath('/vein-items')" @click="closeMenu">{{ $t('common.nav.items') }}</router-link>
          <router-link :to="getLocalizedPath('/vein-map')" @click="closeMenu">{{ $t('common.nav.map') }}</router-link>
        </nav>
        <div class="language-switcher" ref="langSwitcherRef">
          <button 
            class="lang-button" 
            @click="toggleLangDropdown"
            :aria-label="$t('common.languageSwitcher.label')"
            :aria-expanded="isLangDropdownOpen"
          >
            <span class="lang-current">{{ currentLocale.toUpperCase() }}</span>
            <svg 
              class="lang-arrow" 
              :class="{ open: isLangDropdownOpen }"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
            >
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </button>
          <div 
            v-if="isLangDropdownOpen" 
            class="lang-dropdown"
          >
            <button
              class="lang-option"
              :class="{ active: currentLocale === 'en' }"
              @click="selectLanguage('en')"
            >
              <span class="lang-code">EN</span>
            </button>
            <button
              class="lang-option"
              :class="{ active: currentLocale === 'de' }"
              @click="selectLanguage('de')"
            >
              <span class="lang-code">DE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSearch } from '../composables/useSearch'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const isMenuOpen = ref(false)
const searchInput = ref('')
const showSuggestions = ref(false)
const isLangDropdownOpen = ref(false)
const langSwitcherRef = ref(null)
const { search, searchResults } = useSearch()

// 当前语言
const currentLocale = computed(() => locale.value || 'en')

// 切换语言下拉菜单
const toggleLangDropdown = () => {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
  if (isLangDropdownOpen.value) {
    showSuggestions.value = false
  }
}

// 选择语言
const selectLanguage = (newLocale) => {
  if (newLocale === currentLocale.value) {
    isLangDropdownOpen.value = false
    return
  }
  
  // 获取当前路径（去除语言前缀）
  let currentPath = route.path
  const pathSegments = currentPath.split('/').filter(Boolean)
  
  // 如果当前路径有语言前缀，移除它
  if (pathSegments.length > 0 && ['en', 'de'].includes(pathSegments[0])) {
    pathSegments.shift()
    currentPath = '/' + pathSegments.join('/')
  }
  
  // 如果新语言是英文，直接跳转（无前缀）
  if (newLocale === 'en') {
    router.push(currentPath || '/')
  } else {
    // 其他语言添加前缀
    router.push(`/${newLocale}${currentPath || '/'}`)
  }
  
  isLangDropdownOpen.value = false
  closeMenu()
}

// 搜索建议
const suggestions = ref([])

// 处理搜索输入（防抖）
let searchTimeout = null
const handleSearchInput = async () => {
  clearTimeout(searchTimeout)
  const query = searchInput.value.trim()
  
  if (query.length > 0) {
    searchTimeout = setTimeout(async () => {
      await search(query)
      // 获取前5个建议
      const allResults = [
        ...searchResults.value.guides.slice(0, 2).map(g => ({ ...g, type: 'Guide' })),
        ...searchResults.value.wiki.slice(0, 2).map(w => ({ ...w, type: 'Wiki' })),
        ...searchResults.value.items.slice(0, 1).map(i => ({ ...i, type: 'Item' }))
      ]
      suggestions.value = allResults
      showSuggestions.value = true
    }, 300)
  } else {
    suggestions.value = []
    showSuggestions.value = false
  }
}

// 执行搜索
const handleSearch = () => {
  const query = searchInput.value.trim()
  if (query) {
    router.push({ path: getLocalizedPath('/search'), query: { q: query } })
    showSuggestions.value = false
    closeMenu()
  }
}

// 选择建议
const selectSuggestion = (suggestion) => {
  if (suggestion.type === 'Guide') {
    const path = suggestion.addressBar.startsWith('/') ? suggestion.addressBar : `/${suggestion.addressBar}`
    router.push(getLocalizedPath(`/vein-guides${path}`))
  } else if (suggestion.type === 'Wiki') {
    const path = suggestion.addressBar.startsWith('/') ? suggestion.addressBar : `/${suggestion.addressBar}`
    router.push(getLocalizedPath(`/vein-wiki${path}`))
  } else if (suggestion.type === 'Item') {
    const path = suggestion.addressBar.startsWith('/') ? suggestion.addressBar.slice(1) : suggestion.addressBar
    if (path && path !== '/') {
      router.push(getLocalizedPath(`/vein-items/${suggestion.category}/${path}`))
    } else {
      router.push(getLocalizedPath(`/vein-items/${suggestion.category}`))
    }
  }
  showSuggestions.value = false
  searchInput.value = ''
  closeMenu()
}

// 点击外部关闭建议和语言下拉
const handleClickOutside = (event) => {
  if (!event.target.closest('.search-container')) {
    showSuggestions.value = false
  }
  if (!event.target.closest('.language-switcher')) {
    isLangDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    showSuggestions.value = false
    isLangDropdownOpen.value = false
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  isLangDropdownOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: linear-gradient(90deg, rgba(18, 0, 0, 0.95), rgba(45, 0, 0, 0.75));
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
  position: relative;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  text-decoration: none;
}

.logo-image {
  width: 50px;
  height: 50px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(255, 54, 54, 0.7);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 21;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: rgba(255, 230, 230, 0.7);
  transition: all 0.3s ease;
  border-radius: 2px;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translateY(7px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translateY(-7px);
}

.nav-links {
  display: flex;
  gap: 14px;
  font-size: 0.95rem;
}

.nav-links a {
  color: rgba(255, 230, 230, 0.7);
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid transparent;
  letter-spacing: 0.08em;
  transition: color 0.2s ease, border 0.2s ease, background 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.25);
  background: rgba(255, 54, 54, 0.08);
  box-shadow: 0 0 12px rgba(255, 54, 54, 0.25);
}

/* Search Container */
.search-container {
  position: relative;
  flex: 1;
  max-width: 400px;
  margin: 0 24px;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 10px 40px 10px 16px;
  background: rgba(30, 0, 0, 0.6);
  border: 1px solid rgba(255, 54, 54, 0.3);
  border-radius: 999px;
  color: rgba(255, 230, 230, 0.9);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 210, 210, 0.5);
}

.search-input:focus {
  border-color: rgba(255, 54, 54, 0.5);
  background: rgba(30, 0, 0, 0.8);
  box-shadow: 0 0 12px rgba(255, 54, 54, 0.2);
}

.search-button {
  position: absolute;
  right: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 54, 54, 0.7);
  transition: color 0.3s ease;
}

.search-button:hover {
  color: var(--accent);
}

.search-icon {
  width: 20px;
  height: 20px;
}

.search-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  background: rgba(18, 0, 0, 0.98);
  border: 1px solid rgba(255, 54, 54, 0.3);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover {
  background: rgba(255, 54, 54, 0.1);
}

.suggestion-type {
  font-size: 0.75rem;
  color: var(--accent);
  background: rgba(255, 54, 54, 0.15);
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: 600;
  min-width: 50px;
  text-align: center;
}

.suggestion-title {
  flex: 1;
  color: rgba(255, 230, 230, 0.9);
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .search-container {
    max-width: 300px;
    margin: 0 16px;
  }

  .nav-links {
    gap: 12px;
    font-size: 0.9rem;
  }
}

.menu-overlay {
  display: none;
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 19;
  }

  .menu-overlay.open {
    opacity: 1;
    visibility: visible;
  }

  .header-content {
    flex-wrap: wrap;
  }

  .search-container {
    order: 2;
    width: 100%;
    max-width: 100%;
    margin: 16px 0 0 0;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: linear-gradient(180deg, rgba(18, 0, 0, 0.98), rgba(45, 0, 0, 0.95));
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 24px 24px;
    gap: 0;
    transition: right 0.3s ease;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
    z-index: 20;
    overflow-y: auto;
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    width: 100%;
    padding: 14px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-links a:hover,
  .nav-links a.router-link-active {
    background: rgba(255, 54, 54, 0.15);
    border-color: rgba(255, 54, 54, 0.3);
  }

  .header-content {
    flex-wrap: wrap;
  }

  .search-container {
    order: 2;
    width: 100%;
    max-width: 100%;
    margin: 16px 0 0 0;
  }

  .search-input {
    font-size: 0.85rem;
    padding: 8px 36px 8px 12px;
  }

  .search-icon {
    width: 18px;
    height: 18px;
  }

  .search-suggestions {
    max-height: 250px;
  }

  .suggestion-item {
    padding: 10px 12px;
  }

  .suggestion-type {
    font-size: 0.7rem;
    padding: 3px 6px;
    min-width: 45px;
  }

  .suggestion-title {
    font-size: 0.85rem;
  }
}

/* Language Switcher */
.language-switcher {
  position: relative;
  margin-left: 16px;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(30, 0, 0, 0.6);
  border: 1px solid rgba(255, 54, 54, 0.3);
  border-radius: 8px;
  color: rgba(255, 230, 230, 0.9);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 70px;
}

.lang-button:hover {
  background: rgba(30, 0, 0, 0.8);
  border-color: rgba(255, 54, 54, 0.5);
  color: #fff;
  box-shadow: 0 0 12px rgba(255, 54, 54, 0.2);
}

.lang-current {
  font-weight: 600;
}

.lang-arrow {
  width: 14px;
  height: 14px;
  color: rgba(255, 230, 230, 0.7);
  transition: transform 0.3s ease;
}

.lang-arrow.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  background: rgba(18, 0, 0, 0.98);
  border: 1px solid rgba(255, 54, 54, 0.3);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.lang-option {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: none;
  color: rgba(255, 230, 230, 0.8);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.lang-option:last-child {
  border-bottom: none;
}

.lang-option:hover {
  background: rgba(255, 54, 54, 0.1);
  color: rgba(255, 230, 230, 0.95);
}

.lang-option.active {
  background: rgba(255, 54, 54, 0.15);
  color: var(--accent);
}

.lang-option.active .lang-code {
  font-weight: 700;
}

.lang-code {
  font-weight: 600;
  color: var(--accent);
}

@media (max-width: 768px) {
  .language-switcher {
    order: 3;
    width: 100%;
    margin: 16px 0 0 0;
  }
  
  .lang-button {
    width: 100%;
    justify-content: center;
  }
  
  .lang-dropdown {
    right: auto;
    left: 0;
    width: 100%;
  }
}
</style>

