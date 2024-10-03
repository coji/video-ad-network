-- テーブルが存在する場合は削除
DROP TABLE IF EXISTS `video-ad-network.tracker.ad_events`;

-- 新しいテーブルの作成
CREATE TABLE `video-ad-network.tracker.ad_events`
(
  event_timestamp TIMESTAMP NOT NULL,
  event_type STRING NOT NULL,
  ad_id INT64 NOT NULL,
  ad_slot_id INT64 NOT NULL,
  media_id INT64 NOT NULL,
  impression_id STRING NOT NULL,
  ip_address STRING,
  user_agent STRING,
  progress INT64,
  error_message STRING
)
PARTITION BY DATE(event_timestamp)
CLUSTER BY event_type, ad_id;

-- テーブル説明の追加
ALTER TABLE `video-ad-network.tracker.ad_events`
SET OPTIONS (
  description = "広告イベントトラッキングデータを格納するテーブル。インプレッション、進捗、エラーなどのイベントを記録。"
);

-- カラムの説明を追加
ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN event_timestamp SET OPTIONS (description = "イベントが発生した時刻");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN event_type SET OPTIONS (description = "イベントの種類（impression, progress, error など）");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN ad_id SET OPTIONS (description = "広告ID");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN ad_slot_id SET OPTIONS (description = "広告スロットID");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN media_id SET OPTIONS (description = "メディアID");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN impression_id SET OPTIONS (description = "インプレッションの一意の識別子");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN ip_address SET OPTIONS (description = "クライアントのIPアドレス");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN user_agent SET OPTIONS (description = "クライアントのユーザーエージェント");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN progress SET OPTIONS (description = "動画再生の進捗（パーセンテージ）");

ALTER TABLE `video-ad-network.tracker.ad_events`
ALTER COLUMN error_message SET OPTIONS (description = "エラーが発生した場合のエラーメッセージ");

-- 15分ごとの集計クエリ
-- CREATE OR REPLACE TABLE `video-ad-network.tracker.ad_metrics_15min`
-- PARTITION BY DATE(start_time) AS
-- SELECT
--   TIMESTAMP_TRUNC(event_timestamp, MINUTE, 'UTC') AS start_time,
--   ad_id,
--   COUNT(DISTINCT CASE WHEN event_type = 'impression' THEN impression_id END) AS impressions,
--   COUNT(DISTINCT CASE WHEN event_type = 'start' THEN impression_id END) AS starts,
--   COUNT(DISTINCT CASE WHEN event_type = 'complete' THEN impression_id END) AS completes,
--   COUNT(DISTINCT CASE WHEN event_type = 'click' THEN impression_id END) AS clicks
-- FROM `video-ad-network.tracker.ad_events`
-- WHERE event_timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 15 MINUTE)
-- GROUP BY 1, 2;

-- 集計テーブルのクエリ例 (特定の日付の広告パフォーマンス)
-- SELECT
--   ad_id,
--   SUM(impressions) AS total_impressions,
--   SUM(starts) AS total_starts,
--   SUM(completes) AS total_completes,
--   SUM(clicks) AS total_clicks
-- FROM `video-ad-network.tracker.ad_metrics_15min`
-- WHERE DATE(start_time) = '2024-10-01'
-- GROUP BY 1
-- ORDER BY total_impressions DESC;