import { ArrowUpRight, BriefcaseBusiness, Lightbulb, UsersRound } from 'lucide-react'
import { Stage, G, P, C } from './primitives'
import { Figure } from './figures'

const PRINCIPLES = [
  { label: 'Clear direction', Icon: ArrowUpRight, color: C.blue, y: 138 },
  { label: 'People at the centre', Icon: UsersRound, color: C.mint, y: 202 },
  { label: 'Progress through action', Icon: Lightbulb, color: C.purple, y: 266 },
]

export default function FounderEditorial({ className = '' }) {
  return (
    <Stage viewBox="0 0 520 410" className={className} label="Editorial leadership illustration showing direction, people and practical progress">
      <rect x="12" y="12" width="496" height="386" rx="28" fill="#F7FAFF" stroke="#DCE7F4" strokeWidth="2" />
      <path d="M38 78H482" stroke="#D9E8F7" strokeWidth="1.5" />
      <G v="rise" delay={0.08}>
        <text x="40" y="49" fill="#0878F9" fontSize="11" fontWeight="800" letterSpacing="2">LEADERSHIP IN PRACTICE</text>
      </G>
      <rect x="36" y="103" width="242" height="250" rx="20" fill="#FFFFFF" stroke="#E1EAF5" strokeWidth="1.5" />
      <text x="58" y="126" fill="#617086" fontSize="10" fontWeight="800" letterSpacing="1.6">A PRACTICAL POINT OF VIEW</text>
      {PRINCIPLES.map(({ label, Icon, color, y }, i) => (
        <G key={label} v="enterL" delay={0.18 + i * 0.1}>
          <rect x="54" y={y} width="206" height="48" rx="13" fill="#F7FAFF" />
          <rect x="54" y={y} width="4" height="48" rx="2" fill={color} />
          <Icon x={70} y={y + 14} size={20} color={color} strokeWidth={2} />
          <text x="102" y={y + 29} fill="#10243F" fontSize="12" fontWeight="800">{label}</text>
        </G>
      ))}
      <path d="M300 335H469" stroke="#BDD0E6" strokeWidth="2" />
      <path d="M315 335V300H354V268H393V230H432V192H468" fill="none" stroke="#0878F9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <P d="M315 300H354V268H393V230H432V192H468" delay={0.28} color="#19C6E8" w={2.5} strokeDasharray="2 7" />
      <G v="rise" delay={0.45}>
        <rect x="301" y="298" width="27" height="37" rx="5" fill="#DCEEFF" />
        <rect x="341" y="266" width="27" height="69" rx="5" fill="#D7F5EB" />
        <rect x="380" y="228" width="27" height="107" rx="5" fill="#E6DEFF" />
        <rect x="419" y="190" width="27" height="145" rx="5" fill="#DDF4FA" />
      </G>
      <G v="rise" delay={0.35}>
        <rect x="300" y="119" width="168" height="48" rx="14" fill="#FFFFFF" stroke="#DCE7F4" />
        <BriefcaseBusiness x="316" y="133" size={20} color="#0878F9" strokeWidth={2} />
        <text x="346" y="149" fill="#10243F" fontSize="11" fontWeight="800">Long-term vision</text>
      </G>
      <Figure x={456} y={252} s={0.38} pose="stand" skin="c" hair="black" style="short" top="#0878F9" bottom="#18365A" />
    </Stage>
  )
}
