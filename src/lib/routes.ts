import { defaultLanguage, languages, type Language } from '@/config/site'

export const staticPages = [
  { path: '/', key: 'home', seoKey: 'home' },
  { path: '/pierrot', key: 'pierrot', seoKey: 'pierrot' },
  { path: '/pierrot-coloring', key: 'pierrot-coloring', seoKey: 'pierrotColoring' },
  { path: '/harlequin', key: 'harlequin', seoKey: 'harlequin' },
  { path: '/jester', key: 'jester', seoKey: 'jester' },
  { path: '/doctor', key: 'doctor', seoKey: 'doctor' },
  { path: '/ticket-taker', key: 'ticket-taker', seoKey: 'ticketTaker' },
  { path: '/wiki', key: 'wiki', seoKey: 'wiki' },
  { path: '/day-3', key: 'day-3', seoKey: 'day3' },
  { path: '/updates', key: 'updates', seoKey: 'updates' },
  { path: '/download', key: 'download', seoKey: 'download' },
  { path: '/games', key: 'games', seoKey: 'games' },
  { path: '/blog', key: 'blog', seoKey: 'blog' },
  { path: '/privacy-policy', key: 'privacy-policy', seoKey: 'privacy' },
  { path: '/terms-of-service', key: 'terms-of-service', seoKey: 'terms' },
  { path: '/copyright', key: 'copyright', seoKey: 'copyright' },
  { path: '/about-us', key: 'about-us', seoKey: 'about' },
  { path: '/contact-us', key: 'contact-us', seoKey: 'contact' }
] as const

export type StaticPage = (typeof staticPages)[number]

export function localizedPath(language: Language, path: string) {
  return language === defaultLanguage ? path : path === '/' ? `/${language}` : `/${language}${path}`
}

export function parsePath(segments: string[] = []) {
  const [first, ...rest] = segments
  const language = languages.includes(first as Language) ? (first as Language) : defaultLanguage
  const pathSegments = language === first ? rest : segments
  const path = pathSegments.length === 0 ? '/' : `/${pathSegments.join('/')}`
  return { language, path, pathSegments }
}

export function findStaticPage(path: string) {
  return staticPages.find((page) => page.path === path)
}

export function allStaticRouteParams() {
  return languages.flatMap((language) => staticPages.map((page) => ({
    slug: localizedPath(language, page.path).split('/').filter(Boolean)
  })))
}
