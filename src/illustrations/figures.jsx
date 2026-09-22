import { motion, useReducedMotion } from 'framer-motion'

/* ---------------------------------------------------------------
   Illustration kit for the "flat characters + isometric objects" look.
   Everything here is original vector drawing, no traced artwork.
---------------------------------------------------------------- */

export const K = {
  violet: '#5B4CE6',
  violetDeep: '#3D2FB8',
  violetSoft: '#B9B2FF',
  lav: '#EFEBFF',
  blue: '#0878F9',
  blueDeep: '#0057D9',
  sky: '#BFE0FF',
  cyan: '#19C6E8',
  mint: '#28D7B2',
  coral: '#FF7A59',
  amber: '#FFC857',
  pink: '#FF6B9A',
  navy: '#1E2A5A',
  ink: '#10243F',
  white: '#FFFFFF',
}

export const SKIN = { a: '#F6CDAE', b: '#E0A67C', c: '#BC7C56', d: '#8B5738' }
export const HAIR = { black: '#1B2440', brown: '#4A2F22', chestnut: '#7A4A2B', gray: '#7B8194' }

/** Flat character, no face, in a 100 x 220 box (feet at y = 220). */
export function Figure({
  pose = 'stand', skin = 'b', hair = 'black', style = 'short', top = K.violet, bottom = K.navy,
  shoes = K.ink, dress = false, item = null, x = 0, y = 0, s = 1, flip = false,
}) {
  const sk = SKIN[skin]
  const hc = HAIR[hair]
  const arm = { fill: 'none', stroke: top, strokeWidth: 12.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const seated = pose === 'sit'

  // arm paths per pose (left arm, right arm) + hand positions
  const P = {
    stand: { l: 'M31 58Q21 88 25 114', r: 'M69 58Q79 88 75 114', hl: [25, 116], hr: [75, 116] },
    walk: { l: 'M31 58Q28 90 40 112', r: 'M69 58Q78 88 66 108', hl: [40, 114], hr: [66, 110] },
    point: { l: 'M31 58Q21 88 25 114', r: 'M69 58Q92 54 110 36', hl: [25, 116], hr: [112, 33] },
    hold: { l: 'M31 58Q20 92 44 102', r: 'M69 58Q80 92 58 100', hl: [45, 103], hr: [57, 101] },
    celebrate: { l: 'M31 58Q12 42 16 16', r: 'M69 58Q88 42 84 16', hl: [16, 13], hr: [84, 13] },
    phone: { l: 'M31 58Q21 88 25 114', r: 'M69 58Q88 62 70 34', hl: [25, 116], hr: [70, 32] },
    sit: { l: 'M36 60Q60 84 96 98', r: 'M62 60Q82 86 104 96', hl: [98, 99], hr: [106, 97] },
  }[pose]

  const legs = () => {
    if (seated) {
      return (
        <g>
          <path d="M44 118L94 118" stroke={bottom} strokeWidth="15" strokeLinecap="round" />
          <path d="M94 118L96 180" stroke={bottom} strokeWidth="14" strokeLinecap="round" />
          <rect x="88" y="178" width="22" height="9" rx="4.5" fill={shoes} />
        </g>
      )
    }
    if (dress) {
      return (
        <g>
          <path d="M42 176V206M58 176V206" stroke={sk} strokeWidth="8" strokeLinecap="round" />
          <rect x="34" y="204" width="16" height="8" rx="4" fill={shoes} />
          <rect x="52" y="204" width="16" height="8" rx="4" fill={shoes} />
          <path d="M31 100L24 180Q50 190 76 180L69 100Z" fill={bottom} />
        </g>
      )
    }
    const walk = pose === 'walk'
    const l = walk ? 'M44 116L34 204' : 'M42 116L40 204'
    const r = walk ? 'M56 116L70 200' : 'M58 116L60 204'
    return (
      <g>
        <path d={l} stroke={bottom} strokeWidth="14.5" strokeLinecap="round" />
        <path d={r} stroke={bottom} strokeWidth="14.5" strokeLinecap="round" />
        <rect x={walk ? 22 : 30} y="202" width="21" height="9" rx="4.5" fill={shoes} />
        <rect x={walk ? 62 : 52} y={walk ? 198 : 202} width="21" height="9" rx="4.5" fill={shoes} />
      </g>
    )
  }

  const hairBack = style === 'long' ? <path d="M32 26Q26 62 34 80L50 70L66 80Q74 62 68 26Z" fill={hc} /> : null
  const hairFront =
    style === 'bun' ? (
      <g><circle cx="50" cy="8" r="8" fill={hc} /><path d="M33 27Q32 9 50 9Q68 9 67 27Q60 18 50 19Q40 18 33 27Z" fill={hc} /></g>
    ) : (
      <path d="M33 27Q31 8 50 8Q69 8 67 27Q61 17 50 18Q39 17 33 27Z" fill={hc} />
    )

  const items = {
    badge: (
      <g>
        <path d="M43 48L50 90L57 48" stroke={K.coral} strokeWidth="2.2" fill="none" />
        <rect x="43" y="88" width="14" height="18" rx="3" fill="#fff" />
        <rect x="46" y="92" width="8" height="3" rx="1.5" fill={K.cyan} /><rect x="46" y="98" width="8" height="2" rx="1" fill={K.violetSoft} />
      </g>
    ),
    tablet: (
      <g transform="rotate(-8 50 96)">
        <rect x="34" y="84" width="32" height="24" rx="4" fill={K.ink} />
        <rect x="37" y="87" width="26" height="18" rx="2" fill={K.lav} />
        <path d="M40 101V96M45 101V92M50 101V98M55 101V90" stroke={K.violet} strokeWidth="3" strokeLinecap="round" />
      </g>
    ),
    clipboard: (
      <g transform="rotate(6 50 96)">
        <rect x="34" y="80" width="30" height="36" rx="4" fill="#fff" stroke={K.violetSoft} strokeWidth="2" />
        <rect x="42" y="76" width="14" height="8" rx="3" fill={K.amber} />
        <path d="M40 94H58M40 101H58M40 108H52" stroke={K.violetSoft} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M39 94l2 2l3-4" stroke={K.mint} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
    ),
    headset: (
      <g>
        <path d="M32 27A18 18 0 0 1 68 27" stroke={K.violet} strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="32" cy="31" r="5.5" fill={K.cyan} /><circle cx="68" cy="31" r="5.5" fill={K.cyan} />
        <path d="M68 36Q66 47 54 46" stroke={K.violet} strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="53" cy="46" r="2.6" fill={K.violet} />
      </g>
    ),
    phone: <rect x="66" y="22" width="9" height="17" rx="2.5" fill={K.ink} transform="rotate(10 70 30)" />,
    magnifier: (
      <g>
        <circle cx="122" cy="26" r="11" fill="#fff" fillOpacity=".7" stroke={K.ink} strokeWidth="3" />
        <path d="M114 34L108 42" stroke={K.ink} strokeWidth="4" strokeLinecap="round" />
      </g>
    ),
    glasses: (
      <g fill="none" stroke={K.ink} strokeWidth="2">
        <circle cx="44" cy="29" r="5" /><circle cx="57" cy="29" r="5" /><path d="M49 29H52" />
      </g>
    ),
  }

  const chair = seated ? (
    <g>
      <rect x="18" y="66" width="10" height="56" rx="5" fill={K.violetSoft} />
      <rect x="18" y="116" width="52" height="10" rx="5" fill={K.violetSoft} />
      <path d="M44 126V186M28 190H60" stroke="#8F97C9" strokeWidth="4" strokeLinecap="round" />
    </g>
  ) : null

  const headItem = ['headset', 'phone', 'glasses'].includes(item) ? items[item] : null
  const bodyItem = item && !['headset', 'phone', 'glasses'].includes(item) ? items[item] : null

  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s}) translate(${flip ? -100 : 0} 0)`}>
      {chair}
      {hairBack}
      {legs()}
      <rect x="44" y="40" width="12" height="12" rx="4" fill={sk} />
      <path d="M27 58Q27 46 50 46Q73 46 73 58L71 120Q50 126 29 120Z" fill={top} />
      {dress && <path d="M29 96Q50 104 71 96L72 112Q50 120 28 112Z" fill={bottom} opacity=".85" />}
      <path d={P.l} {...arm} />
      <path d={P.r} {...arm} />
      <circle cx={P.hl[0]} cy={P.hl[1]} r="6.5" fill={sk} />
      <circle cx={P.hr[0]} cy={P.hr[1]} r="6.5" fill={sk} />
      <circle cx="50" cy="28" r="16.5" fill={sk} />
      {hairFront}
      {headItem}
      {bodyItem}
    </g>
  )
}

/* ---------------- isometric helpers ---------------- */

/** Box with a top vertex at (cx, cy - h). a runs right-down, b runs left-down. */
export function IsoBox({ cx, cy, a = 60, b = 60, h = 40, top = '#fff', left = '#DDE6FF', right = '#B9C6F5', children, topContent, leftContent, rightContent }) {
  const t0 = [cx, cy - h]
  const t1 = [cx + a, cy - h + a / 2]
  const t2 = [cx + a - b, cy - h + a / 2 + b / 2]
  const t3 = [cx - b, cy - h + b / 2]
  const pts = (arr) => arr.map((p) => p.join(',')).join(' ')
  return (
    <g>
      <polygon points={pts([t3, t2, [t2[0], t2[1] + h], [t3[0], t3[1] + h]])} fill={left} />
      <polygon points={pts([t1, t2, [t2[0], t2[1] + h], [t1[0], t1[1] + h]])} fill={right} />
      <polygon points={pts([t0, t1, t2, t3])} fill={top} />
      {topContent && <g transform={`matrix(1 .5 -1 .5 ${t0[0]} ${t0[1]})`}>{topContent}</g>}
      {leftContent && <g transform={`matrix(1 .5 0 1 ${t3[0]} ${t3[1]})`}>{leftContent}</g>}
      {rightContent && <g transform={`matrix(1 -.5 0 1 ${t2[0]} ${t2[1]})`}>{rightContent}</g>}
      {children}
    </g>
  )
}

/** Floating rounded platform (flat iso slab with soft shadow). */
export function IsoPlatform({ cx, cy, a = 200, b = 200, h = 16, top = '#FFFFFF', left = '#D8D2FF', right = '#B9B2FF' }) {
  return (
    <g>
      <ellipse cx={cx + (a - b) / 2} cy={cy + (a + b) / 4 + h + 14} rx={(a + b) / 2.4} ry={(a + b) / 9} fill={K.violet} opacity=".12" />
      <IsoBox cx={cx} cy={cy} a={a} b={b} h={h} top={top} left={left} right={right} />
    </g>
  )
}

/** Pot plant (simple, adds the 'lived-in' feel of the references). */
export function Plant({ x = 0, y = 0, s = 1, leaf = K.mint, pot = K.coral }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M22 74L26 96H46L50 74Z" fill={pot} />
      <path d="M36 74Q20 60 22 34Q34 44 36 74Z" fill={leaf} />
      <path d="M36 74Q52 58 50 30Q38 42 36 74Z" fill={leaf} opacity=".85" />
      <path d="M36 74Q36 48 36 22Q46 38 36 74Z" fill={leaf} opacity=".7" />
    </g>
  )
}

/** Sitting desk with monitor, side view facing left. (x,y) = desk top-left. */
export function Desk({ x = 0, y = 0, w = 160, screen = true, top = K.amber, legs = K.violetSoft, legH = 66 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width={w} height="9" rx="4" fill={top} />
      <path d={`M10 9V${9 + legH}M${w - 10} 9V${9 + legH}`} stroke={legs} strokeWidth="6" strokeLinecap="round" />
      {screen && (
        <g>
          <rect x={w / 2 - 6} y="-10" width="12" height="10" fill="#8F97C9" />
          <rect x={w / 2 - 34} y="-58" width="68" height="48" rx="6" fill={K.ink} />
          <rect x={w / 2 - 30} y="-54" width="60" height="40" rx="3" fill={K.lav} />
          <path d={`M${w / 2 - 22} -22V-32M${w / 2 - 12} -22V-42M${w / 2 - 2} -22V-36M${w / 2 + 8} -22V-46M${w / 2 + 18} -22V-38`} stroke={K.violet} strokeWidth="5" strokeLinecap="round" />
        </g>
      )}
    </g>
  )
}

/** Scattered geometric confetti in the palette (dots, rings, triangles, plus). */
export function Confetti({ items, float = true }) {
  const reduce = useReducedMotion()
  const paint = (t, c, r) => {
    if (t === 'ring') return <circle r={r} fill="none" stroke={c} strokeWidth="2.4" />
    if (t === 'tri') return <path d={`M0 ${-r}L${r} ${r}L${-r} ${r}Z`} fill={c} />
    if (t === 'plus') return <path d={`M0 ${-r}V${r}M${-r} 0H${r}`} stroke={c} strokeWidth="2.8" strokeLinecap="round" />
    return <circle r={r} fill={c} />
  }
  return (
    <g>
      {items.map(([t, x, y, r, c], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <motion.g
            animate={reduce || !float ? undefined : { y: [0, -(4 + (i % 3) * 3), 0], rotate: t === 'tri' || t === 'plus' ? [0, 20, 0] : 0 }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
          >
            {paint(t, c, r)}
          </motion.g>
        </g>
      ))}
    </g>
  )
}

/* ---------------- shared scene bits ---------------- */
import { G, Txt } from './primitives'

/** Flat white icon bubble with a soft coloured shadow. */
export function Chip({ cx, cy, r = 30, Icon, color = K.violet, label, fs = 17, delay = 0, labelDy, fill = '#fff' }) {
  const s = r * 0.9
  return (
    <G delay={delay}>
      <circle cx={cx + 3} cy={cy + 8} r={r} fill={color} opacity=".18" />
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke={color} strokeOpacity=".25" strokeWidth="2" />
      {Icon && <Icon x={cx - s / 2} y={cy - s / 2} size={s} color={color} strokeWidth={1.9} />}
      {label && (Array.isArray(label) ? label : [label]).map((l, i) => (
        <Txt key={l} x={cx} y={cy + r + (labelDy ?? fs + 8) + i * (fs + 3)} fs={fs} w={800}>{l}</Txt>
      ))}
    </G>
  )
}

/** Mini dashboard drawn in a flat w x h box (project onto an iso face with leftContent / rightContent). */
export function DashboardFace({ w = 200, h = 110 }) {
  return (
    <g>
      <rect width={w} height={h} rx="6" fill="#fff" />
      <rect width={w} height="16" rx="6" fill={K.lav} />
      <circle cx="10" cy="8" r="2.6" fill={K.coral} /><circle cx="19" cy="8" r="2.6" fill={K.amber} /><circle cx="28" cy="8" r="2.6" fill={K.mint} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={14 + i * 16} y={h - 16 - [22, 36, 28, 48, 40][i]} width="10" height={[22, 36, 28, 48, 40][i]} rx="3" fill={i % 2 ? K.violet : K.cyan} />
      ))}
      <circle cx={w - 46} cy="50" r="22" fill="none" stroke={K.lav} strokeWidth="12" />
      <path d={`M${w - 46} 28A22 22 0 0 1 ${w - 26} 60`} fill="none" stroke={K.coral} strokeWidth="12" />
      <path d={`M${w - 46} 28A22 22 0 0 0 ${w - 68} 50`} fill="none" stroke={K.mint} strokeWidth="12" />
      <rect x="104" y="26" width="34" height="5" rx="2.5" fill={K.violetSoft} /><rect x="104" y="37" width="24" height="5" rx="2.5" fill={K.lav} />
      <path d={`M104 ${h - 24}L118 ${h - 40}L132 ${h - 30}L150 ${h - 54}`} fill="none" stroke={K.blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  )
}
