const INDUSTRIES = [
  ['Hospitals & clinics', 'bg-sky-bg text-sky'],
  ['Schools & colleges', 'bg-violet-bg text-violet'],
  ['Construction', 'bg-amber-bg text-amber'],
  ['Software & IT services', 'bg-teal-bg text-brand-600'],
  ['Retail', 'bg-coral-bg text-coral'],
  ['Professional services', 'bg-lime-bg text-lime'],
  ['Your own custom fields', 'bg-sunk text-ink-3'],
];

function Items({ hidden }) {
  return INDUSTRIES.map(([name, tone]) => (
    <span
      key={name}
      aria-hidden={hidden || undefined}
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-semibold ${tone}`}
    >
      <span className="h-2 w-2 rounded-[3px] bg-current" />
      {name}
    </span>
  ));
}

export default function IndustryStrip() {
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-4" aria-label="Industries with ready-made templates">
      <div className="flex items-center gap-6">
        <div className="hidden shrink-0 pl-[clamp(16px,4vw,40px)] font-mono text-[11.5px] uppercase tracking-[0.06em] text-muted sm:block">
          Templates for
        </div>
        <div className="marquee min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track gap-3!">
            <Items />
            <Items hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
