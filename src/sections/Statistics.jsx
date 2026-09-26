import { motion } from 'framer-motion'
import Counter from '../components/Counter'
import SectionHeading from '../components/SectionHeading'
import { STATS } from '../data/company'
import ClientsMarquee from './ClientsMarquee'

const STYLE = [
  { color: '#0878F9', surface: '#edf6ff' },
  { color: '#5B4CE6', surface: '#f3f0ff' },
  { color: '#0B9D83', surface: '#eafaf4' },
  { color: '#DB6348', surface: '#fff3ed' },
]

export default function Statistics() {
  return (
    <section className="section relative isolate overflow-hidden bg-white !py-8 md:!py-9 lg:!py-10" aria-labelledby="stats-title">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 -z-10 size-[520px] rounded-full bg-lav" />
      <div className="container-x">
        <div className="max-w-2xl">
            <SectionHeading label="Utility experience" id="stats-title" title="Essential services, delivered at scale.">
              <p>Field teams, vehicles and call centres serving electricity distribution companies across India.</p>
            </SectionHeading>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Company scale">
          {STATS.slice(0, 4).map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .09 }} className="flex min-h-[104px] flex-col rounded-2xl border border-line/70 p-3 shadow-sm sm:min-h-[118px] sm:p-3.5" style={{ backgroundColor: STYLE[i].surface }}>
              <span className="mt-auto font-display text-[clamp(2.6rem,4vw,3.6rem)] font-bold leading-none" style={{ color: STYLE[i].color }}><Counter value={stat.value} suffix={stat.suffix} /></span>
              <span className="mt-2.5 max-w-[18ch] border-t border-ink/10 pt-2.5 text-sm font-semibold leading-snug text-ink">{stat.label}</span>
            </motion.div>
          ))}
        </div>
        <ClientsMarquee heading={false} />
      </div>
    </section>
  )
}
