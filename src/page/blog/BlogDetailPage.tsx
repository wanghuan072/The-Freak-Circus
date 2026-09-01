import type { Language } from '@/config/site'
import { RenderedContent } from '@/components/content/RenderedContent'

export function BlogDetailPage({ language, slug }: { language: Language; slug: string }) {
  return <RenderedContent language={language} pageKey={`blog/${slug}`} />
}
