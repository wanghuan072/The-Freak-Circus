import { onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

/**
 * Composable to handle internal links in HTML content
 * Intercepts clicks on links with class "inline-link" and routes them via Vue Router
 */
export function useInternalLinks(contentRef) {
  const router = useRouter()
  const route = useRoute()

  const handleLinkClick = (event) => {
    const link = event.target.closest('a.inline-link')
    if (!link) return

    // Prevent default navigation
    event.preventDefault()

    // Get the href attribute
    const href = link.getAttribute('href')
    if (!href) return

    // Skip external links (let them open normally)
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
      return
    }

    // Get current locale from route path
    const pathSegments = route.path.split('/').filter(Boolean)
    const currentLocale = pathSegments[0] === 'de' ? 'de' : 'en'

    // Create localized path
    let localizedPath = href
    if (currentLocale === 'de' && !href.startsWith('/de')) {
      localizedPath = `/de${href}`
    } else if (currentLocale === 'en' && href.startsWith('/de')) {
      localizedPath = href.replace('/de', '')
    }

    // Navigate using Vue Router
    router.push(localizedPath).catch(err => {
      // Ignore navigation duplicate errors
      if (err.name !== 'NavigationDuplicated') {
        console.error('Navigation error:', err)
      }
    })
  }

  const attachListener = async () => {
    await nextTick()
    if (contentRef.value) {
      contentRef.value.addEventListener('click', handleLinkClick)
    }
  }

  const detachListener = () => {
    if (contentRef.value) {
      contentRef.value.removeEventListener('click', handleLinkClick)
    }
  }

  onMounted(() => {
    attachListener()
    // Watch for content changes (e.g., when guide/wiki data loads)
    watch(() => contentRef.value, () => {
      detachListener()
      attachListener()
    }, { immediate: false })
  })

  onUnmounted(() => {
    detachListener()
  })

  return {
    handleLinkClick
  }
}

