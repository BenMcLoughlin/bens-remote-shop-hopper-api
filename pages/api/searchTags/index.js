
import { getSession } from 'next-auth/react';
import prisma from '../../../prisma/prisma.js';

export async function searchTags(tag) {
    const result = await prisma.product
        .findMany({
            where: {
                tags: {
                    has: tag
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
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ reason: 'Unauthorized' });
    }

    if (req.method === 'POST') {
        try {
            const { body } = req;
            const result = await searchTags(body);

            console.log('POST SEARCH:', result.length);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};