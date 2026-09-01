import type { Language } from '@/config/site'
import { RenderedContent } from '@/components/content/RenderedContent'

export function HomePage({ language }: { language: Language }) {
  return <RenderedContent language={language} pageKey="home" />
}
