# Twenty Sites — design system

Everything on the site is drawn from the list below. If a value is not here, it
does not belong on a page. Change it in `assets/css/site.css` under `:root` and
it changes everywhere.

## Colour

The greens are sampled straight off the brand mark, which runs `#1F5643` at the
top to `#114A31` at the foot. Everything else is that hue pushed lighter or
darker so the whole page stays on one axis.

| Token         | Value     | Used for                                        |
| ------------- | --------- | ----------------------------------------------- |
| `--pine-900`  | `#072019` | Footer, the deepest surface                     |
| `--pine-850`  | `#0A2A20` | Hero, work and pricing bands                    |
| `--pine-800`  | `#0E3A2B` | Contact band, solid button hover                |
| `--pine-700`  | `#114A31` | Brand mark in the masthead, primary button      |
| `--pine-600`  | `#1F5643` | Rules and small labels on paper                 |
| `--pine-500`  | `#2C6C55` | Reserved                                        |
| `--pine-400`  | `#4E826D` | Decoration only — fails contrast as text        |
| `--pine-300`  | `#7CAB95` | Micro labels on a pine surface                  |
| `--pine-200`  | `#A9C9B8` | Body text on a pine surface                     |
| `--pine-100`  | `#D3E2D9` | Headings and solid buttons on a pine surface    |
| `--paper`     | `#F0F3EF` | Light surface. Cool, never cream                |
| `--paper-sunk`| `#E3E9E2` | Reserved                                        |
| `--ink`       | `#0C1F18` | Headings and body on paper                      |
| `--ink-soft`  | `#40584C` | Secondary text on paper                         |

Every text pairing in use clears WCAG AA (4.5:1). `--pine-400` is 3.9:1 on
`--pine-900`, so it is only ever a shape or a border, never a word.

## Type

| Family                          | Role                                  |
| ------------------------------- | ------------------------------------- |
| Newsreader (variable, 200–800)  | Headings, lead paragraphs, numerals   |
| Schibsted Grotesk (400–700)     | Body, navigation, labels, buttons     |

Both are self-hosted in `assets/fonts/` as latin-subset woff2 and preloaded. No
third-party font request is made at runtime.

Headings are set roman, never italic. Optical size is pinned with
`font-variation-settings: 'opsz' 40` so display sizes keep their thin strokes.

### Size ramp

| Token       | Value              | Role                          |
| ----------- | ------------------ | ----------------------------- |
| `--fs-micro`| 13px               | Labels, meta, footnotes       |
| `--fs-body` | 17px               | Body                          |
| `--fs-lead` | 21px               | Lead paragraphs, section intro|
| `--fs-3`    | 27px               | h3                            |
| `--fs-2`    | 32 → 38px (fluid)  | h2                            |
| `--fs-1`    | 40 → 54px (fluid)  | h1                            |

Six steps, each at least 1.24× the one below it. Nothing functional is set
below 13px. Line height is 1.65 for body, 1.08–1.36 for headings.

## Space

`--s-1` 6px · `--s-2` 12px · `--s-3` 20px · `--s-4` 32px · `--s-5` 52px ·
`--s-6` 84px · `--s-7` 128px

Small values group related things, large values separate sections. The ramp is
deliberately uneven — a single repeated gap reads as a template.

Measure is capped at `--measure` (62ch) for body copy and 34ch for hero leads.

## Shape and motion

Radii: `--radius` 4px for buttons, `--radius-lg` 10px for panels. Nothing else.

One transition curve, `cubic-bezier(0.22, 0.61, 0.36, 1)`, at 220ms. It
decelerates and never overshoots. Only `transform`, `opacity`, `color`,
`background-color` and `border-color` are animated — never a layout property.
All motion collapses under `prefers-reduced-motion`.

## Things this site deliberately does not do

No gradient text, no coloured glow shadows, no radial background wash, no
decorative grid lines, no eyebrow pills above headings, no auto-scrolling logo
strip, no content that is invisible until you scroll to it.
