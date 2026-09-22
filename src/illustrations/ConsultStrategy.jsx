import { Search, Lightbulb, Target, Cpu, Rocket, HelpCircle, FileText } from 'lucide-react'
import { Stage, P, Dash, G, Float, Particle, Txt, C, smooth } from './primitives'
import { Figure, Plant, Confetti, Chip, K } from './figures'

const STEPS = [
  { label: 'Challenge', Icon: HelpCircle, color: K.violet },
  { label: 'Discovery', Icon: Search, color: K.blue },
  { label: 'Analysis', Icon: Lightbulb, color: K.amber },
  { label: 'Strategy', Icon: Target, color: K.coral },
  { label: 'Technology', Icon: Cpu, color: K.cyan },
  { label: 'Execution', Icon: Rocket, color: K.mint },
]
const XS = [204, 272, 340, 408, 476, 544]
const YS = [332, 292, 252, 210, 168, 126]
const BLOCK = [K.lav, '#E4F1FF', K.lav, '#E4F1FF', K.lav, '#E4F1FF']

export default function ConsultStrategy({ className = '' }) {
  const pts = XS.map((x, i) => [x, YS[i]])
  const line = smooth(pts)
  return (
    <Stage viewBox="0 0 700 500" className={className} label="Strategy board: a business challenge moves through discovery, analysis, strategy and technology to execution, while a consultant presents to a client">
      <G v="fade"><circle cx="390" cy="230" r="240" fill={K.lav} opacity=".8" /></G>
      <Confetti items={[['ring', 70, 60, 8, K.cyan], ['tri', 650, 40, 9, K.coral], ['plus', 670, 200, 8, K.violet], ['dot', 40, 250, 6, K.mint]]} />

      {/* board */}
      <G v="rise" delay={0.1}>
        <rect x="168" y="34" width="432" height="372" rx="22" fill={K.blue} opacity=".08" transform="translate(6 10)" />
        <rect x="168" y="34" width="432" height="372" rx="22" fill="#fff" stroke={K.violetSoft} strokeWidth="3" />
        <rect x="168" y="34" width="432" height="34" rx="22" fill={K.violet} />
        <rect x="168" y="50" width="432" height="18" fill={K.violet} />
        <circle cx="192" cy="51" r="5" fill={K.coral} /><circle cx="210" cy="51" r="5" fill={K.amber} /><circle cx="228" cy="51" r="5" fill={K.mint} />
        <path d="M250 440H420M320 406V440" stroke={K.violetSoft} strokeWidth="5" strokeLinecap="round" />
      </G>

      {/* stair blocks that double as a chart */}
      {XS.map((x, i) => (
        <G key={i} v="rise" delay={0.4 + i * 0.12}>
          <path d={`M${x - 31} 396V${YS[i] + 26}H${x + 31}V396Z`} fill={BLOCK[i]} />
          <Txt x={x} y={YS[i] + 56} fs={12.5} w={800} fill={C.ink} className="hide-sm">{STEPS[i].label}</Txt>
        </G>
      ))}

      {/* sticky notes */}
      <G delay={1.5} className="hide-sm">
        <Float amp={3} dur={6}>
          <rect x="190" y="92" width="74" height="60" rx="6" fill={K.amber} transform="rotate(-4 227 122)" />
          <path d="M202 112H250M202 124H240M202 136H230" stroke="#B98300" strokeWidth="3" strokeLinecap="round" opacity=".55" transform="rotate(-4 227 122)" />
          <rect x="278" y="88" width="64" height="52" rx="6" fill={K.pink} transform="rotate(5 310 114)" />
          <FileText x="296" y="102" size="26" color="#fff" strokeWidth={2} />
        </Float>
      </G>

      <Dash d={line} delay={0.6} color={K.cyan} w={6} gap="1 12" />
      <P d={line} delay={0.9} w={3.2} color={K.violet} />
      <Particle path={line} dur={5} delay={1.6} r={4.5} color={K.coral} />

      {pts.map(([x, y], i) => (
        <Chip key={i} cx={x} cy={y} r={20} Icon={STEPS[i].Icon} color={STEPS[i].color} delay={1 + i * 0.14} fill="#fff" />
      ))}

      {/* people */}
      <G v="enterL" delay={0.6}>
        <Figure x={30} y={262} s={0.88} pose="point" top={K.violet} bottom={K.navy} skin="b" item="glasses" />
        <path d="M6 456H150" stroke={K.violetSoft} strokeWidth="4" strokeLinecap="round" />
      </G>
      <G v="enterR" delay={0.8}>
        <Figure x={604} y={296} s={0.74} pose="hold" top={K.coral} bottom={K.violetDeep} skin="c" style="long" dress item="tablet" />
        <Plant x={636} y={402} s={0.5} />
      </G>
    </Stage>
  )
}
