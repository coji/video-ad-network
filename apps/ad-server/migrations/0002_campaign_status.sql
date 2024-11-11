-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_campaigns" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "advertiser_id" TEXT NOT NULL,
    "start_at" DATETIME NOT NULL,
    "end_at" DATETIME NOT NULL,
    "budget" DECIMAL NOT NULL DEFAULT 0,
    "budget_type" TEXT NOT NULL,
    "delivery_pace" TEXT NOT NULL,
    "spent_budget" DECIMAL NOT NULL DEFAULT 0,
    "remaining_budget" DECIMAL NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "campaigns_advertiser_id_fkey" FOREIGN KEY ("advertiser_id") REFERENCES "advertisers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_campaigns" ("advertiser_id", "budget", "budget_type", "created_at", "delivery_pace", "end_at", "id", "name", "start_at", "updated_at") SELECT "advertiser_id", "budget", "budget_type", "created_at", "delivery_pace", "end_at", "id", "name", "start_at", "updated_at" FROM "campaigns";
DROP TABLE "campaigns";
ALTER TABLE "new_campaigns" RENAME TO "campaigns";
CREATE UNIQUE INDEX "campaigns_name_key" ON "campaigns"("name");
CREATE INDEX "campaigns_advertiser_id_idx" ON "campaigns"("advertiser_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
