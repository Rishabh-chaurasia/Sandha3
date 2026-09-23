import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { COMPANY, LEADERS } from '../data/company'

export default function Founder() {
  const founder = LEADERS.find((leader) => leader.role.includes('Founder')) || LEADERS[0]
  return (
    <>
      <Seo title="Founder | Sandha & Company" description="Meet Sandeep Sandha, Founder and CEO of Sandha & Company." path="/founder" />
      <PageHero tone="purple" eyebrow="OUR LEADERSHIP" title="Leadership grounded in purpose and progress." lead="A people-first approach to building practical technology, workforce and customer-operation solutions." illustration="leadership" crumbs={[{ label: 'Founder' }]} />
      <section className="section bg-white py-10 lg:py-16" aria-labelledby="founder-title">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div tabIndex={0} role="group" aria-label="Sandeep Sandha portrait. Hover or focus to see the original photograph." className="group relative mx-auto aspect-[4/5] max-w-[390px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-soft via-white to-softpurple shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
              <motion.div aria-hidden animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-16 -top-16 size-64 rounded-full bg-gradient-to-br from-brand/25 to-cyan/20 blur-2xl" />
              <img src="/founder-sandeep-sandha-professional.png" alt="Sandeep Sandha in a front-facing business suit portrait" className="absolute inset-0 size-full object-cover object-[center_22%] transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#e8f3ff] via-[#dbeaff] to-[#c6dcfa] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
              <div aria-hidden className="absolute -right-[22%] top-[4%] size-[85%] rounded-full border border-white/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <img src="/founder-sandeep-sandha.png" alt="" aria-hidden className="absolute left-[65%] top-[-22%] h-auto w-[130%] max-w-none -translate-x-1/2 scale-[.96] opacity-0 drop-shadow-[0_18px_20px_rgba(26,54,91,0.2)] transition-[opacity,transform] duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#162f58]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
              <span className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">Sandeep Sandha</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand">{founder.role}</p>
            <h2 id="founder-title" className="mt-3 text-[clamp(2.2rem,1.3rem+3vw,4.4rem)] leading-tight tracking-tight text-ink">{founder.name}</h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted">{COMPANY.founderMessage}</p>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted">That belief continues to shape the company’s work across technology, consulting, manpower, staffing and customer operations.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['People first', 'Practical solutions', 'Long-term trust'].map((item) => <div key={item} className="rounded-2xl bg-soft p-4 text-sm font-extrabold text-ink">{item}</div>)}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
