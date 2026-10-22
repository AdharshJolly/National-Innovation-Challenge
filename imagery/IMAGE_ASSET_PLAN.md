# Image Asset Plan

**Status: PLAN ONLY. Nothing in this file has been generated.** This is the backlog of photographic/rendered imagery needed by the future website. Generation happens in a separate phase (Design System → **Asset Generation** → Website). Technical illustrations, diagrams, icons, textures, badges and print assets are catalogued in `assets/ASSET_GENERATION_BACKLOG.md`; this plan covers the *imagery* (hero, track, supporting) in depth.

## 0. Global imagery direction

- **Subject:** young engineers (Class 11–12 age, 16–18) building real things; real hardware, real tools, real work in progress. Not stock-office teams, not CGI robots, not lightbulbs.
- **Mood:** focused, curious, ambitious, hands-on. Premium and cinematic, but credible.
- **Style:** photoreal or high-fidelity 3D render with a documentary feel. Shallow depth of field, real materials (aluminium, PCB green, concrete, wiring).
- **People:** diverse Indian students, school/college-age, in realistic workshop attire (lab coats, safety glasses, casual). No faces required in assets for props; where people appear, they are not posed-at-camera. No logos, no readable brand text, no real institution marks.
- **Color treatment (all imagery):** graded toward the palette — shadows pulled toward Deep Violet (#1A0830), highlights allowed Cyan/Electric Blue rim light. Track imagery takes a *subtle* (≤ 15%) cast of the track color in practical lights. Avoid neon saturation; skin tones stay natural.
- **Lighting:** one strong directional key + cool rim; practical lights visible (monitors, LEDs, work lamps).
- **Safety/accuracy:** equipment shown correctly (PPE, no unsafe practice). No identifiable real products or trademarked vehicle designs.
- **Text-safe:** every hero/banner composition leaves a defined negative-space zone for overlay text (stated per asset).
- **Delivery:** master at 2× the largest display size; export WebP + AVIF + JPEG fallback; `sRGB`; ≤ 250KB per hero at final size; art-directed crops for mobile.
- **Variants:** Dark-surface-first (most imagery sits on Deep Violet). "Light variant" = same subject, softer, brighter exposure for Paper sections, only where noted.

Ratio shorthand: **DT** = desktop, **MB** = mobile.

---

## A. Hero assets

### IMG-H01 — Futuristic engineering laboratory
- **Purpose:** Main homepage hero backdrop: establish "serious, modern, national-scale engineering".
- **Visual style:** Photoreal wide interior; clean modern lab/makerspace with workbenches, rigs, monitors, a half-built vehicle chassis, whiteboard schematics.
- **Aspect ratio:** 16:9 (DT, 2880×1620 master); 4:5 MB crop (1440×1800).
- **Composition:** Deep space; subject mass at right 55%; left 45% calm dark negative space for Display headline. Eye-level, slight low angle.
- **Lighting:** Low-key; cool blue/cyan monitor and strip lighting; one warm work-lamp accent; volumetric haze minimal.
- **Color treatment:** Shadows to Deep Violet; cyan rim; vignette to #1A0830 at left edge for text legibility.
- **Transparency:** Opaque.
- **Location:** Home hero (background, `.bg-spectrum` overlay at 60%).

### IMG-H02 — Student-built hardware prototype
- **Purpose:** Convey "students build real hardware" — the core promise.
- **Visual style:** Photoreal macro-to-medium; student hands soldering/assembling a prototype (microcontroller board, sensor, motor, 3D-printed housing).
- **Aspect ratio:** 3:2 (3000×2000); 1:1 crop for social.
- **Composition:** Tight hands + object, shallow DOF, object right-of-center third, hands not posed; leave top 30% soft for overlay chip.
- **Lighting:** Bench lamp key (neutral-cool), cyan rim from monitor, background bokeh in violet.
- **Color treatment:** Violet shadows, accent LEDs in Cyan/Lime (small).
- **Transparency:** Opaque.
- **Location:** Home "what you'll build" section; About; social cards.

### IMG-H03 — Automotive engineering prototype
- **Purpose:** Hero for the Automobile track and cross-track "mobility" storytelling.
- **Visual style:** Photoreal/high-end render of a student-scale EV go-kart or formula-style prototype in a workshop, partially assembled.
- **Aspect ratio:** 16:9 (2880×1620).
- **Composition:** 3/4 front view, vehicle lower-right, large clean floor/wall at left for text; wheel and exposed chassis detail visible.
- **Lighting:** Strong side key with rose (#F43F5E) accent practical (≤ 15%) from a rim strip; deep violet environment.
- **Color treatment:** Automobile rose accent subtle; metals neutral cool.
- **Transparency:** Opaque.
- **Location:** Automobile track page hero; track selector card (cropped 4:3).

### IMG-H04 — Electronics / circuit systems
- **Purpose:** Hero for EEE track; "intelligence in hardware".
- **Visual style:** Macro photoreal of a PCB with traces, ICs, and a glowing LED path; robotics controller in the background.
- **Aspect ratio:** 16:9 (2880×1620).
- **Composition:** Diagonal trace flowing from bottom-left to top-right (reinforces spectrum curve); sharp focus plane in thirds; right 40% darker for text.
- **Lighting:** Low-key; cyan edge light; tiny Lime LED highlight (single).
- **Color treatment:** PCB graded toward violet/teal, not stock-green; cyan accent.
- **Transparency:** Opaque.
- **Location:** EEE track hero; electronics section header.

### IMG-H05 — Civil engineering infrastructure
- **Purpose:** Hero for Civil track; "build the nation".
- **Visual style:** Photoreal dusk scene of a modern bridge/metro viaduct under construction with cranes, plus a student-scale structural model in foreground.
- **Aspect ratio:** 16:9 (2880×1620).
- **Composition:** Strong leading lines of a span from bottom-left; model in foreground blur; sky area top-left calm for text.
- **Lighting:** Blue-hour, violet-pink gradient sky; warm site lights, a green (#22C55E) site-light accent (subtle).
- **Color treatment:** Sky toward Deep Violet→Indigo; concrete cool neutral; green accent ≤ 10%.
- **Transparency:** Opaque.
- **Location:** Civil track page hero; home track-selector.

### IMG-H06 — Grand Finale / exhibition atmosphere
- **Purpose:** Anticipation of the national finale.
- **Visual style:** Cinematic exhibition hall with teams at project stands, spotlights, subtle crowd blur; large scoreboard-free stage.
- **Aspect ratio:** 21:9 (3360×1440) + 16:9 crop.
- **Composition:** Central stage vanishing point, projects lit in cones; gold-tinted award plinth small in mid-ground (gold used only here).
- **Lighting:** Theatrical; blue/cyan truss lighting; gold accent only on plinth.
- **Color treatment:** Spectrum glow; no lime dominance.
- **Transparency:** Opaque.
- **Location:** Grand Finale page hero; closing CTA band.

---

## B. Track assets

### Automobile
**IMG-TA01 — EV systems:** Battery pack + motor controller on a bench, wiring harness, multimeter. *Purpose:* EV track subtopic card. *Style:* photoreal product-style. *Ratio:* 4:3 (1600×1200). *Composition:* flat-lay 3/4 view, object centered, 15% padding, clean surface. *Lighting:* softbox + rose rim. *Color:* neutral metals, rose accent ≤ 10%. *Transparency:* opaque + a **cutout PNG variant** (transparent) for layered use. *Location:* Automobile track page "focus areas".
**IMG-TA02 — Automotive prototype detail:** Close-up of suspension/wheel assembly of a student vehicle. *Style:* macro photoreal. *Ratio:* 3:2. *Composition:* wheel at left-third, bokeh workshop. *Lighting:* hard side light. *Color:* violet shadows, rose rim. *Transparency:* opaque. *Location:* Automobile track card background; problem-statement headers.
**IMG-TA03 — Mechanical systems:** Gears, shafts, bearings arranged as an exploded view. *Style:* high-fidelity 3D render, matte aluminium. *Ratio:* 1:1 (2000×2000). *Composition:* exploded axis diagonal, shadow plane. *Lighting:* studio softbox, cool rim. *Color:* neutral + rose edge light. *Transparency:* transparent PNG/WebP (object only) + opaque dark variant. *Location:* Automobile section illustration; feature cards.

### EEE
**IMG-TE01 — Circuit boards:** Macro PCB, traces and solder points. *Purpose:* EEE track card. *Style:* photoreal macro. *Ratio:* 4:3. *Composition:* diagonal trace, shallow DOF. *Lighting:* cyan rim, dark. *Color:* violet/teal grade. *Transparency:* opaque. *Location:* EEE track page, card bg.
**IMG-TE02 — Embedded systems:** Microcontroller dev board with sensors on a breadboard, small display showing abstract data. *Style:* photoreal/high-fidelity render. *Ratio:* 3:2. *Composition:* board mid-frame, jumper wires leading lines. *Lighting:* cool key, LED glow. *Color:* cyan/lime LED accents (small). *Transparency:* opaque + transparent cutout. *Location:* EEE focus areas; hero supporting.
**IMG-TE03 — Electronics components:** Resistors, capacitors, ICs arranged in a neat knolling flat-lay. *Style:* photoreal top-down. *Ratio:* 16:9 and 1:1. *Composition:* grid-aligned knolling, 10% margins. *Lighting:* even softbox. *Color:* neutral on Paper (light variant) and on Deep Violet (dark variant). *Transparency:* opaque (both variants). *Location:* section dividers, backgrounds for EEE content.
**IMG-TE04 — Robotics:** Student-built mobile robot or robotic arm in workshop. *Style:* photoreal. *Ratio:* 16:9. *Composition:* robot right-of-center, student blurred in background. *Lighting:* cyan accent. *Color:* cyan ≤ 15%. *Transparency:* opaque. *Location:* EEE track hero alt; home gallery.

### Civil
**IMG-TC01 — Infrastructure:** Bridge/flyover structural detail with steel truss. *Style:* photoreal. *Ratio:* 4:3. *Composition:* strong diagonal truss lines. *Lighting:* golden-to-blue hour. *Color:* cool grade, green ≤ 10%. *Transparency:* opaque. *Location:* Civil track page; card.
**IMG-TC02 — Sustainable construction:** Student-scale model of a green-roof / timber-hybrid building with solar panels. *Style:* photoreal tabletop. *Ratio:* 3:2. *Composition:* model low angle, lawn-like greens. *Lighting:* daylight softbox. *Color:* natural greens (track green accent). *Transparency:* opaque + cutout. *Location:* Civil focus areas.
**IMG-TC03 — Smart cities:** Aerial/isometric-feeling cityscape with data-line overlays (subtle). *Style:* high-fidelity 3D render. *Ratio:* 16:9. *Composition:* city grid fading to Deep Violet at edges; overlay nodes+lines (cyan/white). *Lighting:* night, window glow. *Color:* violet base, cyan nodes, green accent small. *Transparency:* opaque. *Location:* Civil track hero alt; problem-statement banners.
**IMG-TC04 — Environmental engineering:** Water treatment / drainage / watershed model with flowing water. *Style:* photoreal. *Ratio:* 3:2. *Composition:* water path as leading line. *Lighting:* soft overcast + cool rim. *Color:* blue-green grade. *Transparency:* opaque. *Location:* Civil focus areas; problem-statement headers.

---

## C. Supporting assets

All: photoreal studio style, **transparent PNG/WebP cutouts** (plus an optional opaque dark-bg variant), consistent soft top-left key light, cool rim, grounded soft shadow baked in a separate layer. Color: neutral object, violet-leaning shadows. Ratio 1:1 (2000×2000) unless noted. Intended use: layered over backgrounds, section accents, card art; never as clip-art.

| ID | Subject | Purpose | Composition | Location |
|---|---|---|---|---|
| IMG-S01 | Engineering tools (calipers, steel rule, torque wrench) | Craft credibility | 3/4 angle, arranged diagonally | About, "what we value" section |
| IMG-S02 | Components (capacitors, resistors, connectors) pile | Texture/ornament | Floating cluster, 5–7 objects | EEE section edges |
| IMG-S03 | Sensors (ultrasonic, IR, IMU, load cell) | Show real hardware | Group of 3 hero-lit | Problem statement cards |
| IMG-S04 | Microcontrollers (dev boards, no brand marks) | Show real hardware | Single board, angled | EEE card art, resources |
| IMG-S05 | Prototype parts (3D-printed brackets, gears, aluminium extrusions) | Show making | Exploded cluster | Automobile & Civil model sections |
| IMG-S06 | Technical workspace (clean desk with laptop, sketchbook, scale model) — **opaque**, 16:9 | Atmosphere for "prepare" sections | Top-down 3/4 flat-lay, left negative space | Resources, FAQ header |
| IMG-S07 | Safety/PPE set (hard hat, glasses, gloves) | Civil/lab authenticity | Stacked still life | Civil section, venue info |

---

## D. Status & rules

- All 26 image entries are **NOT GENERATED**.
- Priority order for first generation round: H01, H03, H04, H05 (track heroes) → TA01/TE01/TC01 (card art) → S01–S05 cutouts → H02, H06.
- Review checklist per asset: palette adherence, contrast zone for text, no brand/logo, no AI artifacts in hands/text/hardware, accessible alt-text drafted, file size within budget.
- AI-generation note for the next phase: generate hardware imagery from reference-like prompts, then art-direct for violet grade; hands/fine text are risky — prefer crops that hide them, and manually QA every piece.
