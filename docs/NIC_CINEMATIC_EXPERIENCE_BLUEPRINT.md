# NIC Cinematic Experience Blueprint

Status: **PLANNING DOCUMENT.** Nothing here is built. Asset IDs refer to `assets/ASSET_MANIFEST.md`; an ID listed here does **not** mean the asset exists (0 are generated). All on-screen copy is `[PLACEHOLDER]`. No dates, counts or prizes are asserted.

## Principles

1. The site is **real HTML/CSS/UI over cinematic stills and short clips**. It is not one continuous video.
2. Story arc: SEE THE PROBLEM → THINK DIFFERENTLY → DESIGN → BUILD → TEST → PRESENT → BUILD WHAT'S NEXT.
3. Motion is **scroll-linked, not scroll-jacked**: scroll position can drive an effect, but the user always controls the scroll.
4. Every act works as a static image + text. Motion is an enhancement (`prefers-reduced-motion`, slow networks, mobile).
5. Track colours identify disciplines (Automobile `#F43F5E`, EEE `#06B6D4`, Civil `#22C55E`) and never dominate a frame.
6. Visual world: see `assets/generation/briefs/VISUAL_WORLD_BIBLE.md`. HER-01 is the world reference.

## Decisions needed (conflicts with `motion/motion-guidelines.md`)

The cinematic vision pushes against three rules in the approved motion guidelines. These are **not** overridden here; they need an explicit owner decision before implementation.

| # | Guideline today | Cinematic need | Options | Recommendation |
|---|---|---|---|---|
| D1 | No scroll-jacking | Pinned acts (Acts 03, 05) | A: no pinning, plain scroll. B: short pinned sections (≤ 1.5 viewport) with native scroll. | **B**, limited to Act 03 |
| D2 | Parallax on one layer max | HER stills with depth planes | A: one layer only. B: allow two layers (bg slow, fg 0) in heroes | **A** now; revisit with a prototype |
| D3 | No competing autoplay video | 7 Flow clips | A: one video playing at a time, muted, in-view only. B: stills only | **A**, plus poster for all |

Other gaps: no video format/budget in the design system (proposal: ≤ 2.5 MB per clip, 1080p, H.264 + WebM, 6–8 s loop, muted, `playsinline`); no defined scrub-video behaviour (proposal: avoid; use autoplay-in-view); no reduced-motion poster policy (proposal: always poster).

## Act map

| Act | Name | Primary assets (IDs) | Status of assets |
|---|---|---|---|
| 01 | ENTER | HER-01, SPC-01, BGT-01 | HER-01 PROMPT READY; others NOT STARTED |
| 02 | THE CHALLENGE | HER-02, DGM-01 | HER-02 PROMPT READY (REVIEW: POLICY); DGM-01 NOT STARTED |
| 03 | THREE ENGINEERING WORLDS | HER-03, HER-04, HER-05, ILL-01..03, ICN-02, ICN-03 | PROMPT READY |
| 04 | THE PROBLEM | SUP-03, TRK-C3, ICN-06, DGM-04 | NOT STARTED |
| 05 | BUILD | HER-02, TRK-A3, TRK-E2, ILL-04, SUP-05 | mixed |
| 06 | TEST | TRK-E4, DGM-03, SUP-06 | DGM-03 **BLOCKED — ORGANISER INPUT REQUIRED** |
| 07 | PRESENT | HER-06, FIN-05, badges | FIN-05 **BLOCKED — ORGANISER INPUT REQUIRED** |
| 08 | BUILD WHAT'S NEXT | SPC-01, SOC-01, SPC-04 | SOC-01 PROMPT READY (FINAL blocked on logo) |

---

## ACT 01 — ENTER

- **Purpose:** establish premium, serious, youthful engineering in the first viewport.
- **Narrative:** "You are stepping into a place where real things get built."
- **Visual concept:** HER-01 lab, slow push-in; Spectrum ribbon (SPC-01) as a thin line crossing the dark left side.
- **Assets:** HER-01 (+ mobile 4:5), SPC-01, BGT-01 (grid ≤ 6% opacity).
- **Motion concept:** 3–5% push-in (Flow clip or CSS scale on the still), dust motes, ribbon line-draw on load.
- **Scroll behaviour:** native scroll; image translates ≤ 8% slower than content (single parallax layer, D2).
- **Transition → Act 02:** hero darkens to Deep Violet while the headline lifts off.
- **Text overlay area:** left 45% × full height. `[PLACEHOLDER headline]`, primary CTA.
- **Desktop:** full-bleed 16:9, text left. **Mobile fallback:** 4:5 crop/recomposition, text on top 35%, static poster, no video.

## ACT 02 — THE CHALLENGE

- **Purpose:** state the invitation and the promise: build real hardware.
- **Narrative:** "Young engineers, real problems."
- **Visual concept:** HER-02 close-up of hands building; journey line (DGM-01) draws beneath it.
- **Assets:** HER-02, DGM-01.
- **Motion concept:** macro rack-focus clip (4–5 s) or still with slow 3% slide; DGM-01 line-draw.
- **Scroll behaviour:** image reveals via opacity/translate (4–8px travel); journey stages light up one by one as they enter.
- **Transition → Act 03:** hands/board blur out; the PCB's copper reads as lines that become the track selector grid.
- **Text overlay area:** top 30% band over the soft bokeh.
- **Desktop:** 3:2 beside text, or full-bleed with the band. **Mobile fallback:** 4:5 crop on the board; DGM-01 vertical variant.
- **Flag:** `REVIEW: POLICY`, do not publish people imagery until the photography policy is decided.

## ACT 03 — THREE ENGINEERING WORLDS

- **Purpose:** introduce the three tracks as three worlds with one shared language.
- **Narrative:** "Build what moves. Build what senses. Build what lasts."
- **Order:** Automobile → EEE → Civil.
- **Assets:** HER-03 (Automobile), HER-04 (EEE), HER-05 (Civil), ILL-01..03 (line illustrations), ICN-02/03 (track icons and marks).
- **Visual concept:** each world gets a full-bleed still with its illustration overlaid as a thin line drawing and a small track-coloured chip. The track colour appears only as chip, rim light and illustration stroke.
- **Motion concept per world:** HER-03 lateral reveal; HER-04 macro rack-focus along trace; HER-05 crane-up reveal. Illustrations line-draw once.
- **Scroll behaviour:** three stacked sections, each ~100–120vh; optional short pin on the transition (D1-B). Without D1, plain sections with crossfades.
- **Text overlay area:** HER-03 left 40%; HER-04 right 40%; HER-05 top-left sky. (Alternating sides gives rhythm.)
- **Desktop:** full-bleed stills, text alternating. **Mobile fallback:** HER-03/04/05 4:5 recompositions, text on top 35%, tabs/cards replace the pin.

### Transition concept A — Automobile → EEE (concept only, not implemented)

Mechanical component → geometry → lines → circuit traces → PCB.

1. End of HER-03: a wheel hub/disc near the frame edge.
2. The hub resolves to its geometric outline (circles + radial spokes) as a thin line drawing (same stroke language as ILL-01).
3. The lines straighten and reroute orthogonally into trace-like paths.
4. The paths thicken to copper traces and the frame resolves into the HER-04 PCB macro.

Build route: a Flow clip with start frame = HER-03 detail, end frame = HER-04 start; or SVG morph on a dark background. Fallback: 400 ms crossfade.

### Transition concept B — EEE → Civil (concept only, not implemented)

PCB trace → network → geometric grid → blueprint → structure.

1. HER-04 trace endpoints become nodes.
2. Nodes connect into a network graph, then snap to an Engineering Grid.
3. The grid becomes a blueprint (Blueprint Elements motif) with a truss outline.
4. The outline fills into the HER-05 viaduct/model scene.

Build route and fallback as above. Each transition uses at most the motif budget of 3.

## ACT 04 — THE PROBLEM

- **Purpose:** make the problem concrete; problems come first, solutions second.
- **Narrative:** "SEE THE PROBLEM." Real-world issues as engineering briefs.
- **Visual concept:** a grid of problem cards over a Civil/sensing backdrop; hardware cutouts (sensors) as visual anchors.
- **Assets:** SUP-03 (sensors), TRK-C3 (smart cities), ICN-06 (domain micro-icons), DGM-04 (track structure diagram).
- **Motion concept:** cards fade/translate in (4–8px) with 60 ms stagger; DGM-04 line-draw.
- **Scroll behaviour:** native; no pin.
- **Transition → Act 05:** cards collapse toward one selected card, then the workbench appears.
- **Text overlay area:** card bodies (real HTML). `[PLACEHOLDER problem statements]`, no invented problems.
- **Desktop:** 3-col grid. **Mobile fallback:** single column; background image dropped to a static, lower-contrast crop.

## ACT 05 — BUILD

- **Purpose:** show making: thinking → design → build.
- **Narrative:** "THINK DIFFERENTLY. DESIGN. BUILD."
- **Visual concept:** HER-02 returns at larger scale; exploded mechanical (TRK-A3), embedded board (TRK-E2), structural model detail (SUP-05); ILL-04 process diagram.
- **Motion concept:** progressive transformation, sketch (line) → assembly → built (clip or stacked stills crossfading).
- **Scroll behaviour:** step list advances with scroll position (native scroll, section-linked highlighting, not pinned).
- **Transition → Act 06:** a built prototype stills into a test rig.
- **Text overlay area:** side column, step labels in real HTML.
- **Desktop:** two-column, media sticky within section (CSS `position: sticky`, not scroll-jacking). **Mobile fallback:** stacked, media above text.

## ACT 06 — TEST

- **Purpose:** show rigour; ideas are validated.
- **Narrative:** "TEST."
- **Visual concept:** robotics/test rig (TRK-E4), workspace atmosphere (SUP-06); evaluation criteria diagram (DGM-03) once weights exist.
- **Motion concept:** a single measured pulse along a trace or plot line; no flashy effects.
- **Scroll behaviour:** native.
- **Transition → Act 07:** lights dim, one spot rises on a stage.
- **Text overlay area:** `[PLACEHOLDER]` evaluation summary. **Do not state weights.**
- **Desktop:** wide still + diagram. **Mobile fallback:** still + stacked diagram.
- **BLOCKED — ORGANISER INPUT REQUIRED:** DGM-03 (evaluation weights). Render section without the diagram until supplied.

## ACT 07 — PRESENT

- **Purpose:** show the finale: teams presenting to a national audience.
- **Narrative:** "PRESENT."
- **Visual concept:** HER-06 finale hall atmosphere (no real photos exist), badges for finalist/winner; trophy visual only when approved.
- **Motion concept:** wide reveal, slow push-out; spotlights stay subtle.
- **Scroll behaviour:** native; a gentle 3% scale on the still.
- **Transition → Act 08:** the hall lights lift to a dawn violet gradient.
- **Text overlay area:** top-centre or left third, `[PLACEHOLDER]`.
- **Desktop:** ultra-wide 3360×1440 crop. **Mobile fallback:** 16:9 centred crop + caption.
- **BLOCKED — ORGANISER INPUT REQUIRED:** FIN-05 trophy (design TBD), sponsor/institution marks, official/finalist photography. No placeholder trophy or logos may be invented. Synthetic crowd imagery is `REVIEW: POLICY`.

## ACT 08 — BUILD WHAT'S NEXT

- **Purpose:** convert; invite registration and sharing.
- **Narrative:** "Build what's next."
- **Visual concept:** the Spectrum ribbon (SPC-01) returns as a rising curve over a calm dark field; final CTA.
- **Assets:** SPC-01, SPC-04 (campaign ribbon, P2), SOC-01 (link-share card, used in meta, not on page).
- **Motion concept:** ribbon draw, gradient drift (the only ambient motion).
- **Scroll behaviour:** native; end-of-page.
- **Transition:** none; footer.
- **Text overlay area:** centred. `[PLACEHOLDER headline + CTA]`. No dates until supplied.
- **Desktop:** centred composition. **Mobile fallback:** same, stacked.
- **Dependency:** the real NIC logo; footer uses the BRAND_GUIDELINES placeholder until supplied.

---

## Motion budget summary

| Item | Rule |
|---|---|
| Autoplay clips | One at a time, in view, muted, `playsinline` (D3) |
| Parallax | One layer per viewport (D2) |
| Pinning | Only Act 03, if D1-B is approved |
| Reduced motion | Poster only; line-draws render complete |
| Mobile | No hero video by default; static 4:5 posters |
| Motifs | ≤ 3 per viewport |

## Asset-to-act dependency (build order)

HER-01 → HER-03/04/05 → HER-02 → ILL-01..03 → SOC-01 (plate). Everything else follows the next-batch gates in the manifest.
