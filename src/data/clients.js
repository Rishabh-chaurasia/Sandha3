export const CLIENTS = [
  { short: '11', name: 'DISCOMs nationwide', group: 'FRT and annual maintenance services' },
  { short: '20m+', name: 'Customers served', group: 'Through utility operations' },
  { short: '24k+', name: 'Personnel', group: 'Supporting service delivery' },
  { short: '2k+', name: 'FRT and breakdown specialists', group: 'Field response capability' },
]

const OFFICIAL = 'https://www.sandha-company.com/assets/img/clients/'
// Logos marked png are bundled locally from the 2025 company profile.
// Logos in public/official/clients/normalized are trimmed and scaled to the same
// visual size on an identical 480x240 transparent canvas, so they line up evenly.
const NORMALIZED = {
  DHBVN: 'DHBVN.png', AVVNL: 'AVVNL.png', JDVVNL: 'JDVVNL.png', JVVNL: 'JVVNL.png', MGVCL: 'MGVCL.png', PGVCL: 'PGVCL.png',
  PSPCL: 'PSPCL.png', BSES: 'bses.png', LLRU: 'luvas.png', TPCODL: 'TPCODL.png', TPSODL: 'TPSODL.png', TPWODL: 'TPWODL.png', TPNODL: 'TPNODL.png',
}
export const CLIENT_LOGOS = [
  { name: 'Dakshin Haryana Bijli Vitran Nigam', short: 'DHBVN', file: 'DHBVN.jpg', png: 'DHBVN.png' },
  { name: 'Ajmer Vidyut Vitran Nigam', short: 'AVVNL', file: 'AVVNL.jpg', png: 'AVVNL.png' },
  { name: 'Jodhpur Vidyut Vitran Nigam', short: 'JDVVNL', file: 'JDVVNL.jpg', png: 'JDVVNL.png' },
  { name: 'Jaipur Vidyut Vitran Nigam', short: 'JVVNL', file: 'JVVNL.jpg', png: 'JVVNL.png' },
  { name: 'Madhya Gujarat Vij Company', short: 'MGVCL', file: 'MGVCL.jpg', png: 'MGVCL.png' },
  { name: 'Paschim Gujarat Vij Company', short: 'PGVCL', file: 'PGVCL.jpg', png: 'PGVCL.png' },
  { name: 'Punjab State Power Corporation', short: 'PSPCL', file: 'PSPCL.jpg', png: 'PSPCL.png' },
  { name: 'BSES Yamuna Power', short: 'BSES', file: 'bses.jpg', png: 'bses.png' },
  { name: 'Lala Lajpat Rai University', short: 'LLRU', png: 'luvas-high-res.webp', file: 'lala-lajpat-rai-university.jpg' },
  { name: 'TP Central Odisha Distribution', short: 'TPCODL', file: 'TPCODL.jpg' },
  { name: 'TP Southern Odisha Distribution', short: 'TPSODL', png: 'TPSODL-transparent.png', file: 'TPSODL.jpg' },
  { name: 'TP Western Odisha Distribution', short: 'TPWODL', file: 'TPWODL.jpg' },
  { name: 'TP Northern Odisha Distribution', short: 'TPNODL', file: 'TPNODL.png' },
].map((client) => ({ ...client, local: `/official/clients/normalized/${NORMALIZED[client.short]}`, remote: `${OFFICIAL}${client.file}` }))
