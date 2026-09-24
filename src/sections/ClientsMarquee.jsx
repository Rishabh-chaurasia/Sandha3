import { motion } from 'framer-motion'
import { CLIENT_LOGOS } from '../data/clients'
import OfficialImage from '../components/OfficialImage'

function Logo({ client, duplicate }) {
  return (
    <li aria-hidden={duplicate || undefined} className="mx-2 shrink-0 sm:mx-3">
      <motion.div
        whileHover={{ width: 96, height: 96, scale: 1.08, borderRadius: '50%' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: duplicate ? 0.7 : 0 }, width: { type: 'spring', stiffness: 300, damping: 24 }, height: { type: 'spring', stiffness: 300, damping: 24 }, scale: { type: 'spring', stiffness: 300, damping: 20 }, borderRadius: { duration: 0.35 } }}
        className="flex h-20 w-36 items-center justify-center rounded-2xl border border-line bg-white px-5 opacity-90 shadow-sm transition-opacity duration-300 hover:opacity-100 sm:h-24 sm:w-44"
      >
        <OfficialImage local={client.local} remote={client.remote} alt={duplicate ? '' : client.name} className="max-h-12 max-w-full object-contain sm:max-h-14" fallback={<span className="text-sm font-extrabold text-brand-deep">{client.short}</span>} />
      </motion.div>
    </li>
  )
}

export default function ClientsMarquee() {
  return (
    <div className="min-w-0" aria-label="Client logo slideshow">
      <h3 className="mb-3 text-lg font-extrabold text-ink">Organisations we work with</h3>
      <div className="marquee relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee-track flex items-center" aria-label="Client logos">
          {CLIENT_LOGOS.map((client) => <Logo key={client.short} client={client} />)}
          {CLIENT_LOGOS.map((client) => <Logo key={client.short + '-dup'} client={client} duplicate />)}
        </ul>
      </div>
    </div>
  )
}
