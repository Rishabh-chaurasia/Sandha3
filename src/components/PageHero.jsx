import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import AnimatedIllustration from './AnimatedIllustration'
import { EASE, cn } from '../utils/motion'

// Each page hero gets its own background treatment. Never dark.
const TONES = {
  plain: 'bg-hero',
  ultra: 'bg-mesh',
  fade: 'bg-w2b',
  cyan: 'bg-w2c',
  purple: 'bg-w2p',
  dots: 'bg-dots',
  lines: 'bg-hero',
  rings: 'bg-w2p',
  soft: 'bg-w2b',
}

export default function PageHero({ eyebrow, title, lead, crumbs = [], illustration, illustrationClassName = '', sectionClassName = '', tone = 'ultra', children, wide = false }) {
  const reduce = false
  return (
    <section className={cn('relative isolate overflow-hidden pb-14 pt-[120px] sm:pb-20 sm:pt-[148px]', TONES[tone], sectionClassName)}>
      {(tone === 'lines' || tone === 'plain') && <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_60%_70%_at_80%_20%,#000,transparent)]" />}
      <div className={cn('container-x grid items-center gap-10', illustration && !wide ? 'lg:grid-cols-12 lg:gap-8' : '')}>
        <div className={illustration && !wide ? 'lg:col-span-6' : 'max-w-4xl'}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm font-semibold text-muted">
              <li><Link to="/" className="hover:text-brand">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1">
                  <ChevronRight aria-hidden className="size-4 text-brand/40" />
                  {c.to ? <Link to={c.to} className="hover:text-brand">{c.label}</Link> : <span aria-current="page" className="text-brand-deep">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>

          {eyebrow && <p className="mt-7 text-sm font-extrabold tracking-[0.2em] text-brand">{eyebrow}</p>}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mt-4 text-[clamp(2.125rem,1.1rem+3.2vw,4rem)] leading-[1.03] tracking-[-0.038em] text-ink text-balance"
          >
            {title}
          </motion.h1>
          {lead && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="lead mt-6 max-w-[56ch]"
            >
              {lead}
            </motion.p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>

        {illustration && (
          <motion.div
            className={wide ? 'mt-6 w-full' : 'lg:col-span-6'}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            <AnimatedIllustration name={illustration} className={cn('h-auto w-full', illustrationClassName)} />
          </motion.div>
        )}
      </div>
    </section>
  )
}
