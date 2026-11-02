import { KnordMark, NityavaliMark, RippleMark } from './Marks.jsx';

const PRODUCTS = {
  nityavali: { Mark: NityavaliMark, name: 'Nityavali' },
  ripple: { Mark: RippleMark, name: 'Ripple' },
};

// Wraps a piece of the lockup in a link when it has somewhere to go.
function Part({ href, label, children }) {
  const cls = 'flex items-center gap-2.5';
  return href ? (
    <a href={href} aria-label={label} className={cls}>
      {children}
    </a>
  ) : (
    <span className={cls}>{children}</span>
  );
}

// Site lockup: "Knord / <product>" for the product the page is about; `product={false}`
// shows Knord alone. Each half can link somewhere (Knord to the company page, the product
// to the top of its own page).
export default function Logo({ size = 30, product = 'nityavali', knordHref, productHref }) {
  const p = PRODUCTS[product];
  return (
    <span className="flex items-center gap-2.5">
      <Part href={knordHref} label="Knord Technologies home">
        <KnordMark size={size} />
        <b className="text-[16px] font-bold tracking-[-0.03em] text-ink">Knord</b>
      </Part>
      {p ? (
        <>
          <span className="text-line-strong" aria-hidden="true">
            /
          </span>
          <Part href={productHref} label={`${p.name} home`}>
            <p.Mark size={size - 4} />
            <b className="text-[16px] font-bold tracking-[-0.03em] text-ink">{p.name}</b>
          </Part>
        </>
      ) : null}
    </span>
  );
}
