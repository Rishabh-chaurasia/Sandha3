import { Cpu, UsersRound, Workflow, ShieldCheck, BriefcaseBusiness, CheckCircle2 } from 'lucide-react'
import { Stage, G, Float } from './primitives'
import { Confetti, K } from './figures'

export default function FoundationBlueprint({ className = '' }) {
  return (
    <Stage viewBox="0 0 640 420" className={className} label="Operating blueprint showing people, process and technology working together to deliver consistent service">
      <Confetti items={[['ring', 38, 54, 7, K.cyan], ['plus', 588, 54, 8, K.violet], ['tri', 594, 350, 8, K.coral], ['dot', 42, 350, 6, K.mint]]} />
      <G v="fade"><ellipse cx="320" cy="220" rx="286" ry="145" fill="#EEF3FF" opacity=".9" /></G>
      <text x="64" y="74" fill={K.blue} fontSize="13" fontWeight="800" letterSpacing="3">OUR OPERATING BLUEPRINT</text>
      <path d="M72 268 L176 142 L286 268 L396 142 L508 268" fill="none" stroke={K.brand} strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" />
      {[
        { x: 72, y: 268, Icon: BriefcaseBusiness, title: 'Client need', text: 'Understand', color: K.violet },
        { x: 176, y: 142, Icon: UsersRound, title: 'People', text: 'Skilled teams', color: K.cyan },
        { x: 286, y: 268, Icon: Workflow, title: 'Process', text: 'Clear delivery', color: K.coral },
        { x: 396, y: 142, Icon: Cpu, title: 'Technology', text: 'Practical tools', color: K.blue },
        { x: 508, y: 268, Icon: CheckCircle2, title: 'Outcome', text: 'Consistent service', color: K.mint },
      ].map(({ x, y, Icon, title, text, color }, i) => (
        <G key={title} v="rise" delay={0.18 + i * 0.12}>
          <circle cx={x} cy={y} r="29" fill="#fff" stroke={color} strokeWidth="2" />
          <circle cx={x} cy={y} r="21" fill={color} opacity=".14" />
          <Icon x={x - 12} y={y - 12} size="24" color={color} strokeWidth="2" />
          <text x={x} y={y + (y > 200 ? 54 : -48)} textAnchor="middle" fill={K.ink} fontSize="15" fontWeight="800">{title}</text>
          <text x={x} y={y + (y > 200 ? 72 : -30)} textAnchor="middle" fill={K.muted} fontSize="11" fontWeight="600">{text}</text>
        </G>
      ))}
      <Float amp={3} dur={6}><G v="rise" delay="0.8"><rect x="236" y="30" width="168" height="38" rx="19" fill="#fff" stroke="#D9E8F7" strokeWidth="2" /><ShieldCheck x="252" y="37" size="24" color={K.mint} strokeWidth="2" /><text x="286" y="55" fill={K.ink} fontSize="13" fontWeight="800">Reliable delivery</text></G></Float>
    </Stage>
  )
}
