import { motion, useReducedMotion } from 'framer-motion'
import { Cpu, Truck, Users, Headset, Droplets } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { EASE } from '../utils/motion'

const STEPS = [
  { title: 'Manpower', text: 'ITI-qualified linemen, engineers and drivers', Icon: Users, grad: 'from-electric to-purple' },
  { title: 'Information technology', text: 'Servers, cloud data and complaint software', Icon: Cpu, grad: 'from-purple to-brand' },
  { title: 'FRT and line work', text: 'Fault rectification and LT/HT line maintenance', Icon: Truck, grad: 'from-brand to-cyan' },
  { title: 'Call centre', text: '24/7 toll-free complaint registration', Icon: Headset, grad: 'from-cyan to-mint' },
  { title: 'Water utility', text: 'Connections, metering, billing and leak repair', Icon: Droplets, grad: 'from-brand to-cyan' },
]

export default function Journey({ id = 'journey' }) {
  const reduce = useReducedMotion()
  return (
    <section id={id} className="section relative overflow-hidden bg-white !pt-8 lg:!pt-12" aria-labelledby={`${id}-title`}>
      <div className="container-x">
        <SectionHeading label="Our capabilities" id={`${id}-title`} title="Connecting people, processes and technology.">
          <p>Our five service areas connect the consumer's call with the team that fixes the fault.</p>
        </SectionHeading>

        <div className="relative mt-16">
          {/* desktop: horizontal line. mobile: vertical line */}
          <motion.span
            aria-hidden
            className="absolute left-[35px] top-[36px] bottom-[36px] w-1 origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-brand via-cyan to-mint sm:hidden"
            initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.8, ease: EASE }}
          />
          <motion.span
            aria-hidden
            className="absolute left-[36px] top-[36px] hidden h-1.5 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-brand via-cyan via-60% to-mint shadow-[0_0_10px_rgba(8,120,249,.3)] lg:block"
            style={{ right: 'calc(20% - 30px)' }}
            initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 2, ease: EASE }}
          />

          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 xl:gap-7">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                className="group flex min-w-0 gap-6 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 lg:block"
                tabIndex={0}
                whileHover={reduce ? undefined : { y: -7, scale: 1.015 }}
                initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 110, damping: 20, delay: 0.15 + i * 0.16 }}
              >
                <motion.div
                  className={`relative grid size-[72px] shrink-0 place-items-center rounded-full bg-gradient-to-br ${s.grad} text-white shadow-[0_14px_30px_-10px_rgba(8,120,249,.55)] ring-4 ring-white`}
                  animate={reduce ? undefined : { y: [0, -5, 0], boxShadow: ['0 14px 30px -10px rgba(8,120,249,.38)', '0 18px 34px -8px rgba(8,120,249,.55)', '0 14px 30px -10px rgba(8,120,249,.38)'] }}
                  transition={{ duration: 3.2 + i * 0.35, repeat: Infinity, ease: 'easeInOut', delay: i * 0.28 }}
                >
                  <span aria-hidden className="journey-icon grid place-items-center">
                    <s.Icon className="size-8" strokeWidth={1.8} />
                  </span>
                  <motion.span aria-hidden className="absolute -inset-2 rounded-full border-2 border-cyan/60" animate={reduce ? { opacity: 0.65 } : { scale: [0.86, 1.28], opacity: [0.75, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: i * 0.42 }} />
                </motion.div>
                <div className="lg:mt-6 lg:pr-2">
                  <h3 className="text-base font-bold leading-snug text-ink xl:text-lg">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted xl:text-[0.94rem]">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
