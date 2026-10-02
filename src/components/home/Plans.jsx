import { motion } from 'motion/react';
import { SectionHead } from '../site/Reveal.jsx';
import { Check } from './Hero.jsx';

// Draft plan contents — prices are shared on a call for now.
const PLANS = [
  {
    name: 'Starter',
    for: 'Small teams moving off spreadsheets',
    features: ['Leads, pipeline and clients', 'Projects and tasks', 'Support tickets', 'Email support'],
  },
  {
    name: 'Growth',
    for: 'Growing teams that sell, deliver and renew',
    featured: true,
    features: [
      'Everything in Starter',
      'Resources, HR and timesheets',
      'AMC contracts and renewal reminders',
      'Billing schedules with GST',
      'Calendar and lead-ad integrations',
      'Your logo and subdomain',
    ],
  },
  {
    name: 'Enterprise',
    for: 'Larger organisations with their own processes',
    features: [
      'Everything in Growth',
      'Industry templates and custom fields',
      'Detailed roles and access',
      'Guided rollout, data import and training',
      'Priority support',
    ],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          eyebrow="Plans"
          title="A plan for every stage of your team."
          lede="Pricing depends on your team size and modules. Tell us about your team and we'll send a quote the same week."
        />
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col rounded-[20px] border p-7 ${
                p.featured ? 'border-ink bg-ink text-on-ink shadow-[0_30px_60px_-30px_rgba(28,25,23,0.55)]' : 'border-line bg-paper'
              }`}
            >
              {p.featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-brand-600 px-2.5 py-0.5 font-mono text-[11px] text-on-ink">Most teams</span>
              ) : null}
              <h3 className="text-[22px] font-bold tracking-[-0.02em]">{p.name}</h3>
              <p className={`mt-1 text-[14.5px] ${p.featured ? 'text-on-ink/60' : 'text-muted'}`}>{p.for}</p>
              <ul className="mt-6 grid flex-1 content-start gap-2.5 text-[14.5px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-1">
                      <Check className={p.featured ? 'text-brand-300' : 'text-brand-600'} />
                    </span>
                    <span className={p.featured ? 'text-on-ink/85' : 'text-ink-3'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`mt-7 inline-flex justify-center rounded-[10px] px-5 py-3 text-[15px] font-semibold transition hover:-translate-y-px ${
                  p.featured ? 'bg-brand-600 text-on-ink hover:bg-brand-700' : 'border border-line bg-paper hover:border-line-strong'
                }`}
              >
                Get a quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
