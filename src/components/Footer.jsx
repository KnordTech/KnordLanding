import KnordLogo from './KnordLogo.jsx';

const LINKS = [
  { href: '#what-we-do', label: 'What we do' },
  { href: '#products', label: 'Products' },
  { href: '#why-knord', label: 'Why Knord' },
  { href: '#contact', label: 'Contact' },
  { href: 'mailto:hello@knord.tech', label: 'hello@knord.tech' },
];

export default function Footer() {
  return (
    <footer
      className="theme-transition border-t px-6 py-10 sm:px-14"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <KnordLogo size={28} />
          <span
            className="theme-transition text-[14.5px] font-semibold"
            style={{ color: 'var(--heading)' }}
          >
            Knord Technologies
          </span>
        </div>

        <div className="flex flex-wrap gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="theme-transition text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div
        className="theme-transition mt-7 text-center text-[13px]"
        style={{ color: 'var(--text-muted)' }}
      >
        &copy; 2026 Knord Technologies. All rights reserved.
      </div>
    </footer>
  );
}
