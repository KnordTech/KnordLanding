import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import Reveal, { Eyebrow } from '../site/Reveal.jsx';

const STEPS = [
  { title: 'Set up your workspace', body: 'Your subdomain, logo, teams and industry template.', color: '#1D5FB8', bg: 'bg-sky-bg', text: 'text-sky' },
  { title: 'Bring your data in', body: 'Leads, clients and contracts from your spreadsheets.', color: '#6941C6', bg: 'bg-violet-bg', text: 'text-violet', note: { text: 'we do the import for you!', tone: 'bg-amber-bg text-amber-deep', rotate: -3, at: 0.45 } },
  { title: 'Set roles and train', body: 'Decide who sees what, then a hands-on session per team.', color: '#B25E09', bg: 'bg-amber-bg', text: 'text-amber' },
  { title: 'Go live', body: 'Switch over, with the people who built it on hand.', color: '#0F7B6F', bg: 'bg-teal-bg', text: 'text-brand-600', note: { text: 'and we stick around after', tone: 'bg-teal-bg text-teal-deep', rotate: 3, at: 0.85 } },
];

// The one hand-drawn moment on the page: a line that draws itself through the steps as
// you scroll, with sticky notes popping on when it reaches them.
function StickyNote({ note, progress, reduce }) {
  const opacity = useTransform(progress, [note.at - 0.06, note.at], reduce ? [1, 1] : [0, 1]);
  const scale = useTransform(progress, [note.at - 0.06, note.at], reduce ? [1, 1] : [0.6, 1]);
  return (
    <motion.div
      style={{ opacity, scale, rotate: note.rotate }}
      className={`mt-3 justify-self-start rounded-[4px] px-3 py-2.5 font-[family-name:var(--font-hand)] text-[22px] leading-[1.1] shadow-[0_10px_20px_-12px_rgba(28,25,23,0.45)] ${note.tone}`}
    >
      {note.text}
    </motion.div>
  );
}

export default function Rollout() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const pathLength = useTransform(smooth, [0, 1], reduce ? [1, 1] : [0, 1]);

  return (
    <section id="rollout" ref={ref} className="px-[clamp(16px,4vw,40px)] py-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="grid max-w-[760px] gap-3.5">
          <Eyebrow>Rollout</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,48px)] font-bold leading-[1.08] tracking-[-0.025em]">
            Live in{' '}
            <span className="relative inline-block">
              weeks
              <svg width="100%" height="18" viewBox="0 0 140 18" preserveAspectRatio="none" aria-hidden="true" className="absolute -bottom-2.5 left-0">
                <motion.path
                  d="M3 12 C 35 4, 70 16, 100 7 S 132 10, 137 8"
                  fill="none"
                  stroke="#E8771A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                />
              </svg>
            </span>
            , with us alongside you.
          </h2>
          <p className="max-w-[60ch] text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-muted">Every rollout follows the same four steps.</p>
        </Reveal>

        <div className="relative mt-14">
          {/* hand-drawn connector (desktop only) */}
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-x-0 top-1 hidden h-[60px] w-full lg:block">
            <motion.path
              d="M125 30 C 210 -5, 290 65, 375 30 S 540 -5, 625 30 S 790 65, 875 30"
              fill="none"
              stroke="#1C1917"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </svg>

          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="grid content-start justify-items-start gap-2 lg:justify-items-center lg:text-center">
                <span
                  className={`grid h-[60px] w-[60px] place-items-center rounded-2xl text-[20px] font-bold ${s.bg} ${s.text} ring-4 ring-canvas`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 text-[19px] font-semibold tracking-[-0.015em]">{s.title}</h3>
                <p className="max-w-[30ch] text-[14.5px] leading-[1.55] text-muted">{s.body}</p>
                {s.note ? <StickyNote note={s.note} progress={smooth} reduce={reduce} /> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
