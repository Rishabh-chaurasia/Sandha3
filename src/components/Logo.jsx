import { Link } from 'react-router-dom'
import OfficialImage from './OfficialImage'

// Official Sandha & Company logo. Change the file name here if the other official
// logo variant (logo.png) reads better on your final background.
const LOGO_FILE = 'logo.png'

export default function Logo({ className = 'h-9' }) {
  return (
    <Link to="/" aria-label="Sandha & Company, home" className="inline-flex items-center rounded-lg">
      <OfficialImage
        local={`/official/${LOGO_FILE}`}
        remote={`https://www.sandha-company.com/assets/img/${LOGO_FILE}`}
        alt="Sandha & Company"
        className={`${className} w-auto object-contain`}
        loading="eager"
        fallback={<span className="whitespace-nowrap font-display text-base font-extrabold text-ink sm:text-lg">Sandha &amp; Company</span>}
      />
    </Link>
  )
}
