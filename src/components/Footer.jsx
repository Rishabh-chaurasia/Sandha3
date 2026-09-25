import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ORDERED_SERVICES } from '../data/services'
import { COMPANY } from '../data/company'
import Logo from './Logo'

const COMPANY_LINKS = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Compliance', '/compliance'], ['Clients', '/clients'], ['Founder', '/founder'], ['Contact', '/contact']]

function Col({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/60 p-5 shadow-sm lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
      <h2 className="text-base font-extrabold text-ink">{title}</h2>
      <ul className="mt-5 space-y-3 text-[0.98rem] text-muted">{children}</ul>
    </div>
  )
}
const L = ({ to, children }) => (
  <li><Link to={to} className="link-underline transition-colors hover:text-brand">{children}</Link></li>
)

export default function Footer() {
  return (
    <footer id="site-footer" className="relative isolate overflow-hidden scroll-mt-20 bg-gradient-to-br from-[#edf7ff] via-[#f9fcff] to-[#eef4ff]">
      <div aria-hidden className="absolute -right-24 -top-28 size-[360px] rounded-full border-[42px] border-brand/10" />
      <div aria-hidden className="absolute -bottom-32 -left-20 size-[300px] rounded-full border-[38px] border-cyan/10" />
      <div className="container-x relative z-10">
        <div className="grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.25fr_.72fr_1fr_1fr] lg:gap-12 lg:py-24">
          <div className="rounded-2xl border border-white/80 bg-white/60 p-5 shadow-sm lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
            <Logo className="h-14 sm:h-16" />
            <p className="mt-5 text-base font-extrabold text-ink">Reliable utility operations.</p>
            <p className="mt-2 max-w-[29ch] text-sm leading-relaxed text-muted">People, field teams and practical technology for essential services.</p>
            <div className="mt-6 flex items-center gap-3" aria-label="Social channels">
              <span title="LinkedIn" className="inline-flex size-11 items-center justify-center rounded-full bg-[#0a66c2] text-white shadow-sm" aria-label="LinkedIn">
                <span className="font-sans text-xl font-black leading-none">in</span>
              </span>
              <span title="WhatsApp" className="inline-flex size-11 items-center justify-center rounded-full bg-[#25d366] text-white shadow-sm" aria-label="WhatsApp">
                <MessageCircle size={22} strokeWidth={2.4} />
              </span>
            </div>
          </div>
          <Col title="Quick links">{COMPANY_LINKS.map(([t, to]) => <L key={to} to={to}>{t}</L>)}</Col>
          <Col title="Our services">{ORDERED_SERVICES.map((s) => <L key={s.slug} to={`/services/${s.slug}`}>{s.title}</L>)}</Col>
          <Col title="Contact">
            <li className="flex gap-3"><MapPin aria-hidden className="mt-1 size-4 shrink-0 text-brand" /><address className="not-italic">{COMPANY.address.join(' ')}</address></li>
            <li className="flex gap-3"><Phone aria-hidden className="mt-1 size-4 shrink-0 text-brand" /><a href={COMPANY.phoneHref} className="hover:text-brand">{COMPANY.phone}</a></li>
            <li className="flex gap-3"><Mail aria-hidden className="mt-1 size-4 shrink-0 text-brand" /><a href={`mailto:${COMPANY.email}`} className="break-all hover:text-brand">{COMPANY.email}</a></li>
          </Col>
        </div>
        <div className="mb-7 flex flex-col gap-2 rounded-2xl border border-white/90 bg-white/70 px-5 py-4 text-sm shadow-sm sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <span className="font-display text-lg font-bold text-brand-deep">11 DISCOMs nationwide</span>
          <span aria-hidden className="hidden h-6 w-px bg-brand/20 sm:block" />
          <span className="font-semibold text-muted">20m+ customers supported through utility operations</span>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sandha &amp; Company. All rights reserved.</p>
          <Link to="/contact" className="link-underline w-fit hover:text-brand">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
