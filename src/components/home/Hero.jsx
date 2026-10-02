import { motion } from 'motion/react';
import ProductWindow from './ProductWindow.jsx';

const EASE = [0.22, 1, 0.36, 1];
const HEADLINE = ['Run', 'the', 'whole', 'business,', 'from', 'first', 'enquiry', 'to'];

const FACTS = ['Your logo and subdomain', 'Role-based access', '90/60/30-day renewal reminders'];

function FadeUp({ delay, className = '', children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Check({ className = 'text-brand-600' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const words = [...HEADLINE.map((w) => ({ w })), { w: 'renewal.', accent: true }];
  return (
    <section className="relative overflow-hidden px-[clamp(16px,4vw,40px)] pb-[clamp(56px,8vw,104px)] pt-[clamp(40px,7vw,88px)]">
      <div
        aria-hidden="true"
        className="glow-drift pointer-events-none absolute -right-[10%] -top-[20%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(30,148,132,0.16),transparent)]"
      />
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <FadeUp delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper py-1.5 pl-1.5 pr-3 text-[13px] text-ink-3">
              <span className="chip">v2.0</span>
              Nityavali, by Knord Technologies
            </span>
          </FadeUp>

          <h1 className="mt-5 text-[clamp(40px,6vw,68px)] font-bold leading-[1.04] tracking-[-0.035em]">
            {words.map(({ w, accent }, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: '0.45em', filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.07 }}
                className={`inline-block ${accent ? 'text-brand-600' : ''}`}
              >
                {w}
                {i < words.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </h1>

          <FadeUp delay={0.7}>
            <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-muted">
              Nityavali puts your leads, clients, projects, people, support and AMC contracts in one workspace, so
              nothing slips between sales and delivery.
            </p>
          </FadeUp>

          <FadeUp delay={0.85} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-brand-600 px-5 py-3 text-[15px] font-semibold text-on-ink shadow-[0_8px_20px_-10px_rgba(15,123,111,0.7)] transition hover:-translate-y-px hover:bg-brand-700"
            >
              Book a demo <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center rounded-[10px] border border-line bg-paper px-5 py-3 text-[15px] font-semibold transition hover:-translate-y-px hover:border-line-strong"
            >
              See how it works
            </a>
          </FadeUp>

          <FadeUp delay={1} className="mt-7 grid gap-3">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] text-muted">
              {FACTS.map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5">
                  <Check />
                  {f}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2.5 text-[13.5px] text-ink-3">
              <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-brand-600" />
              <span>
                <b className="font-semibold">250+ people</b> run their day in Nityavali.
              </span>
            </div>
          </FadeUp>
        </div>

        <ProductWindow />
      </div>
    </section>
  );
}
