-- Migration number: 0001 	 2024-09-29T07:45:24.381Z
-- impressions テーブルの変更
ALTER TABLE impressions RENAME TO impressions_old;

CREATE TABLE impressions (
  id TEXT PRIMARY KEY,
  ad_id INTEGER NOT NULL,
  ad_slot_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT NOT NULL,
  user_agent TEXT,
  FOREIGN KEY (ad_id) REFERENCES ads(id),
  FOREIGN KEY (ad_slot_id) REFERENCES ad_slots(id),
  FOREIGN KEY (media_id) REFERENCES media(id)
);

INSERT INTO impressions (id, ad_id, ad_slot_id, media_id, timestamp, ip_address, user_agent)
SELECT hex(randomblob(16)), ad_id, ad_slot_id, media_id, timestamp, ip_address, user_agent
FROM impressions_old;

DROP TABLE impressions_old;

-- clicks テーブルの変更
ALTER TABLE clicks ADD COLUMN impression_id TEXT;
CREATE INDEX idx_clicks_impression_id ON clicks(impression_id);

-- view_progress テーブルの変更
ALTER TABLE view_progress ADD COLUMN impression_id TEXT;
CREATE INDEX idx_view_progress_impression_id ON view_progress(impression_id);

-- 既存のデータに対して、ダミーのimpression_idを設定（オプション）
UPDATE clicks SET impression_id = hex(randomblob(16)) WHERE impression_id IS NULL;
UPDATE view_progress SET impression_id = hex(randomblob(16)) WHERE impression_id IS NULL;
