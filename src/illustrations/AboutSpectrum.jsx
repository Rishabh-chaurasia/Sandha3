import { motion } from 'framer-motion'
import { BadgeCheck, Handshake, Sparkles, Zap } from 'lucide-react'

const steps = [
  { title: 'Clients first', detail: 'We build every team around our client’s service commitments.', Icon: BadgeCheck, color: '#0878f9', tint: '#e2f3ff' },
  { title: 'Collaboration & growth', detail: 'Respectful relationships help teams and clients grow.', Icon: Handshake, color: '#6857d8', tint: '#eee9ff' },
  { title: 'Innovation at the core', detail: 'Technology improves manpower solutions and service delivery.', Icon: Sparkles, color: '#0caa96', tint: '#e0f8f1' },
  { title: 'Agility & excellence', detail: 'We adapt quickly, deliver efficiently and keep improving.', Icon: Zap, color: '#e97547', tint: '#fff0e8' },
]

export default function AboutSpectrum({ className = '' }) {
  return <div className={`${className} relative overflow-hidden rounded-[1.5rem] border border-[#d8e5f5] bg-gradient-to-br from-white via-[#f8fbff] to-[#f6f1ff] p-4 shadow-lift sm:p-5`}>
    <div className="relative"><p className="text-xs font-black uppercase tracking-[.2em] text-brand">What guides us</p><h2 className="mt-2 text-[clamp(1.35rem,2.5vw,2rem)] leading-tight text-ink">Four values. One purpose.</h2></div>
    <ol className="relative mt-5 grid gap-2.5 sm:grid-cols-2">
      {steps.map(({ title, detail, Icon, color, tint }, i) => <motion.li key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} animate={{ y: [0, -3, 0] }} whileHover={{ y: -7, scale: 1.015 }} viewport={{ once: true }} transition={{ delay: i * .1, y: { duration: 3.2 + i * .2, repeat: Infinity, ease: 'easeInOut' } }} className="relative min-h-[132px] rounded-xl border p-3 shadow-sm" style={{ backgroundColor: tint, borderColor: `${color}35` }}>
        <div className="flex items-start justify-between"><span className="grid size-9 place-items-center rounded-lg text-white" style={{ backgroundColor: color }}><Icon className="size-4" /></span><span className="text-[10px] font-black text-muted">0{i + 1}</span></div>
        <p className="mt-2 font-display text-base font-bold text-ink">{title}</p><p className="text-xs leading-snug text-muted">{detail}</p>
      </motion.li>)}
    </ol>
    <p className="relative mt-4 border-t border-line pt-3 text-xs font-semibold text-muted">Our direction shapes every service we deliver.</p>
  </div>
}
