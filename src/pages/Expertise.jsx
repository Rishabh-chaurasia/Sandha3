import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { SERVICES, CALL_GROUPS } from '../data/services'

// Call centre capabilities come from the voice / non-voice groups.
function areasFor(s) {
  if (s.areas.length) return s.areas.map((a) => ({ title: a.title, text: a.text }))
  return CALL_GROUPS.flatMap((g) => g.items.map((i) => ({ title: i.title, text: i.points.join(', ') })))
}

export default function Expertise() {
  const reduce = false
  return (
    <>
      <Seo
        title="Expertise | Sandha & Company"
        description="Sandha & Company's utility field operations, contact centre, HRO and utility software capabilities."
        path="/expertise"
      />
      <PageHero
        tone="lines"
        eyebrow="EXPERTISE"
        title="Every capability, in one place."
        lead="Explore the four service areas described in the 2025 company profile."
        crumbs={[{ label: 'Expertise' }]}
      />

      <section className="section bg-white" aria-label="Capabilities by service">
        <div className="container-x">
          {SERVICES.map((s, idx) => (
            <Reveal key={s.slug} className="grid gap-6 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <span className="text-sm font-extrabold tabular-nums" style={{ color: s.accent }}>{s.n}</span>
                <h2 className="h-sub mt-1 text-ink">{s.title}</h2>
                <span aria-hidden className="mt-4 block h-1 w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${s.accent}, ${s.accent2})` }} />
                <Link to={`/services/${s.slug}`} className="group mt-5 inline-flex items-center gap-1.5 font-extrabold text-brand-deep hover:text-brand">
                  <span className="link-underline">View service</span>
                  <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
                {areasFor(s).map((a, i) => (
                  <motion.li
                    key={a.title}
                    whileHover={reduce ? undefined : { x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="flex gap-4 border-t border-line py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
                  >
                    <span aria-hidden className="mt-2 size-2.5 shrink-0 rounded-full" style={{ background: i % 2 ? s.accent2 : s.accent }} />
                    <div>
                      <h3 className="text-lg font-extrabold text-ink">{a.title}</h3>
                      <p className="mt-1 text-[0.98rem] text-muted">{a.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Connected capabilities for complex requirements" text="Share the intended outcome and our team will recommend the right combination of services." />
    </>
  )
}
