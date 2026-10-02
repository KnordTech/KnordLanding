import { KnordMark, NityavaliMark } from './Marks.jsx';

// Site lockup: "Knord / Nityavali" while the site leads with Nityavali.
export default function Logo({ size = 30, product = true }) {
  return (
    <span className="flex items-center gap-2.5">
      <KnordMark size={size} />
      <b className="text-[16px] font-bold tracking-[-0.03em] text-ink">Knord</b>
      {product ? (
        <>
          <span className="text-line-strong" aria-hidden="true">
            /
          </span>
          <NityavaliMark size={size - 4} />
          <b className="text-[16px] font-bold tracking-[-0.03em] text-ink">Nityavali</b>
        </>
      ) : null}
    </span>
  );
}
