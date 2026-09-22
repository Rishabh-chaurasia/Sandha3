import { motion } from 'framer-motion'
import { CarFront, Headphones, MessageSquareText, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const CAPABILITIES = [
  { Icon: CarFront, title: 'Vehicle tracking', text: 'GPS and GIS tools help teams locate the nearest field vehicle and monitor response progress.' },
  { Icon: Headphones, title: 'Omnichannel support', text: 'Customers can register requests through voice, email, chat and social channels.' },
  { Icon: MessageSquareText, title: 'Complaint management', text: 'Automatic updates, escalation workflows and consumer confirmation support transparent closure.' },
  { Icon: ShieldCheck, title: 'Safety and EHS', text: 'Training, protective equipment and hazard controls support safer field operations.' },
]

const FLOW = ['Complaint registered', 'Nearest team assigned', 'Field response tracked', 'Resolution confirmed']

export default function UtilitiesCapabilities() {
  return (
    <section className="section bg-white py-10 lg:py-16" aria-labelledby="utilities-title">
      <div className="container-x">
        <SectionHeading label="Utility operations" id="utilities-title" title="Connected support from complaint to closure">
          <p>Capabilities drawn from our work with power and essential service providers.</p>
        </SectionHeading>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="group rounded-2xl border border-line bg-ultra p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
              <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }} className="grid size-11 place-items-center rounded-xl bg-white text-brand shadow-sm"><Icon className="size-5" /></motion.span>
              <h3 className="mt-5 text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FLOW.map((step, i) => <li key={step} className="flex items-center gap-3 rounded-xl bg-soft px-4 py-3 text-sm font-bold text-ink"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-xs text-white">{i + 1}</span>{step}</li>)}
        </ol>
      </div>
    </section>
  )
}
