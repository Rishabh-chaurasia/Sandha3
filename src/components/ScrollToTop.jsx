import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onArrowScroll = (event) => {
      if (!['ArrowDown', 'ArrowUp'].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey || event.isComposing) return

      const target = event.target instanceof Element ? event.target : null
      // Keep native keyboard behaviour inside editable form controls. Everywhere else,
      // arrow keys should move through the page rather than get trapped in a widget.
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return

      event.preventDefault()
      event.stopPropagation()
      window.scrollBy({ top: event.key === 'ArrowDown' ? 120 : -120, behavior: 'smooth' })
    }

    document.addEventListener('keydown', onArrowScroll, true)
    return () => document.removeEventListener('keydown', onArrowScroll, true)
  }, [])

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}
