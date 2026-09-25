import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onArrowScroll = (event) => {
      if (!['ArrowDown', 'ArrowUp'].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey) return

      const target = event.target instanceof Element ? event.target : null
      if (target?.closest('input, textarea, select, button, a, [contenteditable="true"], [role="tab"]')) return

      const active = document.activeElement
      if (active && active !== document.body && active.id !== 'main') return

      event.preventDefault()
      window.scrollBy({ top: event.key === 'ArrowDown' ? 120 : -120, behavior: 'smooth' })
    }

    document.addEventListener('keydown', onArrowScroll)
    return () => document.removeEventListener('keydown', onArrowScroll)
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
