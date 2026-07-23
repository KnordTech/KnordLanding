const LINKS = [
  { href: '#what-we-do', label: 'What we do' },
  { href: '#products', label: 'Products' },
  { href: '#why-knord', label: 'Why Knord' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav({ dark, onToggleTheme }) {
  return (
    <nav
      className="theme-transition sticky top-0 z-50 flex items-center justify-between gap-6 overflow-x-auto border-b px-6 py-5 backdrop-blur-[10px] sm:px-14"
      style={{
        backgroundColor: 'var(--nav-bg)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="flex shrink-0 items-center gap-3">
        <div
          className="theme-transition flex h-8 w-8 items-center justify-center rounded-lg text-[15px] font-extrabold"
          style={{ backgroundColor: 'var(--indigo)', color: 'var(--logo-fg)' }}
        >
          K
        </div>
        <span
          className="theme-transition text-[17px] font-bold tracking-[-0.01em]"
          style={{ color: 'var(--heading)' }}
        >
          Knord
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-9">
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="theme-transition whitespace-nowrap text-[14.5px] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
          className="theme-transition relative h-6 w-11 shrink-0 rounded-full border-0"
          style={{
            backgroundColor: dark ? 'var(--indigo)' : 'rgba(43,58,103,0.18)',
          }}
        >
          <span
            className="absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.25)] transition-[left] duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ left: dark ? 23 : 3 }}
          />
        </button>

        <a
          href="#contact"
          className="theme-transition shrink-0 whitespace-nowrap rounded-lg bg-amber px-[18px] py-[9px] text-sm font-semibold"
          style={{ color: 'var(--on-accent)' }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
