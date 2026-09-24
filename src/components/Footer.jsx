import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ORDERED_SERVICES } from '../data/services'
import { COMPANY } from '../data/company'
import Logo from './Logo'

const COMPANY_LINKS = [['About', '/about'], ['Compliance', '/compliance'], ['Clients', '/clients']]

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
    <footer id="site-footer" className="scroll-mt-20 bg-b2w">
      <div className="container-x">
        <div className="grid gap-5 border-b border-line/80 py-9 lg:py-16">
          <Logo className="h-10" />
          <p className="max-w-4xl text-base leading-relaxed text-muted sm:text-lg">{COMPANY.positioning}</p>
        </div>
        <div className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr] lg:gap-16 lg:py-20">
          <Col title="Services">{ORDERED_SERVICES.map((s) => <L key={s.slug} to={`/services/${s.slug}`}>{s.title}</L>)}</Col>
          <Col title="Company">{COMPANY_LINKS.map(([t, to]) => <L key={to} to={to}>{t}</L>)}</Col>
          <Col title="Contact">
            <li className="flex gap-3"><MapPin aria-hidden className="mt-1 size-4 shrink-0 text-brand" /><address className="not-italic">{COMPANY.address.join(' ')}</address></li>
            <li className="flex gap-3"><Phone aria-hidden className="mt-1 size-4 shrink-0 text-brand" /><a href={COMPANY.phoneHref} className="hover:text-brand">{COMPANY.phone}</a></li>
            <li className="flex gap-3"><Mail aria-hidden className="mt-1 size-4 shrink-0 text-brand" /><a href={`mailto:${COMPANY.email}`} className="break-all hover:text-brand">{COMPANY.email}</a></li>
          </Col>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sandha &amp; Company. All rights reserved.</p>
          <Link to="/contact" className="link-underline w-fit hover:text-brand">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
