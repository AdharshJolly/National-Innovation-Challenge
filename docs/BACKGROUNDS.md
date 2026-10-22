# Background System

CSS recipes: `styles/backgrounds.css`. All four are code-only (no image files) so they work before any asset is generated.

| Class | Recipe | Text | Use |
|---|---|---|---|
| `.bg-light-technical` | Paper + 48px grid @ 4.5% Graphite | Graphite | Section intros, track overviews, "how it works", pages where structure is the message |
| `.bg-dark-technical` | Deep Violet + 48px grid @ 6% White | White / mist | Dark content sections, stats strips, timeline, footer-adjacent sections |
| `.bg-spectrum` (`--grid` variant) | Deep Violet → Indigo + Electric Blue glow (top-right) + Cyan glow (bottom-left) | White | Hero, finale/CTA bands, campaign moments. **Max once per page + once for the closing CTA** |
| `.bg-clean` / `.bg-clean--white` | Flat Paper / White | Graphite | Forms, long reading, FAQ, tables, dashboards |

## Pairing rhythm

Alternate to let the eye rest: Spectrum (hero) → Clean → Light Technical → Dark Technical → Clean → Spectrum (closing CTA). Never two Spectrums adjacent; never more than two dark sections in a row.

## Rules

1. **Reading surfaces are Clean.** Forms and long text sit on `.bg-clean` or a White card, not on a grid.
2. **Grid fades.** Always apply `.bg-grid-fade` or a mask to the pseudo-element layer; a hard edge-to-edge grid looks like graph paper. (Mask a `::before` pseudo-layer so content isn't masked.)
3. **One glow hue family.** Spectrum uses Blue + Cyan. A Lime glow (`--glow-lime`) is allowed only as a ≤ 20% opacity accent in finale/campaign contexts.
4. **No imagery under text** without `--scrim-dark`, with contrast verified at the worst point.
5. **Motion:** only Spectrum glows may drift (see motion guidelines, `--duration-gradient`). Grids are static.
6. **Performance:** these are CSS gradients; no blur filters on full-bleed elements (use pre-blurred radial gradients as defined).
7. **Print/low-end:** `prefers-reduced-motion` and `forced-colors` — fall back to flat Deep Violet / Paper with no pattern.
