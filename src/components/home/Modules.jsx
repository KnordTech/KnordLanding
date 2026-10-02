import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SectionHead } from '../site/Reveal.jsx';

// Module tiles. Each has a small live preview that starts once the tile is on screen,
// and a soft spotlight that follows the cursor.

function Heat() {
  return (
    <div className="heat absolute inset-3 grid grid-cols-12 gap-1">
      {Array.from({ length: 48 }, (_, i) => (
        <i key={i} style={{ '--i': i, '--o': (0.25 + ((i * 37) % 70) / 100).toFixed(2) }} />
      ))}
    </div>
  );
}

function Feed() {
  const rows = [
    <><b className="font-semibold text-brand-300">3 renewals</b> need a follow-up this week.</>,
    <><b className="font-semibold text-brand-300">PRJ-208</b> is 2 days behind on data migration.</>,
    <>Draft the reminder emails? <b className="font-semibold text-brand-300">Yes, draft them</b></>,
  ];
  return (
    <div className="feed absolute inset-x-3 top-2.5 grid content-start gap-1.5">
      {rows.map((r, i) => (
        <div key={i} style={{ '--i': i }} className="rounded-lg bg-on-ink/5 px-2.5 py-1.5 text-[11.5px] text-on-ink/65">
          {r}
        </div>
      ))}
    </div>
  );
}

function Attendance() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const people = ['Rahul', 'Neha', 'Vikram', 'Pooja'];
  let n = 0;
  return (
    <div className="att absolute inset-3 grid grid-cols-[56px_repeat(7,minmax(0,1fr))] items-center gap-1 font-mono text-[9.5px] text-muted">
      <span />
      {days.map((d, i) => (
        <span key={i} className="text-center">{d}</span>
      ))}
      {people.map((p, r) => (
        <div key={p} className="contents">
          <span>{p}</span>
          {days.map((_, k) => {
            const leave = (r === 1 && k === 3) || (r === 3 && k === 1);
            return <i key={k} className={k > 4 ? '' : leave ? 'l' : 'p'} style={{ '--i': n++ }} />;
          })}
        </div>
      ))}
    </div>
  );
}

function Invoice() {
  const rows = [
    ['Implementation · Milestone 2', '₹3,20,000'],
    ['CGST 9%', '₹28,800'],
    ['SGST 9%', '₹28,800'],
    ['Total', '₹3,77,600'],
  ];
  return (
    <div className="absolute inset-x-3 inset-y-2.5 grid gap-1 text-[11px] tabular-nums">
      {rows.map(([k, v], i) => (
        <div key={k} className={`flex justify-between gap-2 pb-1 ${i < 3 ? 'border-b border-dashed border-line' : 'font-bold text-brand-700'}`}>
          <span className={i < 3 ? 'text-muted' : ''}>{k}</span>
          <span>{v}</span>
        </div>
      ))}
    </div>
  );
}

function Burndown() {
  return (
    <svg viewBox="0 0 200 90" preserveAspectRatio="none" aria-hidden="true" className="burn absolute inset-2.5 h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-visible">
      <path d="M0 6 L200 84" fill="none" strokeWidth="1.5" strokeDasharray="4 4" className="stroke-line-strong" />
      <path className="real stroke-brand-600" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M0 6 L30 14 L55 18 L80 34 L105 40 L130 52 L160 66 L200 82" />
    </svg>
  );
}

function Bars() {
  const heights = [38, 52, 45, 63, 58, 74, 88];
  return (
    <div className="bars absolute inset-x-3.5 bottom-2.5 top-3.5 flex items-end gap-2">
      {heights.map((h, i) => (
        <i key={i} style={{ '--i': i, '--h': `${h}%` }} />
      ))}
    </div>
  );
}

function Roles() {
  const rows = [
    ['Admin', [1, 1, 1, 1]],
    ['Sales lead', [1, 1, 1, 0]],
    ['Engineer', [1, 1, 0, 0]],
    ['Viewer', [1, 0, 0, 0]],
  ];
  let m = 0;
  return (
    <div className="roles absolute inset-x-3 inset-y-2.5 grid gap-1 text-[10.5px]">
      <div className="grid grid-cols-[minmax(0,1fr)_repeat(4,22px)] gap-1 text-center font-mono text-[9px] text-on-ink/60">
        <span />
        <span>View</span>
        <span>Add</span>
        <span>Edit</span>
        <span>Del</span>
      </div>
      {rows.map(([role, perms]) => (
        <div key={role} className="grid grid-cols-[minmax(0,1fr)_repeat(4,22px)] items-center gap-1">
          <span className="truncate text-on-ink/60">{role}</span>
          {perms.map((p, k) => (
            <i key={k} className={p ? 'y' : ''} style={{ '--i': m++ }} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Integrations() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="flex flex-wrap justify-center gap-2 p-2.5">
        {['Google Calendar', 'Meta lead ads', 'Website forms', 'Email', 'Excel import', 'Razorpay'].map((n) => (
          <span key={n} className={`chip ${n === 'Excel import' ? 'plain' : ''}`}>{n}</span>
        ))}
      </div>
    </div>
  );
}

const TILES = [
  { title: 'Resources & utilisation', body: 'See who is free, who is overbooked and which skills you are short on, week by week.', Viz: Heat, wide: true },
  { title: 'Smart Assistant', body: 'Ask about your work in plain language and get the overdue, at-risk and due-soon items first.', Viz: Feed, wide: true, dark: true },
  { title: 'HR, leave & timesheets', body: 'Attendance, leave and timesheets next to the work, so capacity is real.', Viz: Attendance },
  { title: 'Billing schedules', body: 'Milestone and recurring invoices with GST worked out for you.', Viz: Invoice },
  { title: 'Sprints & dev work', body: 'Product teams plan sprints, track releases and route approvals.', Viz: Burndown },
  { title: 'Reports & dashboards', body: 'Sales, delivery, productivity and support numbers, per team or per person.', Viz: Bars },
  { title: 'Roles & access', body: 'Decide who can view, add, edit or delete in each module.', Viz: Roles, dark: true },
  { title: 'Integrations', body: 'Bring leads in and send invites out without copy-paste.', Viz: Integrations },
];

function Tile({ title, body, Viz, wide, dark, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      whileHover={{ y: -3 }}
      className={`spot relative grid min-w-0 content-start gap-2 overflow-hidden rounded-2xl border p-5 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_24px_40px_-30px_rgba(28,25,23,0.4)] ${
        wide ? 'lg:col-span-3' : 'lg:col-span-2'
      } ${dark ? 'dark border-ink bg-ink text-on-ink' : 'border-line bg-paper hover:border-line-strong'} ${inView ? 'in-view' : ''}`}
    >
      <div className={`relative mb-2.5 h-[108px] overflow-hidden rounded-[10px] border ${dark ? 'border-on-ink/10 bg-on-ink/[0.04]' : 'border-line bg-canvas'}`}>
        <Viz />
      </div>
      <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.015em]">{title}</h3>
      <p className={`text-[14px] leading-[1.55] ${dark ? 'text-on-ink/60' : 'text-muted'}`}>{body}</p>
    </motion.article>
  );
}

export default function Modules() {
  return (
    <section id="modules" className="px-[clamp(16px,4vw,40px)] py-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          eyebrow="Modules"
          title="Everything the operation needs, already connected."
          lede="Switch on the modules you use. Each one shares the same clients, people and permissions."
        />
        <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-6">
          {TILES.map((t, i) => (
            <Tile key={t.title} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
