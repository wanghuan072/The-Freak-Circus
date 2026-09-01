import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allStaticRouteParams, findStaticPage, parsePath } from '@/lib/routes'
import { findRecord, readRecords, type ContentKind } from '@/lib/content-records'
import { languages } from '@/config/site'
import { createPageMetadata, createRecordMetadata } from '@/seo/metadata'
import { HomePage } from '@/page/home/HomePage'
import { CharacterPage } from '@/page/characters/CharacterPage'
import { GamesPage } from '@/page/games/GamesPage'
import { GameDetailPage } from '@/page/games/GameDetailPage'
import { BlogPage } from '@/page/blog/BlogPage'
import { BlogDetailPage } from '@/page/blog/BlogDetailPage'
import { InformationPage } from '@/page/information/InformationPage'
import { LegalPage } from '@/page/legal/LegalPage'

type RouteProps = { params: Promise<{ slug?: string[] }> }

export const dynamicParams = false

export async function generateStaticParams() {
  const details = (await Promise.all(languages.flatMap(async (language) => {
    const kinds: ContentKind[] = ['games', 'blog']
    return (await Promise.all(kinds.map(async (kind) => {
      const records = [...new Map([
        ...(await readRecords('en', kind)),
        ...(await readRecords(language, kind))
      ].map((record) => [record.addressBar, record])).values()]
      return records.map((record) => ({
      slug: [language === 'en' ? '' : language, kind, record.addressBar].filter(Boolean)
      }))
    }))).flat()
  }))).flat()
  return [...allStaticRouteParams(), ...details]
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { language, path } = parsePath((await params).slug)
  const page = findStaticPage(path)
  if (page) return createPageMetadata(language, page.path, page.seoKey)
  const segments = path.split('/').filter(Boolean)
  if (segments.length === 2 && (segments[0] === 'games' || segments[0] === 'blog')) {
    const record = await findRecord(language, segments[0], segments[1])
    if (record) return createRecordMetadata(language, path, record)
  }
  return {}
}

export default async function CatchAllPage({ params }: RouteProps) {
  const { language, path } = parsePath((await params).slug)
  const page = findStaticPage(path)
  if (page) {
    switch (page.key) {
      case 'home': return <HomePage language={language} />
      case 'games': return <GamesPage language={language} />
      case 'blog': return <BlogPage language={language} />
      case 'pierrot':
      case 'pierrot-coloring':
      case 'harlequin':
      case 'jester':
      case 'doctor':
      case 'ticket-taker': return <CharacterPage language={language} pageKey={page.key} />
      case 'wiki':
      case 'day-3':
      case 'updates':
      case 'download': return <InformationPage language={language} pageKey={page.key} />
      case 'about-us':
      case 'contact-us':
      case 'privacy-policy':
      case 'terms-of-service':
      case 'copyright': return <LegalPage language={language} pageKey={page.key} />
    }
  }
  const segments = path.split('/').filter(Boolean)
  if (segments.length === 2 && (segments[0] === 'games' || segments[0] === 'blog')) {
    const record = await findRecord(language, segments[0], segments[1])
    if (record) return segments[0] === 'games'
      ? <GameDetailPage language={language} slug={segments[1]} />
      : <BlogDetailPage language={language} slug={segments[1]} />
  }
  notFound()
}
