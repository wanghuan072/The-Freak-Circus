import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { Language } from '@/config/site'

export type ContentKind = 'games' | 'blog'

export type ContentRecord = {
  addressBar: string
  title: string
  imageUrl?: string
  seo?: { title?: string; description?: string; keywords?: string }
}

function dataDirectory(kind: ContentKind) {
  return kind === 'games' ? 'game-records' : 'blog-records'
}

export async function readRecords(language: Language, kind: ContentKind): Promise<ContentRecord[]> {
  const source = await readFile(
    resolve(process.cwd(), 'src/data', dataDirectory(kind), `${language}.json`),
    'utf8'
  )
  return JSON.parse(source) as ContentRecord[]
}

export async function findRecord(language: Language, kind: ContentKind, addressBar: string) {
  const record = (await readRecords(language, kind)).find((item) => item.addressBar === addressBar)
  if (record || language === 'en') return record
  return (await readRecords('en', kind)).find((item) => item.addressBar === addressBar)
}
