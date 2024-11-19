-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ad_groups" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "categories" TEXT,
    "bid_price_cpm" DECIMAL NOT NULL,
    "frequency_cap_impressions" INTEGER NOT NULL,
    "frequency_cap_window" INTEGER NOT NULL,
    "frequency_cap_unit" TEXT NOT NULL,
    "advertiser_id" TEXT NOT NULL,
    "campaign_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ad_groups_advertiser_id_fkey" FOREIGN KEY ("advertiser_id") REFERENCES "advertisers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ad_groups_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ad_groups" ("advertiser_id", "bid_price_cpm", "campaign_id", "categories", "created_at", "frequency_cap_impressions", "frequency_cap_unit", "frequency_cap_window", "id", "name", "updated_at") SELECT "advertiser_id", "bid_price_cpm", "campaign_id", "categories", "created_at", "frequency_cap_impressions", "frequency_cap_unit", "frequency_cap_window", "id", "name", "updated_at" FROM "ad_groups";
DROP TABLE "ad_groups";
ALTER TABLE "new_ad_groups" RENAME TO "ad_groups";
CREATE UNIQUE INDEX "ad_groups_name_key" ON "ad_groups"("name");
CREATE INDEX "ad_groups_campaign_id_idx" ON "ad_groups"("campaign_id");
CREATE TABLE "new_ad_slots" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "media_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ad_slots_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "medias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ad_slots" ("created_at", "id", "media_id", "name", "type", "updated_at") SELECT "created_at", "id", "media_id", "name", "type", "updated_at" FROM "ad_slots";
DROP TABLE "ad_slots";
ALTER TABLE "new_ad_slots" RENAME TO "ad_slots";
CREATE UNIQUE INDEX "ad_slots_name_key" ON "ad_slots"("name");
CREATE INDEX "ad_slots_media_id_idx" ON "ad_slots"("media_id");
CREATE TABLE "new_ads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "advertiser_id" TEXT NOT NULL,
    "ad_group_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "mime_type" TEXT,
    "click_through_url" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ads_advertiser_id_fkey" FOREIGN KEY ("advertiser_id") REFERENCES "advertisers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ads_ad_group_id_fkey" FOREIGN KEY ("ad_group_id") REFERENCES "ad_groups" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ads" ("ad_group_id", "advertiser_id", "click_through_url", "created_at", "description", "duration", "height", "id", "mime_type", "type", "updated_at", "url", "width") SELECT "ad_group_id", "advertiser_id", "click_through_url", "created_at", "description", "duration", "height", "id", "mime_type", "type", "updated_at", "url", "width" FROM "ads";
DROP TABLE "ads";
ALTER TABLE "new_ads" RENAME TO "ads";
CREATE INDEX "ads_advertiser_id_ad_group_id_idx" ON "ads"("advertiser_id", "ad_group_id");
CREATE TABLE "new_advertisers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "organization_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "advertisers_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_advertisers" ("created_at", "id", "name", "organization_id", "updated_at") SELECT "created_at", "id", "name", "organization_id", "updated_at" FROM "advertisers";
DROP TABLE "advertisers";
ALTER TABLE "new_advertisers" RENAME TO "advertisers";
CREATE UNIQUE INDEX "advertisers_name_key" ON "advertisers"("name");
CREATE INDEX "advertisers_organization_id_idx" ON "advertisers"("organization_id");
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
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "campaigns_advertiser_id_fkey" FOREIGN KEY ("advertiser_id") REFERENCES "advertisers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_campaigns" ("advertiser_id", "budget", "budget_type", "created_at", "delivery_pace", "end_at", "id", "name", "remaining_budget", "spent_budget", "start_at", "status", "updated_at") SELECT "advertiser_id", "budget", "budget_type", "created_at", "delivery_pace", "end_at", "id", "name", "remaining_budget", "spent_budget", "start_at", "status", "updated_at" FROM "campaigns";
DROP TABLE "campaigns";
ALTER TABLE "new_campaigns" RENAME TO "campaigns";
CREATE UNIQUE INDEX "campaigns_name_key" ON "campaigns"("name");
CREATE INDEX "campaigns_advertiser_id_idx" ON "campaigns"("advertiser_id");
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
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_clicks" ("ad_group_id", "ad_id", "ad_slot_id", "advertiser_id", "campaign_id", "click_through_url", "created_at", "id", "impression_id", "ip_address", "is_companion", "media_id", "timestamp", "uid", "updated_at", "user_agent") SELECT "ad_group_id", "ad_id", "ad_slot_id", "advertiser_id", "campaign_id", "click_through_url", "created_at", "id", "impression_id", "ip_address", "is_companion", "media_id", "timestamp", "uid", "updated_at", "user_agent" FROM "clicks";
DROP TABLE "clicks";
ALTER TABLE "new_clicks" RENAME TO "clicks";
CREATE TABLE "new_companion_banners" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ad_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "mime_type" TEXT,
    "click_through_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "companion_banners_ad_id_fkey" FOREIGN KEY ("ad_id") REFERENCES "ads" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_companion_banners" ("ad_id", "click_through_url", "created_at", "height", "id", "mime_type", "updated_at", "url", "width") SELECT "ad_id", "click_through_url", "created_at", "height", "id", "mime_type", "updated_at", "url", "width" FROM "companion_banners";
DROP TABLE "companion_banners";
ALTER TABLE "new_companion_banners" RENAME TO "companion_banners";
CREATE INDEX "companion_banners_ad_id_idx" ON "companion_banners"("ad_id");
CREATE TABLE "new_companion_slots" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ad_slot_id" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "companion_slots_ad_slot_id_fkey" FOREIGN KEY ("ad_slot_id") REFERENCES "ad_slots" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_companion_slots" ("ad_slot_id", "created_at", "height", "id", "name", "updated_at", "width") SELECT "ad_slot_id", "created_at", "height", "id", "name", "updated_at", "width" FROM "companion_slots";
DROP TABLE "companion_slots";
ALTER TABLE "new_companion_slots" RENAME TO "companion_slots";
CREATE INDEX "companion_slots_ad_slot_id_idx" ON "companion_slots"("ad_slot_id");
CREATE TABLE "new_daily_reports" (
    "date" DATETIME NOT NULL,
    "media_id" TEXT NOT NULL,
    "ad_slot_id" TEXT NOT NULL,
    "advertiser_id" TEXT NOT NULL,
    "campaign_id" TEXT NOT NULL,
    "ad_group_id" TEXT NOT NULL,
    "ad_id" TEXT NOT NULL,
    "impressions" INTEGER NOT NULL DEFAULT 0,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "reach" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_daily_reports" ("ad_group_id", "ad_id", "ad_slot_id", "advertiser_id", "campaign_id", "clicks", "created_at", "date", "impressions", "media_id", "reach", "updated_at") SELECT "ad_group_id", "ad_id", "ad_slot_id", "advertiser_id", "campaign_id", "clicks", "created_at", "date", "impressions", "media_id", "reach", "updated_at" FROM "daily_reports";
DROP TABLE "daily_reports";
ALTER TABLE "new_daily_reports" RENAME TO "daily_reports";
CREATE INDEX "daily_reports_date_media_id_idx" ON "daily_reports"("date", "media_id");
CREATE INDEX "daily_reports_date_campaign_id_idx" ON "daily_reports"("date", "campaign_id");
CREATE INDEX "daily_reports_date_ad_group_id_idx" ON "daily_reports"("date", "ad_group_id");
CREATE INDEX "daily_reports_date_ad_id_idx" ON "daily_reports"("date", "ad_id");
CREATE UNIQUE INDEX "daily_reports_date_media_id_ad_slot_id_advertiser_id_campaign_id_ad_group_id_ad_id_key" ON "daily_reports"("date", "media_id", "ad_slot_id", "advertiser_id", "campaign_id", "ad_group_id", "ad_id");
CREATE TABLE "new_medias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "categories" TEXT,
    "organization_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "medias_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_medias" ("categories", "created_at", "id", "name", "organization_id", "updated_at") SELECT "categories", "created_at", "id", "name", "organization_id", "updated_at" FROM "medias";
DROP TABLE "medias";
ALTER TABLE "new_medias" RENAME TO "medias";
CREATE UNIQUE INDEX "medias_name_key" ON "medias"("name");
CREATE INDEX "medias_organization_id_idx" ON "medias"("organization_id");
CREATE TABLE "new_organization_memberships" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "organization_id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "organization_memberships_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "organization_memberships_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_organization_memberships" ("created_at", "id", "organization_id", "role", "updated_at", "user_id") SELECT "created_at", "id", "organization_id", "role", "updated_at", "user_id" FROM "organization_memberships";
DROP TABLE "organization_memberships";
ALTER TABLE "new_organization_memberships" RENAME TO "organization_memberships";
CREATE INDEX "organization_memberships_user_id_idx" ON "organization_memberships"("user_id");
CREATE INDEX "organization_memberships_organization_id_idx" ON "organization_memberships"("organization_id");
CREATE TABLE "new_organizations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_organizations" ("created_at", "id", "name", "updated_at") SELECT "created_at", "id", "name", "updated_at" FROM "organizations";
DROP TABLE "organizations";
ALTER TABLE "new_organizations" RENAME TO "organizations";
CREATE UNIQUE INDEX "organizations_name_key" ON "organizations"("name");
CREATE INDEX "organizations_name_idx" ON "organizations"("name");
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("created_at", "email", "id", "updated_at") SELECT "created_at", "email", "id", "updated_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE INDEX "users_email_idx" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
