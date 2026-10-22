# Typography System

Tokens: `tokens/typography.css`. Role classes: `styles/typography.css` (`.t-display`, `.t-h1` …).

## 1. Intent

Engineering confidence: bold, tight, geometric headlines; calm, highly legible body; compact technical labels. Nothing decorative.

## 2. Font families

| Role | Family | Why | Fallback stack |
|---|---|---|---|
| Display & headings | **Sora** (700–800 display, 600–700 headings) | Geometric, slightly wide, futuristic without gimmicks; strong numerals for stats | `"Sora", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Body & UI | **Inter** (400/500/600) | Best-in-class screen legibility, wide language/numeral support | `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Technical labels, IDs, data | **JetBrains Mono** (500/600) | Reinforces "engineering drawing / spec sheet"; tabular numerals | `"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace` |

Loading: Google Fonts or self-host, `font-display: swap`. Subset to Latin. Load only the weights used: Sora 600/700/800, Inter 400/500/600, JetBrains Mono 500/600. Use size-adjusted fallbacks to limit layout shift.

Swap policy: if a different family is ever chosen, change only the `--font-*` tokens; sizes/tracking may need re-tuning (Sora is wider than Inter).

## 3. Scale

Fluid sizes use `clamp()`; mobile minimum → desktop maximum.

| Role | Token | Size (min → max) | Weight | Line height | Tracking | Family | Use |
|---|---|---|---|---|---|---|---|
| Display | `--fs-display` | 44 → 88px | 800 | 1.0 | −0.035em | Sora | Hero headline, ≤ 1 per page, ≤ 3 lines |
| H1 | `--fs-h1` | 36 → 64px | 700 | 1.05 | −0.03em | Sora | Page title |
| H2 | `--fs-h2` | 28 → 44px | 700 | 1.12 | −0.025em | Sora | Section title |
| H3 | `--fs-h3` | 22 → 30px | 600 | 1.2 | −0.02em | Sora | Subsection, card hero title |
| H4 | `--fs-h4` | 18 → 22px | 600 | 1.3 | −0.01em | Sora | Card title, small headings |
| Body Large | `--fs-body-lg` | 18 → 20px | 400 | 1.55 | 0 | Inter | Lead paragraph, intro |
| Body | `--fs-body` | 16px | 400 | 1.6 | 0 | Inter | Default text |
| Body Small | `--fs-body-sm` | 14px | 400 | 1.55 | 0 | Inter | Secondary text, table cells, help text |
| Caption | `--fs-caption` | 13px | 400 | 1.45 | 0 | Inter | Image captions, footnotes, timestamps |
| Label | `--fs-label` | 12px | 600 | 1.2 | +0.08em, UPPERCASE | JetBrains Mono | Eyebrows, badges, metadata, IDs |
| Button | `--fs-button` | 15px | 600 | 1 | +0.005em | Inter | Buttons |
| Navigation | `--fs-nav` | 15px | 500 | 1.2 | +0.005em | Inter | Nav links |

Minimum text size on the site: **12px**, and only for uppercase mono labels. Prose never goes below 14px.

## 4. Rules

1. **Headings are tight, bodies are open.** Negative tracking scales with size (never apply Display tracking to H4).
2. **Max measure:** prose `68ch`, narrow `52ch`; headings ≤ `20ch` where possible. Use `text-wrap: balance` on headings, `pretty` on paragraphs.
3. **One Display per page.** H1 and Display are never on the same screen.
4. **Hierarchy by size + weight + color, not decoration.** No underline except links. No italics for emphasis in headings.
5. **Eyebrow pattern:** Label (mono uppercase) above an H1/H2. Colour: Electric Blue on light (6.0:1), Cyan-bright on dark. Optional 24px × 2px line preceding the text ("technical rule").
6. **Numerals:** use tabular figures (`font-variant-numeric: tabular-nums`) for countdowns, tables, stats. Large stats use Sora 800.
7. **Alignment:** left-align text. Center only short (≤ 2 lines) headings in a deliberately symmetric section. Never center body paragraphs.
8. **Text color:** Graphite on light; White on dark for headings, `--nic-mist` for dark body, `--nic-slate-on-dark` for dark secondary.
9. **Links:** Electric Blue on light, Cyan-bright on dark; underlined in running text, underline offset 0.2em.
10. **Gradient text:** see `docs/COLOR_SYSTEM.md §9` — one phrase per page maximum.
11. **Case:** sentence case for headings and buttons. UPPERCASE only for the Label role (≤ 3 words).
12. **Indic scripts:** if Hindi or other Indic content is added later, add Noto Sans Devanagari (etc.) to the fallback chain and raise body line height to 1.7.
