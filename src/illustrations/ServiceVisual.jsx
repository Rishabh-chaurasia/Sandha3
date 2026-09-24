import { motion } from 'framer-motion'
import { Headset, Truck, MapPin, CheckCircle2, Smartphone, Gauge, ReceiptText, Wallet, Wrench, Droplets } from 'lucide-react'
import ITArchitecture from './ITArchitecture'
import ManpowerJourney from './ManpowerJourney'
import CallCentreNetwork from './CallCentreNetwork'

function Shell({ children, tint, label }) {
  return <div role="img" aria-label={label} className="relative isolate flex min-h-[330px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/70 p-6 shadow-lift sm:min-h-[390px]" style={{ background: `radial-gradient(circle at 75% 20%, #fff, transparent 45%), ${tint}` }}>
    <div aria-hidden className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(#89a8d024 1px, transparent 1px),linear-gradient(90deg,#89a8d024 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
    <div className="relative w-full max-w-[530px]">{children}</div>
  </div>
}

function FieldVisual() {
  const steps = [['01', 'Complaint', Headset], ['02', 'FRT dispatched', Truck], ['03', 'Field visit', MapPin], ['04', 'Closure', CheckCircle2]]
  return <Shell tint="#e4faf6" label="Utility complaint moves from registration to dispatch, field visit and confirmed closure">
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
  const steps = [['Connection', Smartphone], ['Meter reading', Gauge], ['Billing', ReceiptText], ['Collection', Wallet], ['Leak repair', Wrench]]
  return <Shell tint="#e9efff" label="Water utility cycle: new connection, meter reading, billing, collection and leak repair">
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

export default function ServiceVisual({ slug, className = '' }) {
  const visual = {
    'utility-operations': <FieldVisual />,
    'manpower-management': <ManpowerJourney className="mx-auto h-auto max-h-[420px] w-full" />,
    'contact-centre': <CallCentreNetwork className="mx-auto h-auto max-h-[420px] w-full" />,
    'technology-services': <ITArchitecture className="mx-auto h-auto max-h-[420px] w-full" />,
    'water-utility': <WaterVisual />,
  }[slug]
  return <div className={className}>{visual}</div>
}
