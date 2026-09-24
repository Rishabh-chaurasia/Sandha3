import { motion } from 'framer-motion'

export default function FounderPortraitHero({ className = '' }) {
  return <div role="img" aria-label="Portrait of Sandeep Sandha, Founder and CEO" className={`${className} relative isolate mx-auto flex min-h-[420px] max-w-[510px] items-end justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dfeaff] via-[#e9e4ff] to-[#cceeff]`}>
    <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-[40%] size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-brand/40" />
    <div aria-hidden className="absolute left-1/2 top-[40%] size-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-sm" />
    <img src="/founder-sandeep-sandha.png" alt="" className="relative z-10 h-[420px] w-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(26,54,91,.25)]" />
    <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#132d5f]/90 via-[#132d5f]/45 to-transparent p-6 pt-20 text-white">
      <span className="text-xs font-black uppercase tracking-[.2em] text-cyan">Founder &amp; CEO</span>
      <span className="mt-1 block text-2xl font-black">Sandeep Sandha</span>
    </div>
  </div>
}
