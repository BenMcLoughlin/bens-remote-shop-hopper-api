// import { getSession } from 'next-auth/react';
import prisma from 'prisma/prisma.js';

export async function searchProductById(id) {
    // TODO: trigger warning if params not set

    console.log('SEARCH_PRODUCTS_BY_ID id');
    let where = {};

    const result = await prisma.product
        .findMany({
            where: { id: id }
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
            let body = req.body;

            const result = await searchProductById(body);

            console.log('SEARCH_PRODUCTS_BY_ID:', result.title);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
