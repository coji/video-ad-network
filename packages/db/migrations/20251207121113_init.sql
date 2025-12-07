-- Create "user" table
CREATE TABLE `user` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `email_verified` boolean NOT NULL,
  `image` text NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `role` text NULL,
  `banned` boolean NULL,
  `ban_reason` text NULL,
  `ban_expires` datetime NULL,
  PRIMARY KEY (`id`)
);
-- Create index "user_email_key" to table: "user"
CREATE UNIQUE INDEX `user_email_key` ON `user` (`email`);
-- Create "session" table
CREATE TABLE `session` (
  `id` text NOT NULL,
  `expires_at` datetime NOT NULL,
  `token` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `ip_address` text NULL,
  `user_agent` text NULL,
  `user_id` text NOT NULL,
  `active_organization_id` text NULL,
  `impersonated_by` text NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `session_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
);
-- Create index "session_token_key" to table: "session"
CREATE UNIQUE INDEX `session_token_key` ON `session` (`token`);
-- Create index "session_user_id_idx" to table: "session"
CREATE INDEX `session_user_id_idx` ON `session` (`user_id`);
-- Create "account" table
CREATE TABLE `account` (
  `id` text NOT NULL,
  `account_id` text NOT NULL,
  `provider_id` text NOT NULL,
  `user_id` text NOT NULL,
  `access_token` text NULL,
  `refresh_token` text NULL,
  `id_token` text NULL,
  `access_token_expires_at` datetime NULL,
  `refresh_token_expires_at` datetime NULL,
  `scope` text NULL,
  `password` text NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `account_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
);
-- Create index "account_user_id_idx" to table: "account"
CREATE INDEX `account_user_id_idx` ON `account` (`user_id`);
-- Create "verification" table
CREATE TABLE `verification` (
  `id` text NOT NULL,
  `identifier` text NOT NULL,
  `value` text NOT NULL,
  `expires_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
-- Create index "verification_identifier_idx" to table: "verification"
CREATE INDEX `verification_identifier_idx` ON `verification` (`identifier`);
-- Create "organization" table
CREATE TABLE `organization` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `slug` text NOT NULL,
  `logo` text NULL,
  `created_at` datetime NOT NULL,
  `metadata` text NULL,
  PRIMARY KEY (`id`)
);
-- Create index "organization_slug_key" to table: "organization"
CREATE UNIQUE INDEX `organization_slug_key` ON `organization` (`slug`);
-- Create "member" table
CREATE TABLE `member` (
  `id` text NOT NULL,
  `organization_id` text NOT NULL,
  `user_id` text NOT NULL,
  `role` text NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `member_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT `member_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
);
-- Create index "member_organization_id_idx" to table: "member"
CREATE INDEX `member_organization_id_idx` ON `member` (`organization_id`);
-- Create index "member_user_id_idx" to table: "member"
CREATE INDEX `member_user_id_idx` ON `member` (`user_id`);
-- Create "invitation" table
CREATE TABLE `invitation` (
  `id` text NOT NULL,
  `organization_id` text NOT NULL,
  `email` text NOT NULL,
  `role` text NULL,
  `status` text NOT NULL,
  `expires_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `inviter_id` text NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `invitation_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT `invitation_inviter_id_fkey` FOREIGN KEY (`inviter_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
);
-- Create index "invitation_organization_id_idx" to table: "invitation"
CREATE INDEX `invitation_organization_id_idx` ON `invitation` (`organization_id`);
-- Create index "invitation_email_idx" to table: "invitation"
CREATE INDEX `invitation_email_idx` ON `invitation` (`email`);
-- Create "media" table
CREATE TABLE `media` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `categories` text NULL,
  `organization_id` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`),
  CONSTRAINT `media_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
);
-- Create index "media_name_key" to table: "media"
CREATE UNIQUE INDEX `media_name_key` ON `media` (`name`);
-- Create index "media_organization_id_idx" to table: "media"
CREATE INDEX `media_organization_id_idx` ON `media` (`organization_id`);
-- Create "ad_slots" table
CREATE TABLE `ad_slots` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `media_id` text NOT NULL,
  `type` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`),
  CONSTRAINT `ad_slots_media_id_fkey` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
);
-- Create index "ad_slots_name_key" to table: "ad_slots"
CREATE UNIQUE INDEX `ad_slots_name_key` ON `ad_slots` (`name`);
-- Create index "ad_slots_media_id_idx" to table: "ad_slots"
CREATE INDEX `ad_slots_media_id_idx` ON `ad_slots` (`media_id`);
-- Create "companion_slots" table
CREATE TABLE `companion_slots` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `ad_slot_id` text NOT NULL,
  `width` integer NOT NULL,
  `height` integer NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`),
  CONSTRAINT `companion_slots_ad_slot_id_fkey` FOREIGN KEY (`ad_slot_id`) REFERENCES `ad_slots` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
);
-- Create index "companion_slots_ad_slot_id_idx" to table: "companion_slots"
CREATE INDEX `companion_slots_ad_slot_id_idx` ON `companion_slots` (`ad_slot_id`);
-- Create "advertisers" table
CREATE TABLE `advertisers` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `organization_id` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`),
  CONSTRAINT `advertisers_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
);
-- Create index "advertisers_name_key" to table: "advertisers"
CREATE UNIQUE INDEX `advertisers_name_key` ON `advertisers` (`name`);
-- Create index "advertisers_organization_id_idx" to table: "advertisers"
CREATE INDEX `advertisers_organization_id_idx` ON `advertisers` (`organization_id`);
-- Create "campaigns" table
CREATE TABLE `campaigns` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `advertiser_id` text NOT NULL,
  `start_at` datetime NOT NULL,
  `end_at` datetime NOT NULL,
  `budget` decimal NOT NULL DEFAULT 0,
  `budget_type` text NOT NULL,
  `delivery_pace` text NOT NULL,
  `spent_budget` decimal NOT NULL DEFAULT 0,
  `remaining_budget` decimal NOT NULL DEFAULT 0,
  `status` text NOT NULL DEFAULT 'ACTIVE',
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`),
  CONSTRAINT `campaigns_advertiser_id_fkey` FOREIGN KEY (`advertiser_id`) REFERENCES `advertisers` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
);
-- Create index "campaigns_name_key" to table: "campaigns"
CREATE UNIQUE INDEX `campaigns_name_key` ON `campaigns` (`name`);
-- Create index "campaigns_advertiser_id_idx" to table: "campaigns"
CREATE INDEX `campaigns_advertiser_id_idx` ON `campaigns` (`advertiser_id`);
-- Create "ad_groups" table
CREATE TABLE `ad_groups` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `categories` text NULL,
  `bid_price_cpm` decimal NOT NULL,
  `frequency_cap_impressions` integer NOT NULL,
  `frequency_cap_window` integer NOT NULL,
  `frequency_cap_unit` text NOT NULL,
  `advertiser_id` text NOT NULL,
  `campaign_id` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`),
  CONSTRAINT `ad_groups_advertiser_id_fkey` FOREIGN KEY (`advertiser_id`) REFERENCES `advertisers` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `ad_groups_campaign_id_fkey` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
);
-- Create index "ad_groups_name_key" to table: "ad_groups"
CREATE UNIQUE INDEX `ad_groups_name_key` ON `ad_groups` (`name`);
-- Create index "ad_groups_campaign_id_idx" to table: "ad_groups"
CREATE INDEX `ad_groups_campaign_id_idx` ON `ad_groups` (`campaign_id`);
-- Create "ads" table
CREATE TABLE `ads` (
  `id` text NOT NULL,
  `advertiser_id` text NOT NULL,
  `ad_group_id` text NOT NULL,
  `type` text NOT NULL,
  `url` text NOT NULL,
  `duration` integer NOT NULL,
  `width` integer NULL,
  `height` integer NULL,
  `mime_type` text NULL,
  `click_through_url` text NOT NULL,
  `description` text NULL,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`),
  CONSTRAINT `ads_advertiser_id_fkey` FOREIGN KEY (`advertiser_id`) REFERENCES `advertisers` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `ads_ad_group_id_fkey` FOREIGN KEY (`ad_group_id`) REFERENCES `ad_groups` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
);
-- Create index "ads_advertiser_id_ad_group_id_idx" to table: "ads"
CREATE INDEX `ads_advertiser_id_ad_group_id_idx` ON `ads` (`advertiser_id`, `ad_group_id`);
-- Create "companion_banners" table
CREATE TABLE `companion_banners` (
  `id` text NOT NULL,
  `ad_id` text NOT NULL,
  `url` text NOT NULL,
  `width` integer NOT NULL,
  `height` integer NOT NULL,
  `mime_type` text NULL,
  `click_through_url` text NULL,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`),
  CONSTRAINT `companion_banners_ad_id_fkey` FOREIGN KEY (`ad_id`) REFERENCES `ads` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
);
-- Create index "companion_banners_ad_id_idx" to table: "companion_banners"
CREATE INDEX `companion_banners_ad_id_idx` ON `companion_banners` (`ad_id`);
-- Create "clicks" table
CREATE TABLE `clicks` (
  `id` text NOT NULL,
  `ad_slot_id` text NOT NULL,
  `media_id` text NOT NULL,
  `advertiser_id` text NOT NULL,
  `campaign_id` text NOT NULL,
  `ad_group_id` text NOT NULL,
  `ad_id` text NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `ip_address` text NOT NULL,
  `user_agent` text NOT NULL,
  `is_companion` boolean NOT NULL,
  `impression_id` text NOT NULL,
  `uid` text NOT NULL,
  `click_through_url` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`id`)
);
-- Create "ad_events" table
CREATE TABLE `ad_events` (
  `id` text NOT NULL,
  `event_timestamp` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `event_type` text NOT NULL,
  `media_id` text NULL,
  `ad_slot_id` text NULL,
  `advertiser_id` text NULL,
  `campaign_id` text NULL,
  `ad_group_id` text NULL,
  `ad_id` text NULL,
  `impression_id` text NULL,
  `progress` integer NULL,
  `ip_address` text NOT NULL,
  `user_agent` text NOT NULL,
  `uid` text NOT NULL,
  PRIMARY KEY (`id`)
);
-- Create "daily_reports" table
CREATE TABLE `daily_reports` (
  `date` datetime NOT NULL,
  `media_id` text NOT NULL,
  `ad_slot_id` text NOT NULL,
  `advertiser_id` text NOT NULL,
  `campaign_id` text NOT NULL,
  `ad_group_id` text NOT NULL,
  `ad_id` text NOT NULL,
  `impressions` integer NOT NULL DEFAULT 0,
  `clicks` integer NOT NULL DEFAULT 0,
  `reach` integer NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);
-- Create index "daily_reports_date_media_id_idx" to table: "daily_reports"
CREATE INDEX `daily_reports_date_media_id_idx` ON `daily_reports` (`date`, `media_id`);
-- Create index "daily_reports_date_campaign_id_idx" to table: "daily_reports"
CREATE INDEX `daily_reports_date_campaign_id_idx` ON `daily_reports` (`date`, `campaign_id`);
-- Create index "daily_reports_date_ad_group_id_idx" to table: "daily_reports"
CREATE INDEX `daily_reports_date_ad_group_id_idx` ON `daily_reports` (`date`, `ad_group_id`);
-- Create index "daily_reports_date_ad_id_idx" to table: "daily_reports"
CREATE INDEX `daily_reports_date_ad_id_idx` ON `daily_reports` (`date`, `ad_id`);
-- Create index "daily_reports_date_media_id_ad_slot_id_advertiser_id_campaign_id_ad_group_id_ad_id_key" to table: "daily_reports"
CREATE UNIQUE INDEX `daily_reports_date_media_id_ad_slot_id_advertiser_id_campaign_id_ad_group_id_ad_id_key` ON `daily_reports` (`date`, `media_id`, `ad_slot_id`, `advertiser_id`, `campaign_id`, `ad_group_id`, `ad_id`);
