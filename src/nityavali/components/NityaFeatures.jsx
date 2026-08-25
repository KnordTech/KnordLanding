import RevealSection from '../../components/RevealSection';

const FEATURES = [
  {
    title: 'CRM & Sales Pipeline',
    body: 'Leads, activities, and a Kanban pipeline — then convert the won deal to a client without switching tools.',
    accent: 'var(--n-teal)',
    icon: 'M3 5.5h18M6 12h12M9 18.5h6', // funnel-ish stack
  },
  {
    title: 'Projects & Tasks',
    body: 'Template-based projects, milestones, and a cross-project Kanban so delivery stays visible from kickoff to go-live.',
    accent: 'var(--n-purple)',
    icon: 'M4 6h16M4 12h10M4 18h13',
  },
  {
    title: 'Resourcing',
    body: 'Allocation planner, utilization, skills, and capacity — match the right people to the right work.',
    accent: 'var(--n-amber)',
    icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0',
  },
  {
    title: 'Smart Assistant',
    body: 'Lead scoring, ticket summarization, and operational nudges — AI-native to the platform, not bolted on afterwards.',
    accent: 'var(--n-purple)',
    icon: 'M12 3v3M12 18v3M3 12h3M18 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2',
  },
  {
    title: 'HR & Attendance',
    body: 'Attendance, leaves, and timesheets in the same system that plans capacity — so the roster matches who is actually available.',
    accent: 'var(--n-teal)',
    icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zM5 21v-1a5 5 0 015-5h4a5 5 0 015 5v1',
  },
  {
    title: 'Support & Renewals',
    body: 'Ticket lifecycle Open → Closed, AMC contracts, and a 90/60/30-day reminder engine so renewals do not slip.',
    accent: 'var(--n-amber)',
    icon: 'M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z',
  },
];

export default function NityaFeatures() {
  return (
    <section id="features" className="px-6 py-[90px] sm:px-14 sm:py-[110px]">
      <RevealSection className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[640px]">
          <div
            className="text-[13.5px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: 'var(--n-teal)' }}
          >
            Features
          </div>
          <h2
            className="mt-2.5 text-[28px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-4xl"
            style={{ color: 'var(--n-navy)' }}
          >
            Everything the business needs, working together.
          </h2>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(13,27,46,0.35)]"
              style={{ backgroundColor: 'var(--n-bg)', borderColor: 'var(--n-border)' }}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `color-mix(in srgb, ${f.accent} 14%, transparent)` }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={f.accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={f.icon} />
                </svg>
              </span>
              <h3
                className="mt-5 text-[18.5px] font-bold"
                style={{ color: 'var(--n-navy)' }}
              >
                {f.title}
              </h3>
              <p
                className="mt-2.5 text-[15px] leading-[1.65]"
                style={{ color: 'var(--n-text-muted)' }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
