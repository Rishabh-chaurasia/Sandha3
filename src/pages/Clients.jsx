import Seo from '../components/Seo'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import ClientsMarquee from '../sections/ClientsMarquee'
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
        eyebrow="CLIENTS"
        title="Long relationships with utilities and institutions."
        lead="Our client list is concentrated in power distribution, where service standards and compliance both matter."
        illustration="clients"
        crumbs={[{ label: 'Clients' }]}
      />

      <section className="bg-white section" aria-labelledby="client-list">
        <div className="container-x">
          <h2 id="client-list" className="sr-only">Client list</h2>
          <ul className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {CLIENTS.map((c, i) => (
              <Reveal as="li" key={c.short} delay={(i % 4) * 0.1} className="group relative flex flex-col gap-4 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-ultra hover:shadow-[0_18px_45px_-24px_rgba(8,120,249,.65)]">
                <div className="flex h-20 items-center">
                  <motion.div whileHover={{ scale: 1.16, rotate: i % 2 ? -3 : 3 }} transition={{ type: 'spring', stiffness: 280, damping: 16 }} className="origin-left">
                    <OfficialImage
                      local={c.local}
                      remote={c.remote}
                      alt={c.name}
                      className="max-h-full max-w-[75%] object-contain mix-blend-multiply"
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

      <ClientsMarquee heading={false} />
      <CtaBand title="A dependable partner for your next deployment" text="Share your requirements with our team to begin a focused, practical discussion." />
    </>
  )
}
