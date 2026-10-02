// Brand marks, locked 2026-10: every Knord product shares one grammar — a dark rounded
// square, white strokes, and one coloured stroke that turns into a north-east arrow.
// Knord's arrow is orange; each product gets its own colour.

const INK = '#1C1917';
const WHITE = '#FAF9F6';

function Square({ size, label, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className="shrink-0"
    >
      <rect width="64" height="64" rx="16" fill={INK} />
      {children}
    </svg>
  );
}

// Knord: a K whose upper arm is the arrow.
export function KnordMark({ size = 32, label }) {
  return (
    <Square size={size} label={label}>
      <rect x="17" y="14" width="7" height="36" rx="3.5" fill={WHITE} />
      <path d="M25 34 L44 50" stroke={WHITE} strokeWidth="7" strokeLinecap="round" />
      <path d="M25 31 L44 14" stroke="#E8771A" strokeWidth="7" strokeLinecap="round" />
      <path d="M33 13.5 H44.5 V25" stroke="#E8771A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Square>
  );
}

// Nityavali: an N whose last stroke kicks up into the arrow.
export function NityavaliMark({ size = 32, label }) {
  return (
    <Square size={size} label={label}>
      <path d="M17 50 V14 L39 46" stroke={WHITE} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39 46 L39 30 L47 14" stroke="#1FA391" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37.5 14 H47.5 V24" stroke="#1FA391" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Square>
  );
}

// Placeholder for the next product (its colour is not decided yet).
export function NextProductMark({ size = 32 }) {
  return (
    <Square size={size}>
      <rect x="17" y="14" width="7" height="36" rx="3.5" fill={WHITE} opacity="0.35" />
      <path d="M28 44 L44 20" stroke="#8B6CF0" strokeWidth="7" strokeLinecap="round" />
      <path d="M34 19.5 H44.5 V30" stroke="#8B6CF0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Square>
  );
}
