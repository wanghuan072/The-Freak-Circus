'use client'

import { useEffect } from 'react'
import { defaultLanguage, languages } from '@/config/site'

export function ClientRuntime() {
  useEffect(() => {
    const firstSegment = window.location.pathname.split('/').filter(Boolean)[0]
    const language = languages.includes(firstSegment as (typeof languages)[number])
      ? firstSegment
      : defaultLanguage
    document.documentElement.lang = language
    window.localStorage.setItem('language', language)
    const basePath = window.location.pathname.replace(/^\/(zh|ja|ru|ko|de|fr|es|pt)(?=\/|$)/, '') || '/'
    const localize = (href: string) => language === defaultLanguage || !href.startsWith('/') || href === `/${language}` || href.startsWith(`/${language}/`)
      ? href
      : href === '/' ? `/${language}` : `/${language}${href}`
    document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((link) => {
      link.href = localize(link.getAttribute('href') ?? '')
    })

    const closeMobileMenu = () => {
      document.querySelector('.mobile-menu-btn')?.classList.remove('active')
      document.querySelector('.mobile-nav')?.classList.remove('open')
      document.querySelector('.mobile-overlay')?.classList.remove('open')
    }
    const mobileMenuButton = document.querySelector<HTMLButtonElement>('.mobile-menu-btn')
    const onMobileMenuClick = () => {
      const open = !mobileMenuButton?.classList.contains('active')
      mobileMenuButton?.classList.toggle('active', open)
      mobileMenuButton?.setAttribute('aria-expanded', String(open))
      document.querySelector('.mobile-nav')?.classList.toggle('open', open)
      document.querySelector('.mobile-overlay')?.classList.toggle('open', open)
    }
    mobileMenuButton?.addEventListener('click', onMobileMenuClick)
    document.querySelector('.mobile-overlay')?.addEventListener('click', closeMobileMenu)

    document.querySelector('.mobile-dropdown-title')?.addEventListener('click', () => {
      document.querySelector('.mobile-dropdown')?.classList.toggle('open')
    })

    const languageLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-language]')]
    const onLanguageClick = (event: Event) => {
      event.preventDefault()
      const targetLanguage = (event.currentTarget as HTMLAnchorElement).dataset.language
      if (!targetLanguage) return
      window.location.assign(targetLanguage === defaultLanguage ? basePath : basePath === '/' ? `/${targetLanguage}` : `/${targetLanguage}${basePath}`)
    }
    languageLinks.forEach((link) => link.addEventListener('click', onLanguageClick))

    const heroPlayButton = document.querySelector<HTMLButtonElement>('.hero-buttons .btn-primary')
    const onHeroPlay = () => document.querySelector('.play-game')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    heroPlayButton?.addEventListener('click', onHeroPlay)

    const playButtons = [...document.querySelectorAll<HTMLButtonElement>('.play-btn[data-iframe-url]')]
    const onPlay = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement
      const source = button.dataset.iframeUrl
      const preview = button.closest('.player-preview')
      if (!source || !preview) return
      const iframe = document.createElement('iframe')
      iframe.id = 'game-iframe'
      iframe.src = source
      iframe.width = '100%'
      iframe.height = '100%'
      iframe.frameBorder = '0'
      iframe.allowFullscreen = true
      preview.replaceWith(iframe)
    }
    playButtons.forEach((button) => button.addEventListener('click', onPlay))

    const controls = [...document.querySelectorAll<HTMLButtonElement>('.game-control-bar .control-btn')]
    const onWebFullscreen = () => {
      const gameLeft = document.querySelector('.game-left')
      const enabled = !gameLeft?.classList.contains('web-fullscreen')
      gameLeft?.classList.toggle('web-fullscreen', enabled)
      document.querySelector('.game-right')?.classList.toggle('hidden', enabled)
      document.querySelector('.app-header')?.classList.toggle('hidden', enabled)
      document.querySelector('footer')?.classList.toggle('hidden', enabled)
      document.body.style.overflow = enabled ? 'hidden' : ''
    }
    const onFullscreen = () => {
      const iframe = document.getElementById('game-iframe')
      if (iframe && !document.fullscreenElement) void iframe.requestFullscreen()
      else if (document.fullscreenElement) void document.exitFullscreen()
    }
    controls[0]?.addEventListener('click', onWebFullscreen)
    controls[1]?.addEventListener('click', onFullscreen)

    return () => {
      mobileMenuButton?.removeEventListener('click', onMobileMenuClick)
      document.querySelector('.mobile-overlay')?.removeEventListener('click', closeMobileMenu)
      languageLinks.forEach((link) => link.removeEventListener('click', onLanguageClick))
      heroPlayButton?.removeEventListener('click', onHeroPlay)
      playButtons.forEach((button) => button.removeEventListener('click', onPlay))
      controls[0]?.removeEventListener('click', onWebFullscreen)
      controls[1]?.removeEventListener('click', onFullscreen)
    }
  }, [])

  return null
}
