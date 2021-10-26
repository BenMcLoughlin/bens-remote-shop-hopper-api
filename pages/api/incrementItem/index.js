
import { getSession } from 'next-auth/react';
import prisma from '../../../prisma/prisma.js';

async function addPointToItem(name) {
    const result = await prisma.hot_item
        .upsert({
            where: { name: name },
            create: { name: name, value: 1 },
            update: { name: name, value: { increment: 1 } }
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
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ reason: 'Unauthorized' });
    }

    if (req.method === 'POST') {
        try {
            const { body } = req;
            const result = await addPointToItem(body);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};