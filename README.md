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

To run migrations making schema changes

```
prisma migrate dev --name <migration name>
```

To clear Products table (take it easy this deletes everything)

use in function
 `await prisma.product.deleteMany({})`


## TBA

`To configure seeding in your project you need to add a "prisma.seed" property in your package.json with the command to execute it:`

https://www.prisma.io/docs/guides/database/seed-database