import { motion } from 'framer-motion'
import Counter from '../components/Counter'
import { STATS } from '../data/company'

const COLORS = ['#0878F9', '#5B4CE6', '#0B9D83', '#DB6348']

export default function FieldCapacityMetrics() {
  return (
    <div className="container-x mt-5 sm:mt-6 lg:mt-7" aria-label="Field capacity figures">
        <p className="mb-4 text-sm font-semibold text-muted sm:mb-5">Vehicles, lifting equipment and experienced teams support reliable utility service delivery.</p>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4" aria-label="Additional company figures">
          {STATS.slice(4).map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="relative flex min-h-[112px] flex-col justify-between overflow-hidden rounded-xl border border-line bg-white/75 p-3 shadow-sm transition-shadow hover:shadow-lift sm:min-h-[122px] sm:p-4">
              <span aria-hidden className="absolute -right-8 -top-8 size-20 rounded-full opacity-10" style={{ backgroundColor: COLORS[i] }} />
              <span className="text-[10px] font-black tracking-[.16em] text-muted">0{i + 1}</span>
              <span className="font-display text-[clamp(1.9rem,2.5vw,2.6rem)] font-extrabold leading-none" style={{ color: COLORS[i] }}><Counter value={stat.value} suffix={stat.suffix} /></span>
              <span className="max-w-[20ch] text-xs font-bold leading-snug text-ink sm:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </div>
    </div>
  )
}
