import RevealSection from '../../components/RevealSection';

export default function NityaWhy() {
  return (
    <section
      id="why"
      className="px-6 py-[90px] sm:px-14 sm:py-[110px]"
      style={{ backgroundColor: 'var(--n-bg-alt)' }}
    >
      <RevealSection className="mx-auto w-full max-w-[860px] text-center">
        <div
          className="text-[13.5px] font-semibold uppercase tracking-[0.08em]"
          style={{ color: 'var(--n-teal)' }}
        >
          Why Nityavali
        </div>
        <h2
          className="mt-4 text-[26px] font-bold leading-[1.4] tracking-[-0.01em] sm:text-[34px]"
          style={{ color: 'var(--n-navy)' }}
        >
          One system from first enquiry to renewal — so sales, delivery, and
          support stop living in{' '}
          <span style={{ color: 'var(--n-teal)' }}>separate tools</span>.
        </h2>
      </RevealSection>
    </section>
  );
}
