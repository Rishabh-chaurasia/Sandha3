import { Building2, Users, ClipboardCheck, BadgeCheck, Briefcase, Handshake } from 'lucide-react'
import { Stage, P, Dash, G, Particle, Txt, smooth } from './primitives'
import { Figure, Confetti, Chip, K } from './figures'

const STOPS = [
  { label: 'Business need', Icon: Building2, color: K.violet },
  { label: 'Talent', Icon: Users, color: K.cyan },
  { label: 'Screening', Icon: ClipboardCheck, color: K.coral },
  { label: 'Verification', Icon: BadgeCheck, color: K.blue },
  { label: 'Deployment', Icon: Briefcase, color: K.amber },
  { label: 'Workforce support', Icon: Handshake, color: K.mint },
]

const DESK = {
  vb: '0 0 900 460',
  pts: [[70, 316], [220, 166], [370, 306], [520, 156], [670, 296], [830, 146]],
}
const MOB = { vb: '0 0 380 740', pts: [[90, 60], [270, 170], [100, 290], [270, 410], [100, 530], [270, 650]] }

export default function ManpowerJourney({ mobile = false, className = '' }) {
  const L = mobile ? MOB : DESK
  const line = smooth(L.pts)
  return (
    <Stage viewBox={L.vb} className={className} label="Workforce journey: business need, talent, screening, verification, deployment and workforce support along one flowing path, with people joining the workflow">
      <G v="fade">
        <ellipse cx={mobile ? 190 : 450} cy={mobile ? 380 : 240} rx={mobile ? 220 : 470} ry={mobile ? 340 : 200} fill={K.lav} opacity=".8" />
      </G>
      <Confetti items={mobile ? [['ring', 30, 300, 7, K.cyan], ['tri', 350, 480, 8, K.coral]] : [['ring', 40, 60, 8, K.cyan], ['tri', 860, 300, 9, K.coral], ['plus', 450, 30, 8, K.violet], ['dot', 40, 400, 6, K.mint], ['dot', 880, 70, 6, K.pink]]} />

      <Dash d={line} delay={0.3} color={K.cyan} w={8} gap="1 14" />
      <P d={line} delay={0.5} w={3.4} color={K.violet} />
      <Particle path={line} dur={9} delay={2} r={5} color={K.coral} />
      <Particle path={line} dur={9} delay={6.5} r={4} color={K.mint} />

      {L.pts.map(([x, y], i) => {
        const { Icon, label, color } = STOPS[i]
        const high = mobile ? false : i % 2 === 1
        const lx = mobile ? (x < 190 ? x + 48 : x - 48) : x
        const ly = mobile ? y + 7 : high ? y - 52 : y + 68
        const anchor = mobile ? (x < 190 ? 'start' : 'end') : 'middle'
        return (
          <g key={label}>
            <Chip cx={x} cy={y} r={i === 5 ? 34 : 30} Icon={Icon} color={color} delay={0.8 + i * 0.22} />
            <G delay={0.9 + i * 0.22}><Txt x={lx} y={ly} fs={mobile ? 20 : 17} w={800} anchor={anchor}>{label}</Txt></G>
          </g>
        )
      })}

      {!mobile && (
        <>
          <G v="enterL" delay={1.4}><Figure x={198} y={196} s={0.4} pose="hold" top={K.cyan} skin="a" hair="brown" item="badge" /></G>
          <G v="enterL" delay={1.7}><Figure x={498} y={186} s={0.4} pose="stand" top={K.blue} skin="c" style="long" dress item="glasses" bottom={K.violetDeep} /></G>
          <G v="enterL" delay={2}><Figure x={808} y={206} s={0.4} pose="celebrate" top={K.mint} skin="b" hair="chestnut" bottom={K.navy} /></G>
        </>
      )}
    </Stage>
  )
}
