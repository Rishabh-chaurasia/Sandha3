import { motion, useReducedMotion } from 'framer-motion'

export const C = {
  blue: '#0878F9',
  deep: '#0057D9',
  bright: '#2196FF',
  cyan: '#19C6E8',
  electric: '#4D7CFE',
  purple: '#7C5CFC',
  mint: '#28D7B2',
  soft: '#EAF6FF',
  softCyan: '#E8FBFF',
  softPurple: '#F1EEFF',
  ultra: '#F6FAFF',
  ink: '#10243F',
  muted: '#617086',
  border: '#D9E8F7',
}

export const BLOBS = {
  a: 'M310 60C380 110 392 220 340 290C288 360 180 390 108 340C36 290 20 190 76 120C132 50 240 10 310 60Z',
  b: 'M200 20C290 10 380 80 384 180C388 280 320 380 210 388C100 396 16 320 14 210C12 100 110 30 200 20Z',
  c: 'M60 120C110 30 250 20 330 90C410 160 380 290 290 340C200 390 90 360 50 270C20 205 30 160 60 120Z',
  d: 'M120 40C220 0 340 60 370 160C400 260 330 360 220 380C110 400 30 320 20 220C10 130 50 60 120 40Z',
  e: 'M30 200C30 110 110 40 210 50C310 60 380 130 370 230C360 330 280 380 190 370C100 360 30 300 30 200Z',
}

export const EASE = [0.22, 1, 0.36, 1]

// Variants propagate from <Stage/> to every child that declares `variants`.
export const V = {
  draw: {
    hidden: { pathLength: 0, opacity: 0 },
    show: (d = 0) => ({ pathLength: 1, opacity: 1, transition: { duration: 1.1, delay: d, ease: [0.65, 0, 0.35, 1] } }),
  },
  fade: { hidden: { opacity: 0 }, show: (d = 0) => ({ opacity: 1, transition: { duration: 0.6, delay: d } }) },
  pop: {
    hidden: { opacity: 0, scale: 0.7 },
    show: (d = 0) => ({ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20, delay: d } }),
  },
  rise: {
    hidden: { opacity: 0, y: 18 },
    show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: EASE } }),
  },
  enterL: {
    hidden: { opacity: 0, x: -40 },
    show: (d = 0) => ({ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 130, damping: 18, delay: d } }),
  },
  enterR: {
    hidden: { opacity: 0, x: 40 },
    show: (d = 0) => ({ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 130, damping: 18, delay: d } }),
  },
}

/** Shared gradients: identical in every SVG so duplicate ids are harmless. */
export function Defs() {
  const lin = (id, a, b) => (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={a} />
      <stop offset="1" stopColor={b} />
    </linearGradient>
  )
  const glow = (id, c) => (
    <radialGradient id={id}>
      <stop offset="0" stopColor={c} stopOpacity="0.55" />
      <stop offset="1" stopColor={c} stopOpacity="0" />
    </radialGradient>
  )
  return (
    <defs>
      {lin('gB', '#2196FF', '#0057D9')}
      {lin('gC', '#19C6E8', '#0878F9')}
      {lin('gP', '#9B7CFF', '#5B3FE0')}
      {lin('gM', '#28D7B2', '#19C6E8')}
      {lin('gBP', '#0878F9', '#7C5CFC')}
      {lin('gS', '#FFFFFF', '#EAF6FF')}
      {glow('glowB', '#0878F9')}
      {glow('glowC', '#19C6E8')}
      {glow('glowP', '#7C5CFC')}
      {glow('glowM', '#28D7B2')}
      {glow('glowBP', '#4D7CFE')}
    </defs>
  )
}

export function Stage({ viewBox, className = '', label, children, ...rest }) {
  const reduce = false
  return (
    <motion.svg
      viewBox={viewBox}
      preserveAspectRatio={rest.preserveAspectRatio || 'xMidYMid meet'}
      role="img"
      aria-label={label}
      className={className}
      initial={reduce ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
      {...rest}
    >
      <Defs />
      {children}
    </motion.svg>
  )
}

export function P({ d, delay = 0, color = C.blue, w = 2.4, ...rest }) {
  return (
    <motion.path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" variants={V.draw} custom={delay} {...rest} />
  )
}

export function Dash({ d, delay = 0, color = C.cyan, w = 2, gap = '4 9' }) {
  return <motion.path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeDasharray={gap} variants={V.fade} custom={delay} />
}

export function G({ children, v = 'pop', delay = 0, style, ...rest }) {
  return (
    <motion.g variants={V[v]} custom={delay} style={{ transformBox: 'fill-box', transformOrigin: 'center', ...style }} {...rest}>
      {children}
    </motion.g>
  )
}

export function Float({ children, amp = 6, dur = 6, delay = 0 }) {
  const reduce = false
  return (
    <motion.g animate={reduce ? undefined : { y: [0, -amp, 0] }} transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}>
      {children}
    </motion.g>
  )
}

/** Slow rotation around its own centre. */
export function Spin({ children, dur = 60, reverse = false }) {
  const reduce = false
  return (
    <motion.g
      animate={reduce ? undefined : { rotate: reverse ? -360 : 360 }}
      transition={{ duration: dur, repeat: Infinity, ease: 'linear' }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    >
      {children}
    </motion.g>
  )
}

/** Expanding ring (signal ripple). */
export function Ripple({ cx, cy, r = 30, color = C.cyan, delay = 0, dur = 2.8 }) {
  const reduce = false
  if (reduce) return null
  return (
    <motion.circle
      cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="2"
      initial={{ opacity: 0.7, scale: 1 }}
      animate={{ opacity: 0, scale: 2.2 }}
      transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeOut' }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  )
}

/** Data packet travelling along a path (SVG SMIL). */
export function Particle({ path, dur = 4, delay = 0, r = 4, color = C.cyan, reverse = false }) {
  const reduce = false
  if (reduce) return null
  return (
    <g>
      <circle r={r * 2.4} fill={color} opacity=".22">
        <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" path={path} keyPoints={reverse ? '1;0' : '0;1'} keyTimes="0;1" calcMode="linear" />
      </circle>
      <circle r={r} fill={color}>
        <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" path={path} keyPoints={reverse ? '1;0' : '0;1'} keyTimes="0;1" calcMode="linear" />
      </circle>
    </g>
  )
}

export function curve([ax, ay], [bx, by], bend = 0.25) {
  const mx = (ax + bx) / 2
  const my = (ay + by) / 2
  const cx = mx - (by - ay) * bend
  const cy = my + (bx - ax) * bend
  return `M${ax} ${ay} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${bx} ${by}`
}

export function smooth(pts) {
  let d = `M${pts[0][0]} ${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`
  }
  return d
}

export function Txt({ x, y, children, fs = 16, w = 700, anchor = 'middle', fill = C.ink, ...rest }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={fs} fontWeight={w} fill={fill} style={{ fontFamily: 'var(--font-sans)' }} {...rest}>
      {children}
    </text>
  )
}

/** Solid gradient sphere with glow, highlight and a white icon. `grad` is gB | gC | gP | gM | gBP. */
export function Orb({ cx, cy, r = 30, Icon, grad = 'gB', label, fs = 17, delay = 0, glow = true, labelDy, iconSize, active = false }) {
  const s = iconSize || r * 0.92
  return (
    <G delay={delay}>
      {glow && <circle cx={cx} cy={cy} r={r * 2.1} fill={`url(#glow${grad.slice(1)})`} opacity={active ? 0.9 : 0.6} />}
      <circle cx={cx} cy={cy} r={r} fill={`url(#${grad})`} stroke="#fff" strokeWidth="3" />
      <ellipse cx={cx - r * 0.22} cy={cy - r * 0.45} rx={r * 0.52} ry={r * 0.2} fill="#fff" opacity=".28" />
      {Icon && <Icon x={cx - s / 2} y={cy - s / 2} size={s} color="#fff" strokeWidth={1.9} />}
      {label && (
        <Txt x={cx} y={cy + r + (labelDy ?? fs + 8)} fs={fs}>{label}</Txt>
      )}
    </G>
  )
}

/** Frosted-glass panel with soft offset shadow. */
export function Glass({ x, y, w, h, rx = 18, op = 0.88, stroke = C.border, shadow = true, fill = '#fff' }) {
  return (
    <g>
      {shadow && <rect x={x + 2} y={y + 10} width={w} height={h} rx={rx} fill={C.electric} opacity=".13" />}
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} fillOpacity={op} stroke={stroke} strokeWidth="1.6" />
    </g>
  )
}

export function CloudShape({ x = 0, y = 0, s = 1, fill = 'url(#gC)', stroke = '#fff', w = 3 }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M28 54H72C86 54 95 44 93 33C91 23 81 18 73 20C70 8 58 1 47 5C38 8 34 15 33 22C20 22 10 30 12 41C13 48 20 54 28 54Z"
      fill={fill} stroke={stroke} strokeWidth={w / s} strokeLinejoin="round"
    />
  )
}

export function ServerStack({ x = 0, y = 0, w = 80, rows = 3, fill = '#fff', accent = C.cyan }) {
  const h = 22
  return (
    <g transform={`translate(${x} ${y})`}>
      {Array.from({ length: rows }).map((_, i) => (
        <g key={i} transform={`translate(0 ${i * (h + 6)})`}>
          <rect width={w} height={h} rx="7" fill={fill} stroke={C.border} strokeWidth="1.6" />
          <circle cx="14" cy={h / 2} r="3" fill={accent} />
          <circle cx="26" cy={h / 2} r="3" fill={C.purple} opacity=".55" />
          <path d={`M${w - 30} ${h / 2}H${w - 12}`} stroke={C.electric} strokeWidth="2.2" strokeLinecap="round" />
        </g>
      ))}
    </g>
  )
}
