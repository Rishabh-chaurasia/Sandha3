import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Counter({ value, from = 0, suffix = '', duration = 1.9, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const [n, setN] = useState(from)

  useEffect(() => {
    if (!inView) return
    setN(from)
    const controls = animate(from, value, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, value, from, duration])

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{n}{suffix}</span>
      <span className="sr-only">{value}{suffix}</span>
    </span>
  )
}
