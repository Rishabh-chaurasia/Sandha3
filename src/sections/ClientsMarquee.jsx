import { motion } from 'framer-motion'
import { CLIENTS } from '../data/clients'
import OfficialImage from '../components/OfficialImage'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

function Logo({ c, hidden }) {
  return (
    <li aria-hidden={hidden || undefined} className="mx-5 shrink-0 sm:mx-8">
      <motion.div
        whileHover={{ scale: 1.12, borderRadius: 999 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: hidden ? 0.7 : 0 }, scale: { type: 'spring', stiffness: 300, damping: 20 }, borderRadius: { duration: 0.35 } }}
        className="flex h-24 w-44 items-center justify-center rounded-2xl border border-line bg-white px-5 opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-28 sm:w-52"
      >
        <OfficialImage
          local={c.local} remote={c.remote} alt={hidden ? '' : c.name}
          className="max-h-16 max-w-full object-contain"
          fallback={<span className="text-sm font-extrabold text-ink">{c.short}</span>}
        />
      </motion.div>
    </li>
  )
}

export default function ClientsMarquee({ heading = true }) {
  return (
    <section className="section bg-b2w" aria-labelledby="clients-title" aria-label={heading ? undefined : 'Client logos'}>
      {heading && (
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading label="Our clients" id="clients-title" title="Trusted by businesses across industries.">
              <p>Client relationships across power distribution and education.</p>
            </SectionHeading>
          </div>
        </div>
      )}

      <Reveal className={`marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] ${heading ? 'mt-10' : ''}`}>
        <ul className="marquee-track flex items-center py-2" aria-label="Client logos">
          {CLIENTS.map((c) => <Logo key={c.short} c={c} />)}
          {CLIENTS.map((c) => <Logo key={c.short + '-dup'} c={c} hidden />)}
        </ul>
      </Reveal>

      <div className="container-x mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">{CLIENTS.length} clients: 7 in power and utilities, 1 in education.</p>
      </div>
    </section>
  )
}
