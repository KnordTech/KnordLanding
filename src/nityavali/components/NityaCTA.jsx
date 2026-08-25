import RevealSection from '../../components/RevealSection';
import LeadForm from '../../components/LeadForm';

export default function NityaCTA() {
  return (
    <section id="demo" className="px-6 pb-[90px] sm:px-14 sm:pb-[110px]">
      <RevealSection
        className="mx-auto w-full max-w-[1180px] rounded-2xl px-8 py-16 sm:px-14 sm:py-20"
        style={{ backgroundColor: 'var(--n-deep-navy)' }}
      >
        <div className="mx-auto max-w-[640px]">
          <h2
            className="text-[28px] font-extrabold leading-[1.2] tracking-[-0.015em] sm:text-[40px]"
            style={{ color: 'var(--n-on-dark)' }}
          >
            See Nityavali running on your business.
          </h2>
          <p
            className="mt-4 text-[16px] leading-[1.65]"
            style={{ color: 'var(--n-on-dark-muted)' }}
          >
            Request a demo and we&apos;ll show you lead to delivery to renewal in
            one workspace. Existing customers sign in on their own tenant URL —
            this form is for a conversation, not a login.
          </p>
          <div className="mt-8">
            <LeadForm
              variant="nityavali"
              submitLabel="Request a demo"
              messageLabel="What would you like to see?"
              messagePlaceholder="e.g. a demo of Nityavali for a 40-person delivery team."
            />
          </div>
          <a
            href="mailto:hello@knord.tech"
            className="mt-6 inline-block text-[15px] font-semibold"
            style={{ color: 'var(--n-on-dark-muted)' }}
          >
            Or email hello@knord.tech
          </a>
        </div>
      </RevealSection>
    </section>
  );
}
