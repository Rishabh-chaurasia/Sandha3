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
      <PageHero tone="purple" eyebrow="LEADERSHIP" title="The person behind our purpose." lead="A people-first approach to building dependable technology, workforce and customer-operation solutions." illustration="leadership" crumbs={[{ label: 'Clients', to: '/clients' }, { label: 'Founder' }]} />
      <section className="section bg-white py-10 lg:py-16" aria-labelledby="founder-title">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-[390px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-soft via-white to-softpurple shadow-lift">
              <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-16 -top-16 size-64 rounded-full bg-gradient-to-br from-brand/25 to-cyan/20 blur-2xl" />
              <motion.img animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} src="/founder-sandeep-sandha.png" alt="Sandeep Sandha, Founder and CEO" className="absolute inset-x-0 bottom-0 mx-auto h-[94%] w-auto object-contain object-bottom" />
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
