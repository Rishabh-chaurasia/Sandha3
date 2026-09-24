import { Zap, Truck, Construction, HardHat, ShieldCheck, Cable, TrafficCone, UsersRound } from 'lucide-react'
import Reveal from '../components/Reveal'

const LINES = [
  { name: 'Low tension (LT)', voltage: '440 V', text: 'Distribution lines, service connections and pillar boxes that feed homes and shops. Most no-current complaints are fixed here.', color: '#0F9E93', tint: '#dff8f1' },
  { name: 'High tension (HT)', voltage: '11 kV – 33 kV', text: 'Feeders and transformer-side lines. Work starts only after the HT supply is shut down and the line is earthed.', color: '#0878F9', tint: '#e3f1ff' },
]

const FLEET = [
  { Icon: Truck, value: '1,000+', label: 'FRT vehicles and lifters', text: 'GPS-fitted light commercial vehicles carrying tools, a lineman, technician and driver, plus Hydra lifters for work at height.' },
  { Icon: Construction, value: '100+', label: 'Transformer replacement cranes', text: 'Cranes for swapping failed distribution transformers without long outages.' },
  { Icon: UsersRound, value: '2,000+', label: 'FRT and breakdown specialists', text: 'ITI-qualified linemen and technicians trained to work on live electrical networks.' },
]

const SAFETY = [
  [HardHat, 'Gloves, safety shoes and helmet on every job, without exception'],
  [Zap, 'Feeder supply verified and the correct shutdown procedure followed'],
  [Cable, 'HT line shut down first wherever it crosses an LT pole line'],
  [ShieldCheck, 'Lines shorted with an earth rod or chain before they are handled'],
  [TrafficCone, 'Ladders placed on flat ground and the work area checked before climbing'],
  [ShieldCheck, 'Shutdown taken before any work on or near a transformer'],
]

export default function FrtDetail() {
  return (
    <>
      <section className="section bg-ultra !py-9 lg:!py-12" aria-labelledby="frt-lines">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[.2em] text-brand">Live-line operation and maintenance</p>
            <h2 id="frt-lines" className="mt-3 max-w-[24ch] h-sub text-ink">We work on both LT and HT networks.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {LINES.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.1} className="relative overflow-hidden rounded-[2rem] border p-7 shadow-sm sm:p-9" style={{ backgroundColor: l.tint, borderColor: `${l.color}38` }}>
                <span aria-hidden className="absolute -right-10 -top-10 size-36 rounded-full border-[18px] opacity-30" style={{ borderColor: l.color }} />
                <p className="text-sm font-extrabold uppercase tracking-[.14em]" style={{ color: l.color }}>{l.name}</p>
                <p className="relative mt-3 font-display text-[clamp(2.6rem,6vw,4rem)] font-extrabold leading-none tracking-[-.04em] text-ink">{l.voltage}</p>
                <p className="relative mt-4 max-w-[48ch] text-muted">{l.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white !py-9 lg:!py-12" aria-labelledby="frt-fleet">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[.2em] text-brand">Fleet and crews</p>
            <h2 id="frt-fleet" className="mt-3 max-w-[24ch] h-sub text-ink">Vehicles, lifters and cranes on call.</h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {FLEET.map(({ Icon, value, label, text }, i) => (
              <Reveal as="li" key={label} delay={i * 0.08} className="rounded-2xl border border-line bg-gradient-to-br from-white to-soft p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-[#0F9E93] text-white"><Icon aria-hidden className="size-6" /></span>
                <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink tabular-nums">{value}</p>
                <p className="mt-1 font-extrabold text-ink">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-[#e5f7f1] via-[#f4fbf7] to-[#fff7e8] text-ink !pt-9 lg:!pt-12" aria-labelledby="frt-safety">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#0f9e73]">Safety first</p>
            <h2 id="frt-safety" className="mt-3 h-sub text-ink">Working towards zero incidents.</h2>
            <p className="mt-4 max-w-[46ch] text-muted">Safety training is held in front of the workers' families, and every lineman takes an oath to wear safety gear at all times.</p>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {SAFETY.map(([Icon, text], i) => (
              <Reveal as="li" key={text} delay={i * 0.05} className="flex gap-3 rounded-2xl border border-[#cceade] bg-white/80 p-4 shadow-sm">
                <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-[#0f9e73]" />
                <span className="text-sm leading-relaxed text-ink/85">{text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
