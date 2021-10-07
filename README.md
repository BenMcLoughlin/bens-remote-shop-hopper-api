# Fullstack Next.js, Prisma, REST API and Web client for ShopHopper

This is the API for our ShopHopper MVP. These features is will become the foundation of the platform.

## Installation

```
npm i
```

```
npm run dev
```

## Prisma

It may be necessary to run the following upon installation

```
prisma generate
```

To set schema according to schema.prisma for new db

```
npx prisma db push
```

To run studio

```
npx prisma studio
```

To Generate the client after making schema changes

```
npx prisma generate
```

To clear Products table (take it easy this deletes everything)

use in function
 `await prisma.product.deleteMany({})`

## Migration Docs

https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate/add-prisma-migrate-to-a-project#baseline-your-production-environment


## TBA

`To configure seeding in your project you need to add a "prisma.seed" property in your package.json with the command to execute it:`

https://www.prisma.io/docs/guides/database/seed-database

## Build Step Spare

`next dev --port $PORT`

