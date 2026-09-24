import { motion } from 'framer-motion'
import { useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { COMPANY, LEADERS } from '../data/company'
import { UsersRound, Wrench, Handshake } from 'lucide-react'

export default function Founder() {
  const founder = LEADERS.find((leader) => leader.role.includes('Founder')) || LEADERS[0]
  const [showCasualPortrait, setShowCasualPortrait] = useState(false)
  return (
    <>
      <Seo title="Founder | Sandha & Company" description="Meet Sandeep Sandha, Founder and CEO of Sandha & Company." path="/founder" />
      <PageHero tone="purple" eyebrow="FOUNDER AND CEO" title="Leadership grounded in purpose and progress." lead="Sandeep Sandha guides the company with a practical focus on capable teams, reliable delivery and long-term client relationships." illustration="founder-momentum" crumbs={[{ label: 'Founder' }]} />
      <section className="section bg-white py-10 lg:py-16" aria-labelledby="founder-title">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div tabIndex={0} role="button" aria-pressed={showCasualPortrait} aria-label="Sandeep Sandha portrait. Tap to switch between professional and casual portraits." onClick={() => setShowCasualPortrait((current) => !current)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setShowCasualPortrait((current) => !current) } }} className="group relative mx-auto aspect-[4/5] max-w-[390px] cursor-pointer overflow-hidden rounded-[2rem] bg-gradient-to-br from-soft via-white to-softpurple shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
              <motion.div aria-hidden animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-16 -top-16 size-64 rounded-full bg-gradient-to-br from-brand/25 to-cyan/20 blur-2xl" />
              <img src="/founder-sandeep-sandha-professional.png" alt="Sandeep Sandha in a navy business suit" className={`absolute inset-0 size-full object-cover object-[center_22%] transition-opacity duration-500 md:group-hover:opacity-0 md:group-focus-visible:opacity-0 motion-reduce:transition-none ${showCasualPortrait ? 'opacity-0' : ''}`} />
              <div aria-hidden className={`absolute inset-0 bg-gradient-to-br from-[#e8f3ff] via-[#dbeaff] to-[#c6dcfa] opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 motion-reduce:transition-none ${showCasualPortrait ? 'opacity-100' : ''}`} />
              <div aria-hidden className={`absolute -right-[22%] top-[4%] size-[85%] rounded-full border border-white/60 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 ${showCasualPortrait ? 'opacity-100' : ''}`} />
              <img src="/founder-sandeep-sandha-polo-smile.png" alt="" aria-hidden className={`absolute inset-0 size-full scale-105 object-cover object-[center_22%] opacity-0 transition-[opacity,transform] duration-500 md:group-hover:scale-110 md:group-hover:opacity-100 md:group-focus-visible:scale-110 md:group-focus-visible:opacity-100 motion-reduce:transition-none ${showCasualPortrait ? 'scale-110 opacity-100' : ''}`} />
              <div aria-hidden className={`absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#162f58]/70 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 motion-reduce:transition-none ${showCasualPortrait ? 'opacity-100' : ''}`} />
              <span className={`absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 motion-reduce:transition-none ${showCasualPortrait ? 'opacity-100' : ''}`}>Sandeep Sandha</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand">{founder.role}</p>
            <h2 id="founder-title" className="mt-3 text-[clamp(2.2rem,1.3rem+3vw,4.4rem)] leading-tight tracking-tight text-ink">{founder.name}</h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted">{COMPANY.founderMessage}</p>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted">His strategic guidance connects customer needs with technology expertise. He focuses on developing capable teams and maintaining quality as the company grows.</p>
            <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-muted">The company profile also describes his support for environmental stewardship and social advancement. His long-term vision pairs business growth with responsible practices and value for stakeholders.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[[UsersRound, 'People first', 'Build capable teams'], [Wrench, 'Practical solutions', 'Solve real service needs'], [Handshake, 'Long-term trust', 'Strengthen partnerships']].map(([Icon, title, detail], i) => <motion.div key={title} whileHover={{ y: -6 }} className="rounded-xl border border-line bg-gradient-to-br from-white to-soft p-3.5 shadow-sm">
                <span className={`grid size-9 place-items-center rounded-lg text-white ${['bg-brand', 'bg-purple', 'bg-mint'][i]}`}><Icon className="size-4" /></span>
                <span className="mt-3 block text-sm font-extrabold text-ink">{title}</span><span className="mt-1 block text-xs text-muted">{detail}</span>
              </motion.div>)}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
