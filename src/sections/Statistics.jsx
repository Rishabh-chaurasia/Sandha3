import { motion, useReducedMotion } from 'framer-motion'
import Counter from '../components/Counter'
import SectionHeading from '../components/SectionHeading'
import { STATS } from '../data/company'

const STYLE = [
  { pos: 'lg:left-[2%] lg:top-[6%] lg:size-[300px]', color: '#0878F9', big: true, dot: '#19C6E8' },
  { pos: 'lg:left-[58%] lg:top-[0%] lg:size-[220px]', color: '#5B4CE6', dot: '#FF6B9A' },
  { pos: 'lg:left-[64%] lg:top-[46%] lg:size-[190px]', color: '#0FB48F', dot: '#FFC857' },
  { pos: 'lg:left-[30%] lg:top-[64%] lg:size-[210px]', color: '#F0623C', dot: '#5B4CE6' },
]
const ORDER = [0, 1, 3, 2] // 156+, 80+, 15, 20 arranged around the cluster

function Bubble({ s, st, i }) {
  const reduce = false
  return (
    <motion.div
      className={`relative grid aspect-square place-content-center rounded-full bg-white text-center shadow-bubble lg:absolute ${st.pos}`}
      initial={reduce ? false : { opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.1 + i * 0.12 }}
    >
      <motion.div animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }} className="px-2">
        <p className={`font-display font-extrabold leading-none tracking-[-0.04em] ${st.big ? 'text-[clamp(3.25rem,9vw,5.5rem)]' : 'text-[clamp(2.5rem,7vw,3.75rem)]'}`} style={{ color: st.color }}>
          <Counter value={s.value} suffix={s.suffix} />
        </p>
        <p className="mt-2 text-[0.95rem] font-extrabold leading-tight text-ink">{s.label}{s.unit && <span className="font-semibold text-muted"> ({s.unit})</span>}</p>
      </motion.div>
      <span aria-hidden className="absolute -right-1 top-[14%] size-4 rounded-full" style={{ background: st.dot }} />
    </motion.div>
  )
}

export default function Statistics() {
  return (
    <section className="section relative isolate overflow-hidden bg-white" aria-labelledby="stats-title">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 -z-10 size-[520px] rounded-full bg-lav" />
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading label="By the numbers" id="stats-title" title="Experience you can count on.">
              <p>Figures published by Sandha &amp; Company since operations began in December 2008.</p>
            </SectionHeading>
          </div>
          <div className="lg:col-span-7">
            <div className="mx-auto grid max-w-[520px] grid-cols-2 gap-4 sm:gap-6 lg:relative lg:block lg:h-[520px] lg:max-w-none">
              {ORDER.map((idx, i) => <Bubble key={STATS[idx].label} s={STATS[idx]} st={STYLE[i]} i={i} />)}
              <span aria-hidden className="absolute left-0 top-[40%] hidden size-5 rounded-full bg-cyan lg:block" />
              <span aria-hidden className="absolute right-[6%] top-[86%] hidden size-3 rounded-full bg-mint lg:block" />
              <span aria-hidden className="absolute left-[54%] top-[38%] hidden size-3 rounded-full bg-pink lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
