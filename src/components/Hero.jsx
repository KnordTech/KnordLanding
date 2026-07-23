import NetworkMotif from './NetworkMotif';

export default function Hero({ dark }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-28 sm:px-14">
      <NetworkMotif dark={dark} />

      <div className="relative z-10 mx-auto flex max-w-[780px] flex-col items-center gap-5 text-center">
        <div className="text-sm font-semibold uppercase tracking-[0.08em] text-amber">
          Knord Technologies
        </div>
        <h1
          className="theme-transition m-0 text-4xl font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-6xl"
          style={{ color: 'var(--heading)' }}
        >
          Operational technology, built for how real businesses actually run.
        </h1>
        <p
          className="theme-transition m-0 max-w-[620px] text-base leading-[1.6] sm:text-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          We design and build enterprise software that removes friction from
          day-to-day operations — starting with Nityavali, our flagship
          platform for professional services businesses.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a
            href="/nityavali"
            className="theme-transition rounded-[10px] bg-amber px-[26px] py-[14px] text-[15.5px] font-semibold"
            style={{ color: 'var(--on-accent)' }}
          >
            Explore Nityavali
          </a>
          <a
            href="#contact"
            className="theme-transition rounded-[10px] border-[1.5px] px-[26px] py-[13px] text-[15.5px] font-semibold"
            style={{ borderColor: 'var(--border)', color: 'var(--heading)' }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
