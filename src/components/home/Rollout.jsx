import { motion } from 'motion/react';
import { SectionHead } from '../site/Reveal.jsx';

const STEPS = [
  { title: 'Set up your workspace', we: 'We create your workspace, subdomain and branding.', you: 'You pick your modules and industry template.' },
  { title: 'Bring your data in', we: 'We import leads, clients and contracts from your sheets.', you: 'You check that the numbers match.' },
  { title: 'Set roles and train', we: 'We run a hands-on session for each team.', you: 'You decide who can see and change what.' },
  { title: 'Go live', we: 'We stay on hand while you switch over.', you: 'You run the day in Nityavali.' },
];

export default function Rollout() {
  return (
    <section id="rollout" className="px-[clamp(16px,4vw,40px)] py-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          eyebrow="Rollout"
          title="Live in weeks, with us alongside you."
          lede="Every rollout follows the same four steps. Here is who does what."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="relative grid content-start gap-3 border-t-2 border-line pt-5"
            >
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.25 }}
                className="absolute -top-0.5 left-0 h-0.5 w-full origin-left bg-brand-600"
              />
              <span className="font-mono text-[12px] text-brand-600">Step {i + 1}</span>
              <h3 className="text-[18px] font-semibold tracking-[-0.015em]">{s.title}</h3>
              <dl className="grid gap-2 text-[14px] leading-[1.5]">
                <div className="grid grid-cols-[34px_1fr] gap-2">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">We</dt>
                  <dd className="m-0 text-ink-3">{s.we}</dd>
                </div>
                <div className="grid grid-cols-[34px_1fr] gap-2">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">You</dt>
                  <dd className="m-0 text-ink-3">{s.you}</dd>
                </div>
              </dl>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
