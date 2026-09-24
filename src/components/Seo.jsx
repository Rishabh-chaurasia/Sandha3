import { useEffect } from 'react'
import { SITE_URL, COMPANY } from '../data/company'

function setTag(selector, create, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

export const ORG_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  url: SITE_URL,
  telephone: '+91-124-448-8701',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '601, Eros City Square, Sector 49-50',
    addressLocality: 'Gurugram',
    postalCode: '122001',
    addressCountry: 'IN',
  },
}

export default function Seo({ title, description, path = '/', jsonLd }) {
  useEffect(() => {
    const url = SITE_URL + (path === '/' ? '/' : path)
    document.title = title
    setTag('meta[name="description"]', 'meta', { name: 'description', content: description })
    setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: url })
    setTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: title })
    setTag('meta[property="og:description"]', 'meta', { property: 'og:description', content: description })
    setTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: url })
    setTag('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: title })
    setTag('meta[name="twitter:description"]', 'meta', { name: 'twitter:description', content: description })
    const ld = jsonLd ? [ORG_LD, jsonLd] : [ORG_LD]
    setTag('script#ld-json', 'script', { id: 'ld-json', type: 'application/ld+json' })
    document.head.querySelector('script#ld-json').textContent = JSON.stringify(ld)
  }, [title, description, path, jsonLd])
  return null
}
