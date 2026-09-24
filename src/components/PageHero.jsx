import { useState } from 'react'
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

export default function PageHero({ eyebrow, title, lead, crumbs = [], illustration, illustrationClassName = '', sectionClassName = '', tone = 'ultra', children, wide = false, photo, photoAlt = '', photoClassName = '', backgroundPhoto }) {
  const reduce = false
  const [photoFailed, setPhotoFailed] = useState(false)
  const showPhoto = photo && !photoFailed
  return (
    <section className={cn('relative isolate overflow-hidden pb-14 pt-[120px] sm:pb-20 sm:pt-[148px]', TONES[tone], sectionClassName)}>
      {backgroundPhoto && <>
        <div aria-hidden className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundPhoto})` }} />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(246,250,255,.84)_0%,rgba(246,250,255,.70)_34%,rgba(246,250,255,.30)_64%,rgba(246,250,255,.08)_100%)]" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-transparent to-white/15" />
      </>}
      {(tone === 'lines' || tone === 'plain') && <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_60%_70%_at_80%_20%,#000,transparent)]" />}
      <div className={cn('container-x grid grid-cols-1 items-center gap-10', illustration && !wide ? 'lg:grid-cols-12 lg:gap-8' : '')}>
        <div className={cn('min-w-0', illustration && !wide ? 'lg:col-span-6' : 'max-w-4xl')}>
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
            className="mt-4 text-[clamp(2.125rem,1.1rem+3vw,3.7rem)] leading-[1.1] tracking-[-0.025em] text-ink text-balance"
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
            className={wide ? 'mt-6 w-full min-w-0' : 'w-full min-w-0 lg:col-span-6'}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            {showPhoto ? (
              <figure className={cn('relative mx-auto aspect-[4/3] w-full max-w-[640px] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white/70', photoClassName)}>
                <img src={photo} alt={photoAlt} onError={() => setPhotoFailed(true)} className="size-full object-cover" fetchpriority="high" />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/35 to-transparent" />
              </figure>
            ) : (
              <AnimatedIllustration name={illustration} className={cn('h-auto w-full', illustrationClassName)} />
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
