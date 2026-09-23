import { Handshake, ShieldCheck } from 'lucide-react'
import { Stage, G, Float } from './primitives'
import { Figure, Confetti, Chip, K } from './figures'

const BARS = [22, 38, 30, 52, 44]

/** Small illustrated scenes for the three principles. */
export default function PrincipleScene({ kind, className = '', wide = false }) {
  return (
    <Stage viewBox="0 0 260 220" preserveAspectRatio={wide ? 'none' : undefined} className={className} label={{ understand: 'A consultant studying a chart to understand client needs', partner: 'Two colleagues working together as partners', trust: 'A colleague celebrating beside a shield with a check mark, representing trust' }[kind]}>
      <G v="fade"><circle cx="130" cy="112" r="96" fill={K.lav} /></G>
      {kind === 'understand' && (
        <>
          <Confetti items={[['ring', 30, 40, 6, K.cyan], ['tri', 232, 50, 7, K.coral], ['plus', 236, 170, 6, K.violet]]} />
          <G v="rise" delay={0.2}>
            <rect x="120" y="44" width="110" height="90" rx="12" fill="#fff" stroke={K.violetSoft} strokeWidth="2.4" />
            {BARS.map((h, i) => <rect key={i} x={134 + i * 18} y={122 - h} width="11" height={h} rx="3" fill={i % 2 ? K.violet : K.cyan} />)}
            <path d="M134 84L152 70L170 78L206 56" fill="none" stroke={K.coral} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </G>
          <G v="enterL" delay={0.4}><Figure x={22} y={20} s={0.86} pose="point" top={K.violet} skin="b" item="glasses" /></G>
        </>
      )}
      {kind === 'partner' && (
        <>
          <Confetti items={[['ring', 40, 36, 6, K.mint], ['tri', 224, 40, 7, K.coral], ['dot', 236, 180, 5, K.violet]]} />
          <G v="enterL" delay={0.2}><Figure x={44} y={24} s={0.84} pose="hold" top={K.cyan} bottom={K.navy} skin="a" hair="brown" item="tablet" /></G>
          <G v="enterR" delay={0.3}><Figure x={128} y={24} s={0.84} pose="hold" top={K.coral} bottom={K.violetDeep} skin="c" style="long" dress /></G>
          <Float amp={4} dur={4}><Chip cx={130} cy={44} r={24} Icon={Handshake} color={K.violet} delay={0.6} /></Float>
        </>
      )}
      {kind === 'trust' && (
        <>
          <Confetti items={[['plus', 34, 44, 6, K.cyan], ['tri', 226, 34, 7, K.amber], ['ring', 232, 170, 6, K.coral], ['dot', 30, 170, 5, K.mint]]} />
          <G delay={0.2}>
            <path d="M172 52L214 66V108C214 134 196 150 172 160C148 150 130 134 130 108V66Z" fill={K.mint} />
            <path d="M172 52L214 66V108C214 134 196 150 172 160Z" fill={K.cyan} opacity=".55" />
            <ShieldCheck x={150} y={78} size={44} color="#fff" strokeWidth={2} />
          </G>
          <G v="enterL" delay={0.4}><Figure x={22} y={22} s={0.86} pose="celebrate" top={K.violet} skin="d" style="bun" bottom={K.navy} /></G>
        </>
      )}
    </Stage>
  )
}
