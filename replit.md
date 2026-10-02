# Julio’s Corn Chips

A consumer-friendly website for Julio’s Corn Chips, rooted in its Del Rio family story.

## Run & Operate

- `pnpm --filter @workspace/julios-corn-chips run dev` — run the Julio’s site
- `pnpm run typecheck` — typecheck the site
- `pnpm run build` — typecheck and build the site

The dev server needs `PORT` and `BASE_PATH` (the artifact sets `PORT=22776` and `BASE_PATH=/`).

## Stack

- pnpm workspace, Node.js 24, TypeScript 5.9
- Vite + React, styled with the site CSS in `artifacts/julios-corn-chips/src/index.css`

## Where things live

- Site: `artifacts/julios-corn-chips`
- Pages: `src/App.tsx` (home and where-to-buy) and `src/pages/not-found.tsx`
- Photos: `artifacts/julios-corn-chips/public/images`

## User preferences

- Keep yellow as the dominant Julio’s brand color, with red and green as supporting colors.
- The homepage should feel unmistakably Julio’s: use the authentic logo throughout and real family pictures, emphasizing how the family supports one another and honors their parents.
- Preserve the friendly overall design; the user approved it and requested stronger authentic branding, not a replacement direction.
