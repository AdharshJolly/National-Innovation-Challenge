# Grid & Layout

Tokens: `tokens/breakpoints.css`, `tokens/spacing.css`.

## 1. Philosophy

Mobile-first, content-led, with **engineering-drawing discipline**: strong left edges, deliberate alignment to a visible-in-spirit grid, generous white space, occasional full-bleed technical moments. Layouts should feel *measured*, not templated: vary column spans between sections rather than repeating 3-equal-cards rows.

## 2. Breakpoints (min-width, mobile-first)

| Name | Min width | Target |
|---|---|---|
| base | 0 | Phones (360–479) |
| `sm` | 480px | Large phones |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small laptop / desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

Design and test at: **360, 390, 768, 1024, 1280, 1440, 1920**.

## 3. Containers

| Token | Max width | Use |
|---|---|---|
| `--container-narrow` | 720px | Prose, forms, FAQ |
| `--container-default` | 1200px | Standard content |
| `--container-wide` | 1360px | Hero, showcase, dense card grids |
| `--container-max` | 1520px | Hard cap; above this, margins grow |

Containers are centered with side padding = `--gutter`. Content never touches the viewport edge.

## 4. Columns & gutters

| Viewport | Columns | Gutter (`--gutter`) | Margin |
|---|---|---|---|
| Mobile (< 768) | 4 | 16px | 16px |
| Tablet (768–1023) | 8 | 24px | 24px |
| Desktop (≥ 1024) | 12 | 32px | 32px+ (container centered) |
| Large (≥ 1536) | 12 | 32px | auto |

`--grid-cols` and `--grid-gap` expose the active values.

### Common spans (desktop, 12-col)

| Layout | Spans |
|---|---|
| Text + visual | 5 / 7 or 6 / 6 (alternate sides across sections) |
| Three tracks | 4 / 4 / 4 (collapses to stacked on mobile; 1+2 or scroll-snap on tablet) |
| Prose with margin notes | 8 + 4 (margin note column uses Label type) |
| Problem-statement card grid | 4 columns → 3 (lg) → 2 (md) → 1 (base) |
| Form | 6-col centered or `--container-narrow` |

## 5. Behavior by device

- **Mobile:** single column; sections stack; sticky bottom CTA allowed for registration; horizontal scroll only for deliberate carousels with snap and visible edge peek (16px). Touch targets ≥ 44px.
- **Tablet:** 2-column pairings; nav may keep hamburger until `lg`; diagrams scale, never crop critical labels.
- **Desktop:** full 12-col; sticky nav; side-by-side layouts; allow asymmetric compositions.
- **Large desktop:** container stops growing at `--container-max`; backgrounds and technical grids continue full-bleed; scale hero type to `--fs-display` max.

## 6. Section spacing

`--section-y` (top & bottom): 64 → 80 → 96 → 120 as viewport grows. Inner header-to-content gap: `--space-10` to `--space-12`. Two adjacent sections share one separation (either a background change or a rule, not both plus padding doubling).

## 7. Full-bleed sections

- Backgrounds (Dark Technical, Spectrum, Light Technical) are always full-bleed; content inside stays in a container.
- Imagery may bleed to one edge only (left or right) while text stays contained — creates the asymmetry the brand wants.
- Full-bleed sections need a defined bottom edge: straight cut, or a 1px technical line with node markers. No wavy dividers.
- Never stack more than two consecutive dark full-bleed sections; alternate with Clean/Paper to give the eye rest.

## 8. Alignment rules

- Left edge is the primary axis. Headlines, eyebrows, and body share one left edge per section.
- Baseline gap of `--space-4` multiples; no arbitrary pixel nudges.
- Diagrams and technical lines align to the same grid columns as content.
- Z-order: background → technical grid → glow → decorative lines → content → sticky UI.
