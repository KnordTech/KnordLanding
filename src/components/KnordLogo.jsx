import Logo from './site/Logo.jsx';

// Kept for the privacy page; the mark itself lives in site/Logo.jsx.
export default function KnordLogo({ size = 36 }) {
  return <Logo size={size} withName={false} />;
}
