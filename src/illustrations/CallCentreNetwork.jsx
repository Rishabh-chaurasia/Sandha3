import { Phone, MessageSquare, Mail, Smartphone, Globe, Database, Check, ArrowRight } from 'lucide-react'
import { Stage, P, Dash, G, Particle, Ripple, Txt } from './primitives'
import { Figure, Desk, Plant, Confetti, Chip, K } from './figures'

const CHANNELS = [
  { label: 'Voice', Icon: Phone, color: K.blue },
  { label: 'Chat', Icon: MessageSquare, color: K.violet },
  { label: 'Email', Icon: Mail, color: K.coral },
  { label: 'SMS', Icon: Smartphone, color: K.mint },
  { label: 'Web', Icon: Globe, color: K.cyan },
]
const YS = [50, 148, 246, 344, 442]
const FLOW = ['Query', 'Communication', 'Support', 'Resolution']

export default function CallCentreNetwork({ className = '' }) {
  return (
    <Stage viewBox="0 0 760 620" className={className} label="Customer communication network: a customer reaches a support agent through voice, chat, email, SMS and web, the agent uses the CRM, and the query ends in resolution">
      <G v="fade">
        <circle cx="380" cy="230" r="250" fill={K.lav} opacity=".7" />
        <rect x="326" y="14" width="108" height="500" rx="54" fill="#fff" stroke={K.violetSoft} strokeOpacity=".6" strokeWidth="2" />
      </G>
      <Confetti items={[['ring', 40, 60, 8, K.cyan], ['tri', 720, 60, 9, K.coral], ['plus', 730, 300, 8, K.violet], ['dot', 40, 330, 6, K.mint]]} />

      {YS.map((y, i) => {
        const left = `M118 246C220 246 240 ${y} 336 ${y}`
        const right = `M424 ${y}C520 ${y} 540 246 626 246`
        const c = CHANNELS[i].color
        return (
          <g key={i}>
            <Dash d={left} delay={0.4 + i * 0.1} color={c} w={2.4} gap="2 8" />
            <Dash d={right} delay={0.7 + i * 0.1} color={c} w={2.4} gap="2 8" />
            <Particle path={left} dur={3 + (i % 3) * 0.5} delay={i * 0.6} r={3.8} color={c} />
            <Particle path={right} dur={3.4} delay={0.4 + i * 0.5} r={3.8} color={c} reverse={i % 2 === 1} />
          </g>
        )
      })}

      {/* customer */}
      <G v="enterL" delay={0.2}>
        <Figure x={14} y={224} s={0.9} pose="phone" top={K.cyan} bottom={K.navy} skin="b" item="phone" hair="brown" />
        <path d="M6 476H130" stroke={K.violetSoft} strokeWidth="4" strokeLinecap="round" />
        <Txt x={66} y={510} fs={17} w={800}>Customer</Txt>
      </G>

      {/* agent at desk */}
      <Ripple cx={640} cy={246} r={36} color={K.violet} />
      <G v="enterR" delay={0.5}>
        <Desk x={556} y={382} w={150} legH={44} />
        <Figure x={636} y={194} s={0.8} pose="sit" top={K.violet} bottom={K.navy} skin="c" style="long" hair="black" item="headset" flip />
        <Txt x={640} y={510} fs={17} w={800}>Support agent</Txt>
        <Plant x={706} y={386} s={0.5} />
      </G>

      {CHANNELS.map(({ label, Icon, color }, i) => (
        <g key={label}>
          <Chip cx={380} cy={YS[i]} r={30} Icon={Icon} color={color} delay={0.6 + i * 0.12} />
          <G delay={0.7 + i * 0.12}><Txt x={380} y={YS[i] + 54} fs={15} w={800}>{label}</Txt></G>
        </g>
      ))}

      <G v="rise" delay={1.8} className="hide-sm">
        <Dash d="M660 192C692 160 704 130 704 100" delay={1.8} color={K.blue} w={2.4} gap="2 8" />
        <Chip cx={704} cy={70} r={24} Icon={Database} color={K.blue} label="CRM" fs={14} labelDy={38} />
      </G>

      {/* query -> resolution */}
      <G v="rise" delay={2} className="hide-sm">
        {FLOW.map((f, i) => (
          <g key={f} transform={`translate(${112 + i * 128} 566)`}>
            <rect width="120" height="28" rx="14" fill={i === 3 ? K.mint : '#fff'} stroke={i === 3 ? '#fff' : K.violetSoft} strokeWidth="1.6" />
            <Txt x={60} y={19} fs={12.5} w={800} fill={i === 3 ? '#fff' : K.ink}>{f}</Txt>
          </g>
        ))}
      </G>
    </Stage>
  )
}
