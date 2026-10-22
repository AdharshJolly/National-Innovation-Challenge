# Accessibility Guidelines

Target: **WCAG 2.2 AA** across the site. Several palette colors do not pass as-is — the system provides compliant derivatives (see `docs/COLOR_SYSTEM.md`). Contrast values here were computed, not estimated.

## 1. Color contrast

| Content | Minimum | Notes |
|---|---|---|
| Body text, small text (< 24px or < 19px bold) | 4.5:1 | |
| Large text (≥ 24px, or ≥ 19px bold) | 3:1 | Display/H1/H2 may use a lower-contrast pairing if ≥ 3:1 |
| UI components, borders of inputs, focus rings, meaningful icons | 3:1 | Input borders use `--color-border-strong` (3.3:1) |
| Decorative (grids, glows, dividers) | none | Must not carry meaning |

Verified safe pairs:

| Foreground / background | Ratio |
|---|---|
| Graphite / Paper | 17.3 |
| Slate / Paper | 4.66 |
| Slate / White | 4.88 |
| White / Electric Blue | 6.29 |
| Electric Blue / Paper | 6.01 |
| White / Indigo | 11.42 |
| White / Deep Violet | 18.73 |
| `--nic-mist` / Deep Violet | 11.3 |
| `--nic-slate-on-dark` / Deep Violet | 8.6 |
| Cyan-bright / Deep Violet | 10.4 |
| Lime / Deep Violet | 12.42 |
| Graphite / Lime | 11.97 |
| Graphite / Cyan | 7.43 |
| Graphite / Orange | 6.44 |
| Graphite / Gold | 11.79 |

**Known failures — never use:**
Cyan, Lime, Orange, Gold, Civil green, Warning amber as text on Paper/White; White text on Cyan, Orange, Lime, Gold; **Electric Blue text on Deep Violet** (2.98) or Indigo (1.82); Slate on Deep Violet (3.84); `--nic-border` as the only boundary of an input (1.31).

## 2. Text

- Base 16px, user-scalable; use `rem`; layout must survive 200% zoom and 400% reflow at 320px width without horizontal scroll.
- Line height ≥ 1.5 for body; paragraph spacing ≥ 1.5× font size.
- Max measure 68ch.
- Don't use text in images for essential content; provide real text. Any text in generated assets needs an equivalent in markup.
- Respect user font-size and text-spacing overrides (no fixed-height text containers).
- Language attribute on `<html>`; mark language changes inline.

## 3. Buttons & controls

- Native `<button>`/`<a>` elements. Links navigate; buttons act.
- Hit target ≥ 44×44 CSS px (24×24 absolute minimum under WCAG 2.2 SC 2.5.8, but we require 44).
- Accessible name for every control, including icon-only buttons (`aria-label` + tooltip).
- Disabled controls: use `disabled`/`aria-disabled`; provide a nearby reason when not self-evident.
- Loading buttons: `aria-busy="true"`, announce completion via a polite live region.
- Don't change meaning on hover alone; no hover-only content.

## 4. Focus states

- Every focusable element has a visible `:focus-visible` indicator: 2px ring in `--color-focus-ring` (Electric Blue light / Cyan dark) with a 2px offset gap in the page colour. Ring contrast ≥ 3:1 against both the element and the page.
- Focus order = visual order. Never `tabindex > 0`.
- Skip link ("Skip to content") is the first focusable element.
- Modals/drawers trap focus, restore it on close, and close on Esc.
- Focus is never hidden under sticky nav (`scroll-padding-top: var(--nav-height)`).

## 5. Status colors

Seven competition statuses and four semantic colors **always** pair color with a **text label** and a distinct **icon/shape** (see table in COLOR_SYSTEM §7). A grayscale screenshot must still tell each status apart.

- Pills use `-ink` text on `-tint` backgrounds (≥ 4.5:1; all verified 4.5–6.7).
- Live changes (e.g., "Registration closed") announced via `role="status"` (polite) or `role="alert"` (errors only).
- Countdowns: provide a static accessible text alternative ("Closes 14 March, 11:59 PM IST") and don't update `aria-live` every second.

## 6. Track colors

- Track identity = **icon + name + color**. Color is the third cue, never the first.
- Selected track: outline + check icon + "Selected" text (not just a color change).
- EEE (Cyan) and Civil (green) must not be distinguished from other UI by hue alone.
- Charts/diagrams in track colors need pattern or direct labels as well.
- Colour-blindness: Automobile (rose), EEE (cyan), Civil (green) are separated by luminance and hue; still verify with deuteranopia/protanopia simulation when new track visuals are made.

## 7. Dark backgrounds

- Text: White/`--nic-mist`/`--nic-slate-on-dark` only.
- Links: `--nic-cyan-bright`, underlined.
- Focus ring: Cyan.
- Borders use `--nic-violet-line` for decoration, `--nic-violet-line-strong` (24% white) for control edges. Verify controls on dark reach 3:1 (fill state or label must carry meaning).
- Over imagery: always `--scrim-dark`; check contrast at the lightest region beneath text.
- `forced-colors` mode: use system colors; do not rely on background gradients or box-shadow for essential boundaries (add `border: 1px solid CanvasText` fallback).

## 8. Gradients

- Gradients are decorative. Text over a gradient must pass at the worst point beneath it.
- Gradient text: ≥ 48px, only on Deep Violet, using `--gradient-text-on-dark` (≥ 9.4:1). Provide a solid color fallback and keep the full phrase readable if gradients are disabled.
- Never encode information (e.g., progress, rank) in gradient position or hue alone.

## 9. Motion & other

- Honor `prefers-reduced-motion` (tokens collapse durations and distances; see motion guidelines).
- No flashing > 3 times/second; no auto-playing audio.
- Auto-moving content > 5s needs pause control (applies to carousels and looping video).
- Images: meaningful `alt`; decorative `alt=""`; diagrams get a text description; SVG icons used decoratively `aria-hidden="true"`.
- Forms: visible `<label>` for every field; errors identified in text and linked via `aria-describedby`; error summary at top of long forms; don't clear input on error; allow paste; support autofill (`autocomplete`).
- Tables: real `<th scope>`; timelines are ordered lists (`<ol>`) with text status.

## 10. Checklist (run before shipping any component)

1. Keyboard-only walkthrough works, focus visible.
2. Screen-reader name, role, state correct.
3. Contrast verified for every state (hover, active, disabled-exempt, error).
4. Works at 200% zoom and 320px width.
5. Meaning survives in grayscale.
6. Reduced-motion version reviewed.
7. Touch targets ≥ 44px.
