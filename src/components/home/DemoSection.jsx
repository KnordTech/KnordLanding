import Reveal from '../site/Reveal.jsx';
import LeadForm from '../LeadForm.jsx';
import { openWhatsApp } from '../../lib/whatsapp.js';

export default function DemoSection() {
  return (
    <section id="demo" className="px-[clamp(16px,4vw,40px)] pb-[clamp(56px,8vw,96px)]">
      <Reveal className="relative mx-auto grid max-w-[1180px] gap-[clamp(28px,5vw,64px)] overflow-hidden rounded-3xl bg-ink p-[clamp(24px,5vw,64px)] text-on-ink lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div
          aria-hidden="true"
          className="glow-drift pointer-events-none absolute -bottom-[300px] -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(30,148,132,0.45),transparent)]"
        />
        <div className="relative">
          <h2 className="text-[clamp(30px,4vw,46px)] font-bold leading-[1.08] tracking-[-0.025em]">See Nityavali running on your business.</h2>
          <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.6] text-on-ink/60">
            A 30-minute walkthrough with your own pipeline and projects in mind. Tell us a little about your team and
            we&apos;ll set it up.
          </p>
          <div className="mt-8 grid gap-4">
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="inline-flex w-fit items-center gap-2 rounded-[10px] border border-on-ink/15 bg-transparent px-4 py-2.5 text-[14.5px] font-semibold text-on-ink transition hover:bg-on-ink/5"
            >
              Prefer chat? Message us on WhatsApp
            </button>
            <div>
              <small className="block font-mono text-[11.5px] uppercase tracking-[0.06em] text-on-ink/50">Or email</small>
              <a href="mailto:hello@knordtechnologies.com" className="text-[18px] font-semibold">
                hello@knordtechnologies.com
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <LeadForm
            submitLabel="Request my demo"
            messageLabel="What would you like to see?"
            messagePlaceholder="Your team size, the modules you care about, or a problem you want solved."
          />
        </div>
      </Reveal>
    </section>
  );
}
