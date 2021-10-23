import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';

export async function getColumn(column) {
    console.log('getColumn:', column);

    const result = await prisma.product.findMany({
        select: {
            [column]: true
        }
    }).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
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

            const done = await getColumn(body);

            let unique = [];

            if (body === 'sizes' ||
                body === 'buckets' ||
                body === 'colors' ||
                body === 'tags'
            ) {
                done.map((obj) => obj[body].map((t) => {
                    if (!unique.includes(t)) {
                        unique.push(t);
                    }

                    return true;
                }));
            } else {
                done.map((obj) => {
                    if (!unique.includes(obj[body])) {
                        unique.push(obj[body]);
                    }

                    return true;
                });
            }

            const result = unique.map((item) => ({ label: item, value: item }));

            console.log('GET COLUMN SEARCH:', done.length, unique.length);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};