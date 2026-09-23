import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SERVICES } from '../data/services'
import { COMPANY } from '../data/company'
import Logo from './Logo'

const COMPANY_LINKS = [['About', '/about'], ['Compliance', '/compliance'], ['Clients', '/clients'], ['Privacy Policy', '/privacy-policy']]

function Col({ title, children }) {
  return (
    <div>
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
      <div className="line-grad" aria-hidden />
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo className="h-14" />
          <p className="mt-6 max-w-md text-2xl leading-[1.55] text-muted sm:text-[1.8rem]">{COMPANY.positioning}</p>
          <p className="mt-4 text-sm font-bold text-brand-deep">Operating since {COMPANY.started}.</p>
        </div>
        <div className="lg:col-span-3 lg:col-start-5"><Col title="Services">{SERVICES.map((s) => <L key={s.slug} to={`/services/${s.slug}`}>{s.title}</L>)}</Col></div>
        <div className="lg:col-span-2"><Col title="Company">{COMPANY_LINKS.map(([t, to]) => <L key={to} to={to}>{t}</L>)}</Col></div>
        <div className="lg:col-span-3">
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
          <Link to="/privacy-policy" className="link-underline w-fit hover:text-brand">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
