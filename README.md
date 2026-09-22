# Sandha & Company — website

A completely new site for Sandha & Company. React + Vite + Tailwind v4 + Framer Motion + Lucide.
All content is taken from the official site (sandha-company.com); nothing is invented.

## Run

```bash
npm install
npm run fetch-assets   # downloads the official logo + client logos into public/official (needs internet)
npm run dev
npm run build          # output in dist/
```

`npm run fetch-assets` is the only step that needs the live official site. If you skip it,
the logo and client images fall back to the official URLs, then to text.

Optional: copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a form service
(Formspree etc.) so the contact form POSTs instead of opening the visitor's mail app.

Deploy: any static host. SPA routing needs a catch-all rewrite to `index.html`
(`public/_redirects` covers Netlify; on Vercel add a rewrite, on Nginx `try_files`).

## Structure

```
src/
  components/     Navbar, Footer, Button (magnetic), SectionHeading, Counter, ContactForm,
                  PageHero, CtaBand, Reveal, PageTransition, Seo, ServiceModule,
                  AnimatedIllustration, OfficialImage, Logo, ScrollToTop
  sections/       Hero, Statistics, ServicesExplorer, Story, Principles, Journey, Leadership,
                  ComplianceSection, ClientsMarquee, ContactSection, CallCentreDetail
  illustrations/  primitives.jsx (gradients, Orb, Glass, particles), People.jsx + 9 compositions
  pages/          Home, About, Services, ServiceDetail, Expertise, Compliance, Clients,
                  Contact, Privacy, NotFound
  data/           company.js, services.js, clients.js  (all copy lives here)
```

## Design system

- Container: `.container-x` (1280px, 32px gutters, 20px on phones). Every section uses it, left-aligned, 12-column grid on desktop.
- Vertical rhythm: `.section` (56 / 76 / 112px by breakpoint).
- Type: Manrope only. `.h-hero` 34-76px, `.h-section` 32-56px, `.lead` 17-19px.
- Palette lives in `src/index.css` (`@theme`): brand blue, bright blue, cyan, electric, purple, mint, plus soft tints.
- Backgrounds vary and never go dark: `bg-hero`, `bg-mesh`, `bg-w2b`, `bg-b2w`, `bg-w2p`, `bg-w2c`, `bg-grid`, `bg-dots`.

## Illustrations (each a different story and colour mix)

| Section | Story | Palette |
|---|---|---|
| Hero | business core linking technology, infrastructure, consulting, people, customer operations | all |
| Information Technology | cloud over application / infrastructure / data / security layers, data packets | blue, cyan, purple |
| Consultancy | strategy board: challenge to execution | blue, purple |
| Manpower | workforce path with people entering | blue, cyan, mint |
| Staffing | radial match, candidate cards flowing in | purple, blue, mint |
| Call Centre | customer, five channels, agent, CRM, resolution | cyan, blue, purple |
| Story | animated 2008 emblem | blue, cyan, purple |
| Principles | scroll-driven glowing path: understand, partner, trust | blue, purple, mint |
| Journey | 2008 then five capability themes (horizontal / vertical on mobile) | blue to mint |
| Compliance | document, verification, approval, record | blue, cyan |
| Contact | message / call / email flowing to the Gurgaon office | purple, cyan, blue |

Hero and Manpower ship dedicated mobile compositions. Each illustration is a lazy-loaded chunk.

## Content accuracy

Everything factual comes from the official site: services and sub-services, the
December 2008 start, the four published figures (156 / 80 / 20 / 15), the three
client-centric principles, the two directors, the eight client names, the call centre
and field-operations detail, the privacy policy, and the address, phone and email.
The compliance page describes the record types and links to the official compliance
page rather than re-hosting documents. No awards, testimonials, case studies,
certifications or milestone years have been invented.

## Accessibility & performance

Semantic landmarks, skip link, keyboard-navigable services tabs (arrow keys), visible
focus rings, ARIA on menus/accordions/marquee, alt text, `prefers-reduced-motion`
respected (entrance animations, marquee and SVG particles all switch off).
Route-level and illustration-level code splitting; SVG instead of raster images.
