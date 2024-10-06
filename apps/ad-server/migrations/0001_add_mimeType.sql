-- Migration number: 0001 	 2024-10-06T08:47:50.686Z

ALTER TABLE ads ADD COLUMN mimeType TEXT;
ALTER TABLE companion_banners ADD COLUMN mimeType TEXT;

UPDATE ads SET mimeType = 'video/mp4' WHERE type = 'video';
UPDATE ads SET mimeType = 'audio/x-m4a' WHERE type = 'audio';
