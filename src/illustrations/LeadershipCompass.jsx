import { Compass, UsersRound, Lightbulb, HandHeart, Target } from 'lucide-react'
import { Stage, G, P, Particle } from './primitives'
import { Chip, Confetti, K } from './figures'

const POINTS = [
  { x: 260, y: 74, label: 'Direction', Icon: Compass, color: K.blue },
  { x: 438, y: 190, label: 'People', Icon: UsersRound, color: K.mint },
  { x: 260, y: 304, label: 'Innovation', Icon: Lightbulb, color: K.amber },
  { x: 82, y: 190, label: 'Trust', Icon: HandHeart, color: K.coral },
]

export default function LeadershipCompass({ className = '' }) {
  return (
    <Stage viewBox="0 0 520 380" className={className} label="Leadership compass: direction, people, innovation and trust guide Sandha and Company">
      <G v="fade"><circle cx="260" cy="190" r="170" fill={K.lav} opacity=".85" /></G>
      <Confetti items={[["ring", 48, 60, 7, K.cyan], ["plus", 468, 80, 8, K.violet], ["tri", 462, 318, 8, K.coral], ["dot", 58, 306, 6, K.mint]]} />
      <circle cx="260" cy="190" r="92" fill="#fff" stroke={K.violetSoft} strokeWidth="3" />
      {POINTS.map((p, i) => (
        <g key={p.label}>
          <P d={`M260 190L${p.x} ${p.y}`} delay={0.3 + i * 0.14} w={3} color={p.color} />
          <Chip cx={p.x} cy={p.y} r={30} Icon={p.Icon} color={p.color} delay={0.6 + i * 0.14} label={p.label} labelDy={14} />
        </g>
      ))}
      <G v="rise" delay={0.95}>
        <circle cx="260" cy="190" r="46" fill="url(#gBP)" stroke="#fff" strokeWidth="4" />
        <Target x="238" y="168" size="44" color="#fff" strokeWidth="1.8" />
      </G>
      <Particle path="M260 190L438 190" dur={3.5} delay={1.5} r={4} color={K.cyan} />
      <Particle path="M260 190L260 304" dur={4} delay={2} r={4} color={K.amber} />
    </Stage>
  )
}
