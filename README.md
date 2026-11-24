# Helena's Specialty Pierogies — Website

A complete informational website built in **Astro**, designed for free-tier static hosting. No database, cart, payment processor or ordering integration is included.

## Quick start

Requires Node.js 20.3+ (Node.js 22 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open the local address printed by Astro (usually http://localhost:4321).

To generate the production site:

```bash
npm run build
```

The static output goes to `dist/`.

## Publish with GitHub + Cloudflare Pages

1. Create a new GitHub repository, e.g. `helenas-specialty-foods`.
2. Upload **the contents of this project folder**, not the ZIP file itself. GitHub web UI: `Add file → Upload files`, or use Git locally.
3. In Cloudflare, create a **Workers & Pages → Pages** project and connect your GitHub repository.
4. Set **Framework preset:** `Astro`, **Build command:** `npm run build`, **Build output directory:** `dist`.
5. Deploy to a temporary `*.pages.dev` URL; thoroughly review on desktop and mobile.
6. When ready, attach the existing domain and update its DNS. Keep Wix running until the new live site, HTTPS, redirects, and any email/domain services have been checked.

**Important:** If the domain registration, nameservers, or mailbox depends on Wix, move/configure those services before cancelling Wix. DNS cutover is not the same thing as transferring domain registration.

## Pages

- `/` — Home
- `/menu/` — searchable/filterable product menu (view-only)
- `/story/` — family story
- `/press/` — publication mentions
- `/visit/` — business location, hours and phone ordering instructions
- `/faq/` — ordering FAQs
- `/404` — custom not-found content

## Updating the menu

Edit `src/data/products.json`. Each item has `id`, `name`, `price`, `category` (`Traditional`, `Seasonal`, or `Meats`) and `unit` (`dozen` or `lb`). Rebuild after changing content. Prices and ordering policies were transcribed from the Wix site as found on **November 24, 2026**. Confirm everything before publishing, especially prices, holiday notice, availability, hours and payment rules.

## Updating business info

- Address, phone, hours: `src/data/site.js`
- Search engine structured data (keep synchronized): `src/layouts/Base.astro`
- Marketing copy: individual files in `src/pages/`
- Colors, styles, mobile breakpoints: `src/styles.css`
- Images: `public/images/` (replace with real Helena's licensed food photography)
- Redirects for old Wix URLs: `public/_redirects` (add additional legacy URLs as needed)

## Photography disclosure

The hero photograph is **AI-generated concept photography**, not a photograph of actual Helena's food. Replace it with business-owned real imagery before launch for authenticity. The specialty-meats art is a CSS illustration, not a product photo. Do not represent illustrative photos as photos of the exact products sold.

## Before launching

- Verify all business details and product prices with the owners.
- Replace illustrative imagery with real product/brand photography.
- Confirm existing Wix URLs and add redirects for any changed URLs.
- Test call links, mobile navigation, search filters, map/directions links, and accessibility.
- Verify pages in search engines and set up Google Search Console.
- Ensure domain ownership, DNS and email won't be interrupted when cancelling Wix.
- Confirm consent to reuse the site's family story and publication mentions.

## Shopify migration later

This site is intentionally **not** a custom checkout foundation. When ready to sell online, build the future site as a Shopify theme/store. Reuse the branding, copy, optimized images and the structured catalog. Astro components will **not** transfer directly to Liquid templates. `products.json` can be mapped to a Shopify import CSV and matching handles can help retain URLs.

## Notes

Google Fonts are requested from an external CDN, with local serif/sans-serif fallbacks. The website itself has no runtime API dependencies.
