# Knord Technologies website

The website for Knord Technologies and its products: Nityavali (live) and Ripple (early access). React + Vite +
Tailwind CSS v4, deployed on Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run lint
```

## How it's put together

| Path | What it is |
| --- | --- |
| `src/pages/KnordPage.jsx`, `src/components/knord/` | `/`: the Knord company page (mission, products, how we work, contact) |
| `src/pages/NityavaliPage.jsx` | `/nityavali`: the Nityavali product page |
| `src/components/home/` | Nityavali page sections, one file per section (hero, workflow story, modules, integrations…) |
| `src/pages/RipplePage.jsx`, `src/components/ripple/` | `/ripple`: the Ripple page (simulated-audience testing for posts and ads) |
| `src/components/site/` | Shared pieces: nav, footer, logos (`Marks.jsx`), smooth scroll, reveal animation |
| `src/styles/mock.css` | Animations for the product mock-ups and illustrations |
| `src/index.css` | Colours and fonts (the v2.0 look, one colour per product area) |
| `src/pages/PrivacyPage.jsx` | `/privacy` |
| `api/lead.js`, `lib/submitLead.js` | The demo form: Vercel function that sends leads to the Nityavali CRM |

Routes: `/` (Knord), `/nityavali`, `/ripple`, `/privacy`. Each page has its own HTML file
(`index.html`, `nityavali.html`, `ripple.html`): the same app, with that page's title, favicon and
link preview, since link previews don't run JavaScript. Vercel rewrites `/nityavali` and `/ripple`
to them.

## Things to know

- **Leads**: both forms (home and `/ripple`) post to `/api/lead`; Ripple leads arrive with
  "[Ripple early access]" at the start of the message. The endpoint forwards them to the Nityavali CRM webhook. Set
  `NITYAVALI_WEBHOOK_URL` and `NITYAVALI_WEBHOOK_SECRET` in Vercel (see `.env.example`), for
  Preview deployments too if you want to test the form there.
- **Logos** live in `src/components/site/Marks.jsx` (Knord: K with an orange arrow; Nityavali:
  N with a teal arrow; Ripple: R with a violet arrow). Favicons are `public/favicon-knord.svg`,
  `public/favicon.svg` (Nityavali) and `public/favicon-ripple.svg`. `brand/generate.py` rebuilds
  the brand pack and the three link-preview images (run `npm install geist` in `brand/fonts` first).
- **Integration logos** come from the `simple-icons` package. Only show tools the app really
  connects to.
- **Example data**: names and figures in the product mock-ups (Sunrise Clinics, ₹4.2Cr, the Kaapi
  Corner run on `/ripple`…) are examples, not customers.
- **Branches**: `main` is live on Vercel. Work on a branch; Vercel builds a preview for it.
