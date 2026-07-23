import RevealSection from './RevealSection';
import SectionEyebrow from './SectionEyebrow';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center px-6 py-24 sm:px-14 sm:py-[120px]"
    >
      <RevealSection className="mx-auto w-full max-w-[640px] text-left">
        <SectionEyebrow>Contact</SectionEyebrow>
        <h2
          className="theme-transition mt-2.5 max-w-[700px] text-[28px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-4xl"
          style={{ color: 'var(--heading)' }}
        >
          Let&apos;s talk about what you&apos;re building.
        </h2>
        <div className="mt-2 flex flex-col gap-2.5">
          <a href="mailto:hello@knord.tech" className="text-[22px] font-bold text-amber">
            hello@knord.tech
          </a>
          <span
            className="theme-transition text-[15.5px]"
            style={{ color: 'var(--text-muted)' }}
          >
            Knord Technologies &middot; India
          </span>
        </div>
      </RevealSection>
    </section>
  );
}
