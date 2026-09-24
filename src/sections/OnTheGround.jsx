import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { cn } from '../utils/motion'

// Swap these files in public/photos for the company's own site photographs; keep the names or update them here.
const PHOTOS = [
  { src: '/photos/frt-lineman-pole.webp', alt: 'Lineman in safety gear working on an overhead line', caption: 'Fault rectification on LT lines', span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2' },
  { src: '/photos/frt-sky-lift.webp', alt: 'Technician in a sky-lift bucket beside a high tension line', caption: 'Sky-lift work on HT lines' },
  { src: '/photos/transformer-maintenance.webp', alt: 'Two technicians maintaining a distribution transformer', caption: 'Transformer maintenance' },
  { src: '/photos/live-line-crew.webp', alt: 'Two linemen working together at the top of a pole', caption: 'Live-line crews' },
  { src: '/photos/safety-briefing.webp', alt: 'Field team in helmets and vests at a safety briefing', caption: 'Safety briefing before every shift' },
]

export default function OnTheGround() {
  return (
    <section className="section bg-white !py-10 lg:!py-14" aria-labelledby="ground-title">
      <div className="container-x">
        <SectionHeading label="On the ground" id="ground-title" title="Where the work actually happens.">
          <p>Our crews keep power flowing on live LT and HT networks, around the clock, with safety first on every job.</p>
        </SectionHeading>
        <ul className="mt-8 grid auto-rows-[200px] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-4 lg:gap-4">
          {PHOTOS.map((p, i) => (
            <Reveal as="li" key={p.src} delay={i * 0.06} className={cn('group relative overflow-hidden rounded-2xl bg-soft', p.span)}>
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1b33]/75 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-sm font-extrabold text-white sm:text-base">{p.caption}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
