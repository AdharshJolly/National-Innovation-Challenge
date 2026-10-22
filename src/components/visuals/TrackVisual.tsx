import type { TrackId } from "../../data/content";

/** PLACEHOLDERS for `track-automobile` / `track-eee` / `track-civil` (ILL-01..03).
 *  Pass `src` to use the approved raster instead. */
export function TrackVisual({ track, src, alt }: { track: TrackId; src?: string; alt: string }) {
  if (src) return <img className="track-visual__img" src={src} alt={alt} loading="lazy" />;
  return (
    <svg className="track-visual__svg" viewBox="0 0 480 320" role="img" aria-label={alt} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`tv-${track}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#241040" />
          <stop offset="1" stopColor="#1A0830" />
        </linearGradient>
        <pattern id={`tg-${track}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#fff" strokeOpacity="0.07" />
        </pattern>
      </defs>
      <rect width="480" height="320" fill={`url(#tv-${track})`} />
      <rect width="480" height="320" fill={`url(#tg-${track})`} />
      {track === "automobile" && <Automobile />}
      {track === "eee" && <Eee />}
      {track === "civil" && <Civil />}
    </svg>
  );
}

function Automobile() {
  return (
    <g>
      <ellipse cx="240" cy="236" rx="190" ry="10" fill="#F43F5E" fillOpacity="0.3" />
      <path d="M70 226v-34q2-16 26-22l60-10q30-38 86-46h60q42 2 66 40l24 12q16 6 18 26v34z" fill="#2A1236" stroke="#F43F5E" strokeWidth="2" />
      <path d="M170 160q26-28 70-32h68q32 4 50 36z" fill="#1A0830" stroke="#FB7185" strokeOpacity="0.6" />
      <path d="M78 196h336" stroke="#F43F5E" strokeWidth="2.5" />
      {[170, 360].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="228" r="32" fill="#0F0620" />
          <circle cx={cx} cy="228" r="22" fill="#17151F" stroke="#F43F5E" strokeWidth="2" />
          <circle cx={cx} cy="228" r="5" fill="#F43F5E" />
        </g>
      ))}
      <path d="M60 276h390M60 270v12M450 270v12" stroke="#FB7185" strokeOpacity="0.7" fill="none" />
      <path d="M390 60l-14 24h14l-8 24 22-30h-14l10-18z" fill="#A3E635" />
    </g>
  );
}

function Eee() {
  return (
    <g>
      <rect x="110" y="60" width="260" height="190" rx="8" fill="#0F2A3A" stroke="#06B6D4" strokeWidth="2" />
      <rect x="200" y="110" width="80" height="80" rx="4" fill="#17151F" stroke="#22D3EE" strokeWidth="2" />
      <g stroke="#22D3EE" strokeWidth="3">
        <path d="M212 98v12M228 98v12M244 98v12M260 98v12M212 190v12M228 190v12M244 190v12M260 190v12M188 124h12M188 140h12M188 156h12M188 172h12M280 124h12M280 140h12M280 156h12M280 172h12" />
      </g>
      <g stroke="#06B6D4" strokeWidth="2" fill="none">
        <path d="M188 124H150V86h-20M188 172h-30v50h34M292 140h40l16-20h14M292 172h28v54" />
      </g>
      <g fill="#A3E635">
        <circle cx="130" cy="86" r="4" />
        <circle cx="362" cy="120" r="4" />
        <circle cx="192" cy="222" r="4" />
        <circle cx="320" cy="226" r="4" />
      </g>
      <path
        d="M20 290c30-40 50-40 80 0s50 40 80 0 50-40 80 0 50 40 80 0 50-40 80 0"
        fill="none"
        stroke="#22D3EE"
        strokeOpacity="0.7"
        strokeWidth="2"
        transform="translate(0 -24)"
      />
    </g>
  );
}

function Civil() {
  return (
    <g>
      <path d="M0 240h480v80H0z" fill="#052E1A" fillOpacity="0.7" />
      <path d="M0 240q120 30 240 0t240 0" fill="none" stroke="#22C55E" strokeOpacity="0.5" />
      <path d="M40 220h400" stroke="#22C55E" strokeWidth="5" />
      <path d="M40 220q200-150 400 0" fill="none" stroke="#4ADE80" strokeWidth="3" />
      <g stroke="#22C55E" strokeWidth="2">
        <path d="M100 220v-35M140 220v-62M180 220v-80M220 220v-87M260 220v-87M300 220v-80M340 220v-62M380 220v-35" />
      </g>
      <path d="M100 185L140 220M140 158L180 220M180 140L220 220M260 133L300 220M300 140L340 220M340 158L380 220" stroke="#22C55E" strokeOpacity="0.45" />
      <g fill="#312E81" stroke="#4ADE80" strokeOpacity="0.7">
        <rect x="64" y="220" width="16" height="70" />
        <rect x="400" y="220" width="16" height="70" />
      </g>
      <path d="M40 292h400M40 286v12M440 286v12" stroke="#A3E635" strokeOpacity="0.8" fill="none" />
      <g stroke="#4ADE80" fill="none" strokeWidth="2">
        <path d="M410 70v70M392 140h36M410 70l50 10M410 70l-40 8" />
        <circle cx="410" cy="70" r="3" fill="#A3E635" />
      </g>
    </g>
  );
}
