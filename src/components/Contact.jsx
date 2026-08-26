import RevealSection from './RevealSection';
import SectionEyebrow from './SectionEyebrow';
import LeadForm from './LeadForm';

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
        <p
          className="theme-transition mt-4 text-[15.5px] leading-[1.65]"
          style={{ color: 'var(--text-muted)' }}
        >
          Request a demo or send a note — it lands with the Knord team, not a
          generic inbox bot.
        </p>

        <div className="mt-8">
          <LeadForm
            variant="knord"
            submitLabel="Get in touch"
            messageLabel="How can we help?"
            messagePlaceholder="Request a demo, ask about Nityavali, or tell us what you're building."
          />
        </div>

        <div className="mt-8 flex flex-col gap-2.5">
          <a href="mailto:hello@knordtechnologies.com" className="text-[22px] font-bold text-amber">
            hello@knordtechnologies.com
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
