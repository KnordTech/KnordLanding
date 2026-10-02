import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import CountUp from '../site/CountUp.jsx';
import { NityavaliMark } from '../site/Marks.jsx';

// A coded, animated stand-in for the Nityavali dashboard. All figures are examples.
// Each tile wears its area's colour (sales = sky, projects = violet, people = amber, renewals = teal).
const STATS = [
  { label: 'Open pipeline', prefix: '₹', to: 4.2, decimals: 1, suffix: 'Cr', note: '+18% MoM', tone: 'bg-sky-bg text-sky', value: 'text-sky-deep' },
  { label: 'Active projects', to: 37, note: '5 go-live', tone: 'bg-violet-bg text-violet', value: 'text-violet-deep' },
  { label: 'Utilisation', to: 86, suffix: '%', note: '+4 pts', tone: 'bg-amber-bg text-amber', value: 'text-amber-deep' },
  { label: 'Renewals due', to: 12, note: 'next 30 days', tone: 'bg-teal-bg text-brand-600', value: 'text-teal-deep' },
];

const ASSISTANT_LINES = [
  '3 renewals need a follow-up this week. Want me to draft the reminder emails?',
  'PRJ-208 is 2 days behind on data migration. Neha has capacity on Thursday.',
  'Sunrise Clinics opened 2 high-priority tickets today. Both are assigned.',
];

const SIDEBAR = [
  ['Work', ['Dashboard', 'My tasks', 'Calendar']],
  ['Sales', ['Leads', 'Pipeline', 'Clients']],
  ['Delivery', ['Projects', 'Resources', 'Support', 'AMC']],
];

function TypingLine() {
  const reduce = useReducedMotion();
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(reduce ? ASSISTANT_LINES[0].length : 0);
  const text = ASSISTANT_LINES[line];

  useEffect(() => {
    if (reduce) return undefined;
    if (chars < text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), chars === 0 ? 1500 : 22 + Math.random() * 30);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLine((l) => (l + 1) % ASSISTANT_LINES.length);
      setChars(0);
    }, 3200);
    return () => clearTimeout(t);
  }, [chars, text, reduce]);

  return (
    <p className="min-h-[2.9em] text-[11.5px] text-on-ink/60">
      {text.slice(0, chars)}
      <span className="caret" aria-hidden="true" />
    </p>
  );
}

export default function ProductWindow() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_40px_80px_-40px_rgba(28,25,23,0.35),0_18px_36px_-24px_rgba(28,25,23,0.2)]"
      aria-label="Preview of the Nityavali dashboard"
    >
      <div className="flex items-center gap-2 border-b border-line bg-canvas px-3.5 py-2.5">
        {[0, 1, 2].map((i) => (
          <i key={i} className="block h-2.5 w-2.5 rounded-full bg-line" />
        ))}
        <span className="ml-2.5 min-w-0 truncate rounded-md border border-line bg-paper px-2.5 py-0.5 font-mono text-[11.5px] text-muted">
          yourcompany.nityavali.com/dashboard
        </span>
      </div>

      <div className="grid min-h-[420px] sm:grid-cols-[148px_minmax(0,1fr)]">
        <aside className="hidden content-start gap-0.5 bg-ink px-2.5 py-3.5 text-[12px] text-on-ink/60 sm:grid" aria-hidden="true">
          <div className="flex items-center gap-2 px-1.5 pb-3.5 text-[11px] font-bold tracking-[0.12em] text-on-ink">
            <NityavaliMark size={20} />
            NITYAVALI
          </div>
          {SIDEBAR.map(([group, items]) => (
            <div key={group} className="grid gap-0.5">
              <div className="px-2 pb-1 pt-2.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-on-ink/40">{group}</div>
              {items.map((item) => (
                <span
                  key={item}
                  className={`flex items-center gap-2 rounded-[7px] px-2 py-1.5 ${item === 'Dashboard' ? 'bg-on-ink/10 text-on-ink' : ''}`}
                >
                  {item === 'Dashboard' ? <span className="-ml-1 h-3.5 w-[3px] rounded bg-brand-300" /> : null}
                  {item}
                </span>
              ))}
            </div>
          ))}
        </aside>

        <div className="grid min-w-0 content-start gap-3 bg-canvas p-4">
          <div className="flex items-baseline justify-between gap-2">
            <b className="text-[15px] tracking-[-0.01em]">Good morning, Priya</b>
            <span className="font-mono text-[11.5px] text-muted">Thu · 2 Oct</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className={`min-w-0 rounded-[10px] p-2.5 ${s.tone}`}>
                <div className="truncate text-[10.5px]">{s.label}</div>
                <div className={`mt-0.5 text-[19px] font-bold tracking-[-0.02em] tabular-nums ${s.value}`}>
                  {s.prefix}
                  <CountUp to={s.to} decimals={s.decimals || 0} delay={0.7} />
                  {s.suffix}
                </div>
                <div className="font-mono text-[10.5px] opacity-80">{s.note}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-2.5 sm:grid-cols-[1.25fr_1fr]">
            <div className="min-w-0 rounded-[10px] border border-line bg-paper p-2.5">
              <div className="mb-2 flex justify-between text-[11px] font-semibold text-ink-3">
                Sales pipeline <span className="font-mono text-[10px] font-normal text-muted">drag to move</span>
              </div>
              <div className="kan">
                <div className="kcol">
                  <h6>Proposal</h6>
                  <div className="kcard">Sunrise Clinics<em>₹18L</em></div>
                </div>
                <div className="kcol">
                  <h6>Negotiation</h6>
                  <div className="kcard">Arcline Infra<em>₹42L</em></div>
                </div>
                <div className="kcol">
                  <h6>Won</h6>
                </div>
                <div className="kcard kmove">
                  Northfield School<em>₹26L · AMC</em>
                </div>
              </div>
            </div>
            <div className="mini-chart min-w-0 rounded-[10px] border border-line bg-paper p-2.5">
              <div className="mb-2 flex justify-between text-[11px] font-semibold text-ink-3">
                Revenue <span className="font-mono text-[10px] font-normal text-muted">last 8 weeks</span>
              </div>
              <svg viewBox="0 0 200 104" role="img" aria-label="Revenue trending up over eight weeks">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1E9484" stopOpacity=".25" />
                    <stop offset="1" stopColor="#1E9484" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g className="grid">
                  <line x1="0" y1="20" x2="200" y2="20" />
                  <line x1="0" y1="50" x2="200" y2="50" />
                  <line x1="0" y1="80" x2="200" y2="80" />
                </g>
                <path className="area" d="M4 78 L31 70 L58 74 L85 58 L112 60 L139 44 L166 36 L194 22 L194 90 L4 90 Z" />
                <polyline className="ln" points="4,78 31,70 58,74 85,58 112,60 139,44 166,36 194,22" />
                <circle className="dot" cx="194" cy="22" r="3.5" />
                <text x="4" y="102">W1</text>
                <text x="182" y="102">W8</text>
              </svg>
            </div>
          </div>

          <div className="flex items-start gap-2.5 rounded-[10px] bg-ink px-3 py-2.5 text-on-ink">
            <span className="orb" aria-hidden="true" />
            <div>
              <b className="block text-[11.5px]">Smart Assistant</b>
              <TypingLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
