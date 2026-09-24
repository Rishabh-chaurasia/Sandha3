import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { LEADERS } from '../data/company'
import { Link } from 'react-router-dom'

const initials = (n) => n.split(' ').map((w) => w[0]).join('')

export default function Leadership({ id = 'leadership' }) {
  return (
    <section id={id} className="bg-ultra section !pt-8 lg:!pt-12" aria-labelledby={`${id}-title`}>
      <div className="container-x">
        <SectionHeading label="Leadership" size="md" title={<span id={`${id}-title`}>Meet our management</span>} />
        <ul className="mt-12 grid max-w-3xl gap-y-2">
          {LEADERS.map((l) => (
            <motion.li
              key={l.name}
              whileHover={{ x: 6 }}
              className="flex items-center gap-6 border-t border-line py-8"
            >
              {l.role.includes('Founder') ? (
                <Link to="/founder" aria-label={`View ${l.name}'s profile`} className="group relative grid size-20 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-brand/70 bg-softpurple font-display text-xl font-semibold text-brand-deep transition duration-300 hover:border-brand hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                  <img src="/founder-sandeep-sandha-professional.png" alt="" className="absolute inset-0 size-full object-cover object-[center_28%] transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none" />
                  <img src="/founder-sandeep-sandha.png" alt="" aria-hidden className="absolute left-[65%] top-[-38%] h-auto w-[145%] max-w-none -translate-x-1/2 opacity-0 transition-[opacity,transform] duration-300 group-hover:scale-105 group-hover:opacity-100 group-focus-visible:scale-105 group-focus-visible:opacity-100 motion-reduce:transition-none" />
                </Link>
              ) : (
                <span aria-hidden className="grid size-20 shrink-0 place-items-center rounded-full border-2 border-brand/70 bg-white font-display text-xl font-semibold text-brand-deep">
                  {initials(l.name)}
                </span>
              )}
              <span className="min-w-0">
                {l.role.includes('Founder') ? (
                  <Link to="/founder" className="block text-2xl font-semibold text-ink transition hover:text-brand focus-visible:text-brand">{l.name}</Link>
                ) : <span className="block text-2xl font-semibold text-ink">{l.name}</span>}
                <span className="block text-muted">{l.role}</span>
                {l.bio && <span className="mt-3 block max-w-[34rem] text-sm leading-relaxed text-muted">{l.bio}</span>}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
