import { motion } from 'framer-motion'
import { Headset, Truck, Code2, UsersRound, Droplets } from 'lucide-react'

const services = [
  { name: 'Manpower & staffing', Icon: UsersRound, color: '#614ede' },
  { name: 'Information technology', Icon: Code2, color: '#0878f9' },
  { name: 'FRT & line maintenance', Icon: Truck, color: '#0b9e94' },
  { name: 'Call centre', Icon: Headset, color: '#ed7356' },
  { name: 'Water utility', Icon: Droplets, color: '#159cbd' },
]

export default function ServicesConstellation({ className = '' }) {
  return <div role="img" aria-label="Five connected Sandha and Company services" className={`${className} relative isolate flex min-h-[350px] items-end overflow-hidden sm:min-h-[420px]`}>
    <div className="ml-auto grid w-full max-w-[34rem] grid-cols-2 gap-2 pb-1 sm:grid-cols-3 sm:gap-3">
      {services.map(({ name, Icon, color }, i) => <motion.div key={name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -3 }} className="flex min-h-11 items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-2.5 py-2 shadow-sm backdrop-blur-sm sm:px-3">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg text-white" style={{ backgroundColor: color }}><Icon className="size-4" /></span><span className="text-[10px] font-bold leading-tight text-ink sm:text-xs">{name}</span>
      </motion.div>)}
    </div>
  </div>
}
