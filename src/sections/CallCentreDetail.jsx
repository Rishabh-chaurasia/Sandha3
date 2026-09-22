import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Headset, Wallet, Archive, MonitorSmartphone, Truck, Radar } from 'lucide-react'
import Reveal from '../components/Reveal'
import { CALL_GROUPS, SALES_NOTE, FIELD_OPS } from '../data/services'
import { EASE, cn } from '../utils/motion'

const ICONS = { voice: Phone, support: Headset, collections: Wallet, backoffice: Archive, digital: MonitorSmartphone }

export default function CallCentreDetail() {
  const [open, setOpen] = useState('voice')
  return (
    <>
      <section className="bg-white section" aria-labelledby="cc-cat">
        <div className="container-x">
          <Reveal>
            <h2 id="cc-cat" className="max-w-[20ch] h-sub text-ink">Voice and non-voice, handled by the same team</h2>
            <p className="mt-4 max-w-[60ch] text-muted">{SALES_NOTE}</p>
          </Reveal>

          <div className="mt-12 space-y-12">
            {CALL_GROUPS.map((g) => (
              <div key={g.parent}>
                <h3 className="text-sm font-bold tracking-[0.18em] text-brand">{g.parent.toUpperCase()}</h3>
                <ul className="mt-4 divide-y divide-line border-y border-line">
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
                          className="flex w-full items-center gap-4 py-5 text-left"
                        >
                          <span className={cn('grid size-11 shrink-0 place-items-center rounded-full border transition-colors', on ? 'border-brand bg-soft text-brand' : 'border-line text-muted')}>
                            <Icon aria-hidden className="size-5" />
                          </span>
                          <span className="flex-1 text-xl font-semibold text-ink">{item.title}</span>
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
                                  <li key={p} className="rounded-full bg-soft px-4 py-1.5 text-sm font-semibold text-brand-deep">{p}</li>
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

      <section className="bg-ultra section" aria-labelledby="cc-field">
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
              <Reveal key={title} delay={i * 0.1} className="rounded-[2rem] border border-line bg-white p-7 sm:p-9">
                <span className="grid size-12 place-items-center rounded-full bg-soft text-brand"><Icon aria-hidden className="size-6" /></span>
                <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
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

          <Reveal className="mt-12">
            <h3 className="text-sm font-bold tracking-[0.18em] text-brand">CONSUMER COMPLAINT LIFECYCLE</h3>
            <ol className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              {FIELD_OPS.lifecycle.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-line bg-white px-5 py-2.5 font-semibold text-ink">{step}</span>
                  {i < FIELD_OPS.lifecycle.length - 1 && <span aria-hidden className="hidden h-px w-8 bg-line sm:block" />}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  )
}
