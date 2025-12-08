// Atlas configuration for video-ad-network database

// Local development environment using SQLite
env "local" {
  src = "file://schema/schema.sql"
  url = "sqlite://../../data/dev.db"
  dev = "sqlite://file?mode=memory"

  migration {
    dir = "file://migrations"
  }
}

// Turso production environment
env "turso" {
  src = "file://schema/schema.sql"
  url = getenv("TURSO_DATABASE_URL")
  dev = "sqlite://file?mode=memory"

  migration {
    dir = "file://migrations"
  }
}
