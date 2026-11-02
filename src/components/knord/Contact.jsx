import Reveal from '../site/Reveal.jsx';
import LeadForm from '../LeadForm.jsx';
import { openWhatsApp } from '../../lib/whatsapp.js';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-[clamp(16px,4vw,40px)] pb-[clamp(56px,8vw,96px)]">
      <Reveal className="relative mx-auto grid max-w-[1180px] gap-[clamp(28px,5vw,64px)] overflow-hidden rounded-3xl bg-ink p-[clamp(24px,5vw,64px)] text-on-ink lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div
          aria-hidden="true"
          className="glow-drift pointer-events-none absolute -bottom-[300px] -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(35,71,201,0.5),transparent)]"
        />
        <div className="relative">
          <h2 className="text-[clamp(30px,4vw,46px)] font-bold leading-[1.08] tracking-[-0.025em]">Talk to the team.</h2>
          <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.6] text-on-ink/60">
            Interested in Nityavali or Ripple, or have a problem you think we should solve? Tell us a little about your
            business and we&apos;ll get back to you.
          </p>
          <div className="mt-8 grid gap-4">
            <button
              type="button"
              onClick={() => openWhatsApp('Knord Technologies')}
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
            submitLabel="Send"
            messageLabel="How can we help?"
            messagePlaceholder="Which product you're interested in, or the problem you'd like solved."
            buttonClassName="bg-knord hover:bg-[#1b39a6]"
            tag="Knord site"
          />
        </div>
      </Reveal>
    </section>
  );
}
