/* eslint-disable no-undef */
import { PrismaClient } from '@prisma/client';

let prisma = {};

if (process.env.NODE_ENV !== "production") {
    // prisma = new PrismaClient({ log: [ "query", "info", "warn" ] });
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        console.log("GLOBAL PRISMA:");
        global.prisma = new PrismaClient({ log: [ "query", "info", "warn" ] });
    }

    prisma = global.prisma;
}

export default prisma;