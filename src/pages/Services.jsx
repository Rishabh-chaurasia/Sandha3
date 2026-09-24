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
        sectionClassName="!pb-8 !pt-[96px] sm:!pb-10 sm:!pt-[110px] lg:!py-[104px]"
        align="center"
        eyebrow="OUR SERVICES"
        title="Field teams, people and technology for utilities"
        lead="Five services built around one job: registering a consumer complaint, getting a trained team to the fault and closing it on the ground."
        illustration="services"
        illustrationClassName="!h-[460px] !w-full sm:!h-[520px]"
        backgroundPhoto="/services-team-hero.png"
        crumbs={[{ label: 'Services' }]}
      />

      <ServicesExplorer heading={false} id="explorer" />
      <UtilitiesCapabilities />

      <CtaBand title="Guidance for selecting the right service" text="Share your operational priorities with our team, and we will recommend a practical starting point." />
    </>
  )
}
