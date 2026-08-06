# Twenty Sites

The Twenty Sites landing page. One static HTML file, one stylesheet, one small
script, no build step and no dependencies. Open `index.html` in a browser and
that is the whole thing.

```
index.html                 the page
DESIGN.md                  the design system — colours, type, space, motion
assets/css/site.css        all styling, tokens at the top under :root
assets/js/site.js          masthead state, mobile menu, nav scroll-spy
assets/fonts/              self-hosted woff2 (Newsreader, Schibsted Grotesk)
assets/brand/              mark.svg, favicons, og.png
assets/brand/source/       the original logo PNGs, untouched
```

## Running it locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

A file:// open works too, apart from the `<use>` reference in the SVG sprite.

## Deploying

It is a static site, so anything works. For GitHub Pages: Settings → Pages →
Deploy from a branch → `main` / root.

## Before it goes live

Placeholder content that needs your real details:

- **Selected work** — the six rows in `index.html` under
  `<!-- PLACEHOLDER CONTENT -->` are invented. Replace with real projects, and
  point each `href` at a case study instead of `#contact`.
- **Prices** — `$3,500` / `from $9,000` / `from $16,000`, plus the `$140` hourly
  and `$320` monthly rates in the FAQ.
- **Contact** — `hello@twentysites.com` and `+44 1234 567890` appear in the
  contact section and the footer.
- **Domain** — `twentysites.com` in the canonical link, the Open Graph tags and
  the share image.
- **The ledger** — the four figures in the hero (20 shipped, 6 weeks, 184 kB,
  1 late) should be numbers you can stand behind.
- **The wordmark** — the script "Twenty Sites" logo files are not in this repo,
  so the masthead sets the name in Newsreader next to the `20` mark. Drop the
  script wordmark into `assets/brand/` and swap `.brand__name` for an `<img>` if
  you would rather use it.

## The brand mark

`assets/brand/mark.svg` was traced from `assets/brand/source/wordmark2.png`, so
it is now a 3 kB vector that takes `currentColor` and stays sharp at any size.
It is inlined once as a `<symbol>` at the top of `index.html` and referenced
with `<use href="#mark">` in the masthead, hero and footer.

## Design checks

The page is written against `DESIGN.md` and passes
[impeccable](https://impeccable.style) with zero findings at 1440, 1280, 1024
and 390 px wide:

```sh
npx impeccable detect http://localhost:8000/index.html
```
