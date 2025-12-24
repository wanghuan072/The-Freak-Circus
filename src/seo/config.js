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
        pierrotColoring: 0.7,
        harlequin: 0.8,
        jester: 0.8,
        doctor: 0.8,
        ticketTaker: 0.8,
        wiki: 0.7,
        download: 0.9,
        updates: 0.6,
        games: 0.8,
        gameDetail: 0.9,
        blog: 0.7,
        blogDetail: 0.8,
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
        pierrotColoring: 'monthly',
        harlequin: 'weekly',
        jester: 'weekly',
        doctor: 'weekly',
        ticketTaker: 'weekly',
        wiki: 'weekly',
        download: 'weekly',
        updates: 'weekly',
        games: 'weekly',
        gameDetail: 'monthly',
        blog: 'weekly',
        blogDetail: 'monthly',
        about: 'yearly',
        contact: 'yearly',
        privacy: 'yearly',
        terms: 'yearly',
        copyright: 'yearly'
    }
}
