import { motion } from 'framer-motion'
import { Headset, RadioTower, Code2, UsersRound, Server, Database, Network } from 'lucide-react'

const services = [
  ['Contact centre', Headset, '#f05f42', 76, 148], ['Field operations', RadioTower, '#0f9e93', 286, 54],
  ['Technology', Code2, '#0878f9', 510, 130], ['Manpower', UsersRound, '#7456e8', 528, 335],
  ['Infrastructure', Server, '#d08b20', 360, 430], ['Back office', Database, '#c87d26', 132, 385], ['Integration', Network, '#4266c9', 58, 266],
]

export default function HomeServiceMap({ className = '' }) {
  return <div className={`relative aspect-[1.15] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#eef8ff] via-[#f7f5ff] to-[#e8fbf6] p-5 shadow-lift ${className}`} role="img" aria-label="Connected map of Sandha and Company services">
    <div aria-hidden className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(#0878f933 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
    <svg aria-hidden viewBox="0 0 600 500" className="absolute inset-0 size-full">
      {services.map(([, , color, x, y], i) => <motion.path key={i} d={`M300 245 Q${(300 + x) / 2} ${(245 + y) / 2 - 55} ${x} ${y}`} fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: .8, delay: i * .08 }} />)}
      <circle cx="300" cy="245" r="104" fill="#0878f914" stroke="#0878f944" strokeWidth="2" />
      <circle cx="300" cy="245" r="72" fill="#fff" stroke="#dceeff" strokeWidth="2" />
    </svg>
    <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-center text-white shadow-xl"><span className="text-[10px] font-black uppercase tracking-[.18em]">One connected</span><span className="mt-1 text-lg font-black leading-none">service<br />partner</span></div>
    {services.map(([label, Icon, color, x, y], i) => <motion.div key={label} initial={{ opacity: 0, scale: .6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: .15 + i * .07 }} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x / 6}%`, top: `${y / 5}%` }}><div className="flex items-center gap-2 rounded-full border border-white bg-white/90 py-1.5 pl-1.5 pr-3 shadow-sm backdrop-blur"><span className="grid size-7 place-items-center rounded-full text-white" style={{ backgroundColor: color }}><Icon className="size-3.5" /></span><span className="whitespace-nowrap text-[10px] font-extrabold text-ink sm:text-xs">{label}</span></div></motion.div>)}
  </div>
}
