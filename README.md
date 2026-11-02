# Knord Technologies website

The marketing site for Knord Technologies and its products: Nityavali (live) and Ripple (early
access). React + Vite +
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
| `src/App.jsx` | The home page: Nityavali-led, with Knord as the company behind it |
| `src/components/home/` | One file per section (hero, workflow story, modules, integrations…) |
| `src/pages/RipplePage.jsx`, `src/components/ripple/` | `/ripple`: the Ripple page (simulated-audience testing for posts and ads) |
| `src/components/site/` | Shared pieces: nav, footer, logos (`Marks.jsx`), smooth scroll, reveal animation |
| `src/styles/mock.css` | Animations for the product mock-ups and illustrations |
| `src/index.css` | Colours and fonts (the v2.0 look, one colour per product area) |
| `src/pages/PrivacyPage.jsx` | `/privacy` |
| `api/lead.js`, `lib/submitLead.js` | The demo form: Vercel function that sends leads to the Nityavali CRM |

Routes: `/` (home), `/nityavali` (same page, for older links and ads), `/ripple`, `/privacy`.

## Things to know

- **Leads**: both forms (home and `/ripple`) post to `/api/lead`; Ripple leads are told apart by
  their page URL. The endpoint forwards them to the Nityavali CRM webhook. Set
  `NITYAVALI_WEBHOOK_URL` and `NITYAVALI_WEBHOOK_SECRET` in Vercel (see `.env.example`), for
  Preview deployments too if you want to test the form there.
- **Logos** live in `src/components/site/Marks.jsx` (Knord: K with an orange arrow; Nityavali:
  N with a teal arrow; Ripple: R with a violet arrow). The favicon is `public/favicon.svg`. The
  brand pack in `brand/` does not have Ripple files yet.
- **Integration logos** come from the `simple-icons` package. Only show tools the app really
  connects to.
- **Example data**: names and figures in the product mock-ups (Sunrise Clinics, ₹4.2Cr, the Kaapi
  Corner run on `/ripple`…) are examples, not customers.
- **Branches**: `main` is live on Vercel. Work on a branch; Vercel builds a preview for it.
