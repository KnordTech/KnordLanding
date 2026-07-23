# Prompt: Integrate Nityavali landing page into existing Knord website

Paste into your coding agent:

> I have an existing Knord Technologies website (production codebase) and a new design reference for a Nityavali product landing page (`Nityavali.html`, attached). Integrate this as a new route/page on the existing site, matching the existing codebase's conventions (routing, component structure, build/asset pipeline) rather than dropping in raw HTML.
>
> Requirements:
> - Add a new route at `/nityavali` (or `/products/nityavali` — match whatever URL convention the rest of the site uses) rendering this page.
> - Recreate the design as idiomatic components in our existing framework/stack — do not literally embed the reference HTML. Match fonts, colors, spacing, and copy from the reference exactly (see token table below).
> - This page has its OWN color system, distinct from the parent Knord site's indigo/cobalt + amber palette — do not reuse the parent site's theme tokens here. Scope Nityavali's tokens locally (e.g. a `nityavali` theme/namespace) so the two don't leak into each other.
> - Wire up the existing site's "Explore Nityavali" / "Visit Nityavali" buttons (currently pointing at a placeholder `Nityavali.html`) to link to this new route, opening in a new tab.
> - Add a "back to Knord Technologies" link in Nityavali's nav/footer pointing at the parent site's home route.
> - Reuse the parent site's existing header/footer shell ONLY if the parent site has a shared layout component — otherwise keep Nityavali's nav/footer as self-contained, since its branding differs from the parent (see design reference).
> - Keep this page static/marketing-only for now — no real data wiring, the dashboard panel in the hero is decorative mock data.
>
> Design tokens for this page (independent of the parent site's theme):
> - Navy `#0D1B2E` (headings/text), deep navy `#0B1524` (dark panels/footer/CTA band)
> - Teal `#14A89C` (primary actions, primary accent)
> - Purple `#6C5DD4` (secondary accent)
> - Amber `#F5A623` (tertiary accent)
> - Background `#FFFFFF`, alt section background `#F7F8FA`
> - Font: Inter, weights 400–800
> - Section padding ~100–110px vertical / 56px horizontal; cards radius 16px, buttons/chips radius 8–10px (pill chips 999px)
>
> Sections/copy to reproduce: sticky nav (logo mark + "NITYAVALI" wordmark + tagline "by Knord Technologies", nav links, "Request a demo" CTA) → hero (eyebrow "Operations Management Platform", headline, subtext, 2 CTAs, dark dashboard mock panel with stat cards + "Smart Assistant" callout) → Features grid (6 cards: CRM & Sales Pipeline, Projects & Tasks, Resourcing, Smart Assistant, HR & Attendance, Support & Renewals) → Modules (pill chip row: Leads, Sales Pipeline, Clients, Projects, Tasks, Resources, HR & Attendance, AMC & Renewals) → Why Nityavali (single statement block) → CTA band (dark, centered, email link) → Footer (attribution line + link back to Knord Technologies).
