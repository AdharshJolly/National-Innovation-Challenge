# Engineering Visual Language

Five motifs give NIC its "young engineers building real things" character. **All must remain subtle.** If a viewer notices the motif before the content, it is too loud. The site must never read as a blueprint template.

Motif budget per viewport: **at most 3 of the 5**, and at most one "hero-scale" motif.

## 1. Engineering Grid

- **What:** Faint orthogonal lines at 48px pitch (`--grid-size`), optionally a 4× major line every 192px at slightly higher opacity.
- **Look:** Light: Graphite @ 4.5%. Dark: White @ 6%. 1px lines. Fade out at edges with `.bg-grid-fade` or a radial mask.
- **Use:** Behind heroes and section backgrounds; behind diagrams. Never behind dense body text without a solid surface.
- **Variants:** full grid, dot grid (4px dots at 48px pitch, 10% opacity), registration marks ("+" at intersections, a few only).
- **Don't:** colored grids; grids brighter than 8% opacity; isometric/perspective grids ("retro-wave" look); animated scrolling grids.

## 2. Technical Lines

- **What:** Thin geometric strokes referencing circuit traces, engineering drawings, schematics, dimension lines.
- **Look:** 1–1.5px; 45°/90° angles only (circuit-trace style), chamfered corners (not rounded) — a nod to PCB routing. Dimension lines: line with 8px end-ticks and a mono Label (e.g., `120 mm`).
- **Color:** Light: `--nic-border` or Electric Blue at 40%. Dark: White @ 20% or Cyan @ 50%.
- **Use:** Connecting cards/timeline steps, framing images with corner brackets (`⌜ ⌝` marks, 16px), section dividers ending in nodes, dimension callouts around product/prototype imagery.
- **Animation:** draw-in on reveal (see motion guidelines). Static fallback must look complete.
- **Don't:** curvy "swoosh" lines; lines crossing text; more than one line cluster per section.

## 3. Spectrum Curves

- **What:** Smooth, flowing shapes in the Blue → Cyan (→ Lime) spectrum — the "energy" counterweight to the rigid grid.
- **Look:** Large bezier ribbons, concentric arcs, or soft elliptical glows. Edges either crisp (vector ribbon) or blurred (glow); don't mix in one composition. Use `--gradient-innovation-flow`; Lime appears only as a thin edge or end-cap (≤ 10% of the curve's length).
- **Use:** Hero background (bleeds off an edge), section transitions, behind featured imagery, finale graphics.
- **Rules:** Curves are cropped by the viewport — never fully visible, which implies motion. Opacity 15–60% on dark; on light use only tint versions (≤ 12%).
- **Don't:** rainbow stops; mesh gradients with more than 3 hues; glassmorphism blobs; curves behind small text.

## 4. Technical Nodes

- **What:** Small dots joined by technical lines — circuit nodes, structural joints, network points.
- **Look:** Node = 6–8px circle (outline 1.5px, filled on "active"); 12px ring for emphasis. Connecting line = Technical Line.
- **Use:** Timelines (each step a node), process diagrams, track icon constellations, decorative line endpoints, map-like national reach graphics (cities as nodes).
- **Color:** Default Slate/`--nic-border` (light) or White@40% (dark). Active nodes: Electric Blue or Cyan. A single Lime node may mark "you are here / selected".
- **Don't:** dense node networks that read as "AI/neural-net" cliché; floating particle fields.

## 5. Blueprint Elements

- **What:** Engineering-document vocabulary: title blocks, revision tags, drawing numbers, corner brackets, dimension arrows, tolerances, section markers (`A–A`).
- **Look:** Mono Label type, 12px, uppercase, Slate. Thin 1px frames. Small metadata strips such as `NIC / 2026 / TRACK-02 / REV A`.
- **Use:** Eyebrows, card metadata, image captions, footers of diagrams, problem IDs (`PS-C07`).
- **Rules:** Metadata must be *real* where possible (actual IDs/dates); never use fake lorem-technical strings that mislead. Maximum one blueprint element cluster per viewport.
- **Don't:** a full blue-paper background; cyan-on-navy "blueprint" fill; cross-hatching; faux torn paper.

## 6. Combining motifs (recipes)

| Recipe | Composition |
|---|---|
| **Hero (dark)** | Spectrum background + Dark Technical grid (faded) + one Spectrum Curve cropped at right + corner brackets around visual + 1 Label strip |
| **Section intro (light)** | Light Technical grid faded + eyebrow Label + short technical line ending in a node beside the H2 |
| **Timeline** | Technical Line spine + Nodes per step + Label dates |
| **Track card** | Corner brackets (track color 40%) + track icon + mono ID |
| **Finale / awards** | Spectrum background + Gold used only for the award object + radiating technical lines (thin, ≤ 12 lines) |

## 7. Anti-patterns

CRT/scanlines, glitch effects, matrix rain, hex-grid honeycomb backgrounds, rotating gears, lightbulb/brain clip-art, stock handshake/team-photo overlays, neon outlines, 3D wireframe globes.
