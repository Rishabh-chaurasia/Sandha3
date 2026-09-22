import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '../utils/motion'

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold tracking-[0.02em] transition-all duration-300 active:scale-[.98] text-center sm:whitespace-nowrap'
const sizes = { md: 'px-7 py-4 text-[0.8rem]', sm: 'px-5 py-3 text-[0.72rem]' }
const variants = {
  primary: 'btn-grad text-white shadow-[0_16px_32px_-14px_rgba(8,120,249,.85)] hover:shadow-[0_22px_40px_-14px_rgba(8,120,249,.95)]',
  secondary: 'border-2 border-brand/25 bg-white text-brand-deep hover:border-brand hover:bg-soft',
  ghost: 'text-brand-deep hover:text-brand px-1',
}

/** Pulls slightly toward the pointer. Off for reduced motion and touch. */
function Magnetic({ children, className }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })
  const move = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
  }
  const leave = () => { x.set(0); y.set(0) }
  return (
    <motion.span ref={ref} style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={leave} className={cn('inline-flex', className)}>
      {children}
    </motion.span>
  )
}

export default function Button({ to, href, variant = 'primary', size = 'md', arrow = true, magnetic = false, className, children, ...rest }) {
  const cls = cn(base, sizes[size], variants[variant], className)
  const icon = arrow && <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
  let el
  if (to) el = <Link to={to} className={cls} {...rest}>{children}{icon}</Link>
  else if (href) el = <a href={href} className={cls} {...rest}>{children}{icon}</a>
  else el = <button className={cls} {...rest}>{children}{icon}</button>
  return magnetic ? <Magnetic className={className?.includes('w-full') ? 'w-full sm:w-auto' : undefined}>{el}</Magnetic> : el
}
