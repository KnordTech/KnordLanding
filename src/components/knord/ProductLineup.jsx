import Reveal from '../site/Reveal.jsx';
import { NityavaliMark, RippleMark } from '../site/Marks.jsx';
import { Check } from '../home/Hero.jsx';

// Small product glimpses for the cards. All values are examples.
function NityavaliGlimpse() {
  return (
    <div aria-hidden="true" className="grid gap-2 rounded-2xl bg-teal-bg p-4">
      <div className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2 text-[12.5px]">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-sky-bg font-bold text-sky">↘</span>
        <b className="shrink-0">New lead</b>
        <span className="min-w-0 truncate text-muted">Sunrise Clinics</span>
        <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-sky-bg px-1.5 py-0.5 font-mono text-[10px] text-sky">Meta ad</span>
      </div>
      <div className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2 text-[12.5px]">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-violet-bg font-bold text-violet">◆</span>
        <b className="shrink-0">PRJ-208</b>
        <span className="min-w-0 truncate text-muted">Data migration</span>
        <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-teal-bg px-1.5 py-0.5 font-mono text-[10px] text-brand-600">On track</span>
      </div>
      <div className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2 text-[12.5px]">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-amber-bg font-bold text-amber">↻</span>
        <b className="shrink-0">AMC renewal</b>
        <span className="min-w-0 truncate text-muted">₹4.8L</span>
        <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-amber-bg px-1.5 py-0.5 font-mono text-[10px] text-amber">30 days</span>
      </div>
    </div>
  );
}

function RippleGlimpse() {
  const bars = [
    ['A', 24.8, 'bg-ripple-600'],
    ['B', 23.4, 'bg-ripple-300'],
  ];
  return (
    <div aria-hidden="true" className="grid gap-2 rounded-2xl bg-ripple-50 p-4">
      {bars.map(([id, v, tone]) => (
        <div key={id} className="grid gap-1.5 rounded-xl bg-paper px-3 py-2">
          <div className="flex items-center justify-between text-[12.5px]">
            <b>Draft {id}</b>
            <span className="font-semibold">{v}% intent to visit</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-sunk">
            <div className={`h-full rounded-full ${tone}`} style={{ width: `${v * 3}%` }} />
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between rounded-xl bg-ink px-3 py-2 text-[12.5px] text-on-ink">
        <span>Put off by the price</span>
        <span className="font-mono text-[10.5px] text-on-ink/50">q_9 · s1:A:204</span>
      </div>
    </div>
  );
}

const PRODUCTS = [
  {
    Mark: NityavaliMark,
    name: 'Nityavali',
    status: 'Live',
    statusClass: 'bg-teal-bg text-brand-600',
    tagline: 'Run the whole business, from first enquiry to renewal.',
    points: ['Leads, clients and projects in one workspace', 'Support tickets and AMC renewals on time', 'Used every day by 250+ people'],
    Glimpse: NityavaliGlimpse,
    href: '/nityavali',
    cta: 'Explore Nityavali',
    ctaClass: 'bg-brand-600 hover:bg-brand-700',
    check: 'text-brand-600',
  },
  {
    Mark: RippleMark,
    name: 'Ripple',
    status: 'Early access',
    statusClass: 'bg-ripple-100 text-ripple-700',
    tagline: 'Know how people will react before you post.',
    points: ['Test posts, images and ads on a simulated audience', 'See who responds, who scrolls past, and why', 'Every reason backed by evidence you can check'],
    Glimpse: RippleGlimpse,
    href: '/ripple',
    cta: 'Explore Ripple',
    ctaClass: 'bg-ripple-600 hover:bg-ripple-700',
    check: 'text-ripple-600',
  },
];

export default function ProductLineup() {
  return (
    <section id="products" className="scroll-mt-20 px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-4 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="grid content-start gap-6 rounded-[24px] border border-line bg-paper p-[clamp(20px,3vw,32px)]">
              <div className="flex items-center gap-3">
                <p.Mark size={44} />
                <div>
                  <h2 className="text-[24px] font-bold tracking-[-0.02em]">{p.name}</h2>
                </div>
                <span className={`ml-auto rounded-full px-2.5 py-1 font-mono text-[11px] font-medium ${p.statusClass}`}>{p.status}</span>
              </div>
              <p className="max-w-[24ch] text-[clamp(22px,2.4vw,28px)] font-bold leading-[1.15] tracking-[-0.02em]">{p.tagline}</p>
              <p.Glimpse />
              <ul className="grid gap-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-[15px] text-ink-3">
                    <Check className={p.check} />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className={`group inline-flex w-fit items-center gap-2 rounded-[10px] px-5 py-3 text-[15px] font-semibold text-on-ink transition hover:-translate-y-px ${p.ctaClass}`}
              >
                {p.cta} <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-dashed border-line-strong px-[clamp(20px,3vw,32px)] py-6">
          <div>
            <h3 className="text-[18px] font-semibold">What we build next comes from the businesses we work with.</h3>
            <p className="mt-1 text-[15px] text-muted">Have a problem worth solving? We would like to hear it.</p>
          </div>
          <a href="#contact" className="rounded-[10px] border border-line bg-paper px-4 py-2.5 text-[14.5px] font-semibold transition hover:border-line-strong">
            Tell us about it
          </a>
        </Reveal>
      </div>
    </section>
  );
}
