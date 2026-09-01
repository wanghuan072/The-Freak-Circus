import type { Language } from '@/config/site'
import { RenderedContent } from '@/components/content/RenderedContent'

type LegalPageKey = 'about-us' | 'contact-us' | 'privacy-policy' | 'terms-of-service' | 'copyright'

export function LegalPage({ language, pageKey }: { language: Language; pageKey: LegalPageKey }) {
  return <RenderedContent language={language} pageKey={pageKey} />
}
