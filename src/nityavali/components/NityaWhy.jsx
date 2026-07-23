import RevealSection from '../../components/RevealSection';

export default function NityaWhy() {
  return (
    <section id="why" className="px-6 py-[90px] sm:px-14 sm:py-[110px]">
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
          Most teams stitch their operation together from a dozen disconnected
          tools. Nityavali replaces the patchwork with{' '}
          <span style={{ color: 'var(--n-teal)' }}>one connected system</span> —
          so nothing falls through the cracks between sales, delivery, people,
          and renewals.
        </h2>
      </RevealSection>
    </section>
  );
}
