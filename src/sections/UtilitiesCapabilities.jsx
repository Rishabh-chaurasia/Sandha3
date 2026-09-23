import { motion } from 'framer-motion'
import { CarFront, Headphones, MessageSquareText, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const CAPABILITIES = [
  { Icon: CarFront, title: 'Vehicle tracking', text: 'GPS and GIS tools help teams locate the nearest field vehicle and monitor response progress.', card: 'from-[#dceeff] to-[#f2f9ff]', accent: '#0878f9' },
  { Icon: Headphones, title: 'Omnichannel support', text: 'Customers can register requests through voice, email, chat and social channels.', card: 'from-[#eee4ff] to-[#faf7ff]', accent: '#7353e8' },
  { Icon: MessageSquareText, title: 'Complaint management', text: 'Automatic updates, escalation workflows and consumer confirmation support transparent closure.', card: 'from-[#dcf8e6] to-[#f4fff8]', accent: '#13a961' },
  { Icon: ShieldCheck, title: 'Safety and EHS', text: 'Training, protective equipment and hazard controls support safer field operations.', card: 'from-[#fff0c9] to-[#fffaf0]', accent: '#c68b00' },
]

const FLOW = ['Complaint registered', 'Nearest team assigned', 'Field response tracked', 'Resolution confirmed']

export default function UtilitiesCapabilities() {
  return (
    <section className="section bg-white !pt-5 pb-10 lg:!pt-8 lg:pb-14" aria-labelledby="utilities-title">
      <div className="container-x">
        <SectionHeading label="Utility operations" id="utilities-title" title="Connected support from complaint to closure">
          <p>Capabilities drawn from our work with power and essential service providers.</p>
        </SectionHeading>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map(({ Icon, title, text, card, accent }, i) => (
            <Reveal key={title} delay={i * 0.08} className={`group relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift ${card}`}>
              <Icon aria-hidden className="absolute -bottom-5 -right-4 size-24 rotate-[-14deg] opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0" style={{ color: accent }} />
              <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }} className="relative grid size-11 place-items-center rounded-xl bg-white/90 shadow-sm" style={{ color: accent }}><Icon className="size-5" /></motion.span>
              <h3 className="relative mt-5 text-lg font-extrabold text-ink">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
        <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <svg aria-hidden="true" viewBox="0 0 1100 70" preserveAspectRatio="none" className="pointer-events-none absolute left-[8%] right-[8%] top-[-15px] hidden h-16 w-[84%] lg:block">
            <path d="M0 34 C105 0 170 68 275 34 S445 0 550 34 S720 68 825 34 S995 0 1100 34" fill="none" stroke="#7c5cfc" strokeOpacity=".55" strokeWidth="2.5" strokeDasharray="3 8" strokeLinecap="round" />
          </svg>
          {FLOW.map((step, i) => <li key={step} className={`relative flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-sm font-bold text-ink shadow-sm ${i % 2 ? 'lg:translate-y-5' : ''}`}><span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-xs text-white shadow-md">{i + 1}</span>{step}</li>)}
        </ol>
      </div>
    </section>
  )
}
