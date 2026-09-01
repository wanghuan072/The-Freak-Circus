import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { Language } from '@/config/site'

export function readRenderedPage(language: Language, pageKey: string) {
  return readFile(resolve(process.cwd(), 'src/page/templates', language, `${pageKey}.html`), 'utf8')
}
