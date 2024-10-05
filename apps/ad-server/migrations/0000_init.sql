CREATE TABLE media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT NOT NULL
);

CREATE TABLE ad_slots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  media_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  type TEXT CHECK(type IN ('video', 'audio')) NOT NULL,
  width INTEGER,
  height INTEGER,
  FOREIGN KEY (media_id) REFERENCES media(id)
);

CREATE TABLE ads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  advertiser_id INTEGER NOT NULL,
  type TEXT CHECK(type IN ('video', 'audio')) NOT NULL,
  url TEXT NOT NULL,
  duration INTEGER,
  width INTEGER,
  height INTEGER,
  clickThroughURL TEXT
);

CREATE TABLE companion_banners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ad_id INTEGER NOT NULL,
  url TEXT NOT NULL,
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  clickThroughURL TEXT,
  FOREIGN KEY (ad_id) REFERENCES ads(id)
);

CREATE TABLE ad_slot_targeting (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ad_id INTEGER NOT NULL,
  ad_slot_id INTEGER NOT NULL,
  bid_amount DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (ad_id) REFERENCES ads(id),
  FOREIGN KEY (ad_slot_id) REFERENCES ad_slots(id)
);

CREATE TABLE clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ad_id INTEGER NOT NULL,
  ad_slot_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT NOT NULL,
  user_agent TEXT,
  is_companion BOOLEAN NOT NULL,
  impression_id TEXT,
  FOREIGN KEY (ad_id) REFERENCES ads(id),
  FOREIGN KEY (ad_slot_id) REFERENCES ad_slots(id),
  FOREIGN KEY (media_id) REFERENCES media(id)
);

