import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ClientRuntime } from '@/components/ClientRuntime'
import { AdRuntime } from '@/components/ads/AdRuntime'
import { siteName, siteUrl } from '@/config/site'
import '@/style/site.css'

/* eslint-disable @next/next/no-sync-scripts, @next/next/next-script-for-ga */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} - thefreakcircus.org | Psychological Horror Visual Novel`,
  description: 'Experience The Freak Circus, a psychological horror visual novel featuring Pierrot and Harlequin. Play online or download for PC, Mac, and Linux.',
  authors: [{ name: 'Neko Bueno' }],
  robots: { index: true, follow: true },
  other: { title: `${siteName} - thefreakcircus.org | Psychological Horror Visual Novel` },
  icons: { icon: '/favicon.ico' }
}

const isProduction = process.env.NODE_ENV === 'production'

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientRuntime />
        <AdRuntime />
        <script dangerouslySetInnerHTML={{ __html: "document.addEventListener('click',function(event){var target=event.target instanceof Element?event.target:null;if(!target)return;var desktop=target.closest('.language-dropdown');var mobile=target.closest('.mobile-language-dropdown');if(desktop){document.querySelector('.language-menu')?.classList.toggle('open');return}if(mobile){document.querySelector('.mobile-language-menu')?.classList.toggle('open')}});" }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EXJV3Y1SXH" />
        <script dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EXJV3Y1SXH');" }} />
        {isProduction && <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5437957765171705" crossOrigin="anonymous" />}
        <script src="/collet-data.js" />
        <script dangerouslySetInnerHTML={{ __html: "window.localStorage.removeItem('__lsv__');" }} />
      </body>
    </html>
  )
}
