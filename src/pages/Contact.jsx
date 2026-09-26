import Seo from '../components/Seo'
import ContactSection from '../sections/ContactSection'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Sandha & Company"
        description="Contact Sandha & Company at 99/277/2, Atul Kataria Marg, Gurugram, Haryana 122001. Phone +91 124 448 8701."
        path="/contact"
      />
      <ContactSection asH1 pageTop />
    </>
  )
}
