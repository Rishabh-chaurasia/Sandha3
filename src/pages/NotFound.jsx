import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Sandha & Company" description="The page you were looking for is not here." path="/404" />
      <PageHero
        tone="fade"
        align="center"
        eyebrow="404"
        title="That page is not here."
        lead="The link may be out of date. Try the services overview, or tell us what you were looking for."
        crumbs={[{ label: 'Not found' }]}
      >
        <Button to="/services">Explore Our Services</Button>
        <Button to="/contact" variant="secondary">Let’s Talk</Button>
      </PageHero>
      <div className="h-24" />
    </>
  )
}
