import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Button from '../components/Button'
import AnimatedIllustration from '../components/AnimatedIllustration'
import { EASE } from '../utils/motion'

const lineV = {
  hidden: { y: '115%', rotate: 3 },
  show: (i) => ({ y: 0, rotate: 0, transition: { type: 'spring', stiffness: 90, damping: 18, delay: 0.15 + i * 0.1 } }),
}
const fadeV = {
  hidden: { opacity: 0, y: 20 },
  show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: EASE } }),
}

// Manual line breaks keep the gradient words on their own lines.
const LINES = [
  [{ t: 'Technology', g: 'grad-text' }, { t: ',' }],
  [{ t: 'Talent &' }],
  [{ t: 'Business' }],
  [{ t: 'Solutions —' }],
  [{ t: 'Connected.', g: 'grad-text' }],
]

const DOTS = [
  ['8%', '22%', 8, 'bg-cyan'], ['46%', '14%', 6, 'bg-purple'], ['92%', '38%', 8, 'bg-mint'],
  ['30%', '70%', 6, 'bg-brand'], ['62%', '88%', 8, 'bg-cyan'], ['4%', '82%', 6, 'bg-purple'],
]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yArt = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60])

  return (
    <section ref={ref} className="bg-hero relative isolate overflow-hidden pb-8 pt-16 sm:pb-10 sm:pt-20 lg:flex lg:min-h-0 lg:items-center" aria-labelledby="hero-title">
      {/* dynamic background: grid, glows, curves, floating dots */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_75%_30%,#000,transparent)]" />
      <motion.div aria-hidden style={{ y: yBlob }} className="pointer-events-none absolute -right-32 -top-24 -z-10 size-[340px] rounded-full bg-brand/20 blur-[90px] sm:-right-40 sm:-top-32 sm:size-[620px] sm:bg-brand/25 sm:blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[460px] rounded-full bg-purple/15 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute left-1/3 top-1/2 -z-10 size-[380px] rounded-full bg-cyan/20 blur-[100px]" />
      <svg aria-hidden viewBox="0 0 1440 800" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block">
        <motion.path d="M-40 640C260 520 420 760 760 620S1160 420 1500 520" fill="none" stroke="#19C6E8" strokeOpacity=".45" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, delay: 0.6, ease: 'easeInOut' }} />
        <motion.path d="M-40 200C200 120 380 260 640 160" fill="none" stroke="#7C5CFC" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }} />
      </svg>
      {DOTS.map(([l, t, s, c], i) => (
        <span key={i} aria-hidden className={`float-dot pointer-events-none absolute -z-10 hidden rounded-full sm:block ${c}`} style={{ left: l, top: t, width: s, height: s, animationDelay: `${i * 0.9}s`, opacity: 0.7 }} />
      ))}

      <motion.div initial="hidden" animate="show" className="container-x w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="relative z-10 lg:col-span-6">
            <motion.p variants={fadeV} custom={0.05} className="inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.22em] text-brand">
              <span aria-hidden className="h-[3px] w-9 rounded-full bg-gradient-to-r from-brand to-cyan" />
              SANDHA &amp; COMPANY
            </motion.p>

            <h1 id="hero-title" className="h-hero mt-6 text-ink">
              <span className="sr-only">Technology, Talent &amp; Business Solutions — Connected.</span>
              <span aria-hidden="true">
                {LINES.map((line, i) => (
                  <span key={i} className="block overflow-hidden pb-[0.1em]">
                    <motion.span variants={lineV} custom={i} className="block origin-left">
                      {line.map((seg, j) => (seg.g ? <span key={j} className={seg.g}>{seg.t}</span> : <span key={j}>{seg.t}</span>))}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            <motion.p variants={fadeV} custom={0.85} className="lead mt-7 max-w-[46ch]">
              Delivering technology, consultancy, workforce and customer operations solutions designed around your business needs.
            </motion.p>
            <motion.div variants={fadeV} custom={1} className="mt-9 flex flex-wrap gap-3">
              <Button to="/services" magnetic className="w-full sm:w-auto">Explore Our Services</Button>
              <Button to="/contact" variant="secondary" magnetic className="w-full sm:w-auto">Talk to Our Experts</Button>
            </motion.div>
          </div>

          <motion.div style={{ y: yArt }} className="bleed-r relative lg:col-span-6 lg:-ml-[6%]">
            <AnimatedIllustration name="hero" className="h-auto w-full" />
          </motion.div>
        </div>
      </motion.div>
      {/* soft wave into the next section */}
      <svg aria-hidden viewBox="0 0 1440 90" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-[-1px] -z-10 h-[46px] w-full sm:h-[70px]">
        <path d="M0 50C240 100 480 0 760 40S1200 90 1440 30V90H0Z" fill="#fff" />
      </svg>
    </section>
  )
}
