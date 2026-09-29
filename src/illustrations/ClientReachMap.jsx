import { MapPin, UsersRound, Zap } from 'lucide-react'

export default function ClientReachMap({ className = '' }) {
  return <div className={`relative isolate aspect-auto min-h-[360px] overflow-hidden rounded-[2rem] border border-[#dce8f2] bg-gradient-to-br from-[#f7fbff] via-[#edf8f5] to-[#fff7e9] p-5 shadow-lift sm:aspect-[1.14] sm:min-h-[380px] sm:p-7 ${className}`} role="img" aria-label="Nationwide utility service coverage across 11 DISCOMs and more than 20 million customers">
    <div aria-hidden className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(#9bc5d71c 1px,transparent 1px),linear-gradient(90deg,#9bc5d71c 1px,transparent 1px)', backgroundSize: '34px 34px' }} />
    <div className="relative z-10 flex items-start justify-between gap-3">
      <div><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#078f85]">Serving across India</p><p className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">A nationwide field network</p></div>
      <div className="rounded-xl bg-white/90 px-3 py-2 text-right shadow-sm"><span className="block text-[10px] font-bold uppercase tracking-wider text-muted">DISCOMs</span><strong className="font-display text-2xl leading-none text-brand">11</strong></div>
    </div>
    <svg aria-hidden viewBox="0 0 600 420" className="absolute inset-x-[7%] bottom-[28%] top-[19%] size-[86%]">
      <image href="/india-map.svg" x="120" y="0" width="360" height="360" preserveAspectRatio="xMidYMid meet" />
      {[
        [260, 84, 'Bathinda, Punjab'],
        [283, 108, 'Haryana'],
        [292, 119, 'New Delhi'],
        [244, 151, 'Rajasthan'],
        [337, 190, 'Odisha'],
      ].map(([x, y, name]) => <g key={name}><title>{name}</title><circle cx={x} cy={y} r="8" fill="#fff" opacity=".95" /><circle cx={x} cy={y} r="5" fill="#0d7cff" stroke="#fff" strokeWidth="1.5" /></g>)}
    </svg>
    <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2 sm:bottom-6 sm:left-6 sm:right-6">
      <span className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-ink shadow-sm"><UsersRound className="size-4 text-[#0b9d8c]"/>20m+ customers served</span>
      <span className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-ink shadow-sm"><Zap className="size-4 text-[#e59b37]"/>Field teams nationwide</span>
      <span className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-ink shadow-sm"><MapPin className="size-4 text-[#7456e8]"/>Multiple service hubs</span>
      <MapPin aria-hidden className="ml-auto size-5 self-center text-brand" />
    </div>
  </div>
}
