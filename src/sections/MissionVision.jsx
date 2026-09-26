import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { COMPANY } from '../data/company'
import { Compass, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section className="section bg-white !pt-2 pb-8 lg:!pt-5 lg:pb-12" aria-labelledby="mission-title">
      <div className="container-x">
        <SectionHeading label="Our direction" id="mission-title" title="Clear goals for responsible growth.">
          <p>Our mission and vision guide how we support clients, develop our people, and improve essential services.</p>
        </SectionHeading>
        <div className="mt-6 grid auto-rows-fr gap-4 lg:grid-cols-2">
          <Reveal className="h-full"><motion.div animate={{ y: [0, -5, 0] }} whileHover={{ y: -9, scale: 1.015 }} transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }} className="group relative h-full min-h-[250px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand to-cyan p-5 text-white shadow-lift sm:p-6">
            <motion.span aria-hidden animate={{ rotate: 360, scale: [1, 1.12, 1] }} transition={{ rotate: { duration: 16, repeat: Infinity, ease: 'linear' }, scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }} className="absolute -right-10 -top-10 size-36 rounded-full border-[18px] border-white/15" />
            <motion.span aria-hidden animate={{ x: ['-130%', '180%'] }} transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }} className="absolute inset-y-0 w-20 -skew-x-12 bg-white/10 blur-xl" />
            <div className="relative flex items-center justify-between"><p className="text-sm font-black tracking-[0.16em] text-white/75">01 / MISSION</p><motion.span animate={{ rotate: [0, 10, 0, -10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}><Target aria-hidden className="size-7 text-white/80" /></motion.span></div>
            <p className="relative mt-5 max-w-[32ch] text-lg font-normal leading-relaxed">{COMPANY.mission}</p>
          </motion.div></Reveal>
          <Reveal delay={0.1} className="h-full"><motion.div animate={{ y: [0, -5, 0] }} whileHover={{ y: -9, scale: 1.015 }} transition={{ y: { duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: .25 } }} className="group relative h-full min-h-[250px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-purple to-electric p-5 text-white shadow-lift sm:p-6">
            <motion.span aria-hidden animate={{ rotate: -360, scale: [1, 1.12, 1] }} transition={{ rotate: { duration: 18, repeat: Infinity, ease: 'linear' }, scale: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }} className="absolute -bottom-12 -right-8 size-40 rounded-full border-[20px] border-white/15" />
            <motion.span aria-hidden animate={{ x: ['-130%', '180%'] }} transition={{ duration: 5.8, repeat: Infinity, repeatDelay: 2.7, ease: 'easeInOut', delay: .5 }} className="absolute inset-y-0 w-20 -skew-x-12 bg-white/10 blur-xl" />
            <div className="relative flex items-center justify-between"><p className="text-sm font-black tracking-[0.16em] text-white/75">02 / VISION</p><motion.span animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}><Compass aria-hidden className="size-7 text-white/80" /></motion.span></div>
            <p className="relative mt-5 max-w-[32ch] text-lg font-normal leading-relaxed">{COMPANY.vision}</p>
          </motion.div></Reveal>
        </div>
      </div>
    </section>
  )
}
