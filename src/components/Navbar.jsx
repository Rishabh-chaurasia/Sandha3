import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight, Phone } from 'lucide-react'
import { NAV, ORDERED_SERVICES } from '../data/services'
import { COMPANY } from '../data/company'
import { EASE, cn } from '../utils/motion'
import Logo from './Logo'
import Button from './Button'

function isActive(item, pathname) {
  if (item.to === '/') return pathname === '/'
  return pathname === item.to || pathname.startsWith(item.to + '/')
}

function ServicesMenu({ pathname }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const reduce = false

  useEffect(() => setOpen(false), [pathname])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      onBlur={(e) => !ref.current?.contains(e.relatedTarget) && setOpen(false)}
    >
      <div className="flex items-center">
        <NavLinkItem item={NAV[2]} pathname={pathname} trailing />
        <button
          type="button"
          aria-label="Show services menu"
          aria-expanded={open}
          aria-controls="services-menu"
          onClick={() => setOpen((v) => !v)}
          className="-ml-3 mr-1 grid size-8 place-items-center rounded-full text-muted transition hover:text-brand"
        >
          <ChevronDown aria-hidden className={cn('size-4 transition-transform duration-300', open && 'rotate-180')} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="services-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute left-1/2 top-full z-50 w-[30rem] -translate-x-1/2 pt-4"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_24px_60px_rgba(16,36,63,0.16)]">
              <div className="bg-gradient-to-r from-brand/10 via-cyan/10 to-purple/10 px-5 py-4">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-brand">Our capabilities</p>
                <p className="mt-1 text-sm font-semibold text-ink/70">Technology, people and operational support.</p>
              </div>
            <ul className="grid grid-cols-2 gap-1 p-3">
              {ORDERED_SERVICES.map((s, i) => (
                <li key={s.slug} className={i === ORDERED_SERVICES.length - 1 && ORDERED_SERVICES.length % 2 ? 'col-span-2' : ''}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex min-h-[92px] flex-col items-start gap-2 rounded-2xl p-3 transition hover:-translate-y-0.5 hover:shadow-md"
                    style={{ background: ['#e4f2ff', '#e5faf3', '#f0ebff', '#fff0df', '#ffe8ef', '#fff6e6', '#fff0e8'][i] }}
                  >
                    <span className="flex w-full items-center justify-between"><span className="grid size-7 place-items-center rounded-lg bg-brand/10 font-display text-xs font-extrabold text-brand">{s.n}</span><ArrowRight aria-hidden className="size-3.5 text-brand/50 transition-transform group-hover:translate-x-1 group-hover:text-brand" /></span>
                    <span>
                      <span className="block text-sm font-extrabold text-ink group-hover:text-brand-deep">{s.title}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-muted">{s.tagline}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function NavLinkItem({ item, pathname, trailing }) {
  const active = isActive(item, pathname)
  return (
    <Link
      to={item.to}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'relative px-2.5 py-2 text-[0.86rem] font-bold transition-colors min-[1280px]:px-3.5 min-[1280px]:text-[0.95rem]',
        trailing && 'pr-5',
        active ? 'text-brand-deep' : 'text-ink/75 hover:text-brand',
      )}
    >
      {item.label}
      {active && (
        <motion.span layoutId="nav-active" className="absolute inset-x-4 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-brand via-cyan to-purple" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />
      )}
    </Link>
  )
}

function MobileMenu({ onClose, pathname }) {
  const reduce = false
  const [svc, setSvc] = useState(pathname.startsWith('/services'))

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const item = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.12 + i * 0.05, duration: 0.5, ease: EASE },
  })

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white"
      initial={reduce ? { opacity: 0 } : { clipPath: 'circle(0% at 90% 5%)' }}
      animate={reduce ? { opacity: 1 } : { clipPath: 'circle(150% at 90% 5%)' }}
      exit={reduce ? { opacity: 0 } : { clipPath: 'circle(0% at 90% 5%)' }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="bg-hero pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="flex items-center justify-between px-5 pt-5">
        <Logo />
        <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink">
          <X aria-hidden className="size-5" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 px-6 pb-6 pt-10">
        <ul className="space-y-1">
          {NAV.map((n, i) =>
            n.children ? (
              <motion.li key={n.to} {...item(i)}>
                <div className="flex items-center justify-between">
                  <Link to={n.to} className="font-display text-[2rem] font-extrabold text-ink">{n.label}</Link>
                  <button type="button" aria-expanded={svc} aria-label="Toggle services" onClick={() => setSvc((v) => !v)} className="grid size-11 place-items-center rounded-full text-brand">
                    <ChevronDown aria-hidden className={cn('size-6 transition-transform', svc && 'rotate-180')} />
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {svc && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden border-l-2 border-line pl-4"
                    >
                      {ORDERED_SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link to={`/services/${s.slug}`} className="block py-2.5 text-lg font-semibold text-muted active:text-brand">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ) : (
              <motion.li key={n.to} {...item(i)}>
                <Link
                  to={n.to}
                  aria-current={isActive(n, pathname) ? 'page' : undefined}
                  className={cn('block font-display text-[2rem] font-extrabold', isActive(n, pathname) ? 'text-brand' : 'text-ink')}
                >
                  {n.label}
                </Link>
              </motion.li>
            ),
          )}
        </ul>
      </nav>

      <motion.div {...item(7)} className="space-y-4 border-t border-line px-6 py-6">
        <Button to="#site-footer" className="w-full">Let&rsquo;s Talk</Button>
        <a href={COMPANY.phoneHref} className="flex items-center justify-center gap-2 text-sm font-semibold text-muted">
          <Phone aria-hidden className="size-4" /> {COMPANY.phone}
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
        <div
          className={cn(
            'mx-auto flex max-w-[var(--shell)] items-center justify-between gap-2 rounded-full px-4 transition-all duration-500 sm:px-6 min-[1280px]:px-8',
            scrolled
              ? 'h-[60px] border border-white/45 bg-white/45 shadow-nav backdrop-blur-md'
              : 'h-[76px] border border-white/25 bg-white/10 backdrop-blur-[6px]',
          )}
        >
          <Logo className={scrolled ? 'h-10' : 'h-12'} />

          <nav aria-label="Primary" className="hidden items-center gap-0.5 min-[1100px]:flex">
            {NAV.map((n) =>
              n.children ? <ServicesMenu key={n.to} pathname={pathname} /> : <NavLinkItem key={n.to} item={n} pathname={pathname} />,
            )}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden min-[1360px]:inline-flex"><Button to="#site-footer" size="sm" magnetic>Let&rsquo;s Talk</Button></span>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="grid size-11 place-items-center rounded-full border border-line bg-white/80 text-ink min-[1100px]:hidden"
            >
              <Menu aria-hidden className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>{mobileOpen && <MobileMenu pathname={pathname} onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </>
  )
}
