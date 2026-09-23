import Seo from '../components/Seo'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import OfficialImage from '../components/OfficialImage'
import { CLIENTS } from '../data/clients'

export default function Clients() {
  return (
    <>
      <Seo
        title="Clients | Sandha & Company"
        description="Sandha & Company works with power distribution utilities including DHBVN, AVVNL, JDVVNL, JVVNL, PSPCL, Tata Power and BSES Yamuna Power, and with Lala Lajpat Rai University."
        path="/clients"
      />
      <PageHero
        tone="ultra"
        eyebrow="OUR CLIENTS"
        title="Long relationships with utilities and institutions."
        lead="Our client list is concentrated in power distribution, where service standards and compliance both matter."
        illustration="clients"
        illustrationClassName="lg:scale-[1.08] lg:origin-center"
        crumbs={[{ label: 'Clients' }]}
      />

      <section className="bg-white section" aria-labelledby="client-list">
        <div className="container-x">
          <h2 id="client-list" className="sr-only">Client list</h2>
          <ul className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {CLIENTS.map((c, i) => (
              <Reveal as="li" key={c.short} delay={(i % 4) * 0.08} className="group relative flex flex-col gap-4 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_-24px_rgba(8,120,249,.5)] sm:p-7" style={{ background: [
                'linear-gradient(145deg,#E4F2FF,#D4E9FF)', 'linear-gradient(145deg,#E2FBF3,#D0F5E8)', 'linear-gradient(145deg,#F0EAFF,#E3DCFF)', 'linear-gradient(145deg,#E2F8FC,#CFF1F7)', 'linear-gradient(145deg,#FFF4DA,#FFECC0)', 'linear-gradient(145deg,#FFE9E3,#FFDBD1)', 'linear-gradient(145deg,#EDF2FF,#DFE8FF)', 'linear-gradient(145deg,#E6F8EF,#D6F2E2)',
              ][i] }}>
                <span aria-hidden className="absolute right-4 top-3 font-display text-xs font-extrabold tracking-[0.16em] text-ink/35">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex h-20 items-center">
                  <motion.div whileHover={{ scale: 1.08, rotate: i % 2 ? -2 : 2 }} transition={{ type: 'spring', stiffness: 280, damping: 18 }} className="flex h-[4.5rem] min-w-28 items-center justify-center rounded-xl bg-white/90 px-4 shadow-sm ring-1 ring-white/80">
                    <OfficialImage
                      local={c.local}
                      remote={c.remote}
                      alt={c.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                      fallback={<span className="font-display text-xl font-semibold text-brand-deep">{c.short}</span>}
                    />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-semibold leading-snug text-ink">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted">{c.group}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="A reliable partner for your next deployment" text="Share your requirements with our team to begin a focused, practical discussion." />
    </>
  )
}
