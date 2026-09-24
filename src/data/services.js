// Service scope combines the supplied company profile with the service brief provided by the user.
export const SERVICES = [
  {
    slug: 'utility-operations', n: '03', title: 'FRT & Line Maintenance', accent: '#0F9E93', accent2: '#19C6E8', tint: '#E4FAF6',
    tagline: 'Fault rectification and live-line maintenance for DISCOMs',
    summary: 'Our Fault Rectification Teams (FRT) keep electricity flowing. GPS-tracked vehicles, Hydra lifters and trained linemen attend no-current complaints, repair faults and maintain LT and HT lines, with every case tracked to consumer sign-off.',
    areas: [
      { title: 'Fault Rectification Teams (FRT)', text: 'GPS-equipped light commercial vehicles with tools, a lineman, technician and driver, deployed 24/7 to resolve no-current complaints within two hours of registration.' },
      { title: 'FRT and lifter fleet', text: 'A large fleet of FRT vehicles alongside Hydra lifters and transformer replacement cranes, deployed under DISCOM tenders across service areas.' },
      { title: 'Live-line operation and maintenance', text: 'Operation and maintenance of low tension (LT, 440 V) and high tension (HT, 11 kV to 33 kV) lines, including sky-lift work on LT and HT networks.' },
      { title: 'Safety on every job', text: 'Trained, ITI-qualified crews work with gloves, safety shoes, helmets, earthing rods and a defined shutdown procedure before touching any line.' },
      { title: 'Vehicle tracking and escalation', text: 'A GPS/GIS vehicle tracking system finds the nearest FRT, consumers see the team approaching in real time, and out-of-scope cases are escalated to DISCOM officials.' },
    ],
    photo: '/photos/frt-lineman-pole.webp',
    photoAlt: 'Lineman in safety gear working on an overhead distribution line',
    seo: 'Fault rectification teams, FRT vehicles, Hydra lifters and LT/HT line maintenance for electricity distribution companies.',
  },
  {
    slug: 'manpower-management', n: '01', title: 'Manpower & Staffing', accent: '#18A882', accent2: '#19C6E8', tint: '#E8FBF5',
    tagline: 'Skilled power-sector workforce, recruited, trained and deployed',
    summary: 'We recruit and deploy the technical workforce that utilities need, from linemen to junior engineers, and manage their payroll, statutory compliance and insurance for the full term of the work order.',
    areas: [
      { title: 'Power-sector roles', text: 'Linemen, assistant linemen, junior engineers, technicians, helpers and drivers, recruited against the requirements set by the DISCOM or government department.' },
      { title: 'ITI-certified and trained', text: 'Candidates hold the required ITI certification and receive practical and safety training before they are deployed on live networks.' },
      { title: 'Circle-wide deployment', text: 'Staffing for entire circles, including a mix of technical and support roles deployed across three circles in Rajasthan.' },
      { title: 'Payroll and statutory compliance', text: 'We run payroll and handle PF and ESI contributions, registrations and filings for every deployed employee.' },
      { title: 'Insurance cover', text: 'Group accident insurance is provided as specified in the work order, alongside statutory benefits.' },
    ],
    photo: '/photos/safety-briefing.webp',
    photoAlt: 'Field technicians in helmets and safety vests at a briefing before deployment',
    seo: 'Linemen, junior engineers and technical staffing for DISCOMs, with payroll, PF, ESI and insurance managed by Sandha & Company.',
  },
  {
    slug: 'contact-centre', n: '04', title: 'Call Centre', accent: '#E06B4B', accent2: '#7C5CFC', tint: '#FFF1EC',
    tagline: '24/7 utility call centres, from the first call to confirmed closure',
    summary: 'We set up and run centralised call centres for DISCOMs on a toll-free number. Every complaint is registered, dispatched to the field team, tracked and closed only after the consumer confirms it.',
    areas: [
      { title: '24/7 toll-free call centre', text: 'Shift-wise teams answer calls within 60 seconds and allocate no-current complaints to the FRT within 90 seconds of registration.' },
      { title: 'Omni-channel complaints', text: 'Consumers can register complaints by voice, email, chat or social media and receive a system-generated complaint number.' },
      { title: 'Tracking and closure', text: 'Pending complaints are reviewed every 45 minutes, consumers receive SMS updates, and closure is confirmed with a callback.' },
      { title: 'Inbound, outbound and back office', text: 'Customer service, collections, campaigns and non-voice work such as email, SMS, document handling and case follow-up.' },
    ],
    seo: '24/7 toll-free and omni-channel utility call centres with complaint dispatch, tracking and consumer feedback.',
  },
  {
    slug: 'technology-services', n: '02', title: 'Information Technology', accent: '#0878F9', accent2: '#19C6E8', tint: '#EAF6FF',
    tagline: 'The IT that runs our call centres and field operations',
    summary: 'We build and run the technology behind every complaint: the call centre setup, servers and cloud data, and the software that takes a call, sends it to the field team and closes it.',
    areas: [
      { title: 'Call centre IT setup', text: 'Complete IT for call centres of 120 seats and more, including the server room, network, hardware and the IT staff who run it on our payroll.' },
      { title: 'Servers and cloud data', text: 'On-site servers and cloud-hosted data so complaint, consumer and field records stay available and secure.' },
      { title: 'Complaint management software', text: 'In-house software that registers the call, dispatches it to the FRT on a mobile app, records the fix and closes the complaint.' },
      { title: 'Vehicle tracking and field apps', text: 'GPS/GIS vehicle tracking, mobile apps for field staff, mobile device management and MIS dashboards for utility managers.' },
    ],
    seo: 'Call centre IT setup, servers, cloud data, complaint management software and vehicle tracking from Sandha & Company.',
  },
  {
    slug: 'water-utility', n: '05', title: 'Water Utility Services', accent: '#4266C9', accent2: '#19C6E8', tint: '#ECF2FF',
    tagline: 'Connections, metering, billing and field work for water utilities',
    summary: 'For public health engineering departments we deliver the software and the field teams: new connections, metering, billing, collection, complaints and leak rectification.',
    areas: [
      { title: 'New connections and consumer records', text: 'Online new connection applications through a mobile app or web portal, backed by a complete consumer information system.' },
      { title: 'Metering, billing and collection', text: 'Manual and automated meter reading, spot billing apps, flexible billing cycles and multi-channel payment reconciliation.' },
      { title: 'Complaints and leak rectification', text: 'A consumer complaint centre plus field teams and equipment that fix leaks and reduce water loss.' },
      { title: 'Field surveys and meter replacement', text: 'Surveys to identify unauthorised connections, regular spot billing and replacement of defective meters.' },
      { title: 'Portals, AMR and dashboards', text: 'Customer self-service portal, integration with automatic meter reading for non-revenue water insight, and MIS dashboards.' },
    ],
    seo: 'Water connection management, metering, billing, complaints and leak rectification for public health engineering departments.',
  },
]

// Presentation order across navigation and the full services explorer.
export const ORDERED_SERVICES = ['manpower-management', 'technology-services', 'utility-operations', 'contact-centre', 'water-utility']
  .map((slug) => SERVICES.find((service) => service.slug === slug))

export const CALL_GROUPS = [
  {
    parent: 'Voice',
    items: [
      { key: 'voice', title: 'Inbound and outbound', points: ['Customer care', 'Service enquiries', 'Outbound campaigns'] },
      { key: 'support', title: 'Product and technology support', points: ['Product questions', 'Technical help', 'Complaints and activation'] },
      { key: 'collections', title: 'Collections and retention', points: ['Payment follow-up', 'Collections support', 'Customer retention'] },
    ],
  },
  {
    parent: 'Non-voice',
    items: [
      { key: 'backoffice', title: 'Case follow-up', points: ['Case updates', 'Customer records', 'Closure confirmation'] },
      { key: 'digital', title: 'Social and digital channels', points: ['Email', 'SMS', 'Social media management', 'Web chat and app channels'] },
    ],
  },
]

export const SALES_NOTE = 'Alongside utility complaints, our teams handle customer service, sales campaigns, activation, collections and digital support.'

export const FIELD_OPS = {
  fault: [
    'GPS-equipped light commercial vehicles with tools and trained field personnel operate 24/7',
    'Complaints received from the call centre; team visits the consumer location and rectifies the fault',
    'No-current complaints resolved within two hours of registration',
    'Outage, rectification and material details collected and recorded',
  ],
  tracking: [
    'Nearest field team located through a vehicle tracking system',
    'Complaint status tracked at regular intervals',
    'Automatic SMS to the consumer on resolution or closure',
    'Automatic SMS and telephonic escalation to client officials for out-of-scope complaints',
  ],
  lifecycle: [
    'Consumer calls the toll-free call centre',
    'Complaint registered and number sent by SMS',
    'Complaint pushed to the FRT mobile app',
    'Consumer tracks the FRT vehicle live on GPS',
    'Fault fixed and consumer signs off on the tab',
    'Automatic SMS confirms closure',
    'Control room calls back to verify',
  ],
  sla: [
    { value: '60 sec', label: 'Call answering target' },
    { value: '90 sec', label: 'Complaint allotted to FRT' },
    { value: '45 min', label: 'Pending complaints reviewed' },
    { value: '2 hrs', label: 'No-current complaint resolved' },
  ],
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

// Consumer feedback survey results from the company profile (3,429 completed surveys).
export const FEEDBACK = {
  surveys: 3429,
  results: [
    { value: 96.98, label: 'satisfied with how their complaint was resolved', detail: '2,379 of 2,453' },
    { value: 84.75, label: 'complaints closed within the expected time', detail: '1,373 of 1,620' },
    { value: 99.8, label: 'satisfied with call centre agent behaviour', detail: '1,518 of 1,521' },
    { value: 99.05, label: 'satisfied with field team behaviour', detail: '1,246 of 1,258' },
    { value: 99.68, label: 'confirmed the field team asked for no payment', detail: '1,245 of 1,249' },
  ],
}
