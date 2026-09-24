import { MapPin, UsersRound, Zap } from 'lucide-react'

// Simplified from Natural Earth's public-domain 1:50m country boundary.
// Source: https://www.naturalearthdata.com/about/terms-of-use/
const indiaOutline = 'M132 166L139 164L139 160L154 162L167 159L162 144L157 144L155 141L156 134L148 131L149 125L158 116L162 119L175 117L182 107L189 104L206 81L210 80L208 71L218 65L211 63L210 59L206 59L206 56L202 54L204 51L202 47L205 44L201 44L200 38L204 35L223 38L234 35L248 26L251 26L253 36L262 40L259 48L264 54L265 62L261 64L255 61L259 68L259 76L263 75L269 81L272 80L276 85L286 89L279 95L275 106L296 118L313 124L323 122L336 131L342 130L344 133L354 135L358 133L361 136L371 135L371 117L376 115L380 116L379 126L382 130L391 132L398 129L401 131L419 130L419 124L413 120L426 117L426 114L433 108L438 108L449 100L459 104L468 99L470 101L468 105L471 103L473 106L469 111L482 113L482 117L477 120L479 127L476 124L467 125L456 132L456 140L449 147L450 153L444 165L434 163L435 172L431 178L430 188L427 186L425 188L420 167L417 168L414 176L411 173L410 175L408 169L410 163L417 162L421 153L424 153L419 150L394 149L390 137L389 140L385 140L383 135L379 137L374 133L375 136L371 142L379 146L381 150L375 150L370 156L379 161L377 169L381 173L383 192L379 193L378 187L377 192L371 192L372 186L369 184L372 187L356 197L358 204L351 212L349 211L350 213L337 215L336 217L339 216L331 222L328 228L301 248L300 254L289 256L286 263L282 261L278 263L275 268L277 300L270 316L272 316L272 328L267 328L261 337L267 342L253 344L252 350L244 355L233 346L223 316L213 301L207 278L195 258L188 228L190 225L188 220L190 221L187 220L186 215L189 202L185 194L191 191L185 192L186 188L184 188L188 185L180 185L182 186L178 190L181 194L178 198L171 202L160 202L142 186L142 183L145 185L156 181L160 175L151 179L145 178L136 172L135 168L139 166L134 169Z'
const islands = [
  'M427 314L426 314L425 310L424 310L426 308L426 305L427 305L428 292L429 290L431 289L431 291L430 292L431 294L429 295L430 302L428 303L429 305L427 308L427 309L428 309Z',
  'M424 325L424 326L422 325L423 324L422 322L424 321L425 322L425 324Z',
  'M441 370L440 371L439 368L438 368L438 366L440 365Z',
]

export default function ClientReachMap({ className = '' }) {
  return <div className={`relative isolate aspect-auto min-h-[360px] overflow-hidden rounded-[2rem] border border-[#dce8f2] bg-gradient-to-br from-[#f7fbff] via-[#edf8f5] to-[#fff7e9] p-5 shadow-lift sm:aspect-[1.14] sm:min-h-[380px] sm:p-7 ${className}`} role="img" aria-label="Nationwide utility service coverage across 11 DISCOMs and more than 20 million customers">
    <div aria-hidden className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(#9bc5d71c 1px,transparent 1px),linear-gradient(90deg,#9bc5d71c 1px,transparent 1px)', backgroundSize: '34px 34px' }} />
    <div className="relative z-10 flex items-start justify-between gap-3">
      <div><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#078f85]">Serving across India</p><p className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">A nationwide field network</p></div>
      <div className="rounded-xl bg-white/90 px-3 py-2 text-right shadow-sm"><span className="block text-[10px] font-bold uppercase tracking-wider text-muted">DISCOMs</span><strong className="font-display text-2xl leading-none text-brand">11</strong></div>
    </div>
    <svg aria-hidden viewBox="0 0 600 420" className="absolute inset-x-[7%] bottom-[28%] top-[19%] size-[86%]">
      <defs><linearGradient id="india-fill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#72d18f"/><stop offset="1" stopColor="#27a85e"/></linearGradient></defs>
      <path d={indiaOutline} fill="url(#india-fill)" stroke="#21884f" strokeWidth="2.5" strokeLinejoin="round" />
      {islands.map((outline) => <path key={outline} d={outline} fill="url(#india-fill)" stroke="#21884f" strokeWidth="1.5" />)}
      <g fill="none" stroke="#075b94" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" opacity=".8">
        <path d="M257 115 Q245 94 222 80" /><path d="M257 115 Q235 130 214 159" />
        <path d="M257 115 Q197 135 173 185" /><path d="M257 115 Q265 126 271 142" />
      </g>
      {[
        [257, 115, 'Haryana'], [250, 108, 'Haryana services'], [264, 121, 'Haryana field team'], [222, 80, 'Punjab'], [228, 87, 'Punjab services'], [214, 159, 'Rajasthan'], [205, 153, 'Rajasthan services'], [220, 166, 'Rajasthan field team'], [173, 185, 'Gujarat'], [182, 180, 'Gujarat services'], [191, 190, 'Gujarat field team'], [271, 142, 'Delhi'], [278, 135, 'Delhi services'], [284, 148, 'Delhi field team'],
      ].map(([x, y, name], i) => <g key={name}><circle cx={x} cy={y} r={i % 3 ? '5.5' : '8'} fill="#fff" opacity=".94" /><circle cx={x} cy={y} r={i % 3 ? '3' : '4.5'} fill={i % 3 === 1 ? '#0f9e93' : i % 3 === 2 ? '#7456e8' : '#0878f9'} /></g>)}
    </svg>
    <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2 sm:bottom-6 sm:left-6 sm:right-6">
      <span className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-ink shadow-sm"><UsersRound className="size-4 text-[#0b9d8c]"/>20m+ customers served</span>
      <span className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-ink shadow-sm"><Zap className="size-4 text-[#e59b37]"/>Field teams nationwide</span>
      <span className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-ink shadow-sm"><MapPin className="size-4 text-[#7456e8]"/>Multiple service hubs</span>
      <MapPin aria-hidden className="ml-auto size-5 self-center text-brand" />
    </div>
  </div>
}
