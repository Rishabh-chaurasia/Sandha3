import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, Zap, Compass, Headset, Users } from 'lucide-react'
import { Stage, Dash, G, Float, Particle, curve } from './primitives'
import { Confetti, Chip, K } from './figures'

// Photos shown inside the centre circle. The first combines all services; the rest match the service nodes
// around it. They rotate every few seconds, and clicking a node shows that service's photo.
// Swap any file in public/photos/hero/ for the company's own photo; keep the names or update them here.
const SLIDES = {
  all: { src: "/photos/hero/all-services.webp", label: 'All our services' },
  technology: { src: "/photos/hero/technology.webp", label: 'Technology' },
  lifting: { src: "/photos/hero/lifting-utility-crew.png", label: 'Lifting & Mounting' },
  operations: { src: "/photos/hero/operations.webp", label: 'Operations & maintenance' },
  support: { src: "/photos/hero/support.webp", label: 'Service Support' },
  manpower: { src: "/photos/hero/manpower.webp", label: 'Manpower' },
}
const ORDER = Object.keys(SLIDES)
const ROTATE_MS = 4000
const PAUSE_AFTER_CLICK_MS = 10000

function useSlides() {
  const [active, setActive] = useState('all')
  const pausedUntil = useRef(0)
  useEffect(() => {
    const id = setInterval(() => {
      if (Date.now() < pausedUntil.current) return
      setActive((cur) => ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length])
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [])
  const pick = (key) => { pausedUntil.current = Date.now() + PAUSE_AFTER_CLICK_MS; setActive(key) }
  return [active, pick]
}

/** Circular photo that cross-fades between the service slides, with the current service named on a pill. */
function PhotoCircle({ cx, cy, r, active, id, pillFs = 14 }) {
  const size = r * 2.1
  const label = SLIDES[active].label
  const pillW = label.length * pillFs * 0.58 + 34
  return (
    <g>
      <defs>
        <clipPath id={`${id}-clip`}><circle cx={cx} cy={cy} r={r} /></clipPath>
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#1f3a8a" floodOpacity=".22" /></filter>
      </defs>
      <circle cx={cx} cy={cy} r={r + 10} fill="#fff" filter={`url(#${id}-shadow)`} />
      <g clipPath={`url(#${id}-clip)`}>
        {ORDER.map((key) => (
          <motion.image
            key={key}
            href={SLIDES[key].src}
            x={cx - size / 2} y={cy - size / 2} width={size} height={size}
            preserveAspectRatio="xMidYMid slice"
            initial={false}
            animate={{ opacity: key === active ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        ))}
      </g>
      <motion.g key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <rect x={cx - pillW / 2} y={cy + r - pillFs * 3.3} width={pillW} height={pillFs * 2} rx={pillFs} fill="#fff" fillOpacity=".92" />
        <text x={cx} y={cy + r - pillFs * 1.95} textAnchor="middle" fontSize={pillFs} fontWeight="800" fill="#0f2346" style={{ fontFamily: 'var(--font-sans)' }}>{label}</text>
      </motion.g>
    </g>
  )
}

/** Service node that shows its photo in the circle when clicked (or activated from the keyboard). */
function ServiceNode({ n, i, active, pick, r, fs, amp, delay }) {
  const on = active === n.key
  const choose = () => pick(n.key)
  return (
    <Float amp={amp} dur={5 + i} delay={i * 0.4}>
      <g
        role="button" tabIndex={0} aria-pressed={on} aria-label={`Show ${n.label} photo`}
        onClick={choose} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose() } }}
        style={{ cursor: 'pointer', outline: 'none' }}
      >
        <circle cx={n.at[0]} cy={n.at[1]} r={r + 7} fill="none" stroke={n.color} strokeWidth="3" style={{ opacity: on ? 1 : 0, transition: 'opacity .3s' }} />
        <Chip cx={n.at[0]} cy={n.at[1]} r={r} Icon={n.Icon} color={n.color} label={n.label} fs={fs} delay={delay} />
      </g>
    </Float>
  )
}

const CONF = [
  ['ring', 70, 60, 9, K.cyan], ['tri', 330, 30, 9, K.coral], ['plus', 620, 40, 9, K.violet], ['dot', 730, 220, 7, K.mint],
  ['dot', 40, 330, 7, K.pink], ['tri', 712, 560, 9, K.amber], ['ring', 90, 590, 8, K.violet], ['plus', 460, 22, 8, K.mint],
]

export default function HeroEcosystem({ mobile = false, className = '' }) {
  const [active, pick] = useSlides()
  if (mobile) return <HeroMobile className={className} active={active} pick={pick} />
  const hub = [390, 400]
  const nodes = [
    { key: 'technology', at: [120, 210], Icon: Cloud, label: 'Technology', color: K.blue },
    { key: 'lifting', at: [270, 82], Icon: Compass, label: 'Lifting & Mounting', color: K.violet },
    { key: 'operations', at: [590, 76], Icon: Zap, label: 'Operations & maintenance', color: K.cyan },
    { key: 'support', at: [680, 330], Icon: Headset, label: 'Service Support', color: K.mint },
    { key: 'manpower', at: [96, 470], Icon: Users, label: 'Manpower', color: K.coral },
  ]
  return (
    <Stage viewBox="0 0 760 640" className={className} label="Connected technology, field response, line maintenance, call centre and manpower services">
      <G v="fade" delay={0.05}>
        <circle cx="400" cy="340" r="270" fill={K.lav} opacity=".85" />
        <circle cx="560" cy="200" r="120" fill="#DDF3FF" opacity=".5" />
      </G>
      <Confetti items={CONF} />

      {/* connectors */}
      {nodes.map((n, i) => {
        const d = curve(hub, n.at, i % 2 ? 0.2 : -0.2)
        return (
          <g key={n.color}>
            <Dash d={d} delay={0.5 + i * 0.12} color={n.color} w={2.6} gap="2 9" />
            <Particle path={d} dur={4 + i * 0.4} delay={i * 0.6} color={n.color} />
          </g>
        )
      })}

      {/* service photos in the centre circle */}
      <G v="rise" delay={0.2}>
        <Float amp={5} dur={7}>
          <PhotoCircle cx={400} cy={330} r={185} active={active} id="hero-photo" />
        </Float>
      </G>

      {/* floating nodes */}
      {nodes.map((n, i) => (
        <ServiceNode key={n.key} n={n} i={i} active={active} pick={pick} r={32} fs={15} amp={4 + (i % 3) * 2} delay={0.7 + i * 0.12} />
      ))}

    </Stage>
  )
}

function HeroMobile({ className, active, pick }) {
  const hub = [210, 230]
  const nodes = [
    { key: 'technology', at: [64, 66], Icon: Cloud, label: 'Technology', color: K.blue },
    { key: 'operations', at: [315, 66], Icon: Zap, label: 'Operations & maintenance', color: K.cyan },
    { key: 'support', at: [352, 330], Icon: Headset, label: 'Service Support', color: K.mint },
    { key: 'manpower', at: [210, 362], Icon: Users, label: 'Manpower', color: K.coral },
    { key: 'lifting', at: [68, 330], Icon: Compass, label: 'Lifting & Mounting', color: K.violet },
  ]
  return (
    <Stage viewBox="0 0 420 480" className={className} label="Connected technology, line maintenance, call centre and field teams">
      <G v="fade"><circle cx="210" cy="270" r="196" fill={K.lav} /></G>
      <Confetti items={[['ring', 26, 200, 7, K.cyan], ['tri', 394, 210, 8, K.coral], ['dot', 200, 22, 6, K.mint], ['plus', 210, 462, 7, K.violet]]} />
      {nodes.map((n, i) => {
        const d = curve(hub, n.at, i % 2 ? 0.2 : -0.2)
        return <g key={n.label}><Dash d={d} delay={0.5 + i * 0.12} color={n.color} w={2.6} gap="2 9" /><Particle path={d} dur={4 + i * 0.4} delay={i * 0.6} color={n.color} /></g>
      })}
      <G v="rise" delay={0.2}>
        <Float amp={4} dur={7}>
          <PhotoCircle cx={210} cy={222} r={102} active={active} id="hero-photo-m" pillFs={10} />
        </Float>
      </G>
      {nodes.map((n, i) => (
        <ServiceNode key={n.key} n={n} i={i} active={active} pick={pick} r={28} fs={16} amp={4} delay={0.7 + i * 0.12} />
      ))}
    </Stage>
  )
}
