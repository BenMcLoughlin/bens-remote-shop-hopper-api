// import { getSession } from 'next-auth/react';
import prisma from 'prisma/prisma.js';

export default async (req, res) => {
    // const session = await getSession({ req });

    // if (!session) {
    //     return res.status(401).json({ reason: 'Unauthorized' });
    // }

    if (req.method === 'POST') {
        try {
            console.log('DESTROY');

            // be careful this wipes the DB
            let statuses = await prisma.status
                .deleteMany({})
                .catch((e) => {
                    console.log('e:', e);
                    throw e;
                })
                .finally(async () => {
                    await prisma.$disconnect();
                });

            let products = await prisma.product
                .deleteMany({})
                .catch((e) => {
                    console.log('e:', e);
                    throw e;
                })
                .finally(async () => {
                    await prisma.$disconnect();
                });

            let hot_items = await prisma.hotItem
                .deleteMany({})
                .catch((e) => {
                    console.log('e:', e);
                    throw e;
                })
                .finally(async () => {
                    await prisma.$disconnect();
                });

            return res.status(200).json({ products, statuses, hot_items, action: 'DESTROYED' });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
