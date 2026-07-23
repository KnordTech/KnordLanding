export default function SectionEyebrow({ children }) {
  return (
    <div
      className="theme-transition text-[13.5px] font-semibold uppercase tracking-[0.08em]"
      style={{ color: 'var(--indigo)' }}
    >
      {children}
    </div>
  );
}
