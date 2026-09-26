import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { motion } from 'framer-motion'
import OfficialImage from '../components/OfficialImage'
import { CLIENTS, CLIENT_LOGOS } from '../data/clients'

export default function Clients() {
  return (
    <>
      <Seo
        title="Clients | Sandha & Company"
        description="Sandha & Company provides FRT and maintenance services for 11 DISCOMs nationwide, serving over 20 million consumers."
        path="/clients"
      />
      <PageHero
        tone="ultra"
        eyebrow="OUR CLIENTS"
        title="Trusted in essential service delivery"
        lead="FRT and maintenance work for 11 DISCOMs across India, reaching more than 20 million consumers."
        illustration="clients-impact"
        sectionClassName="!pb-6 sm:!pb-6"
        contentAlign="start"
        crumbs={[{ label: 'Clients' }]}
      />

      <section className="bg-white section !py-9 lg:!py-12" aria-labelledby="client-list">
        <div className="container-x">
          <h2 id="client-list" className="sr-only">Utility experience</h2>
          <ul className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {CLIENTS.map((c, i) => (
              <Reveal as="li" key={c.short} delay={(i % 4) * 0.08} className="group relative flex flex-col gap-4 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_-24px_rgba(8,120,249,.5)] sm:p-7" style={{ background: [
                'linear-gradient(145deg,#E4F2FF,#D4E9FF)', 'linear-gradient(145deg,#E2FBF3,#D0F5E8)', 'linear-gradient(145deg,#F0EAFF,#E3DCFF)', 'linear-gradient(145deg,#E2F8FC,#CFF1F7)', 'linear-gradient(145deg,#FFF4DA,#FFECC0)', 'linear-gradient(145deg,#FFE9E3,#FFDBD1)', 'linear-gradient(145deg,#EDF2FF,#DFE8FF)', 'linear-gradient(145deg,#E6F8EF,#D6F2E2)',
              ][i] }}>
                <span aria-hidden className="absolute right-4 top-3 font-display text-xs font-extrabold tracking-[0.16em] text-ink/35">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex h-20 items-center"><span className="font-display text-4xl font-black text-brand-deep">{c.short}</span></div>
                <div>
                  <h3 className="whitespace-nowrap text-[0.94rem] font-semibold leading-snug text-ink">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted">{c.group}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <ul aria-label="Company experience" className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['97%', 'Consumers satisfied with resolution'],
              ['2008', 'Serving since'],
              ['15+', 'Years of ITI services'],
              ['800+', 'Transformer replacement cranes'],
              ['ISO 9001:2015', 'Quality management'],
              ['24/7', 'Call centre operations'],
            ].map(([value, label], i) => <li key={label} className="rounded-2xl border border-line/80 p-5 shadow-sm sm:p-6" style={{ background: ['linear-gradient(145deg,#d8ecff,#f8fbff)', 'linear-gradient(145deg,#cff7e9,#f8fffb)', 'linear-gradient(145deg,#e7ddff,#fbfaff)', 'linear-gradient(145deg,#ffe4d1,#fffaf3)', 'linear-gradient(145deg,#ffe2ed,#fff9fb)', 'linear-gradient(145deg,#fff1bf,#fffdf4)', 'linear-gradient(145deg,#d9f7f7,#f7ffff)', 'linear-gradient(145deg,#e6ebff,#fafbff)'][i] }}>
              <strong className={`block font-display font-bold leading-none text-brand-deep ${value.length > 6 ? 'text-2xl sm:text-[1.7rem]' : 'text-3xl sm:text-4xl'}`}>{value}</strong>
              <span className="mt-3 block text-sm font-semibold text-ink/80">{label}</span>
            </li>)}
          </ul>
        </div>
      </section>

      <section className="section bg-ultra !pt-8 !pb-9 lg:!pb-12" aria-labelledby="client-logos-title">
        <div className="container-x">
          <h2 id="client-logos-title" className="h-sub text-ink">Organisations we have worked with</h2>
          <p className="mt-3 text-muted">Client marks from the company’s previously published portfolio.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CLIENT_LOGOS.map((client, i) => <motion.li key={client.short} whileHover={{ y: -10, rotate: i % 2 ? 1 : -1, scale: 1.025 }} animate={{ y: [0, -4, 0], boxShadow: ['0 4px 12px rgba(18,45,84,.08)', '0 16px 28px rgba(8,120,249,.18)', '0 4px 12px rgba(18,45,84,.08)'] }} transition={{ y: { duration: 3.5 + i * .25, repeat: Infinity, ease: 'easeInOut' }, boxShadow: { duration: 3.5 + i * .25, repeat: Infinity, ease: 'easeInOut', delay: i * .12 } }} className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white p-5 text-center" style={{ background: ['linear-gradient(145deg,#e7f4ff,#fff)', 'linear-gradient(145deg,#eee9ff,#fff)', 'linear-gradient(145deg,#e1faf3,#fff)', 'linear-gradient(145deg,#fff0df,#fff)'][i % 4] }}>
              <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 3 + i * .2, repeat: Infinity, ease: 'easeInOut', delay: i * .15 }}><OfficialImage local={client.local} remote={client.remote} alt={client.name} className="h-20 w-40 object-contain" fallback={<span className="text-xl font-black text-brand-deep">{client.short}</span>} /></motion.div>
              <span className="mt-3 text-xs font-semibold text-muted">{client.name}</span>
            </motion.li>)}
          </ul>
        </div>
      </section>

      <CtaBand title="A reliable partner for your next deployment" text="Share your requirements with our team to begin a focused, practical discussion." />
    </>
  )
}
