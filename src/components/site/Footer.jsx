import Logo from './Logo.jsx';
import { SIGN_IN_URL } from './Nav.jsx';

const COLUMNS = [
  {
    title: 'Nityavali',
    links: [
      { href: '/#workflow', label: 'Workflow' },
      { href: '/#modules', label: 'Modules' },
      { href: '/#plans', label: 'Plans' },
      { href: SIGN_IN_URL, label: 'Sign in' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/#knord', label: 'About Knord' },
      { href: '/#demo', label: 'Contact' },
      { href: '/privacy', label: 'Privacy policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="px-[clamp(16px,4vw,40px)] pb-10 pt-14 text-[14px] text-muted">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-7 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <a href="/#top" aria-label="Knord Technologies home">
              <Logo tagline="" />
            </a>
            <p className="mt-3 max-w-[34ch]">Operational software, built in India for teams everywhere.</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-2.5 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink-3">{col.title}</h4>
              <ul className="grid gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="mb-2.5 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink-3">Contact</h4>
            <ul className="grid gap-2">
              <li>
                <a href="mailto:hello@knordtechnologies.com" className="break-all hover:text-ink">
                  hello@knordtechnologies.com
                </a>
              </li>
              <li>India</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-[13px]">
          <span>&copy; {new Date().getFullYear()} Knord Technologies. All rights reserved.</span>
          <span>Nityavali is a Knord Technologies product.</span>
        </div>
      </div>
    </footer>
  );
}
