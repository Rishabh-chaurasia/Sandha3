import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ORDERED_SERVICES, CALL_GROUPS } from '../data/services'
import AnimatedIllustration from '../components/AnimatedIllustration'
import SectionHeading from '../components/SectionHeading'
import { EASE, cn } from '../utils/motion'

function detailsFor(s) {
  if (s.areas.length) return s.areas.map((a) => ({ title: a.title, text: a.text }))
  return CALL_GROUPS.flatMap((g) => g.items.map((i) => ({ title: i.title, text: i.points.join(', ') })))
}

function FrtArtwork() {
  return <img aria-hidden src="/frt-lift-illustration.png" alt="" className="pointer-events-none absolute bottom-0 right-0 z-10 h-40 w-56 object-contain mix-blend-multiply transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 sm:h-48 sm:w-64" style={{ maskImage: 'radial-gradient(ellipse 67% 66% at center,black 60%,transparent 100%)' }} />
}

function WaterArtwork() {
  return <img aria-hidden src="/water-utility-illustration.png" alt="" className="pointer-events-none absolute bottom-0 right-0 z-10 h-40 w-56 object-contain mix-blend-multiply transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 sm:h-48 sm:w-64" style={{ maskImage: 'radial-gradient(ellipse 67% 66% at center,black 60%,transparent 100%)' }} />
}

export default function ServicesExplorer({ heading = true, id = 'services', compact = false }) {
  const [active, setActive] = useState(0)
  const reduce = false
  const s = ORDERED_SERVICES[active]

  const focusTab = (i) => { setActive(i); document.getElementById(`svc-tab-${i}`)?.focus() }
  const onKey = (e) => {
    const n = ORDERED_SERVICES.length
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); focusTab((active + 1) % n) }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); focusTab((active - 1 + n) % n) }
    if (e.key === 'Home') focusTab(0)
    if (e.key === 'End') focusTab(n - 1)
  }

  const displayedServices = ORDERED_SERVICES
  const cardColors = [
    ['#DDF6EA', '#18A882'],
    ['#DCEEFF', '#0878F9'],
    ['#D7F8F0', '#0F9E93'],
    ['#FFE5DF', '#F05F42'],
    ['#E8EFFF', '#4266C9'],
  ]
  const spritePositions = ['100% 0%', null, null, '50% 100%', null]
  const cardSpan = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'sm:col-span-2 lg:col-span-2']

  if (compact) {
    return (
      <section id={id} className={cn('section relative isolate overflow-hidden bg-white', compact && '!pt-8 !pb-3 lg:!pt-12 lg:!pb-4')} aria-labelledby={heading ? 'services-title' : undefined} aria-label={heading ? undefined : 'Services'}>
        <div className="container-x">
          {heading && (
            <div className="mb-6 lg:mb-8">
              <SectionHeading label="What we do" id="services-title" title="Our services" size="lg">
                <p>Products and services that help your organisation work better.</p>
              </SectionHeading>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {displayedServices.map((sv, i) => {
                const [bg, color] = cardColors[i]
                const bullets = detailsFor(sv).slice(0, 2)
              return (
                <motion.article key={sv.slug} whileHover={reduce ? undefined : { y: -5 }} transition={{ duration: 0.25 }} className={cn('group relative min-h-[220px] overflow-hidden rounded-2xl p-5 shadow-sm ring-1 ring-black/[0.04]', cardSpan[i])} style={{ backgroundColor: bg, backgroundImage: sv.slug === 'utility-operations' ? 'linear-gradient(rgba(15,158,147,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(15,158,147,.12) 1px,transparent 1px)' : undefined, backgroundSize: sv.slug === 'utility-operations' ? '18px 18px' : undefined }}>
                  {sv.slug === 'utility-operations' || sv.slug === 'technology-services' ? <FrtArtwork /> : sv.slug === 'water-utility' ? <WaterArtwork /> : <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 z-10 size-36 bg-no-repeat opacity-85 mix-blend-multiply transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" style={{ backgroundImage: 'url(/service-illustrations-v2.png)', backgroundSize: '300% 200%', backgroundPosition: spritePositions[i], maskImage: 'radial-gradient(ellipse 52% 52% at center,black 55%,transparent 100%)' }} />}
                  <div className="relative z-20 flex h-full flex-col">
                    <div className="max-w-[65%]">
                    <h3 className="text-lg font-black leading-tight tracking-tight text-ink">{sv.title}</h3>
                    <p className="mt-2 text-sm leading-snug text-ink/70">{sv.tagline}</p>
                    <ul className="mt-3 space-y-1 text-xs leading-snug text-ink/65">
                      {bullets.map((b) => <li key={b.title} className="flex gap-2"><span style={{ color }}>•</span><span>{b.title}</span></li>)}
                    </ul>
                    </div>
                    <Link to={`/services/${sv.slug}`} aria-label={`Explore ${sv.title}`} className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm transition group-hover:scale-110" style={{ color }}><ArrowUpRight className="size-3.5" /></Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id={id} className="relative isolate overflow-hidden py-8 lg:py-10" aria-labelledby={heading ? 'services-title' : undefined} aria-label={heading ? undefined : 'Services'}>
      {/* the section tint shifts with the active service */}
      <div aria-hidden className="absolute inset-0 -z-20 transition-colors duration-700" style={{ backgroundColor: s.tint }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-transparent to-white" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-24 -z-10 size-[420px] rounded-full opacity-30 blur-[100px] transition-colors duration-700" style={{ backgroundColor: s.accent }} />

      <div className="container-x">
        {heading && (
          <SectionHeading label="What we do" id="services-title" title="Technology, people and operations.">
            <p>Choose a service to explore its scope and delivery options.</p>
          </SectionHeading>
        )}

        <div className={cn('grid items-start lg:grid-cols-[178px_minmax(0,1fr)] lg:gap-7', heading && 'mt-8')}>
        {/* numbered tab bar with a moving indicator */}
        <div role="tablist" aria-label="Services" onKeyDown={onKey} className="-mx-5 flex snap-x justify-start gap-1 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 lg:mx-0 lg:flex lg:flex-col lg:items-center lg:overflow-visible lg:pt-16">
          {ORDERED_SERVICES.map((sv, i) => {
            const on = i === active
            return (
              <button
                key={sv.slug}
                id={`svc-tab-${i}`}
                role="tab"
                aria-selected={on}
                aria-controls="svc-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn('group relative flex min-w-[9.5rem] shrink-0 snap-start flex-col items-start justify-start rounded-xl px-3 pb-3 pt-2 text-left transition-colors lg:mb-0 lg:w-full lg:min-w-0 lg:shrink lg:items-center lg:rounded-lg lg:px-3 lg:py-1.5 lg:text-center', on && 'bg-soft font-black')}
              >
                <span className="text-sm font-extrabold tabular-nums transition-colors" style={{ color: on ? sv.accent : '#9db0c6' }}>{sv.n}</span>
                <span className={cn('mt-0.5 pr-2 text-base font-extrabold leading-tight tracking-tight transition-colors', on ? 'text-brand-deep font-black' : 'text-muted group-hover:text-ink')}>{sv.title}</span>
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-line" />
                {on && (
                  <motion.span
                    aria-hidden layoutId="svc-indicator"
                    className="absolute inset-x-0 bottom-0 h-[3px] rounded-full"
                    style={{ background: `linear-gradient(90deg, ${s.accent}, ${s.accent2})` }}
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <div id="svc-panel" role="tabpanel" aria-labelledby={`svc-tab-${active}`} className="mt-8 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.slug}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="grid gap-4 lg:min-h-[118px] lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-5">
                  <h3 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-black leading-[.96] tracking-[-.045em] text-ink">
                    <span style={{ background: `linear-gradient(100deg, ${s.accent}, ${s.accent2})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.title}</span>
                  </h3>
                  <p className="mt-2 text-sm font-bold text-ink/80">{s.tagline}</p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base leading-relaxed text-muted">{s.summary}</p>
                </div>
              </div>

              <div
                className={cn('relative grid items-center gap-4 overflow-hidden rounded-[1.5rem] border border-white bg-white/70 shadow-lift backdrop-blur-sm', compact ? 'mt-6 p-5 sm:p-6' : 'mt-5 p-4 lg:h-[440px] lg:grid-cols-12 lg:p-6')}
                style={{ backgroundImage: `radial-gradient(760px 340px at 90% 0%, ${s.accent}26, transparent 70%), radial-gradient(600px 320px at 0% 100%, ${s.accent2}22, transparent 70%)` }}
              >
                {!compact && <div className="relative min-w-0 lg:col-span-7">
                  <AnimatedIllustration name={s.slug} className={cn('mx-auto h-auto max-h-[320px] w-full max-w-[500px]', s.slug === 'technology-services' && '-translate-y-8')} />
                </div>}
                <ul className={cn(compact ? 'grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3' : 'lg:col-span-5 lg:max-h-[360px] lg:overflow-y-auto lg:pr-2')}>
                  {detailsFor(s).map((d, i) => (
                    <motion.li
                      key={d.title}
                      initial={reduce ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 22, delay: 0.2 + i * 0.06 }}
                      className="flex gap-3 border-t border-line/80 py-2 first:border-t-0"
                    >
                      <span aria-hidden className="mt-2 size-2.5 shrink-0 rounded-full" style={{ background: i % 2 ? s.accent2 : s.accent }} />
                      <div>
                        <h4 className="text-base font-extrabold leading-snug text-ink">{d.title}</h4>
                        <p className="mt-0.5 line-clamp-2 text-sm leading-snug text-muted">{d.text}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {!compact && <div className="mt-3 flex justify-end"><Link to={`/services/${s.slug}`} className="group inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-deep hover:text-brand">
                <span className="link-underline">Explore {s.title}</span>
                <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link></div>}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  )
}
