import { getSession } from 'next-auth/react';
import prisma from '../../../prisma/prisma.js';

export async function searchTwoParams(query) {
    let column = query.column;
    let metric = query.metric;
    let cursor = query.cursor || 0;
    let amount = query.amount || 12;

    console.log('searchTwoParams:', column, metric, cursor, amount);
    let where = {};

    if (column === 'business_name' || 
        column === 'handle' || 
        column === 'product_type' ||
        column === 'vendor' ||
        column === 'original_price' ||
        column === 'compare_at_price'
    ) {
        where = {
            [column]: metric
        };
    } else if (column === 'body_html') {
        where = {
            body_html: {
                search: metric
            }
        };
    } else {
        where = {
            [column]: {
                has: metric
            }
        };
    }

    const result = await prisma.product
        .findMany({
            take: amount,
            skip: cursor,
            where,
            // where: {
            //     [column]: {
            //         has: metric
            //     }
            // },
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