import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV !== 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

// const prisma = new PrismaClient()

// // A `main` function so that you can use async/await
// async function main() {
//   const allUsers = await prisma.user.findMany({
//     include: { posts: true },
//   })
//   // use `console.dir` to print nested objects
//   console.dir(allUsers, { depth: null })
// }

// main()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

// export default prisma;