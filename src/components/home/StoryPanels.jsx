import { useEffect, useState } from 'react';
import { animate, useReducedMotion } from 'motion/react';

// The five product panels of the workflow story. Each one plays its CSS animations when it
// mounts, so it replays whenever the reader scrolls back to that stage. Figures are examples.

function useTween(from, to, duration = 1.3, delay = 0) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : from);
  useEffect(() => {
    if (reduce) return undefined;
    const c = animate(from, to, { duration, delay, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setValue(Math.round(v)) });
    return () => c.stop();
  }, [from, to, duration, delay, reduce]);
  return value;
}

function Head({ title, chip, tone = '' }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <b className="text-[15px]">{title}</b>
      <span className={`chip ${tone}`}>{chip}</span>
    </div>
  );
}

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeadPanel() {
  const score = useTween(0, 82, 1.3, 0.2);
  const rows = [
    ['↘', 'Lead captured from a Meta lead ad', '09:12'],
    ['☎', 'Intro call logged by Rahul', '11:40'],
    ['◷', 'Demo booked, invite sent to calendar', 'Fri'],
  ];
  return (
    <>
      <Head title="LD-1042 · Sunrise Clinics" chip="New lead" />
      <div className="grid grid-cols-3 gap-2.5">
        {[['Source', 'Meta ad'], ['Owner', 'Rahul S.'], ['Value', '₹18L']].map(([k, v]) => (
          <div key={k} className="min-w-0 rounded-[10px] border border-line bg-canvas px-3 py-2.5">
            <span className="block text-[11px] text-muted">{k}</span>
            <b className="text-[15px] tabular-nums">{v}</b>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-xl bg-ink p-3 text-on-ink">
        <div className="score-ring" style={{ '--v': score }}>
          <b className="grid h-9 w-9 place-items-center rounded-full bg-ink text-[13px] tabular-nums">{score}</b>
        </div>
        <p className="text-[13px] text-on-ink/60">
          <strong className="font-semibold text-on-ink">Lead score.</strong> Clinic chain, 4 sites, asked for a demo
          within a day.
        </p>
      </div>
      <div className="grid gap-2.5">
        {rows.map(([icon, text, when], i) => (
          <div key={text} className="tl grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-2.5 text-[13.5px]" style={{ '--i': i }}>
            <i className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-[13px] not-italic text-brand-600">{icon}</i>
            <span>{text}</span>
            <small className="font-mono text-[11px] text-muted">{when}</small>
          </div>
        ))}
      </div>
    </>
  );
}

function DealPanel() {
  return (
    <>
      <Head title="Sales pipeline" chip="This quarter · ₹4.2Cr" tone="plain" />
      <div className="pipe">
        <div className="pcol">
          <h6>Qualified <span>3</span></h6>
          <div className="pcard">Delta Labs<em>₹9L</em></div>
          <div className="pcard hot">Sunrise Clinics<em>₹18L</em></div>
        </div>
        <div className="pcol">
          <h6>Proposal <span>2</span></h6>
          <div className="pcard">Arcline Infra<em>₹42L</em></div>
        </div>
        <div className="pcol">
          <h6>Won <span>4</span></h6>
        </div>
        <div className="pcol">
          <h6>Lost <span>1</span></h6>
          <div className="pcard">Orbit Retail<em>₹6L</em></div>
        </div>
      </div>
      <div className="toast-in flex items-center gap-2.5 rounded-xl bg-ink px-3.5 py-3 text-[13px] text-on-ink">
        <i className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 not-italic">✓</i>
        <span>
          <b>Sunrise Clinics</b> converted to a client. Contacts, notes and files came with it.
        </span>
      </div>
    </>
  );
}

function DeliveryPanel() {
  const milestones = [
    ['Kick-off and requirements', '6 tasks', true],
    ['Data migration', '9 tasks', true],
    ['Staff training', '4 tasks', true],
    ['Go-live and handover', 'Due 24 Oct', false],
  ];
  return (
    <>
      <Head title="PRJ-208 · Sunrise Clinics rollout" chip="On track" />
      <div className="flex items-center justify-between text-[13px] text-muted">
        <span>From template: Hospital ERP rollout</span>
        <span className="flex">
          {['RS', 'NK', 'VP'].map((p, i) => (
            <b
              key={p}
              className={`-ml-1.5 grid h-[22px] w-[22px] place-items-center rounded-full border-2 border-paper text-[9px] text-on-ink ${
                ['bg-ink-3', 'bg-brand-600', 'bg-[#A8A29E]'][i]
              }`}
            >
              {p}
            </b>
          ))}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-sunk">
        <div className="prog-fill" style={{ '--w': '64%' }} />
      </div>
      <div className="grid gap-2">
        {milestones.map(([name, meta, done], i) => (
          <div key={name} className="grid grid-cols-[22px_minmax(0,1fr)_auto] items-center gap-2.5 rounded-[10px] border border-line bg-canvas px-2.5 py-2 text-[13.5px]">
            <span className={`tick ${done ? 'on' : ''}`} style={{ '--i': i }}>
              <Check />
            </span>
            <span>{name}</span>
            <span className={`chip ${done ? 'plain' : 'warn'}`}>{meta}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function SupportPanel() {
  const tickets = [
    ['TK-311', 'Lab report export fails', ['bad', 'Open'], ['warn', 'In progress'], '900ms'],
    ['TK-309', 'Add new branch users', ['warn', 'In progress'], ['', 'Resolved'], '1700ms'],
    ['TK-305', 'Invoice template logo', ['', 'Resolved'], ['plain', 'Closed'], '2500ms'],
  ];
  return (
    <>
      <Head title="Support · Sunrise Clinics" chip="AMC covered" tone="plain" />
      <div className="grid gap-2">
        {tickets.map(([code, title, a, b, t]) => (
          <div key={code} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-[10px] border border-line bg-canvas px-3 py-2.5 text-[13.5px]">
            <code className="font-mono text-[11.5px] text-muted">{code}</code>
            <span className="truncate">{title}</span>
            <span className="flip" style={{ '--t': t }}>
              <span className={`chip a ${a[0]}`}>{a[1]}</span>
              <span className={`chip b ${b[0]}`}>{b[1]}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 rounded-xl bg-ink px-3.5 py-3 text-[13px] text-on-ink">
        <span>Average time to resolve this month</span>
        <b className="font-mono text-[18px] text-brand-300 tabular-nums">4h 12m</b>
      </div>
    </>
  );
}

function RenewalPanel() {
  const days = useTween(90, 30, 2.4, 0.3);
  return (
    <>
      <Head title="AMC-0418 · Sunrise Clinics" chip="Renewal due" tone="warn" />
      <div className="grid items-center gap-5 sm:grid-cols-[auto_minmax(0,1fr)]">
        <div className="relative mx-auto h-[150px] w-[150px]">
          <svg viewBox="0 0 150 150" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="75" cy="75" r="60" fill="none" strokeWidth="9" className="stroke-sunk" />
            <circle cx="75" cy="75" r="60" fill="none" strokeWidth="9" strokeLinecap="round" className="ring-fg stroke-brand-600" />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <b className="text-[34px] leading-none tracking-[-0.03em] tabular-nums">{days}</b>
              <span className="block font-mono text-[11px] text-muted">days left</span>
            </div>
          </div>
        </div>
        <div className="grid min-w-0 gap-3">
          <div className="grid grid-cols-2 gap-2.5">
            {[['Contract value', '₹4.8L / yr'], ['Ends', '31 Dec 2026']].map(([k, v]) => (
              <div key={k} className="min-w-0 rounded-[10px] border border-line bg-canvas px-3 py-2.5">
                <span className="block text-[11px] text-muted">{k}</span>
                <b className="text-[14px] tabular-nums">{v}</b>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {[90, 60, 30].map((d) => (
              <span key={d} className={`chip transition-opacity duration-300 ${days <= d ? 'opacity-100' : 'opacity-35'}`}>
                {d}-day email
              </span>
            ))}
          </div>
          <span className="pulse-ring justify-self-start rounded-[10px] bg-brand-600 px-4 py-2.5 text-[14px] font-semibold text-on-ink">
            Renew for 1 year
          </span>
        </div>
      </div>
    </>
  );
}

export const PANELS = [LeadPanel, DealPanel, DeliveryPanel, SupportPanel, RenewalPanel];
