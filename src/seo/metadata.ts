import type { Metadata } from 'next'
import { languages, siteName, siteUrl, type Language } from '@/config/site'
import { localizedPath } from '@/lib/routes'
import type { ContentRecord } from '@/lib/content-records'
import en from '@/locales/en.json'
import zh from '@/locales/zh.json'
import ja from '@/locales/ja.json'
import ru from '@/locales/ru.json'
import ko from '@/locales/ko.json'
import de from '@/locales/de.json'
import fr from '@/locales/fr.json'
import es from '@/locales/es.json'
import pt from '@/locales/pt.json'

const localeData = { en, zh, ja, ru, ko, de, fr, es, pt }

function seoRecord(language: Language, key: string) {
  const value = localeData[language].seo as Record<string, { title?: string; description?: string; keywords?: string }>
  return value[key] ?? (en.seo as Record<string, { title?: string; description?: string; keywords?: string }>)[key]
}

function alternates(language: Language, path: string) {
  return {
    canonical: localizedPath(language, path),
    languages: {
      ...Object.fromEntries(languages.map((item) => [item, localizedPath(item, path)])),
      'x-default': localizedPath('en', path)
    }
  }
}

export function createPageMetadata(language: Language, path: string, seoKey: string): Metadata {
  const seo = seoRecord(language, seoKey)
  const canonical = localizedPath(language, path)
  const title = seo?.title ?? `${siteName} Visual Novel Games | thefreakcircus.org`
  const description = seo?.description ?? 'Browse visual novel games recommended for fans of The Freak Circus, including psychological horror stories and narrative adventures.'
  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: alternates(language, path),
    other: { title },
    openGraph: {
      type: 'website',
      siteName,
      url: canonical,
      title,
      description,
      images: ['/images/game-play.webp']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/game-play.webp']
    },
    metadataBase: new URL(siteUrl)
  }
}

export function createRecordMetadata(language: Language, path: string, record: ContentRecord): Metadata {
  const canonical = localizedPath(language, path)
  const title = record.seo?.title ?? record.title
  const description = record.seo?.description
  return {
    title,
    description,
    keywords: record.seo?.keywords,
    alternates: alternates(language, path),
    other: { title },
    openGraph: { type: 'website', siteName, url: canonical, title, description, images: record.imageUrl ? [record.imageUrl] : undefined },
    twitter: { card: 'summary_large_image', title, description, images: record.imageUrl ? [record.imageUrl] : undefined },
    metadataBase: new URL(siteUrl)
  }
}
