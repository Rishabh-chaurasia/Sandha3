import { Code2, Compass, UsersRound, BriefcaseBusiness, Headset, Building2 } from 'lucide-react'
import { Stage, P, Float } from './primitives'
import { Chip, Confetti, K } from './figures'

const NODES = [
  [112, 82, 'Technology', Code2, K.blue],
  [260, 52, 'Consulting', Compass, K.violet],
  [408, 82, 'Manpower', UsersRound, K.mint],
  [102, 258, 'Staffing', BriefcaseBusiness, K.coral],
  [260, 292, 'Customer care', Headset, K.amber],
  [418, 258, 'Industries', Building2, K.cyan],
]

export default function ServicesOverview({ className = '' }) {
  return (
    <Stage viewBox="0 0 520 360" className={className} label="Connected service capabilities: technology, consulting, manpower, staffing, customer care and industry expertise around one business partner">
      <circle cx="260" cy="178" r="145" fill={K.lav} opacity=".7" />
      <Confetti items={[["ring", 38, 112, 7, K.cyan], ["plus", 470, 92, 8, K.violet], ["tri", 464, 302, 8, K.coral], ["dot", 48, 300, 6, K.mint]]} />
      {NODES.map(([x, y, label, Icon, color], i) => {
        const d = `M260 178 Q ${(260 + x) / 2} ${(178 + y) / 2 + (i % 2 ? -24 : 24)} ${x} ${y}`
        return <g key={label}><P d={d} delay={0.25 + i * 0.1} w={2.6} color={color} /><Float amp={3 + (i % 2)} dur={5 + i * 0.3} delay={i * 0.15}><Chip cx={x} cy={y} r={25} Icon={Icon} color={color} delay={0.55 + i * 0.1} label={label} labelDy={14} /></Float></g>
      })}
      <circle cx="260" cy="178" r="58" fill="url(#gBP)" stroke="#fff" strokeWidth="4" />
      <text x="260" y="171" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="800">Your</text>
      <text x="260" y="194" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="800">business</text>
    </Stage>
  )
}
