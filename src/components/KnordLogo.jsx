export default function KnordLogo({ size = 32, className = '' }) {
  return (
    <div
      className={`theme-transition flex shrink-0 items-center justify-center font-extrabold ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.25),
        backgroundColor: 'var(--indigo)',
        color: 'var(--logo-fg)',
        fontSize: Math.round(size * 0.47),
      }}
      aria-hidden="true"
    >
      K
    </div>
  );
}
