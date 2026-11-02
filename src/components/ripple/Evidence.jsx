import { motion, useReducedMotion } from 'motion/react';
import Reveal, { SectionHead } from '../site/Reveal.jsx';

const POINTS = [
  ['It uses tools', 'The report agent queries the run log with SQL and must cite the query behind every number it gives you.'],
  ['It checks its own work', 'A critic checks each number against its query, and an honesty check rejects any rewrite that invents claims or hides the price.'],
  ['It asks before it acts', 'Free, reversible steps go ahead on their own. Anything that spends or publishes is created paused, for you to approve.'],
];

// One reason followed back to where it came from. Example values.
const CHAIN = [
  { kind: 'Reason', body: 'Put off by the price', meta: '31% of people who scrolled past' },
  { kind: 'Quote', body: '“Looks good, but ₹180 for a cold coffee? I’ll stick to my usual.”', meta: 'person p0146 · action s1:A:204 · scrolled past' },
  { kind: 'Memory', body: 'Usually spends ₹100–150 at cafés, twice a week', meta: 'memory line m_0146_3' },
  { kind: 'Query', body: 'SELECT reason, count(*) FROM reactions WHERE draft = ’A’ …', meta: 'q_9 · run log', mono: true },
  { kind: 'Source', body: 'Age, income and habits sampled from public census and survey tables', meta: 'audience queries q_1–q_7' },
];

export default function Evidence() {
  const reduce = useReducedMotion();
  return (
    <section id="evidence" className="px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto grid max-w-[1180px] items-start gap-[clamp(28px,5vw,72px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="grid gap-8">
          <SectionHead
            eyebrow="Evidence"
            accent="text-ripple-600"
            title="Every reason has a receipt."
            lede="Ripple does not just score your post. Each reason it gives points back to the simulated person, the action, and the query it came from, so you can check it yourself."
          />
          <div className="grid gap-5">
            {POINTS.map(([t, b], i) => (
              <Reveal key={t} delay={0.1 + i * 0.06} className="grid gap-1 border-t border-line pt-3">
                <h3 className="text-[16px] font-semibold">{t}</h3>
                <p className="max-w-[52ch] text-[14.5px] leading-[1.55] text-muted">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="relative rounded-[22px] border border-line bg-paper p-[clamp(18px,3vw,28px)]">
          <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">Example · one reason, traced</span>
          <ol className="relative mt-4 grid gap-3">
            <span aria-hidden="true" className="absolute bottom-6 left-[11px] top-6 w-px bg-line-strong" />
            {CHAIN.map((c, i) => (
              <motion.li
                key={c.kind}
                initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.15 }}
                className="relative grid grid-cols-[24px_1fr] gap-3"
              >
                <span className={`mt-3 h-[23px] w-[23px] rounded-full border-4 border-paper ${i === 0 ? 'bg-ripple-600' : 'bg-ripple-300'}`} />
                <div className="rounded-xl border border-line bg-canvas px-3.5 py-2.5">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-ripple-700">{c.kind}</span>
                  <p className={`mt-0.5 leading-[1.45] text-ink ${c.mono ? 'font-mono text-[12px]' : 'text-[14px]'}`}>{c.body}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-muted">{c.meta}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
