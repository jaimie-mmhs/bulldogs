# MMHS Astro Starter

A lightweight, code-first site for Machias Memorial High School. No PHP, no database, super fast deploys.

## Quick start
```bash
npm i
npm run dev
```
Open http://localhost:4321

## Deploy (Cloudflare Pages)
1. Push this folder to GitHub.
2. In Cloudflare Pages: Create Project → connect repo → Framework: **Astro**.
3. Build command: `npm run build` • Output dir: `dist`.
4. Point `mmhsbulldogs.org` DNS to the Pages project (CNAME/Cloudflare DNS).

## Editing
- Pages live in `src/pages/*` (code) and can be broken into components.
- Drop PDFs/images in `public/assets/*` and link to them.
- Staff is stubbed via `src/stub/staff.json` to start; later swap to a CSV→JSON script or a simple CMS.

## Optional GUI for editors
Add Decap CMS (Git-based) for announcements or staff updates without touching code.

## Theming
Tailwind color tokens are set for Bulldog orange/black (see `tailwind.config.js`).

## Logo
Place your logo at `public/assets/logo.svg` (preferred) or `public/assets/logo.png` and update `src/site.config.ts`:
```ts
export const site = {
  // ...
  logo: '/assets/logo.svg', // or '/assets/logo.png'
};
```
Recommended sizes: SVG, or 512×512 PNG with transparent background.

## Redirects
Add legacy WordPress slugs to `_redirects` so old URLs keep working.