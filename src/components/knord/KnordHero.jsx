import { Fragment } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];
const HEADLINE = ['Software', 'for', 'the', 'businesses', 'that'];

function FadeUp({ delay, className = '', children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function KnordHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-[clamp(16px,4vw,40px)] pb-[clamp(40px,6vw,72px)] pt-[clamp(56px,8vw,104px)]">
      <div aria-hidden="true" className="glow-drift pointer-events-none absolute -right-[10%] -top-[20%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(35,71,201,0.12),transparent)]" />
      <div aria-hidden="true" className="glow-drift pointer-events-none absolute -left-[12%] top-[20%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(232,119,26,0.10),transparent)] [animation-duration:22s]" />

      <div className="relative mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
        <FadeUp delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-[13px] text-ink-3">
            <span className="h-1.5 w-1.5 rounded-full bg-spark" />
            Knord Technologies · India
          </span>
        </FadeUp>

        <h1 className="text-[clamp(40px,6.2vw,74px)] font-bold leading-[1.02] tracking-[-0.04em]">
          {HEADLINE.map((w, i) => (
            <Fragment key={w}>
              <motion.span
                initial={{ opacity: 0, y: '0.45em', filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.07 }}
                className="inline-block"
              >
                {w}
              </motion.span>{' '}
            </Fragment>
          ))}
          <motion.span
            initial={{ opacity: 0, y: '0.45em', filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="relative inline-block text-knord"
          >
            keep things running.
            <svg width="100%" height="18" viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true" className="absolute -bottom-3 left-0">
              <motion.path
                d="M4 12 C 70 4, 150 16, 220 7 S 290 10, 296 8"
                fill="none"
                stroke="#E8771A"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 1.1 }}
              />
            </svg>
          </motion.span>
        </h1>

        <FadeUp delay={0.8}>
          <p className="max-w-[58ch] text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-muted">
            Knord is an India-based software company. We build focused products for growing businesses: one to run the
            whole operation, one to test what you post before it goes out.
          </p>
        </FadeUp>

        <FadeUp delay={0.95} className="flex flex-wrap justify-center gap-3">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-ink px-5 py-3 text-[15px] font-semibold text-on-ink transition hover:-translate-y-px hover:bg-ink-2"
          >
            See our products <span className="transition-transform group-hover:translate-x-0.5">↓</span>
          </a>
          <a href="#contact" className="inline-flex items-center rounded-[10px] border border-line bg-paper px-5 py-3 text-[15px] font-semibold transition hover:-translate-y-px hover:border-line-strong">
            Talk to us
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
