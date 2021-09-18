import { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

let prisma: PrismaClient;

if (process.env.NODE_ENV !== "production") {
  prisma = new PrismaClient({ log: ["query", "info", "warn"] });
} else {
  if (!global.prisma) {
    console.log("GLOBAL PRISMA:");
    global.prisma = new PrismaClient({ log: ["query", "info", "warn"] });
  }
  prisma = global.prisma;
}

export default prisma;