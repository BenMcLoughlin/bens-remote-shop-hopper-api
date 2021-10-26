// // import { getSession } from 'next-auth/react';
import prisma from '../../../prisma/prisma.js';

export async function getHotItems(query) {
    let amount = query.amount;

    console.log('getHotItems:', amount);

    const result = await prisma.hot_item
        .findMany({
            take: amount,
            orderBy: {
                rating: 'desc'
            }
        })
        .catch((e) => {
            console.log('e:', e);
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });

    return result;
}

export default async (req, res) => {
    // const session = await getSession({ req });

    // todo
    // if (!session) {
    //     return res.status(401).json({ reason: 'Unauthorized' });
    // }

    if (req.method === 'POST') {
        try {
            let { body } = req;

            if (!body) {
                body = req.query;
            }

            const result = await getHotItems(body);

            console.log('HOT ITEM FETCH:', result.length);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};