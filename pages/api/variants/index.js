/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';

async function getRows(variantId) {
    let result = await prisma.variant.findUnique({
        where: { id: variantId }
    }).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
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
            const id = req.body;

            const result = await getRows(id);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};