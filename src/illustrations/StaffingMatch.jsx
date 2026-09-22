import { motion, useReducedMotion } from 'framer-motion'
import { UserSearch, Award, Clock, Handshake, MessagesSquare, UserPlus } from 'lucide-react'
import { Stage, P, Dash, G, Spin, Particle, Ripple, Txt, C } from './primitives'
import { Figure, Confetti, Chip, K } from './figures'

const CX = 320
const CY = 262
const R1 = 178
const polar = (r, deg) => [CX + r * Math.cos((deg * Math.PI) / 180), CY + r * Math.sin((deg * Math.PI) / 180)]

const INPUTS = [
  { label: 'Role', Icon: UserSearch, deg: -90, color: K.violet },
  { label: 'Skills', Icon: Award, deg: 30, color: K.blue },
  { label: 'Experience', Icon: Clock, deg: 150, color: K.mint },
]
const OUTPUTS = [
  { label: 'Interview', Icon: MessagesSquare, deg: -30, color: K.cyan },
  { label: 'Onboarding', Icon: UserPlus, deg: 90, color: K.coral },
]

function Card({ from, delay, color }) {
  const reduce = useReducedMotion()
  if (reduce) return null
  const [fx, fy] = from
  return (
    <motion.g
      initial={{ x: fx - CX, y: fy - CY, opacity: 0, scale: 0.9 }}
      animate={{ x: [fx - CX, 0], y: [fy - CY, 0], opacity: [0, 1, 1, 0], scale: [0.9, 1, 0.7] }}
      transition={{ duration: 3.4, repeat: Infinity, delay, ease: 'easeInOut', times: [0, 0.2, 0.8, 1] }}
    >
      <rect x={CX - 40} y={CY - 27} width="80" height="54" rx="12" fill="#fff" stroke={K.violetSoft} strokeWidth="2" />
      <circle cx={CX - 19} cy={CY - 3} r="10" fill={color} />
      <circle cx={CX - 19} cy={CY - 6} r="4" fill="#fff" /><path d={`M${CX - 27} ${CY + 6}Q${CX - 19} ${CY - 2} ${CX - 11} ${CY + 6}`} fill="#fff" />
      <rect x={CX} y={CY - 13} width="30" height="6" rx="3" fill={K.lav} /><rect x={CX} y={CY + 2} width="20" height="6" rx="3" fill={K.lav} />
      <circle cx={CX + 28} cy={CY - 21} r="7" fill={K.mint} /><path d={`M${CX + 25} ${CY - 21}l2 2l4-4`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </motion.g>
  )
}

export default function StaffingMatch({ className = '' }) {
  return (
    <Stage viewBox="0 0 640 520" className={className} label="Radial talent-matching system: role, skills and experience feed a central match, candidate profile cards flow in, and matches move to interview and onboarding">
      <G v="fade">
        <circle cx={CX} cy={CY} r="240" fill={K.lav} />
        <circle cx={CX} cy={CY} r={R1} fill="none" stroke={K.violetSoft} strokeOpacity=".5" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" />
        <Spin dur={90}><circle cx={CX} cy={CY} r="118" fill="none" stroke={K.violet} strokeOpacity=".45" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round" /></Spin>
      </G>
      <Confetti items={[['ring', 40, 70, 8, K.cyan], ['tri', 600, 80, 9, K.coral], ['plus', 610, 330, 8, K.violet], ['dot', 30, 320, 6, K.mint]]} />

      {INPUTS.map((n, i) => {
        const [x, y] = polar(R1, n.deg)
        const d = `M${x.toFixed(1)} ${y.toFixed(1)}L${CX} ${CY}`
        return <g key={n.label}><P d={d} delay={0.4 + i * 0.15} w={2.6} color={n.color} /><Particle path={d} dur={3.2} delay={i * 0.9} r={3.8} color={n.color} /></g>
      })}
      {OUTPUTS.map((n, i) => {
        const [x, y] = polar(R1, n.deg)
        const d = `M${CX} ${CY}Q${(CX + x) / 2 + (i ? -30 : 30)} ${(CY + y) / 2 + (i ? 10 : -10)} ${x.toFixed(1)} ${y.toFixed(1)}`
        return <g key={n.label}><Dash d={d} delay={1.3 + i * 0.2} color={n.color} w={2.6} gap="2 8" /><Particle path={d} dur={3.6} delay={1 + i} r={3.8} color={n.color} /></g>
      })}

      {INPUTS.map((n, i) => <Card key={n.label} from={polar(R1, n.deg)} delay={1.2 + i * 1.1} color={n.color} />)}

      <Ripple cx={CX} cy={CY} r={62} color={K.violet} />
      <G delay={0.3}>
        <circle cx={CX + 3} cy={CY + 8} r="64" fill={K.violet} opacity=".2" />
        <circle cx={CX} cy={CY} r="64" fill="url(#gBP)" stroke="#fff" strokeWidth="4" />
        <Handshake x={CX - 22} y={CY - 32} size={44} color="#fff" strokeWidth={1.8} />
        <Txt x={CX} y={CY + 42} fs={15} w={800} fill="#fff">Match</Txt>
      </G>

      {[...INPUTS, ...OUTPUTS].map((n, i) => {
        const [x, y] = polar(R1, n.deg)
        const ly = n.deg === -90 ? y - 46 : n.deg === 90 ? y + 66 : y + 64
        return <g key={n.label}><Chip cx={x} cy={y} r={32} Icon={n.Icon} color={n.color} delay={0.7 + i * 0.16} /><G delay={0.8 + i * 0.16}><Txt x={x} y={ly} fs={17} w={800}>{n.label}</Txt></G></g>
      })}

      <G v="enterR" delay={1.7} className="hide-sm"><Figure x={556} y={340} s={0.7} pose="hold" top={K.violet} skin="b" item="clipboard" /></G>
      <G v="enterL" delay={1.9} className="hide-sm"><Figure x={6} y={352} s={0.66} pose="stand" top={K.coral} skin="c" style="long" dress item="badge" bottom={K.navy} /></G>
    </Stage>
  )
}
