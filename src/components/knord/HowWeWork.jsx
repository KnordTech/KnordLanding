import Reveal, { SectionHead } from '../site/Reveal.jsx';

const PRINCIPLES = [
  {
    title: 'Rooted in real work',
    body: 'Nityavali was built alongside a live operations team, one release at a time. Every product starts from a job someone already does.',
    tone: 'bg-sky-bg text-sky',
  },
  {
    title: 'AI where it saves time',
    body: 'Assistance built into the everyday work, not bolted on later. If it does not save someone time, it does not ship.',
    tone: 'bg-ripple-50 text-ripple-600',
  },
  {
    title: 'Honest about what it knows',
    body: 'Ripple shows the evidence behind every reason and will not call a winner it cannot back. Our product mock-ups say when figures are examples.',
    tone: 'bg-amber-bg text-amber',
  },
  {
    title: 'India-based, customer-first',
    body: 'We work closely with the businesses we serve, and the people who built the product are the ones who help you roll it out.',
    tone: 'bg-teal-bg text-brand-600',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-20 px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead eyebrow="How we work" accent="text-knord" title="Four things every Knord product holds to." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="grid content-start gap-3 rounded-[20px] border border-line bg-paper p-6">
              <span className={`grid h-10 w-10 place-items-center rounded-xl text-[16px] font-bold ${p.tone}`}>{i + 1}</span>
              <h3 className="text-[19px] font-semibold tracking-[-0.015em]">{p.title}</h3>
              <p className="max-w-[52ch] text-[15px] leading-[1.6] text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
