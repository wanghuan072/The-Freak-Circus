// 自动本地化所有链接的工具函数
export function localizeAllLinks() {
    // 获取当前语言 - 优先从localStorage获取，然后从HTML lang属性获取
    const currentLang = localStorage.getItem('language') || document.documentElement.lang || 'en'

    // 查找所有内部链接
    const links = document.querySelectorAll('a[href^="/"]')

    links.forEach(link => {
        const href = link.getAttribute('href')

        // 跳过已经有语言前缀的链接
        if (currentLang !== 'en' && href.startsWith(`/${currentLang}`)) {
            return
        }

        // 跳过外部链接、锚点链接等
        if (href.startsWith('http') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.startsWith('#') ||
            href.startsWith('javascript:')) {
            return
        }

        // 为链接添加语言前缀
        if (currentLang !== 'en') {
            const localizedHref = `/${currentLang}${href}`
            link.setAttribute('href', localizedHref)
        }
    })
}

// 监听语言变化，重新处理链接
export function watchLanguageChange() {
    // 使用MutationObserver监听DOM变化
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                // 当DOM发生变化时，重新处理链接
                setTimeout(localizeAllLinks, 100)
            }
        })
    })

    // 开始观察
    observer.observe(document.body, {
        childList: true,
        subtree: true
    })

    return observer
}
