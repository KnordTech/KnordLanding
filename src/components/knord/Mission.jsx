import Reveal, { Eyebrow } from '../site/Reveal.jsx';
import { KnordMark } from '../site/Marks.jsx';

const FACTS = [
  ['2', 'products, one live and one in early access'],
  ['250+', 'people run their day in Nityavali'],
  ['India', 'where we build, and who we build for first'],
];

export default function Mission() {
  return (
    <section id="mission" className="scroll-mt-20 px-[clamp(16px,4vw,40px)] pb-[clamp(72px,10vw,128px)]">
      <Reveal className="relative mx-auto grid max-w-[1180px] gap-10 overflow-hidden rounded-3xl bg-ink p-[clamp(24px,5vw,64px)] text-on-ink">
        <div
          aria-hidden="true"
          className="glow-drift pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(35,71,201,0.45),transparent)]"
        />
        <div
          aria-hidden="true"
          className="glow-drift pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(232,119,26,0.3),transparent)] [animation-duration:22s]"
        />
        <div className="relative grid max-w-[900px] gap-5">
          <div className="flex items-center gap-3">
            <KnordMark size={36} />
            <Eyebrow className="text-knord-300">Our mission</Eyebrow>
          </div>
          <h2 className="text-[clamp(28px,4vw,46px)] font-bold leading-[1.1] tracking-[-0.025em]">
            Give growing businesses software that fits how they really work, and build it alongside them.
          </h2>
          <p className="max-w-[64ch] text-[17px] leading-[1.65] text-on-ink/65">
            Most business software is made for companies with their own IT teams. We build for the clinic group, the school,
            the services firm and the café: tools that start from their day-to-day work, use AI where it saves real time,
            and are honest about what they can and cannot tell you.
          </p>
        </div>
        <dl className="relative grid gap-6 border-t border-on-ink/10 pt-8 sm:grid-cols-3">
          {FACTS.map(([n, label]) => (
            <div key={n} className="grid gap-1">
              <dt className="text-[clamp(30px,3.6vw,40px)] font-bold tracking-[-0.03em]">{n}</dt>
              <dd className="text-[14.5px] leading-[1.5] text-on-ink/60">{label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
