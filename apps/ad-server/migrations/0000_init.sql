-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "organization_memberships" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "organization_id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    CONSTRAINT "organization_memberships_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "organization_memberships_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "medias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "categories" TEXT, -- JSON Array
    "organization_id" TEXT NOT NULL,
    CONSTRAINT "medias_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ad_slots" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "media_id" TEXT NOT NULL,
    "type" TEXT NOT NULL, -- video, audio
    CONSTRAINT "ad_slots_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "medias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "advertisers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "organization_id" TEXT NOT NULL,
    CONSTRAINT "advertisers_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "advertiser_id" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    CONSTRAINT "campaigns_advertiser_id_fkey" FOREIGN KEY ("advertiser_id") REFERENCES "advertisers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ad_groups" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "categories" TEXT, -- JSON Array
    "bid_price_cpm" DECIMAL NOT NULL,
    "frequency_cap_impressions" INTEGER NOT NULL,
    "frequency_cap_window" INTEGER NOT NULL,
    "frequency_cap_unit" TEXT NOT NULL,
    "advertiser_id" TEXT NOT NULL,
    "campaign_id" TEXT NOT NULL,
    CONSTRAINT "ad_groups_advertiser_id_fkey" FOREIGN KEY ("advertiser_id") REFERENCES "advertisers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ad_groups_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "advertiser_id" TEXT NOT NULL,
    "ad_group_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "click_through_url" TEXT NOT NULL,
    "description" TEXT,
    "mime_type" TEXT,
    CONSTRAINT "ads_advertiser_id_fkey" FOREIGN KEY ("advertiser_id") REFERENCES "advertisers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ads_ad_group_id_fkey" FOREIGN KEY ("ad_group_id") REFERENCES "ad_groups" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "companion_banners" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ad_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "mime_type" TEXT,
    "click_through_url" TEXT,
    CONSTRAINT "companion_banners_ad_id_fkey" FOREIGN KEY ("ad_id") REFERENCES "ads" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "companion_slots" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "ad_slot_id" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    CONSTRAINT "companion_slots_ad_slot_id_fkey" FOREIGN KEY ("ad_slot_id") REFERENCES "ad_slots" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clicks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ad_id" TEXT NOT NULL,
    "ad_slot_id" TEXT NOT NULL,
    "media_id" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "is_companion" BOOLEAN NOT NULL,
    "impression_id" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "click_through_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ad_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "event_timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_type" TEXT NOT NULL,
    "ad_id" TEXT NOT NULL,
    "ad_slot_id" TEXT NOT NULL,
    "media_id" TEXT NOT NULL,
    "impression_id" TEXT NOT NULL,
    "progress" INTEGER,
    "ip_address" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "uid" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "daily_reports" (
    "date" DATETIME NOT NULL,
    "media_id" TEXT NOT NULL,
    "ad_slot_id" TEXT NOT NULL,
    "advertiser_id" TEXT NOT NULL,
    "campaign_id" TEXT NOT NULL,
    "ad_group_id" TEXT NOT NULL,
    "ad_id" TEXT NOT NULL,
    "impressions" INTEGER NOT NULL DEFAULT 0,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "reach" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_name_key" ON "organizations"("name");

-- CreateIndex
CREATE INDEX "organizations_name_idx" ON "organizations"("name");

-- CreateIndex
CREATE INDEX "organization_memberships_user_id_idx" ON "organization_memberships"("user_id");

-- CreateIndex
CREATE INDEX "organization_memberships_organization_id_idx" ON "organization_memberships"("organization_id");

-- CreateIndex
CREATE UNIQUE INDEX "medias_name_key" ON "medias"("name");

-- CreateIndex
CREATE INDEX "medias_organization_id_idx" ON "medias"("organization_id");

-- CreateIndex
CREATE INDEX "medias_categories_idx" ON "medias"("categories");

-- CreateIndex
CREATE UNIQUE INDEX "ad_slots_name_key" ON "ad_slots"("name");

-- CreateIndex
CREATE INDEX "ad_slots_media_id_idx" ON "ad_slots"("media_id");

-- CreateIndex
CREATE INDEX "ad_slots_type_idx" ON "ad_slots"("type");

-- CreateIndex
CREATE UNIQUE INDEX "advertisers_name_key" ON "advertisers"("name");

-- CreateIndex
CREATE INDEX "advertisers_organization_id_idx" ON "advertisers"("organization_id");

-- CreateIndex
CREATE UNIQUE INDEX "campaigns_name_key" ON "campaigns"("name");

-- CreateIndex
CREATE INDEX "campaigns_advertiser_id_idx" ON "campaigns"("advertiser_id");

-- CreateIndex
CREATE UNIQUE INDEX "ad_groups_name_key" ON "ad_groups"("name");

-- CreateIndex
CREATE INDEX "ad_groups_campaign_id_idx" ON "ad_groups"("campaign_id");

-- CreateIndex
CREATE INDEX "ads_advertiser_id_ad_group_id_idx" ON "ads"("advertiser_id", "ad_group_id");

-- CreateIndex
CREATE INDEX "companion_banners_ad_id_idx" ON "companion_banners"("ad_id");

-- CreateIndex
CREATE INDEX "companion_slots_width_height_idx" ON "companion_slots"("width", "height");

-- CreateIndex
CREATE INDEX "daily_reports_date_media_id_idx" ON "daily_reports"("date", "media_id");

-- CreateIndex
CREATE INDEX "daily_reports_date_campaign_id_idx" ON "daily_reports"("date", "campaign_id");

-- CreateIndex
CREATE INDEX "daily_reports_date_ad_group_id_idx" ON "daily_reports"("date", "ad_group_id");

-- CreateIndex
CREATE INDEX "daily_reports_date_ad_id_idx" ON "daily_reports"("date", "ad_id");

-- CreateIndex
CREATE UNIQUE INDEX "daily_reports_date_media_id_ad_slot_id_advertiser_id_campaign_id_ad_group_id_ad_id_key" ON "daily_reports"("date", "media_id", "ad_slot_id", "advertiser_id", "campaign_id", "ad_group_id", "ad_id");


