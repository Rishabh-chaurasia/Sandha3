# Illustrated redesign: files changed

Added
- src/illustrations/figures.jsx — flat characters (Figure), isometric boxes/platforms (IsoBox,
  IsoPlatform), Desk, Plant, Confetti, Chip icon bubble
- src/illustrations/PrincipleScenes.jsx — small illustrated scenes for Understand / Partner / Trust

Rewritten (new illustration style: flat characters + isometric objects, replacing
gradient-orb line-art)
- src/illustrations/HeroEcosystem.jsx, ITArchitecture.jsx, ConsultStrategy.jsx,
  ManpowerJourney.jsx, StaffingMatch.jsx, CallCentreNetwork.jsx, ComplianceFlow.jsx,
  ClientsNetwork.jsx, ContactMap.jsx
- src/sections/Statistics.jsx (floating stat bubbles), src/components/CtaBand.jsx
  (gradient panel with characters)

Edited
- src/sections/Hero.jsx (soft wave divider into next section)
- src/sections/Principles.jsx (added PrincipleScene per stage)
- src/pages/ServiceDetail.jsx (Staffing/Manpower-style big numbered steps for the "Grid" body
  layout; manpower hero now full-width via new `wide` prop)
- src/components/PageHero.jsx (new `wide` prop: illustration stacks full-width below the text
  instead of sitting beside it — used for Manpower's wide journey illustration)
- src/index.css (added coral/amber/pink/violet/lav custom properties, --shadow-bubble)

Removed
- src/illustrations/People.jsx (superseded by figures.jsx)

Post-fix pass (after visual QA against real renders)
- CallCentreNetwork.jsx: widened the channel stack (58→148→246→344→442) so labels never sit
  under the next icon; moved CRM chip, customer/agent labels, desk and plant to match
- HeroEcosystem.jsx: softened the two backdrop glow circles (opacity .85 / .5) so the
  illustration doesn't wash out
- ITArchitecture.jsx: moved a confetti mark off the "Cyber security" label
