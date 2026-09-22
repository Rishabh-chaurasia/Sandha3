// Downloads the official logo and client logos into /public/official so the site
// serves them locally. Run once with network access:  npm run fetch-assets
import { mkdir, writeFile } from 'node:fs/promises'

const BASE = 'https://www.sandha-company.com/assets/img/'
const files = [
  'logo.png', 'logo-2.png',
  'clients/AVVNL.jpg', 'clients/DHBVN.jpg', 'clients/JDVVNL.jpg', 'clients/JVVNL.jpg',
  'clients/PSPCL.jpg', 'clients/tata-power.jpg', 'clients/lala-lajpat-rai-university.jpg', 'clients/bses.jpg',
]
await mkdir('public/official/clients', { recursive: true })
for (const f of files) {
  const res = await fetch(BASE + f)
  if (!res.ok) { console.warn('skip', f, res.status); continue }
  await writeFile(`public/official/${f}`, Buffer.from(await res.arrayBuffer()))
  console.log('saved', f)
}
