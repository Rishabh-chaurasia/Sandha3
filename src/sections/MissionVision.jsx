import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { COMPANY } from '../data/company'
import { Compass, Target, UsersRound, Handshake, Sparkles, Zap } from 'lucide-react'

const VALUES = [
  ['People first', 'We empower people and organisations to succeed together.', UsersRound, 'text-cyan bg-cyan/10'],
  ['Collaboration & growth', 'We build respectful relationships that help teams and clients grow.', Handshake, 'text-purple bg-purple/10'],
  ['Innovation at the core', 'We use technology to improve manpower solutions and service delivery.', Sparkles, 'text-brand bg-brand/10'],
  ['Agility & excellence', 'We adapt quickly, deliver efficiently and keep improving.', Zap, 'text-amber-600 bg-amber-100'],
]

export default function MissionVision() {
  return (
    <section className="section bg-white !pt-6 pb-8 lg:!pt-10 lg:pb-12" aria-labelledby="mission-title">
      <div className="container-x">
        <SectionHeading label="Our direction" id="mission-title" title="Clear goals for responsible growth.">
          <p>Our mission and vision guide how we support clients, develop our people, and improve essential services.</p>
        </SectionHeading>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Reveal className="group relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand to-cyan p-5 text-white shadow-lift sm:p-6">
            <span className="absolute -right-10 -top-10 size-36 rounded-full border-[18px] border-white/15 transition-transform duration-700 group-hover:scale-125" />
            <div className="relative flex items-center justify-between"><p className="text-sm font-black tracking-[0.16em] text-white/75">01 / MISSION</p><Target aria-hidden className="size-7 text-white/80" /></div>
            <p className="relative mt-5 max-w-[32ch] text-lg font-extrabold leading-relaxed">{COMPANY.mission}</p>
          </Reveal>
          <Reveal delay={0.1} className="group relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-purple to-electric p-5 text-white shadow-lift sm:p-6">
            <span className="absolute -bottom-12 -right-8 size-40 rounded-full border-[20px] border-white/15 transition-transform duration-700 group-hover:scale-125" />
            <div className="relative flex items-center justify-between"><p className="text-sm font-black tracking-[0.16em] text-white/75">02 / VISION</p><Compass aria-hidden className="size-7 text-white/80" /></div>
            <p className="relative mt-5 max-w-[32ch] text-lg font-extrabold leading-relaxed">{COMPANY.vision}</p>
          </Reveal>
        </div>
        <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(([title, text, Icon, iconStyle], i) => (
            <li key={title} className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${[
              'border-cyan/25 bg-gradient-to-br from-cyan/15 via-sky-50 to-white',
              'border-purple/25 bg-gradient-to-br from-purple/15 via-violet-50 to-white',
              'border-brand/25 bg-gradient-to-br from-brand/15 via-blue-50 to-white',
              'border-amber-300/40 bg-gradient-to-br from-amber-100 via-orange-50 to-white',
            ][i]}`}>
              <Icon aria-hidden className="absolute -bottom-7 -right-6 size-28 rotate-[-12deg] text-ink/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0" />
              <span className={`relative mb-4 grid size-12 place-items-center rounded-2xl shadow-sm ${iconStyle}`}><Icon aria-hidden className="size-6" /></span>
              <h3 className="text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-1 text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
