# NIC Design System V1 — Master Document

Single entry point. Read this first; it links to the detailed specs.

## 1. What this is

The visual language for the National Innovation Challenge website and collateral: tokens (CSS custom properties), type, colour, spacing, components, motion, imagery rules and an asset backlog.

**What this is not:** a website. No pages, routes, logic, backend or generated final artwork exist in this repository. See README "Scope".

## 2. Why the colours exist

| Group | Colours | Reason |
|---|---|---|
| Brand | Deep Violet, Indigo, Electric Blue, Cyan, Lime, Orange | Depth → energy spectrum ("Innovation Flow") |
| Neutrals | Paper, White, Graphite, Slate, Border | Quiet canvas that makes colour deliberate |
| Tracks | Automobile `#F43F5E`, EEE `#06B6D4`, Civil `#22C55E` | Three identities, applied only through `data-track` |
| Semantic | success, warning, error, info | System feedback |
| Status | open, closing, closed, review, selected, finalist, winner | Competition lifecycle, via `data-status` |
| Gold `#FACC15` | — | Awards only |

Accessibility corrections (computed, not guessed): raw Cyan/Lime/Orange/Gold/green/amber/rose fail as text on light, so each has an `-ink` (text) and `-tint` (background) derivative. Electric Blue fails on Deep Violet, so dark-surface links use `--nic-cyan-bright`. Details: `docs/COLOR_SYSTEM.md`.

Known collisions (documented, mitigated): EEE = Cyan; Civil ≈ Success green. Rule: track/status always shown with **icon + label**, never colour alone.

## 3. How to use the tokens

```html
<link rel="stylesheet" href="nic.css">
```

`nic.css` imports `tokens/index.css` and the three style layers. Three token layers:

1. **Primitives** `--nic-*` (raw palette and derivatives) — don't use directly in components.
2. **Semantic roles** `--color-*` (text, surface, border, action, focus…) — **use these**.
3. **Component tokens** `tokens/components.css` (button, card, badge, input, nav).

Context attributes (set on any container; descendants inherit):

```html
<section data-surface="dark">…</section>          <!-- swaps semantic roles -->
<article data-track="eee">…</article>              <!-- --track-color / -ink / -tint -->
<span data-status="finalist">…</span>              <!-- --status-color / -ink / -tint -->
```

Typography: apply `.t-display`, `.t-h1`–`.t-h4`, `.t-body-lg`, `.t-body`, `.t-body-sm`, `.t-caption`, `.t-label`, `.t-button`, `.t-nav`. Backgrounds: `.bg-light-technical`, `.bg-dark-technical`, `.bg-spectrum`, `.bg-clean`.

## 4. Tracks

| Track | Colour | Icon concept | Image direction |
|---|---|---|---|
| Automobile | Rose `#F43F5E` (ink `#BE123C`) | Wheel / chassis / EV | EV systems, prototype detail |
| EEE | Cyan `#06B6D4` (ink `#0E7490`) | Circuit trace / chip | Boards, embedded, robotics |
| Civil | Green `#22C55E` (ink `#15803D`) | Truss / bridge / section | Infrastructure, sustainable build |

Use `--track-ink` for text/icons ≤ 24px on light; `--track-color` for fills and ≥ 32px graphics; `--track-tint` for backgrounds.

## 5. Components

Specified (not coded as pages) in `docs/COMPONENTS.md` with tokens in `tokens/components.css`: buttons (primary, secondary, dark, ghost, destructive, icon), cards (standard, track, stat, problem), badges (track, status, semantic), inputs, navigation, with all states (hover, focus, active, disabled, loading, error).

## 6. Motion

Precise, energetic, technical; ease-out; 4–8px travel; line-draw and gradient drift; no bounce; reduced-motion collapse. Tokens: `tokens/motion.css`. Guide: `motion/motion-guidelines.md`.

## 7. Imagery & visual language

- Engineering visual language (technical lines, nodes, dimension marks, grids): `docs/ENGINEERING_VISUAL_LANGUAGE.md`
- Backgrounds: `docs/BACKGROUNDS.md`
- Image direction + 26 planned images: `imagery/IMAGE_ASSET_PLAN.md`
- Icons: `icons/ICON_SYSTEM.md`

## 8. Missing assets

All visual assets are **NOT GENERATED**. 88 catalogue entries across 10 categories with IDs, formats, dimensions, transparency, light/dark needs, notes and usage: `assets/ASSET_GENERATION_BACKLOG.md`. Blockers: official logo, trophy design, evaluation weights, photography policy.

## 9. Accessibility

WCAG 2.2 AA, verified contrast pairs, focus, status and track rules, dark-surface and forced-colors notes: `ACCESSIBILITY.md`.

## 10. How to extend

1. Need a colour? Check `COLOR_SYSTEM.md`; if truly new, add the primitive, derive `-ink`/`-tint`, **compute contrast**, add a semantic role, document it.
2. Need a component? Compose from existing tokens first. Add a spec to `docs/COMPONENTS.md` (anatomy, variants, states, a11y) and tokens to `tokens/components.css`.
3. Need an animation? Reuse tokens; document per `motion-guidelines.md` §7.
4. Need an asset? Add a row to the backlog with every required field.
5. Never hard-code hex, px spacing, or durations in application code.
6. Bump the version below and note changes.

Version: **V1.0** (design system definition; no assets generated).

## 11. Repository map

```
README.md                      overview + scope
DESIGN_SYSTEM.md               this file
BRAND_GUIDELINES.md            personality, rules, logo placeholder
ACCESSIBILITY.md               WCAG rules and verified contrast
nic.css                        single CSS entry point
tokens/   colors gradients typography spacing radius shadows motion breakpoints components index
styles/   typography backgrounds base
docs/     COLOR_SYSTEM TYPOGRAPHY SPACING_RADIUS_SHADOW GRID COMPONENTS
          ENGINEERING_VISUAL_LANGUAGE BACKGROUNDS
icons/    ICON_SYSTEM.md
motion/   motion-guidelines.md
imagery/  IMAGE_ASSET_PLAN.md
assets/   ASSET_GENERATION_BACKLOG.md
```
