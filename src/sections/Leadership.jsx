import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { LEADERS } from '../data/company'

const initials = (n) => n.split(' ').map((w) => w[0]).join('')

export default function Leadership({ id = 'leadership' }) {
  const reduce = false
  return (
    <section id={id} className="bg-ultra section" aria-labelledby={`${id}-title`}>
      <div className="container-x">
        <SectionHeading label="Leadership" size="md" title={<span id={`${id}-title`}>Meet our management</span>} />
        <ul className="mt-12 grid gap-x-12 gap-y-2 sm:grid-cols-2">
          {LEADERS.map((l) => (
            <motion.li
              key={l.name}
              whileHover={reduce ? undefined : { x: 6 }}
              className="flex items-center gap-6 border-t border-line py-8"
            >
              <span aria-hidden className="grid size-20 shrink-0 place-items-center rounded-full border-2 border-brand/70 bg-white font-display text-xl font-semibold text-brand-deep">
                {initials(l.name)}
              </span>
              <span>
                <span className="block text-2xl font-semibold text-ink">{l.name}</span>
                <span className="block text-muted">{l.role}</span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
