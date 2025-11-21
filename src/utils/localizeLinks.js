import { supportedLanguages } from '@/i18n'

// 自动本地化所有链接的工具函数
export function localizeAllLinks() {
    // 获取当前语言 - 优先从localStorage获取，然后从HTML lang属性获取
    const currentLang = localStorage.getItem('language') || document.documentElement.lang || 'en'

    // 查找所有内部链接
    const links = document.querySelectorAll('a[href^="/"]')

    links.forEach(link => {
        let href = link.getAttribute('href')

        // 跳过外部链接、锚点链接等
        if (href.startsWith('http') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.startsWith('#') ||
            href.startsWith('javascript:')) {
            return
        }

        // 移除所有已存在的语言前缀
        let basePath = href
        for (const lang of supportedLanguages) {
            if (lang === 'en') continue // 英文是默认语言，不需要前缀
            if (basePath.startsWith(`/${lang}/`) || basePath === `/${lang}`) {
                basePath = basePath.replace(`/${lang}`, '') || '/'
                break // 只应该有一个语言前缀
            }
        }

        // 如果当前语言是英文，使用基础路径
        if (currentLang === 'en') {
            if (basePath !== href) {
                link.setAttribute('href', basePath)
            }
            return
        }

        // 为链接添加当前语言前缀
        const localizedHref = basePath === '/' ? `/${currentLang}` : `/${currentLang}${basePath}`
        if (localizedHref !== href) {
            link.setAttribute('href', localizedHref)
        }
    })
}

