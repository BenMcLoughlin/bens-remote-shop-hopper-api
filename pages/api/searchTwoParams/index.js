import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';

export async function searchTwoParams(query) {
    console.log('query.column:', query.column);

    let column = query.column;
    let metric = query.metric;
    let cursor = query.cursor || 10;
    let startCursor = query.startCursor || 0;

    const result = await prisma.product
        .findMany({
            take: cursor,
            skip: startCursor,
            where: {
                [column]: {
                    has: metric
                }
            },
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

            const result = await searchTwoParams(body);

            console.log('TWO PARAM SEARCH:', result.length);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};