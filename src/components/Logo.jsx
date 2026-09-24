import { Link } from 'react-router-dom'

export default function Logo({ className = 'h-9' }) {
  return (
    <Link to="/" aria-label="Sandha & Company, home" className={`inline-flex min-w-0 shrink-0 items-center ${className}`}>
      <span aria-hidden="true" className="relative block h-full max-w-[min(72vw,270px)]">
        <img
          src="/sandha-logo-transparent.png"
          alt=""
          loading="eager"
          className="block h-full w-auto max-w-full object-contain"
        />
      </span>
    </Link>
  )
}
