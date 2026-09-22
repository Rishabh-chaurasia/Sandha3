export const SERVICES = [
  {
    slug: 'information-technology',
    n: '01',
    title: 'Information Technology',
    accent: '#0878F9',
    accent2: '#7C5CFC',
    tint: '#EAF6FF',
    tagline: 'Support from planning through delivery.',
    summary:
      'A technology and development partner based in Gurugram, offering cross-platform app and software development to mid-market and small business clients.',
    areas: [
      { title: 'Software Development', text: 'Product development from initial strategy and planning to final deployment and after-delivery support. Custom skill sets put in place to turn a product idea into reality.' },
      { title: 'Infrastructure', text: 'Reliable infrastructure solutions that improve performance, security, and long-term value.' },
      { title: 'Cyber Security', text: 'A dedicated security practice area covering topics from data breaches to scams and online privacy.' },
    ],
    seo: 'Software development, IT infrastructure and cyber security services from Sandha & Company, a technology and development partner in Gurugram.',
  },
  {
    slug: 'consultancy',
    n: '02',
    title: 'Consultancy',
    accent: '#4D7CFE',
    accent2: '#7C5CFC',
    tint: '#F1EEFF',
    tagline: 'Identify the technology opportunities that matter.',
    summary:
      'IT consulting and advisory that helps clients assess diverse technology strategies and align them with their core business and processes.',
    areas: [
      { title: 'Technology Consulting', text: 'Identifying and discovering technology opportunities a business might be missing.' },
      { title: 'Technology Strategy', text: 'Assessing diverse technology strategies against what the business is trying to achieve.' },
      { title: 'Technology Advisory', text: 'Ongoing IT advisory services for clients making technology decisions.' },
      { title: 'Alignment with Business Processes', text: 'Aligning the chosen technology with core business and processes.' },
    ],
    seo: 'Technology consulting, strategy and advisory from Sandha & Company, aligned with your core business processes.',
  },
  {
    slug: 'manpower',
    n: '03',
    title: 'Manpower',
    accent: '#19C6E8',
    accent2: '#28D7B2',
    tint: '#E8FBFF',
    tagline: 'Find the right people and support them after deployment.',
    summary:
      'High-impact, end-to-end temporary staffing solutions that help organisations build a competent workforce, with HR services around it.',
    areas: [
      { title: 'Flexi Staffing', text: 'Temporary workforce solutions that flex with your needs.' },
      { title: 'Permanent Staffing', text: 'Permanent hires for roles that need long-term commitment.' },
      { title: 'Payroll Processing', text: 'Payroll handled as part of the HR service.' },
      { title: 'Background Checks & Verification', text: 'Verification of candidates before they are deployed.' },
      { title: 'Compliance Management', text: 'Statutory compliance managed alongside the workforce.' },
    ],
    seo: 'Flexi and permanent staffing, payroll processing, background verification and compliance management from Sandha & Company.',
  },
  {
    slug: 'staffing',
    n: '04',
    title: 'Staffing',
    accent: '#7C5CFC',
    accent2: '#0878F9',
    tint: '#F1EEFF',
    tagline: 'Flexible workforce support from first conversation to onboarding.',
    summary:
      'IT services along with permanent and temporary staff who know their fields, with the full hiring process handled end to end.',
    areas: [
      { title: 'Attracting Candidates', text: 'Reaching a highly qualified and productive pool of candidates.' },
      { title: 'Screening', text: 'Checking skills and fit before anyone reaches your desk.' },
      { title: 'Interviewing', text: 'Structured interviews for the roles you need to fill.' },
      { title: 'Onboarding', text: 'Bringing new talent on board smoothly.' },
      { title: 'Permanent / Temporary Staffing', text: 'Either engagement model, depending on the need.' },
    ],
    seo: 'Permanent and temporary staffing from Sandha & Company: attracting, screening, interviewing and onboarding talent.',
  },
  {
    slug: 'call-centre',
    n: '05',
    title: 'Call Centre',
    accent: '#19C6E8',
    accent2: '#7C5CFC',
    tint: '#E8FBFF',
    tagline: 'Every channel your customers use, one support operation.',
    summary:
      'A 24/7 customer operations service combining voice, digital support, complaint management, field response, and customer feedback for utilities and essential-service providers.',
    areas: [
      { title: 'Voice Services', text: 'Inbound and outbound customer service, complaint handling, campaigns, collections, order taking, activation support, and fraud management.' },
      { title: 'Non-Voice Services', text: 'Back-office support across email, SMS, social media, and web chat.' },
      { title: 'Fault Rectification', text: 'GPS-enabled field teams respond to electrical faults, record the work completed, and confirm closure with the consumer.' },
      { title: 'Complaint Tracking', text: 'Teams track complaints, escalate out-of-scope cases, and send automatic status updates to consumers and client officials.' },
      { title: 'Customer Feedback', text: 'Recorded interactions and post-resolution surveys help clients measure satisfaction and improve service quality.' },
      { title: 'Utility Technology', text: 'Vehicle tracking, complaint workflows, mobile applications, dashboards, and consumer self-service tools support field and contact-centre operations.' },
      { title: 'FRT Operations', text: 'GPS-enabled vehicles, trained field teams, complaint status updates, consumer confirmation and escalation support for electrical faults.' },
      { title: 'Safety & EHS', text: 'Safety training, protective equipment and hazard controls support responsible field operations and a zero-incident culture.' },
      { title: 'HRO Services', text: 'Address and credit verification, background checks, document pickup, collections support and referral case management.' },
      { title: 'Water Utility Systems', text: 'Digital support for connections, metering, billing, collections, consumer portals, complaints, dashboards and field activities.' },
    ],
    seo: 'Voice and non-voice call centre services from Sandha & Company: inbound, outbound, collections, back office, email, SMS, social media and webchat.',
  },
]

export const CALL_GROUPS = [
  {
    parent: 'Voice',
    items: [
      { key: 'voice', title: 'Voice', points: ['Inbound', 'Outbound', 'Order taking', 'Reservations / advisory services'] },
      { key: 'support', title: 'Customer support', points: ['Customer service', 'Queries and complaints management', 'Activation services', 'Fraud management'] },
      { key: 'collections', title: 'Collections', points: ['Collections', 'Skip tracing', 'Early, mid and late-stage customer service in B2B and B2C'] },
    ],
  },
  {
    parent: 'Non-voice',
    items: [
      { key: 'backoffice', title: 'Back office', points: ['Back office services'] },
      { key: 'digital', title: 'Digital support', points: ['Email', 'SMS', 'Social media handling', 'Webchat'] },
    ],
  },
]

export const SALES_NOTE = 'Sales campaigns including up-sell, cross-sell and adding new accounts.'

export const FIELD_OPS = {
  fault: [
    'Vehicles fitted with GPS, tools and trained manpower deployed 365 x 24 x 7',
    'Complaints received from the call centre; team visits the consumer location and rectifies the fault',
    'Faults removed or rectified within 2 hours',
    'Outage, rectification and material details collected and recorded',
  ],
  tracking: [
    'Nearest field team located through a vehicle tracking system',
    'Complaint status tracked at regular intervals',
    'Automatic SMS to the consumer on resolution or closure',
    'Automatic SMS and telephonic escalation to client officials for out-of-scope complaints',
  ],
  lifecycle: ['Complaint received', 'Nearest team located', 'Fault rectified', 'Closure SMS sent'],
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', children: true },
  { label: 'Compliance', to: '/compliance' },
  { label: 'Clients', to: '/clients' },
  { label: 'Founder', to: '/founder' },
  { label: 'Contact', to: '/contact' },
]
