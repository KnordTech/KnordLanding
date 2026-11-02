import Reveal, { SectionHead } from '../site/Reveal.jsx';

const STAGES = [
  {
    title: 'Build the audience',
    body: 'A synthetic audience for the platform and place you post to, built from census and survey data. Every trait has a source.',
    bg: 'bg-sky-bg',
    text: 'text-sky',
  },
  {
    title: 'Simulate',
    body: 'Each draft runs in its own world, identical except for the content: the same people, the same feed, the same competing posts, with shares spreading through followers.',
    bg: 'bg-ripple-50',
    text: 'text-ripple-600',
  },
  {
    title: 'Investigate and explain',
    body: 'Ripple queries its own run log, interviews simulated people, and ties each reason to the action and query it came from.',
    bg: 'bg-amber-bg',
    text: 'text-amber',
  },
  {
    title: 'Recommend',
    body: 'It says what to do next and drafts a rewrite. Anything that spends money or publishes waits for your approval.',
    bg: 'bg-teal-bg',
    text: 'text-brand-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-[clamp(16px,4vw,40px)] py-[clamp(72px,10vw,128px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          eyebrow="How it works"
          accent="text-ripple-600"
          title="A rehearsal for your post, run by many agents at once."
          lede="Anything public goes out blind. When it lands badly, or in silence, the people who scrolled past never tell you why. Ripple runs that reaction first, in four stages."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="grid content-start gap-3 rounded-[18px] border border-line bg-paper p-5">
              <span className={`grid h-11 w-11 place-items-center rounded-xl text-[17px] font-bold ${s.bg} ${s.text}`}>{i + 1}</span>
              <h3 className="text-[18px] font-semibold tracking-[-0.015em]">{s.title}</h3>
              <p className="text-[14.5px] leading-[1.55] text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
