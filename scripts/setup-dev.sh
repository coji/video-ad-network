#!/bin/bash
set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "Setting up development environment..."

# 1. Create data directory
mkdir -p "$PROJECT_ROOT/data"

# 2. Create packages/db/.env if not exists
if [ ! -f "$PROJECT_ROOT/packages/db/.env" ]; then
  echo "Creating packages/db/.env..."
  cat > "$PROJECT_ROOT/packages/db/.env" << EOF
DATABASE_URL=file:$PROJECT_ROOT/data/dev.db
EOF
fi

# 3. Create apps/ad-server/.dev.vars if not exists
if [ ! -f "$PROJECT_ROOT/apps/ad-server/.dev.vars" ]; then
  echo "Creating apps/ad-server/.dev.vars..."
  cat > "$PROJECT_ROOT/apps/ad-server/.dev.vars" << EOF
TRACKER_ORIGIN=http://localhost:5173
TURSO_DATABASE_URL=http://127.0.0.1:8080
TURSO_AUTH_TOKEN=
EOF
fi

# 4. Run prisma generate
echo "Running prisma generate..."
pnpm -C packages/db exec prisma generate

# 5. Run prisma migrate if database doesn't exist
if [ ! -f "$PROJECT_ROOT/data/dev.db" ]; then
  echo "Running prisma migrate deploy..."
  pnpm -C packages/db exec prisma migrate deploy

  echo "Running prisma db seed..."
  pnpm -C packages/db exec prisma db seed
fi

echo ""
echo "Development environment setup complete!"
echo ""
echo "To start development:"
echo "  1. Start the database server in one terminal:"
echo "     turso dev --db-file $PROJECT_ROOT/data/dev.db"
echo ""
echo "  2. Start the dev servers in another terminal:"
echo "     pnpm run dev"
