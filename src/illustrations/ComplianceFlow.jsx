import { Search, Check, ShieldCheck, Archive, FileText } from 'lucide-react'
import { Stage, P, G, Float, Particle, Txt } from './primitives'
import { Figure, Confetti, Chip, K } from './figures'

const XS = [64, 220, 376, 532]
const LABELS = ['Document', 'Verification', 'Approval', 'Record']
const BANDS = [K.blue, K.cyan, K.violet, K.mint]

function Page({ x, y, band }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 16C0 7 7 0 16 0H66L104 38V122C104 131 97 138 88 138H16C7 138 0 131 0 122Z" fill="#fff" stroke={K.violetSoft} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M66 0V30C66 35 69 38 74 38H104Z" fill={K.lav} />
      <rect x="16" y="54" width="46" height="9" rx="4.5" fill={band} />
      <rect x="16" y="74" width="72" height="6" rx="3" fill={K.lav} />
      <rect x="16" y="88" width="60" height="6" rx="3" fill={K.lav} />
    </g>
  )
}

export default function ComplianceFlow({ className = '' }) {
  const y0 = 92
  const rail = `M${XS[0] + 52} 170H${XS[3] + 52}`
  return (
    <Stage viewBox="0 0 780 360" className={className} label="Compliance flow: a document is verified, approved and stored as a record, with a colleague reviewing it">
      <G v="fade"><ellipse cx="330" cy="180" rx="330" ry="160" fill={K.lav} /></G>
      <Confetti items={[['ring', 30, 40, 8, K.cyan], ['tri', 700, 40, 9, K.coral], ['plus', 400, 24, 8, K.violet], ['dot', 20, 300, 6, K.mint]]} />

      <P d={rail} delay={0.3} w={3} color={K.violetSoft} />
      <Particle path={rail} dur={5} delay={1.5} r={4.6} color={K.violet} />
      <Particle path={rail} dur={5} delay={3.6} r={3.6} color={K.coral} />

      {[0, 1, 2].map((i) => (
        <G key={i} v="rise" delay={0.3 + i * 0.3}>
          <Float amp={4} dur={6 + i * 0.5} delay={i * 0.4}><Page x={XS[i]} y={y0} band={BANDS[i]} /></Float>
        </G>
      ))}
      <Chip cx={XS[0] + 82} cy={y0 + 112} r={20} Icon={FileText} color={K.blue} delay={0.7} />
      <Chip cx={XS[1] + 82} cy={y0 + 112} r={22} Icon={Search} color={K.cyan} delay={1} />
      <Chip cx={XS[2] + 82} cy={y0 + 112} r={22} Icon={ShieldCheck} color={K.violet} delay={1.3} />

      <G v="rise" delay={1.2}>
        <Float amp={4} dur={6} delay={1.5}>
          <rect x={XS[3]} y={y0 + 28} width="104" height="108" rx="18" fill={K.mint} />
          <rect x={XS[3] - 8} y={y0 + 8} width="120" height="32" rx="12" fill="#fff" stroke={K.violetSoft} strokeWidth="2.4" />
          <rect x={XS[3] + 34} y={y0 + 20} width="36" height="8" rx="4" fill={K.cyan} />
          <Archive x={XS[3] + 32} y={y0 + 60} size="40" color="#fff" strokeWidth={1.8} />
        </Float>
      </G>

      {XS.map((x, i) => (
        <G key={x} delay={0.5 + i * 0.25}>
          <circle cx={x + 52} cy="50" r="15" fill={BANDS[i]} stroke="#fff" strokeWidth="2.5" />
          {i === 2 ? <Check x={x + 44} y={42} size="16" color="#fff" strokeWidth={3} /> : <Txt x={x + 52} y="56" fs="15" w={800} fill="#fff">{i + 1}</Txt>}
          <Txt x={x + 52} y="322" fs="19" w={800}>{LABELS[i]}</Txt>
        </G>
      ))}

      <G v="enterR" delay={1.6} className="hide-sm">
        <Figure x={674} y={150} s={0.66} pose="point" top={K.coral} bottom={K.navy} skin="b" item="clipboard" flip />
      </G>
    </Stage>
  )
}
