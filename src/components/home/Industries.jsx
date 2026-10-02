import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { SectionHead } from '../site/Reveal.jsx';

// Photo slots. Until real or stock photos are added (set `src`), each shows a tinted
// placeholder so the layout can be reviewed.
const PHOTOS = [
  { label: 'Clinic front desk', src: null, tone: 'from-sky-bg to-[#D7E6F7] text-sky-deep', box: 'left-0 top-0 h-[62%] w-[58%]', depth: 30 },
  { label: 'Site engineer with a tablet', src: null, tone: 'from-amber-bg to-[#F8E2BC] text-amber-deep', box: 'right-0 top-[6%] h-[42%] w-[38%]', depth: 60 },
  { label: 'School admin office', src: null, tone: 'from-violet-bg to-[#E0D6F8] text-violet-deep', box: 'bottom-0 right-[4%] h-[44%] w-[56%]', depth: 45 },
];

function Photo({ label, src, tone, box, depth, progress }) {
  const y = useTransform(progress, [0, 1], [depth, -depth]);
  return (
    <motion.div style={{ y }} className={`absolute overflow-hidden rounded-3xl bg-gradient-to-br ${tone} ${box}`}>
      {src ? (
        <img src={src} alt={label} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="flex h-full items-end bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.35)_0_14px,transparent_14px_28px)] p-4">
          <span className="rounded-lg bg-paper/90 px-2.5 py-1.5 font-mono text-[11px]">[Photo: {label}]</span>
        </div>
      )}
    </motion.div>
  );
}

export default function Industries() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  return (
    <section id="industries" ref={ref} className="px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <SectionHead
            eyebrow="Built for real operations"
            title="For clinics, campuses, sites and service teams."
            lede="Industry templates set up the right fields from day one, whether you run front desks, classrooms or project sites."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              ['Healthcare', 'bg-sky-bg text-sky'],
              ['Education', 'bg-violet-bg text-violet'],
              ['Construction', 'bg-amber-bg text-amber'],
              ['IT services', 'bg-teal-bg text-brand-600'],
            ].map(([n, t]) => (
              <span key={n} className={`rounded-full px-3 py-1.5 text-[13px] font-semibold ${t}`}>
                {n}
              </span>
            ))}
          </div>
        </div>
        <div className="relative h-[clamp(380px,48vw,540px)]">
          {PHOTOS.map((p) => (
            <Photo key={p.label} {...p} progress={scrollYProgress} />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[26%] top-[48%] z-[2] grid w-[min(240px,70%)] gap-2 rounded-2xl border border-line bg-paper p-3.5 shadow-[0_24px_44px_-24px_rgba(28,25,23,0.4)]"
          >
            <b className="text-[13px]">Today at Sunrise Clinics</b>
            <div className="flex justify-between text-[12px]">
              <span className="text-muted">Appointments</span>
              <b>42</b>
            </div>
            <div className="flex justify-between text-[12px]">
              <span className="text-muted">Open tickets</span>
              <b className="text-coral">3</b>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-sunk">
              <div className="h-full w-[72%] bg-brand-600" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
