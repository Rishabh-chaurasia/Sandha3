import { C } from './primitives'

/**
 * Minimal bust figures (100 x 112). Solid soft fills with confident outlines;
 * `tone` swaps the shirt colour so people in one scene don't look identical.
 * kinds: consultant, agent, recruiter, candidate, developer, customer, manager
 */
const SHIRT = { blue: C.blue, purple: C.purple, mint: C.mint, cyan: C.cyan, soft: C.soft }

export function Person({ kind = 'consultant', x = 0, y = 0, s = 1, flip = false, tone = 'soft' }) {
  const st = C.ink
  const sw = 2.4
  const line = { fill: 'none', stroke: st, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const shirt = SHIRT[tone] || C.soft
  const light = tone === 'soft'

  const body = <path d="M12 112V90C12 68 30 60 50 60C70 60 88 68 88 90V112Z" fill={shirt} stroke={st} strokeWidth={sw} strokeLinejoin="round" />
  const head = <circle cx="50" cy="34" r="16" fill="#fff" stroke={st} strokeWidth={sw} />
  let extra = null

  switch (kind) {
    case 'consultant':
      extra = (
        <>
          <path d="M34 32C33 18 42 11 51 11C61 11 68 18 66 31C60 25 44 24 34 32Z" fill={st} />
          <circle cx="44" cy="35" r="4.6" {...line} />
          <circle cx="57" cy="35" r="4.6" {...line} />
          <path d="M48.6 35H52.4" {...line} />
          <path d="M84 84L110 62" {...line} stroke={C.purple} strokeWidth="3" />
          <circle cx="111" cy="61" r="3" fill={C.mint} />
        </>
      )
      break
    case 'agent':
      extra = (
        <>
          <path d="M33 36C29 15 45 9 53 11C69 13 72 28 67 44C66 31 60 25 50 25C42 25 36 29 33 36Z" fill={st} />
          <path d="M31 34A19 19 0 0 1 69 34" {...line} stroke={C.purple} strokeWidth="3.6" />
          <rect x="26" y="32" width="7" height="14" rx="3.5" fill={C.cyan} stroke={st} strokeWidth="2" />
          <rect x="67" y="32" width="7" height="14" rx="3.5" fill={C.cyan} stroke={st} strokeWidth="2" />
          <path d="M70 44Q69 54 56 54" {...line} strokeWidth="2" />
          <circle cx="55" cy="54" r="2.4" fill={st} />
        </>
      )
      break
    case 'recruiter':
      extra = (
        <>
          <path d="M34 30C34 18 42 14 50 14C60 14 66 19 66 30C58 24 44 24 34 30Z" fill={st} />
          <circle cx="50" cy="10" r="6.5" fill={st} />
          <rect x="58" y="74" width="28" height="34" rx="4" fill="#fff" stroke={st} strokeWidth="2.2" />
          <path d="M64 86H80M64 93H80M64 100H74" {...line} stroke={C.electric} strokeWidth="2" />
          <rect x="66" y="70" width="12" height="7" rx="2" fill={C.mint} stroke={st} strokeWidth="1.8" />
        </>
      )
      break
    case 'candidate':
      extra = (
        <>
          <path d="M34 30C33 17 43 12 51 12C60 12 67 18 66 30C60 26 42 24 34 30Z" fill={st} />
          <path d="M40 60L50 90L60 60" {...line} stroke={light ? C.purple : '#fff'} strokeWidth="2.6" />
          <rect x="44" y="88" width="12" height="15" rx="2.5" fill="#fff" stroke={st} strokeWidth="2" />
          <path d="M47 94H53M47 98H51" {...line} stroke={C.electric} strokeWidth="1.6" />
        </>
      )
      break
    case 'developer':
      extra = (
        <>
          <path d="M33 30C32 15 43 10 52 11C62 12 68 20 66 32C62 24 48 21 33 30Z" fill={st} />
          <rect x="18" y="82" width="64" height="30" rx="4" fill="#fff" stroke={st} strokeWidth="2.4" />
          <path d="M42 92L36 97L42 102M58 92L64 97L58 102M52 90L48 104" {...line} stroke={C.purple} strokeWidth="2.2" />
        </>
      )
      break
    case 'customer':
      extra = (
        <>
          <path d="M32 34C29 16 44 10 52 11C68 13 71 28 67 40C64 30 58 25 50 25C42 25 36 28 32 34Z" fill={st} />
          <rect x="69" y="24" width="9" height="20" rx="3" fill="#fff" stroke={st} strokeWidth="2.2" transform="rotate(8 73 34)" />
          <path d="M80 30Q86 34 80 40" {...line} stroke={C.cyan} strokeWidth="2.4" />
        </>
      )
      break
    default:
      extra = (
        <>
          <path d="M34 30C34 17 42 12 51 12C61 12 66 19 66 30C60 25 44 24 34 30Z" fill={st} />
          <path d="M44 60L50 72L56 60" {...line} stroke="#fff" />
        </>
      )
  }

  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s}) translate(${flip ? -100 : 0} 0)`}>
      {body}
      {head}
      {extra}
    </g>
  )
}
