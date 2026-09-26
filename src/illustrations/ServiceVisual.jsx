import { motion } from 'framer-motion'
import { Headset, Truck, MapPin, CheckCircle2, Smartphone, Gauge, ReceiptText, Wallet, Wrench, Droplets, UserPlus, HardHat, Building2, Zap, Landmark, Warehouse, Forklift, ArrowUpFromLine, ShieldCheck, CalendarCheck, Cable, Settings2 } from 'lucide-react'
import ITArchitecture from './ITArchitecture'
import CallCentreNetwork from './CallCentreNetwork'

function Shell({ children, tint, label }) {
  return <div role="img" aria-label={label} className="relative isolate flex min-h-[330px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/70 p-6 shadow-lift sm:min-h-[390px]" style={{ background: `radial-gradient(circle at 75% 20%, #fff, transparent 45%), ${tint}` }}>
    <div aria-hidden className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(#89a8d024 1px, transparent 1px),linear-gradient(90deg,#89a8d024 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
    <div className="relative w-full max-w-[530px]">{children}</div>
  </div>
}

function FieldVisual() {
  const steps = [['01', 'Complaint', Headset], ['02', 'FRT dispatched', Truck], ['03', 'Field visit', MapPin], ['04', 'Resolution', CheckCircle2]]
  return <Shell tint="#e4faf6" label="Utility complaint moves from registration to FRT dispatch, field visit and resolution">
    <div className="relative mx-auto max-w-lg">
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1 }} aria-hidden className="absolute left-[11%] right-[11%] top-10 h-1 origin-left bg-gradient-to-r from-[#0f9e93] via-cyan to-brand" />
      <div className="grid grid-cols-4 gap-2">
        {steps.map(([n, label, Icon], i) => <motion.div key={label} initial={{ opacity: 0, y: i % 2 ? 20 : -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .15 + i * .16 }} className={`${i % 2 ? 'mt-16' : ''} text-center`}>
          <motion.span animate={{ y: [0, -7, 0] }} transition={{ duration: 3.5 + i, repeat: Infinity }} className="mx-auto grid size-14 place-items-center rounded-full border-4 border-white bg-[#0f9e93] text-white shadow-lg sm:size-20"><Icon className="size-7" /></motion.span>
          <span className="mt-4 block text-xs font-black tracking-widest text-[#0f9e93]">{n}</span>
          <span className="mt-1 block text-xs font-bold leading-tight text-ink sm:text-sm">{label}</span>
        </motion.div>)}
      </div>
    </div>
  </Shell>
}

function WaterVisual() {
  const steps = [['Connection', Smartphone], ['Meter reading', Gauge], ['Billing', ReceiptText], ['Collection', Wallet], ['Repair', Wrench]]
  return <Shell tint="#e9efff" label="Water utility cycle: new connection, meter reading, billing, collection, repair and maintenance">
    <div className="relative mx-auto grid size-72 place-items-center sm:size-80">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} aria-hidden className="absolute inset-6 rounded-full border-2 border-dashed border-[#4266c9]/50" />
      <div className="z-10 grid size-28 place-content-center rounded-full bg-gradient-to-br from-[#4266c9] to-[#19c6e8] text-center text-white shadow-xl"><Droplets className="mx-auto size-9" /><span className="mt-1 text-xs font-black">Water utility</span></div>
      {steps.map(([label, Icon], i) => {
        const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2
        return <motion.div key={label} animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5 + i * 0.4, repeat: Infinity }} className="absolute grid size-[74px] place-content-center rounded-2xl border border-[#c8d5f4] bg-white text-center text-[#4266c9] shadow-md" style={{ left: `calc(50% + ${Math.cos(angle) * 42}% - 37px)`, top: `calc(50% + ${Math.sin(angle) * 42}% - 37px)` }}><Icon className="mx-auto size-6" /><span className="mt-1 px-1 text-[10px] font-extrabold leading-tight text-ink">{label}</span></motion.div>
      })}
    </div>
  </Shell>
}

function ManpowerDeployVisual() {
  const prep = [['Recruit', UserPlus], ['Train', HardHat]]
  const sites = [['Circle office', Landmark], ['Sub-division', Building2], ['Substation', Zap], ['Field depot', Warehouse]]
  return <Shell tint="#e8fbf5" label="Sandha and Company recruits and trains staff, then deploys them to four client sites">
    <div className="grid grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] items-center gap-1 sm:grid-cols-[minmax(0,1fr)_84px_minmax(0,1fr)]">
      <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#bfeede] bg-white p-3 shadow-md sm:p-4">
        <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#18a882]">Sandha &amp; Company</p>
        <ol className="mt-3 space-y-2">
          {prep.map(([label, Icon], i) => <li key={label} className="flex items-center gap-2 rounded-xl bg-[#e8fbf5] px-2 py-2 sm:px-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#18a882] text-white"><Icon className="size-4" /></span>
            <span className="text-xs font-extrabold text-ink sm:text-sm">{String(i + 1).padStart(2, '0')} {label}</span>
          </li>)}
        </ol>
        <p className="mt-3 text-[10px] font-bold leading-snug text-muted sm:text-xs">ITI-qualified, safety trained</p>
      </motion.div>
      <svg aria-hidden viewBox="0 0 84 240" className="h-56 w-full sm:h-64" preserveAspectRatio="none">
        <defs><marker id="deploy-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#18a882" /></marker></defs>
        {[30, 90, 150, 210].map((y, i) => <motion.path key={y} d={`M4 120 C44 120 40 ${y} 78 ${y}`} fill="none" stroke="#18a882" strokeWidth="2.5" strokeDasharray="4 5" markerEnd="url(#deploy-arrow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: .8, delay: .2 + i * .15 }} />)}
      </svg>
      <ul className="space-y-2">
        {sites.map(([label, Icon], i) => <motion.li key={label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .5 + i * .12 }} className="flex items-center gap-2 rounded-xl border border-[#cfe7ff] bg-white px-2 py-2 shadow-sm sm:px-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#eaf6ff] text-[#0878f9]"><Icon className="size-4" /></span>
          <span className="min-w-0 text-xs font-extrabold leading-tight text-ink sm:text-sm">{label}</span>
        </motion.li>)}
      </ul>
    </div>
    <p className="mt-4 text-center text-xs font-black uppercase tracking-[.16em] text-[#18a882]">Deployed at client sites</p>
  </Shell>
}

function LifterVisual() {
  const points = [['Drive to site', Truck], ['Raise platform', ArrowUpFromLine], ['Work at height', Wrench], ['Safe descent', ShieldCheck]]
  return <Shell tint="#fff6e6" label="Trolley-mounted lifter: drive to site, raise the platform, work at height and come down safely">
    <div className="grid items-center gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div className="relative mx-auto flex h-56 w-44 flex-col items-center justify-end">
        <motion.div animate={{ y: [0, -26, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10 flex flex-col items-center">
          <span className="grid size-16 place-items-center rounded-2xl border-4 border-white bg-[#c9861a] text-white shadow-lg"><Forklift className="size-8" /></span>
          <span className="mt-1 h-20 w-3 rounded-full bg-gradient-to-b from-[#e0a64a] to-[#c9861a]" />
        </motion.div>
        <span className="h-8 w-40 rounded-xl bg-[#1f3558]" />
        <span className="-mt-1 flex w-36 justify-between"><span className="size-7 rounded-full border-4 border-white bg-[#10213c]" /><span className="size-7 rounded-full border-4 border-white bg-[#10213c]" /></span>
      </div>
      <ol className="space-y-2">
        {points.map(([label, Icon], i) => <motion.li key={label} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .15 + i * .12 }} className="flex items-center gap-3 rounded-xl border border-[#f1ddb3] bg-white px-3 py-2 shadow-sm">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#fff0d8] text-[#c9861a]"><Icon className="size-4" /></span>
          <span className="text-sm font-extrabold text-ink">{String(i + 1).padStart(2, '0')} {label}</span>
        </motion.li>)}
      </ol>
    </div>
  </Shell>
}

function SkyVisual() {
  const points = [['Position truck', Truck], ['Extend boom', ArrowUpFromLine], ['Work at HT height', Zap], ['Safe descent', ShieldCheck]]
  return <Shell tint="#fff0e8" label="Sky lifter: position the truck, extend the boom, work at HT height and come down safely">
    <ol className="mx-auto grid max-w-md grid-cols-2 gap-3">
      {points.map(([label, Icon], i) => <motion.li key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }} whileHover={{ y: -5 }} className="rounded-2xl border border-[#f6d2bf] bg-white p-4 shadow-md">
        <span className="grid size-10 place-items-center rounded-xl bg-[#e0662f] text-white"><Icon className="size-5" /></span>
        <span className="mt-3 block text-sm font-extrabold text-ink">{String(i + 1).padStart(2, '0')} {label}</span>
      </motion.li>)}
    </ol>
  </Shell>
}

function OMVisual() {
  const items = [['Grid & substations', Zap], ['AMC visits', CalendarCheck], ['MRBD', ReceiptText], ['Line projects', Cable]]
  return <Shell tint="#f1eeff" label="Operations and maintenance: grid and substations, AMC visits, meter reading and bill distribution, and line projects">
    <div className="relative mx-auto grid size-72 place-items-center sm:size-80">
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 46, repeat: Infinity, ease: 'linear' }} aria-hidden className="absolute inset-8 rounded-full border-2 border-dashed border-[#7c5cfc]/45" />
      <div className="z-10 grid size-28 place-content-center rounded-full bg-gradient-to-br from-[#7c5cfc] to-[#0878f9] text-center text-white shadow-xl"><Settings2 className="mx-auto size-9" /><span className="mt-1 px-2 text-[11px] font-black leading-tight">Operations &amp; maintenance</span></div>
      {items.map(([label, Icon], i) => {
        const angle = (i / items.length) * Math.PI * 2 - Math.PI / 4
        return <motion.div key={label} animate={{ y: [0, -6, 0] }} transition={{ duration: 3.6 + i * 0.4, repeat: Infinity }} className="absolute grid w-[92px] place-content-center rounded-2xl border border-[#d9d0ff] bg-white px-1 py-2.5 text-center text-[#7c5cfc] shadow-md" style={{ left: `calc(50% + ${Math.cos(angle) * 40}% - 46px)`, top: `calc(50% + ${Math.sin(angle) * 40}% - 34px)` }}><Icon className="mx-auto size-6" /><span className="mt-1 text-[10px] font-extrabold leading-tight text-ink">{label}</span></motion.div>
      })}
    </div>
  </Shell>
}

export default function ServiceVisual({ slug, className = '', inPanel = false }) {
  const visual = {
    'utility-operations': <FieldVisual />,
    'manpower-management': <ManpowerDeployVisual />,
    'contact-centre': <CallCentreNetwork className="mx-auto h-auto max-h-[420px] w-full" showFlow={!inPanel} />,
    'technology-services': <ITArchitecture className="mx-auto h-auto max-h-[420px] w-full" />,
    'water-utility': <WaterVisual />,
    'trolley-mounted-lifters': <LifterVisual />,
    'sky-lifters': <SkyVisual />,
    'operations-maintenance': <OMVisual />,
  }[slug]
  return <div className={className}>{visual}</div>
}
