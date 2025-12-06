# CLAUDE.md

Video ad network monorepo - ad delivery server, admin UI, client SDK, shared DB layer.

## Structure

- `apps/ad-server` - Hono on Cloudflare Workers (VAST/tracking endpoints)
- `apps/ui` - React Router v7 admin dashboard (Clerk auth)
- `packages/ad-sdk` - Browser SDK for VAST ad playback
- `packages/db` - Prisma schema + Kysely query builder (Turso/SQLite)

## Commands

```bash
pnpm dev                        # Start all apps
pnpm build                      # Build all
pnpm lint                       # Biome linter
pnpm format                     # Prettier check
pnpm test                       # Run tests

# Database
pnpm -C packages/db exec prisma migrate reset   # Reset with seed
pnpm -C packages/db exec prisma migrate dev     # New migration
pnpm -C packages/db exec prisma generate        # Regenerate types
```

## Tech Stack

pnpm workspaces, Turborepo, Biome, Prettier, Cloudflare Workers, Turso (prod) / SQLite (dev), Clerk auth
