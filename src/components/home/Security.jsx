import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Reveal, { SectionHead } from '../site/Reveal.jsx';

const ICONS = {
  lock: <><rect x="4" y="9" width="12" height="8" rx="2" fill="currentColor" /><path d="M7 9 V6.5 A3 3 0 0 1 13 6.5 V9" fill="none" stroke="currentColor" strokeWidth="2" /></>,
  person: <><circle cx="10" cy="7" r="3" fill="currentColor" /><path d="M4 17 C4 13 7 11 10 11 C13 11 16 13 16 17 Z" fill="currentColor" /></>,
  pin: <><path d="M10 2 C14 2 16 5 16 8 C16 12 10 18 10 18 C10 18 4 12 4 8 C4 5 6 2 10 2 Z" fill="currentColor" /><circle cx="10" cy="8" r="2.2" fill="#fff" /></>,
  history: <><path d="M10 3 A7 7 0 1 1 3 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /><path d="M3 5 V10 H8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></>,
};

const POINTS = [
  { title: 'A private workspace per company', body: 'Your data lives in your own workspace. Nobody outside your company can see it.', icon: 'lock', tone: 'bg-sky-bg text-sky' },
  { title: 'Access down to each action', body: 'Roles decide who can view, add, edit or delete, module by module.', icon: 'person', tone: 'bg-violet-bg text-violet' },
  { title: 'Hosted in India', body: 'Runs on AWS in Mumbai, so your data stays in the country.', icon: 'pin', tone: 'bg-amber-bg text-amber' },
  { title: 'Backups and an audit trail', body: 'The database is backed up before every update, and changes are logged with who made them.', icon: 'history', tone: 'bg-teal-bg text-brand-600' },
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
                <h3 className="flex items-center gap-3 text-[16px] font-semibold tracking-[-0.01em]">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${p.tone}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                      {ICONS[p.icon]}
                    </svg>
                  </span>
                  {p.title}
                </h3>
                <p className="pl-[52px] text-[14.5px] leading-[1.55] text-muted">{p.body}</p>
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
