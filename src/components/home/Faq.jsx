import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Reveal, { SectionHead } from '../site/Reveal.jsx';

const QA = [
  ['Can we use only some of the modules?', 'Yes. Each workspace switches modules on and off, and your plan sets limits on users and records.'],
  ['Is our data separate from other customers?', 'Yes. Every company gets its own workspace, and each user only sees what their role allows.'],
  ['Can we bring data from Excel?', 'Yes. Leads, clients and contracts can be imported, and we help clean them up during rollout.'],
  ['Does it fit our industry?', 'Templates for healthcare, education, construction, software and services set up the right fields. You can add your own on top.'],
  ['How long does rollout take?', 'Most teams are live within a few weeks. It depends on how much data you bring and how many teams need training.'],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto grid max-w-[1180px] gap-[clamp(28px,5vw,72px)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <SectionHead eyebrow="Questions" title="Things teams ask before they switch." />
        <Reveal delay={0.1} className="border-t border-line">
          {QA.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 bg-transparent py-5 text-left text-[17px] font-semibold"
                >
                  {q}
                  <span className={`relative h-7 w-7 shrink-0 rounded-lg border border-line transition-colors ${isOpen ? 'bg-sunk' : ''}`} aria-hidden="true">
                    <span className="absolute left-1/2 top-1/2 h-[1.6px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded bg-ink" />
                    <span
                      className={`absolute left-1/2 top-1/2 h-[1.6px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded bg-ink transition-transform duration-300 ${
                        isOpen ? '' : 'rotate-90'
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="max-w-[62ch] overflow-hidden pb-5 text-[15.5px] leading-[1.6] text-muted"
                    >
                      {a}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
