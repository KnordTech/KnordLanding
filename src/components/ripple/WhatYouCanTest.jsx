import Reveal, { SectionHead } from '../site/Reveal.jsx';

const KINDS = [
  ['Post', 'A caption or a launch announcement, as text.'],
  ['Image', 'A photo or creative, read by a vision model the way a person would see it.'],
  ['Ad', 'Copy, creative and offer together, including the price.'],
  ['Short campaign', 'A few posts in a row, to see how the reaction builds.'],
];

const PLATFORMS = ['Instagram', 'Facebook', 'YouTube', 'X', 'Reddit'];

export default function WhatYouCanTest() {
  return (
    <section id="tests" className="px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          eyebrow="What you can test"
          accent="text-ripple-600"
          title="One draft to see how it lands, or two to see which leads."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <Reveal className="rounded-[22px] border border-line bg-paper p-[clamp(20px,3vw,32px)]">
            <div className="grid gap-5 sm:grid-cols-2">
              {KINDS.map(([t, b]) => (
                <div key={t} className="grid gap-1 border-t border-line pt-3">
                  <h3 className="text-[16px] font-semibold">{t}</h3>
                  <p className="text-[14px] leading-[1.5] text-muted">{b}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="mr-1 font-mono text-[11.5px] uppercase tracking-[0.06em] text-muted">Platforms</span>
              {PLATFORMS.map((p) => (
                <span key={p} className="rounded-full border border-line bg-canvas px-3 py-1 text-[13px] font-medium text-ink-3">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.08} className="rounded-[22px] bg-ripple-50 p-[clamp(20px,3vw,28px)]">
              <h3 className="text-[18px] font-semibold tracking-[-0.015em] text-ripple-700">Fair comparisons, honest verdicts</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-ink-3">
                A draft only “wins” when the 95% interval excludes zero and every seed agrees. Otherwise Ripple says which
                one leads and by how much. No measurable difference is a result too.
              </p>
            </Reveal>
            <Reveal delay={0.14} className="rounded-[22px] bg-ink p-[clamp(20px,3vw,28px)] text-on-ink">
              <h3 className="text-[18px] font-semibold tracking-[-0.015em]">Before you spend on ads</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-on-ink/65">
                A live split test needs thousands of real impressions to tell two drafts apart. Ripple runs it on a
                simulated crowd first, so the budget goes to the version with the better case.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
