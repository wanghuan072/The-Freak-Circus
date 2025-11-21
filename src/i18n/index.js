import { createI18n } from 'vue-i18n'

// 只同步加载英文，其他语言懒加载
import en from '../locales/en.json'

// 导出支持的语言列表（必须在函数定义之前）
export const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

// 从路径检测语言
const detectLocaleFromPath = () => {
    if (typeof window === 'undefined') return null
    const segments = window.location.pathname.split('/').filter(Boolean)
    const maybeLocale = segments[0]
    if (supportedLanguages.includes(maybeLocale)) {
        return maybeLocale
    }
    return null
}

// 获取初始语言
const getInitialLocale = () => {
    const fromPath = detectLocaleFromPath()
    if (fromPath) return fromPath

    const saved = localStorage.getItem('language')
    if (saved && supportedLanguages.includes(saved)) {
        return saved
    }

    const browserLang = navigator.language.split('-')[0]
    if (supportedLanguages.includes(browserLang)) {
        return browserLang
    }

    return 'en'
}

// 创建i18n实例 - 只包含英文，其他语言按需加载
const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'en',
    messages: {
        en // 只包含英文，其他语言动态加载
    },
    warnHtmlMessage: false,
    allowComposition: true,
    missingWarn: false,
    fallbackWarn: false
})

// 动态加载语言文件
const loadLocale = async (locale) => {
    if (locale === 'en') return en

    try {
        const messages = await import(`../locales/${locale}.json`)
        i18n.global.setLocaleMessage(locale, messages.default)
        return messages.default
    } catch (error) {
        console.warn(`Failed to load locale ${locale}:`, error)
        return en
    }
}

// 导出i18n实例
export default i18n

// 导出语言切换函数 - 支持动态加载
export const switchLocale = async (locale) => {
    if (['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt'].includes(locale)) {
        // 动态加载语言文件
        await loadLocale(locale)
        i18n.global.locale.value = locale
        localStorage.setItem('language', locale)
    }
}

// 导出当前语言
export const getCurrentLocale = () => {
    return i18n.global.locale.value
}

// 从URL路径中检测语言（供router使用）
export function detectLanguageFromPath(path) {
    const segments = path.split('/').filter(Boolean)
    const candidate = segments[0]
    if (supportedLanguages.includes(candidate)) {
        return candidate
    }
    return 'en' // 默认返回英文
}

// 导出loadLocale函数
export { loadLocale }
