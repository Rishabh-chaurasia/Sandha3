import { motion } from 'framer-motion'
import { Zap, MapPin, UsersRound } from 'lucide-react'

export default function ClientsImpact({ className = '' }) {
  return <div role="img" aria-label="Sandha utility experience: 11 DISCOMs, more than 20 million customers and nationwide field operations" className={`${className} relative isolate min-h-[380px] overflow-hidden rounded-[2rem] bg-[#071f4a] p-6 text-white shadow-[0_24px_60px_-20px_#1c4d99] sm:min-h-[440px] sm:p-8`}>
    <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#75cfff 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
    <div aria-hidden className="absolute -right-20 top-8 size-64 rounded-full bg-cyan/30 blur-3xl" />
    <p className="relative text-xs font-black uppercase tracking-[.22em] text-cyan">Essential service reach</p>
    <div className="relative mt-7 flex items-end gap-3">
      <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-[clamp(7rem,18vw,10rem)] font-black leading-[.75] tracking-[-.09em] text-white">11</motion.span>
      <span className="pb-1 text-lg font-extrabold leading-tight text-[#b6d8ff]">DISCOMs<br />nationwide</span>
    </div>
    <motion.div animate={{ scaleX: [0, 1, 1] }} transition={{ duration: 1.5 }} aria-hidden className="relative my-7 h-1 origin-left rounded-full bg-gradient-to-r from-cyan via-mint to-purple" />
    <div className="relative grid grid-cols-2 gap-3">
      <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"><UsersRound className="size-6 text-[#55e2c8]" /><strong className="mt-3 block text-3xl font-black">20m+</strong><span className="text-xs font-semibold text-white/70">Customers served</span></div>
      <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"><MapPin className="size-6 text-[#ffce73]" /><strong className="mt-3 block text-3xl font-black">2k+</strong><span className="text-xs font-semibold text-white/70">FRT specialists</span></div>
    </div>
    <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 4.5, repeat: Infinity }} aria-hidden className="absolute right-5 top-5 grid size-14 place-items-center rounded-full border border-white/20 bg-white/10 text-cyan"><Zap className="size-7" /></motion.div>
  </div>
}
