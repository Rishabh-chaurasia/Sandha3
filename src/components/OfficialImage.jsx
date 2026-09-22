import { useState } from 'react'

/** Loads a local copy of an official asset first, then the official URL, then a text fallback. */
export default function OfficialImage({ local, remote, alt, className = '', fallback, ...rest }) {
  const [src, setSrc] = useState(local)
  const [failed, setFailed] = useState(false)
  if (failed) return fallback ? <span className={className}>{fallback}</span> : null
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => (src === local && remote ? setSrc(remote) : setFailed(true))}
      {...rest}
    />
  )
}
