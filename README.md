# National Innovation Challenge — Phase 1 Homepage

Vite + React 18 + TypeScript (strict), built on the **NIC Design System V1** (direction: Innovation Spectrum).

## Run

```bash
npm install
npm run dev        # local dev server
npm run build      # production build
npx tsc --noEmit   # type check
npm run lint
npm test
```

## Docs

Everything about the design system lives in one file: [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) (brand, colour, type, spacing, grid, backgrounds, components, motion, imagery, accessibility, roadmap).

## Structure

| Path | Contents |
|---|---|
| `tokens/` | colour, gradients, typography, spacing, radius, shadows, motion, breakpoints, components |
| `styles/` | typography classes, background recipes, base/focus/reduced-motion |
| `src/` | React app: sections, UI primitives, data-driven content (`src/data/content`) |
| `public/images/` | hero, track and support imagery |

Context attributes: `data-surface="dark"`, `data-track="automobile|eee|civil"`, `data-status="open|closing|closed|review|selected|finalist|winner"`.

## Status

| # | Phase | Status |
|---|---|---|
| 1 | Design tokens and docs | Done |
| 2 | Homepage (nav, hero, tracks, how it works, impact, support, final CTA, footer) | Built |
| 3 | Other pages, routing, backend | Not started |

No competition details are invented; links are route-ready placeholders.

## Open inputs from organisers

Official logo, name/tagline, evaluation weights, trophy design, photography consent policy.
