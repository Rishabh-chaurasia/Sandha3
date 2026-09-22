import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Story from '../sections/Story'
import Journey from '../sections/Journey'
import Principles from '../sections/Principles'
import Leadership from '../sections/Leadership'
import MissionVision from '../sections/MissionVision'
import CtaBand from '../components/CtaBand'
import Button from '../components/Button'
import { COMPANY } from '../data/company'

export default function About() {
  return (
    <>
      <Seo
        title="About | Sandha & Company"
        description="Sandha & Company officially started operations in December 2008, serving domestic and commercial markets across technology, consulting and workforce services."
        path="/about"
      />
      <PageHero
        tone="ultra"
        eyebrow="ABOUT COMPANY"
        title="A company built on understanding what clients actually need."
        lead={COMPANY.positioning}
        illustration="foundation"
        crumbs={[{ label: 'About' }]}
      >
        <Button href="#journey" arrow={false} magnetic>Our journey</Button>
        <Button to="/contact" variant="secondary">Talk to our experts</Button>
      </PageHero>
      <MissionVision />
      <Story variant="detail" />
      <Journey />
      <Principles />
      <Leadership />
      <CtaBand secondary={{ to: '/services', label: 'See our services' }} />
    </>
  )
}
