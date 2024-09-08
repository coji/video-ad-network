-- メディアのサンプルデータ
INSERT INTO media (name, url, category) VALUES
('Tech Blog', 'https://techblog.example.com', 'Technology'),
('News Site', 'https://newssite.example.com', 'News'),
('Music Streaming', 'https://musicstream.example.com', 'Entertainment');

-- 広告枠のサンプルデータ
INSERT INTO ad_slots (media_id, name, type, width, height) VALUES
(1, 'Tech Blog Video Slot', 'video', 640, 360),
(2, 'News Site Audio Slot', 'audio', NULL, NULL),
(3, 'Music Stream Video Slot', 'video', 1280, 720);

-- 広告のサンプルデータ
INSERT INTO ads (advertiser_id, type, url, duration, width, height) VALUES
(1, 'video', 'https://adserver.example.com/ads/tech_product_video.mp4', 30, 640, 360),
(2, 'audio', 'https://adserver.example.com/ads/news_update_audio.mp3', 15, NULL, NULL),
(3, 'video', 'https://adserver.example.com/ads/music_app_promo.mp4', 20, 1280, 720);

-- コンパニオンバナーのサンプルデータ
INSERT INTO companion_banners (ad_id, url, width, height) VALUES
(1, 'https://adserver.example.com/banners/tech_product_banner.jpg', 300, 250),
(3, 'https://adserver.example.com/banners/music_app_banner.jpg', 728, 90);

-- 広告枠ターゲティングのサンプルデータ
INSERT INTO ad_slot_targeting (ad_id, ad_slot_id, bid_amount) VALUES
(1, 1, 0.05),
(2, 2, 0.03),
(3, 3, 0.07);

-- インプレッションのサンプルデータ
INSERT INTO impressions (ad_id, ad_slot_id, media_id, ip_address, user_agent) VALUES
(1, 1, 1, '192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'),
(2, 2, 2, '192.168.1.2', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1'),
(3, 3, 3, '192.168.1.3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15');

-- クリックのサンプルデータ
INSERT INTO clicks (ad_id, ad_slot_id, media_id, ip_address, user_agent, is_companion) VALUES
(1, 1, 1, '192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 0),
(3, 3, 3, '192.168.1.3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15', 1);

-- 視聴進捗のサンプルデータ
INSERT INTO view_progress (ad_id, ad_slot_id, media_id, progress) VALUES
(1, 1, 1, 25),
(1, 1, 1, 50),
(1, 1, 1, 75),
(1, 1, 1, 100),
(3, 3, 3, 25),
(3, 3, 3, 50);
