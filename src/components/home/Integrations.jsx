import { motion } from 'motion/react';
import { siFacebook, siGmail, siGooglecalendar, siInstagram, siMeta, siRazorpay, siWhatsapp, siX } from 'simple-icons';
import { SectionHead } from '../site/Reveal.jsx';
import { NityavaliMark } from '../site/Marks.jsx';

// Only tools Nityavali actually connects to today. Brand icons come from Simple Icons;
// tools that library does not carry get a neutral icon instead of a copied logo.
function Brand({ icon }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}

function Plain({ children }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

const SheetIcon = (
  <Plain>
    <rect x="4" y="3" width="16" height="18" rx="2.5" fill="#EDF5DC" stroke="#4D7C0F" strokeWidth="1.6" />
    <path d="M4 9h16M4 15h16M10 3v18" stroke="#4D7C0F" strokeWidth="1.4" />
  </Plain>
);
const FormIcon = (
  <Plain>
    <rect x="3" y="4" width="18" height="16" rx="2.5" fill="#E6F0FB" stroke="#1D5FB8" strokeWidth="1.6" />
    <path d="M7 9h10M7 13h6" stroke="#1D5FB8" strokeWidth="1.6" strokeLinecap="round" />
  </Plain>
);
const MailIcon = (
  <Plain>
    <rect x="3" y="5" width="18" height="14" rx="2.5" fill="#FDF1DA" stroke="#B25E09" strokeWidth="1.6" />
    <path d="M4 7l8 6 8-6" stroke="#B25E09" strokeWidth="1.6" strokeLinejoin="round" />
  </Plain>
);

const INNER = [
  { name: 'Google Calendar', el: <Brand icon={siGooglecalendar} /> },
  { name: 'Gmail', el: <Brand icon={siGmail} /> },
  { name: 'WhatsApp', el: <Brand icon={siWhatsapp} /> },
  { name: 'Meta lead ads', el: <Brand icon={siMeta} /> },
  { name: 'Excel & CSV import', el: SheetIcon },
];
const OUTER = [
  { name: 'Facebook', el: <Brand icon={siFacebook} /> },
  { name: 'Website forms', el: FormIcon },
  { name: 'Instagram', el: <Brand icon={siInstagram} /> },
  { name: 'Razorpay', el: <Brand icon={siRazorpay} /> },
  { name: 'X', el: <Brand icon={siX} /> },
  { name: 'Any email (SMTP)', el: MailIcon },
];

function Ring({ items, radius, duration, offset, reverse }) {
  return (
    <div
      className="orbit-ring absolute inset-0"
      style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
    >
      <div
        className="absolute rounded-full border border-dashed border-line-strong"
        style={{ inset: `${50 - radius}%` }}
        aria-hidden="true"
      />
      {items.map((it, i) => {
        const a = ((i / items.length) * 360 + offset) * (Math.PI / 180);
        const left = 50 + radius * Math.cos(a);
        const top = 50 + radius * Math.sin(a);
        return (
          <motion.div
            key={it.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.4, left: '50%', top: '50%' }}
            whileInView={{ opacity: 1, scale: 1, left: `${left}%`, top: `${top}%` }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.07 }}
          >
            {/* counter-rotate so the icon stays upright while its ring turns */}
            <div
              className="orbit-ring group relative"
              style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'normal' : 'reverse' }}
            >
              <div className="grid h-[clamp(44px,8vw,60px)] w-[clamp(44px,8vw,60px)] place-items-center rounded-2xl border border-line bg-paper shadow-[0_12px_28px_-16px_rgba(28,25,23,0.35)] transition-transform duration-300 group-hover:scale-110">
                {it.el}
              </div>
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[11.5px] text-on-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {it.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" className="overflow-hidden px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <SectionHead
            eyebrow="Integrations"
            title="Works with the tools you already use."
            lede="Leads arrive from your ads, website and WhatsApp. Meetings land in Google Calendar, emails go from your own address, and payments run through Razorpay."
          />
          <ul className="sr-only">
            {[...INNER, ...OUTER].map((it) => (
              <li key={it.name}>
                {it.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="true">
          <Ring items={OUTER} radius={46} duration={90} offset={-60} />
          <Ring items={INNER} radius={29} duration={70} offset={-90} reverse />
          <div className="absolute left-1/2 top-1/2 grid h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper shadow-[0_20px_50px_-24px_rgba(28,25,23,0.4)]">
            <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(closest-side,rgba(30,148,132,0.18),transparent)]" />
            <NityavaliMark size={64} />
          </div>
        </div>
      </div>
    </section>
  );
}
