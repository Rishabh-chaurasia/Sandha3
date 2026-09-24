import { MessageSquare, Phone, MapPin, Building2 } from 'lucide-react'
import { Stage, P, G, Float, Particle, Ripple, Txt, curve } from './primitives'
import { Figure, Confetti, Chip, K } from './figures'

export default function ContactMap({ className = '' }) {
  const target = [470, 240]
  const senders = [
    { Icon: MessageSquare, label: 'Message', at: [128, 70], color: K.violet },
    { Icon: Phone, label: 'Call', at: [222, 190], color: K.blue },
    { Icon: MapPin, label: 'Visit', at: [176, 330], color: K.coral },
  ]
  return (
    <Stage viewBox="0 0 640 500" className={className} label="Contact illustration showing a call and a visit to the Sandha and Company office in Gurugram">
      <G v="fade"><circle cx="400" cy="250" r="230" fill={K.lav} /></G>
      <Confetti items={[['ring', 40, 60, 8, K.cyan], ['tri', 600, 60, 9, K.coral], ['plus', 610, 400, 8, K.violet], ['dot', 30, 260, 6, K.mint]]} />

      {/* map card */}
      <G v="rise" delay={0.2}>
        <rect x="330" y="150" width="270" height="210" rx="24" fill={K.violet} opacity=".12" transform="translate(6 10)" />
        <rect x="330" y="150" width="270" height="210" rx="24" fill="#fff" stroke={K.violetSoft} strokeWidth="2.4" />
        <path d="M330 250C400 230 450 290 520 250S580 230 600 240" fill="none" stroke={K.sky} strokeWidth="14" strokeLinecap="round" />
        <path d="M430 150V360M380 150V360M500 150V360" stroke={K.lav} strokeWidth="8" />
        <rect x="392" y="298" width="36" height="34" rx="6" fill={K.mint} opacity=".5" />
        <rect x="514" y="176" width="60" height="34" rx="6" fill={K.amber} opacity=".5" />
        <rect x="346" y="176" width="24" height="52" rx="6" fill={K.cyan} opacity=".4" />
      </G>

      {senders.map(({ Icon, label, at, color }, i) => {
        const d = curve(at, target, i === 1 ? 0 : i === 0 ? 0.2 : -0.2)
        return (
          <g key={label}>
            <P d={d} delay={0.5 + i * 0.2} w={2.6} color={color} />
            <Particle path={d} dur={3.6 + i * 0.5} delay={i * 0.8} r={4} color={color} />
            <Chip cx={at[0]} cy={at[1]} r={30} Icon={Icon} color={color} label={label} fs={16} delay={0.4 + i * 0.2} />
          </g>
        )
      })}

      <Ripple cx={target[0]} cy={target[1]} r={38} color={K.blue} />
      <G delay={1.2}>
        <circle cx={target[0]} cy={target[1]} r="40" fill="url(#gBP)" stroke="#fff" strokeWidth="4" />
        <Building2 x={target[0] - 20} y={target[1] - 20} size="40" color="#fff" strokeWidth={1.8} />
      </G>
      <G delay={1.5}>
        <Float amp={7} dur={3.4}>
          <MapPin x={target[0] - 20} y={target[1] - 104} size="40" color={K.coral} fill="#fff" strokeWidth={2.2} />
        </Float>
        <Txt x={target[0]} y={target[1] + 74} fs={18} w={800}>Gurgaon</Txt>
      </G>

      <G v="enterL" delay={0.8} className="hide-sm">
        <Figure x={6} y={272} s={0.9} pose="phone" top={K.violet} bottom={K.navy} skin="c" style="long" hair="black" item="phone" dress />
      </G>
    </Stage>
  )
}
