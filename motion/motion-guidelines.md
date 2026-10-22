# Motion Guidelines

Tokens: `tokens/motion.css`. Motion character: **precise + energetic + technical.** Think of a CNC head, a plotter drawing a line, a gauge needle settling — decisive start, controlled landing. **Not** bouncy, playful, elastic, or decorative.

## 1. Principles

1. **Purpose first.** Motion explains hierarchy, state change or spatial relationship, or draws the eye once. If it only "looks cool", cut it.
2. **Fast in, soft out.** Ease-out curves; things arrive quickly and settle. No overshoot, ever.
3. **Small distances.** Translate 4–8px, scale 0.98–1.02. Big moves are slow and rare.
4. **Draw, don't bounce.** The signature is *line drawing* and *gradient drift*, not spring physics.
5. **One thing at a time.** One animated focal point per viewport; stagger ≤ 6 items.
6. **Always optional.** Every animation has a complete static state and respects `prefers-reduced-motion`.

## 2. Timing tokens

| Purpose | Token | Duration | Easing |
|---|---|---|---|
| Micro-interaction (press, toggle, color change) | `--duration-micro` | 120ms | `--ease-standard` |
| Standard transition (hover, focus, dropdown) | `--duration-standard` | 200ms | `--ease-standard` |
| Emphasis (card lift, tab change, modal in) | `--duration-emphasis` | 360ms | `--ease-emphasis` |
| Reveal on scroll | `--duration-reveal` | 560ms | `--ease-emphasis` |
| Page transition | `--duration-page` | 400ms (out 160ms / in 240ms) | exit `--ease-exit`, enter `--ease-emphasis` |
| Technical-line drawing | `--duration-draw` | 900ms (scale with length: ~1ms per 1px, max 1400ms) | `--ease-linear` or standard |
| Gradient movement (ambient) | `--duration-gradient` | 14s loop, alternate | `--ease-linear` |
| Exit / dismiss | — | 60–70% of enter time | `--ease-exit` |

Curves: standard `cubic-bezier(0.2, 0, 0, 1)` · emphasis `cubic-bezier(0.16, 1, 0.3, 1)` · exit `cubic-bezier(0.4, 0, 1, 1)`.

## 3. Patterns

### Hover movement
- Clickable card: `translateY(-2px)` + shadow one step up (or border color change on bordered cards). 200ms.
- Primary/Dark button: `translateY(-2px)`; arrow icon `translateX(4px)`. Press: `scale(.98)`, no lift.
- Links: underline offset animates from 0.2em → 0.35em or color shifts; no movement.
- Imagery inside cards: `scale(1.02)` inside overflow-hidden container, 360ms. Never scale text.
- Nav active bar: slides/resizes to the target item (200ms) instead of jump-cutting.

### Reveal animation
- Elements enter with `opacity: 0 → 1` and `translateY(8px → 0)` over 560ms `--ease-emphasis`, triggered at ~15% in view, **once**.
- Group staggering: `--stagger-step` 60ms, ≤ 6 items; beyond that reveal as a group.
- Headlines: reveal whole line blocks (not per-letter). No typewriter, no word-by-word spin.
- Above-the-fold content never waits on scroll; first paint is complete, then a 400ms settle at most.

### Technical-line animation
- SVG `stroke-dasharray`/`stroke-dashoffset` draws a line from origin to node over `--duration-draw`; node dot scales 0.6 → 1 + fades in as the line arrives (120ms).
- Dimension lines draw outward from center; corner brackets draw in simultaneously (400ms).
- Lines are drawn once on reveal; no looping pulses. Exception: a single "data pulse" dot (6px) traveling along a hero circuit line, 4–6s loop, `--ease-linear`, **dark surfaces only, max one per viewport**.
- Static fallback: line fully drawn.

### Gradient movement
- Only on Spectrum backgrounds/hero shapes: slowly translate/rotate glow layers (±8% position, ≤ 10° rotation) over `--duration-gradient`, alternating, `--ease-linear`, using `transform` on a pseudo-element (GPU-friendly), not background-position repaints.
- Gradient *buttons/text* never animate.
- Pause when tab hidden or element off-screen (`IntersectionObserver`).

### Page transitions
- Cross-fade with 8px upward settle: outgoing 160ms fade out; incoming 240ms fade + `translateY(8px → 0)`. No slides, wipes, or full-screen color flashes.
- Persist the nav and background; only the content region transitions. Prefer the View Transitions API with a graceful no-op fallback.
- Focus moves to the new page's `<h1>`/main landmark after transition.

### Counters & countdowns
- Numeric count-up on stats: 900ms, ease-out, once, tabular numerals. Final value must be in the DOM for assistive tech.
- Countdown digits swap with a 120ms opacity crossfade (no flip animations). Orange accent permitted.

### Status & feedback
- Success check: stroke draws (240ms). Error input: 1 horizontal shake is **not** used — use border color + message fade/slide-in (4px, 200ms).
- Open-status dot: opacity pulse 1 → .5, 2s loop, only for "Registration Open". Winner/Gold: single 800ms light sweep once when first revealed, never looping.
- Loading: 16px arc spinner (800ms linear) for buttons; skeletons use a 1.4s opacity pulse (not a shimmer sweep).

## 4. Don'ts

Bounce / elastic / spring overshoot · spinning decorative elements · parallax on more than one layer, or on text · scroll-jacking · auto-playing background video with motion that competes with content · animating layout properties (`width`, `height`, `top`, `left`) — use `transform`/`opacity` · looping animations that never stop near text · transitions > 600ms for interactions · animating more than ~3 elements simultaneously in view · cursor-follow effects · confetti (the Finale phase may propose a single tasteful exception; requires design review).

## 5. Reduced motion

`@media (prefers-reduced-motion: reduce)`: durations → ~0; translations → 0; scale → 1; gradient drift off; line-draw shows final state; count-ups show the final number; page transitions become instant swaps. **Opacity-only fades ≤ 120ms are still acceptable.** (Implemented in `tokens/motion.css` and `styles/base.css`.)

## 6. Performance budget

- Animate only `transform`, `opacity` (and SVG stroke-dashoffset).
- `will-change` only during an animation; never permanent on many elements.
- Animation JS ≤ ~10KB gz; prefer CSS + IntersectionObserver. If a library is needed, document the reason in this file.
- 60fps on mid-range Android; test with 4× CPU throttle.

## 7. Adding a new animation

Document: purpose · trigger · duration/easing token · distance · reduced-motion behavior · where used. Reuse existing tokens before inventing new ones.
