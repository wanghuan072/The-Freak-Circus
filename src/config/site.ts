export const siteUrl = 'https://thefreakcircus.org'
export const siteName = 'The Freak Circus'
export const languages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt'] as const
export type Language = (typeof languages)[number]
export const defaultLanguage: Language = 'en'
