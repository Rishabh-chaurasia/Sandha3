import { FileText, ShieldCheck, ScrollText, Landmark } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { COMPLIANCE_RECORDS } from '../data/company'

const ICONS = [ScrollText, Landmark, ShieldCheck, FileText]
const GRADS = ['from-brand to-cyan', 'from-purple to-electric', 'from-cyan to-mint', 'from-brand to-purple']

export default function ComplianceSection() {
  return (
    <section className="section bg-w2b" aria-labelledby="compliance-title">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading label="Quality and safety" id="compliance-title" title="Standards for field operations.">
              <p>Certified quality, statutory benefits for every worker and a strict EHS plan in the field.</p>
            </SectionHeading>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/compliance" magnetic>Quality and safety</Button>
            </div>
          </div>
          <Reveal className="lg:col-span-7 rounded-[2rem] border border-line bg-white p-8 text-ink shadow-sm"><p className="text-2xl font-extrabold">Quality, safety and worker support</p><p className="mt-3 text-muted">ISO 9001:2015 certification, ITI-qualified and trained field personnel, protective equipment, PF, ESI and accident insurance.</p></Reveal>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {COMPLIANCE_RECORDS.map((r, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal as="li" key={r.title} delay={i * 0.07} className="flex gap-4 rounded-2xl border border-line bg-white/80 p-5 shadow-sm">
                <span className={`grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${GRADS[i]} text-white shadow-sm`}><Icon aria-hidden className="size-6" strokeWidth={1.9} /></span>
                <div>
                  <h3 className="text-lg font-extrabold text-ink">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{r.text}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
