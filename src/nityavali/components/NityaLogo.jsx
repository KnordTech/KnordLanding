// Nityavali brand mark — three ascending strokes ("nitya" = perpetual, an
// ever-rising ledger) in the teal → purple → amber accent order.
export default function NityaLogo({ size = 34 }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-[9px]"
      style={{ width: size, height: size, backgroundColor: 'var(--n-deep-navy)' }}
      aria-hidden="true"
    >
      <svg
        width={size * 0.56}
        height={size * 0.56}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="14" width="4" height="7" rx="1.5" fill="var(--n-teal)" />
        <rect x="10" y="9" width="4" height="12" rx="1.5" fill="var(--n-purple)" />
        <rect x="17" y="4" width="4" height="17" rx="1.5" fill="var(--n-amber)" />
      </svg>
    </span>
  );
}
