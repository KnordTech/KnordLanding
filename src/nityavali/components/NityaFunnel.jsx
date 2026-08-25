import RevealSection from '../../components/RevealSection';

const STEPS = [
  { label: 'Lead', detail: 'Enquiry in' },
  { label: 'Pipeline', detail: 'Activities' },
  { label: 'Client', detail: 'Won & convert' },
  { label: 'Project', detail: 'Templates & tasks' },
  { label: 'Resources', detail: 'People & capacity' },
  { label: 'Go-live', detail: 'Delivery' },
  { label: 'Support', detail: 'Tickets' },
  { label: 'AMC', detail: '90 / 60 / 30' },
  { label: 'Renewal', detail: 'Recurring' },
];

export default function NityaFunnel() {
  return (
    <section id="journey" className="px-6 py-[90px] sm:px-14 sm:py-[110px]">
      <RevealSection className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[720px]">
          <div
            className="text-[13.5px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: 'var(--n-teal)' }}
          >
            The operating loop
          </div>
          <h2
            className="mt-2.5 text-[28px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-4xl"
            style={{ color: 'var(--n-navy)' }}
          >
            From first enquiry to renewal, without changing tools.
          </h2>
          <p
            className="mt-4 max-w-[620px] text-[16.5px] leading-[1.7]"
            style={{ color: 'var(--n-text-muted)' }}
          >
            Built for professional services and implementation firms that sell,
            deliver, support, and renew — not a generic project board with CRM
            bolted on.
          </p>
        </div>

        <ol className="mt-12 flex flex-wrap items-end gap-x-2 gap-y-8">
          {STEPS.map((step, i) => (
            <li key={step.label} className="flex items-end gap-2">
              <div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: 'var(--n-teal)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className="mt-1 text-[18px] font-bold"
                  style={{ color: 'var(--n-navy)' }}
                >
                  {step.label}
                </div>
                <div className="text-[13px]" style={{ color: 'var(--n-text-muted)' }}>
                  {step.detail}
                </div>
              </div>
              {i < STEPS.length - 1 ? (
                <span
                  className="mb-3 text-[16px]"
                  style={{ color: 'var(--n-text-muted)' }}
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </RevealSection>
    </section>
  );
}
