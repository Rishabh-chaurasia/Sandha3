import { motion } from 'framer-motion'
import { CLIENT_LOGOS } from '../data/clients'
import OfficialImage from '../components/OfficialImage'

function Logo({ client, duplicate }) {
  return (
    <li aria-hidden={duplicate || undefined} className={`mx-2 shrink-0 sm:mx-3 ${duplicate ? 'hidden sm:list-item' : ''}`}>
      <motion.div
        whileHover={{ scale: 1.06, y: -6 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: duplicate ? 0.7 : 0 }, scale: { type: 'spring', stiffness: 300, damping: 18 }, rotate: { type: 'spring', stiffness: 300, damping: 18 } }}
        className="flex h-[7.5rem] w-40 flex-col items-center justify-center gap-2 px-3 py-3 sm:h-[8.5rem] sm:w-48 sm:px-4"
      >
        <span className="flex h-14 w-full items-center justify-center sm:h-16"><OfficialImage local={client.local} remote={client.remote} alt={duplicate ? '' : client.name} loading="eager" fetchPriority="high" className="h-full w-full object-contain" fallback={<span className="rounded-lg bg-soft px-3 py-2 text-sm font-extrabold text-brand-deep">{client.short}</span>} /></span>
        <span aria-hidden className="line-clamp-2 min-h-[1.6rem] w-full text-center text-[0.65rem] font-bold leading-tight text-muted sm:text-[0.72rem]">{client.name}</span>
      </motion.div>
    </li>
  )
}

export default function ClientsMarquee() {
  return (
    <div className="min-w-0" aria-label="Client logo slideshow">
      <h3 className="mb-3 text-lg font-extrabold text-ink">Organisations we work with</h3>
      <div className="marquee relative overflow-hidden pb-2 pt-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee-track flex items-center" aria-label="Client logos">
          {CLIENT_LOGOS.map((client) => <Logo key={client.short} client={client} />)}
          {CLIENT_LOGOS.map((client) => <Logo key={client.short + '-dup'} client={client} duplicate />)}
        </ul>
      </div>
    </div>
  )
}
