# Component Specifications

Visual specs only — **not implementations and not pages.** Values come from `tokens/components.css`. Build every component from these tokens; if you need a value that is not here, add a token first.

Universal rules:
- All interactive elements: min target 44×44px (inc. padding), visible `:focus-visible` ring (`--ring-focus`; `--color-focus-ring-inverse` on dark), `cursor: pointer` only when actionable.
- Transitions use `--transition-standard` (color, background, border, shadow, transform). Never `transition: all`.
- Hover effects are enhancements only; every state must also be clear on touch and keyboard.
- No component relies on color alone (see `ACCESSIBILITY.md`).

---

## 1. Buttons

Sizes: sm 36px · **md 44px (default)** · lg 52px. Radius `--radius-md`. Font: Button role. Icon gap 8px; icon 20px (16px in sm), same stroke as icon system. Border 1.5px (transparent on filled variants to keep size constant).

| Variant | Default | Hover | Active | Use |
|---|---|---|---|---|
| **Primary** | Electric Blue bg, White text | `--nic-blue-hover` bg, lift −2px, arrow icon nudges +4px | `--nic-blue-active`, scale .98, no lift | The single main action per view (Register, Submit) |
| **Secondary** | Transparent, 1.5px Electric Blue border + text | `--nic-blue-tint` bg | `#E0E3FF` bg | Paired next to primary (Learn more) |
| **Ghost** | Transparent, Graphite text | 6% Graphite bg | 12% Graphite bg | Tertiary actions, toolbars, nav CTA alternates |
| **Dark** | Deep Violet bg, White text | Indigo bg | `#25225F` | Primary action on **light** hero areas where blue would clash; also footer CTAs on light |
| **Accent** | Lime bg, **Graphite** text | `#B4EC58` | `#8FD21F` | Campaign moments only. ≤ 1 per viewport. Never next to another accent button |
| **Destructive** | `--nic-error-strong` bg, White text | `#B91C1C` | `#991B1B` | Withdraw, delete. Always confirm in a modal |

On dark backgrounds: Primary stays Electric Blue but add `--glow-primary` on hover; Secondary becomes White border/text (hover: `rgb(255 255 255 / .08)`); Ghost text White.

| State | Spec (all variants) |
|---|---|
| default | per table |
| hover | color change + (primary/dark only) −2px translate; 200ms standard |
| active | scale `--scale-press`, remove lift; 120ms |
| focus | `--ring-focus`: 2px page-color gap + 2px `--color-focus-ring`; never remove outline without replacement |
| disabled | `--btn-disabled-bg` / `--btn-disabled-fg`, no shadow/lift, `cursor: not-allowed`, `aria-disabled`; *must still be explained nearby if the reason isn't obvious* |
| loading | Label stays (width fixed), spinner replaces icon — 16px 2px-stroke arc rotating 800ms linear (the **only** permitted rotation); `aria-busy="true"`; button not clickable; text may change to "Submitting…" |

Don't: more than one Primary per view; gradient-filled buttons; pill-shaped buttons (pills are for badges); icon-only buttons without accessible name + tooltip.

---

## 2. Cards

Base: radius `--radius-lg`, padding `--card-pad` (24 → 32), 1px `--color-border`, bg White, shadow none.

| Variant | Spec | Use |
|---|---|---|
| **Standard** | White, 1px border, no shadow. Hover: border → `--color-border-strong`, no lift (static cards) or −2px + `--shadow-card` (clickable) | Default content |
| **Elevated** | White, no border, `--shadow-card`. Hover (if clickable): `--shadow-elevated`, −2px | Call-outs; ≤ 3 per viewport |
| **Dark** | `--nic-violet-raised` bg, 1px `--nic-violet-line`, White heading, `--nic-mist` body. Hover: border `--nic-violet-line-strong` + optional cyan top line draws in | Cards on Deep Violet/Spectrum sections |
| **Track** | Standard card + **4px top bar** in `--track-color`, track icon + label at top, Label-role track name. Selected: 2px `--track-color` outline + check icon + "Selected" text | Track selection, track overview |
| **Problem** | Standard card; header row: mono ID (`PS-A01`, Label role, Slate) + track badge; H4 title; 2–3 line body; footer: category badge + arrow link. Hover: arrow nudge, border to track color | Problem statements list |
| **Feature** | No border or fill (open layout): 32px icon in 48px square (radius-md, `--nic-blue-tint` bg), H4, body. Optional hairline divider between items | Benefits/features; avoids "card soup" |
| **Status** | Standard card with a status badge top-right, status label text and, optionally, 4px **left** bar in `--status-color`. Body stays neutral | Registration/application/dashboard items |

Don't: nest cards inside cards; apply more than one accent (track bar *or* status bar, not both); put gradients behind card text.

---

## 3. Badges

Height 24px · padding-x 12px · Label role (mono, uppercase, 12px, 600) · 8px dot or 14px icon at start · gap 6px.

| Variant | Radius | Light spec | Dark spec |
|---|---|---|---|
| **Track** | pill | `--track-tint` bg, `--track-ink` text, track icon (14px) + full name ("Automobile", "EEE", "Civil") | `rgb(255 255 255 / .08)` bg, raw `--track-color` text, 1px border track 40% |
| **Status** | pill | `--status-tint` bg, `--status-ink` text, dot or icon + label per table in COLOR_SYSTEM §7 | as above with `--status-color` |
| **Category** | `--radius-sm` (squared) | Transparent, 1px `--color-border`, Slate text, no icon. Neutral on purpose | White 20% border, `--nic-mist` text |
| **Achievement** | pill | Gold fill `#FACC15`, Graphite text, trophy/star icon. **Only** for winners/awards. Optional 1px inner highlight | Same; plus `--glow-cyan-soft` forbidden — gold stays flat |

Badges are non-interactive by default. If a badge is a filter chip, add a `button` role, 44px hit area, and a selected state with a check icon + 2px outline.

---

## 4. Inputs

Height 48px · padding-x 16px · radius `--radius-md` · bg White · font Body 16px (≥16px prevents iOS zoom). Label above (Body Small, 600, Graphite), help text below (Caption, Slate), 8px label gap, 8px help gap.

| State | Border | Background | Other |
|---|---|---|---|
| **Default** | 1.5px `--color-border-strong` (3.3:1) | White | Placeholder `--nic-slate` — placeholder is a hint, never a label |
| **Hover** | 1.5px Slate | White | |
| **Focus** | 1.5px Electric Blue | White | 3px outer ring `rgb(79 70 229 / .25)`; label turns Electric Blue |
| **Filled** | 1.5px `--color-border-strong` | White | Text Graphite |
| **Error** | 1.5px `--nic-error-ink` | White | Error icon (alert-octagon) inside right + message below in `--nic-error-ink` with icon; `aria-invalid`, `aria-describedby` |
| **Disabled** | 1.5px `--color-disabled-border` | `--color-disabled-bg` | Text `--color-disabled-text`, `cursor: not-allowed` |
| **Success (optional)** | unchanged border | White | Check icon + "Verified" help text; never green border only |

Selection controls (checkbox/radio/toggle): 20px, radius-sm (checkbox) / full (radio); checked = Electric Blue fill + white check glyph; keep the label clickable; group error shown at group level.

---

## 5. Navigation

| Aspect | Spec |
|---|---|
| **Height** | 72px desktop, 60px mobile |
| **Light** | `--nav-light-bg` (Paper 88% + 12px backdrop blur), bottom 1px `--color-border`. Links: Nav role, Graphite. Hover: Electric Blue |
| **Dark** | `--nav-dark-bg` (Violet 82% + blur), bottom 1px `--nic-violet-line`. Links: `--nic-mist`; hover White |
| **Active state** | 2px bar under the item (Electric Blue on light, Cyan on dark), 8px below text, **plus** `aria-current="page"` and heavier weight (600). Not color-only |
| **Desktop** | Logo placeholder left; links centered or left-aligned after logo; primary CTA button (md) right. ≤ 6 top-level links. Dropdowns: `--radius-lg`, `--shadow-elevated`, 8px offset, fade+4px slide |
| **Mobile** | Hamburger (44px target) → full-height drawer from right, `--nav-drawer-bg`, width `min(88vw, 360px)`, links at H4 size with 56px rows, CTA pinned at bottom, scrim `rgb(26 8 48 / .6)`. Focus trapped; Esc closes |
| **Scroll behavior** | Transparent over a hero (dark variant); on scroll > 8px switches to filled with `--shadow-subtle`. Does not hide on scroll-down (keep register CTA reachable) |

---

## 6. Extending

Adding a component: (1) add a section here with variants, states, anatomy, don'ts; (2) add `--{component}-*` tokens to `tokens/components.css`; (3) confirm states for default, hover, active, focus, disabled, loading/error where relevant; (4) run the accessibility checklist.
