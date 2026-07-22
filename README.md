# Scotland Roadbook 5.0.2 — Expedition Studio + Tripadvisor

A complete no-build PWA for the 4–20 August 2026 route.

## Included

- 360 curated choices across 9 route regions
- Exactly 10 walks, 10 restaurants, 5 hotels, 5 campervan bases and 10 experiences per region
- Image-first detail pages with maps and external actions last
- Horizontal editorial carousels, deep links and browser back-button support
- Saved places, day planning, booking/completion states, notes, compare and conflict checks
- Interactive route map with editorial and topographic layers
- Local Travel Guide tested against 1,080 variable prompts
- Optional OpenAI + Google Places + Tripadvisor Content API + official-page enrichment through the included Cloudflare Worker
- Official website images first, then Google and Tripadvisor traveler photographs where connected
- Google live ratings, selected reviews, opening status and official website discovery
- Tripadvisor live rating artwork, traveler review count, ranking, recent reviews and recent photos
- OpenTable and TheFork booking actions for restaurants
- Official-page metadata and menu/booking link discovery
- Installable PWA and offline core

## Publish the frontend

Upload the contents of this folder to the root of the GitHub repository. Keep the `images` folder intact. GitHub Pages should use `main` and `/(root)`.

Open: `https://anlu91-s.github.io/Scotland/?v=502`

## Enable open AI conversation and live place content

GitHub Pages cannot protect API keys. Deploy the included `worker` folder to Cloudflare Workers, add the required secrets and paste the Worker URL into the roadbook settings. Never commit API keys to GitHub.

Tripadvisor content is requested live and is not stored by the app. The Worker also serves a `robots.txt` rule that blocks crawling of the review endpoint.

See `worker/README.md`.

## Test

```bash
node tests/run-local-assistant-test.mjs
```
