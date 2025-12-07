# CLAUDE.md

Video ad network monorepo - ad delivery server, admin UI, client SDK, shared DB layer.

## Structure

- `apps/ad-server` - Hono on Cloudflare Workers (VAST/tracking endpoints)
- `apps/ui` - React Router v7 admin dashboard (better-auth)
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

pnpm workspaces, Turborepo, Biome, Prettier, Cloudflare Workers, Turso (prod) / SQLite (dev), better-auth

## useEffect Policy

useEffect must be used only for synchronizing with the external world — for example: API calls, WebSocket connections, browser APIs, external store subscriptions, or timers. In all other cases, it must not be used.

### Anti-patterns

- Copying props or derived values into local state
- Running logic in response to flag changes
- Handling user actions inside effects instead of event handlers
- Updating derived or validation states within effects
- Performing one-time initialization with an empty dependency array (use useMemo instead)

### Principles

1. Compute during render when a value can be derived from props or state.
2. Handle user actions in event handlers, not in effects.
3. Keep effects only for real side effects that touch external systems.
4. Whenever you write a useEffect, add a short comment explaining what external resource it synchronizes with.
