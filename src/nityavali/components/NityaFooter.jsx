import KnordLogo from '../../components/KnordLogo.jsx';

export default function NityaFooter() {
  return (
    <footer
      className="border-t px-6 py-12 sm:px-14"
      style={{ borderColor: 'var(--n-border)' }}
    >
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <KnordLogo size={30} />
          <span
            className="text-[15px] font-bold tracking-[0.1em]"
            style={{ color: 'var(--n-navy)' }}
          >
            NITYAVALI
          </span>
        </div>

        <a
          href="/"
          className="text-[14.5px] font-semibold"
          style={{ color: 'var(--n-teal)' }}
        >
          &#8592; Back to Knord Technologies
        </a>
      </div>

      <div
        className="mx-auto mt-8 max-w-[1180px] text-[13px]"
        style={{ color: 'var(--n-text-muted)' }}
      >
        Nityavali is a product of Knord Technologies. &copy; 2026 Knord
        Technologies. All rights reserved.
      </div>
    </footer>
  );
}
