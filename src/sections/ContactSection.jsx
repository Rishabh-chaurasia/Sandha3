import { Mail, MapPin, Phone } from 'lucide-react'
import AnimatedIllustration from '../components/AnimatedIllustration'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import { COMPANY } from '../data/company'

export default function ContactSection({ asH1 = false, pageTop = false }) {
  const H = asH1 ? 'h1' : 'h2'
  return (
    <section id="contact" className={`section relative overflow-hidden bg-mesh ${pageTop ? '!pb-9 !pt-[112px] sm:!pb-10 sm:!pt-[124px] lg:!pb-16 lg:!pt-[120px]' : '!py-7 md:!py-10 lg:!py-12'}`} aria-labelledby="contact-title">
      <div className="container-x grid gap-6 lg:grid-cols-12 lg:gap-7">
        <div className="lg:col-span-6">
          <Reveal>
            <H id="contact-title" className="h-sub text-ink text-balance">
              Let&rsquo;s Build What Your Business Needs <span className="grad-text">Next.</span>
            </H>
            <p className="lead mt-3 max-w-[52ch]">
              Tell us about your FRT, manpower, call centre, IT or water utility requirements.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-3">
            <AnimatedIllustration name="contact" className="h-auto w-full max-w-[260px]" />
          </Reveal>

          <address className="mt-3 grid gap-3 not-italic sm:grid-cols-2">
            <p className="flex gap-3"><MapPin aria-hidden className="mt-1 size-5 shrink-0 text-brand" /><span className="text-muted">{COMPANY.address.map((l) => <span key={l} className="block">{l}</span>)}</span></p>
            <div className="space-y-3">
              <a href={COMPANY.phoneHref} className="flex items-center gap-3 font-extrabold text-ink hover:text-brand"><Phone aria-hidden className="size-5 text-brand" />{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 font-extrabold text-ink hover:text-brand"><Mail aria-hidden className="size-5 text-brand" />{COMPANY.email}</a>
            </div>
          </address>
          <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-3 inline-block text-sm font-extrabold text-brand-deep">Open in Google Maps</a>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
