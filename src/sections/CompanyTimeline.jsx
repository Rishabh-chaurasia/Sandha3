import { motion, useReducedMotion } from 'framer-motion'
import { UsersRound, Cpu, Truck, Headset, Droplets } from 'lucide-react'
import Reveal from '../components/Reveal'

const milestones = [
  { label: 'December 2008', title: 'Operations begin', text: 'Sandha & Company formally started operations, building its work around client needs and trained people.', Icon: UsersRound, color: '#0878f9', tint: '#e6f3ff' },
  { label: 'Capability building', title: 'People and technology', text: 'Trained manpower, in-house software and more than 15 years of utility IT experience.', Icon: Cpu, color: '#7456e8', tint: '#f0ecff' },
  { label: 'Utility operations', title: 'Field response at scale', text: 'FRT teams, line maintenance and support services connect consumer complaints to work in the field.', Icon: Truck, color: '#0f9e93', tint: '#e1f8f2' },
  { label: 'Today', title: 'Nationwide utility work', text: 'FRT and maintenance services for 11 DISCOMs, serving more than 20 million consumers.', Icon: Headset, color: '#e38630', tint: '#fff1dd' },
  { label: 'Broader scope', title: 'Water utility services', text: 'Connections, metering, billing, consumer support, repair and maintenance for water utilities.', Icon: Droplets, color: '#e2607e', tint: '#ffe9ef' },
]

export default function CompanyTimeline() {
  const reduce = useReducedMotion()
  return <section className="section bg-gradient-to-br from-[#eff7ff] via-white to-[#e8faf4] !py-12 lg:!py-16" aria-labelledby="company-timeline-title">
    <div className="container-x">
      <Reveal><p className="flex items-center gap-3 text-xs font-black uppercase tracking-[.2em] text-brand"><span aria-hidden className="h-0.5 w-9 rounded-full bg-gradient-to-r from-brand to-cyan" />Our journey</p><h2 id="company-timeline-title" className="mt-3 h-sub text-ink">From skilled teams to connected utility services.</h2><p className="mt-3 max-w-[65ch] text-muted">How Sandha &amp; Company has grown since operations began in December 2008.</p></Reveal>
      <div className="relative mt-10">
        <motion.span aria-hidden className="absolute bottom-5 left-[19px] top-5 w-0.5 origin-top bg-gradient-to-b from-brand via-cyan to-mint lg:hidden" initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
        <svg aria-hidden viewBox="0 0 100 1000" preserveAspectRatio="none" className="pointer-events-none absolute inset-y-0 left-1/2 hidden h-full w-[28%] -translate-x-1/2 lg:block">
          <motion.path d="M50 12 C8 70 92 135 50 210 S8 350 50 410 S92 545 50 610 S8 760 50 830 S92 920 50 988" fill="none" stroke="#21b9e6" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="2 5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: 2.2, ease: 'easeInOut' }} />
        </svg>
        <ol className="space-y-7 lg:space-y-12">
          {milestones.map(({ label, title, text, Icon, color, tint }, i) => <motion.li key={title} initial={reduce ? false : { opacity: 0, x: i % 2 ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .1 }} className={`relative pl-14 lg:flex lg:w-1/2 lg:pl-0 ${i % 2 ? 'lg:ml-auto lg:pl-10' : 'lg:pr-10'}`}>
            <span aria-hidden className={`absolute left-0 top-5 grid size-10 place-items-center rounded-full text-white ring-4 ring-white ${i % 2 ? 'lg:-left-5' : 'lg:left-auto lg:-right-5'}`} style={{ backgroundColor: color }}><Icon className="size-5" /></span>
            <motion.div animate={reduce ? undefined : { y: [0, -4, 0] }} whileHover={{ y: -8, scale: 1.01 }} transition={{ y: { duration: 3.6 + i * .2, repeat: Infinity, ease: 'easeInOut', delay: i * .2 } }} className="w-full rounded-2xl border p-5 shadow-sm" style={{ backgroundColor: tint, borderColor: `${color}35` }}><span className="text-xs font-black uppercase tracking-[.16em]" style={{ color }}>{label}</span><h3 className="mt-1 font-display text-xl font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{text}</p></motion.div>
          </motion.li>)}
        </ol>
      </div>
    </div>
  </section>
}
