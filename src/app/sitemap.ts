import type { MetadataRoute } from 'next'
import { languages, siteUrl } from '@/config/site'
import { readRecords, type ContentKind } from '@/lib/content-records'
import { localizedPath, staticPages } from '@/lib/routes'
import { lastModified } from '@/lib/sitemap'

export const dynamic = 'force-static'

const pageSettings: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = {
  '/': { priority: 1, changeFrequency: 'weekly' },
  '/download': { priority: 0.9, changeFrequency: 'weekly' },
  '/games': { priority: 0.8, changeFrequency: 'weekly' },
  '/blog': { priority: 0.8, changeFrequency: 'weekly' },
  '/pierrot': { priority: 0.8, changeFrequency: 'weekly' },
  '/harlequin': { priority: 0.8, changeFrequency: 'weekly' },
  '/jester': { priority: 0.8, changeFrequency: 'weekly' },
  '/doctor': { priority: 0.8, changeFrequency: 'weekly' },
  '/ticket-taker': { priority: 0.8, changeFrequency: 'weekly' },
  '/wiki': { priority: 0.7, changeFrequency: 'weekly' },
  '/pierrot-coloring': { priority: 0.7, changeFrequency: 'monthly' },
  '/day-3': { priority: 0.65, changeFrequency: 'weekly' },
  '/updates': { priority: 0.6, changeFrequency: 'weekly' },
  '/about-us': { priority: 0.5, changeFrequency: 'yearly' },
  '/contact-us': { priority: 0.5, changeFrequency: 'yearly' },
  '/privacy-policy': { priority: 0.3, changeFrequency: 'yearly' },
  '/terms-of-service': { priority: 0.3, changeFrequency: 'yearly' },
  '/copyright': { priority: 0.3, changeFrequency: 'yearly' }
}

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = await Promise.all(languages.flatMap((language) => staticPages.map(async (page) => {
    const settings = pageSettings[page.path]
    return {
      url: absoluteUrl(localizedPath(language, page.path)),
      lastModified: await lastModified(`src/page/templates/${language}/${page.key}.html`),
      ...settings
    }
  })))

  const detailGroups = await Promise.all(languages.flatMap((language) => {
    const kinds: ContentKind[] = ['games', 'blog']
    return kinds.map(async (kind) => {
      const records = [...new Map([
        ...(await readRecords('en', kind)),
        ...(await readRecords(language, kind))
      ].map((record) => [record.addressBar, record])).values()]
      const dataDirectory = kind === 'games' ? 'game-records' : 'blog-records'
      return Promise.all(records.map(async (record) => ({
        url: absoluteUrl(localizedPath(language, `/${kind}/${record.addressBar}`)),
        lastModified: await lastModified(
          `src/page/templates/${language}/${kind}/${record.addressBar}.html`,
          `src/data/${dataDirectory}/${language}.json`
        ),
        changeFrequency: 'monthly' as const,
        priority: 0.9
      })))
    })
  }))
  const detailEntries = detailGroups.flat()

  return [...staticEntries, ...detailEntries]
}
