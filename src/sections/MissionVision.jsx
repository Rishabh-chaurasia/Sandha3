import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { COMPANY } from '../data/company'

const VALUES = [
  ['People first', 'We empower people and organisations to succeed together.'],
  ['Collaboration & growth', 'We build respectful relationships that help teams and clients grow.'],
  ['Innovation at the core', 'We use technology to improve manpower solutions and service delivery.'],
  ['Agility & excellence', 'We adapt quickly, deliver efficiently and keep improving.'],
]

export default function MissionVision() {
  return (
    <section className="section bg-white py-8 lg:py-12" aria-labelledby="mission-title">
      <div className="container-x">
        <SectionHeading label="Our direction" id="mission-title" title="Clear goals for responsible growth.">
          <p>Our mission and vision guide how we support clients, develop our people, and improve essential services.</p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Reveal className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-cyan p-6 text-white shadow-lift sm:p-8">
            <span className="absolute -right-10 -top-10 size-36 rounded-full border-[18px] border-white/15 transition-transform duration-700 group-hover:scale-125" />
            <p className="relative text-sm font-black tracking-[0.16em] text-white/75">01 / MISSION</p>
            <p className="relative mt-8 max-w-[28ch] text-xl font-extrabold leading-relaxed">{COMPANY.mission}</p>
          </Reveal>
          <Reveal delay={0.1} className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple to-electric p-6 text-white shadow-lift sm:p-8">
            <span className="absolute -bottom-12 -right-8 size-40 rounded-full border-[20px] border-white/15 transition-transform duration-700 group-hover:scale-125" />
            <p className="relative text-sm font-black tracking-[0.16em] text-white/75">02 / VISION</p>
            <p className="relative mt-8 max-w-[28ch] text-xl font-extrabold leading-relaxed">{COMPANY.vision}</p>
          </Reveal>
        </div>
        <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(([title, text]) => (
            <li key={title} className="border-t border-line pt-4">
              <h3 className="text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-1 text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
