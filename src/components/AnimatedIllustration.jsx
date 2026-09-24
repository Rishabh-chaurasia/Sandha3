import { lazy, Suspense } from 'react'
import { useMediaQuery } from '../utils/useMediaQuery'

// Each illustration is its own chunk, loaded only when its section renders.
const MAP = {
  hero: lazy(() => import('../illustrations/HeroEcosystem')),
  'call-centre': lazy(() => import('../illustrations/CallCentreNetwork')),
  foundation: lazy(() => import('../illustrations/CompanyFoundation')),
  'foundation-blueprint': lazy(() => import('../illustrations/FoundationBlueprint')),
  'about-spectrum': lazy(() => import('../illustrations/AboutSpectrum')),
  leadership: lazy(() => import('../illustrations/FounderEditorial')),
  'founder-momentum': lazy(() => import('../illustrations/FounderMomentum')),
  services: lazy(() => import('../illustrations/ServicesConstellation')),
  'clients-network': lazy(() => import('../illustrations/ClientsNetwork')),
  'clients-impact': lazy(() => import('../illustrations/ClientReachMap')),
  compliance: lazy(() => import('../illustrations/ComplianceFlow')),
  contact: lazy(() => import('../illustrations/ContactMap')),
}
const ServiceVisual = lazy(() => import('../illustrations/ServiceVisual'))
const SERVICE_SLUGS = new Set(['utility-operations', 'manpower-management', 'contact-centre', 'technology-services', 'water-utility'])

// These ship their own mobile composition, so they keep their own label sizes.
const HAS_MOBILE_LAYOUT = new Set(['hero', 'services'])

export default function AnimatedIllustration({ name, className = 'w-full h-auto', ...rest }) {
  const Comp = MAP[name]
  const small = useMediaQuery('(max-width: 640px)')
  if (!Comp && !SERVICE_SLUGS.has(name)) return null
  const cls = `${className} illus${HAS_MOBILE_LAYOUT.has(name) ? ' illus-fit' : ''}`
  return (
    <Suspense fallback={<div aria-hidden className={`${className} aspect-[4/3] animate-pulse rounded-3xl bg-soft/60`} />}>
      {SERVICE_SLUGS.has(name) ? <ServiceVisual slug={name} className={cls} /> : <Comp className={cls} mobile={small} {...rest} />}
    </Suspense>
  )
}
