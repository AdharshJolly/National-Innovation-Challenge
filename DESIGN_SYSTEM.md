# NIC Design System V1

Direction: **Innovation Spectrum**. Single reference for the National Innovation Challenge website. Tokens live in `src/styles/tokens/`; this file explains how and why to use them.

Contents: 1 Brand · 2 Colour · 3 Typography · 4 Spacing, radius, shadow · 5 Grid · 6 Backgrounds · 7 Engineering visual language · 8 Components · 9 Motion · 10 Imagery and icons · 11 Accessibility · 12 Extending · 13 Cinematic plan · 14 Open inputs

---

## 1. Brand

**Ambitious · technical · energetic · credible · inclusive.** A serious engineering institution with launch-event energy. Not a school fair, startup template or annual report.

| We are | We are not |
|---|---|
| Precise, confident | Playful, cartoonish |
| Technical, craft-driven | Generic "tech blue" SaaS |
| Energetic, forward | Chaotic, neon-heavy |
| Welcoming to first-time builders | Elitist or intimidating |
| Evidence-led (real hardware) | Stock-photo corporate |

Voice: direct, active, concrete. Short sentences, verbs over adjectives ("Build a prototype", not "Unleash your innovation journey").

**Logo:** the official NIC logo has not been supplied. Use a placeholder slot (`SOC-12`): 160×40 header (128×32 mobile), 200×56 footer, dashed 1px `--color-border-strong` outline labelled "NIC LOGO". Clear space = logo height ÷ 2. Never typeset "NIC" as a logo or reuse track icons as one. Required variants once supplied: full colour, reversed, single colour, icon-only.

| Do | Don't |
|---|---|
| Use tokens (`var(--color-*)`) | Hard-code hex, px spacing or durations |
| Pair status/track colour with icon + label | Rely on colour alone |
| Use `-ink` colours for coloured text on light | Put Cyan/Lime/Orange/Gold text on Paper |
| Keep Lime to one spark per viewport | Flood a section with Lime |
| Use Gold for awards only | Use Gold as decoration |
| Alternate light and dark sections | Stack dark Spectrum sections |
| Use real engineering imagery | Use stock/hologram imagery |
| Respect reduced motion | Add bounce, parallax stacks or looping decoration |

---

## 2. Colour

Tokens: `tokens/colors.css`, `tokens/gradients.css`. Contrast ratios were computed (WCAG 2.x), not estimated.

### 2.1 Palette and jobs

| Colour | Hex | Job |
|---|---|---|
| Deep Violet | `#1A0830` | Primary dark: hero, footer, premium panels. Warmer than navy |
| Indigo | `#312E81` | Secondary dark; bridges Violet to Blue in gradients |
| Electric Blue | `#4F46E5` | The one action colour: CTA, links, active, focus |
| Cyan | `#06B6D4` | Tech accent, diagrams; also the EEE track colour |
| Lime | `#A3E635` | Rare spark. Scarcity is what makes it work |
| Orange | `#F97316` | Countdowns and urgency only |
| Gold | `#FACC15` | Awards only (winners, trophies, achievement badges) |
| Paper / White | `#F8FAFC` / `#FFFFFF` | Page / cards, inputs |
| Graphite | `#17151F` | Primary text (17.3:1 on Paper). Never pure black |
| Slate | `#687280` | Secondary text (4.66:1). Smallest use 14px |
| Border | `#D9DCE5` | Decorative dividers only (1.31:1). Inputs use `--color-border-strong #838B9C` (3.3:1) |

Reading order: `Deep Violet / Indigo → Electric Blue → Cyan → Lime → status/track colours`. Neutrals carry at least 80% of any screen.

### 2.2 Token layers

1. **Primitives** `--nic-*`: raw values, never change. Don't use directly in components.
2. **Derivatives** `--nic-*-ink`, `*-tint`, `*-hover`, `--nic-mist`, `--nic-slate-on-dark`: fix accessibility gaps in the base palette.
3. **Semantic roles** `--color-*`: what components consume (`--color-text`, `--color-bg-surface`, `--color-primary`…). Use these so dark/light switching works.
4. **Component tokens** `tokens/components.css`: button, card, badge, input, nav.

Context attributes (set on a container; descendants inherit):

```html
<section data-surface="dark">…</section>     <!-- swaps semantic roles -->
<article data-track="eee">…</article>         <!-- --track-color / -ink / -tint -->
<span data-status="finalist">…</span>         <!-- --status-color / -ink / -tint -->
```

### 2.3 Raw accents fail as text on light: use `-ink`

| Raw colour | On Paper | Text-on-light token | On white |
|---|---|---|---|
| Cyan `#06B6D4` | 2.32 ✗ | `--nic-cyan-ink #0E7490` | 5.36 |
| Lime `#A3E635` | 1.44 ✗ | `--nic-lime-ink #3F6212` | 7.08 |
| Orange `#F97316` | 2.68 ✗ | `--nic-orange-ink #C2410C` | 5.18 |
| Civil/Success `#22C55E` | 2.18 ✗ | `--nic-civil-ink #15803D` | 5.02 |
| Warning `#F59E0B` | 2.05 ✗ | `--nic-warning-ink #B45309` | 5.02 |
| Gold `#FACC15` | 1.46 ✗ | `--nic-gold-ink #854D0E` | 6.85 |
| Automobile `#F43F5E` | 3.51 ✗ | `--nic-automobile-ink #BE123C` | 6.29 |
| Error `#EF4444` | 3.60 ✗ | `--nic-error-ink #B91C1C` | 6.47 |
| Info `#3B82F6` | 3.52 ✗ | `--nic-info-ink #1D4ED8` | 6.70 |
| Finalist `#8B5CF6` | 4.05 ✗ | `--nic-finalist-ink #6D28D9` | 7.10 |
| Closed `#64748B` | 4.55 borderline | `--nic-closed-ink #475569` | 7.58 |
| Electric Blue, Slate | 6.01, 4.66 ✓ | none needed | |

Raw colours are for fills, dots, bars, borders, icons ≥ 24px and graphics. `-ink` is for text and small icons on light. On Deep Violet most raw colours pass (Cyan 7.71, Lime 12.42, Orange 6.68, Gold 12.23, Civil 8.22, Automobile 5.10), **except Electric Blue (2.98)**. Links on dark use `--nic-cyan-bright #22D3EE` (10.36).

Text on coloured fills:

| Fill | Text | Ratio |
|---|---|---|
| Electric Blue | White | 6.29 ✓ |
| Indigo / Deep Violet | White | 11.42 / 18.73 ✓ |
| Lime, Gold | Graphite | 11.97 / 11.79 ✓ |
| Cyan | Graphite | 7.43 ✓ (white 2.43 ✗) |
| Orange | Graphite | 6.44 ✓ (white 2.80 ✗) |
| Automobile | Graphite, or white only ≥ 18px bold (3.67) | |
| Error | White on `--nic-error-strong #DC2626` (4.83 ✓); on `#EF4444` fails | |
| Closed | White | 4.76 ✓ |

### 2.4 Tracks

| Track | Colour | Ink | Icon concept | Image direction |
|---|---|---|---|---|
| Automobile | `#F43F5E` | `#BE123C` | Wheel / chassis / EV | EV systems, prototype detail |
| EEE | `#06B6D4` | `#0E7490` | Circuit trace / chip | Boards, embedded, robotics |
| Civil | `#22C55E` | `#15803D` | Truss / bridge / section | Infrastructure, sustainable build |

- Apply with `data-track="automobile|eee|civil"`. Use `--track-ink` for text/icons ≤ 24px on light, `--track-color` for fills and ≥ 32px graphics, `--track-tint` for backgrounds.
- Allowed: badge, 4px card bar, selected ring, track icon, diagram stroke, legend dots. Not allowed: track-coloured page backgrounds, track-coloured primary buttons, gradient text, two track colours as a gradient.
- Collisions: EEE = Cyan accent; Civil ≈ Success green. A track marker always carries its **icon + label**.
- A fourth track would need ≥ 40° hue distance from the existing three and Finalist violet, plus ink/tint.

### 2.5 Semantic and status colours

| Semantic | Fill | Text (light) | Icon |
|---|---|---|---|
| Success | `#22C55E` | `--nic-success-ink` | check-circle |
| Warning | `#F59E0B` | `--nic-warning-ink` | alert-triangle |
| Error | `#EF4444` | `--nic-error-ink` | alert-octagon |
| Info | `#3B82F6` | `--nic-info-ink` | info-circle |

Semantic colours are for system feedback only, never ornament.

Competition status, via `data-status`:

| Status | Colour | Label | Icon | Note |
|---|---|---|---|---|
| Open | `#22C55E` | Registration Open | radio-dot | Dot may pulse (opacity 1→0.5, 2s) when motion allowed |
| Closing | `#F59E0B` | Closing Soon | clock | Pair with a date or countdown |
| Closed | `#64748B` | Closed | lock | Quietest status |
| Review | `#4F46E5` | Under Review | hourglass | Same hue as primary action, so never clickable-looking |
| Selected | `#06B6D4` | Selected | check | |
| Finalist | `#8B5CF6` | Finalist | flag | |
| Winner | `#FACC15` | Winner | trophy | Gold rules apply |

Surfaces: **badge** = pill, 24px high, tint bg + ink text + 8px dot/icon + label. **Dark badge** = `rgb(255 255 255 / .08)` bg, raw status colour, 1px border at 40%. **Card** = badge top-right, optional 4px rule. **Timeline** = 12px nodes (done: filled + check; current: 2px ring + inner dot; future: `--nic-border` outline), 2px connector, solid for done and dashed for upcoming, always with text labels.

**Gold:** winners, awards, achievements, finale only. Text on gold is Graphite. Gold text on light is forbidden (use `--nic-gold-ink`).

### 2.6 Gradients

| Token | Stops | Use | Don't |
|---|---|---|---|
| `--gradient-innovation-flow` | Blue → Cyan, 135° | Hero shapes, diagram strokes | Text, buttons |
| `--gradient-future-momentum` | Blue → Cyan → Lime | Campaign moments, one per viewport | Whole-page backgrounds |
| `--gradient-deep-innovation` | Violet → Blue, 160° | Dark hero, footer, premium panels | Under small low-contrast text |

- Gradient text: one phrase per page, on Deep Violet only, ≥ 48px, using `--gradient-text-on-dark` (`linear-gradient(90deg, #22D3EE, #A5B4FC)`, 10.4 → 9.4:1). Needs a solid fallback.
- No intermediate stops that pass through grey; no rainbow; no gradient on small UI.
- Text over a gradient is checked at the worst point beneath it.

---

## 3. Typography

Tokens: `tokens/typography.css`. Role classes: `styles/typography.css`. Intent: bold, tight, geometric headlines; calm legible body; compact technical labels. Nothing decorative.

| Role | Family | Fallback |
|---|---|---|
| Display and headings | **Sora** 600/700/800 | `"Sora", "Inter", system-ui, sans-serif` |
| Body and UI | **Inter** 400/500/600 | `"Inter", system-ui, sans-serif` |
| Labels, IDs, data | **JetBrains Mono** 500/600 | `"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace` |

Load with `font-display: swap`, Latin subset, only the weights above. To swap a family, change only the `--font-*` tokens and retune sizes (Sora is wider than Inter).

| Role | Token | Size (min → max) | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|---|
| Display | `--fs-display` | 44 → 88px | 800 | 1.0 | −0.035em | Hero headline, one per page, ≤ 3 lines |
| H1 | `--fs-h1` | 36 → 64 | 700 | 1.05 | −0.03em | Page title |
| H2 | `--fs-h2` | 28 → 44 | 700 | 1.12 | −0.025em | Section title |
| H3 | `--fs-h3` | 22 → 30 | 600 | 1.2 | −0.02em | Subsection |
| H4 | `--fs-h4` | 18 → 22 | 600 | 1.3 | −0.01em | Card title |
| Body Large | `--fs-body-lg` | 18 → 20 | 400 | 1.55 | 0 | Lead paragraph |
| Body | `--fs-body` | 16 | 400 | 1.6 | 0 | Default |
| Body Small | `--fs-body-sm` | 14 | 400 | 1.55 | 0 | Secondary, tables |
| Caption | `--fs-caption` | 13 | 400 | 1.45 | 0 | Captions, footnotes |
| Label | `--fs-label` | 12 | 600 | 1.2 | +0.08em, UPPERCASE, mono | Eyebrows, badges, IDs |
| Button / Nav | `--fs-button`, `--fs-nav` | 15 | 600 / 500 | 1 / 1.2 | +0.005em | Buttons, nav |

Rules:
1. Headings tight, bodies open. Never apply Display tracking to H4.
2. Measure: prose `68ch`, narrow `52ch`, headings ≤ `20ch`. `text-wrap: balance` on headings, `pretty` on paragraphs.
3. One Display per page; H1 and Display never on the same screen.
4. Hierarchy by size, weight and colour, not decoration. No underline except links.
5. Eyebrow: Label above H1/H2. Electric Blue on light (6.0:1), Cyan-bright on dark. Optional 24×2px rule before it.
6. Tabular figures (`font-variant-numeric: tabular-nums`) for stats, tables, countdowns.
7. Left-align. Centre only short (≤ 2 lines) headings in a deliberately symmetric section.
8. Text colour: Graphite on light; White (headings), `--nic-mist` (body), `--nic-slate-on-dark` (secondary) on dark.
9. Links: Electric Blue on light, Cyan-bright on dark, underlined in running text (offset 0.2em).
10. Sentence case for headings and buttons. UPPERCASE only for Label (≤ 3 words).
11. Minimum size 12px (uppercase mono labels only); prose never below 14px.
12. Indic scripts later: add Noto Sans Devanagari (etc.) to the fallback chain and raise body line height to 1.7.

---

## 4. Spacing, radius, shadow

Tokens: `tokens/spacing.css`, `radius.css`, `shadows.css`.

### Spacing (4px base)

| Token | px | Typical use |
|---|---|---|
| `--space-1` | 4 | Icon↔text gap |
| `--space-2` | 8 | Tight gaps, badge padding-y |
| `--space-3` | 12 | Control padding-y, badge padding-x |
| `--space-4` | 16 | Related-item gap, mobile gutter |
| `--space-5` | 20 | Form field spacing |
| `--space-6` | 24 | Card padding, tablet gutter |
| `--space-8` | 32 | Desktop card padding/gutter |
| `--space-10` | 40 | Heading → content |
| `--space-12` | 48 | Sub-section gap |
| `--space-16` / `20` / `24` / `30` | 64 / 80 / 96 / 120 | Section padding by viewport; hero/finale |

Token names are rem multiples of 4px (`--space-30` = 120px).

Rules: token values only (no 10/15/18px). Related items ≤ 16px apart, unrelated groups ≥ 32px (ratio ≥ 2×). Padding inside a component ≤ gap between components. Adjacent same-background sections share one `--section-y`. Heading → body 16px (H3/H4) to 24px (H1/H2); body → CTA group 32px.

### Radius

| Token | px | Use |
|---|---|---|
| `--radius-sm` | 4 | Tags, checkbox, category badge |
| `--radius-md` | 8 | Buttons, inputs, nav items |
| `--radius-lg` | 12 | Cards, panels, menus |
| `--radius-xl` | 20 | Hero panels, modals |
| `--radius-pill` | 999 | Status pills, track badges, toggles |

Tighter than consumer SaaS: nothing above 20px except pills. Nested radius = outer − padding (min 4px). Images in cards share the card's top radius; full-bleed images are square. Prefer ruled sections to floating cards; never nest cards more than two levels (one is the norm).

### Shadow

| Token | Use |
|---|---|
| `--shadow-none` | Default; bordered cards |
| `--shadow-subtle` | Sticky nav on scroll |
| `--shadow-card` | Elevated card at rest |
| `--shadow-elevated` | Card hover, dropdowns |
| `--shadow-modal` | Modals, drawers |

Shadows are tinted Deep Violet (`26 8 48`), never pure black. A bordered surface normally has no shadow at rest. On dark, use `--nic-violet-line` borders and `--nic-violet-raised` for elevation; glow tokens (`--glow-primary`, `--glow-cyan-soft`) only for active/primary emphasis, one at a time. Hover raises at most one step.

---

## 5. Grid and layout

Tokens: `tokens/breakpoints.css`, `tokens/spacing.css`. Mobile-first, content-led, with engineering-drawing discipline: strong left edges, generous white space, varied column spans rather than repeated equal-card rows (the track grid is the deliberate exception).

| Name | Min width | Target |
|---|---|---|
| base | 0 | Phones |
| `sm` | 480 | Large phones |
| `md` | 768 | Tablet portrait |
| `lg` | 1024 | Laptop / desktop |
| `xl` | 1280 | Desktop |
| `2xl` | 1536 | Large desktop |

Test at 360, 390, 768, 1024, 1280, 1440, 1920.

| Container | Max | Use |
|---|---|---|
| `--container-narrow` | 720 | Prose, forms, FAQ |
| `--container-default` | 1200 | Standard content |
| `--container-wide` | 1360 | Hero, dense grids |
| `--container-max` | 1520 | Hard cap |

| Viewport | Columns | Gutter / margin |
|---|---|---|
| < 768 | 4 | 16 / 16 |
| 768–1023 | 8 | 24 / 24 |
| ≥ 1024 | 12 | 32 / 32+ |

Common spans (12-col): text + visual 5/7 or 6/6 (alternate sides); three tracks 4/4/4 (2 columns at tablet with the last card spanning; stacked on mobile); prose + margin note 8+4; problem cards 4 → 3 → 2 → 1 columns; form 6 centred or narrow container.

Behaviour: **mobile** single column, 44px targets, carousels only with snap and a 16px edge peek. **Tablet** 2-column pairings, hamburger until `lg`. **Desktop** sticky nav, asymmetric compositions allowed. **Large** container stops at `--container-max`; backgrounds stay full-bleed.

Section spacing: `--section-y` 64 → 80 → 96 → 120. Two adjacent sections share one separation (a background change or a rule, not both).

Full-bleed: backgrounds always full-bleed with content in a container. Imagery may bleed to one edge. Defined bottom edge (straight cut, or a 1px line with nodes; no wavy dividers). Never more than two consecutive dark sections.

Alignment: left edge is the primary axis; gaps are multiples of `--space-4`. Z-order: background → technical grid → glow → decorative lines → content → sticky UI.

---

## 6. Backgrounds

CSS-only recipes in `styles/backgrounds.css`; they work without any image file.

| Class | Recipe | Use |
|---|---|---|
| `.bg-light-technical` | Paper + 48px grid @ 4.5% Graphite | Section intros, tracks |
| `.bg-dark-technical` | Deep Violet + 48px grid @ 6% White | Dark content, how it works, stats |
| `.bg-spectrum` (`--grid`) | Violet → Indigo + Blue glow top-right + Cyan glow bottom-left | Hero, closing CTA. Max once per page plus the closing CTA |
| `.bg-clean` / `--white` | Flat Paper / White | Forms, FAQ, tables, long reading |

Rhythm: Spectrum (hero) → Clean → Light Technical → Dark Technical → Clean → Spectrum (CTA). Never two Spectrums adjacent.

Rules: reading surfaces are Clean. Fade grids with `.bg-grid-fade` or a mask on a `::before` layer. One glow hue family (Lime glow only ≤ 20% opacity in finale contexts). No imagery under text without `--scrim-dark`, checked at the worst point. Only Spectrum glows may drift; grids are static. No blur filters on full-bleed elements. `prefers-reduced-motion` and `forced-colors` fall back to flat Violet/Paper.

---

## 7. Engineering visual language

Five motifs give NIC its "young engineers building real things" character. **All must stay subtle**: if the motif is noticed before the content, it is too loud. Budget per viewport: at most 3 of 5, and one hero-scale motif.

| Motif | Look | Use | Don't |
|---|---|---|---|
| **Engineering grid** | 48px pitch, 1px; Graphite 4.5% light / White 6% dark; faded edges. Variants: dot grid, a few "+" registration marks | Behind heroes, sections, diagrams | Coloured or > 8% grids, perspective or animated grids |
| **Technical lines** | 1–1.5px, 45°/90°, chamfered corners; dimension lines with 8px ticks and a mono label | Connect steps, 16px corner brackets on images, dividers ending in nodes | Swooshes, lines crossing text, > 1 cluster per section |
| **Spectrum curves** | Bezier ribbons or soft glows in Blue → Cyan (Lime ≤ 10% of length); crisp or blurred, never mixed | Hero edge bleed, transitions | Rainbow stops, > 3-hue meshes, curves behind small text |
| **Technical nodes** | 6–8px circles (12px ring for emphasis), joined by technical lines; one Lime node may mark "you are here" | Timelines, process diagrams | Dense neural-net clusters, particle fields |
| **Blueprint elements** | Mono 12px uppercase Slate labels, 1px frames, metadata strips like `NIC / 2026 / TRACK-02 / REV A` | Eyebrows, captions, problem IDs (`PS-C07`) | Blue-paper fills, cross-hatching. Metadata must be real; one cluster per viewport |

Recipes: **dark hero** = Spectrum + faded dark grid + one cropped curve + corner brackets + one label strip. **Light section intro** = faded grid + eyebrow + short line ending in a node. **Timeline** = line spine + nodes + labels. **Track card** = corner brackets (track colour 40%) + icon + mono ID. **Finale** = Spectrum + Gold only for the award object + ≤ 12 thin radiating lines.

Anti-patterns: CRT/scanlines, glitch, matrix rain, hex-grid, rotating gears, lightbulb or brain clip-art, handshake stock photos, neon outlines, wireframe globes.

---

## 8. Components

Specs, not pages. Values come from `tokens/components.css`; add a token before using a new value.

Universal: 44×44px minimum target, visible `:focus-visible` ring (`--ring-focus`; `--color-focus-ring-inverse` on dark), transitions use `--transition-standard` (never `transition: all`), hover is an enhancement only, never colour alone.

### Buttons

Sizes sm 36 · **md 44** · lg 52. Radius `--radius-md`, 1.5px border (transparent on filled to hold size), icon 20px with 8px gap.

| Variant | Default | Hover | Active | Use |
|---|---|---|---|---|
| Primary | Blue bg, White text | `--nic-blue-hover`, lift −2px, arrow +4px | `--nic-blue-active`, scale .98 | One main action per view |
| Secondary | Transparent, 1.5px Blue border/text | `--nic-blue-tint` bg | `#E0E3FF` | Next to primary |
| Ghost | Transparent, Graphite | 6% Graphite | 12% | Tertiary |
| Dark | Violet bg, White | Indigo | `#25225F` | Primary on light hero where blue clashes |
| Accent | Lime bg, **Graphite** text | `#B4EC58` | `#8FD21F` | Campaign only, ≤ 1 per viewport |
| Destructive | `--nic-error-strong`, White | `#B91C1C` | `#991B1B` | Withdraw/delete, always confirm |

On dark: Primary gains `--glow-primary` on hover; Secondary becomes White border/text; Ghost text White.

States: **disabled** uses `--btn-disabled-*`, no lift, `aria-disabled`, reason nearby. **Loading** keeps label width, 16px arc spinner (800ms linear, the only permitted rotation), `aria-busy="true"`. Active uses `--scale-press`, 120ms.

Don't: two primaries per view, gradient fills, pill buttons (pills are for badges), unnamed icon-only buttons.

### Cards

Base: radius `--radius-lg`, padding `--card-pad` (24 → 32), 1px `--color-border`, White, no shadow.

| Variant | Spec |
|---|---|
| Standard | Hover: border → strong (static) or −2px + `--shadow-card` (clickable) |
| Elevated | No border, `--shadow-card`; ≤ 3 per viewport |
| Dark | `--nic-violet-raised` bg, `--nic-violet-line` border, mist body |
| Track | Standard + 4px top bar in `--track-color`, icon + label. Selected: 2px outline + check + "Selected" |
| Problem | Mono ID (`PS-A01`) + track badge, H4, 2–3 lines, category badge + arrow link |
| Feature | Open layout: 32px icon in 48px tinted square, H4, body |
| Status | Badge top-right, optional 4px left bar in `--status-color` |

Don't nest cards, use more than one accent (track *or* status), or put gradients behind card text.

### Badges

24px high, padding-x 12px, Label role, 8px dot or 14px icon, 6px gap.

| Variant | Light | Dark |
|---|---|---|
| Track (pill) | `--track-tint` bg, `--track-ink` text, icon + name | White 8% bg, raw colour, 1px border at 40% |
| Status (pill) | `--status-tint`, `--status-ink`, dot/icon + label | as above |
| Category (`--radius-sm`) | Transparent, 1px border, Slate, no icon | White 20% border, mist text |
| Achievement (pill) | Gold fill, Graphite, trophy/star; awards only | Same, flat (no glow) |

Non-interactive by default. A filter chip adds `button` role, 44px hit area, and a selected state with check + 2px outline.

### Inputs

48px high, padding-x 16px, `--radius-md`, White, 16px text (prevents iOS zoom). Label above (Body Small, 600), help below (Caption, Slate), 8px gaps.

| State | Border | Other |
|---|---|---|
| Default | 1.5px `--color-border-strong` | Placeholder is a hint, never a label |
| Hover | 1.5px Slate | |
| Focus | 1.5px Electric Blue | 3px ring `rgb(79 70 229 / .25)`, label turns Blue |
| Error | 1.5px `--nic-error-ink` | Icon + message with `aria-invalid`, `aria-describedby` |
| Disabled | `--color-disabled-border` | `--color-disabled-bg/text`, `not-allowed` |
| Success | unchanged | Check icon + "Verified" text, never green border alone |

Checkbox/radio/toggle: 20px; checked = Blue fill + white check; label clickable; group errors at group level.

### Navigation

| Aspect | Spec |
|---|---|
| Height | 72px desktop, 60px mobile |
| Light | `--nav-light-bg` (Paper 88% + 12px blur), 1px bottom border; Graphite links, Blue hover |
| Dark | `--nav-dark-bg` (Violet 82% + blur), `--nic-violet-line` border; mist links, White hover |
| Active | 2px bar 8px below text (Blue light, Cyan dark) + `aria-current="page"` + weight 600 |
| Desktop | Logo left, ≤ 6 links, primary CTA (md) right; dropdowns `--radius-lg`, `--shadow-elevated`, fade + 4px slide |
| Mobile | 44px hamburger → right drawer `min(88vw, 360px)`, 56px rows, pinned CTA, scrim `rgb(26 8 48 / .6)`, focus trap, Esc closes |
| Scroll | Transparent over hero; filled with `--shadow-subtle` after 8px. Never hides on scroll-down |

---

## 9. Motion

Precise, energetic, technical: a plotter drawing a line, not a ball bouncing. Tokens: `tokens/motion.css`.

- Ease-out, 4–8px travel, line-draw and slow gradient drift. No bounce, no parallax stacks, no confetti, no looping decoration.
- Implemented: scroll reveal (`useReveal` / `.reveal`, IntersectionObserver), hero entrance (`hero-in`), `.btn:active` press, GradientWaves WebGL hero canvas.
- Everything collapses under `prefers-reduced-motion` (tokens shorten durations and distances; line-draws render complete; WebGL falls back to static).
- Only Spectrum glows may drift ambiently. Grids are static.
- To add an animation: reuse existing duration/ease tokens first; keep it to opacity/transform; give it a reduced-motion version.

---

## 10. Imagery and icons

**Imagery:** real-feeling engineering, shot or rendered with intent: prototypes on benches, boards, structural models, test rigs. Cinematic but credible: dark, controlled light, one coloured edge-light (blue by default, track colour on track pages).

- Do: hands, tools, in-progress hardware, diverse students at work; leave text-safe space; `--scrim-dark` under text.
- Don't: stock handshakes, floating holograms, glowing brains, lightbulbs, rocket clichés, identifiable people without consent, **text baked into images**.
- Current art: `public/images/` (hero plate, track and support images). All other planned assets are not generated.

**Illustration and diagrams:** 1.5px strokes, 45° chamfers, dimension lines, node dots. Palette colours only, at most one gradient focal shape. No mascots, cartoon characters or isometric blobs. Diagrams carry real information and have text alternatives.

**Icons:** outline, 24px grid, 1.5px stroke, `currentColor`, ≤ 1px radius or 45° chamfer, optional single node dot. Track icons form one family. Implemented in `src/components/ui/Icon.tsx`. Never hand-draw a one-off icon in a different style.

---

## 11. Accessibility

Target **WCAG 2.2 AA**.

**Contrast minimums:** body 4.5:1; large text (≥ 24px, or ≥ 19px bold) 3:1; UI components, input borders, focus rings, meaningful icons 3:1; decorative none.

Verified safe pairs: Graphite/Paper 17.3 · Slate/Paper 4.66 · Slate/White 4.88 · White/Blue 6.29 · Blue/Paper 6.01 · White/Indigo 11.42 · White/Violet 18.73 · mist/Violet 11.3 · slate-on-dark/Violet 8.6 · Cyan-bright/Violet 10.4 · Lime/Violet 12.42 · Graphite on Lime 11.97, Cyan 7.43, Orange 6.44, Gold 11.79.

**Never use:** Cyan, Lime, Orange, Gold, Civil green or Warning amber as text on Paper/White; White text on Cyan, Orange, Lime, Gold; Electric Blue text on Deep Violet (2.98) or Indigo (1.82); Slate on Deep Violet (3.84); `--nic-border` as an input's only boundary (1.31).

| Area | Rules |
|---|---|
| Text | 16px base, `rem`, survives 200% zoom and 320px reflow with no horizontal scroll; line height ≥ 1.5; no fixed-height text boxes; essential text never in images; `lang` on `<html>` |
| Controls | Native `<button>`/`<a>` (links navigate, buttons act); 44×44 targets; accessible name on every control; `aria-busy` on loading; no hover-only content |
| Focus | Visible `:focus-visible`: 2px `--color-focus-ring` (Blue light / Cyan dark) with 2px page-colour offset, ≥ 3:1; focus order = visual order; no `tabindex > 0`; skip link first; modals trap and restore focus, Esc closes; `scroll-padding-top: var(--nav-height)` |
| Status | Colour + text label + distinct icon always; a grayscale screenshot must still separate statuses; pills use ink on tint (4.5–6.7); `role="status"` for live changes, `role="alert"` for errors only; countdowns have a static text alternative and don't update `aria-live` every second |
| Tracks | Identity = icon + name + colour; selected = outline + check + text; charts in track colours also need patterns or direct labels; re-check with deuteranopia/protanopia simulation for new visuals |
| Dark surfaces | Text White/mist/slate-on-dark; links Cyan-bright, underlined; focus ring Cyan; control edges `--nic-violet-line-strong` (24% white); over imagery always `--scrim-dark`; `forced-colors` uses system colours with a `border: 1px solid CanvasText` fallback |
| Gradients | Decorative; text checked at the worst point; gradient text ≥ 48px on Violet only; never encode information in gradient hue or position |
| Motion | Honour `prefers-reduced-motion`; no flashing > 3/s; no autoplay audio; auto-moving content > 5s needs pause |
| Content | Meaningful `alt`, decorative `alt=""`, diagrams get descriptions; forms have visible labels, errors in text linked by `aria-describedby`, no clearing on error, `autocomplete`; real `<th scope>`; timelines are `<ol>` |

**Checklist before shipping any component:**
1. Keyboard-only walkthrough works, focus visible.
2. Screen-reader name, role, state correct.
3. Contrast verified for every state.
4. Works at 200% zoom and 320px width.
5. Meaning survives in grayscale.
6. Reduced-motion version reviewed.
7. Touch targets ≥ 44px.

---

## 12. Extending

1. **New colour:** only if no existing colour can do the job. Add the primitive, derive `-ink` and `-tint`, compute contrast, add a semantic role, document it in §2.
2. **New component:** compose from existing tokens first. Add a spec in §8 (anatomy, variants, states, a11y) and tokens in `tokens/components.css`.
3. **New animation:** see §9.
4. **Never** hard-code hex, px spacing or durations in application code.
5. Bump the version below and note the change.

Version: **V1.0**

---

## 13. Cinematic plan (future, not built)

A planning idea; nothing here exists. The site stays real HTML/CSS over stills and short clips, scroll-linked but never scroll-jacked, and every act must work as a static image plus text.

Story arc: **See the problem → think differently → design → build → test → present → build what's next.** Eight acts: Enter, The Challenge, Three Engineering Worlds (Automobile → EEE → Civil), The Problem, Build, Test, Present, Build What's Next.

Decisions needed from an owner before implementing anything cinematic:

| # | Today | Cinematic need | Recommendation |
|---|---|---|---|
| D1 | No scroll-jacking | Pinned sections | Allow short pins (≤ 1.5 viewport, native scroll) for the tracks act only |
| D2 | One parallax layer max | Depth planes in hero stills | Keep one layer; revisit with a prototype |
| D3 | No competing autoplay video | Several short clips | One muted in-view clip at a time, always with a poster |

Proposed video budget: ≤ 2.5 MB per clip, 1080p, H.264 + WebM, 6–8s loop, muted, `playsinline`; posters only under reduced motion; no hero video on mobile.

Blocked on organiser input: evaluation-criteria diagram, trophy design, sponsor/institution marks, official photography. No placeholder trophy or logo may be invented.

---

## 14. Open inputs from organisers

1. Official logo and usage rules (replaces the §1 placeholder).
2. Official name, tagline and boilerplate.
3. Evaluation weights.
4. Trophy / award design direction.
5. Photography consent policy.
