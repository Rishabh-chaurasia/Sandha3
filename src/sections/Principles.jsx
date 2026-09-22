import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { Search, Handshake, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import PrincipleScene from '../illustrations/PrincipleScenes'
import { PRINCIPLES, VALUES } from '../data/company'

const STAGES = [
  { Icon: Search, grad: 'from-brand to-cyan', glow: 'rgba(8,120,249,.55)', word: 'Understand' },
  { Icon: Handshake, grad: 'from-purple to-electric', glow: 'rgba(124,92,252,.55)', word: 'Partner' },
  { Icon: ShieldCheck, grad: 'from-mint to-cyan', glow: 'rgba(40,215,178,.55)', word: 'Trust' },
]

function Stage({ i, stage, p, last }) {
  const { Icon } = stage
  const at = i * 0.5
  const act = useTransform(p, [Math.max(0, at - 0.04), at + 0.06], [0, 1])
  const scale = useTransform(act, [0, 1], [1, 1.12])
  const seg = useTransform(p, [at, at + 0.5], [0, 1], { clamp: true })
  const segPct = useTransform(seg, (v) => `${v * 100}%`)
  const txt = useTransform(act, [0, 1], [0.4, 1])
  const head = useTransform(seg, (v) => (v > 0.02 && v < 0.98 ? 1 : 0))
  const info = PRINCIPLES[i]

  return (
    <li className="relative flex gap-6 pb-14 last:pb-0 lg:block lg:pb-0">
      {/* connector: vertical on mobile, horizontal on desktop. The fill is width/height-driven
          so the glowing head keeps its shape while the path advances. */}
      {!last && (
        <>
          <span aria-hidden className="absolute bottom-0 left-[35px] top-[72px] w-1.5 -translate-x-1/2 rounded-full bg-line lg:hidden">
            <motion.span style={{ height: segPct }} className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-brand via-cyan to-purple shadow-[0_0_18px_rgba(25,198,232,.8)]">
              <motion.span style={{ opacity: head }} className="absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-white shadow-[0_0_16px_6px_rgba(25,198,232,.9)]" />
            </motion.span>
          </span>
          <span aria-hidden className="absolute left-[72px] right-[-32px] top-[35px] hidden h-1.5 -translate-y-1/2 rounded-full bg-line lg:block">
            <motion.span style={{ width: segPct }} className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand via-cyan to-purple shadow-[0_0_18px_rgba(25,198,232,.8)]">
              <motion.span style={{ opacity: head }} className="absolute -right-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_6px_rgba(25,198,232,.9)]" />
            </motion.span>
          </span>
        </>
      )}

      <motion.div style={{ scale }} animate={{ y: [0, -7, 0] }} transition={{ duration: 3.8 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }} className="relative z-10 size-[72px] shrink-0">
        <span className="absolute inset-0 rounded-full border-2 border-line bg-white" />
        <motion.span style={{ opacity: act, boxShadow: `0 0 34px 6px ${stage.glow}` }} className={`absolute inset-0 rounded-full bg-gradient-to-br ${stage.grad}`} />
        <Icon aria-hidden className="absolute inset-0 m-auto size-8 text-brand" strokeWidth={1.8} />
        <motion.span style={{ opacity: act }} className="absolute inset-0 grid place-items-center text-white"><Icon aria-hidden className="size-8" strokeWidth={1.9} /></motion.span>
      </motion.div>

      <motion.div style={{ opacity: txt }} className="lg:mt-7 lg:pr-10">
        <h3 className="text-2xl font-extrabold text-ink">{stage.word}</h3>
        <p className="mt-1 text-base font-extrabold text-ink/80">{info.title}</p>
        <p className="mt-2 max-w-[38ch] text-sm text-muted">{info.text}</p>
        <PrincipleScene kind={['understand', 'partner', 'trust'][i]} className="mt-4 h-auto w-full max-w-[210px]" />
      </motion.div>
    </li>
  )
}

export default function Principles({ id = 'principles' }) {
  const ref = useRef(null)
  const reduce = false
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 78%', 'end 62%'] })
  const spring = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 })
  const done = useMotionValue(1)
  const p = reduce ? done : spring

  return (
    <section id={id} className="section bg-p2w py-10 lg:py-16" aria-labelledby={`${id}-title`}>
      <div className="container-x">
        <SectionHeading label="Our principles" id={`${id}-title`} size="md" title="Understand. Partner. Earn trust.">
          <p>Our success is tied to the success of our clients. Three commitments shape how we work with every one of them.</p>
        </SectionHeading>

        <ol ref={ref} className="mt-10 grid gap-0 lg:grid-cols-3 lg:gap-6">
          {STAGES.map((st, i) => <Stage key={st.word} i={i} stage={st} p={p} last={i === STAGES.length - 1} />)}
        </ol>

        <dl className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {VALUES.map((v) => (
            <div key={v.title}>
              <dt className="text-xl font-extrabold text-ink">{v.title}</dt>
              <dd className="mt-2 max-w-[56ch] text-muted">{v.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
