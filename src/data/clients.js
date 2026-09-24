export const CLIENTS = [
  { short: '11', name: 'DISCOMs nationwide', group: 'FRT and annual maintenance services' },
  { short: '20m+', name: 'Customers served', group: 'Through utility operations' },
  { short: '24k+', name: 'Personnel', group: 'Supporting service delivery' },
  { short: '2k+', name: 'FRT and breakdown specialists', group: 'Field response capability' },
]

const OFFICIAL = 'https://www.sandha-company.com/assets/img/clients/'
// Logos marked png are bundled locally from the 2025 company profile.
export const CLIENT_LOGOS = [
  { name: 'Dakshin Haryana Bijli Vitran Nigam', short: 'DHBVN', file: 'DHBVN.jpg', png: 'DHBVN.png' },
  { name: 'Ajmer Vidyut Vitran Nigam', short: 'AVVNL', file: 'AVVNL.jpg', png: 'AVVNL.png' },
  { name: 'Jodhpur Vidyut Vitran Nigam', short: 'JDVVNL', file: 'JDVVNL.jpg', png: 'JDVVNL.png' },
  { name: 'Jaipur Vidyut Vitran Nigam', short: 'JVVNL', file: 'JVVNL.jpg', png: 'JVVNL.png' },
  { name: 'Madhya Gujarat Vij Company', short: 'MGVCL', file: 'MGVCL.jpg', png: 'MGVCL.png' },
  { name: 'Paschim Gujarat Vij Company', short: 'PGVCL', file: 'PGVCL.jpg', png: 'PGVCL.png' },
  { name: 'Punjab State Power Corporation', short: 'PSPCL', file: 'PSPCL.jpg', png: 'PSPCL.png' },
  { name: 'Tata Power', short: 'Tata Power', file: 'tata-power.jpg', png: 'tata-power.png' },
  { name: 'BSES Yamuna Power', short: 'BSES', file: 'bses.jpg', png: 'bses.png' },
  { name: 'Lala Lajpat Rai University', short: 'LLRU', file: 'lala-lajpat-rai-university.jpg' },
].map((client) => ({ ...client, local: `/official/clients/${client.png || client.file}`, remote: `${OFFICIAL}${client.file}` }))
