import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import ServiceModule from '../components/ServiceModule'
import { SERVICES, ORDERED_SERVICES } from '../data/services'
import CallCentreDetail from '../sections/CallCentreDetail'
import FrtDetail from '../sections/FrtDetail'

// Each service page gets its own hero background and body layout.
const LAYOUT = {
  'utility-operations': { tone: 'cyan', body: 'stack' },
  'manpower-management': { tone: 'soft', body: 'stack' },
  'contact-centre': { tone: 'dots', body: 'custom' },
  'technology-services': { tone: 'lines', body: 'stack' },
  'water-utility': { tone: 'rings', body: 'stack' },
  'trolley-mounted-lifters': { tone: 'soft', body: 'stack' },
  'sky-lifters': { tone: 'cyan', body: 'stack' },
  'operations-maintenance': { tone: 'lines', body: 'stack' },
}

function Stack({ s }) {
  const shades = [
    ['#e5f2ff', '#0878f9'], ['#e5faf4', '#0f9e93'], ['#f0ebff', '#7456e8'], ['#fff0df', '#e38630'], ['#ffe9ef', '#e2607e'],
  ]
  return (
    <section className="bg-white section !py-8 lg:!py-12">
        <div className="container-x space-y-6 lg:space-y-8">
        {s.areas.map((a, i) => {
          const [tint, accent] = shades[i % shades.length]
          return <Reveal key={a.title} delay={i * 0.05} className="grid gap-4 rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 sm:grid-cols-[auto_1fr] sm:gap-10" style={{ backgroundColor: tint, borderColor: `${accent}35` }}>
            <span className="grid size-12 place-items-center rounded-xl font-display text-sm font-extrabold tabular-nums text-white" style={{ backgroundColor: accent }}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-tight text-ink">{a.title}</h2>
              <p className="mt-2 text-lg leading-relaxed text-muted">{a.text}</p>
            </div>
          </Reveal>
        })}
      </div>
    </section>
  )
}

function Split({ s }) {
  return (
    <section className="bg-white section">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal>
          <h2 className="max-w-[16ch] h-sub text-ink">What the engagement covers</h2>
          <p className="mt-4 text-muted">{s.summary}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul>
            {s.areas.map((a, i) => <ServiceModule key={a.title} index={i} title={a.title} text={a.text} accent={s.accent} />)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function List({ s }) {
  return (
    <section className="bg-white section">
      <div className="container-x">
        <Reveal>
          <h2 className="max-w-[20ch] h-sub text-ink">HR services around the workforce we place</h2>
        </Reveal>
        <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {s.areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06} className={i % 2 ? 'sm:mt-10' : ''}>
              <dt className="flex items-start gap-3 text-xl font-extrabold tracking-tight text-ink">
                <Check aria-hidden className="mt-1 size-5 shrink-0 text-cyan" />
                {a.title}
              </dt>
              <dd className="mt-2 pl-8 text-muted">{a.text}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Grid({ s }) {
  const steps = s.areas.slice(0, 4)
  const rest = s.areas.slice(4)
  const grads = ['grad-text-b', 'grad-text-p', 'grad-text-m', 'grad-text-bp']
  return (
    <section className="section bg-w2p">
      <div className="container-x">
        <Reveal>
          <h2 className="h-sub max-w-[22ch] text-ink">From the first shortlist to the first day</h2>
        </Reveal>
        <ol className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {steps.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 0.08} className="flex items-start gap-6">
              <span aria-hidden className={`${grads[i]} font-display text-[clamp(4.5rem,9vw,7rem)] font-extrabold leading-[0.85] tracking-[-0.06em]`}>{String(i + 1).padStart(2, '0')}</span>
              <div className="pt-2">
                <h3 className="text-2xl font-extrabold text-ink">{a.title}</h3>
                <p className="mt-2 max-w-[38ch] text-muted">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        {rest.length > 0 && (
          <Reveal className="mt-14 rounded-[2rem] bg-white p-7 shadow-bubble sm:p-9">
            {rest.map((a) => (
              <div key={a.title}>
                <h3 className="text-xl font-extrabold text-ink">{a.title}</h3>
                <p className="mt-1 max-w-[62ch] text-muted">{a.text}</p>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  )
}

const BODIES = { stack: Stack, split: Split, list: List, grid: Grid }

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return <Navigate to="/services" replace />

  const { tone, body } = LAYOUT[s.slug]
  const Body = BODIES[body]
  const others = ORDERED_SERVICES.filter((x) => x.slug !== s.slug)

  return (
    <>
      <Seo
        title={`${s.title} | Sandha & Company`}
        description={s.seo}
        path={`/services/${s.slug}`}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: s.seo, provider: { '@type': 'Organization', name: 'Sandha & Company' }, areaServed: 'IN' }}
      />
      <PageHero
        tone={tone}
        eyebrow={`SERVICE ${s.n}`}
        title={s.tagline}
        lead={s.summary}
        illustration={s.slug}
        photo={s.photo}
        photoAlt={s.photoAlt}
        photoClassName={s.slug === 'utility-operations' ? 'lg:translate-y-6' : ''}
        illustrationClassName="max-h-[460px] object-contain"
        sectionClassName="min-h-[700px] !pb-11 !pt-[112px] sm:!pb-12 sm:!pt-[124px] lg:!pb-[72px] lg:!pt-[100px] lg:min-h-[700px]"
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]}
      />

      {Body ? <Body s={s} /> : <CallCentreDetail />}
      {s.slug === 'utility-operations' && <FrtDetail />}

      <section className="bg-white py-7 lg:py-10" aria-label="Other services">
        <div className="container-x">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-muted">Other services</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/services/${o.slug}`} className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-extrabold text-ink transition hover:border-brand hover:text-brand">
                  {o.title}
                  <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Discuss ${s.title} for your organisation`} text="Tell us your requirements and we can scope the right delivery model together." />
    </>
  )
}
