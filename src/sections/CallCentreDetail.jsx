import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Headset, Archive, MonitorSmartphone, Truck, Radar } from 'lucide-react'
import Reveal from '../components/Reveal'
import ComplaintLifecycle from './ComplaintLifecycle'
import { CALL_GROUPS, SALES_NOTE, FIELD_OPS, FEEDBACK } from '../data/services'
import { EASE, cn } from '../utils/motion'

const ICONS = { voice: Phone, support: Headset, backoffice: Archive, digital: MonitorSmartphone }

export default function CallCentreDetail() {
  const [open, setOpen] = useState('voice')
  return (
    <>
      <section className="bg-white section !py-9 lg:!py-12" aria-labelledby="cc-cat">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[.2em] text-brand">Connected customer operations</p>
            <h2 id="cc-cat" className="mt-3 max-w-[20ch] h-sub text-ink">Voice and digital support, one responsive team.</h2>
            <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">{SALES_NOTE}</p>
          </Reveal>

          <div className="mt-10 space-y-12">
            {CALL_GROUPS.map((g) => (
              <div key={g.parent}>
                <h3 className={`text-sm font-bold tracking-[0.18em] ${g.parent === 'Voice' ? 'text-brand' : 'text-purple'}`}>{g.parent.toUpperCase()}</h3>
                <ul className={`mt-4 divide-y border-y ${g.parent === 'Voice' ? 'divide-[#cfe2f8] border-[#cfe2f8]' : 'divide-[#e2d9fa] border-[#e2d9fa]'}`}>
                  {g.items.map((item) => {
                    const Icon = ICONS[item.key]
                    const on = open === item.key
                    return (
                      <li key={item.key}>
                        <button
                          type="button"
                          onClick={() => setOpen(on ? null : item.key)}
                          aria-expanded={on}
                          aria-controls={`cc-${item.key}`}
                          className={cn('flex w-full items-center gap-4 rounded-xl px-3 py-5 text-left transition-colors', on && (g.parent === 'Voice' ? 'bg-[#edf6ff]' : 'bg-[#f4efff]'))}
                        >
                          <span className={cn('grid size-11 shrink-0 place-items-center rounded-full border transition-colors', on ? (g.parent === 'Voice' ? 'border-brand bg-white text-brand' : 'border-purple bg-white text-purple') : 'border-line text-muted')}>
                            <Icon aria-hidden className="size-5" />
                          </span>
                          <span className="flex-1 font-display text-xl font-extrabold tracking-tight text-ink">{item.title}</span>
                          <span aria-hidden className={cn('text-2xl text-brand transition-transform duration-300', on && 'rotate-45')}>+</span>
                        </button>
                        <AnimatePresence initial={false}>
                          {on && (
                            <motion.div
                              id={`cc-${item.key}`}
                              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: EASE }}
                              className="overflow-hidden"
                            >
                              <ul className="flex flex-wrap gap-2 pb-6 sm:pl-15">
                                {item.points.map((p) => (
                                  <li key={p} className={`rounded-full px-4 py-1.5 text-sm font-semibold ${g.parent === 'Voice' ? 'bg-[#e9f4ff] text-brand-deep' : 'bg-[#f0eaff] text-[#6244c3]'}`}>{p}</li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ultra section !py-9 lg:!py-12" aria-labelledby="cc-field">
        <div className="container-x">
          <Reveal>
            <h2 id="cc-field" className="max-w-[24ch] h-sub text-ink">Field operations behind the calls</h2>
            <p className="mt-4 max-w-[60ch] text-muted">For utility clients, complaints taken on the phone are resolved on the ground and tracked to closure.</p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {[
              { title: 'Fault rectification', Icon: Truck, items: FIELD_OPS.fault },
              { title: 'Tracking and escalation', Icon: Radar, items: FIELD_OPS.tracking },
            ].map(({ title, Icon, items }, i) => (
              <Reveal key={title} delay={i * 0.1} className={`rounded-[2rem] border border-line p-7 sm:p-9 ${i === 0 ? 'bg-gradient-to-br from-[#e5f5ff] to-white' : 'bg-gradient-to-br from-[#f0eaff] to-white'}`}>
                <span className={`grid size-12 place-items-center rounded-xl text-white ${i === 0 ? 'bg-brand' : 'bg-purple'}`}><Icon aria-hidden className="size-6" /></span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink">{title}</h3>
                <ul className="mt-4 space-y-3 text-muted">
                  {items.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <ComplaintLifecycle />
        </div>
      </section>

      <section className="bg-white section !py-9 lg:!py-12" aria-labelledby="cc-feedback">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[.2em] text-brand">Consumer feedback</p>
            <h2 id="cc-feedback" className="mt-3 max-w-[24ch] h-sub text-ink">Every call recorded. Every closure checked.</h2>
            <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">After a complaint is resolved, our call centre calls the consumer back to confirm the resolution and take feedback on the call centre and the field team. Results from {FEEDBACK.surveys.toLocaleString('en-IN')} completed surveys:</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FEEDBACK.results.map((r, i) => (
              <Reveal as="li" key={r.label} delay={i * 0.06} className={`flex flex-col rounded-2xl border border-white p-5 ${['bg-gradient-to-br from-[#e5f2ff] to-white','bg-gradient-to-br from-[#e5faf1] to-white','bg-gradient-to-br from-[#fff2df] to-white','bg-gradient-to-br from-[#f0eaff] to-white','bg-gradient-to-br from-[#fff0ed] to-white'][i]}`}>
                <span className={`font-display text-[clamp(2rem,4vw,2.6rem)] font-bold leading-none tracking-tight ${['text-brand-deep','text-[#0f9e73]','text-[#ca7900]','text-[#7456e8]','text-[#d35d45]'][i]} tabular-nums`}>{r.value}%</span>
                <span className="mt-3 text-sm font-bold leading-snug text-ink">{r.label}</span>
                <span className="mt-auto pt-3 text-xs font-semibold text-muted tabular-nums">{r.detail} respondents</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
