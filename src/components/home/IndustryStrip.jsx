const INDUSTRIES = [
  ['✚', 'Hospitals & clinics'],
  ['◧', 'Schools & colleges'],
  ['▲', 'Construction'],
  ['⌘', 'Software & IT services'],
  ['◎', 'Retail'],
  ['◆', 'Professional services'],
  ['✦', 'Your own custom fields'],
];

function Items({ hidden }) {
  return INDUSTRIES.map(([icon, name]) => (
    <span key={name} aria-hidden={hidden || undefined} className="inline-flex items-center gap-2.5 whitespace-nowrap text-[15px] font-semibold text-ink-3">
      <i className="grid h-[26px] w-[26px] place-items-center rounded-lg bg-brand-50 not-italic text-brand-600">{icon}</i>
      {name}
    </span>
  ));
}

export default function IndustryStrip() {
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-[18px]" aria-label="Industries with ready-made templates">
      <div className="flex items-center gap-7">
        <div className="hidden shrink-0 pl-[clamp(16px,4vw,40px)] font-mono text-[11.5px] uppercase tracking-[0.06em] text-muted sm:block">
          Ready-made templates for
        </div>
        <div className="marquee min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track">
            <Items />
            <Items hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
