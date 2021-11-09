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

To run studio

```
npx prisma studio
```

To Generate the client after making schema changes

```
npx prisma generate
```

To set schema according to schema.prisma for new db

```
npx prisma db push
```

To run migrations after making schema changes:

```
prisma migrate dev --name <migration name>
```

To run migrations after making schema changes for deployment

```
prisma migrate resolve
```

prisma migrate resolve --applied "20201127134938_my_migration"

```
prisma migrate deploy
```

To clear Products table (take it easy this deletes everything)

use in function
`await prisma.product.deleteMany({})`

## Postgres Commands

Connect to server, from a terminal:
```
psql postgres
```

Describe Users

```
\du
```

List Dbs

```
\list
```

If you are logged into the same computer that Postgres is running on you can use the following psql login command, specifying the database (mydb) and username (myuser):

```
psql -d mydb -U myuser -W
```

Connection Info
```
\conninfo
```

## TBA

`To configure seeding in your project you need to add a "prisma.seed" property in your package.json with the command to execute it:`

https://www.prisma.io/docs/guides/database/seed-database

## Build Step Spare

`next dev --port $PORT`

## References

`https://styled-icons.dev/` Styled Icons

## Dev Tips

This is a bit basic, but if you ever have deployment issues with Vercel, specifically that your are getting a error that says: `Cannot find module ..//xxx`, but the code is present, try renaming the file. If there is/had been a case issue with the filename, it won't necessarily be updated in Git hub, and Vercel won't find it when building.