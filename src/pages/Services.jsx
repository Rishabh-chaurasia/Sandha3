import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ServicesExplorer from '../sections/ServicesExplorer'
import CtaBand from '../components/CtaBand'
import UtilitiesCapabilities from '../sections/UtilitiesCapabilities'

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Sandha & Company"
        description="FRT and line maintenance, power-sector manpower, call centres, information technology and water utility services from Sandha & Company."
        path="/services"
      />
      <PageHero
        tone="lines"
        sectionClassName="min-h-[720px] !pb-10 !pt-[78px] sm:!pb-12 sm:!pt-[92px] lg:!pb-[96px] lg:!pt-[80px] lg:min-h-[720px]"
        align="center"
        eyebrow="OUR SERVICES"
        title="Field teams, people and technology for utilities"
        lead="Five services built around one job: registering a consumer complaint, getting a trained team to the fault and closing it on the ground."
        illustration="services"
        illustrationClassName="!h-[460px] !w-full sm:!h-[520px]"
        backgroundPhoto="/services-team-hero.png"
        mobileBackgroundPhoto="/services-team-hero-mobile.png"
        backgroundOverlayClassName="bg-[linear-gradient(90deg,rgba(246,250,255,.82)_0%,rgba(246,250,255,.64)_54%,rgba(246,250,255,.20)_100%)] sm:bg-[linear-gradient(90deg,rgba(246,250,255,.84)_0%,rgba(246,250,255,.70)_34%,rgba(246,250,255,.30)_64%,rgba(246,250,255,.08)_100%)]"
        crumbs={[{ label: 'Services' }]}
      />

      <ServicesExplorer heading={false} id="explorer" />
      <UtilitiesCapabilities />

      <CtaBand title="Guidance for selecting the right service" text="Share your operational priorities with our team, and we will recommend a practical starting point." />
    </>
  )
}
