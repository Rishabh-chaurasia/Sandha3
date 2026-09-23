import { useState } from 'react'
import { Link } from 'react-router-dom'

const LOGO_FILE = 'logo.png'
export default function Logo({ className = 'h-9' }) {
  const [src, setSrc] = useState(`/official/${LOGO_FILE}`)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  return (
    <Link to="/" aria-label="Sandha & Company, home" className={`relative inline-flex min-w-0 shrink-0 items-center rounded-lg ${className}`}>
      <span aria-hidden className={`inline-flex h-full items-center gap-2 whitespace-nowrap ${loaded ? 'invisible' : 'visible'}`}>
        <span className="grid h-full aspect-square place-items-center rounded-[22%] bg-gradient-to-br from-brand via-cyan to-purple font-display text-lg font-black text-white">S</span>
        <span className="font-display text-base font-extrabold tracking-tight text-ink sm:text-lg">Sandha &amp; Company</span>
      </span>
      {!failed && <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="eager"
        onLoad={() => setLoaded(true)}
        onError={() => src === `/official/${LOGO_FILE}` ? setSrc(`https://www.sandha-company.com/assets/img/${LOGO_FILE}`) : setFailed(true)}
        className={`absolute inset-0 h-full w-full max-w-[min(72vw,270px)] object-contain transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />}
    </Link>
  )
}
