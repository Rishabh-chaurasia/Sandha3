import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../utils/motion'

/** A single capability row: index, title, text. Lifts slightly on hover. */
export default function ServiceModule({ index, title, text, className, accent = '#0878F9' }) {
  const reduce = false
  return (
    <motion.li
      className={cn('group grid grid-cols-[auto_1fr] gap-x-5 border-t border-line py-6 first:border-t-0 sm:gap-x-8', className)}
      whileHover={reduce ? undefined : { x: 6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
    >
      <span className="font-display text-sm font-semibold tabular-nums" style={{ color: accent }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <h3 className="text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand-deep">{title}</h3>
        {text && <p className="mt-1.5 max-w-[60ch] text-muted">{text}</p>}
      </div>
    </motion.li>
  )
}
