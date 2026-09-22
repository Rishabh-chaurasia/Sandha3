import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { COMPANY } from '../data/company'

const SECTIONS = [
  { h: 'Consent', p: ['By using our website, you consent to this Privacy Policy and agree to its terms.'] },
  { h: 'Information we collect', p: [
    'The personal information you are asked to provide, and the reasons why you are asked to provide it, will be made clear at the point we ask for it.',
    'If you contact us directly, we may receive additional information such as your name, email address, phone number, the contents of your message and any attachments, and any other information you choose to provide.',
    'When you register for an account, we may ask for contact information including name, company name, address, email address and telephone number.',
  ] },
  { h: 'How we use your information', list: [
    'Provide, operate and maintain our website',
    'Improve, personalise and expand our website',
    'Understand and analyse how you use our website',
    'Develop new products, services, features and functionality',
    'Communicate with you, including for customer service, updates and promotional purposes',
    'Send you emails',
    'Find and prevent fraud',
  ] },
  { h: 'Log files', p: [
    'We follow a standard procedure of using log files. These files log visitors when they visit websites, as part of hosting analytics. The information collected includes IP addresses, browser type, internet service provider, date and time stamp, referring and exit pages, and possibly the number of clicks. This is not linked to personally identifiable information and is used for analysing trends, administering the site, tracking movement on the website and gathering demographic information.',
  ] },
  { h: 'Third-party privacy policies', p: [
    'Our Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective privacy policies of third-party ad servers for more detailed information, including how to opt out of certain options.',
    'You can disable cookies through your individual browser options. Detailed information about cookie management with specific browsers can be found on the browsers\u2019 respective websites.',
  ] },
  { h: 'CCPA privacy rights', list: [
    'Request that a business disclose the categories and specific pieces of personal data it has collected about consumers',
    'Request that a business delete any personal data it has collected about the consumer',
    'Request that a business that sells personal data does not sell the consumer\u2019s personal data',
  ], after: 'If you make a request, we have one month to respond to you.' },
  { h: 'GDPR data protection rights', list: [
    'The right to access copies of your personal data (a small fee may apply)',
    'The right to rectification of information you believe is inaccurate or incomplete',
    'The right to erasure of your personal data, under certain conditions',
    'The right to restrict processing of your personal data, under certain conditions',
    'The right to object to our processing of your personal data, under certain conditions',
    'The right to data portability, under certain conditions',
  ], after: 'If you make a request, we have one month to respond to you.' },
  { h: 'Changes to this Privacy Policy', p: [
    'We may update this Privacy Policy from time to time, so please review this page periodically. Changes are effective immediately after they are posted on this page.',
  ] },
]

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy | Sandha & Company" description="How Sandha & Company collects, uses and protects information from visitors to this website." path="/privacy-policy" />
      <PageHero
        tone="plain"
        align="center"
        eyebrow="PRIVACY POLICY"
        title="How we handle information from this website"
        lead="This policy applies only to our online activities and to information shared or collected on this website. It does not apply to information collected offline or through other channels."
        crumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {SECTIONS.map((s) => (
            <div key={s.h} className="border-t border-line py-10">
              <h2 className="text-2xl font-semibold text-ink">{s.h}</h2>
              {s.p?.map((t) => <p key={t} className="mt-4 text-muted">{t}</p>)}
              {s.list && (
                <ul className="mt-4 space-y-2.5 text-muted">
                  {s.list.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              {s.after && <p className="mt-4 text-muted">{s.after}</p>}
            </div>
          ))}
          <div className="border-t border-line py-10">
            <h2 className="text-2xl font-semibold text-ink">Questions</h2>
            <p className="mt-4 text-muted">
              If you have questions or suggestions about this Privacy Policy, write to{' '}
              <a href={`mailto:${COMPANY.email}`} className="link-underline font-semibold text-brand-deep">{COMPANY.email}</a> or call{' '}
              <a href={COMPANY.phoneHref} className="link-underline font-semibold text-brand-deep">{COMPANY.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
