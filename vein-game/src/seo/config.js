// SEO配置文件
export const seoConfig = {
  // 域名配置
  domain: 'veingame.net',
  fullDomain: 'https://veingame.net',
  protocol: 'https://',

  // 社交媒体配置
  social: {
    twitter: '@veingame',
    facebook: 'veingame',
    instagram: 'veingame',
    discord: 'veingame'
  },

  // 默认SEO设置
  defaults: {
    title: 'VEIN Game - Official Community Site',
    description: 'The ultimate community resource for VEIN survival game. Find guides, wiki, items, maps, and strategies to survive in VEIN game.',
    keywords: 'VEIN game, VEIN survival game, guides, wiki, items, maps, community, strategies',
    author: 'VEIN Game Community',
    image: 'https://veingame.net/images/logo.webp',
    type: 'website'
  },

  // 页面优先级设置
  priorities: {
    home: 1.0,
    guides: 0.9,
    guideDetail: 0.8,
    wiki: 0.8,
    wikiDetail: 0.7,
    items: 0.8,
    itemsWeapons: 0.7,
    itemsArmor: 0.7,
    itemsClothing: 0.7,
    itemsConsumables: 0.7,
    itemsSpecial: 0.7,
    itemsMaterials: 0.7,
    itemsAmmo: 0.7,
    itemsMedical: 0.7,
    itemsTools: 0.7,
    itemsMisc: 0.7,
    itemsDetail: 0.6,
    map: 0.8,
    mapDetail: 0.7,
    privacyPolicy: 0.5,
    termsOfService: 0.5,
    copyright: 0.5,
    aboutUs: 0.6,
    contactUs: 0.6
  },

  // 更新频率设置
  changefreq: {
    home: 'weekly',
    guides: 'weekly',
    guideDetail: 'monthly',
    wiki: 'weekly',
    wikiDetail: 'monthly',
    items: 'weekly',
    itemsWeapons: 'weekly',
    itemsArmor: 'weekly',
    itemsClothing: 'weekly',
    itemsConsumables: 'weekly',
    itemsSpecial: 'weekly',
    itemsMaterials: 'weekly',
    itemsAmmo: 'weekly',
    itemsMedical: 'weekly',
    itemsTools: 'weekly',
    itemsMisc: 'weekly',
    itemsDetail: 'monthly',
    map: 'monthly',
    mapDetail: 'monthly',
    privacyPolicy: 'yearly',
    termsOfService: 'yearly',
    copyright: 'yearly',
    aboutUs: 'monthly',
    contactUs: 'monthly'
  }
}

