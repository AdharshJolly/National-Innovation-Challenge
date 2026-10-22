# NIC Brand Guidelines — "Innovation Spectrum"

Brand direction for the **National Innovation Challenge**. Token values and component specs live in `DESIGN_SYSTEM.md` and `docs/`; this file explains the *why* and the rules of judgment.

## 1. Personality

**Ambitious · technical · energetic · credible · inclusive.**

NIC is a national stage for student engineers. It should feel like a serious engineering institution with the energy of a launch event — not a school fair, not a startup template, not a corporate annual report.

| We are | We are not |
|---|---|
| Precise, confident | Playful, cartoonish |
| Technical, craft-driven | Generic "tech blue" SaaS |
| Energetic, forward | Chaotic, neon-heavy |
| Welcoming to first-time builders | Elitist or intimidating |
| Evidence-led (real hardware, real prototypes) | Stock-photo corporate |

Voice (for copy written against this system): direct, active, concrete. Short sentences. Verbs over adjectives ("Build a prototype", not "Unleash your innovation journey").

## 2. Logo — PLACEHOLDER

> ### ⚠ LOGO PLACEHOLDER — NO OFFICIAL NIC LOGO HAS BEEN SUPPLIED
> This design system deliberately **does not invent a logo**. Wherever a logo is needed, use a clearly marked placeholder slot until the organisers provide the official mark.

**Placeholder slot spec (for layout only)**

| Item | Spec |
|---|---|
| Slot name | `LOGO PLACEHOLDER` (asset `SOC-12`) |
| Header size | 160×40 px (desktop), 128×32 px (mobile) |
| Footer size | 200×56 px |
| Visual | Dashed 1px outline in `--color-border-strong`, label "NIC LOGO" in `.t-label` |
| Clear space | Minimum = height of the logo ÷ 2 on all sides |
| Minimum size | To be set when the real logo arrives |
| Variants required | Full colour (light bg), reversed/white (dark bg), single-colour, icon-only (favicon) |
| Forbidden | Typing "NIC" in a display font and treating it as the logo; reusing the track icons as a logo |

When the official logo is supplied: add it under `assets/logo/`, update this section with clear-space, minimum-size and misuse rules, and remove the placeholder language.

## 3. Colour philosophy

**One spectrum, one accent at a time.** The palette moves from the depth of Deep Violet through Indigo and Electric Blue to the energy of Cyan — the "Innovation Flow" — with Lime and Orange as rare sparks.

- **Deep Violet `#1A0830`** — depth and gravity. Dark surfaces, hero moments, footer.
- **Indigo `#312E81`** — secondary dark; supporting panels.
- **Electric Blue `#4F46E5`** — action. Primary buttons, links on light, focus.
- **Cyan `#06B6D4`** — the energy highlight; also the EEE track colour.
- **Lime `#A3E635`** — *sparing*. One small spark per viewport at most (tiny accents, end-caps of the Future Momentum gradient).
- **Orange `#F97316`** — urgency and countdowns only.
- **Gold `#FACC15`** — **awards only** (winner status, trophies, winner badges).
- **Paper `#F8FAFC` / White / Graphite `#17151F` / Slate `#687280`** — the quiet neutrals that make the colour read as intentional.

Rules:
1. Neutrals carry ≥ 80% of any screen.
2. Raw Cyan, Lime, Orange, Gold, Civil green and warning amber **fail contrast as text on light** — use the `-ink` variants (`docs/COLOR_SYSTEM.md`).
3. Track colours (Automobile rose, EEE cyan, Civil green) appear only in track context via `data-track`; never as general UI colours.
4. Status colours appear only via `data-status`, always with label + icon.
5. Gradients: **Innovation Flow** (Blue→Cyan) for emphasis; **Future Momentum** (Blue→Cyan→Lime) for rare hero/campaign moments; **Deep Innovation** (Violet→Blue) for dark surfaces. No other gradients, no rainbow, no gradient on small UI.

## 4. Typography

| Role | Font | Notes |
|---|---|---|
| Display & headings | **Sora** | Geometric, confident, slightly technical. Tight tracking at large sizes |
| Body & UI | **Inter** | Neutral workhorse, excellent legibility |
| Labels, data, IDs, eyebrows | **JetBrains Mono** | The "engineering annotation" voice — uppercase, tracked, small |

Fluid scale (`clamp`): Display 44→88 px · H1 36→64 · H2 28→44 · H3 22→30 · H4 18→22 · Body 16 · Small 14 · Caption 13 · Label 12. Max measure 68ch. See `docs/TYPOGRAPHY.md`.

Rules: one Display per page · eyebrow label above major headings · never more than two font weights in a block · gradient text only on Deep Violet and only ≥ 48px.

## 5. Imagery

Real-feeling engineering, shot or rendered with intent: prototypes on benches, circuit boards, structural models, test rigs. Cinematic but credible — dark, controlled light, one coloured edge-light that matches the context (blue by default, track colour in track pages).

Do: show hands, tools, in-progress hardware, diverse students at work; leave text-safe space; apply `--scrim-dark` under text.
Don't: stock handshakes, floating holograms, generic glowing brains, lightbulbs, rocket clichés, identifiable real people without consent, text baked into images.

Detailed shot list: `imagery/IMAGE_ASSET_PLAN.md`.

## 6. Illustration & diagrams

Technical line illustration: 1.5px strokes, 45° chamfers, dimension lines, registration marks, node dots. Colour from the palette only; at most one gradient focal shape. No cartoon characters, no mascots, no isometric blobs. Diagrams carry real information and always have text alternatives. See `docs/ENGINEERING_VISUAL_LANGUAGE.md`.

## 7. Iconography

Outline, 24px grid, 1.5px stroke, `currentColor`, ≤ 1px corner radius or 45° chamfer, optional single node dot. Track icons form a family (Automobile / EEE / Civil). See `icons/ICON_SYSTEM.md`.

## 8. Motion

Precise, energetic, technical — a plotter drawing a line, not a ball bouncing. Ease-out, 4–8px travel, line-draw and slow gradient drift. No bounce, no parallax stacks, no confetti. Everything respects `prefers-reduced-motion`. See `motion/motion-guidelines.md`.

## 9. Layout & backgrounds

12-column grid, 4px spacing unit, generous section rhythm (`--section-y`). Backgrounds are CSS-first systems — Light Technical (Paper + faint grid), Dark Technical (Violet + grid + glow), Spectrum (hero gradients + grain), Clean (flat). Alternate light and dark sections for pacing; never place two Spectrum sections adjacently. See `docs/GRID.md` and `docs/BACKGROUNDS.md`.

## 10. Accessibility as a brand value

WCAG 2.2 AA minimum. Colour is never the sole signal. 44px touch targets. Visible focus everywhere. Full rules: `ACCESSIBILITY.md`.

## 11. Do / Don't summary

| Do | Don't |
|---|---|
| Use tokens (`var(--color-*)`) | Hard-code hex values |
| Pair every status/track colour with icon + label | Rely on colour alone |
| Use `-ink` colours for coloured text on light | Put Cyan/Lime/Orange/Gold text on Paper |
| Keep Lime to a single spark | Flood a section with Lime |
| Use Gold for awards only | Use Gold as a decorative accent |
| Alternate light/dark sections | Stack dark Spectrum sections |
| Use real engineering imagery | Use generic stock/hologram imagery |
| Draw with thin technical lines | Use bubbly, rounded, mixed-style icons |
| Use the placeholder for the logo | Invent a logo or typeset "NIC" as one |
| Respect reduced motion | Add bounce, parallax or looping decoration |

## 12. Open brand inputs (needed from organisers)

1. Official logo + usage rules.
2. Official name, tagline and boilerplate.
3. Photography consent policy.
4. Trophy / award design direction.
