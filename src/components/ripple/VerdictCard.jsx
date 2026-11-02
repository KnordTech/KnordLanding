import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

// An example A/B result in the shape Ripple reports it. The café, drafts and numbers are
// examples, not a customer.
const DRAFTS = [
  {
    id: 'A',
    label: 'Product-first',
    caption: 'Our new cold filter-coffee tonic is here. Bright, fizzy, made fresh every morning. ₹180.',
    intent: 24.8,
    tone: 'bg-ripple-600',
    leads: true,
  },
  {
    id: 'B',
    label: 'Story-first',
    caption: 'Every morning in Mysuru, Paati brewed filter coffee for the whole street. We made it cold. ₹180.',
    intent: 23.4,
    tone: 'bg-ripple-300',
  },
];

const REASONS = [
  { text: 'Put off by the price', share: '31%', receipt: 'action s1:A:204 · q_9' },
  { text: 'Want to try it with friends', share: '22%', receipt: 'action s2:A:077 · q_12' },
  { text: 'Story felt like an ad', share: '14%', receipt: 'action s1:B:131 · q_9' },
];

function Post({ draft, delay }) {
  const reduce = useReducedMotion();
  return (
    <div className={`grid min-w-0 grid-cols-[minmax(0,1fr)] gap-3 rounded-2xl border bg-paper p-4 ${draft.leads ? 'border-ripple-300' : 'border-line'}`}>
      <div className="flex items-center gap-2">
        <span className={`grid h-7 w-7 place-items-center rounded-lg text-[13px] font-bold text-on-ink ${draft.tone}`}>{draft.id}</span>
        <b className="text-[14px]">{draft.label}</b>
        {draft.leads ? <span className="ml-auto rounded-full bg-ripple-50 px-2 py-0.5 font-mono text-[10.5px] text-ripple-700">Leads</span> : null}
      </div>
      <div aria-hidden="true" className="aspect-[16/9] rounded-xl bg-[linear-gradient(135deg,#f3e3cf,#e9c9a3_45%,#c98f5a)]">
        <div className="flex h-full items-end p-3">
          <span className="rounded-md bg-paper/85 px-2 py-1 font-mono text-[10.5px] text-ink-3">@kaapicorner · Instagram</span>
        </div>
      </div>
      <p className="text-[13px] leading-[1.5] text-ink-3">{draft.caption}</p>
      <div>
        <div className="flex items-baseline justify-between text-[12px] text-muted">
          <span>Intent to visit</span>
          <b className="text-[18px] text-ink">{draft.intent}%</b>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-sunk">
          <motion.div
            className={`h-full rounded-full ${draft.tone}`}
            initial={{ width: reduce ? `${draft.intent * 3}%` : 0 }}
            animate={{ width: `${draft.intent * 3}%` }}
            transition={{ duration: 1.4, ease: EASE, delay }}
          />
        </div>
      </div>
    </div>
  );
}

export default function VerdictCard() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-line bg-canvas shadow-[0_40px_80px_-48px_rgba(28,25,23,0.45)]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-line bg-paper px-5 py-3 text-[12.5px] text-muted">
        <span className="h-2 w-2 rounded-full bg-ripple-500" />
        <b className="text-ink">Example run</b>
        <span>Kaapi Corner, Bengaluru</span>
        <span className="hidden sm:inline">·</span>
        <span>600 simulated people · 2 seeds</span>
      </div>

      <div className="grid gap-4 p-[clamp(14px,2.4vw,24px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.95fr)]">
        {DRAFTS.map((d, i) => (
          <Post key={d.id} draft={d} delay={1 + i * 0.2} />
        ))}

        <div className="grid content-start gap-3 rounded-2xl bg-ink p-4 text-on-ink">
          <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-on-ink/50">Verdict</span>
          <p className="text-[15px] font-semibold leading-[1.4]">A leads on intent to visit, but not by enough to call it a win.</p>
          <p className="font-mono text-[11.5px] leading-[1.55] text-on-ink/60">
            +1.4 pts · 95% CI −3.7 to +6.5
            <br />A ahead in 2 of 2 seeds
          </p>
          <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-on-ink/50">Why people held back</span>
          <ul className="grid gap-2">
            {REASONS.map((r, i) => (
              <motion.li
                key={r.text}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 1.6 + i * 0.25 }}
                className="grid gap-0.5 rounded-xl bg-on-ink/[0.06] px-3 py-2"
              >
                <span className="flex justify-between gap-2 text-[13px]">
                  {r.text} <b className="text-ripple-300">{r.share}</b>
                </span>
                <span className="font-mono text-[10.5px] text-on-ink/45">{r.receipt}</span>
              </motion.li>
            ))}
          </ul>
          <p className="text-[12.5px] leading-[1.5] text-on-ink/60">Next: a Version C that gives the price a reason, drafted for you to approve.</p>
        </div>
      </div>
    </div>
  );
}
