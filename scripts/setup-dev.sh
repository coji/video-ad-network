#!/bin/bash
set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "Setting up development environment..."

# 1. Create data directory
mkdir -p "$PROJECT_ROOT/data"

# 2. Create apps/ad-server/.dev.vars if not exists
if [ ! -f "$PROJECT_ROOT/apps/ad-server/.dev.vars" ]; then
  echo "Creating apps/ad-server/.dev.vars..."
  cat > "$PROJECT_ROOT/apps/ad-server/.dev.vars" << EOF
TRACKER_ORIGIN=http://localhost:5173
TURSO_DATABASE_URL=http://127.0.0.1:8080
EOF
fi

# 3. Create apps/ui/.dev.vars if not exists
if [ ! -f "$PROJECT_ROOT/apps/ui/.dev.vars" ]; then
  echo "Creating apps/ui/.dev.vars..."
  cat > "$PROJECT_ROOT/apps/ui/.dev.vars" << EOF
TURSO_DATABASE_URL=http://127.0.0.1:8080
BETTER_AUTH_URL=http://localhost:5175
BETTER_AUTH_SECRET=$(openssl rand -base64 32)
EOF
fi

# 4. Apply schema and seed if database doesn't exist
if [ ! -f "$PROJECT_ROOT/data/dev.db" ]; then
  echo "Applying database schema..."
  pnpm db:push

  echo "Running database seed..."
  pnpm -C packages/db exec tsx seed.ts

  echo "Generating Kysely types..."
  pnpm db:generate
fi

echo ""
echo "Development environment setup complete!"
echo ""
echo "To start development:"
echo "  pnpm run dev"
echo ""
echo "This will start the database server and all apps."
