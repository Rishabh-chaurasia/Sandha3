import { motion } from 'framer-motion'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import { COMPANY } from '../data/company'
import { EASE } from '../utils/motion'
import { Spin } from '../illustrations/primitives'
import FieldCapacityMetrics from './FieldCapacityMetrics'
import { Search, UsersRound, ClipboardCheck, TrendingUp } from 'lucide-react'

const WORK_STEPS = [
  { number: '01', title: 'Understand the need', text: 'We listen and define the outcome that matters.', Icon: Search },
  { number: '02', title: 'Build the right team', text: 'We bring together the skills and tools needed.', Icon: UsersRound },
  { number: '03', title: 'Deliver with care', text: 'Clear ownership and quality checks guide our work.', Icon: ClipboardCheck },
  { number: '04', title: 'Improve together', text: 'We review results and strengthen the relationship.', Icon: TrendingUp },
]

function Year() {
  const reduce = false
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px]">
      <svg viewBox="0 0 400 400" aria-hidden className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="yr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0878F9" /><stop offset=".55" stopColor="#19C6E8" /><stop offset="1" stopColor="#7C5CFC" /></linearGradient>
          <radialGradient id="yg"><stop offset="0" stopColor="#19C6E8" stopOpacity=".35" /><stop offset="1" stopColor="#19C6E8" stopOpacity="0" /></radialGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="url(#yg)" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#D9E8F7" strokeWidth="1.6" />
        <Spin dur={50}><circle cx="200" cy="200" r="176" fill="none" stroke="url(#yr)" strokeWidth="2.5" strokeDasharray="4 12" strokeLinecap="round" /></Spin>
        <Spin dur={80} reverse><circle cx="200" cy="200" r="122" fill="none" stroke="#7C5CFC" strokeOpacity=".5" strokeWidth="1.6" strokeDasharray="1 10" strokeLinecap="round" /></Spin>
        <motion.g animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="24" r="9" fill="#28D7B2" stroke="#fff" strokeWidth="3" />
        </motion.g>
        <motion.g animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="78" r="7" fill="#7C5CFC" stroke="#fff" strokeWidth="3" />
        </motion.g>
      </svg>
      <motion.div
        className="absolute inset-0 grid place-content-center text-center"
        initial={reduce ? false : { opacity: 0, scale: 0.86 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={reduce ? undefined : { scale: [1, 1.025, 1] }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ opacity: { duration: 0.8, ease: EASE }, scale: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <p className="text-sm font-extrabold tracking-[0.2em] text-brand">SERVING SINCE</p>
        <p className="grad-text font-display text-[clamp(4.5rem,12vw,7.5rem)] font-extrabold leading-none tracking-[-0.06em]">
          <Counter value={2008} from={1990} duration={2.2} />
        </p>
      </motion.div>
    </div>
  )
}

export default function Story({ id = 'story', variant = 'home' }) {
  const detail = variant === 'detail'
  if (detail) {
    return (
      <section id={id} className="section bg-white !py-8 lg:!py-10" aria-labelledby={`${id}-title`}>
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[2rem] border-[5px] border-[#17191d] bg-[#fafafa] px-5 py-7 sm:px-8 sm:py-8 lg:rounded-[2.75rem] lg:px-12 lg:py-9">
            <span aria-hidden className="absolute right-[13%] top-8 size-16 rounded-full bg-[#f0f1f2] sm:size-20" />
            <span aria-hidden className="absolute bottom-[-2rem] left-1/2 size-16 -translate-x-1/2 rounded-full bg-[#f0f1f2]" />
            <div className="relative z-10 min-h-[105px] sm:min-h-[120px] lg:min-h-[115px]">
              <h2 id={`${id}-title`} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[.9] tracking-[-.055em] text-[#111318]">
                How we<br />work?
              </h2>
            </div>
            <div className="relative mt-5 lg:mt-0 lg:pb-24">
              <svg aria-hidden="true" viewBox="0 0 1100 270" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-0 hidden h-[220px] w-full lg:block">
                <defs>
                  <marker id="work-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#7d838b" /></marker>
                </defs>
                <path className="work-flow-path" d="M86 43 C165 43 190 131 275 131" fill="none" stroke="#8d96a3" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" markerEnd="url(#work-arrow)" />
                <path className="work-flow-path work-flow-path-delay-1" d="M361 131 C445 131 468 43 550 43" fill="none" stroke="#8d96a3" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" markerEnd="url(#work-arrow)" />
                <path className="work-flow-path work-flow-path-delay-2" d="M636 43 C720 43 744 131 825 131" fill="none" stroke="#8d96a3" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" markerEnd="url(#work-arrow)" />
              </svg>
              <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pt-1">
                {WORK_STEPS.map(({ number, title, text, Icon }, index) => (
                  <motion.li
                    key={number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.12, ease: EASE }}
                    className={`flex min-h-[118px] items-center gap-4 rounded-2xl bg-white/75 p-4 shadow-sm lg:min-h-0 lg:flex-col lg:items-start lg:gap-3 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none ${index % 2 ? 'lg:translate-y-[70px]' : ''}`}
                  >
                    <span className={`work-flow-icon work-flow-icon-${index} grid size-[86px] shrink-0 place-items-center rounded-full border-[8px] border-[#f4b400] bg-[#e51c2a] text-white shadow-md sm:size-[96px] sm:border-[9px] lg:size-[78px] lg:border-[7px]`}>
                      <Icon aria-hidden className="size-10 sm:size-12 lg:size-9" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-2xl font-black leading-none text-[#181a1d]">{number}</span>
                      <span className="mt-2 block text-base font-extrabold leading-tight text-[#181a1d] sm:text-lg lg:text-base">{title}</span>
                      <span className="mt-1 block text-sm leading-snug text-[#5d6269]">{text}</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }
  return (
    <section id={id} className="section bg-w2p !pt-2 !pb-2 sm:!pt-2 sm:!pb-2 lg:!pt-1 lg:!pb-2" aria-labelledby={`${id}-title`}>
      <div className="container-x grid items-center gap-12 lg:min-h-0 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.14em] text-brand">
              <span aria-hidden className="h-[3px] w-9 rounded-full bg-gradient-to-r from-brand to-cyan" />
              {detail ? 'Our foundation' : 'About us'}
            </p>
            <h2 id={`${id}-title`} className={`text-[clamp(2rem,1rem+3vw,3.6rem)] leading-[1.02] tracking-[-0.04em] ${detail ? 'text-white' : 'text-ink'}`}>
              {detail ? 'A practical foundation for reliable service.' : 'Built on experience.'}
              {!detail && <>
              <br />
              <span className="grad-text">Growing since 2008.</span>
              </>}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid gap-6 sm:grid-cols-2">
            <p className={`lead ${detail ? 'text-white/70' : ''}`}>We bring together people, processes and technology to make essential services more reliable and responsive.</p>
            <p className={`lead ${detail ? 'text-white/70' : ''}`}>
              Our focus is practical; understand the need, build the right capability and deliver with care.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 border-l-4 border-cyan pl-5">
            <p className={`max-w-[52ch] text-lg font-bold ${detail ? 'text-white/85' : 'text-ink/85'}`}>{COMPANY.philosophy}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-5 lg:col-span-5 lg:mt-24"><Year /></Reveal>
      </div>
      <FieldCapacityMetrics />
    </section>
  )
}
