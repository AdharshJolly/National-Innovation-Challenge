# Icon System

**Status:** specification only. No icon assets exist yet — see "Future asset requirements" and `assets/ASSET_GENERATION_BACKLOG.md` (category 7). Do not substitute a playful or filled third-party pack in the meantime; if the site needs icons before they exist, use a single outline library matching these rules (e.g., Lucide at 1.5px stroke) and swap later.

## 1. Character

Technical, geometric, clean, minimal, engineering-oriented — like symbols on a schematic or a CAD toolbar. Not cartoon, not bubbly, not mixed-style.

## 2. Construction rules

| Property | Spec |
|---|---|
| Style | **Outline (stroke) icons**, single color via `currentColor` |
| Grid | 24×24 artboard, 2px padding (20×20 live area); keyline shapes: circle Ø20, square 18×18, horizontal rect 20×16, vertical rect 16×20 |
| Stroke weight | **1.5px** at 24px (scales: 1.5px for 16–32px; 2px at 48px+ display; never < 1.25px rendered) |
| Stroke caps/joins | Square-ish: `stroke-linecap: butt` for terminals on technical lines, `round` only on dots; `stroke-linejoin: miter` (miter-limit 2) — chamfered 45° corners rather than soft curves |
| Corner treatment | Outer corner radius **1px** max (or 45° chamfer). Circles stay true circles. No pill-rounded blobs |
| Angles | 0°, 45°, 90° dominate. Curves only where the object is curved (wheel, gear, wave) |
| Detail | Max 3 primitives of internal detail; must read at 16px |
| Fill | None by default. Optional 12% tinted fill (`currentColor` @ 12%) in "duotone" display usage only |
| Accent | A single small "node" dot (3px circle) or terminal tick may mark the icon's key point — consistent with the Technical Nodes motif |
| Mirroring | Directional icons (arrows, chevrons) mirror for RTL |

## 3. Size scale

| Token | Size | Use |
|---|---|---|
| `icon-xs` | 14px | Inside badges, inline with Label text |
| `icon-sm` | 16px | Dense UI, small buttons, inline with Body Small |
| `icon-md` | **20px** | Default: buttons, inputs, nav, list markers |
| `icon-lg` | 24px | Section icons, mobile nav, card headers |
| `icon-xl` | 32px | Feature cards (in 48px tinted square) |
| `icon-2xl` | 48px | Track icons in cards, empty states |
| `icon-hero` | 64–96px | Track hero marks, illustration-level icons (2px stroke) |

Size always snaps to 4px multiples; place on whole pixels to avoid blur.

## 4. Color & state behavior

| State | Behavior |
|---|---|
| Default | `currentColor` of the surrounding text (Graphite/Slate on light; mist on dark) |
| Hover | Color to Electric Blue (light) / Cyan-bright (dark); 200ms; directional icons nudge 4px along their direction |
| Active / selected | Electric Blue (light) / Cyan (dark) + optional 12% tinted fill; selected controls also change shape (e.g., check appears) |
| Focus | Ring is on the parent control, not the icon |
| Disabled | `--color-disabled-text` |
| Status | Icon uses the `-ink` color on light, raw on dark; always paired with label |
| Decorative | `aria-hidden="true"`; meaningful standalone icons need an accessible name |

Icons do not use gradients, shadows or glows (exception: one hero-size icon on Spectrum may carry `--glow-cyan-soft`).

## 5. Track icon treatment

Each track has a **hero mark** (a larger, slightly more detailed variant of the same family) plus a 24px UI variant.

| Track | Concept (draw from) | Color |
|---|---|---|
| Automobile | Wheel/gear + chassis profile, or EV plug + wheel; mechanical circle with spokes, 45° chamfers | `--track-color` rose |
| EEE | Circuit trace terminating in a node, chip/IC outline with pins, or sine wave on a grid | `--track-color` cyan |
| Civil | Truss/bridge span, tower crane, or building section with dimension line | `--track-color` green |

Treatment rules:
- Track icons are **outline + track color**, in a 48px+ context optionally sitting in a 12%-tint rounded-square (`--radius-md`) or inside corner brackets.
- Shared construction (same stroke, grid, corner radius, node-dot accent) so the trio reads as one family.
- On light backgrounds use `--track-ink` for icons ≤ 24px (contrast), raw `--track-color` for ≥ 32px.
- Icon + name always together on first appearance in a view (accessibility rule).

## 6. Naming & delivery

- File: `{category}-{name}.svg`, kebab-case (`track-automobile.svg`, `ui-arrow-right.svg`, `status-finalist.svg`).
- Categories: `ui-`, `track-`, `status-`, `award-`, `diagram-`, `social-`.
- SVG: `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="1.5"`, no hard-coded colors, no inline styles, no `<title>` clutter (add programmatically), paths expanded to strokes-preserved (do not outline strokes — keeps weight scalable).
- Delivered as a sprite (`icons.svg` with `<symbol>`) and individual files; React/Web components optional.

## 7. Future asset requirements (not yet produced)

| Set | Count | Icons |
|---|---|---|
| UI core | ~40 | arrow-right/left/up/down/up-right, chevrons, menu, close, plus, minus, check, search, filter, calendar, clock, location, mail, phone, link, external-link, download, upload, user, users, team, document, eye, edit, trash, lock, unlock, info, alert-triangle, alert-octagon, check-circle, help, globe, play, pause, expand, grid-view, list-view |
| Tracks | 3 × 2 sizes | `track-automobile`, `track-eee`, `track-civil` (24px UI + 64px hero) |
| Status | 7 | open (radio-dot), closing (clock), closed (lock), review (hourglass), selected (check), finalist (flag), winner (trophy) |
| Process | ~8 | register, form, submit, evaluate, shortlist, prototype, present, award |
| Domain micro-icons | ~24 | EV battery, motor, wheel, chassis, sensor, microcontroller, circuit board, robot arm, drone, solar panel, bridge, building, drainage, road, smart-city, water, recycle, wind, lightbulb (technical style — not clip-art), gear, wrench, ruler, compass, hard hat |
| Social | ~6 | Instagram, LinkedIn, YouTube, X, WhatsApp, email (official brand glyphs, monochrome) |

All tracked individually in the asset backlog (IDs `ICN-*`). Status: **NOT GENERATED**.
