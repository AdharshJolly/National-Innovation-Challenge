# Color System

Tokens: `tokens/colors.css`, `tokens/gradients.css`. Contrast ratios below were computed (WCAG 2.x relative luminance), not estimated.

## 1. Why these colors exist

| Color | Hex | Job | Why |
|---|---|---|---|
| Deep Violet | `#1A0830` | Primary dark. Hero, footer, premium panels | Warmer and more distinctive than navy; signals "ambitious", not "bank" |
| Indigo | `#312E81` | Secondary dark. Nav, depth layers | Bridges Violet → Electric Blue so gradients feel continuous |
| Electric Blue | `#4F46E5` | Primary CTA, links, active, focus | The one action color. If it is blue and clickable, it is a primary action |
| Cyan | `#06B6D4` | Tech accent, diagrams, data viz, secondary highlight | Second half of the "Innovation Flow" spectrum; also the EEE track color |
| Innovation Lime | `#A3E635` | Rare spark: callouts, selected moments | Contrast against the cool spectrum. Scarcity is what makes it work |
| Energy Orange | `#F97316` | Countdowns, urgent campaign moments | Warm opposite to the blue spectrum; reserved for time pressure |

**Hierarchy** (what the eye should read first, second, …):
`Deep Violet / Indigo → Electric Blue → Cyan → Lime → Status / Track colors`

**Usage ratio (guidance, not math):** 35% foundation dark · 20% secondary brand · 15% Electric Blue · 10% Cyan · 10% Lime · 10% neutral surfaces. In practice Lime is closer to 2–4% of pixels on any screen; the ratio describes *emphasis weight across the whole brand*, so treat 10% as a ceiling.

## 2. Token layers

1. **Primitives** `--nic-*` — authoritative raw values. Never change.
2. **Derivatives** `--nic-*-ink`, `*-tint`, `*-hover`, `--nic-mist`, `--nic-slate-on-dark` — added to fix accessibility gaps in the base palette (see §3).
3. **Semantic roles** `--color-*` — what components consume (`--color-text`, `--color-bg-surface`, `--color-primary`…). Components should use roles, not primitives, so dark/light switching works.

## 3. Raw accents fail as text on light — use `-ink`

Measured contrast on Paper `#F8FAFC`:

| Raw color | On Paper | Verdict | Use instead (text on light) | Ratio on white |
|---|---|---|---|---|
| Cyan `#06B6D4` | 2.32 | ✗ | `--nic-cyan-ink #0E7490` | 5.36 |
| Lime `#A3E635` | 1.44 | ✗ | `--nic-lime-ink #3F6212` | 7.08 |
| Orange `#F97316` | 2.68 | ✗ | `--nic-orange-ink #C2410C` | 5.18 |
| Civil/Success `#22C55E` | 2.18 | ✗ | `--nic-civil-ink #15803D` | 5.02 |
| Warning `#F59E0B` | 2.05 | ✗ | `--nic-warning-ink #B45309` | 5.02 |
| Gold `#FACC15` | 1.46 | ✗ | `--nic-gold-ink #854D0E` | 6.85 |
| Automobile `#F43F5E` | 3.51 | ✗ (<4.5) | `--nic-automobile-ink #BE123C` | 6.29 |
| Error `#EF4444` | 3.60 | ✗ | `--nic-error-ink #B91C1C` | 6.47 |
| Info `#3B82F6` | 3.52 | ✗ | `--nic-info-ink #1D4ED8` | 6.70 |
| Finalist `#8B5CF6` | 4.05 | ✗ | `--nic-finalist-ink #6D28D9` | 7.10 |
| Closed `#64748B` | 4.55 | ✓ (borderline) | `--nic-closed-ink #475569` for small text | 7.58 |
| Electric Blue `#4F46E5` | 6.01 | ✓ | — | 6.29 |
| Slate `#687280` | 4.66 | ✓ (just) | — | 4.88 |

**Rule:** raw colors are for *fills, dots, bars, borders, icons ≥ 24px, and graphics*. `-ink` is for *text and small icons on light surfaces*. On Deep Violet the raw colors mostly pass (Cyan 7.71, Lime 12.42, Orange 6.68, Gold 12.23, Civil 8.22, Automobile 5.10) — except Electric Blue on Violet (2.98) which **fails**: never put blue text/links on dark; use `--nic-cyan-bright #22D3EE` (10.36) for links on dark.

**Text on colored fills:**

| Fill | Text | Ratio |
|---|---|---|
| Electric Blue | White | 6.29 ✓ |
| Indigo / Deep Violet | White | 11.42 / 18.73 ✓ |
| Lime | Graphite | 11.97 ✓ |
| Cyan | Graphite | 7.43 ✓ (white fails: 2.43) |
| Orange | Graphite | 6.44 ✓ (white fails: 2.80) |
| Gold | Graphite | 11.79 ✓ |
| Automobile | Graphite or **White only ≥ 18px bold** (3.67) | — |
| Error (`#EF4444`) | White fails (3.76) → use `--nic-error-strong #DC2626` fill (4.83 ✓) | — |
| Closed `#64748B` | White | 4.76 ✓ |

## 4. Neutrals

| Token | Hex | Use | Notes |
|---|---|---|---|
| Paper | `#F8FAFC` | Page background | |
| White | `#FFFFFF` | Cards, inputs, elevated surfaces | |
| Graphite | `#17151F` | Primary text (17.3:1 on Paper) | Never use pure black |
| Slate | `#687280` | Secondary text (4.66:1) | Smallest allowed use: 14px. Do not lighten |
| Border | `#D9DCE5` | Dividers, card outlines | Decorative separator only (1.31:1) — **not** sufficient for input borders; inputs use `--color-border-strong #838B9C` (3.3:1) at 1.5px |

## 5. Track colors

| Track | Token | Ink | Tint |
|---|---|---|---|
| Automobile Engineering | `--nic-automobile #F43F5E` | `--nic-automobile-ink` | `--nic-automobile-tint` |
| Electrical & Electronics | `--nic-eee #06B6D4` | `--nic-eee-ink` | `--nic-cyan-tint` |
| Civil Engineering | `--nic-civil #22C55E` | `--nic-civil-ink` | `--nic-civil-tint` |

**How they work**
- Track colors are *identifiers inside the NIC system*. They never become a page theme. A track page is still Violet/Indigo/Blue with a track marker.
- Apply with `data-track="automobile|eee|civil"`; descendants read `--track-color`, `--track-ink`, `--track-tint`.
- Permitted uses: track badge, card accent bar (4px), selected-track ring, track icon, track diagram stroke, small dots in filters/legends.
- Not permitted: track-colored page backgrounds, track-colored primary buttons (buttons stay Electric Blue), gradient text.
- **Collision note:** EEE track = Cyan = the technology accent. When an EEE marker sits next to generic Cyan UI, the marker must always include its track **icon + label** — color alone never identifies a track.
- **Collision note:** Civil = Success green. Never show a Civil badge inside a success/validation context without its icon and label.
- Never place two track colors adjacent as a gradient. Multi-track groupings use three separate chips.

## 6. Semantic colors

| Role | Fill/icon | Text (light) | Tint bg | Icon (required) |
|---|---|---|---|---|
| Success | `#22C55E` | `--nic-success-ink` | `--nic-success-tint` | check-circle |
| Warning | `#F59E0B` | `--nic-warning-ink` | `--nic-warning-tint` | alert-triangle |
| Error | `#EF4444` | `--nic-error-ink` | `--nic-error-tint` | alert-octagon |
| Info | `#3B82F6` | `--nic-info-ink` | `--nic-info-tint` | info-circle |

Semantic colors are *functional*: used only for system feedback (validation, alerts, toasts, form state). They are never used decoratively, so Success green must not appear as an ornament and the Civil track must not be used to mean "success".

## 7. Competition status colors

Seven tokens, one set of attributes (`data-status`) providing `--status-color`, `--status-ink`, `--status-tint`.

| Status | Token | Color | Label | Icon | Notes |
|---|---|---|---|---|---|
| Registration Open | `--nic-status-open` | `#22C55E` | "Registration Open" | radio-dot (pulsing dot) | Dot may pulse (opacity 1→0.5, 2s) once motion permitted |
| Closing Soon | `--nic-status-closing` | `#F59E0B` | "Closing Soon" | clock | Pair with a date or countdown; orange accent may be used for the countdown digits |
| Closed | `--nic-status-closed` | `#64748B` | "Closed" | lock | Visually quiet; the only status that is *lower* emphasis |
| Under Review | `--nic-status-review` | `#4F46E5` | "Under Review" | hourglass / scan | Same hue as primary action → never make this pill clickable-looking (no hover) |
| Selected | `--nic-status-selected` | `#06B6D4` | "Selected" | check | |
| Finalist | `--nic-status-finalist` | `#8B5CF6` | "Finalist" | flag | |
| Winner | `--nic-status-winner` | `#FACC15` | "Winner" | trophy | Gold; follow award rules (§8) |

**How each appears**

| Surface | Spec |
|---|---|
| **Badge / pill** | Pill, 24px high. Tint background + `-ink` text + 8px leading dot in `--status-color` (or icon). Label always present. Uppercase mono 12px/0.08em. |
| **Dark badge** | `rgb(255 255 255 / .08)` bg, raw `--status-color` text and dot, 1px border `--status-color` at 40%. |
| **Card** | Status badge top-right of the card. Optional 4px top rule in `--status-color` only for dashboard "status" cards. Card body remains neutral. |
| **Timeline** | Node = 12px circle. Completed: filled `--status-color` + check. Current: ring (2px `--status-color`) + inner dot, label bold. Future: 2px `--nic-border` outline, Slate label. Connector: 2px; solid for done, dashed (4 4) for upcoming. Each node has a text label, not color alone. |
| **Dashboard** | Left-aligned status column shows pill. Row accent not colored. Summary counters use neutral numerals with a small `--status-color` dot. |
| **Notification** | Semantic tint bg + icon + title naming the status ("Your team is now a Finalist"). Gold/Winner notifications are the only ones allowed a subtle shimmer (see motion). |

## 8. Award color (Gold `#FACC15`)

Only for: winners, awards, achievement badges, finale/championship emphasis. Never for generic highlights, buttons, links, or decoration. Text on gold: Graphite. Gold text on light is forbidden — use `--nic-gold-ink` or place gold as fill. Gold is allowed as text/glyph on Deep Violet (12.2:1).

## 9. Gradients

| Token | Stops | Use | Don't |
|---|---|---|---|
| `--gradient-innovation-flow` | Blue → Cyan (135°) | Hero shapes, section graphics, diagram strokes, large decorative blobs | Text fills for body or headings; buttons |
| `--gradient-future-momentum` | Blue → Cyan → Lime | Special banners, campaign moments, one highlight per viewport | Backgrounds of whole pages; repeated sections |
| `--gradient-deep-innovation` | Violet → Blue (160°) | Dark hero areas, footer, premium panels | Under small low-contrast text |

Rules:
- **Gradient text:** at most one phrase per page (e.g., one word in the hero Display). Never in nav, buttons, labels, body, or cards. Must include a solid-color fallback and sit on Deep Violet (Blue→Cyan on Violet: blue end is 2.98:1 — so use gradient text **only at ≥ 48px** and bias the gradient to Cyan: `linear-gradient(90deg, #22D3EE, #A5B4FC)` is the permitted dark-surface text gradient — see `--gradient-text-on-dark` below; do not use Innovation Flow raw for text).
- Gradients may not pass through grey: Blue→Cyan interpolates cleanly; do not add intermediate stops.
- Contrast for text over a gradient is checked at the *worst point* under the text.
- Gradient fills carry no text unless that text is White on a section that stays ≥ 4.5:1 (Deep Innovation passes at the Violet end; at the Blue end white is 6.29 ✓).

Token for allowed gradient text on dark:

```css
--gradient-text-on-dark: linear-gradient(90deg, #22D3EE 0%, #A5B4FC 100%); /* 10.4 → 9.4 on Deep Violet */
```

(Defined in `tokens/gradients.css`.)

## 10. Extending the palette

- Add a new color only when it has a *job no existing color can do*. Document: purpose, tokens, ink/tint, contrast table, and a "don't" list.
- Every new hue needs `-ink` and `-tint` derivatives and a contrast table in this file.
- A fourth track (if NIC ever expands) must be chosen ≥ 40° hue distance from Automobile, EEE, Civil and the Finalist violet, and must pass the same ink/tint rules.
