# Spacing, Radius & Shadow

Tokens: `tokens/spacing.css`, `tokens/radius.css`, `tokens/shadows.css`.

## 1. Spacing (4px base)

| Token | px | Typical use |
|---|---|---|
| `--space-1` | 4 | Icon↔text gap, hairline offsets |
| `--space-2` | 8 | Tight inline gaps, badge padding-y, label→field |
| `--space-3` | 12 | Control vertical padding, small stacks, badge padding-x |
| `--space-4` | 16 | Default gap between related items; mobile card padding; mobile gutter |
| `--space-5` | 20 | Form field spacing |
| `--space-6` | 24 | Card padding; tablet gutter; paragraph spacing |
| `--space-8` | 32 | Desktop card padding/gutter; grouped content blocks |
| `--space-10` | 40 | Heading → content gap in a section |
| `--space-12` | 48 | Sub-section gap |
| `--space-16` | 64 | Section vertical padding (mobile); large stack gaps |
| `--space-20` | 80 | Section padding (tablet) |
| `--space-24` | 96 | Section padding (desktop) |
| `--space-30` | 120 | Section padding (large desktop); hero/finale |

Note: the token is named by *rem multiple of 4px* (`--space-30` = 120px). All requested steps (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120) exist.

**Rules**
- Only token values. No 10px, 15px, 18px gaps.
- **Proximity:** related items ≤ 16px apart; unrelated groups ≥ 32px apart. The gap ratio between "related" and "separate" must be at least 2×.
- Inner ≤ outer: padding inside a component ≤ gap between components.
- Section rhythm: `--section-y` top and bottom (responsive). Adjacent sections with the same background merge their padding (use one `--section-y`, not two).
- Heading → body: 16px (H3/H4) to 24px (H1/H2). Body → CTA group: 32px.

## 2. Radius

| Token | px | Use |
|---|---|---|
| `--radius-sm` | 4 | Tags, checkbox, code, category badge, small chips |
| `--radius-md` | 8 | Buttons, inputs, nav items, tooltips |
| `--radius-lg` | 12 | Cards, panels, dropdown menus |
| `--radius-xl` | 20 | Hero panels, large feature surfaces, modals |
| `--radius-pill` | 999 | Status pills, track badges, toggles |

**Rules**
- Engineering tone = tighter radii than consumer SaaS. Nothing exceeds 20px except pills.
- Nested radius: inner radius = outer radius − padding (min 4px).
- Mix on purpose: a card may have a square-edged technical element inside (e.g., a mono ID tag at `--radius-sm`).
- Images inside cards share the card's top radius; full-bleed section images are square.
- Avoid "everything is a floating rounded card": prefer ruled sections, dividers, and open layouts. Max two levels of card nesting is a hard stop; one is the norm.

## 3. Shadows

| Token | Value | Use |
|---|---|---|
| `--shadow-none` | none | Default for most surfaces; cards on bordered layouts |
| `--shadow-subtle` | 0 1px 2px @6% | Inputs on focus-less raised state, sticky nav on scroll |
| `--shadow-card` | 0 1px 2px + 0 4px 12px @5–6% | "Elevated" card variant at rest |
| `--shadow-elevated` | 0 2px 4px + 0 12px 28px @6–12% | Card hover, dropdowns, popovers |
| `--shadow-modal` | 0 8px 16px + 0 32px 64px @12–28% | Modals, drawers |

**Rules**
- Shadows are tinted Deep Violet (`26 8 48`), never pure black.
- Prefer border + contrast. If a surface has a visible border, it normally has no shadow at rest.
- On dark backgrounds shadows are nearly invisible — use `--nic-violet-line` borders and lighter raised surfaces (`--nic-violet-raised`) for elevation; glow tokens (`--glow-primary`, `--glow-cyan-soft`) only for active/primary emphasis, one at a time.
- Hover elevation change = at most one step up the scale.
