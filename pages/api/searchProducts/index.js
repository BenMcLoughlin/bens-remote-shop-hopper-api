// import { getSession } from 'next-auth/react';
import prisma from 'prisma/prisma.js';

export async function searchProducts(query) {
    let column = query.column || 'buckets';
    let metric = query.metric || 'Athletic';
    let size = query.size || undefined;
    let cursor = query.cursor || 0;
    let amount = query.amount || 12;
    let dateFrom = query.dateFrom || undefined;
    let dateTo = query.dateTo || undefined;
    // TODO: trigger warning if params not set

    console.log('SEARCH_PRODUCTS column, metric, size, cursor, amount:', column, metric, size, cursor, amount);
    let where = {};

    if (
        column === 'business_name' ||
        column === 'handle' ||
        column === 'product_type' ||
        column === 'vendor' ||
        column === 'original_price' ||
        column === 'compare_at_price'
    ) {
        where = {
            AND: [
                {
                    [column]: metric
                },
                { 
                    sizes: size ? { has: size } : undefined
                },
                {
                    updated_at: {
                        gte: dateFrom,
                        lt: dateTo ? dateTo : new Date()
                    }
                }
            ]
        };
    } else if (column === 'body_html') {
        where = {
            AND: [
                {
                    body_html: {
                        search: metric
                    }
                },
                { 
                    sizes: size ? { has: size } : undefined
                },
                {
                    updated_at: {
                        gte: dateFrom,
                        lt: dateTo ? dateTo : new Date()
                    }
                }
            ]
        };
    } else {
        where = {
            AND: [
                {
                    [column]: {
                        has: metric
                    }
                },
                { 
                    sizes: size ? { has: size } : undefined
                },
                {
                    updated_at: {
                        gte: dateFrom,
                        lt: dateTo ? dateTo : new Date()
                    }
                }
            ]
        };
    }

    const result = await prisma.product
        .findMany({
            take: amount,
            skip: cursor,
            where,
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

            const result = await searchProducts(body);

            console.log('SEARCH_PRODUCTS:', result[0]);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
