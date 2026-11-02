import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Logo from './Logo.jsx';
import { NityavaliMark, RippleMark } from './Marks.jsx';

export const SIGN_IN_URL = 'https://nityavali.com/login';

// What the nav shows on each product's page: its section links, sign-in and main button.
const PRODUCTS = {
  nityavali: {
    home: '#top',
    links: [
      { href: '#workflow', label: 'Workflow' },
      { href: '#modules', label: 'Modules' },
      { href: '#security', label: 'Security' },
      { href: '#plans', label: 'Plans' },
    ],
    signIn: SIGN_IN_URL,
    cta: { href: '#demo', label: 'Book a demo' },
    underline: 'bg-brand-600',
  },
  ripple: {
    home: '#top',
    links: [
      { href: '#how', label: 'How it works' },
      { href: '#evidence', label: 'Evidence' },
      { href: '#tests', label: 'What you can test' },
      { href: '#faq', label: 'FAQ' },
    ],
    cta: { href: '#early-access', label: 'Get early access' },
    underline: 'bg-ripple-600',
  },
};

export default function Nav({ product = 'nityavali' }) {
  const { home, links: LINKS, signIn, cta, underline } = PRODUCTS[product];
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const ddRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Underline the section currently in the middle of the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    LINKS.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [LINKS]);

  useEffect(() => {
    if (!productsOpen) return undefined;
    const close = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !ddRef.current?.contains(e.target)) setProductsOpen(false);
    };
    document.addEventListener('click', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('click', close);
      document.removeEventListener('keydown', close);
    };
  }, [productsOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md backdrop-saturate-150 transition-[border-color,box-shadow] duration-300 ${
        scrolled ? 'border-line bg-canvas/85 shadow-[0_6px_24px_-18px_rgba(28,25,23,0.35)]' : 'border-transparent bg-canvas/70'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-[clamp(16px,4vw,40px)] transition-[height] duration-300 ${
          scrolled ? 'h-[60px]' : 'h-[72px]'
        }`}
      >
        <a href={home} aria-label="Knord Technologies home">
          <Logo product={product} />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div className="relative" ref={ddRef}>
            <button
              type="button"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((o) => !o)}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[14.5px] text-ink-3 transition-colors hover:bg-sunk hover:text-ink"
            >
              Products
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`}>
                <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <AnimatePresence>
              {productsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[calc(100%+8px)] w-[340px] rounded-2xl border border-line bg-paper p-2 shadow-[0_24px_48px_-24px_rgba(28,25,23,0.35)]"
                >
                  <a href={product === 'nityavali' ? '#top' : '/'} onClick={() => setProductsOpen(false)} className="grid grid-cols-[36px_1fr] items-center gap-3 rounded-xl p-2.5 hover:bg-canvas">
                    <NityavaliMark size={36} />
                    <span>
                      <span className="flex items-center gap-2 text-[14.5px] font-semibold">
                        Nityavali <span className="chip">Live</span>
                      </span>
                      <span className="text-[13px] text-muted">Operations platform, from CRM to renewals</span>
                    </span>
                  </a>
                  <a href={product === 'ripple' ? '#top' : '/ripple'} onClick={() => setProductsOpen(false)} className="grid grid-cols-[36px_1fr] items-center gap-3 rounded-xl p-2.5 hover:bg-canvas">
                    <RippleMark size={36} />
                    <span>
                      <span className="flex items-center gap-2 text-[14.5px] font-semibold">
                        Ripple <span className="chip plain">Early access</span>
                      </span>
                      <span className="text-[13px] text-muted">See how people will react before you post</span>
                    </span>
                  </a>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative rounded-lg px-3 py-2 text-[14.5px] transition-colors hover:bg-sunk hover:text-ink ${active === l.href ? 'text-ink' : 'text-ink-3'}`}
            >
              {l.label}
              {active === l.href ? (
                <motion.span layoutId="nav-underline" className={`absolute inset-x-3 bottom-0.5 h-0.5 rounded ${underline}`} />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {signIn ? (
            <a href={signIn} className="hidden rounded-lg px-3 py-2 text-[14.5px] font-medium hover:bg-sunk lg:inline-block">
              Sign in
            </a>
          ) : null}
          <a
            href={cta.href}
            className="hidden whitespace-nowrap rounded-[10px] bg-ink px-4 py-2.5 text-[14px] font-semibold text-on-ink transition hover:-translate-y-px hover:bg-ink-2 min-[420px]:inline-block"
          >
            {cta.label}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-paper lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d={menuOpen ? 'M4 4l10 10M14 4L4 14' : 'M3 6h12M3 12h12'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden px-[clamp(16px,4vw,40px)] lg:hidden"
            aria-label="Mobile"
          >
            <div className="grid pb-4" onClick={(e) => e.target.tagName === 'A' && setMenuOpen(false)}>
              {[
                ...LINKS,
                product === 'ripple' ? { href: '/', label: 'Nityavali' } : { href: '/ripple', label: 'Ripple' },
                { href: product === 'nityavali' ? '#knord' : '/#knord', label: 'About Knord' },
                ...(signIn ? [{ href: signIn, label: 'Sign in' }] : []),
                cta,
              ].map((l) => (
                <a key={l.href} href={l.href} className="border-b border-line px-1 py-3 font-medium">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
