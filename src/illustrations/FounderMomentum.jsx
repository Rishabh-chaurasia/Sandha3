import { motion } from 'framer-motion'
import { Compass, UsersRound, Wrench, TrendingUp } from 'lucide-react'

const cards = [
  [Compass, 'Direction', 'Set a clear course', '#0878f9', '#eaf3ff'],
  [UsersRound, 'People', 'Build capable teams', '#0eaa91', '#e7f8f2'],
  [Wrench, 'Delivery', 'Solve practical needs', '#e78a37', '#fff2df'],
  [TrendingUp, 'Progress', 'Learn and improve', '#7456e8', '#f0ecff'],
]

export default function FounderMomentum({ className = '' }) {
  return <div className={`relative aspect-[1.15] overflow-hidden rounded-[2rem] border border-[#d9e7f3] bg-gradient-to-br from-[#eaf7ff] via-[#f4efff] to-[#e5faf2] p-5 shadow-lift sm:p-7 ${className}`} role="img" aria-label="Leadership principles of direction, people, delivery and progress">
    <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-[#c7e9ff] blur-2xl" />
    <div aria-hidden className="absolute -bottom-20 -left-16 size-56 rounded-full bg-[#f7d9ff] blur-2xl" />
    <div className="relative flex items-end justify-between gap-3"><div><p className="text-[10px] font-black uppercase tracking-[.2em] text-brand">Leadership in practice</p><h2 className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">Principles that move work forward</h2></div><span className="mb-1 text-xs font-bold text-muted">01—04</span></div>
    <svg aria-hidden viewBox="0 0 600 330" className="absolute inset-x-0 bottom-0 h-[72%] w-full"><motion.path d="M75 165C155 165 156 70 235 70S314 250 390 250 460 115 530 115" fill="none" stroke="#9bc8f0" strokeWidth="4" strokeDasharray="5 10" strokeLinecap="round" initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1.7,ease:'easeInOut'}} /></svg>
    <div className="relative mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
      {cards.map(([Icon,title,detail,color,tint],i)=><motion.div key={title} initial={{opacity:0,y:20,scale:.96}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,margin:'-30px'}} transition={{delay:i*.12,duration:.45}} whileHover={{y:-6,rotate:i%2?1:-1}} className="min-h-[142px] rounded-2xl border border-white p-3 shadow-md sm:min-h-[162px] sm:p-4" style={{ background: `linear-gradient(145deg, ${tint}, #ffffff)` }}>
        <motion.span animate={{y:[0,-4,0]}} transition={{duration:3.4+i*.3,repeat:Infinity,ease:'easeInOut',delay:i*.2}} className="grid size-10 place-items-center rounded-xl text-white shadow-sm sm:size-11" style={{backgroundColor:color}}><Icon className="size-5"/></motion.span>
        <p className="mt-3 font-display text-base font-bold text-ink sm:text-lg">{title}</p><p className="mt-0.5 text-[11px] leading-snug text-muted sm:text-xs">{detail}</p>
        <span className="mt-3 block h-1 w-9 rounded-full" style={{backgroundColor:tint}} />
      </motion.div>)}
    </div>
  </div>
}
