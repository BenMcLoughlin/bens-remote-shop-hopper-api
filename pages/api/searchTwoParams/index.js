import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';

export async function searchTwoParams(params) {
    console.log('params.column:', params.column);

    let column = params.column;
    let metric = params.metric;

    const result = await prisma.product
        .findMany({
            take: 10,
            where: {
                [column]: {
                    has: metric
                }
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

            // Postman (Ben Heeeeeelp!)
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