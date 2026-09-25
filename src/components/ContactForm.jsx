import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Send } from 'lucide-react'
import { COMPANY } from '../data/company'
import { ORDERED_SERVICES } from '../data/services'
import { EASE } from '../utils/motion'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT // optional: Formspree / any JSON endpoint

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-extrabold text-ink">{label}</label>
      <div className="field-wrap" data-invalid={!!error}>{children}</div>
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm font-semibold text-red-600">{error}</p>}
    </div>
  )
}

function Success({ onReset }) {
  const reduce = false
  return (
    <motion.div
      key="ok" role="status"
      initial={reduce ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="flex min-h-[420px] flex-col items-start justify-center gap-5"
    >
      <svg viewBox="0 0 96 96" className="size-24" aria-hidden>
        <defs><linearGradient id="okg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#28D7B2" /><stop offset="1" stopColor="#0878F9" /></linearGradient></defs>
        <motion.circle cx="48" cy="48" r="42" fill="none" stroke="url(#okg)" strokeWidth="6" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, ease: 'easeInOut' }} />
        <motion.path d="M30 50L43 63L67 35" fill="none" stroke="url(#okg)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }} />
      </svg>
      <h3 className="h-sub text-ink">Message ready.</h3>
      <p className="lead max-w-[42ch]">
        Thanks. Your enquiry has been sent and we will reply soon.
      </p>
      <button type="button" onClick={onReset} className="link-underline font-extrabold text-brand-deep">Send another message</button>
    </motion.div>
  )
}

export default function ContactForm() {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const errs = {}
    if (!data.name?.trim()) errs.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(data.email || '')) errs.email = 'Enter a valid email address.'
    if (!data.message?.trim()) errs.message = 'Tell us briefly what you need.'
    setErrors(errs)
    if (Object.keys(errs).length) return

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Website enquiry: ${data.service || 'General'}`)
      const body = encodeURIComponent(`Name: ${data.name}\nCompany: ${data.company || '-'}\nEmail: ${data.email}\nPhone: ${data.phone || '-'}\nService: ${data.service || '-'}\n\n${data.message}`)
      window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
      return
    }
    if (ENDPOINT) {
      setStatus('sending')
      try {
        const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        if (!res.ok) throw new Error('bad status')
        form.reset()
        setStatus('done')
      } catch {
        setStatus('error')
      }
      return
    }
  }

  return (
    <div className="rounded-[1.75rem] bg-gradient-to-br from-brand/25 via-cyan/20 to-purple/25 p-[2px] shadow-lift">
      <div className="rounded-[calc(1.75rem-2px)] bg-white p-3 sm:p-4">
        <AnimatePresence mode="wait" initial={false}>
          {status === 'done' ? (
            <Success onReset={() => setStatus('idle')} />
          ) : (
            <motion.form key="form" onSubmit={onSubmit} noValidate exit={{ opacity: 0, y: -10 }} className="space-y-2.5">
              <div className="grid gap-2.5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
                </Field>
                <Field id="company" label="Company"><input id="company" name="company" autoComplete="organization" /></Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
                </Field>
                <Field id="phone" label="Phone"><input id="phone" name="phone" type="tel" autoComplete="tel" /></Field>
              </div>
              <Field id="service" label="Service">
                <select id="service" name="service" defaultValue="">
                  <option value="">Not sure yet</option>
                  {ORDERED_SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                </select>
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <textarea id="message" name="message" rows={2} required aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
              </Field>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileTap={{ scale: 0.97 }}
                className="btn-grad group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-3 text-sm font-extrabold text-white shadow-[0_16px_32px_-14px_rgba(8,120,249,.85)] disabled:opacity-70 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : ENDPOINT ? 'Send Message' : 'Open Email Draft'}
                <Send aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </motion.button>
              {!ENDPOINT && <p className="text-xs text-muted">This opens your email app with the message filled in. Please send it from there.</p>}
              {status === 'error' && <p role="alert" className="text-sm font-semibold text-red-600">We could not send that. Please try again or call {COMPANY.phone}.</p>}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
