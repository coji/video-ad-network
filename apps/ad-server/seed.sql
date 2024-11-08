-- Usersのサンプルデータ
INSERT INTO users (id, email) VALUES
('user1', 'user1@example.com'),
('user2', 'user2@example.com');

-- Organizationsのサンプルデータ
INSERT INTO organizations (id, name) VALUES
('org1', 'Tech Corp'),
('org2', 'News Ltd');

-- OrganizationMembershipsのサンプルデータ
INSERT INTO organization_memberships (id, user_id, organization_id, role) VALUES
('mem1', 'user1', 'org1', 'admin'),
('mem2', 'user2', 'org2', 'member');

-- メディアのサンプルデータ
INSERT INTO medias (id, name, categories, organization_id) VALUES
('media1', 'Tech Blog', '["news"]', 'org1'),
('media2', 'News', '["entertainment"]', 'org2');

-- 広告枠のサンプルデータ
INSERT INTO ad_slots (id, name, media_id, type) VALUES
('adslot1', 'Tech Blog Video Slot', 'media1', 'video'),
('adslot2', 'News Site Audio Slot', 'media2', 'audio'),
('adslot3', 'Music Stream Video Slot', 'media1', 'video');

-- コンパニオンスロットのサンプルデータ
INSERT INTO companion_slots (id, name, ad_slot_id, width, height) VALUES
('compslot1', 'Companion Slot 1', 'adslot1', 300, 250),
('compslot2', 'Companion Slot 2', 'adslot2', 300, 250),
('compslot3', 'Companion Slot 3', 'adslot3', 728, 90);

-- Advertisersのサンプルデータ
INSERT INTO advertisers (id, name, organization_id) VALUES
('adv1', 'Advertiser One', 'org1'),
('adv2', 'Advertiser Two', 'org2');

-- Campaignsのサンプルデータ
INSERT INTO campaigns (id, name, advertiser_id, start_date, end_date) VALUES
('camp1', 'Campaign One', 'adv1', '2023-10-01', '2023-12-31'),
('camp2', 'Campaign Two', 'adv2', '2023-11-01', '2024-01-31');

-- AdGroupsのサンプルデータ
INSERT INTO ad_groups (id, name, categories, bid_price_cpm, frequency_cap_impressions, frequency_cap_window, frequency_cap_unit, advertiser_id, campaign_id) VALUES
('ag1', 'AdGroup One', NULL, 2000, 10, 7, 'DAY', 'adv1', 'camp1'),
('ag2', 'AdGroup Two', '["news"]', 1000, 15, 1, 'HOUR', 'adv2', 'camp2'),
('ag3', 'AdGroup Three', '["entertainment"]', 1000, 15, 1, 'HOUR', 'adv2', 'camp2');

-- 広告のサンプルデータ
INSERT INTO ads (id, advertiser_id, ad_group_id, type, url, duration, mime_type, click_through_url, description) VALUES
('ad1', 'adv1', 'ag1', 'video', 'http://localhost:8787/example/ads/example_video1.mp4', 15, 'video/mp4', 'https://example.com/ad/1', 'Beach'),
('ad2', 'adv2', 'ag2', 'audio', 'http://localhost:8787/example/ads/example_audio1.m4a', 37, 'audio/x-m4a', 'https://example.com/ad/2', 'Zen Boost'),
('ad3', 'adv1', 'ag1', 'video', 'http://localhost:8787/example/ads/example_video2.mp4', 14, 'video/mp4', 'https://example.com/ad/3', 'Mountain');

-- コンパニオンバナーのサンプルデータ
INSERT INTO companion_banners (id, ad_id, url, width, height, mime_type, click_through_url) VALUES
('cb1', 'ad1', 'http://localhost:8787/example/ads/example_companion_banner1.png', 300, 250, 'image/png', 'https://example.com/ad/1/banner'),
('cb2', 'ad2', 'http://localhost:8787/example/ads/example_companion_banner2.png', 300, 250, 'image/png', 'https://example.com/ad/2/banner'),
('cb3', 'ad3', 'http://localhost:8787/example/ads/example_companion_banner3.png', 728, 90, 'image/png', 'https://example.com/ad/3/banner');

-- クリックのサンプルデータ
INSERT INTO clicks (id, ad_id, ad_slot_id, media_id, ip_address, user_agent, is_companion, impression_id, uid, click_through_url) VALUES
('click1', 'ad1', 'adslot1', 'media1', '192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 0, '550e8400-e29b-41d4-a716-446655440000', 'uid1', 'https://example.com/ad/1'),
('click2', 'ad2', 'adslot2', 'media2', '192.168.1.3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15', 1, '550e8400-e29b-41d4-a716-446655440002', 'uid2', 'https://example.com/ad/2');

-- AdEventsのサンプルデータ
INSERT INTO ad_events (id, event_timestamp, event_type, ad_id, ad_slot_id, media_id, impression_id, progress, ip_address, user_agent, uid) VALUES
('ae1', '2023-10-10 10:00:00', 'impression', 'ad1', 'slot1', 'media1', 'imp1', NULL, '192.168.1.4', 'Mozilla/5.0', 'uid1'),
('ae2', '2023-10-10 10:05:00', 'progress', 'ad2', 'slot2', 'media2', 'imp2', 50, '192.168.1.5', 'Chrome/91.0', 'uid2');

-- DailyReportsのサンプルデータ
INSERT INTO daily_reports (date, media_id, ad_slot_id, advertiser_id, campaign_id, ad_group_id, ad_id, impressions, clicks, reach) VALUES
('2023-10-10', 'media1', 'slot1', 'adv1', 'camp1', 'ag1', 'ad1', 1000, 50, 750),
('2023-10-10', 'media2', 'slot2', 'adv2', 'camp2', 'ag2', 'ad2', 2000, 100, 1500);

