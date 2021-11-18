// import { getSession } from 'next-auth/react';
import prisma from 'prisma/prisma.js';

async function addPointToProduct(id) {
    const result = await prisma.product
        .update({
            where: {
                id: id
            },
            data: {
                rating: { increment: 1 }
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

export async function findProduct(id) {
    const result = await prisma.product
        .findUnique({
            where: {
                id
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

async function addItemToHotList(item) {
    const result = await prisma.hotItem
        .upsert({
            where: { title: item.title },
            create: item,
            update: item
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

    // if (!session) {
    //     return res.status(401).json({ reason: 'Unauthorized' });
    // }

    if (req.method === 'POST') {
        try {
            const { body } = req;
            const result = await addPointToProduct(body);
            const item = await findProduct(body);
            await addItemToHotList(item);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
