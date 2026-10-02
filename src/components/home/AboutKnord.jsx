import Reveal, { Eyebrow } from '../site/Reveal.jsx';
import { KnordMark, NextProductMark } from '../site/Marks.jsx';

const PRINCIPLES = [
  ['Rooted in real work', 'Nityavali was built alongside a live operations team, one release at a time.'],
  ['AI where it saves time', 'Assistance built into the everyday work, not bolted on later.'],
  ['India-based, customer-first', 'We work closely with the businesses we serve.'],
];

// The slim "who is behind this" layer, plus the coming-soon teaser for the next product.
export default function AboutKnord() {
  return (
    <section id="knord" className="px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Reveal className="rounded-[22px] border border-line bg-paper p-[clamp(24px,4vw,44px)]">
          <div className="flex items-center gap-3">
            <KnordMark size={34} />
            <Eyebrow className="text-knord">Built by Knord Technologies</Eyebrow>
          </div>
          <h2 className="mt-4 max-w-[22ch] text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.12] tracking-[-0.025em]">
            We build software for the businesses that keep things running.
          </h2>
          <p className="mt-3 max-w-[58ch] text-[16px] leading-[1.6] text-muted">
            Knord is an India-based software company. Nityavali is our first product, and it is used every day by teams
            that sell, deliver, support and renew.
          </p>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {PRINCIPLES.map(([t, b]) => (
              <div key={t} className="grid gap-1 border-t border-line pt-3">
                <h3 className="text-[15px] font-semibold">{t}</h3>
                <p className="text-[14px] leading-[1.5] text-muted">{b}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative grid content-between gap-6 overflow-hidden rounded-[22px] bg-ink p-[clamp(24px,4vw,44px)] text-on-ink">
          <div
            aria-hidden="true"
            className="glow-drift pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(139,108,240,0.5),transparent)]"
          />
          <div
            aria-hidden="true"
            className="glow-drift pointer-events-none absolute -bottom-28 -left-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(closest-side,rgba(232,119,26,0.35),transparent)] [animation-duration:22s]"
          />
          <div className="relative">
            <div className="flex items-center gap-3">
              <NextProductMark size={40} />
              <span className="rounded-full border border-on-ink/15 px-2.5 py-1 font-mono text-[11px] text-on-ink/70">Coming soon</span>
            </div>
            <h3 className="mt-5 text-[clamp(22px,2.6vw,28px)] font-bold leading-[1.15] tracking-[-0.02em]">
              We&apos;re already building what&apos;s next.
            </h3>
            <p className="mt-2 text-[15px] leading-[1.55] text-on-ink/60">
              A new Knord product for operations teams is in the works, while Nityavali keeps getting better every
              release.
            </p>
          </div>
          <a
            href="#demo"
            className="relative inline-flex w-fit items-center gap-2 rounded-[10px] bg-on-ink px-4 py-2.5 text-[14px] font-semibold text-ink transition hover:-translate-y-px"
          >
            Keep me posted →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
