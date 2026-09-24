import { FileText } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { COMPLIANCE_RECORDS } from '../data/company'

const STAGES = [
  { t: 'Train', d: 'Field personnel receive safety training and instructions for their roles.', detail: 'Role-specific instruction', color: '#0878f9', tint: '#e5f2ff', image: '/field-safety-training-v2.png', alt: 'Utility field staff receiving role-specific safety training' },
  { t: 'Equip', d: 'Teams receive PPE, tools and equipment suitable for the work.', detail: 'Protective equipment', color: '#e38630', tint: '#fff1db', image: '/field-safety-ppe-v2.png', alt: 'Utility technicians preparing safety gear and tools' },
  { t: 'Control hazards', d: 'Project EHS procedures guide hazard identification and mitigation.', detail: 'Hazard controls', color: '#0f9e93', tint: '#e1f8f2', image: '/field-safety-hazards-v2.png', alt: 'Field technicians inspecting electrical equipment and identifying hazards' },
  { t: 'Improve', d: 'Safety practices are reported, reviewed and improved continuously.', detail: 'Review and learn', color: '#7456e8', tint: '#f0eaff', image: '/field-safety-review-v2.png', alt: 'Utility team reviewing safety practices together' },
]

export default function Compliance() {
  return (
    <>
      <Seo
        title="Compliance | Sandha & Company"
        description="Sandha & Company's profile describes quality certification, statutory benefits and environmental, health and safety practices."
        path="/compliance"
      />
      <PageHero
        tone="plain"
        sectionClassName="min-h-[100svh] flex items-center"
        eyebrow="WE FOLLOW COMPLIANCE"
        title="Compliance records, clearly documented every month."
        lead="We maintain the statutory records required for client deployments and support safe, accountable field operations."
        illustration="compliance"
        crumbs={[{ label: 'Compliance' }]}
      />

      <section className="section bg-gradient-to-br from-[#eef6ff] via-[#f6f1ff] to-[#eafaf5] !pt-7 !pb-8 lg:!pt-10 lg:!pb-10" aria-labelledby="records-title">
        <div className="container-x">
          <Reveal>
            <h2 id="records-title" className="max-w-[24ch] h-sub text-ink">Compliance and worker support</h2>
            <p className="mt-3 max-w-[70ch] text-muted">Our quality and safety commitments, and the statutory responsibilities we carry for every worker we deploy.</p>
          </Reveal>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2">
            {COMPLIANCE_RECORDS.map((r, i) => (
              <li key={r.title} className={`bg-gradient-to-br p-7 ${['from-white to-[#e9f4ff]','from-white to-[#fff0e2]','from-white to-[#e8faf4]','from-white to-[#f1edff]','from-white to-[#e7f8fb]','from-white to-[#fff0ed]','from-white to-[#eef5ff]'][i]}`}>
                <span className={`grid size-11 place-items-center rounded-xl text-white ${['bg-brand','bg-[#e38630]','bg-[#0f9e93]','bg-purple','bg-cyan','bg-[#e06b4b]','bg-electric'][i]}`}><FileText aria-hidden className="size-5" /></span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white section !pt-7 !pb-9 lg:!pt-10 lg:!pb-12" aria-labelledby="process-title">
        <div className="container-x">
          <Reveal>
            <h2 id="process-title" className="max-w-[20ch] h-sub text-ink">Our approach to field safety</h2>
          </Reveal>
          <ol className="mt-12 space-y-8 lg:space-y-12">
            {STAGES.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 0.08} className="grid items-center gap-6 rounded-[2rem] border border-line bg-white p-5 shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-8">
                <div className={`relative flex min-h-[210px] items-center justify-center overflow-hidden rounded-[1.5rem] ${i % 2 ? 'lg:order-2' : ''}`} style={{ backgroundColor: s.tint }}>
                  <img src={s.image} alt={s.alt} className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#10243f]/25 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-black shadow-sm" style={{ color: s.color }}>{s.detail}</span>
                </div>
                <div className={i % 2 ? 'lg:order-1' : ''}>
                  <span className="font-display text-sm font-extrabold tabular-nums" style={{ color: s.color }}>{String(i + 1).padStart(2, '0')} / 04</span>
                  <h3 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)] font-black tracking-tight text-ink">{s.t}</h3>
                  <p className="mt-3 max-w-[48ch] text-lg leading-relaxed text-muted">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Discuss quality and safety requirements" text="Talk with our team about the standards and safety practices relevant to your project." />
    </>
  )
}
