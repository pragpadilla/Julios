# Julio’s Corn Chips

A consumer-friendly website for Julio’s Corn Chips, rooted in its Del Rio family story.

## Run & Operate

- `pnpm --filter @workspace/julios-corn-chips run dev` — run the Julio’s site
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Web: Vite + React
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

- Keep yellow as the dominant Julio’s brand color, with red and green as supporting colors.
- The homepage should feel unmistakably Julio’s: use the authentic logo throughout and real family pictures, emphasizing how the family supports one another and honors their parents.
- Preserve the friendly overall design; the user approved it and requested stronger authentic branding, not a replacement direction.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
