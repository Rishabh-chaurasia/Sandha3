import { Code, Server, Database, ShieldCheck } from 'lucide-react'
import { Stage, P, Dash, G, Float, Particle, Txt, C, CloudShape } from './primitives'
import { Figure, IsoBox, Desk, Plant, Confetti, K } from './figures'

const LAYERS = [
  { name: 'Applications', sub: 'Software development', Icon: Code, y: 176, top: '#fff', left: K.violetSoft, right: '#8E84F0', accent: K.violet },
  { name: 'Infrastructure', sub: 'Servers and networks', Icon: Server, y: 252, top: '#fff', left: K.sky, right: '#7FB8F5', accent: K.blue },
  { name: 'Data', sub: 'Storage and records', Icon: Database, y: 328, top: '#fff', left: '#B5EEF9', right: '#6FD3E8', accent: K.cyan },
  { name: 'Cyber security', sub: 'Protection at every layer', Icon: ShieldCheck, y: 404, top: '#fff', left: '#BDF3E4', right: '#7FE0C7', accent: K.mint },
]

export default function ITArchitecture({ className = '' }) {
  const spine = 'M340 92V420'
  return (
    <Stage viewBox="0 0 640 520" className={className} preserveAspectRatio="xMidYMin meet" label="Layered technology architecture: cloud above applications, infrastructure, data and cyber security layers, with data packets flowing between them and a developer at work">
      <G v="fade"><circle cx="340" cy="270" r="230" fill={K.lav} /></G>
      <Confetti items={[['ring', 50, 60, 8, K.cyan], ['tri', 590, 90, 8, K.coral], ['plus', 610, 60, 8, K.violet], ['dot', 40, 300, 6, K.mint]]} />

      <P d={spine} delay={0.4} color={K.cyan} w={3} />
      <Particle path={spine} dur={4} color={K.cyan} />
      <Particle path={spine} dur={4} delay={1.3} r={3.4} color={K.violet} />
      <Particle path={spine} dur={4} delay={2.6} r={3.4} color={K.coral} />

      {/* cloud */}
      <G delay={0.2}>
        <Float amp={5} dur={6}>
          <ellipse cx="346" cy="112" rx="70" ry="14" fill={K.violet} opacity=".1" />
          <CloudShape x={280} y={34} s={1.3} fill={K.cyan} stroke="#fff" />
          <path d="M320 80h40M330 90h20" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7" />
        </Float>
      </G>

      {/* iso layers */}
      {LAYERS.map((l, i) => (
        <G key={l.name} v="rise" delay={0.5 + i * 0.16}>
          <IsoBox cx={340} cy={l.y + 28} a={110} b={110} h={22} top={l.top} left={l.left} right={l.right}
            topContent={<g><rect x="34" y="34" width="42" height="42" rx="10" fill={l.accent} /></g>} />
          <l.Icon x={328} y={l.y + 49} size={24} color="#fff" strokeWidth={2} />
          <Txt x={500} y={l.y + 34} fs={18} w={800} anchor="start">{l.name}</Txt>
          <Txt x={500} y={l.y + 54} fs={14} w={500} anchor="start" fill={C.muted} className="hide-sm">{l.sub}</Txt>
        </G>
      ))}

      {/* developer at a desk */}
      <G v="enterL" delay={1.2} className="hide-sm">
        <Desk x={18} y={396} w={130} legH={62} />
        <Figure x={78} y={296} s={0.62} pose="sit" top={K.violet} skin="b" item="glasses" flip />
        <Plant x={12} y={402} s={0.5} />
      </G>
    </Stage>
  )
}
