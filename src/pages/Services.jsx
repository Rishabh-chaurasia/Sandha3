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
        description="Information technology, consultancy, manpower, staffing and call centre services from Sandha & Company."
        path="/services"
      />
      <PageHero
        tone="lines"
        sectionClassName="pb-[4.5rem] sm:pb-24 lg:pb-28"
        align="center"
        eyebrow="OUR SERVICES"
        title="Services for technology, workforce and customer operations"
        lead="Our technology, consulting, workforce and customer operations services are designed around your priorities and delivered with practical expertise."
        illustration="services"
        crumbs={[{ label: 'Services' }]}
      />

      <ServicesExplorer heading={false} id="explorer" />
      <UtilitiesCapabilities />

      <CtaBand title="Guidance for selecting the right service" text="Share your operational priorities with our team, and we will recommend a practical starting point." />
    </>
  )
}
