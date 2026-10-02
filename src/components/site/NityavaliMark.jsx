import { useId } from 'react';

// Nityavali product mark, in the v2.0 teal (same shape as the app's favicon).
export default function NityavaliMark({ size = 32, className = '' }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={id} x1="8" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8FD0C4" />
          <stop offset="1" stopColor="#1E9484" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="#1C1917" />
      <path d="M14 34V14l8 12 8-12v20" stroke={`url(#${id})`} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 14c4 6 6 10 6 14s-2 8-6 12" stroke={`url(#${id})`} strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}
