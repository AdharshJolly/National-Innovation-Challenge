/** PLACEHOLDER for asset `hero-main` (HER-01). Vector engineering-lab scene:
 *  prototype EV, embedded board, robotic arm, drawings, skyline. Swap for the
 *  approved raster by passing `src` (object-fit: cover). */
export function HeroVisual({ src }: { src?: string }) {
  if (src) {
    return <img className="hero-visual__img" src={src} alt="Engineering innovation laboratory with a prototype vehicle, electronics and robotics" />;
  }
  return (
    <svg
      className="hero-visual__svg"
      viewBox="0 0 640 560"
      role="img"
      aria-label="Illustration of an engineering innovation laboratory: a prototype electric vehicle, an embedded circuit board, a robotic arm and a city skyline"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#241040" />
          <stop offset="1" stopColor="#1A0830" />
        </linearGradient>
        <radialGradient id="hv-glow-b" cx="0.7" cy="0.35" r="0.6">
          <stop offset="0" stopColor="#4F46E5" stopOpacity="0.6" />
          <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hv-glow-c" cx="0.2" cy="0.95" r="0.6">
          <stop offset="0" stopColor="#06B6D4" stopOpacity="0.4" />
          <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hv-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2A2A5C" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="hv-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#06B6D4" stopOpacity="0.35" />
          <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
        </linearGradient>
        <pattern id="hv-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#fff" strokeOpacity="0.06" />
        </pattern>
      </defs>

      <rect width="640" height="560" fill="url(#hv-bg)" />
      <rect width="640" height="560" fill="url(#hv-grid)" />
      <rect width="640" height="560" fill="url(#hv-glow-b)" />
      <rect width="640" height="560" fill="url(#hv-glow-c)" />

      {/* skyline */}
      <g fill="#312E81" fillOpacity="0.5">
        <rect x="40" y="250" width="34" height="130" />
        <rect x="80" y="210" width="28" height="170" />
        <rect x="114" y="270" width="40" height="110" />
        <rect x="470" y="230" width="30" height="150" />
        <rect x="506" y="190" width="36" height="190" />
        <rect x="548" y="260" width="44" height="120" />
      </g>
      <g stroke="#22D3EE" strokeOpacity="0.35" strokeWidth="1">
        <path d="M60 270v20M60 310v20M94 230v20M94 270v20M94 310v20M520 210v20M520 250v20M520 290v20M486 250v20M486 290v20" />
      </g>

      {/* drawing sheet */}
      <g transform="translate(36 70) rotate(-4)">
        <rect width="150" height="104" rx="4" fill="#fff" fillOpacity="0.05" stroke="#fff" strokeOpacity="0.25" />
        <path d="M14 70h122M14 54l30-26 40 14 30-20 22 12" fill="none" stroke="#22D3EE" strokeWidth="1.5" />
        <path d="M14 84h80" stroke="#fff" strokeOpacity="0.3" />
        <circle cx="44" cy="28" r="3" fill="#A3E635" />
      </g>

      {/* robotic arm */}
      <g stroke="#A5B4FC" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 392v-40l54-68 62-30" />
        <path d="M186 254l22 18" strokeWidth="2.5" />
      </g>
      <g fill="#1A0830" stroke="#22D3EE" strokeWidth="2">
        <circle cx="70" cy="352" r="8" />
        <circle cx="124" cy="284" r="8" />
        <circle cx="186" cy="254" r="7" />
      </g>
      <rect x="50" y="388" width="44" height="12" rx="2" fill="#312E81" stroke="#A5B4FC" strokeOpacity="0.5" />

      {/* floor */}
      <rect x="0" y="400" width="640" height="160" fill="url(#hv-floor)" />
      <g stroke="#22D3EE" strokeOpacity="0.2">
        <path d="M0 440H640M0 490H640M0 540H640" />
        <path d="M320 400L120 560M320 400L240 560M320 400L400 560M320 400L520 560M320 400L20 560M320 400L620 560" />
      </g>

      {/* vehicle */}
      <g transform="translate(60 40)">
        <ellipse cx="290" cy="372" rx="260" ry="14" fill="#06B6D4" fillOpacity="0.25" />
        <path
          d="M70 352V320q2-20 30-28l75-14q35-46 105-58h90q50 2 80 50l30 16q20 6 22 34v32z"
          fill="url(#hv-body)"
          stroke="#A5B4FC"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
        <path d="M190 276q32-34 84-40h80q40 6 62 44z" fill="#1A0830" fillOpacity="0.75" stroke="#22D3EE" strokeOpacity="0.5" />
        <path d="M280 236l-8 44" stroke="#22D3EE" strokeOpacity="0.4" />
        <path d="M80 322h436" stroke="#22D3EE" strokeWidth="2" strokeOpacity="0.8" />
        <rect x="480" y="296" width="30" height="8" rx="3" fill="#F43F5E" />
        <rect x="76" y="298" width="22" height="8" rx="3" fill="#A3E635" />
        {[160, 420].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy={352} r="40" fill="#0F0620" />
            <circle cx={cx} cy={352} r="28" fill="#17151F" stroke="#22D3EE" strokeWidth="2" />
            <circle cx={cx} cy={352} r="6" fill="#22D3EE" />
            <path d={`M${cx} 328v12M${cx} 364v12M${cx - 24} 352h12M${cx + 12} 352h12`} stroke="#A5B4FC" strokeWidth="2" />
          </g>
        ))}
        {/* dimension line */}
        <g stroke="#A3E635" strokeWidth="1" strokeOpacity="0.8" fill="none">
          <path d="M70 404h452M70 398v12M522 398v12" />
        </g>
      </g>

      {/* PCB card */}
      <g transform="translate(402 66) rotate(5)">
        <rect width="190" height="128" rx="6" fill="#0F2A3A" stroke="#22D3EE" strokeOpacity="0.7" />
        <rect x="72" y="42" width="46" height="46" rx="3" fill="#17151F" stroke="#A5B4FC" />
        <g stroke="#A5B4FC" strokeWidth="2">
          <path d="M80 36v6M92 36v6M104 36v6M112 36v6M80 88v6M92 88v6M104 88v6M112 88v6M66 52h6M66 64h6M66 76h6M118 52h6M118 64h6M118 76h6" />
        </g>
        <g stroke="#22D3EE" strokeWidth="1.5" fill="none" strokeOpacity="0.9">
          <path d="M72 52H30v-20h-14M72 76H40v30h30M124 64h38l12-14h8M124 76h26v32" />
        </g>
        <g fill="#A3E635">
          <circle cx="16" cy="32" r="3" />
          <circle cx="182" cy="50" r="3" />
          <circle cx="70" cy="106" r="3" />
        </g>
      </g>

      {/* labels */}
      <g fontFamily="'JetBrains Mono Variable', ui-monospace, monospace" fontSize="10" fill="#A7B0BE" letterSpacing="1.2">
        <text x="40" y="52">FIG. 01 - PROTOTYPE LAB</text>
        <text x="430" y="226">EMBEDDED / SENSING</text>
      </g>
    </svg>
  );
}
