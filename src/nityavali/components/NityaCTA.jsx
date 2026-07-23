import RevealSection from '../../components/RevealSection';

export default function NityaCTA() {
  return (
    <section id="demo" className="px-6 pb-[90px] sm:px-14 sm:pb-[110px]">
      <RevealSection
        className="mx-auto w-full max-w-[1180px] rounded-2xl px-8 py-16 text-center sm:px-14 sm:py-20"
        style={{ backgroundColor: 'var(--n-deep-navy)' }}
      >
        <h2
          className="mx-auto max-w-[640px] text-[28px] font-extrabold leading-[1.2] tracking-[-0.015em] sm:text-[40px]"
          style={{ color: 'var(--n-on-dark)' }}
        >
          See Nityavali running on your business.
        </h2>
        <p
          className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.65]"
          style={{ color: 'var(--n-on-dark-muted)' }}
        >
          Book a walkthrough and we'll show you how leads, projects, people, and
          renewals come together in one place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@knord.tech?subject=Nityavali%20demo%20request"
            className="rounded-[10px] px-[28px] py-[15px] text-[15.5px] font-semibold"
            style={{ backgroundColor: 'var(--n-teal)', color: 'var(--n-on-dark)' }}
          >
            Request a demo
          </a>
          <a
            href="mailto:hello@knord.tech"
            className="rounded-[10px] px-[28px] py-[14px] text-[15.5px] font-semibold"
            style={{
              border: '1.5px solid var(--n-dark-border)',
              color: 'var(--n-on-dark)',
            }}
          >
            hello@knord.tech
          </a>
        </div>
      </RevealSection>
    </section>
  );
}
