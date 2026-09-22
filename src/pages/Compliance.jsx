import { ExternalLink, FileText } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { COMPLIANCE_RECORDS, COMPANY } from '../data/company'

const STAGES = [
  { t: 'Document', d: 'Wages registers, challans and statements are prepared each month for the deployment.' },
  { t: 'Verify', d: 'Records are checked against payroll and statutory contributions before they go out.' },
  { t: 'Approve', d: 'Approved records are shared with the client for the relevant period.' },
  { t: 'Archive', d: 'Records stay available month by month on our official compliance page.' },
]

export default function Compliance() {
  return (
    <>
      <Seo
        title="Compliance | Sandha & Company"
        description="How Sandha & Company documents, verifies and publishes statutory compliance records, including wages registers, ESIC and EPFO challans and salary bank statements."
        path="/compliance"
      />
      <PageHero
        tone="plain"
        eyebrow="COMPLIANCE"
        title="Statutory records, documented month by month."
        lead="Compliance is part of the service, not an afterthought. Records for client deployments are prepared, verified and published for the period they cover."
        illustration="compliance"
        crumbs={[{ label: 'Compliance' }]}
      />

      <section className="bg-ultra section" aria-labelledby="records-title">
        <div className="container-x">
          <Reveal>
            <h2 id="records-title" className="max-w-[20ch] h-sub text-ink">What we publish</h2>
          </Reveal>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2">
            {COMPLIANCE_RECORDS.map((r) => (
              <li key={r.title} className="bg-white p-7">
                <span className="grid size-11 place-items-center rounded-full bg-soft text-brand"><FileText aria-hidden className="size-5" /></span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
          <Reveal className="mt-10">
            <Button href={COMPANY.officialComplianceUrl} target="_blank" rel="noopener noreferrer" arrow={false}>
              Official compliance records <ExternalLink aria-hidden className="size-4" />
            </Button>
            <p className="mt-3 text-sm text-muted">Records are hosted on our official site and are updated for each period.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white section" aria-labelledby="process-title">
        <div className="container-x">
          <Reveal>
            <h2 id="process-title" className="max-w-[20ch] h-sub text-ink">How a record moves</h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 0.08} className="border-t-2 border-line pt-5 transition-colors hover:border-brand">
                <span className="font-display text-sm font-extrabold tabular-nums text-brand">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Clear compliance support for every deployment" text="Our team will explain the applicable records, reporting cycle and documentation process." />
    </>
  )
}
