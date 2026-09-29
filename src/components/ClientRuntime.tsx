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
      const mobileButton = document.querySelector('.mobile-menu-btn')
      const mobileNavigation = document.querySelector('.mobile-nav')
      const mobileOverlay = document.querySelector('.mobile-overlay')
      if (mobileButton) mobileButton.classList.remove('active')
      if (mobileNavigation) mobileNavigation.classList.remove('open')
      if (mobileOverlay) mobileOverlay.classList.remove('open')
    }
    const mobileMenuButton = document.querySelector<HTMLButtonElement>('.mobile-menu-btn')
    const onMobileMenuClick = () => {
      const open = !mobileMenuButton || !mobileMenuButton.classList.contains('active')
      const mobileNavigation = document.querySelector('.mobile-nav')
      const mobileOverlay = document.querySelector('.mobile-overlay')
      if (mobileMenuButton) {
        mobileMenuButton.classList.toggle('active', open)
        mobileMenuButton.setAttribute('aria-expanded', String(open))
      }
      if (mobileNavigation) mobileNavigation.classList.toggle('open', open)
      if (mobileOverlay) mobileOverlay.classList.toggle('open', open)
    }
    if (mobileMenuButton) mobileMenuButton.addEventListener('click', onMobileMenuClick)
    const mobileOverlay = document.querySelector('.mobile-overlay')
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu)

    const mobileDropdownTitle = document.querySelector('.mobile-dropdown-title')
    const mobileDropdown = document.querySelector('.mobile-dropdown')
    const onMobileDropdownClick = () => {
      if (mobileDropdown) mobileDropdown.classList.toggle('open')
    }
    if (mobileDropdownTitle) mobileDropdownTitle.addEventListener('click', onMobileDropdownClick)

    const languageLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-language]')]
    const onLanguageClick = (event: Event) => {
      event.preventDefault()
      const targetLanguage = (event.currentTarget as HTMLAnchorElement).dataset.language
      if (!targetLanguage) return
      window.location.assign(targetLanguage === defaultLanguage ? basePath : basePath === '/' ? `/${targetLanguage}` : `/${targetLanguage}${basePath}`)
    }
    languageLinks.forEach((link) => link.addEventListener('click', onLanguageClick))

    const heroPlayButton = document.querySelector<HTMLButtonElement>('.hero-buttons .btn-primary')
    const onHeroPlay = () => {
      const playGameSection = document.querySelector('.play-game')
      if (playGameSection) playGameSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (heroPlayButton) heroPlayButton.addEventListener('click', onHeroPlay)

    const homeGameMask = document.querySelector<HTMLElement>('.home-page .game-mask')
    const loadHomeGame = () => {
      const gameContainer = homeGameMask ? homeGameMask.parentElement : null
      if (!gameContainer || gameContainer.querySelector('#home-game-iframe')) return
      const iframe = document.createElement('iframe')
      iframe.id = 'home-game-iframe'
      iframe.src = 'https://itch.io/embed-upload/16572088'
      iframe.title = 'The Freak Circus game'
      iframe.width = '100%'
      iframe.height = '600'
      iframe.frameBorder = '0'
      iframe.allowFullscreen = true
      while (gameContainer.firstChild) gameContainer.removeChild(gameContainer.firstChild)
      gameContainer.appendChild(iframe)
    }
    if (homeGameMask) homeGameMask.addEventListener('click', loadHomeGame)

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
      if (preview.parentNode) preview.parentNode.replaceChild(iframe, preview)
    }
    playButtons.forEach((button) => button.addEventListener('click', onPlay))

    const controls = [...document.querySelectorAll<HTMLButtonElement>('.game-control-bar .control-btn')]
    const onWebFullscreen = () => {
      const gameLeft = document.querySelector('.game-left')
      const enabled = !gameLeft || !gameLeft.classList.contains('web-fullscreen')
      const gameRight = document.querySelector('.game-right')
      const appHeader = document.querySelector('.app-header')
      const footer = document.querySelector('footer')
      if (gameLeft) gameLeft.classList.toggle('web-fullscreen', enabled)
      if (gameRight) gameRight.classList.toggle('hidden', enabled)
      if (appHeader) appHeader.classList.toggle('hidden', enabled)
      if (footer) footer.classList.toggle('hidden', enabled)
      document.body.style.overflow = enabled ? 'hidden' : ''
    }
    const onFullscreen = () => {
      const iframe = document.getElementById('game-iframe')
      if (iframe && !document.fullscreenElement) void iframe.requestFullscreen()
      else if (document.fullscreenElement) void document.exitFullscreen()
    }
    if (controls[0]) controls[0].addEventListener('click', onWebFullscreen)
    if (controls[1]) controls[1].addEventListener('click', onFullscreen)

    return () => {
      if (mobileMenuButton) mobileMenuButton.removeEventListener('click', onMobileMenuClick)
      if (mobileOverlay) mobileOverlay.removeEventListener('click', closeMobileMenu)
      if (mobileDropdownTitle) mobileDropdownTitle.removeEventListener('click', onMobileDropdownClick)
      languageLinks.forEach((link) => link.removeEventListener('click', onLanguageClick))
      if (heroPlayButton) heroPlayButton.removeEventListener('click', onHeroPlay)
      if (homeGameMask) homeGameMask.removeEventListener('click', loadHomeGame)
      playButtons.forEach((button) => button.removeEventListener('click', onPlay))
      if (controls[0]) controls[0].removeEventListener('click', onWebFullscreen)
      if (controls[1]) controls[1].removeEventListener('click', onFullscreen)
    }
  }, [])

  return null
}
