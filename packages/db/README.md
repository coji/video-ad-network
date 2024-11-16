# migrate

### edit prisma/schema.prisma

### run prisma migrate dev

```sh
pnpm prisma migrate dev
```

### run turso db shell

```sh
turso db shell video-ad-network < prisma/migrations/20241116131756_init/migration.sql
```
