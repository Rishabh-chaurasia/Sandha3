import { Handshake, Zap, GraduationCap } from 'lucide-react'
import { Stage, P, G, Float, Particle } from './primitives'
import { Confetti, Chip, K } from './figures'
import { curve } from './primitives'

const HUB = [120, 200]
// 7 power & utility clients + 1 education client, as published on the official site.
const SATS = [[300, 60, 22], [380, 132, 28], [330, 214, 19], [434, 262, 24], [300, 340, 27], [462, 350, 18], [470, 62, 17]]
const EDU = [250, 150, 24]

export default function ClientsNetwork({ className = '' }) {
  return (
    <Stage viewBox="0 0 520 410" className={className} label="Relationship map: Sandha and Company at the centre, connected to seven power and utility clients and one university">
      <G v="fade"><circle cx="270" cy="205" r="220" fill={K.lav} /></G>
      <Confetti items={[['ring', 30, 60, 7, K.cyan], ['tri', 490, 230, 8, K.coral], ['plus', 60, 360, 7, K.violet]]} />
      {SATS.map(([x, y], i) => {
        const d = curve(HUB, [x, y], i % 2 ? 0.16 : -0.16)
        return <g key={i}><P d={d} delay={0.4 + i * 0.1} w={2} color={K.violetSoft} />{i % 2 === 0 && <Particle path={d} dur={4 + i * 0.3} delay={i * 0.4} r={3.4} color={K.violet} />}</g>
      })}
      <P d={curve(HUB, EDU, 0.1)} delay={0.6} w={2} color={K.mint} />
      {SATS.map(([x, y, r], i) => (
        <Float key={i} amp={3 + (i % 3)} dur={5 + (i % 4)} delay={i * 0.3}>
          <Chip cx={x} cy={y} r={r} Icon={Zap} color={i % 2 ? K.blue : K.violet} delay={0.7 + i * 0.1} />
        </Float>
      ))}
      <Float amp={3} dur={6}><Chip cx={EDU[0]} cy={EDU[1]} r={EDU[2]} Icon={GraduationCap} color={K.mint} delay={1.4} /></Float>
      <G delay={0.2}>
        <circle cx={HUB[0]} cy={HUB[1]} r="54" fill="url(#gBP)" stroke="#fff" strokeWidth="4" />
        <Handshake x={HUB[0] - 22} y={HUB[1] - 22} size="44" color="#fff" strokeWidth={1.8} />
      </G>
    </Stage>
  )
}
