import { motion } from 'framer-motion'
import { Cpu, Compass, Users, UserSearch, Headset, Flag } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { COMPANY } from '../data/company'
import { EASE } from '../utils/motion'

const STEPS = [
  { title: '2008', text: 'Company operations begin', Icon: Flag, grad: 'from-brand to-purple', year: true },
  { title: 'Technology', text: 'Software development, infrastructure and cyber security', Icon: Cpu, grad: 'from-brand to-cyan' },
  { title: 'Consultancy', text: 'Technology consulting, strategy and advisory', Icon: Compass, grad: 'from-electric to-purple' },
  { title: 'Manpower', text: 'Flexi and permanent staffing, payroll, verification, compliance', Icon: Users, grad: 'from-cyan to-mint' },
  { title: 'Staffing', text: 'Attracting, screening, interviewing and onboarding talent', Icon: UserSearch, grad: 'from-purple to-brand' },
  { title: 'Customer operations', text: 'Voice and non-voice support, plus field operations', Icon: Headset, grad: 'from-cyan to-purple' },
]

export default function Journey({ id = 'journey' }) {
  const reduce = false
  return (
    <section id={id} className="section relative overflow-hidden bg-white" aria-labelledby={`${id}-title`}>
      <div className="container-x">
        <SectionHeading label="Our journey" id={`${id}-title`} title="Started in December 2008. Growing with our clients.">
          <p>Since {COMPANY.started}, our work has grown across technology, consulting, manpower, staffing and customer operations.</p>
        </SectionHeading>

        <div className="relative mt-16">
          {/* desktop: horizontal line. mobile: vertical line */}
          <motion.span
            aria-hidden
            className="absolute left-[35px] top-[36px] bottom-[36px] w-1 origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-brand via-cyan to-mint lg:hidden"
            initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.8, ease: EASE }}
          />
          <motion.span
            aria-hidden
            className="absolute left-[36px] top-[36px] hidden h-1.5 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-brand via-cyan via-60% to-mint shadow-[0_0_10px_rgba(8,120,249,.3)] lg:block"
            style={{ right: 'calc((100% - 120px) / 6 - 36px)' }}
            initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 2, ease: EASE }}
          />

          <ol className="relative grid gap-10 lg:grid-cols-6 lg:gap-10">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                className="flex gap-6 lg:block"
                whileHover={reduce ? undefined : { y: -6 }}
                initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 110, damping: 20, delay: 0.15 + i * 0.16 }}
              >
                <motion.div whileHover={reduce ? undefined : { rotate: 8, scale: 1.08 }} className={`relative grid size-[72px] shrink-0 place-items-center rounded-full bg-gradient-to-br ${s.grad} text-white shadow-[0_14px_30px_-10px_rgba(8,120,249,.55)] ring-4 ring-white`}>
                  {s.year ? <span className="text-lg font-extrabold tracking-tight">2008</span> : <s.Icon aria-hidden className="size-8" strokeWidth={1.8} />}
                </motion.div>
                <div className="lg:mt-6 lg:pr-2">
                  <h3 className="text-lg font-extrabold text-ink sm:text-xl lg:whitespace-nowrap">{s.year ? 'December 2008' : s.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-muted">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
