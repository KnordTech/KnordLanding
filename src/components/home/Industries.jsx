import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionHead } from '../site/Reveal.jsx';

// One product card per industry template, floating at different scroll speeds.
// Company names and figures are examples.

function Row({ label, value, tone = '' }) {
  return (
    <div className="flex justify-between gap-3 text-[12.5px]">
      <span className="text-muted">{label}</span>
      <b className={`tabular-nums ${tone}`}>{value}</b>
    </div>
  );
}

function Tick({ done, children }) {
  return (
    <div className="flex items-center gap-2 text-[12.5px]">
      <span className={`grid h-4 w-4 place-items-center rounded-[5px] text-[10px] ${done ? 'bg-amber text-paper' : 'border border-line-strong'}`}>{done ? '✓' : ''}</span>
      <span className={done ? 'text-ink-3' : 'text-muted'}>{children}</span>
    </div>
  );
}

function Card({ progress, depth, className, head, tone, children }) {
  const y = useTransform(progress, [0, 1], [depth, -depth]);
  return (
    <motion.div style={{ y }} className={`absolute grid gap-3 rounded-[20px] border border-line bg-paper p-4 shadow-[0_24px_50px_-28px_rgba(28,25,23,0.4)] ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <b className="text-[14px] tracking-[-0.01em]">{head}</b>
        <span className={`rounded-full px-2 py-0.5 font-mono text-[10.5px] ${tone}`}>Template</span>
      </div>
      {children}
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

        <div className="relative h-[clamp(420px,46vw,520px)]" aria-hidden="true">
          <div className="absolute inset-[8%] rounded-[32px] bg-[radial-gradient(closest-side,rgba(30,148,132,0.10),transparent)]" />

          <Card progress={scrollYProgress} depth={20} head="Sunrise Clinics · Today" tone="bg-sky-bg text-sky" className="left-0 top-[4%] w-[min(290px,62%)]">
            <div className="grid grid-cols-3 gap-2">
              {[['42', 'Appointments'], ['9', 'Walk-ins'], ['3', 'Doctors in']].map(([v, k]) => (
                <div key={k} className="rounded-xl bg-sky-bg p-2 text-center">
                  <div className="text-[18px] font-bold text-sky-deep">{v}</div>
                  <div className="text-[10px] text-sky">{k}</div>
                </div>
              ))}
            </div>
            <Row label="Next: Dr. Mehta" value="10:30" />
            <Row label="Open tickets" value="3" tone="text-coral" />
          </Card>

          <Card progress={scrollYProgress} depth={55} head="Northfield School · Fees" tone="bg-violet-bg text-violet" className="right-0 top-[18%] w-[min(260px,56%)]">
            <div>
              <div className="flex justify-between text-[12px]">
                <span className="text-muted">Term 2 collected</span>
                <b className="text-violet-deep">78%</b>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-violet-bg">
                <div className="h-full w-[78%] rounded-full bg-violet" />
              </div>
            </div>
            <Row label="Class 9 · reminders sent" value="24" />
            <Row label="Due this week" value="₹3.1L" tone="text-violet" />
          </Card>

          <Card progress={scrollYProgress} depth={35} head="Arcline Infra · Site report" tone="bg-amber-bg text-amber" className="bottom-[2%] left-[14%] w-[min(280px,62%)]">
            <Tick done>Materials delivered</Tick>
            <Tick done>Safety check signed off</Tick>
            <Tick>Slab casting · Block B</Tick>
            <div className="flex items-center gap-2 rounded-xl bg-amber-bg px-2.5 py-2 text-[12px] text-amber-deep">
              <span className="h-2 w-2 rounded-full bg-amber" /> Report filed by Vikram, 6:40 pm
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
