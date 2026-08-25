import NityaLogo from './NityaLogo';

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#modules', label: 'Modules' },
  { href: '#journey', label: 'How it works' },
  { href: '#why', label: 'Why Nityavali' },
];

export default function NityaNav() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between gap-6 overflow-x-auto border-b px-6 py-4 backdrop-blur-[10px] sm:px-14"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderColor: 'var(--n-border)',
      }}
    >
      <a href="#top" className="flex shrink-0 items-center gap-3">
        <NityaLogo />
        <span className="flex flex-col leading-none">
          <span
            className="text-[17px] font-extrabold tracking-[0.12em]"
            style={{ color: 'var(--n-navy)' }}
          >
            NITYAVALI
          </span>
          <span
            className="mt-1 text-[11px] font-medium tracking-[0.02em]"
            style={{ color: 'var(--n-text-muted)' }}
          >
            by Knord Technologies
          </span>
        </span>
      </a>

      <div className="flex shrink-0 items-center gap-8">
        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[14.5px] font-medium"
              style={{ color: 'var(--n-text-muted)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/"
            className="whitespace-nowrap text-[14.5px] font-medium"
            style={{ color: 'var(--n-text-muted)' }}
          >
            &#8592; Knord Technologies
          </a>
        </div>

        <a
          href="#demo"
          className="shrink-0 whitespace-nowrap rounded-lg px-[18px] py-[10px] text-sm font-semibold"
          style={{ backgroundColor: 'var(--n-teal)', color: 'var(--n-on-dark)' }}
        >
          Request a demo
        </a>
      </div>
    </nav>
  );
}
