// Knord brand mark. Interim: a cropped copy of the current logo, blended onto the light
// background. When the new logo is ready, replace this one file.
export default function Logo({ size = 30, withName = true, tagline = 'Software for operations' }) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src="/brand/knord-logo-interim.jpg"
        alt=""
        aria-hidden="true"
        style={{ height: size, width: 'auto' }}
        className="shrink-0 mix-blend-multiply"
        decoding="async"
      />
      {withName ? (
        <span className="leading-tight">
          <span className="block text-[16px] font-bold tracking-[-0.01em] text-ink">Knord Technologies</span>
          {tagline ? (
            <span className="hidden font-mono text-[10.5px] text-muted sm:block">{tagline}</span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
