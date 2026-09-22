import { cn } from '../utils/motion'

/** Always left-aligned so every section heading sits on the same edge. */
export default function SectionHeading({ label, title, children, as: Tag = 'h2', className, size = 'lg', id }) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {label && (
        <p className="mb-5 inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.12em] text-brand">
          <span aria-hidden className="h-[3px] w-9 rounded-full bg-gradient-to-r from-brand to-cyan" />
          {label}
        </p>
      )}
      <Tag id={id} className={cn(size === 'lg' ? 'h-section' : 'h-sub', 'text-ink text-balance')}>{title}</Tag>
      {children && <div className="lead mt-5 max-w-[60ch] [&_p+p]:mt-4">{children}</div>}
    </div>
  )
}
