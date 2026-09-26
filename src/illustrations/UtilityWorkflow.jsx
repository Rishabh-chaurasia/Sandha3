import { motion } from 'framer-motion'
import { PhoneCall, ListFilter, MapPinned, Wrench, MessageSquareText, CheckCircle2 } from 'lucide-react'

// Same sequence as the complaint management lifecycle in the company profile.
const steps = [
  ['Consumer calls', 'The consumer calls the DISCOM’s centralised call centre.', PhoneCall],
  ['Control room sorts', 'The vendor control room downloads the complaint and sorts it by circle and work type.', ListFilter],
  ['Sent to the field', 'The system forwards the complaint to field staff on a mobile or tablet.', MapPinned],
  ['Team on site', 'The team reaches the consumer, who can track the FRT live on GPS.', Wrench],
  ['Status and sign-off', 'The FRT updates the status on the tab and takes the consumer’s signature.', MessageSquareText],
  ['Resolution verified', 'An automated SMS updates the consumer, and the control room calls to verify.', CheckCircle2],
]

export default function UtilityWorkflow() {
  return <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#101d3c] p-6 text-white sm:p-9" aria-label="Utility complaint response workflow">
    <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#7ca5e835 1px, transparent 1px),linear-gradient(90deg,#7ca5e835 1px,transparent 1px)', backgroundSize: '34px 34px' }} />
    <div className="relative flex flex-wrap items-end justify-between gap-3">
      <div><p className="text-xs font-black uppercase tracking-[.2em] text-cyan">Utility response workflow</p><h3 className="mt-2 text-2xl font-black sm:text-3xl">From first call to confirmed closure</h3></div>
    </div>
    <div className="relative mt-6 grid grid-cols-3 gap-2 text-center text-[10px] font-black uppercase tracking-[.14em] text-white/75 sm:text-xs"><span className="rounded-full border border-cyan/35 bg-cyan/10 px-2 py-2">Customer contact</span><span className="rounded-full border border-mint/35 bg-mint/10 px-2 py-2">Field response</span><span className="rounded-full border border-purple/35 bg-purple/10 px-2 py-2">Confirmation</span></div>
    <div className="relative mt-9">
      <svg aria-hidden="true" viewBox="0 0 1200 200" preserveAspectRatio="none" className="absolute left-0 top-3 hidden h-36 w-full lg:block">
        <motion.path d="M70 72 C150 72 160 160 270 160 S390 72 470 72 S590 160 670 160 S790 72 870 72 S990 160 1080 160" fill="none" stroke="#55e2c8" strokeWidth="3" strokeDasharray="7 9" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
      </svg>
      <ol className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
        {steps.map(([title, text, Icon], i) => <motion.li key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className={`rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-white/15 ${i % 2 ? 'lg:mt-20' : ''}`}>
          <span className="flex items-center justify-between"><Icon className="size-7 text-[#55e2c8]" /><span className="text-xs font-black text-[#95b0da]">0{i + 1}</span></span>
          <h4 className="mt-5 text-sm font-extrabold leading-tight">{title}</h4>
          <p className="mt-2 text-xs leading-relaxed text-white/70">{text}</p>
        </motion.li>)}
      </ol>
    </div>
  </div>
}
