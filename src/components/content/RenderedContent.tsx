import type { Language } from '@/config/site'
import { readRenderedPage } from '@/lib/rendered-content'

type RenderedContentProps = { language: Language; pageKey: string }

/** Renders the preserved page template for a Next.js page component. */
export async function RenderedContent({ language, pageKey }: RenderedContentProps) {
  const html = await readRenderedPage(language, pageKey)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
