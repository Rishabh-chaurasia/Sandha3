const OFFICIAL = 'https://www.sandha-company.com/assets/img/clients/'

export const CLIENTS = [
  { name: 'Dakshin Haryana Bijli Vitran Nigam (DHBVN)', short: 'DHBVN', file: 'DHBVN.jpg', group: 'Power & utilities' },
  { name: 'Ajmer Vidyut Vitran Nigam Limited (AVVNL)', short: 'AVVNL', file: 'AVVNL.jpg', group: 'Power & utilities' },
  { name: 'Jodhpur Vidyut Vitran Nigam Ltd. (JDVVNL)', short: 'JDVVNL', file: 'JDVVNL.jpg', group: 'Power & utilities' },
  { name: 'Jaipur Vidyut Vitran Nigam Ltd. (JVVNL)', short: 'JVVNL', file: 'JVVNL.jpg', group: 'Power & utilities' },
  { name: 'Tata Power', short: 'Tata Power', file: 'tata-power.jpg', group: 'Power & utilities' },
  { name: 'Punjab State Power Corp. Ltd. (PSPCL)', short: 'PSPCL', file: 'PSPCL.jpg', group: 'Power & utilities' },
  { name: 'Lala Lajpat Rai University', short: 'LLRU', file: 'lala-lajpat-rai-university.jpg', group: 'Education' },
  { name: 'BSES Yamuna Power Limited', short: 'BSES', file: 'bses.jpg', group: 'Power & utilities' },
].map((c) => ({ ...c, local: `/official/clients/${c.file}`, remote: OFFICIAL + c.file }))
