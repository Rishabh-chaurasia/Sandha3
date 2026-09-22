import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import Statistics from '../sections/Statistics'
import ServicesExplorer from '../sections/ServicesExplorer'
import Story from '../sections/Story'
import Principles from '../sections/Principles'
import ClientsMarquee from '../sections/ClientsMarquee'
import ContactSection from '../sections/ContactSection'

export default function Home() {
  return (
    <>
      <Seo
        title="Sandha & Company | IT, Consultancy, Staffing & Workforce Solutions"
        description="Sandha & Company delivers technology, consultancy, manpower, staffing and customer operations solutions for businesses."
        path="/"
      />
      <Hero />
      <Story />
      <ClientsMarquee />
      <Statistics />
      <ServicesExplorer compact />
      <Principles />
      <ContactSection />
    </>
  )
}
