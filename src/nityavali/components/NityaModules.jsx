import RevealSection from '../../components/RevealSection';

const MODULES = [
  'Leads',
  'Sales Pipeline',
  'Clients',
  'Projects',
  'Tasks',
  'Resources',
  'HR & Attendance',
  'AMC & Renewals',
];

export default function NityaModules() {
  return (
    <section
      id="modules"
      className="px-6 py-[90px] sm:px-14 sm:py-[110px]"
      style={{ backgroundColor: 'var(--n-bg-alt)' }}
    >
      <RevealSection className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[640px]">
          <div
            className="text-[13.5px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: 'var(--n-teal)' }}
          >
            Modules
          </div>
          <h2
            className="mt-2.5 text-[28px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-4xl"
            style={{ color: 'var(--n-navy)' }}
          >
            One platform, every part of the operation.
          </h2>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {MODULES.map((m, i) => {
            const accents = ['var(--n-teal)', 'var(--n-purple)', 'var(--n-amber)'];
            const accent = accents[i % accents.length];
            return (
              <span
                key={m}
                className="inline-flex items-center gap-2.5 rounded-full border bg-white px-[18px] py-2.5 text-[14.5px] font-semibold"
                style={{ borderColor: 'var(--n-border)', color: 'var(--n-navy)' }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                {m}
              </span>
            );
          })}
        </div>
      </RevealSection>
    </section>
  );
}
