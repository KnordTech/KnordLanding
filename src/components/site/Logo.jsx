import { KnordMark, NityavaliMark, RippleMark } from './Marks.jsx';

const PRODUCTS = {
  nityavali: { Mark: NityavaliMark, name: 'Nityavali' },
  ripple: { Mark: RippleMark, name: 'Ripple' },
};

// Site lockup: "Knord / <product>" for the product the page is about; `product={false}`
// shows Knord alone.
export default function Logo({ size = 30, product = 'nityavali' }) {
  const p = PRODUCTS[product];
  return (
    <span className="flex items-center gap-2.5">
      <KnordMark size={size} />
      <b className="text-[16px] font-bold tracking-[-0.03em] text-ink">Knord</b>
      {p ? (
        <>
          <span className="text-line-strong" aria-hidden="true">
            /
          </span>
          <p.Mark size={size - 4} />
          <b className="text-[16px] font-bold tracking-[-0.03em] text-ink">{p.name}</b>
        </>
      ) : null}
    </span>
  );
}
