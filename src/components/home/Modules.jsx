import { motion } from 'motion/react';
import { SectionHead } from '../site/Reveal.jsx';

// Module cards with small spot illustrations, each in its area's colour. A few parts move
// gently (a lead dropping into the funnel, a card sliding across the board…).

function Crm() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" aria-hidden="true">
      <rect x="30" y="24" width="100" height="16" rx="8" fill="#1D5FB8" />
      <rect x="45" y="48" width="70" height="16" rx="8" fill="#5B8FD6" />
      <rect x="60" y="72" width="40" height="16" rx="8" fill="#A9C6EE" />
      <circle className="spot-drop" cx="80" cy="6" r="7" fill="#E8771A" />
      <rect x="66" y="96" width="28" height="18" rx="6" fill="#123E78" />
    </svg>
  );
}

function Projects() {
  return (
    <svg width="170" height="110" viewBox="0 0 170 110" aria-hidden="true">
      {[10, 62, 114].map((x) => (
        <rect key={x} x={x} y="10" width="46" height="90" rx="10" fill="#DCD2F7" />
      ))}
      <rect x="18" y="20" width="30" height="16" rx="5" fill="#FFFFFF" />
      <rect x="18" y="42" width="30" height="16" rx="5" fill="#FFFFFF" />
      <rect x="70" y="20" width="30" height="16" rx="5" fill="#FFFFFF" />
      <rect x="122" y="20" width="30" height="16" rx="5" fill="#FFFFFF" />
      <g className="spot-slide">
        <rect x="70" y="42" width="30" height="16" rx="5" fill="#6941C6" />
      </g>
    </svg>
  );
}

function People() {
  return (
    <svg width="170" height="110" viewBox="0 0 170 110" aria-hidden="true">
      <circle cx="58" cy="38" r="18" fill="#B25E09" />
      <path d="M26 100 C26 76 42 64 58 64 C74 64 90 76 90 100 Z" fill="#B25E09" />
      <circle cx="110" cy="44" r="15" fill="#E9A84F" />
      <path d="M82 100 C82 80 96 70 110 70 C124 70 138 80 138 100 Z" fill="#E9A84F" />
      <g className="spot-pop">
        <circle cx="140" cy="24" r="12" fill="#0F7B6F" />
        <path d="M134 24 L139 29 L147 19" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function Support() {
  return (
    <svg width="160" height="110" viewBox="0 0 160 110" aria-hidden="true">
      <path d="M24 18 H118 A12 12 0 0 1 130 30 V68 A12 12 0 0 1 118 80 H62 L40 98 V80 H24 A12 12 0 0 1 12 68 V30 A12 12 0 0 1 24 18 Z" fill="#C4402F" />
      <rect x="30" y="36" width="64" height="8" rx="4" fill="#F7B9AC" />
      <rect x="30" y="52" width="44" height="8" rx="4" fill="#F7B9AC" />
      <g className="spot-pop">
        <circle cx="128" cy="78" r="18" fill="#0F7B6F" />
        <path d="M119 78 L126 85 L138 71" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function Renewals() {
  return (
    <svg width="140" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <rect x="22" y="26" width="76" height="72" rx="12" fill="#FFFFFF" />
      <rect x="22" y="26" width="76" height="20" rx="10" fill="#0F7B6F" />
      <rect x="36" y="58" width="12" height="10" rx="3" fill="#BFE3DC" />
      <rect x="54" y="58" width="12" height="10" rx="3" fill="#BFE3DC" />
      <rect x="72" y="58" width="12" height="10" rx="3" fill="#0F7B6F" />
      <rect x="36" y="74" width="12" height="10" rx="3" fill="#BFE3DC" />
      <g className="spot-spin">
        <path d="M60 8 A52 52 0 0 1 112 60" fill="none" stroke="#1E9484" strokeWidth="5" strokeLinecap="round" />
        <path d="M104 54 L112 62 L118 52" fill="none" stroke="#1E9484" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function Billing() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M28 12 H92 V104 L84 98 L76 104 L68 98 L60 104 L52 98 L44 104 L36 98 L28 104 Z" fill="#FFFFFF" stroke="#4D7C0F" strokeWidth="3" strokeLinejoin="round" />
      <rect x="40" y="28" width="40" height="6" rx="3" fill="#C9E3A0" />
      <rect x="40" y="42" width="28" height="6" rx="3" fill="#C9E3A0" />
      <rect x="40" y="56" width="34" height="6" rx="3" fill="#C9E3A0" />
      <text x="60" y="88" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="20" fontWeight="700" fill="#4D7C0F">
        ₹
      </text>
    </svg>
  );
}

function Reports() {
  const bars = [36, 52, 44, 64, 76];
  return (
    <svg width="150" height="110" viewBox="0 0 150 110" aria-hidden="true" className="spot-bars">
      {bars.map((h, i) => (
        <rect key={i} x={14 + i * 26} y={100 - h} width="18" height={h} rx="5" fill={i === bars.length - 1 ? '#1D5FB8' : '#A9C6EE'} style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
    </svg>
  );
}

function Assistant() {
  return (
    <div className="grid w-full gap-1.5 px-4">
      <div className="rounded-lg bg-on-ink/[0.07] px-2.5 py-2 text-[12px] text-on-ink/70">
        <b className="text-brand-300">3 renewals</b> need a follow-up this week.
      </div>
      <div className="rounded-lg bg-on-ink/[0.07] px-2.5 py-2 text-[12px] text-on-ink/70">
        <b className="text-brand-300">PRJ-208</b> is 2 days behind on data migration.
      </div>
    </div>
  );
}

const CARDS = [
  { title: 'CRM & pipeline', body: 'Every enquiry captured, scored and followed up.', Art: Crm, bg: 'bg-sky-bg' },
  { title: 'Projects & tasks', body: 'Templates create the milestones and tasks for you.', Art: Projects, bg: 'bg-violet-bg' },
  { title: 'People & HR', body: 'Attendance, leave and timesheets next to the work.', Art: People, bg: 'bg-amber-bg' },
  { title: 'Support tickets', body: 'Every ticket tied to the client and its contract.', Art: Support, bg: 'bg-coral-bg' },
  { title: 'AMC & renewals', body: 'Reminders at 90, 60 and 30 days. Renew in one click.', Art: Renewals, bg: 'bg-teal-bg' },
  { title: 'Billing', body: 'Milestone and recurring invoices with GST worked out.', Art: Billing, bg: 'bg-lime-bg' },
  { title: 'Reports', body: 'Sales, delivery and support numbers, per team or person.', Art: Reports, bg: 'bg-sky-bg' },
  { title: 'Smart Assistant', body: 'Ask about your work and see what needs attention first.', Art: Assistant, dark: true },
];

export default function Modules() {
  return (
    <section id="modules" className="px-[clamp(16px,4vw,40px)] py-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          eyebrow="Modules"
          title="Everything the operation needs, already connected."
          lede="Switch on the modules you use. Each one shares the same clients, people and permissions."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ title, body, Art, bg, dark }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className={`overflow-hidden rounded-[20px] border transition-shadow duration-300 hover:shadow-[0_24px_40px_-28px_rgba(28,25,23,0.45)] ${
                dark ? 'border-ink bg-ink text-on-ink' : 'border-line bg-paper'
              }`}
            >
              <div className={`flex h-[150px] items-center justify-center ${dark ? 'bg-on-ink/[0.04]' : bg}`}>
                <Art />
              </div>
              <div className="grid gap-1.5 px-5 pb-6 pt-4">
                <h3 className="text-[18px] font-semibold tracking-[-0.015em]">{title}</h3>
                <p className={`text-[14px] leading-[1.5] ${dark ? 'text-on-ink/60' : 'text-muted'}`}>{body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
