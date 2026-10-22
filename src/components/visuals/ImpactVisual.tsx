/** PLACEHOLDER for `impact-globe` (HER-04). An abstract national node network:
 *  intentionally NOT a literal map or globe (no geographic claims). */
const nodes: [number, number][] = [
  [250, 60], [170, 110], [330, 120], [110, 190], [230, 170], [370, 210],
  [160, 280], [290, 260], [230, 360], [350, 330], [90, 120], [410, 120],
];
const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [4, 7], [3, 6], [6, 7], [7, 8], [7, 9], [5, 9], [4, 6], [10, 1], [11, 2], [10, 3], [8, 6],
];
const trackColors = ["#F43F5E", "#06B6D4", "#22C55E"];

export function ImpactVisual({ src }: { src?: string }) {
  if (src) return <img className="impact__img" src={src} alt="Network of connected engineering projects across the nation" loading="lazy" />;
  return (
    <svg
      className="impact__svg"
      viewBox="0 0 500 420"
      role="img"
      aria-label="Network of connected nodes representing engineering projects across the nation"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="iv-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4F46E5" stopOpacity="0.28" />
          <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
        </radialGradient>
        <pattern id="iv-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#312E81" fillOpacity="0.35" />
        </pattern>
      </defs>
      <rect width="500" height="420" fill="url(#iv-dots)" />
      <circle cx="250" cy="210" r="210" fill="url(#iv-glow)" />
      <g stroke="#4F46E5" strokeOpacity="0.55" strokeWidth="1.5" fill="none">
        {edges.map(([a, b]) => (
          <path key={`${a}-${b}`} d={`M${nodes[a][0]} ${nodes[a][1]}L${nodes[b][0]} ${nodes[b][1]}`} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i % 4 === 0 ? 11 : 7} fill="#fff" stroke={trackColors[i % 3]} strokeWidth="3" />
          {i % 4 === 0 && <circle cx={x} cy={y} r="20" fill="none" stroke={trackColors[i % 3]} strokeOpacity="0.35" />}
        </g>
      ))}
    </svg>
  );
}
