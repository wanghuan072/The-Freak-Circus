import { createI18n } from 'vue-i18n'

// 只同步加载英文，其他语言懒加载
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

// 导出支持的语言列表
export const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

// 导出loadLocale函数
export { loadLocale }
