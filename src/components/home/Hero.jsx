import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import ProductWindow from './ProductWindow.jsx';

const EASE = [0.22, 1, 0.36, 1];
const HEADLINE = ['Run', 'the', 'whole', 'business,', 'from', 'first', 'enquiry', 'to'];

export function Check({ className = 'text-brand-600' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FadeUp({ delay, className = '', children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay }} className={className}>
      {children}
    </motion.div>
  );
}

// Product snippets floating around the headline. `depth` sets how fast each one drifts
// away as the page scrolls (a light parallax). Hidden below lg, where they would cover text.
function Snippet({ progress, depth, rotate, className, delay, children }) {
  const y = useTransform(progress, [0, 1], [0, -depth]);
  return (
    <motion.div
      aria-hidden="true"
      style={{ y }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={`absolute z-[1] hidden lg:block ${className}`}
    >
      <div className="float-soft" style={{ '--r': `${rotate}deg`, animationDelay: `${-delay * 3}s` }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  // The window starts tipped back and low, then rises and straightens as you scroll.
  const rotateX = useTransform(progress, [0, 0.45], reduce ? [0, 0] : [16, 0]);
  const winY = useTransform(progress, [0, 0.45], reduce ? [0, 0] : [40, -10]);
  const scale = useTransform(progress, [0, 0.45], reduce ? [1, 1] : [0.94, 1]);

  const words = [...HEADLINE.map((w) => ({ w })), { w: 'renewal.', accent: true }];

  return (
    <section ref={ref} className="relative overflow-hidden px-[clamp(16px,4vw,40px)] pt-[clamp(48px,7vw,88px)]">
      <div aria-hidden="true" className="glow-drift pointer-events-none absolute -right-[10%] -top-[20%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(30,148,132,0.14),transparent)]" />
      <div aria-hidden="true" className="glow-drift pointer-events-none absolute -left-[12%] top-[10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(29,95,184,0.10),transparent)] [animation-duration:22s]" />

      <div className="relative z-[2] mx-auto flex max-w-[740px] flex-col items-center gap-5 text-center">
        <FadeUp delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper py-1.5 pl-1.5 pr-3 text-[13px] text-ink-3">
            <span className="chip">v2.0</span>
            Nityavali, by Knord Technologies
          </span>
        </FadeUp>

        <h1 className="text-[clamp(40px,6vw,70px)] font-bold leading-[1.02] tracking-[-0.04em]">
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
          <p className="max-w-[54ch] text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-muted">
            Leads, clients, projects, people, support and AMC contracts in one workspace, so nothing slips between sales and
            delivery.
          </p>
        </FadeUp>

        <FadeUp delay={0.85} className="flex flex-wrap justify-center gap-3">
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-brand-600 px-5 py-3 text-[15px] font-semibold text-on-ink shadow-[0_8px_20px_-10px_rgba(15,123,111,0.7)] transition hover:-translate-y-px hover:bg-brand-700"
          >
            Book a demo <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#workflow" className="inline-flex items-center rounded-[10px] border border-line bg-paper px-5 py-3 text-[15px] font-semibold transition hover:-translate-y-px hover:border-line-strong">
            See how it works
          </a>
        </FadeUp>

        <FadeUp delay={1} className="flex items-center gap-2.5 text-[13.5px] text-ink-3">
          <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-brand-600" />
          <span>
            <b className="font-semibold">250+ people</b> run their day in Nityavali
          </span>
        </FadeUp>
      </div>

      {/* Floating snippets: one per area colour. All values are examples. */}
      <Snippet progress={progress} depth={160} rotate={-4} delay={1.1} className="left-[max(16px,calc(50%-610px))] top-[110px]">
        <div className="grid w-[220px] gap-1.5 rounded-2xl border border-line bg-paper p-3.5 shadow-[0_20px_40px_-24px_rgba(28,25,23,0.35)]">
          <div className="flex items-center gap-2">
            <span className="grid h-[26px] w-[26px] place-items-center rounded-lg bg-sky-bg font-bold text-sky">↘</span>
            <b className="text-[13px]">New lead</b>
            <span className="ml-auto rounded-full bg-sky-bg px-1.5 py-0.5 font-mono text-[10px] text-sky">Meta ad</span>
          </div>
          <div className="text-[14px] font-semibold">Sunrise Clinics</div>
          <div className="text-[12px] text-muted">4 sites · asked for a demo</div>
        </div>
      </Snippet>
      <Snippet progress={progress} depth={90} rotate={3} delay={1.25} className="left-[max(40px,calc(50%-570px))] top-[330px]">
        <div className="w-[200px] rounded-2xl bg-violet-bg p-3.5 text-[13px] text-violet-deep">
          <b>Neha</b> assigned you <b>Data migration</b> on PRJ-208
        </div>
      </Snippet>
      <Snippet progress={progress} depth={140} rotate={4} delay={1.15} className="right-[max(16px,calc(50%-610px))] top-[100px]">
        <div className="flex w-[230px] items-center gap-3 rounded-2xl bg-ink p-3.5 text-on-ink">
          <svg width="50" height="50" viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(250,249,246,0.12)" strokeWidth="6" />
            <circle cx="28" cy="28" r="22" fill="none" stroke="#8FD0C4" strokeWidth="6" strokeLinecap="round" strokeDasharray="138" strokeDashoffset="92" transform="rotate(-90 28 28)" />
          </svg>
          <div>
            <div className="text-[20px] font-bold">30 days</div>
            <div className="text-[12px] text-on-ink/60">AMC renewal · ₹4.8L</div>
          </div>
        </div>
      </Snippet>
      <Snippet progress={progress} depth={70} rotate={-3} delay={1.3} className="right-[max(40px,calc(50%-580px))] top-[310px]">
        <div className="grid w-[190px] gap-1.5 rounded-2xl bg-coral-bg p-3.5">
          <span className="font-mono text-[11px] text-coral">TK-311</span>
          <div className="text-[13px] font-semibold text-coral-deep">Lab report export fails</div>
          <span className="justify-self-start rounded-full bg-paper px-2.5 py-0.5 text-[11px] font-semibold text-coral">Resolved in 4h</span>
        </div>
      </Snippet>

      {/* Product window rising from below */}
      <div className="relative z-[1] mx-auto mt-14 max-w-[1040px] [perspective:1600px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
        >
          <motion.div style={{ rotateX, y: winY, scale, transformOrigin: 'center top' }}>
            <ProductWindow />
          </motion.div>
        </motion.div>
      </div>
      <div className="h-[clamp(40px,6vw,80px)]" />
    </section>
  );
}
