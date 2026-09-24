import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import Statistics from '../sections/Statistics'
import ServicesExplorer from '../sections/ServicesExplorer'
import Story from '../sections/Story'
import Principles from '../sections/Principles'
import ContactSection from '../sections/ContactSection'
import OnTheGround from '../sections/OnTheGround'

export default function Home() {
  return (
    <>
      <Seo
        title="Sandha & Company | FRT, Manpower, Call Centre & IT for Utilities"
        description="Sandha & Company provides fault rectification teams (FRT), LT and HT line maintenance, power-sector manpower, 24/7 call centres, IT and water utility services for DISCOMs and utilities."
        path="/"
      />
      <Hero />
      <Story />
      <Statistics />
      <ServicesExplorer compact />
      <OnTheGround />
      <Principles />
      <ContactSection />
    </>
  )
}
