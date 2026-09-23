import { UsersRound, Workflow, Cpu, ShieldCheck } from 'lucide-react'
import { Stage, G, P, Particle } from './primitives'
import { Chip, Confetti, K } from './figures'

const PILLARS = [
  { x: 118, y: 170, label: 'People', Icon: UsersRound, color: K.cyan },
  { x: 260, y: 110, label: 'Process', Icon: Workflow, color: K.violet },
  { x: 402, y: 170, label: 'Technology', Icon: Cpu, color: K.blue },
]

export default function CompanyFoundation({ className = '' }) {
  return (
    <Stage viewBox="0 0 520 380" className={className} label="Company foundation: people, process and technology connect to reliable service for clients">
      <G v="fade"><circle cx="260" cy="190" r="175" fill={K.lav} opacity=".85" /></G>
      <Confetti items={[["ring", 48, 54, 7, K.cyan], ["plus", 458, 64, 8, K.violet], ["tri", 470, 296, 8, K.coral], ["dot", 66, 316, 6, K.mint]]} />
      <path d="M118 202C162 258 214 276 260 274C308 276 360 258 402 202" fill="none" stroke={K.violetSoft} strokeWidth="3" strokeDasharray="5 9" />
      {PILLARS.map((p, i) => (
        <g key={p.label}>
          <P d={`M${p.x} ${p.y + 34}L260 274`} delay={0.35 + i * 0.16} w={3} color={p.color} />
          <Chip cx={p.x} cy={p.y} r={34} Icon={p.Icon} color={p.color} delay={0.55 + i * 0.16} label={p.label} labelDy={16} />
        </g>
      ))}
      <G v="rise" delay={1.05}>
        <rect x="150" y="256" width="220" height="70" rx="26" fill="#fff" stroke={K.violetSoft} strokeWidth="2" />
        <Chip cx={192} cy={291} r={19} Icon={ShieldCheck} color={K.mint} delay={1.15} />
        <text x="226" y="286" fill={K.ink} fontSize="18" fontWeight="800">Reliable</text>
        <text x="226" y="309" fill={K.muted} fontSize="14" fontWeight="600">service delivery</text>
      </G>
      <Particle path="M118 202C162 258 214 276 260 274C308 276 360 258 402 202" dur={5} delay={1.4} r={4} color={K.coral} />
    </Stage>
  )
}
