/*
  Warnings:

  - Added the required column `ad_group_id` to the `clicks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `advertiser_id` to the `clicks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campaign_id` to the `clicks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ad_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "event_timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_type" TEXT NOT NULL,
    "media_id" TEXT,
    "ad_slot_id" TEXT,
    "advertiser_id" TEXT,
    "campaign_id" TEXT,
    "ad_group_id" TEXT,
    "ad_id" TEXT,
    "impression_id" TEXT,
    "progress" INTEGER,
    "ip_address" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "uid" TEXT NOT NULL
);
INSERT INTO "new_ad_events" ("ad_id", "ad_slot_id", "event_timestamp", "event_type", "id", "impression_id", "ip_address", "media_id", "progress", "uid", "user_agent") SELECT "ad_id", "ad_slot_id", "event_timestamp", "event_type", "id", "impression_id", "ip_address", "media_id", "progress", "uid", "user_agent" FROM "ad_events";
DROP TABLE "ad_events";
ALTER TABLE "new_ad_events" RENAME TO "ad_events";
CREATE TABLE "new_clicks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ad_slot_id" TEXT NOT NULL,
    "media_id" TEXT NOT NULL,
    "advertiser_id" TEXT NOT NULL,
    "campaign_id" TEXT NOT NULL,
    "ad_group_id" TEXT NOT NULL,
    "ad_id" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "is_companion" BOOLEAN NOT NULL,
    "impression_id" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "click_through_url" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_clicks" ("ad_id", "ad_slot_id", "click_through_url", "created_at", "id", "impression_id", "ip_address", "is_companion", "media_id", "timestamp", "uid", "updated_at", "user_agent") SELECT "ad_id", "ad_slot_id", "click_through_url", "created_at", "id", "impression_id", "ip_address", "is_companion", "media_id", "timestamp", "uid", "updated_at", "user_agent" FROM "clicks";
DROP TABLE "clicks";
ALTER TABLE "new_clicks" RENAME TO "clicks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
