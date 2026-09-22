import { ExternalLink, FileText, ShieldCheck, ScrollText, Landmark } from 'lucide-react'
import AnimatedIllustration from '../components/AnimatedIllustration'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { COMPLIANCE_RECORDS, COMPANY } from '../data/company'

const ICONS = [ScrollText, Landmark, ShieldCheck, FileText]
const GRADS = ['from-brand to-cyan', 'from-purple to-electric', 'from-cyan to-mint', 'from-brand to-purple']

export default function ComplianceSection() {
  return (
    <section className="section bg-w2b" aria-labelledby="compliance-title">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading label="Compliance" id="compliance-title" title="Documented, verified, on record.">
              <p>We publish statutory compliance records openly, so clients can see how workforce obligations are handled, month by month.</p>
            </SectionHeading>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/compliance" magnetic>How we document</Button>
              <Button href={COMPANY.officialComplianceUrl} target="_blank" rel="noopener noreferrer" variant="secondary" arrow={false}>
                Official records <ExternalLink aria-hidden className="size-4" />
              </Button>
            </div>
          </div>
          <Reveal className="lg:col-span-7"><AnimatedIllustration name="compliance" className="h-auto w-full" /></Reveal>
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
