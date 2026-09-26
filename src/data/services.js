// Service scope combines the supplied company profile with the service brief provided by the user.
export const SERVICES = [
  {
    slug: 'utility-operations', n: '03', title: 'FRT & Line Maintenance', accent: '#0F9E93', accent2: '#19C6E8', tint: '#E4FAF6',
    tagline: 'Fault rectification and line maintenance for DISCOMs',
    summary: 'Our Fault Rectification Teams (FRT) keep electricity flowing. GPS-tracked vehicles, Hydra and trolley-mounted lifters and trained linemen attend no-current complaints, repair line and technical faults and maintain LT and HT lines, with every case tracked to consumer sign-off.',
    areas: [
      { title: 'Fault Rectification Teams (FRT)', text: 'GPS-equipped light commercial vehicles with tools, a lineman, technician and driver, deployed 24/7 to resolve no-current complaints within two hours of registration.' , short: '24/7 GPS-tracked crews fixing no-current faults in 2 hours.' },
      { title: 'FRT and lifter fleet', text: 'FRT vehicles alongside Hydra lifters, trolley-mounted lifters, sky lifters and transformer replacement cranes, deployed under DISCOM tenders.' , short: 'FRT vehicles, Hydra, trolley and sky lifters, and cranes.' },
      { title: 'LT and HT line maintenance', text: 'Maintenance of low tension (LT, 440 V) and high tension (HT, 11 kV to 33 kV) lines after a proper shutdown, including sky-lift and trolley-mounted lifter work.' , short: 'LT (440 V) and HT (11–33 kV) lines, after proper shutdown.' },
      { title: 'Other services: projects, AMC and MRBD', text: 'As part of operations and maintenance we also take up line and substation projects up to 33 kV, annual maintenance contracts (AMC), and meter reading and bill distribution (MRBD).' , short: 'Line and substation projects, AMC and MRBD.' },
      { title: 'Safety on every job', text: 'Trained, ITI-qualified crews work with gloves, safety shoes, helmets, earthing rods and a defined shutdown procedure before touching any line.' , short: 'ITI-qualified crews with full safety gear, every time.' },
      { title: 'Vehicle tracking and escalation', text: 'A GPS/GIS vehicle tracking system finds the nearest FRT, consumers see the team approaching in real time, and out-of-scope cases are escalated to DISCOM officials.' , short: 'Live GPS tracking; out-of-scope cases escalated to DISCOM.' },
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
      { title: 'Power-sector roles', text: 'Linemen, assistant linemen, junior engineers, technicians, helpers and drivers, recruited against the requirements set by the DISCOM or government department.' , short: 'Linemen, junior engineers, technicians, helpers and drivers.' },
      { title: 'ITI-certified and trained', text: 'Candidates hold the required ITI certification and receive practical and safety training before they are deployed on electrical networks.' , short: 'ITI-certified staff, safety trained before deployment.' },
      { title: 'Circle-wide deployment', text: 'Staffing for entire circles, including a mix of technical and support roles deployed across three circles in Rajasthan.' , short: 'Staffing for entire circles, including three in Rajasthan.' },
      { title: 'Meter reading and bill distribution (MRBD)', text: 'Trained field staff for meter reading and bill distribution across DISCOM circles.' , short: 'Field staff for meter reading and bill distribution.' },
      { title: 'Payroll and statutory compliance', text: 'We run payroll and handle PF and ESI contributions, registrations and filings for every deployed employee.' , short: 'Payroll, PF and ESI handled for every employee.' },
      { title: 'Insurance cover', text: 'Insurance cover is provided through group accident insurance, alongside statutory benefits.' , short: 'Group accident insurance plus statutory benefits.' },
    ],
    photo: '/photos/safety-briefing.webp',
    photoAlt: 'Field technicians in helmets and safety vests at a briefing before deployment',
    seo: 'Linemen, junior engineers and technical staffing for DISCOMs, with payroll, PF, ESI and insurance managed by Sandha & Company.',
  },
  {
    slug: 'contact-centre', n: '04', title: 'Call Centre', accent: '#E06B4B', accent2: '#7C5CFC', tint: '#FFF1EC',
    tagline: '24/7 utility call centres, from the first call to confirmed closure',
    summary: 'Centralised 24/7 call centres for DISCOMs. Every complaint is registered, sent to the field team and closed only after the consumer confirms it.',
    areas: [
      { title: '24/7 toll-free call centre', text: 'Calls answered within 60 seconds; no-current complaints reach the FRT within 90 seconds.' , short: 'Calls answered in 60 sec; FRT alerted in 90 sec.' },
      { title: 'Omni-channel complaints', text: 'Voice, email, chat or social media, each with a system-generated complaint number.' , short: 'Voice, email, chat and social media, with a complaint number.' },
      { title: 'Tracking and resolution', text: 'Pending complaints reviewed every 45 minutes, SMS updates, and a callback to confirm resolution.' , short: 'Reviewed every 45 min, SMS updates and a callback.' },
      { title: 'Inbound, outbound and back office', text: 'Customer service, collections, campaigns and non-voice case follow-up.' , short: 'Customer service, collections, campaigns and follow-up.' },
    ],
    seo: '24/7 toll-free and omni-channel utility call centres with complaint dispatch, tracking and consumer feedback.',
  },
  {
    slug: 'technology-services', n: '02', title: 'Information Technology', accent: '#0878F9', accent2: '#19C6E8', tint: '#EAF6FF',
    tagline: 'The IT that runs our call centres and field operations',
    summary: 'The technology behind every complaint: call centre IT, servers and cloud data, and software that takes a call to the field team and through to resolution.',
    areas: [
      { title: 'Call centre IT setup', text: 'Server room, network, hardware and on-site IT staff for our call centres.' , short: 'Server room, network, hardware and on-site IT staff.' },
      { title: 'Servers and cloud data', text: 'On-site servers and cloud-hosted records that stay available and secure.' , short: 'On-site servers and secure cloud-hosted records.' },
      { title: 'Complaint management software', text: 'In-house software that registers complaints and tracks them to resolution.' , short: 'In-house software that tracks complaints to resolution.' },
      { title: 'Vehicle tracking and field apps', text: 'GPS vehicle tracking, field-staff apps and MIS dashboards.' , short: 'GPS vehicle tracking, field apps and MIS dashboards.' },
    ],
    seo: 'Call centre IT setup, servers, cloud data, complaint management software and vehicle tracking from Sandha & Company.',
  },
  {
    slug: 'water-utility', n: '05', title: 'Water Utility Services', accent: '#4266C9', accent2: '#19C6E8', tint: '#ECF2FF',
    tagline: 'Connections, metering, billing, repair and maintenance for water utilities',
    summary: 'For public health engineering departments we deliver the software and the field teams: new connections, metering, billing, collection, complaints, repair and maintenance.',
    areas: [
      { title: 'New connections and consumer records', text: 'Online new connection applications through a mobile app or web portal, backed by a complete consumer information system.' , short: 'Online applications and a complete consumer database.' },
      { title: 'Metering, billing and collection', text: 'Manual and automated meter reading, spot billing apps, flexible billing cycles and multi-channel payment reconciliation.' , short: 'Meter reading, spot billing and payment reconciliation.' },
      { title: 'Complaints, repair and maintenance', text: 'A consumer complaint centre plus field teams and equipment for repair and maintenance work that reduces water loss.' , short: 'Complaint centre plus field teams for repair work.' },
      { title: 'Field surveys and meter replacement', text: 'Surveys to identify unauthorised connections, regular spot billing and replacement of defective meters.' , short: 'Unauthorised-connection surveys and meter replacement.' },
      { title: 'Portals, AMR and dashboards', text: 'Customer self-service portal, integration with automatic meter reading for non-revenue water insight, and MIS dashboards.' , short: 'Self-service portal, AMR integration and MIS dashboards.' },
    ],
    seo: 'Water connection management, metering, billing, complaints and leak rectification for public health engineering departments.',
  },
  {
    slug: 'trolley-mounted-lifters', n: '06', title: 'Trolley Mounted Lifters', accent: '#C9861A', accent2: '#E06B4B', tint: '#FFF6E6',
    tagline: 'Vehicle-mounted lifters for safe work at height',
    summary: 'Trolley-mounted lifters carry crews and tools up to pole-top height on a stable platform. They reach narrow lanes and low-clearance sites where larger sky lifts cannot, so line work and repairs finish faster and more safely.',
    areas: [
      { title: 'Vehicle-mounted platforms', text: 'Lifting platforms mounted on a vehicle, ready to move from one site to the next with the crew.' , short: 'Lifting platforms that move with the crew.' },
      { title: 'Pole-top and height work', text: 'A stable, guarded platform for work on poles, lines, street lighting and overhead fittings.' , short: 'A stable, guarded platform for work on poles and lines.' },
      { title: 'Narrow lanes and tight sites', text: 'Compact enough for crowded areas and low-clearance locations where larger sky lifts cannot reach.' , short: 'Reaches crowded, low-clearance sites sky lifts cannot.' },
      { title: 'Different from sky lifts', text: 'Used alongside our sky lifters and Hydra lifters, so each job gets the right lifting equipment.' , short: 'Works alongside our sky and Hydra lifters.' },
      { title: 'Trained operators', text: 'Operated by trained staff following the same safety and shutdown procedure as all our line work.' , short: 'Run by trained staff under our safety procedure.' },
    ],
    art: '/trolley-lifter-illustration.png',
    photo: '/photos/lifting-platforms.webp',
    photoAlt: 'Lifting platforms raised for work at height',
    seo: 'Trolley-mounted lifters for pole-top, overhead and height work by Sandha & Company.',
  },
  {
    slug: 'sky-lifters', n: '07', title: 'Sky Lifters', accent: '#E0662F', accent2: '#0878F9', tint: '#FFF0E8',
    tagline: 'Boom-mounted sky lifts for high-reach line work',
    summary: 'Truck-mounted sky lifters with a telescopic boom and insulated bucket lift crews safely to HT lines, tall poles and transformer structures, reaching heights and angles that ladders and platforms cannot.',
    areas: [
      { title: 'Telescopic boom and bucket', text: 'A truck-mounted boom raises an enclosed bucket so crews can work beside HT lines and tall structures.' , short: 'Truck-mounted boom with an enclosed crew bucket.' },
      { title: 'High-reach HT line work', text: 'Used for maintenance on high tension lines, tall poles and transformer structures after a proper shutdown.' , short: 'HT lines, tall poles and transformer structures.' },
      { title: 'Different from trolley-mounted lifters', text: 'Sky lifters give extra height and outreach; trolley-mounted lifters suit narrow lanes and pole-top work.' , short: 'More height and reach than trolley-mounted lifters.' },
      { title: 'Trained operators and crews', text: 'Operated by trained staff with harnesses, helmets and the same safety procedure used on all our line work.' , short: 'Trained staff with harnesses, helmets and safety drills.' },
    ],
    photo: '/photos/frt-sky-lift.webp',
    photoAlt: 'Technician in a sky-lift bucket beside a high tension line',
    art: '/sky-lifter-illustration.png',
    seo: 'Truck-mounted sky lifters with telescopic boom and bucket for HT line and high-reach work by Sandha & Company.',
  },
]

// Presentation order across navigation and the full services explorer.
export const ORDERED_SERVICES = ['manpower-management', 'technology-services', 'utility-operations', 'contact-centre', 'water-utility', 'trolley-mounted-lifters', 'sky-lifters']
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
  // Follows the complaint management lifecycle in the company profile.
  lifecycle: [
    'Consumer calls the DISCOM’s centralised call centre',
    'Control room sorts the complaint by circle and work type',
    'Complaint forwarded to field staff on mobile or tablet',
    'Field team reaches the consumer, who tracks the FRT live on GPS',
    'FRT updates the status and takes the consumer’s signature',
    'Automated SMS sends the status to the consumer’s mobile',
    'Control room calls the consumer to verify the resolution',
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
