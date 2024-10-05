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
(1, 'video', 'http://localhost:8787/example/ads/example_video1.mp4', 15, 1920, 1080),
(2, 'audio', 'http://localhost:8787/example/ads/example_audio1.mp3', 15, NULL, NULL),
(3, 'video', 'http://localhost:8787/example/ads/example_video2.mp4', 14, 1920, 1080);

-- コンパニオンバナーのサンプルデータ
INSERT INTO companion_banners (ad_id, url, width, height) VALUES
(1, 'http://localhost:8787/example/ads/example_companion_banner1.jpg', 300, 250),
(3, 'http://localhost:8787/example/ads/example_companion_banner2.jpg', 728, 90);

-- 広告枠ターゲティングのサンプルデータ
INSERT INTO ad_slot_targeting (ad_id, ad_slot_id, bid_amount) VALUES
(1, 1, 0.05),
(2, 2, 0.03),
(3, 3, 0.07);

-- クリックのサンプルデータ
INSERT INTO clicks (ad_id, ad_slot_id, media_id, ip_address, user_agent, is_companion, impression_id) VALUES
(1, 1, 1, '192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 0, '550e8400-e29b-41d4-a716-446655440000'),
(3, 3, 3, '192.168.1.3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15', 1, '550e8400-e29b-41d4-a716-446655440002');
