export default function KnordLogo({ size = 36, className = '' }) {
  return (
    <img
      src="/knord-logo.jpg"
      alt=""
      width={Math.round(size * 1.43)}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      style={{ height: size, width: 'auto' }}
      aria-hidden="true"
      decoding="async"
    />
  );
}
