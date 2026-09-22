import { Cloud, Server, Compass, Headset, Users, Settings } from 'lucide-react'
import { Stage, P, Dash, G, Float, Particle, Txt, curve } from './primitives'
import { Figure, IsoBox, IsoPlatform, Plant, Confetti, Chip, DashboardFace, K } from './figures'

const CONF = [
  ['ring', 70, 60, 9, K.cyan], ['tri', 330, 30, 9, K.coral], ['plus', 620, 40, 9, K.violet], ['dot', 730, 220, 7, K.mint],
  ['dot', 40, 330, 7, K.pink], ['tri', 712, 560, 9, K.amber], ['ring', 90, 590, 8, K.violet], ['plus', 460, 22, 8, K.mint],
]

export default function HeroEcosystem({ mobile = false, className = '' }) {
  if (mobile) return <HeroMobile className={className} />
  const hub = [390, 400]
  const nodes = [
    { at: [120, 210], Icon: Cloud, label: 'Technology', color: K.blue },
    { at: [270, 82], Icon: Compass, label: 'Consulting', color: K.violet },
    { at: [590, 76], Icon: Server, label: 'Infrastructure', color: K.cyan },
    { at: [672, 330], Icon: Headset, label: ['Customer', 'operations'], color: K.mint },
    { at: [96, 470], Icon: Users, label: 'People', color: K.coral },
  ]
  return (
    <Stage viewBox="0 0 760 640" className={className} label="Business ecosystem: a platform with a dashboard and two colleagues, connected to technology, consulting, infrastructure, customer operations and people">
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

      {/* the platform */}
      <G v="rise" delay={0.2}>
        <Float amp={5} dur={7}>
          <IsoPlatform cx={390} cy={300} a={230} b={230} h={20} />
          {/* back wall with dashboard */}
          <IsoBox cx={390} cy={306} a={200} b={10} h={128} top="#fff" left="#fff" right={K.violetSoft} leftContent={<g transform="translate(0 0)"><DashboardFace w={200} h={128} /></g>} />
          {/* stacked cubes and server */}
          <IsoBox cx={252} cy={376} a={46} b={46} h={46} top="#fff" left={K.sky} right="#7FB8F5" topContent={<circle cx="23" cy="23" r="9" fill={K.blue} />} />
          <IsoBox cx={252} cy={330} a={46} b={46} h={30} top={K.amber} left="#F1B93A" right="#D9A02A" />
          <IsoBox cx={318} cy={352} a={40} b={40} h={78} top="#fff" left={K.violetSoft} right="#8E84F0"
            leftContent={<g>{[0, 1, 2].map((i) => <g key={i}><rect x="6" y={8 + i * 22} width="28" height="14" rx="3" fill="#fff" /><circle cx="12" cy={15 + i * 22} r="2.2" fill={K.mint} /><rect x="18" y={13 + i * 22} width="12" height="4" rx="2" fill={K.violetSoft} /></g>)}</g>} />
          <Plant x={478} y={352} s={0.7} />
          {/* people */}
          <Figure x={396} y={352} s={0.52} pose="point" top={K.violet} bottom={K.navy} skin="b" item="badge" />
          <Figure x={448} y={362} s={0.52} pose="hold" top={K.coral} bottom={K.navy} skin="c" style="long" hair="black" dress item="tablet" />
          <Figure x={356} y={386} s={0.5} pose="stand" top={K.cyan} bottom={K.violetDeep} skin="a" hair="brown" item="glasses" />
        </Float>
      </G>

      {/* floating nodes */}
      {nodes.map((n, i) => (
        <Float key={n.color} amp={4 + (i % 3) * 2} dur={5 + i} delay={i * 0.4}>
          <Chip cx={n.at[0]} cy={n.at[1]} r={32} Icon={n.Icon} color={n.color} label={n.label} fs={18} delay={0.7 + i * 0.12} />
        </Float>
      ))}

      <G delay={1.4}>
        <rect x="296" y="548" width="188" height="40" rx="20" fill="url(#gBP)" />
        <Settings x="312" y="558" size="20" color="#fff" strokeWidth={2} />
        <Txt x="404" y="574" fs="16" w={800} fill="#fff">Your business</Txt>
      </G>
    </Stage>
  )
}

function HeroMobile({ className }) {
  const hub = [210, 275]
  const nodes = [
    { at: [64, 66], Icon: Cloud, label: 'Technology', color: K.blue },
    { at: [346, 66], Icon: Server, label: 'Infrastructure', color: K.cyan },
    { at: [352, 372], Icon: Headset, label: 'Customers', color: K.mint },
    { at: [64, 380], Icon: Users, label: 'People', color: K.coral },
  ]
  return (
    <Stage viewBox="0 0 420 480" className={className} label="Business ecosystem connecting technology, infrastructure, people and customers around a central business platform">
      <G v="fade"><circle cx="210" cy="270" r="196" fill={K.lav} /></G>
      <Confetti items={[['ring', 26, 200, 7, K.cyan], ['tri', 394, 210, 8, K.coral], ['dot', 200, 22, 6, K.mint], ['plus', 210, 462, 7, K.violet]]} />
      {nodes.map((n, i) => {
        const d = curve(hub, n.at, i % 2 ? 0.2 : -0.2)
        return <g key={n.label}><Dash d={d} delay={0.5 + i * 0.12} color={n.color} w={2.6} gap="2 9" /><Particle path={d} dur={4 + i * 0.4} delay={i * 0.6} color={n.color} /></g>
      })}
      <G v="rise" delay={0.2}>
        <Float amp={4} dur={7}>
          <IsoPlatform cx={210} cy={200} a={150} b={150} h={14} />
          <IsoBox cx={210} cy={205} a={134} b={8} h={92} top="#fff" left="#fff" right={K.violetSoft} leftContent={<DashboardFace w={134} h={92} />} />
          <Figure x={198} y={196} s={0.4} pose="point" top={K.violet} skin="b" item="badge" />
          <Figure x={236} y={204} s={0.4} pose="hold" top={K.coral} skin="c" style="long" dress item="tablet" />
        </Float>
      </G>
      {nodes.map((n, i) => (
        <Float key={n.label} amp={4} dur={5 + i} delay={i * 0.4}>
          <Chip cx={n.at[0]} cy={n.at[1]} r={28} Icon={n.Icon} color={n.color} label={n.label} fs={19} delay={0.7 + i * 0.12} />
        </Float>
      ))}
    </Stage>
  )
}
