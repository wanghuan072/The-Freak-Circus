import type { Language } from '@/config/site'
import { RenderedContent } from '@/components/content/RenderedContent'

type InformationPageKey = 'wiki' | 'day-3' | 'updates' | 'download'

export function InformationPage({ language, pageKey }: { language: Language; pageKey: InformationPageKey }) {
  return <RenderedContent language={language} pageKey={pageKey} />
}
