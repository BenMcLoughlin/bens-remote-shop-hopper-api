/* eslint-disable no-void */
/* eslint-disable no-undef */
import { PrismaClient } from '@prisma/client';

let prisma = {};

if (typeof window === "undefined") {
    // Ensure that previous prisma instance is disconnected. todo
    if ("prisma" in globalThis && "$disconnect" in globalThis.prisma) {
        globalThis.prisma.$disconnect();
    }
    // { log: ["query", "info", "warn"] }
    if (process.env.NODE_ENV === "production") {
        prisma = new PrismaClient({ log: ["warn"] });
    } else {
        if (!global.prisma) {
            global.prisma = new PrismaClient({ log: ["warn"] });
        }

        prisma = global.prisma;
    }
}

export default prisma;

// if (process.env.NODE_ENV !== "production") {
//     // prisma = new PrismaClient({ log: [ "query", "info", "warn" ] });
//     prisma = new PrismaClient();
// } else {
//     if (!global.prisma) {
//         console.log("GLOBAL PRISMA:");
//         global.prisma = new PrismaClient({ log: [ "query", "info", "warn" ] });
//     }

//     prisma = global.prisma;
// }

// export default prisma;

// function createPrisma() {
//     if (process.env.NODE_ENV === "production") {
//         return new PrismaClient({ log: [ "warn", "error" ] });
//     }

//     // Ensure that previous prisma instance is disconnected.
//     if ("prisma" in globalThis && "$disconnect" in globalThis.prisma) {
//         void globalThis.prisma.$disconnect();
//     }

//     globalThis.prisma = new PrismaClient({
//         log: [ "info", "query", "warn", "error" ]
//     });

//     return globalThis.prisma;
// }

// prisma = createPrisma();

// export default prisma;