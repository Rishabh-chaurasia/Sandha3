import Button from './Button'
import Reveal from './Reveal'
import { Figure, IsoPlatform, Confetti, Plant, K } from '../illustrations/figures'

function Art() {
  return (
    <svg viewBox="0 0 300 230" aria-hidden className="h-auto w-full max-w-[320px] overflow-visible">
      <IsoPlatform cx={150} cy={100} a={120} b={120} h={14} top="#ffffff" left="#D8D2FF" right="#B9B2FF" />
      <Figure x={112} y={62} s={0.48} pose="celebrate" top={K.coral} bottom={K.navy} skin="c" style="bun" />
      <Figure x={158} y={72} s={0.46} pose="hold" top={K.amber} bottom={K.violetDeep} skin="b" item="tablet" />
      <Plant x={200} y={92} s={0.5} />
      <Confetti items={[['ring', 40, 30, 7, '#fff'], ['tri', 270, 40, 8, K.amber], ['plus', 250, 200, 7, '#fff'], ['dot', 30, 180, 6, K.mint]]} />
    </svg>
  )
}

export default function CtaBand({ title = 'Let’s build what your business needs next.', text = 'Tell us what you are looking to solve and we will take it from there.', primary = { to: '/contact', label: 'Let’s Talk' }, secondary }) {
  return (
    <section className="section bg-white !py-4 md:!py-6">
      <Reveal className="container-x">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand via-electric to-violet px-6 py-4 text-white sm:px-8 sm:py-5 md:min-h-36 lg:rounded-[2rem] lg:px-10 lg:py-4">
          <div aria-hidden className="absolute -right-20 -top-20 size-[260px] rounded-full bg-white/10" />
          <div aria-hidden className="absolute -bottom-28 left-1/3 size-[220px] rounded-full bg-cyan/25" />
          <div className="relative grid items-center gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="h-sub max-w-[24ch] text-white">{title}</h2>
              <p className="mt-2 max-w-[52ch] text-base text-white/85">{text}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Button to={primary.to} magnetic className="!bg-white !bg-none !text-brand-deep hover:!bg-lav !shadow-none">{primary.label}</Button>
                {secondary && <Button to={secondary.to} variant="secondary" className="!border-white/60 !bg-transparent !text-white hover:!bg-white/10">{secondary.label}</Button>}
              </div>
            </div>
            <div className="hidden lg:col-span-5 lg:flex lg:justify-end [&>svg]:max-w-[165px]"><Art /></div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
