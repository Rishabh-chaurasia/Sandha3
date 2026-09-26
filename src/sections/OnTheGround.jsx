import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { cn } from '../utils/motion'

// Swap these files in public/photos for the company's own site photographs; keep the names or update them here.
// The client will send a real grid photo; it sits in the large tile (swap public/photos/grid-network.webp).
const PHOTOS = [
  { src: '/photos/grid-network.webp', alt: 'Distribution transformer mounted on poles with overhead lines', caption: 'Grid, substation and AMC work', span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2' },
  { src: '/photos/frt-lineman-pole.webp', alt: 'Lineman in safety gear working on an overhead line', caption: 'Fault rectification on LT lines' },
  { src: '/photos/frt-sky-lift.webp', alt: 'Technician in a sky-lift bucket beside an overhead line', caption: 'Sky lifters for high-reach work' },
  { src: '/photos/trolley-mounted-lifter.webp', alt: 'Trolley-mounted lifter raising a lineman to an overhead line beside a pole', caption: 'Trolley-mounted lifters' },
  { src: '/photos/transformer-maintenance.webp', alt: 'Two technicians maintaining a distribution transformer', caption: 'Transformer maintenance' },
  { src: '/photos/live-line-crew.webp', alt: 'Two linemen working together at the top of a pole', caption: 'Line maintenance crews', span: 'lg:col-span-2' },
  { src: '/photos/safety-briefing.webp', alt: 'Field team in helmets and vests at a safety briefing', caption: 'Safety briefing before every shift', span: 'lg:col-span-2' },
]

// Clicking a photo grows it to full size; moving the mouse off it (or tapping, the close
// button or Esc on touch screens) shrinks it back into its tile.
function Lightbox({ photo, onClose }) {
  const [canHover, setCanHover] = useState(false)
  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#0b1b33]/70 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog" aria-modal="true" aria-label={photo.caption}
    >
      <motion.figure
        layoutId={`ground-${photo.src}`}
        className="relative max-h-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl"
        onMouseLeave={canHover ? onClose : undefined}
        onClick={(e) => { e.stopPropagation(); if (!canHover) onClose() }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      >
        <img src={photo.src} alt={photo.alt} className="block max-h-[85vh] w-auto max-w-full object-contain" />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1b33]/85 to-transparent px-5 pb-4 pt-10 text-base font-extrabold text-white sm:text-lg">{photo.caption}</figcaption>
        <button type="button" onClick={(e) => { e.stopPropagation(); onClose() }} aria-label="Close photo" className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 text-ink shadow-md transition hover:bg-white">
          <X aria-hidden className="size-5" />
        </button>
      </motion.figure>
    </motion.div>
  )
}

export default function OnTheGround() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  return (
    <section className="section bg-white !py-10 lg:!py-14" aria-labelledby="ground-title">
      <div className="container-x">
        <SectionHeading label="On the ground" id="ground-title" title="Where the work actually happens.">
          <p>Our crews keep power flowing across LT and HT networks, around the clock, with safety first on every job.</p>
        </SectionHeading>
        <ul className="mt-8 grid auto-rows-[200px] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-4 lg:gap-4">
          {PHOTOS.map((p, i) => (
            <Reveal as="li" key={p.src} delay={i * 0.06} className={cn('relative', p.span)}>
              <motion.button
                type="button"
                layoutId={`ground-${p.src}`}
                onClick={() => setOpen(p)}
                aria-label={`View larger: ${p.caption}`}
                className="group relative block size-full cursor-zoom-in overflow-hidden rounded-2xl bg-soft text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1b33]/75 to-transparent" />
                <p className="absolute bottom-3 left-4 right-4 text-sm font-extrabold text-white sm:text-base">{p.caption}</p>
              </motion.button>
            </Reveal>
          ))}
        </ul>
      </div>
      <AnimatePresence>{open && <Lightbox photo={open} onClose={close} />}</AnimatePresence>
    </section>
  )
}
