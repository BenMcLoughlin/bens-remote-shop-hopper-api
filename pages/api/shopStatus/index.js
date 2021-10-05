/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';

export async function getRows() {
    const result = await prisma.$queryRaw`
        SELECT * FROM statuses
  `.catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    return result;
}

export default async (req, res) => {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ reason: 'Unauthorized' });
    }

    if (req.method === 'GET') {
        try {
            const result = await getRows();

            let eachShop = [];

            result.map((shop) => {
                if (!eachShop.includes(shop)) {
                    eachShop.push(shop);
                }

                return true;
            });

            return res.status(200).json({ eachShop });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};