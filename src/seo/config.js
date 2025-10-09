// SEO配置文件
export const seoConfig = {
    // 域名配置
    domain: 'thefreakcircus.org',
    fullDomain: 'https://thefreakcircus.org',
    protocol: 'https://',

    // 语言配置
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt'],

    // 社交媒体配置
    social: {
        twitter: '@freakcircus',
        facebook: 'freakcircus',
        instagram: 'freakcircus'
    },

    // 默认SEO设置
    defaults: {
        title: 'The Freak Circus - thefreakcircus.org',
        description: 'A psychological horror visual novel featuring Pierrot and Harlequin in a mysterious circus world.',
        keywords: 'visual novel, horror, psychological thriller, circus, Pierrot, Harlequin',
        author: 'Neko Bueno',
        image: 'https://thefreakcircus.org/images/game-play.webp',
        type: 'website'
    },

    // 页面优先级设置
    priorities: {
        home: 1.0,
        pierrot: 0.8,
        harlequin: 0.8,
        wiki: 0.7,
        download: 0.9,
        updates: 0.6,
        privacy: 0.6,
        about: 0.5,
        contact: 0.5,
        privacy: 0.3,
        terms: 0.3,
        copyright: 0.3
    },

    // 更新频率设置
    changefreq: {
        home: 'weekly',
        pierrot: 'weekly',
        harlequin: 'weekly',
        wiki: 'weekly',
        download: 'weekly',
        updates: 'weekly',
        privacy: 'weekly',
        about: 'yearly',
        contact: 'yearly',
        privacy: 'yearly',
        terms: 'yearly',
        copyright: 'yearly'
    }
}
