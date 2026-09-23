import { Code2, Compass, UsersRound, BriefcaseBusiness, Headset } from 'lucide-react'
import { Stage, G, P, C } from './primitives'

const SERVICES = [
  { label: 'Technology', Icon: Code2, color: C.blue, tint: '#EAF6FF' },
  { label: 'Consulting', Icon: Compass, color: C.purple, tint: '#F1EEFF' },
  { label: 'Manpower', Icon: UsersRound, color: '#14B89B', tint: '#E8FBF5' },
  { label: 'Staffing', Icon: BriefcaseBusiness, color: '#F16D50', tint: '#FFF0EA' },
  { label: 'Customer care', Icon: Headset, color: '#D29218', tint: '#FFF8E8' },
]

export default function ServicesOverview({ className = '', mobile = false }) {
  if (mobile) {
    return (
      <div role="group" aria-label="Five service capabilities" className={`${className} rounded-[1.75rem] border border-line/80 bg-white/90 p-4 shadow-lift`}>
        <div className="flex items-end justify-between gap-3 px-1 pb-4">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand">One partner</p>
            <p className="mt-1 text-xl font-extrabold leading-tight tracking-tight text-ink">Five connected<br />capabilities.</p>
          </div>
          <span className="mb-1 rounded-full bg-soft px-3 py-1.5 text-xs font-extrabold tracking-wide text-brand-deep">05 services</span>
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {SERVICES.map(({ label, Icon, color, tint }, i) => (
            <li key={label} className={`relative flex min-h-[5.25rem] items-center gap-2.5 overflow-hidden rounded-2xl border border-line/80 bg-gradient-to-br from-white to-ultra px-3 py-3 ${i === SERVICES.length - 1 ? 'col-span-2' : ''}`}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: tint, color }}><Icon aria-hidden className="size-[1.15rem]" /></span>
              <span className="min-w-0 text-[13px] font-extrabold leading-tight text-ink">{label}</span>
              <span aria-hidden className="absolute right-2 top-2 text-[9px] font-bold tracking-wider text-muted/60">0{i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <Stage viewBox="0 0 520 360" className={className} label="Five service capabilities: technology, consulting, manpower, staffing and customer care, delivered by one partner">
      <rect x="14" y="12" width="492" height="336" rx="28" fill="#F6FAFF" stroke="#D9E8F7" strokeWidth="2" />
      <rect x="30" y="28" width="176" height="304" rx="22" fill="url(#gBP)" />
      <path d="M174 28H184Q206 28 206 50V310Q206 332 184 332H174" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="26" />
      <G v="rise" delay={0.1}>
        <text x="50" y="77" fill="#fff" fontSize="12" fontWeight="800" letterSpacing="2">SANDHA &amp; COMPANY</text>
        <text x="50" y="155" fill="#fff" fontSize="29" fontWeight="800">One</text>
        <text x="50" y="192" fill="#fff" fontSize="29" fontWeight="800">partner.</text>
        <text x="50" y="244" fill="#fff" fillOpacity=".82" fontSize="14" fontWeight="650">Five connected</text>
        <text x="50" y="264" fill="#fff" fillOpacity=".82" fontSize="14" fontWeight="650">capabilities.</text>
        <rect x="50" y="291" width="80" height="4" rx="2" fill="#19C6E8" />
      </G>
      <P d="M224 62V298" delay={0.3} color="#B6C9F8" w={2} strokeDasharray="4 7" />
      {SERVICES.map(({ label, Icon, color, tint }, i) => {
        const y = 30 + i * 61
        return (
          <G key={label} v="enterR" delay={0.18 + i * 0.1}>
            <circle cx="224" cy={y + 25} r="5" fill={color} />
            <path d={`M224 ${y + 25}H238`} stroke={color} strokeWidth="2.5" />
            <rect x="238" y={y + 3} width="252" height="48" rx="14" fill="#fff" stroke="#D9E8F7" strokeWidth="1.5" />
            <rect x="238" y={y + 3} width="6" height="48" rx="3" fill={color} />
            <rect x="253" y={y + 10} width="34" height="34" rx="10" fill={tint} />
            <Icon x={260} y={y + 17} size={20} color={color} strokeWidth={2} />
            <text x="300" y={y + 32} fill="#10243F" fontSize="16" fontWeight="800">{label}</text>
          </G>
        )
      })}
    </Stage>
  )
}
