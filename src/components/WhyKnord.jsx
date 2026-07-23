import RevealSection from './RevealSection';
import SectionEyebrow from './SectionEyebrow';

const CARDS = [
  {
    num: '01',
    title: 'Rooted in real pain points',
    desc: 'We start with the operational friction real businesses deal with every day, not a whiteboard idea — and build products that actually resolve it.',
  },
  {
    num: '02',
    title: 'AI-native, not bolted on',
    desc: 'Our products are designed for how work is actually going to happen — built AI-native from the start, not retrofitted after the fact.',
  },
  {
    num: '03',
    title: 'India-based, customer-first',
    desc: 'An emerging technology company working closely with the businesses we serve, from India, for operational teams everywhere.',
  },
];

export default function WhyKnord() {
  return (
    <section
      id="why-knord"
      className="theme-transition flex min-h-screen items-center px-6 py-20 sm:px-14 sm:py-[110px]"
      style={{ backgroundColor: 'var(--bg-alt)' }}
    >
      <RevealSection className="mx-auto w-full max-w-[1080px]">
        <SectionEyebrow>Why Knord</SectionEyebrow>
        <h2
          className="theme-transition mt-2.5 max-w-[700px] text-[28px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-4xl"
          style={{ color: 'var(--heading)' }}
        >
          A young company, built on real operational understanding.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {CARDS.map((card) => (
            <div key={card.num}>
              <div className="text-sm font-bold tracking-[0.05em] text-amber">{card.num}</div>
              <h3
                className="theme-transition mt-3 text-xl font-bold"
                style={{ color: 'var(--heading)' }}
              >
                {card.title}
              </h3>
              <p
                className="theme-transition mt-2.5 text-[15px] leading-[1.65]"
                style={{ color: 'var(--text-muted)' }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
