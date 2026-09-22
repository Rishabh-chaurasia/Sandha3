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
