import RevealSection from './RevealSection';
import SectionEyebrow from './SectionEyebrow';

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="theme-transition flex min-h-screen items-center px-6 py-20 sm:px-14 sm:py-[100px]"
      style={{ backgroundColor: 'var(--bg-alt)' }}
    >
      <RevealSection className="mx-auto w-full max-w-[900px]">
        <SectionEyebrow>What we do</SectionEyebrow>
        <h2
          className="theme-transition mt-2.5 max-w-[700px] text-[28px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-4xl"
          style={{ color: 'var(--heading)' }}
        >
          We build the software that runs the business behind the business.
        </h2>
        <p
          className="theme-transition mt-5 max-w-[680px] text-base leading-[1.75] sm:text-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          Knord Technologies exists to solve the unglamorous, high-stakes
          problems that keep operational businesses running — scheduling,
          delivery, billing, resourcing. We build serious, dependable
          products for the people who depend on them every day, not demos
          built for a pitch deck.
        </p>
      </RevealSection>
    </section>
  );
}
