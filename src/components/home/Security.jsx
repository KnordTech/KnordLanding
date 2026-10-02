import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Reveal, { SectionHead } from '../site/Reveal.jsx';

const POINTS = [
  { title: 'A private workspace per company', body: 'Your data lives in your own workspace. Nobody outside your company can see it.' },
  { title: 'Access down to each action', body: 'Roles decide who can view, add, edit or delete, module by module.' },
  { title: 'Hosted in India', body: 'Runs on AWS in Mumbai, so your data stays in the country.' },
  { title: 'Backups and an audit trail', body: 'The database is backed up before every update, and changes are logged with who made them.' },
];

// Example brands for the sign-in preview (fictional companies).
const BRANDS = [
  { name: 'Sunrise Clinics', host: 'sunrise', color: '#0F7B6F', letter: 'S' },
  { name: 'Northfield School', host: 'northfield', color: '#3B5BDB', letter: 'N' },
  { name: 'Arcline Infra', host: 'arcline', color: '#C2410C', letter: 'A' },
];

function BrandedLogin() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(!reduce);
  const b = BRANDS[i];

  useEffect(() => {
    if (!auto) return undefined;
    const t = setInterval(() => setI((x) => (x + 1) % BRANDS.length), 2600);
    return () => clearInterval(t);
  }, [auto]);

  return (
    <div>
      <div className="grid min-h-[300px] overflow-hidden rounded-[18px] border border-line bg-paper shadow-[0_30px_60px_-40px_rgba(28,25,23,0.35)] sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
        <div className="relative grid min-h-[110px] content-between overflow-hidden bg-ink p-5 text-on-ink">
          <motion.div
            aria-hidden="true"
            animate={{ backgroundColor: b.color }}
            transition={{ duration: 0.6 }}
            className="absolute -bottom-20 -right-16 h-[220px] w-[220px] rounded-full opacity-90 blur-[2px]"
          />
          <div className="relative flex items-center gap-2.5 font-bold">
            <motion.i animate={{ backgroundColor: b.color }} className="grid h-[30px] w-[30px] place-items-center rounded-[9px] text-[13px] not-italic text-paper">
              {b.letter}
            </motion.i>
            {b.name}
          </div>
          <small className="relative font-mono text-[10.5px] text-on-ink/60">Powered by Nityavali</small>
        </div>
        <div className="grid content-center gap-2.5 p-5">
          <b className="text-[16px]">Sign in to {b.name}</b>
          <span className="font-mono text-[11.5px] text-muted">{b.host}.nityavali.com</span>
          <div className="h-[34px] rounded-lg border border-line bg-canvas" />
          <div className="h-[34px] rounded-lg border border-line bg-canvas" />
          <motion.div animate={{ backgroundColor: b.color }} transition={{ duration: 0.6 }} className="h-9 rounded-lg" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Preview a brand">
        {BRANDS.map((x, k) => (
          <button
            key={x.name}
            type="button"
            aria-pressed={k === i}
            onClick={() => {
              setAuto(false);
              setI(k);
            }}
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13.5px] transition ${
              k === i ? 'border-ink text-ink shadow-[0_0_0_3px_var(--color-sunk)]' : 'border-line bg-paper text-ink-3'
            }`}
          >
            <i className="h-[9px] w-[9px] rounded-full" style={{ background: x.color }} />
            {x.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Security() {
  return (
    <section id="security" className="border-y border-line bg-paper px-[clamp(16px,4vw,40px)] py-[clamp(72px,10vw,128px)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(28px,5vw,72px)] lg:grid-cols-2">
        <div>
          <SectionHead
            eyebrow="Security & your brand"
            title="Your workspace, your brand, your data."
            lede="Every customer gets a private workspace on its own subdomain, with its own logo and colours. Your team signs in to your company, not to us."
          />
          <div className="mt-9 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="grid gap-1">
                <h3 className="flex items-center gap-2 text-[16px] font-semibold tracking-[-0.01em]">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-50 text-brand-600">
                    <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.12}>
          <BrandedLogin />
        </Reveal>
      </div>
    </section>
  );
}
