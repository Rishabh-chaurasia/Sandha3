import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES, CALL_GROUPS } from '../data/services'
import AnimatedIllustration from '../components/AnimatedIllustration'
import SectionHeading from '../components/SectionHeading'
import { EASE, cn } from '../utils/motion'

function detailsFor(s) {
  if (s.areas.length) return s.areas.map((a) => ({ title: a.title, text: a.text }))
  return CALL_GROUPS.flatMap((g) => g.items.map((i) => ({ title: i.title, text: i.points.join(', ') })))
}

export default function ServicesExplorer({ heading = true, id = 'services', compact = false }) {
  const [active, setActive] = useState(0)
  const reduce = false
  const s = SERVICES[active]

  const focusTab = (i) => { setActive(i); document.getElementById(`svc-tab-${i}`)?.focus() }
  const onKey = (e) => {
    const n = SERVICES.length
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); focusTab((active + 1) % n) }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); focusTab((active - 1 + n) % n) }
    if (e.key === 'Home') focusTab(0)
    if (e.key === 'End') focusTab(n - 1)
  }

  const cardColors = [
    ['#DCEEFF', '#0878F9'],
    ['#FFE5DF', '#F05F42'],
    ['#DCF8E6', '#13A961'],
    ['#EAE2FF', '#7353E8'],
    ['#FFF0C9', '#C68B00'],
    ['#DCEBFF', '#1268D9'],
  ]

  if (compact) {
    return (
      <section id={id} className={cn('section relative isolate overflow-hidden bg-white', compact && '!pt-8 pb-8 lg:!pt-12 lg:pb-12')} aria-labelledby={heading ? 'services-title' : undefined} aria-label={heading ? undefined : 'Services'}>
        <div className="container-x">
          {heading && (
            <div className="mb-6 lg:mb-8">
              <SectionHeading label="What we do" id="services-title" title="Our services" size="lg">
                <p>Products and services that help your organisation work better.</p>
              </SectionHeading>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((sv, i) => {
                const [bg, color] = cardColors[i]
                const bullets = detailsFor(sv).slice(0, 2)
              return (
                <motion.article key={sv.slug} whileHover={reduce ? undefined : { y: -5 }} transition={{ duration: 0.25 }} className="group relative min-h-[164px] overflow-hidden rounded-xl p-4 shadow-sm ring-1 ring-black/[0.04]" style={{ backgroundColor: bg }}>
                  <div className="absolute -right-8 -top-8 z-0 size-32 rounded-full opacity-35 blur-2xl" style={{ backgroundColor: color }} />
                  <div aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 z-10 size-44 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,#000_42%,transparent_78%)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: bg, backgroundImage: "url('/service-illustrations-v2.png')", backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 100}%`, backgroundSize: '300% 200%', backgroundRepeat: 'no-repeat' }} />
                  <div className="relative z-20 flex h-full flex-col">
                    <div className="max-w-[58%]">
                    <h3 className="text-base font-black leading-tight tracking-tight text-ink">{sv.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-ink/70">{sv.tagline}</p>
                    <ul className="mt-2 space-y-0.5 text-[0.68rem] leading-snug text-ink/65">
                      {bullets.map((b) => <li key={b.title} className="flex gap-2"><span style={{ color }}>•</span><span>{b.title}</span></li>)}
                    </ul>
                    </div>
                    <Link to={`/services/${sv.slug}`} aria-label={`Explore ${sv.title}`} className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm transition group-hover:scale-110" style={{ color }}><ArrowUpRight className="size-3.5" /></Link>
                  </div>
                </motion.article>
              )
            })}
            <motion.article whileHover={reduce ? undefined : { y: -5 }} className="group relative min-h-[164px] overflow-hidden rounded-xl p-4 shadow-sm ring-1 ring-black/[0.04]" style={{ backgroundColor: cardColors[5][0] }}>
              <div className="absolute -right-8 -top-8 z-0 size-32 rounded-full opacity-35 blur-2xl" style={{ backgroundColor: cardColors[5][1] }} />
              <div aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 z-10 size-44 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,#000_42%,transparent_78%)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: cardColors[5][0], backgroundImage: "url('/service-illustrations-v2.png')", backgroundPosition: '100% 100%', backgroundSize: '300% 200%', backgroundRepeat: 'no-repeat' }} />
              <div className="relative z-20 flex h-full flex-col"><div className="max-w-[58%]"><h3 className="text-base font-black leading-tight tracking-tight text-ink">Industry-Specific Solutions</h3><p className="mt-1 text-xs leading-snug text-ink/70">Tailored solutions for every industry.</p><ul className="mt-2 space-y-0.5 text-[0.68rem] text-ink/65"><li>• Domain expertise</li><li>• Measurable outcomes</li></ul></div><Link to="/contact" aria-label="Discuss an industry-specific solution" className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-full bg-white/80 text-brand shadow-sm transition group-hover:scale-110" style={{ color: cardColors[5][1] }}><ArrowUpRight className="size-3.5" /></Link></div>
            </motion.article>
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
          <SectionHeading label="What we do" id="services-title" title="Five services. One connected approach.">
            <p>Choose a service to see how it works, what it covers and how it connects to the others.</p>
          </SectionHeading>
        )}

        <div className={cn('grid items-start lg:grid-cols-[178px_minmax(0,1fr)] lg:gap-7', heading && 'mt-8')}>
        {/* numbered tab bar with a moving indicator */}
        <div role="tablist" aria-label="Services" onKeyDown={onKey} className="-mx-5 flex snap-x justify-start gap-1 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 lg:mx-0 lg:flex lg:flex-col lg:items-center lg:overflow-visible lg:pt-16">
          {SERVICES.map((sv, i) => {
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
                className={cn('group relative flex min-w-[9.5rem] shrink-0 snap-start flex-col items-start justify-start rounded-xl px-3 pb-3 pt-2 text-left transition-colors lg:mb-1 lg:w-full lg:min-w-0 lg:shrink lg:items-center lg:rounded-lg lg:px-3 lg:py-2.5 lg:text-center', on && 'bg-soft font-black')}
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
              <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
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
                className={cn('relative grid items-center gap-4 overflow-hidden rounded-[1.5rem] border border-white bg-white/70 shadow-lift backdrop-blur-sm', compact ? 'mt-6 p-5 sm:p-6' : 'mt-5 p-4 pb-16 lg:grid-cols-12 lg:p-5 lg:pb-16')}
                style={{ backgroundImage: `radial-gradient(760px 340px at 90% 0%, ${s.accent}26, transparent 70%), radial-gradient(600px 320px at 0% 100%, ${s.accent2}22, transparent 70%)` }}
              >
                {!compact && <div className="relative lg:col-span-7">
                  <AnimatedIllustration name={s.slug} className="mx-auto h-auto max-h-[300px] w-full" />
                </div>}
                <ul className={cn(compact ? 'grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3' : 'lg:col-span-5', s.slug === 'call-centre' && 'grid grid-cols-2 gap-x-3')}>
                  {detailsFor(s).map((d, i) => (
                    <motion.li
                      key={d.title}
                      initial={reduce ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 22, delay: 0.2 + i * 0.06 }}
                      className={cn('flex gap-3 border-t border-line/80 py-2.5 first:border-t-0', s.slug === 'call-centre' && 'gap-2 py-2')}
                    >
                      <span aria-hidden className="mt-2 size-2.5 shrink-0 rounded-full" style={{ background: i % 2 ? s.accent2 : s.accent }} />
                      <div>
                        <h4 className="text-base font-extrabold leading-snug text-ink">{d.title}</h4>
                        {s.slug !== 'call-centre' && <p className="mt-0.5 line-clamp-2 text-sm leading-snug text-muted">{d.text}</p>}
                      </div>
                    </motion.li>
                  ))}
                </ul>
                {!compact && <Link to={`/services/${s.slug}`} className="group absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-brand-deep shadow-sm ring-1 ring-line hover:text-brand lg:right-5">
                  <span className="link-underline">Explore {s.title}</span>
                  <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  )
}
