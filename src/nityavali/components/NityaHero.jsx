const STATS = [
  { label: 'Open pipeline', value: '₹4.2Cr', delta: '+18%', accent: 'var(--n-teal)' },
  { label: 'Active projects', value: '37', delta: '+5', accent: 'var(--n-purple)' },
  { label: 'Billable this week', value: '92%', delta: '+4%', accent: 'var(--n-amber)' },
  { label: 'Renewals due', value: '12', delta: '30d', accent: 'var(--n-teal)' },
];

export default function NityaHero() {
  return (
    <section
      id="top"
      className="px-6 pb-[90px] pt-16 sm:px-14 sm:pb-[110px] sm:pt-24"
    >
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        {/* Left: copy */}
        <div className="max-w-[560px]">
          <div
            className="inline-block rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold tracking-[0.04em]"
            style={{ backgroundColor: 'rgba(20, 168, 156, 0.12)', color: 'var(--n-teal)' }}
          >
            Operations Management Platform
          </div>
          <h1
            className="mt-5 text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[52px]"
            style={{ color: 'var(--n-navy)' }}
          >
            Run your entire services business in one place.
          </h1>
          <p
            className="mt-5 max-w-[500px] text-[16.5px] leading-[1.7]"
            style={{ color: 'var(--n-text-muted)' }}
          >
            Operations management for professional services and implementation
            businesses — CRM through delivery, support, and AMC renewals in one
            system, with an AI-assisted layer keeping work moving.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#demo"
              className="rounded-[10px] px-[26px] py-[14px] text-[15.5px] font-semibold"
              style={{ backgroundColor: 'var(--n-teal)', color: 'var(--n-on-dark)' }}
            >
              Request a demo
            </a>
            <a
              href="#features"
              className="rounded-[10px] border-[1.5px] px-[26px] py-[13px] text-[15.5px] font-semibold"
              style={{ borderColor: 'var(--n-border)', color: 'var(--n-navy)' }}
            >
              See what's inside
            </a>
          </div>
        </div>

        {/* Right: decorative dashboard mock (static mock data) */}
        <div
          className="rounded-2xl p-6 sm:p-7"
          style={{
            backgroundColor: 'var(--n-deep-navy)',
            boxShadow: '0 30px 70px -30px rgba(11, 21, 36, 0.55)',
          }}
          aria-hidden="true"
        >
          <div className="flex items-center justify-between">
            <div>
              <div
                className="text-[11px] font-medium uppercase tracking-[0.1em]"
                style={{ color: 'var(--n-on-dark-muted)' }}
              >
                Operations overview
              </div>
              <div
                className="mt-1 text-[15px] font-semibold"
                style={{ color: 'var(--n-on-dark)' }}
              >
                This week
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'var(--n-teal)' }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'var(--n-purple)' }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'var(--n-amber)' }} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3.5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-4"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--n-dark-border)' }}
              >
                <div className="text-[11.5px]" style={{ color: 'var(--n-on-dark-muted)' }}>
                  {stat.label}
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-[24px] font-bold" style={{ color: 'var(--n-on-dark)' }}>
                    {stat.value}
                  </span>
                  <span className="text-[12px] font-semibold" style={{ color: stat.accent }}>
                    {stat.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Smart Assistant callout */}
          <div
            className="mt-3.5 flex items-start gap-3 rounded-xl p-4"
            style={{
              background: 'linear-gradient(90deg, rgba(108, 93, 212, 0.22), rgba(20, 168, 156, 0.14))',
              border: '1px solid var(--n-dark-border)',
            }}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[15px]"
              style={{ backgroundColor: 'var(--n-purple)', color: 'var(--n-on-dark)' }}
            >
              &#10022;
            </span>
            <div>
              <div className="text-[13px] font-semibold" style={{ color: 'var(--n-on-dark)' }}>
                Smart Assistant
              </div>
              <div className="mt-0.5 text-[12.5px] leading-[1.5]" style={{ color: 'var(--n-on-dark-muted)' }}>
                3 renewals need follow-up and 2 projects are trending over
                budget. Want me to draft the reminders?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
