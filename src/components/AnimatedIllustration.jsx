import { lazy, Suspense } from 'react'
import { useMediaQuery } from '../utils/useMediaQuery'

// Each illustration is its own chunk, loaded only when its section renders.
const MAP = {
  hero: lazy(() => import('../illustrations/HeroEcosystem')),
  'information-technology': lazy(() => import('../illustrations/ITArchitecture')),
  consultancy: lazy(() => import('../illustrations/ConsultStrategy')),
  manpower: lazy(() => import('../illustrations/ManpowerJourney')),
  staffing: lazy(() => import('../illustrations/StaffingMatch')),
  'call-centre': lazy(() => import('../illustrations/CallCentreNetwork')),
  compliance: lazy(() => import('../illustrations/ComplianceFlow')),
  clients: lazy(() => import('../illustrations/ClientsNetwork')),
  foundation: lazy(() => import('../illustrations/CompanyFoundation')),
  leadership: lazy(() => import('../illustrations/LeadershipCompass')),
  foundation: lazy(() => import('../illustrations/CompanyFoundation')),
  leadership: lazy(() => import('../illustrations/LeadershipCompass')),
  contact: lazy(() => import('../illustrations/ContactMap')),
}

// These ship their own mobile composition, so they keep their own label sizes.
const HAS_MOBILE_LAYOUT = new Set(['hero', 'manpower'])

export default function AnimatedIllustration({ name, className = 'w-full h-auto', ...rest }) {
  const Comp = MAP[name]
  const small = useMediaQuery('(max-width: 640px)')
  if (!Comp) return null
  const cls = `${className} illus${HAS_MOBILE_LAYOUT.has(name) ? ' illus-fit' : ''}`
  return (
    <Suspense fallback={<div aria-hidden className={`${className} aspect-[4/3] animate-pulse rounded-3xl bg-soft/60`} />}>
      <Comp className={cls} mobile={small} {...rest} />
    </Suspense>
  )
}
