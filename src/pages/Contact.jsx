import Seo from '../components/Seo'
import ContactSection from '../sections/ContactSection'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Sandha & Company"
        description="Contact Sandha & Company at 99/277/2 Atul Kataria Marg, Lane No. 4, Gurgaon - 122001. Phone 0124-4077166, email info@sandha-company.com."
        path="/contact"
      />
      <div className="pt-[88px] sm:pt-[104px]" />
      <ContactSection asH1 />
    </>
  )
}
