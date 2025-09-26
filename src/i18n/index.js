import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'

// 获取初始语言
const getInitialLocale = () => {
    // 1. 检查URL中的语言
    const path = window.location.pathname
    const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

    for (const lang of supportedLanguages) {
        if (lang === 'en') continue // 英文是默认语言，不需要前缀
        if (path.startsWith(`/${lang}`)) {
            return lang
        }
    }

    // 2. 检查localStorage
    const saved = localStorage.getItem('language')
    if (saved && supportedLanguages.includes(saved)) {
        return saved
    }

    // 3. 检查浏览器语言
    const browserLang = navigator.language.split('-')[0]
    if (supportedLanguages.includes(browserLang)) {
        return browserLang
    }

    // 4. 默认英文
    return 'en'
}

// 创建i18n实例
const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'en',
    messages: {
        en
    },
    // 禁用 HTML 警告
    warnHtmlMessage: false
})

// 导出i18n实例
export default i18n

// 动态加载语言文件
const loadLocale = async (locale) => {
    if (locale === 'en') {
        return en
    }

    try {
        const messages = await import(/* webpackChunkName: "locales" */ `../locales/${locale}.json`)
        return messages.default
    } catch (error) {
        console.warn(`Failed to load locale ${locale}:`, error)
        return en
    }
}

// 导出语言切换函数
export const switchLocale = async (locale) => {
    if (['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt'].includes(locale)) {
        // 如果语言已加载，直接切换
        if (i18n.global.availableLocales.includes(locale)) {
            i18n.global.locale.value = locale
            localStorage.setItem('language', locale)
        } else {
            // 动态加载语言文件
            const messages = await loadLocale(locale)
            i18n.global.setLocaleMessage(locale, messages)
            i18n.global.locale.value = locale
            localStorage.setItem('language', locale)
        }
    }
}

// 导出当前语言
export const getCurrentLocale = () => {
    return i18n.global.locale.value
}
