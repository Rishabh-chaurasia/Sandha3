import { motion } from 'framer-motion'
import { PhoneCall, LayoutDashboard, Smartphone, MapPinned, ClipboardCheck, MessageSquareText, PhoneOutgoing, Flag, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react'
import { FIELD_OPS } from '../data/services'

// Snake-style flow modelled on the company profile slide: steps 1-4 run left to right,
// the path turns down, and steps 5-7 run back right to left to the finish flag.
const STEPS = [
  { title: 'Consumer calls', Icon: PhoneCall, from: '#0878F9', to: '#19C6E8' },
  { title: 'Control room sorts', Icon: LayoutDashboard, from: '#7C5CFC', to: '#4D7CFE' },
  { title: 'Sent to field staff', Icon: Smartphone, from: '#0F9E93', to: '#28D7B2' },
  { title: 'FRT reaches the site', Icon: MapPinned, from: '#E06B4B', to: '#F5A524' },
  { title: 'Status and signature', Icon: ClipboardCheck, from: '#C9861A', to: '#F5B301' },
  { title: 'SMS to the consumer', Icon: MessageSquareText, from: '#4266C9', to: '#19C6E8' },
  { title: 'Closure verified', Icon: PhoneOutgoing, from: '#18A882', to: '#28D7B2' },
].map((s, i) => ({ ...s, text: FIELD_OPS.lifecycle[i] }))

// Desktop grid placement for the snake (Tailwind needs literal class names).
const PLACE = [
  'lg:col-start-1 lg:row-start-1', 'lg:col-start-2 lg:row-start-1', 'lg:col-start-3 lg:row-start-1', 'lg:col-start-4 lg:row-start-1',
  'lg:col-start-4 lg:row-start-2', 'lg:col-start-3 lg:row-start-2', 'lg:col-start-2 lg:row-start-2',
]
// Direction of the arrow leaving each step on desktop.
const DIR = ['right', 'right', 'right', 'down', 'left', 'left', 'left']

function Chevrons({ dir, className = '' }) {
  const Icon = dir === 'right' ? ChevronRight : dir === 'left' ? ChevronLeft : ChevronDown
  const order = dir === 'left' ? [2, 1, 0] : [0, 1, 2]
  return (
    <span aria-hidden className={`pointer-events-none flex items-center ${dir === 'down' ? 'flex-col -space-y-3' : '-space-x-3'} ${className}`}>
      {order.map((k) => (
        <motion.span key={k} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.4, repeat: Infinity, delay: k * 0.22, ease: 'easeInOut' }}>
          <Icon className="size-7 text-[#F5B301]" strokeWidth={3.2} />
        </motion.span>
      ))}
    </span>
  )
}

export default function ComplaintLifecycle() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#dfeafb] bg-gradient-to-br from-[#f2f8ff] via-white to-[#fff8e8] p-5 sm:p-8 lg:p-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(#b9cdea 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'linear-gradient(180deg,#000,transparent 85%)' }} />
      <div className="relative">
        <p className="text-sm font-bold tracking-[0.18em] text-brand">CONSUMER COMPLAINT LIFECYCLE</p>
        <h3 className="mt-2 max-w-[34ch] font-display text-[clamp(1.5rem,1.1rem+1.4vw,2.2rem)] leading-tight text-ink">From the first call to a confirmed closure.</h3>

        <ol className="mt-8 grid grid-cols-1 gap-y-16 lg:mt-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16 xl:gap-x-12">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative ${PLACE[i]}`}
            >
              <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white bg-white/95 px-4 pb-5 pt-6 text-center shadow-[0_14px_34px_-18px_rgba(15,35,70,.35)] transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_40px_-18px_rgba(15,35,70,.45)]">
                <span aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${s.from}, ${s.to})` }} />
                <span className="relative grid size-16 place-items-center rounded-full text-white ring-[6px] transition-transform duration-300 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})`, boxShadow: `0 12px 24px -10px ${s.from}`, '--tw-ring-color': `${s.from}22` }}>
                  <s.Icon className="size-8" />
                </span>
                <span className="mt-4 rounded-full px-2.5 py-0.5 text-[11px] font-extrabold tracking-[0.14em]" style={{ color: s.from, backgroundColor: `${s.from}14` }}>STEP {String(i + 1).padStart(2, '0')}</span>
                <span className="mt-2 text-base font-extrabold leading-tight text-ink">{s.title}</span>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>

              {/* arrow to the next step: down on phones and tablets, snake direction on desktop */}
              <Chevrons dir="down" className="absolute -bottom-[62px] left-1/2 -translate-x-1/2 lg:hidden" />
              {DIR[i] === 'right' && <Chevrons dir="right" className="absolute -right-[42px] top-[42px] xl:-right-[46px] hidden lg:flex" />}
              {DIR[i] === 'left' && <Chevrons dir="left" className="absolute -left-[42px] top-[42px] xl:-left-[46px] hidden lg:flex" />}
              {DIR[i] === 'down' && <Chevrons dir="down" className="absolute -bottom-[58px] left-1/2 hidden -translate-x-1/2 lg:flex" />}
            </motion.li>
          ))}

          {/* finish flag */}
          <motion.li
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-start-1 lg:row-start-2 flex items-center justify-center"
          >
            <div className="relative flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#18A882]/50 bg-[#e9fbf4] px-5 py-6 text-center">
              <motion.span animate={{ rotate: [0, -8, 0, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-[#18A882] to-[#28D7B2] text-white shadow-lg">
                <Flag className="size-7" />
              </motion.span>
              <span className="font-display text-xl font-bold text-ink">Complaint closed</span>
              <span className="text-sm text-muted">Only after the consumer confirms it</span>
            </div>
          </motion.li>
        </ol>
      </div>
    </div>
  )
}
