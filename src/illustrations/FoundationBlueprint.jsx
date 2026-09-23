import { Cpu, UsersRound, Workflow, ShieldCheck, ArrowRight } from 'lucide-react'
import { Stage, G, Float } from './primitives'
import { Confetti, K } from './figures'

export default function FoundationBlueprint({ className = '' }) {
  return (
    <Stage viewBox="0 0 640 420" className={className} label="Operating blueprint showing people, process and technology working together to deliver consistent service">
      <Confetti items={[['ring', 38, 54, 7, K.cyan], ['plus', 588, 54, 8, K.violet], ['tri', 594, 350, 8, K.coral], ['dot', 42, 350, 6, K.mint]]} />
      <G v="fade"><rect x="34" y="42" width="572" height="332" rx="34" fill="#EEF3FF" opacity=".9" /></G>
      <text x="64" y="86" fill={K.blue} fontSize="13" fontWeight="800" letterSpacing="3">OUR OPERATING BLUEPRINT</text>
      {[
        { x: 62, y: 124, Icon: UsersRound, title: 'People', text: 'Skilled teams', color: K.cyan },
        { x: 62, y: 212, Icon: Workflow, title: 'Process', text: 'Clear delivery', color: K.violet },
        { x: 62, y: 300, Icon: Cpu, title: 'Technology', text: 'Practical tools', color: K.blue },
      ].map(({ x, y, Icon, title, text, color }, i) => (
        <G key={title} v="rise" delay={0.2 + i * 0.16}>
          <rect x={x} y={y} width="214" height="64" rx="16" fill="#fff" stroke="#D9E8F7" strokeWidth="2" />
          <circle cx={x + 32} cy={y + 32} r="20" fill={color} opacity=".16" />
          <Icon x={x + 20} y={y + 20} size="24" color={color} strokeWidth="2" />
          <text x={x + 64} y={y + 29} fill={K.ink} fontSize="17" fontWeight="800">{title}</text>
          <text x={x + 64} y={y + 48} fill={K.muted} fontSize="13" fontWeight="600">{text}</text>
        </G>
      ))}
      <path d="M290 156H354M290 244H354M290 332H354" stroke={K.violetSoft} strokeWidth="3" strokeDasharray="5 7" />
      <Float amp={3} dur={6}>
      <G v="rise" delay="0.8">
        <rect x="354" y="142" width="222" height="222" rx="28" fill="#fff" stroke={K.violetSoft} strokeWidth="2.5" />
        <path d="M388 205H542M388 252H542M388 299H510" stroke="#D9E8F7" strokeWidth="10" strokeLinecap="round" />
        <path d="M388 205H490M388 252H526M388 299H466" stroke={K.cyan} strokeWidth="10" strokeLinecap="round" />
        <ShieldCheck x="418" y="166" size="34" color={K.mint} strokeWidth="2" />
        <text x="388" y="344" fill={K.ink} fontSize="17" fontWeight="800">Consistent delivery</text>
      </G>
      </Float>
      <ArrowRight x="322" y="235" size="22" color={K.brand} strokeWidth="2.5" />
    </Stage>
  )
}
