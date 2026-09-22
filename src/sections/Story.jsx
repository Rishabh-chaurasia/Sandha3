import { motion, useReducedMotion } from 'framer-motion'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import { COMPANY } from '../data/company'
import { EASE } from '../utils/motion'
import { Spin } from '../illustrations/primitives'

function Year() {
  const reduce = false
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px]">
      <svg viewBox="0 0 400 400" aria-hidden className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="yr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0878F9" /><stop offset=".55" stopColor="#19C6E8" /><stop offset="1" stopColor="#7C5CFC" /></linearGradient>
          <radialGradient id="yg"><stop offset="0" stopColor="#19C6E8" stopOpacity=".35" /><stop offset="1" stopColor="#19C6E8" stopOpacity="0" /></radialGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="url(#yg)" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#D9E8F7" strokeWidth="1.6" />
        <Spin dur={50}><circle cx="200" cy="200" r="176" fill="none" stroke="url(#yr)" strokeWidth="2.5" strokeDasharray="4 12" strokeLinecap="round" /></Spin>
        <Spin dur={80} reverse><circle cx="200" cy="200" r="122" fill="none" stroke="#7C5CFC" strokeOpacity=".5" strokeWidth="1.6" strokeDasharray="1 10" strokeLinecap="round" /></Spin>
        <motion.g animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="24" r="9" fill="#28D7B2" stroke="#fff" strokeWidth="3" />
        </motion.g>
        <motion.g animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="78" r="7" fill="#7C5CFC" stroke="#fff" strokeWidth="3" />
        </motion.g>
      </svg>
      <motion.div
        className="absolute inset-0 grid place-content-center text-center"
        initial={reduce ? false : { opacity: 0, scale: 0.86 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={reduce ? undefined : { scale: [1, 1.025, 1] }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ opacity: { duration: 0.8, ease: EASE }, scale: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <p className="text-sm font-extrabold tracking-[0.2em] text-brand">ESTABLISHED</p>
        <p className="grad-text font-display text-[clamp(4.5rem,12vw,7.5rem)] font-extrabold leading-none tracking-[-0.06em]">
          <Counter value={2008} from={1990} duration={2.2} />
        </p>
        <p className="mt-1 text-sm font-bold text-muted">{COMPANY.started}</p>
      </motion.div>
    </div>
  )
}

export default function Story({ id = 'story', variant = 'home' }) {
  const detail = variant === 'detail'
  if (detail) {
    return (
      <section id={id} className="section bg-white py-10 lg:py-16" aria-labelledby={`${id}-title`}>
        <div className="container-x">
          <div className="grid items-stretch gap-6 lg:grid-cols-12">
            <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-deep via-electric to-purple p-7 text-white sm:p-10 lg:col-span-5">
              <div aria-hidden className="absolute -right-20 -top-20 size-64 rounded-full border border-white/20" />
              <div aria-hidden className="absolute -bottom-24 -left-16 size-60 rounded-full bg-cyan/20 blur-2xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-white/75">Our foundation</p>
                  <h2 id={`${id}-title`} className="mt-5 max-w-[12ch] text-[clamp(2.2rem,4vw,4rem)] leading-[.98] tracking-[-.05em]">Built for dependable service.</h2>
                  <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-white/80">A clear operating philosophy has guided Sandha &amp; Company from its first day of operations.</p>
                </div>
                <div className="mt-10 flex items-end justify-between border-t border-white/25 pt-5">
                  <div><p className="text-5xl font-black tracking-[-.06em]">2008</p><p className="text-sm font-semibold text-white/70">Established in December</p></div>
                  <span className="grid size-14 place-items-center rounded-full bg-white/15 text-2xl font-black">S&amp;C</span>
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal className="rounded-[2rem] border border-line bg-ultra p-7 sm:p-10">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand">How we work</p>
                <h3 className="mt-3 max-w-[18ch] text-[clamp(1.8rem,3vw,3rem)] leading-tight tracking-[-.04em] text-ink">Practical thinking, responsible delivery.</h3>
                <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted">We bring together people, processes and technology to make essential services more reliable and responsive.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ['01', 'Understand first', 'We begin with the client need and the outcome that matters.'],
                    ['02', 'Build the right capability', 'Our teams combine specialist skills with practical technology.'],
                    ['03', 'Deliver with care', 'Clear ownership and dependable service shape every engagement.'],
                    ['04', 'Grow through trust', 'Long-term relationships guide how we improve and evolve.'],
                  ].map(([n, title, text]) => (
                    <div key={n} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-line/70">
                      <span className="font-display text-sm font-black text-brand">{n}</span>
                      <h4 className="mt-2 text-lg font-extrabold text-ink">{title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.12} className="mt-6 border-l-4 border-cyan pl-5">
                <p className="max-w-[60ch] text-lg font-bold text-ink/85">{COMPANY.philosophy}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section id={id} className={`section ${detail ? 'bg-ink text-white' : 'bg-w2p'} py-8 lg:py-12`} aria-labelledby={`${id}-title`}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.14em] text-brand">
              <span aria-hidden className="h-[3px] w-9 rounded-full bg-gradient-to-r from-brand to-cyan" />
              {detail ? 'Our foundation' : 'About us'}
            </p>
            <h2 id={`${id}-title`} className={`text-[clamp(2rem,1rem+3vw,3.6rem)] leading-[1.02] tracking-[-0.04em] ${detail ? 'text-white' : 'text-ink'}`}>
              {detail ? 'A practical foundation for dependable service.' : 'Built around people.'}
              {!detail && <>
              <br />
              <span className="grad-text">Powered by technology.</span>
              </>}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid gap-6 sm:grid-cols-2">
            <p className={`lead ${detail ? 'text-white/70' : ''}`}>We bring together people, processes and technology to make essential services more reliable and responsive.</p>
            <p className={`lead ${detail ? 'text-white/70' : ''}`}>
              Since {COMPANY.started}, our focus has remained practical: understand the need, build the right capability and deliver with care.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 border-l-4 border-cyan pl-5">
            <p className={`max-w-[52ch] text-lg font-bold ${detail ? 'text-white/85' : 'text-ink/85'}`}>{COMPANY.philosophy}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-5"><Year /></Reveal>
      </div>
    </section>
  )
}
