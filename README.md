# NIC Design System V1

Design system for the **National Innovation Challenge** — direction: **Innovation Spectrum**.

> ## Scope: design system only
> **No website pages have been built.** No homepage, landing, track, problem-statement, registration, dashboard, FAQ or finale pages. No routing, backend, database, auth, CMS or competition logic. No final visual assets have been generated (all are `NOT GENERATED`).

## Start here

1. `DESIGN_SYSTEM.md` — master guide
2. `BRAND_GUIDELINES.md` — personality, rules, logo placeholder
3. `nic.css` — import this to get every token and base style

## Use it

```html
<link rel="stylesheet" href="nic.css">
```

```css
.thing { color: var(--color-text); background: var(--color-surface); }
```

Context attributes: `data-surface="dark"`, `data-track="automobile|eee|civil"`, `data-status="open|closing|closed|review|selected|finalist|winner"`.

## Structure

| Path | Contents |
|---|---|
| `tokens/` | color, gradients, typography, spacing, radius, shadows, motion, breakpoints, components |
| `styles/` | typography classes, background recipes, base/focus/reduced-motion |
| `docs/` | color, type, spacing/radius/shadow, grid, components, engineering visual language, backgrounds |
| `icons/ICON_SYSTEM.md` | icon spec |
| `motion/motion-guidelines.md` | motion rules |
| `imagery/IMAGE_ASSET_PLAN.md` | image art direction (26 planned) |
| `assets/ASSET_GENERATION_BACKLOG.md` | 88 asset entries, 10 categories |
| `ACCESSIBILITY.md` | WCAG 2.2 AA rules, verified contrast |

## Phases

| # | Phase | Status |
|---|---|---|
| 1 | Define tokens | Done |
| 2 | Document system | Done |
| 3 | Catalogue assets | Done |
| 4 | Generate assets (`assets/ASSET_GENERATION_BACKLOG.md`) | **Next** |
| 5 | Build website against this system | Not started |

## Open inputs from organisers

Official logo, name/tagline, evaluation weights, trophy design, photography consent policy.
