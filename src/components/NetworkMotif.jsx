const SEED_POSITIONS = [
  [8, 22],
  [22, 60],
  [16, 82],
  [38, 14],
  [46, 48],
  [62, 30],
  [70, 68],
  [84, 18],
  [90, 52],
];

const LINK_PAIRS = [
  [0, 4],
  [4, 5],
  [1, 4],
  [6, 8],
];

export default function NetworkMotif({ dark }) {
  const nodeOpacity = dark ? 0.5 : 0.35;
  const lineOpacity = dark ? 0.22 : 0.16;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {SEED_POSITIONS.map(([left, top], i) => (
        <div
          key={i}
          className="theme-transition absolute rounded-full"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: i % 3 === 0 ? 8 : 5,
            height: i % 3 === 0 ? 8 : 5,
            backgroundColor: i % 4 === 0 ? 'var(--color-amber)' : 'var(--indigo)',
            opacity: nodeOpacity,
            animation: `${i % 2 === 0 ? 'nodeFloat' : 'nodeFloatSlow'} ${7 + i}s ease-in-out infinite`,
          }}
        />
      ))}
      {LINK_PAIRS.map(([a, b], i) => {
        const p1 = SEED_POSITIONS[a];
        const p2 = SEED_POSITIONS[b];
        const dx = p2[0] - p1[0];
        const dy = p2[1] - p1[1];
        const len = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        return (
          <div
            key={i}
            className="theme-transition absolute h-px"
            style={{
              left: `${p1[0]}%`,
              top: `${p1[1]}%`,
              width: `${len}%`,
              backgroundColor: 'var(--indigo)',
              opacity: lineOpacity,
              transformOrigin: '0 0',
              transform: `rotate(${angle}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}
