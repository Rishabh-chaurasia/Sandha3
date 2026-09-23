import { Stage, G } from './primitives'

const CLIENT_MARKS = ['DHBVN', 'AVVNL', 'JDVVNL', 'JVVNL', 'TATA', 'PSPCL', 'BSES', 'LLRU']
const COLORS = ['#0878F9', '#13A98B', '#7353E8', '#119EB5', '#D18A00', '#E3654C', '#416BC5', '#148D70']

export default function ClientsPortfolio({ className = '', mobile = false }) {
  if (mobile) {
    return (
      <div role="group" aria-label="Eight client organisations" className={`${className} rounded-3xl border border-line bg-white p-4 shadow-lift`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand">Client portfolio</p>
            <p className="mt-1 text-base font-extrabold leading-tight text-ink">Partnerships across essential services</p>
          </div>
          <span className="shrink-0 rounded-full bg-mint/15 px-2.5 py-1 text-[10px] font-extrabold text-brand-deep">08 partners</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-bold text-muted">
          <span className="rounded-full bg-soft px-2.5 py-1">07 Power &amp; utilities</span>
          <span className="rounded-full bg-softpurple px-2.5 py-1">01 Education</span>
        </div>
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {CLIENT_MARKS.map((mark, i) => (
            <li key={mark} className="flex min-h-11 items-center gap-2 rounded-xl border border-line/80 bg-ultra px-2.5 py-2">
              <span aria-hidden className="h-6 w-1 shrink-0 rounded-full" style={{ backgroundColor: COLORS[i] }} />
              <span className="text-xs font-extrabold text-ink">{mark}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <Stage viewBox="0 0 520 410" className={className} label="Client portfolio featuring seven power and utility organisations and one education institution">
      <rect x="12" y="12" width="496" height="386" rx="28" fill="#FFFFFF" stroke="#DCE7F4" strokeWidth="2" />
      <path d="M12 40Q12 12 40 12H480Q508 12 508 40V94H12Z" fill="#F2F6FF" />
      <G v="rise" delay={0.08}>
        <text x="38" y="51" fill="#0878F9" fontSize="12" fontWeight="800" letterSpacing="2">CLIENT PORTFOLIO</text>
        <text x="38" y="75" fill="#10243F" fontSize="14" fontWeight="700">Partnerships across essential services</text>
        <rect x="410" y="35" width="72" height="28" rx="14" fill="#E6F7F5" />
        <text x="446" y="53" textAnchor="middle" fill="#0D9B80" fontSize="10" fontWeight="800">08 PARTNERS</text>
      </G>
      <rect x="30" y="112" width="142" height="260" rx="20" fill="url(#gBP)" />
      <G v="rise" delay={0.2}>
        <text x="50" y="153" fill="#FFFFFF" fillOpacity=".8" fontSize="10" fontWeight="800" letterSpacing="1.8">OUR EXPERIENCE</text>
        <text x="48" y="232" fill="#FFFFFF" fontSize="66" fontWeight="800" letterSpacing="-4">08</text>
        <text x="51" y="256" fill="#FFFFFF" fontSize="14" fontWeight="700">client partners</text>
        <path d="M50 282H150" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="1.5" />
        <rect x="50" y="302" width="7" height="7" rx="2" fill="#19C6E8" />
        <text x="65" y="310" fill="#FFFFFF" fontSize="11" fontWeight="700">Power &amp; utilities</text>
        <rect x="50" y="330" width="7" height="7" rx="2" fill="#FFC857" />
        <text x="65" y="338" fill="#FFFFFF" fontSize="11" fontWeight="700">Education</text>
      </G>
      <text x="196" y="129" fill="#617086" fontSize="10" fontWeight="800" letterSpacing="1.5">ORGANISATIONS WE WORK WITH</text>
      {CLIENT_MARKS.map((mark, i) => {
        const x = 194 + (i % 3) * 98
        const y = 146 + Math.floor(i / 3) * 68
        return (
          <G key={mark} v="rise" delay={0.24 + i * 0.06}>
            <rect x={x} y={y} width="88" height="56" rx="12" fill="#F8FAFD" stroke="#E0E9F3" />
            <rect x={x + 10} y={y + 12} width="4" height="32" rx="2" fill={COLORS[i]} />
            <text x={x + 50} y={y + 33} textAnchor="middle" fill="#263B57" fontSize={mark.length > 5 ? 10 : 12} fontWeight="800">{mark}</text>
          </G>
        )
      })}
    </Stage>
  )
}
