import type { Language } from '@/config/site'
import { RenderedContent } from '@/components/content/RenderedContent'

type CharacterPageKey = 'pierrot' | 'pierrot-coloring' | 'harlequin' | 'jester' | 'doctor' | 'ticket-taker'

export function CharacterPage({ language, pageKey }: { language: Language; pageKey: CharacterPageKey }) {
  return <RenderedContent language={language} pageKey={pageKey} />
}
