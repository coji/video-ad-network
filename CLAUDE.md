# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Video ad network system with microservices architecture for video/audio ad delivery. Components:

- **ad-server**: Cloudflare Workers-based ad delivery server (Hono framework)
- **ui**: Admin dashboard (React Router v7 on Cloudflare Workers)
- **ad-sdk**: Client-side SDK for ad playback with VAST parser
- **db**: Shared database layer (Prisma schema + Kysely query builder)

## Common Commands

```bash
# Development
pnpm run dev                    # Start all apps concurrently
pnpm --filter @video-ad-network/ad-server run dev  # ad-server only
pnpm --filter @video-ad-network/ui run dev         # UI only
pnpm --filter @video-ad-network/ad-sdk run dev     # SDK only

# Build
pnpm run build                  # Build all packages

# Lint & Format
pnpm run lint                   # Run Biome linter across all packages
pnpm run format                 # Check formatting (Prettier)

# Test
pnpm run test                   # Run all tests
pnpm --filter @video-ad-network/ad-sdk run test    # SDK tests only

# Database
pnpm -C packages/db exec prisma migrate reset      # Reset local SQLite DB with seed data
pnpm -C packages/db exec prisma migrate dev        # Create new migration
pnpm -C packages/db exec prisma generate           # Regenerate Kysely types

# Deploy
pnpm run deploy                 # Deploy ad-server and UI to Cloudflare
```

## Architecture

### Ad Server (apps/ad-server)

- Hono REST API on Cloudflare Workers
- Endpoints: `/v1/vast` (VAST XML), `/v1/click`, `/v1/impression`, `/v1/progress`
- Uses UID middleware for user tracking
- Connects to Turso (distributed SQLite) in production, local SQLite in dev

### UI (apps/ui)

- React Router v7 with remix-flat-routes convention
- Clerk authentication (organizations with advertiser/media roles)
- Routes structure: `_app+/` (authenticated), `_auth+/` (auth flows), `resources+/` (API routes)
- Tailwind CSS + Radix UI components

### Ad SDK (packages/ad-sdk)

- Browser SDK for VAST ad playback
- Handles video/audio ads with companion banners
- Includes VAST XML parser

### Database (packages/db)

- Prisma schema generates Kysely types via prisma-kysely
- Key entities: Organization, User, Media, AdSlot, Advertiser, Campaign, AdGroup, Ad
- Tracking tables: AdEvent, Click, DailyReport
- Uses Turso (libSQL) in production, SQLite file locally

## Environment Setup

Required environment files:

- `apps/ad-server/.dev.vars` - TRACKER_ORIGIN, TURSO_DATABASE_URL, TURSO_AUTH_TOKEN
- `apps/ui/.dev.vars` - TURSO vars + Clerk keys (VITE_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY)
- `packages/db/.env` - DATABASE_URL, CLERK_SECRET_KEY (for seeding)

## Tech Stack

- **Package Manager**: pnpm with workspaces
- **Monorepo**: Turborepo
- **Linting**: Biome
- **Formatting**: Prettier
- **Runtime**: Cloudflare Workers (Wrangler)
- **Database**: Turso (production), SQLite (development)
- **Auth**: Clerk
