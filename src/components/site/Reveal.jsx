import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

// Fades and lifts its content in the first time it scrolls into view.
export default function Reveal({ as = 'div', delay = 0, y = 24, className = '', children, ...props }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}

// Section heading block: eyebrow, title and optional lede, revealed together.
export function SectionHead({ eyebrow, title, lede, accent = 'text-brand-600', className = '' }) {
  return (
    <Reveal className={`grid max-w-[760px] gap-3.5 ${className}`}>
      {eyebrow ? <Eyebrow className={accent}>{eyebrow}</Eyebrow> : null}
      <h2 className="text-[clamp(30px,4.2vw,48px)] font-bold leading-[1.08] tracking-[-0.025em]">{title}</h2>
      {lede ? <p className="max-w-[60ch] text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-muted">{lede}</p> : null}
    </Reveal>
  );
}

export function Eyebrow({ className = 'text-brand-600', children }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] ${className}`}>
      <span className="h-1.5 w-1.5 rounded-[2px] bg-current" />
      {children}
    </span>
  );
}
