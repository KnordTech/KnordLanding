import RevealSection from './RevealSection';
import SectionEyebrow from './SectionEyebrow';

export default function Products() {
  return (
    <section
      id="products"
      className="flex min-h-screen items-center px-6 py-20 sm:px-14 sm:py-[110px]"
    >
      <RevealSection className="mx-auto w-full max-w-[1080px]">
        <SectionEyebrow>Products</SectionEyebrow>
        <h2
          className="theme-transition mt-2.5 max-w-[700px] text-[28px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-4xl"
          style={{ color: 'var(--heading)' }}
        >
          One flagship product today. More on the way.
        </h2>

        <div className="mt-11 grid grid-cols-1 gap-7 [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]">
          <div
            className="theme-transition rounded-2xl border p-9"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
          >
            <div
              className="theme-transition inline-block rounded-full px-3 py-[5px] text-[12.5px] font-bold tracking-[0.04em]"
              style={{ backgroundColor: 'var(--indigo)', color: 'var(--on-accent)' }}
            >
              Flagship product
            </div>
            <h3
              className="theme-transition mt-[18px] text-2xl font-bold"
              style={{ color: 'var(--heading)' }}
            >
              Nityavali
            </h3>
            <p
              className="theme-transition mt-3 text-[15.5px] leading-[1.65]"
              style={{ color: 'var(--text-muted)' }}
            >
              An operations management platform built for professional
              services businesses — scheduling, billing, resourcing, and
              delivery, handled in one place, end to end.
            </p>
            <a
              href="/nityavali"
              className="mt-5 inline-block text-[15px] font-semibold text-amber"
            >
              Visit Nityavali &#8594;
            </a>
          </div>

          <div
            className="theme-transition rounded-2xl border-[1.5px] border-dashed p-9"
            style={{ backgroundColor: 'transparent', borderColor: 'var(--border)' }}
          >
            <div
              className="theme-transition inline-block rounded-full border px-3 py-[5px] text-[12.5px] font-bold tracking-[0.04em]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              Coming soon
            </div>
            <h3
              className="theme-transition mt-[18px] text-2xl font-bold"
              style={{ color: 'var(--heading)' }}
            >
              An AI agent workforce
            </h3>
            <p
              className="theme-transition mt-3 text-[15.5px] leading-[1.65]"
              style={{ color: 'var(--text-muted)' }}
            >
              Our next product, in development — an AI-native platform for
              putting autonomous agents to work inside real operational
              businesses.
            </p>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
