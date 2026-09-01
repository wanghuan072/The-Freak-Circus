'use client'

/* eslint-disable no-unused-vars -- Window is an ambient TypeScript declaration. */

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

/** Initializes each visible Google ad slot once, after it has a usable width. */
export function AdRuntime() {
  useEffect(() => {
    const queuedAds = new WeakSet<HTMLModElement>()
    const queueAd = (ad: HTMLModElement) => {
      if (queuedAds.has(ad) || ad.dataset.adInitialized === 'true' || ad.dataset.adsbygoogleStatus) return

      const bounds = ad.getBoundingClientRect()
      const styles = window.getComputedStyle(ad)
      if (bounds.width <= 0 || styles.display === 'none' || styles.visibility === 'hidden') return

      queuedAds.add(ad)
      ad.dataset.adInitialized = 'true'
      try {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      } catch {
        // 广告拦截或广告脚本未加载时，保留原页面的静默失败行为。
      }
    }

    const adObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        queueAd(entry.target as HTMLModElement)
        adObserver.unobserve(entry.target)
      })
    }, { rootMargin: '200px 0px' })

    document.querySelectorAll<HTMLModElement>('ins.adsbygoogle').forEach((ad) => adObserver.observe(ad))
    return () => adObserver.disconnect()
  }, [])

  return null
}
