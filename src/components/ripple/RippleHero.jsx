import { Fragment } from 'react';
import { motion } from 'motion/react';
import VerdictCard from './VerdictCard.jsx';

const EASE = [0.22, 1, 0.36, 1];
const HEADLINE = ['Know', 'how', 'people', 'will', 'react', 'before', 'you'];

function FadeUp({ delay, className = '', children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function RippleHero() {
  const words = [...HEADLINE.map((w) => ({ w })), { w: 'post.', accent: true }];

  return (
    <section className="relative overflow-hidden px-[clamp(16px,4vw,40px)] pt-[clamp(48px,7vw,88px)]">
      <div aria-hidden="true" className="glow-drift pointer-events-none absolute -right-[10%] -top-[20%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(139,108,240,0.16),transparent)]" />
      <div aria-hidden="true" className="glow-drift pointer-events-none absolute -left-[12%] top-[10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(232,119,26,0.08),transparent)] [animation-duration:22s]" />

      <div className="relative z-[2] mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
        <FadeUp delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper py-1.5 pl-1.5 pr-3 text-[13px] text-ink-3">
            <span className="rounded-full bg-ripple-100 px-2 py-0.5 font-mono text-[11px] font-medium text-ripple-700">Early access</span>
            Ripple, by Knord Technologies
          </span>
        </FadeUp>

        <h1 className="text-[clamp(40px,6vw,70px)] font-bold leading-[1.02] tracking-[-0.04em]">
          {words.map(({ w, accent }, i) => (
            <Fragment key={i}>
              <motion.span
                initial={{ opacity: 0, y: '0.45em', filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.07 }}
                className={`inline-block ${accent ? 'text-ripple-600' : ''}`}
              >
                {w}
              </motion.span>
              {i < words.length - 1 ? ' ' : ''}
            </Fragment>
          ))}
        </h1>

        <FadeUp delay={0.7}>
          <p className="max-w-[56ch] text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-muted">
            Ripple shows your drafts to a simulated audience built from real census and survey data. It tells you who
            responds, who scrolls past and why, with the evidence behind every reason.
          </p>
        </FadeUp>

        <FadeUp delay={0.85} className="flex flex-wrap justify-center gap-3">
          <a
            href="#early-access"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-ripple-600 px-5 py-3 text-[15px] font-semibold text-on-ink shadow-[0_8px_20px_-10px_rgba(106,74,214,0.7)] transition hover:-translate-y-px hover:bg-ripple-700"
          >
            Get early access <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#how" className="inline-flex items-center rounded-[10px] border border-line bg-paper px-5 py-3 text-[15px] font-semibold transition hover:-translate-y-px hover:border-line-strong">
            See how it works
          </a>
        </FadeUp>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
        className="relative z-[1] mx-auto mt-14 max-w-[1040px]"
      >
        <VerdictCard />
      </motion.div>
      <div className="h-[clamp(40px,6vw,80px)]" />
    </section>
  );
}
