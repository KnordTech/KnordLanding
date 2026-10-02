import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
import { SectionHead } from '../site/Reveal.jsx';
import { PANELS } from './StoryPanels.jsx';

const STEPS = [
  {
    stage: 'Lead',
    title: 'Capture every enquiry, wherever it starts.',
    body: 'Leads arrive from Meta lead ads, your website or a spreadsheet import. Each gets an owner, a score and a follow-up date.',
  },
  {
    stage: 'Deal',
    title: 'Move deals forward and convert in one click.',
    body: 'Drag deals across your own pipeline stages. When one is won, it becomes a client with its history attached.',
  },
  {
    stage: 'Delivery',
    title: 'Start projects from templates, not blank pages.',
    body: 'A project template creates the milestones and tasks for you. Allocate people by skill and watch progress roll up.',
  },
  {
    stage: 'Support',
    title: 'Keep support tied to the client and contract.',
    body: 'Tickets move from Open to Closed with an owner and a priority, and every one is linked to the client it belongs to.',
  },
  {
    stage: 'Renewal',
    title: 'Never miss a renewal again.',
    body: 'AMC contracts send reminders at 90, 60 and 30 days. Renew with one click and the new term starts where the old one ended.',
  },
];

// The page's one big moment: the section pins while you scroll, and scroll position picks
// the stage. Scrolling back up plays it in reverse.
export default function WorkflowStory() {
  const track = useRef(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: track, offset: ['start start', 'end end'] });
  const rail = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setStep(Math.min(STEPS.length - 1, Math.max(0, Math.floor(p * STEPS.length))));
  });

  const Panel = PANELS[step];

  return (
    <section id="workflow" className="px-[clamp(16px,4vw,40px)] pt-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          eyebrow="The workflow"
          title="One record follows the customer through every stage."
          lede="No exports between tools. The lead you capture today is the client, the project, the ticket and the renewal next year."
        />
      </div>

      <div ref={track} className="relative" style={{ height: `${STEPS.length * 80}vh` }}>
        <div className="sticky top-[60px] flex h-[calc(100vh-60px)] items-center">
          <div className="mx-auto grid w-full max-w-[1180px] items-center gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-[clamp(24px,5vw,72px)]">
            {/* Stage list */}
            <div className="relative order-2 pl-8 md:order-1">
              <div className="absolute bottom-2 left-[7px] top-2 w-0.5 rounded bg-line">
                <motion.div className="h-full w-full origin-top rounded bg-brand-600" style={{ scaleY: rail }} />
              </div>
              <ol className="grid gap-1">
                {STEPS.map((s, i) => {
                  const on = i === step;
                  return (
                    <li key={s.stage} className={`relative ${on ? '' : 'max-md:hidden'}`}>
                      <span
                        className={`absolute -left-8 top-[7px] h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                          i <= step ? 'border-brand-600 bg-brand-600 shadow-[0_0_0_5px_var(--color-brand-100)]' : 'border-line bg-canvas'
                        }`}
                      />
                      <div className={`transition-opacity duration-500 ${on ? 'opacity-100' : 'opacity-40'}`}>
                        <span className="font-mono text-[12px] tracking-[0.04em] text-brand-600">
                          Stage {i + 1} · {s.stage}
                        </span>
                        <h3 className={`font-bold tracking-[-0.02em] transition-all duration-500 ${on ? 'text-[clamp(22px,2.6vw,30px)] leading-[1.15]' : 'text-[17px] leading-snug'}`}>
                          {s.title}
                        </h3>
                        <AnimatePresence initial={false}>
                          {on ? (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                              className="max-w-[46ch] overflow-hidden pb-4 pt-2 text-[15.5px] leading-[1.6] text-muted"
                            >
                              {s.body}
                            </motion.p>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Product panel */}
            <div className="relative order-1 h-[clamp(340px,52vh,500px)] md:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 18, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.985 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 grid content-start gap-3.5 overflow-hidden rounded-[18px] border border-line bg-paper p-[clamp(16px,2.4vw,28px)] shadow-[0_30px_60px_-40px_rgba(28,25,23,0.35)]"
                  aria-live="polite"
                >
                  <Panel />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
