import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Story from '../sections/Story'
import Journey from '../sections/Journey'
import CompanyTimeline from '../sections/CompanyTimeline'
import MissionVision from '../sections/MissionVision'
import CtaBand from '../components/CtaBand'
import Button from '../components/Button'

export default function About() {
  return (
    <>
      <Seo
        title="About | Sandha & Company"
        description="Sandha & Company connects trained people, processes and technology to support utility customer experiences."
        path="/about"
      />
      <PageHero
        tone="ultra"
        eyebrow="ABOUT COMPANY"
        title="People, processes and technology for essential services."
        lead="Our skilled manpower, FRT and line maintenance teams, customer support and practical technology help utilities serve people reliably, every day."
        illustration="about-spectrum"
        sectionClassName="flex min-h-[88svh] items-center !pb-16 sm:!pb-20"
        illustrationClassName="lg:-ml-5 lg:w-[calc(100%+2.5rem)]"
        crumbs={[{ label: 'About' }]}
      >
        <Button href="#journey" arrow={false} magnetic>Our capabilities</Button>
        <Button to="/contact" variant="secondary">Talk to our experts</Button>
      </PageHero>
      <MissionVision />
      <Story variant="detail" />
      <Journey />
      <CompanyTimeline />
      <CtaBand secondary={{ to: '/services', label: 'See our services' }} />
    </>
  )
}
