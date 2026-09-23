import { motion } from 'framer-motion'
import { CLIENTS } from '../data/clients'
import OfficialImage from '../components/OfficialImage'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

function Logo({ c, hidden }) {
  return (
    <li aria-hidden={hidden || undefined} className="mx-5 shrink-0 sm:mx-8">
      <motion.div
        whileHover={{ width: 96, height: 96, scale: 1.08, borderRadius: '50%' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: hidden ? 0.7 : 0 }, width: { type: 'spring', stiffness: 300, damping: 24 }, height: { type: 'spring', stiffness: 300, damping: 24 }, scale: { type: 'spring', stiffness: 300, damping: 20 }, borderRadius: { duration: 0.35 } }}
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
    <section className="section bg-b2w !pt-8 lg:!pt-12" aria-labelledby="clients-title" aria-label={heading ? undefined : 'Client logos'}>
      {heading && (
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading label="Our clients" id="clients-title" title="Trusted by businesses across industries.">
              <p>Supporting organizations with reliable technology, talent, and operational solutions designed to create lasting business value.</p>
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

    </section>
  )
}
