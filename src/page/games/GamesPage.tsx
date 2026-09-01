import type { Language } from '@/config/site'
import { RenderedContent } from '@/components/content/RenderedContent'

export function GamesPage({ language }: { language: Language }) {
  return <RenderedContent language={language} pageKey="games" />
}
