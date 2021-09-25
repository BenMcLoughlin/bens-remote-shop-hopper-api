/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';

async function addPointToProduct(title) {
    const product = await prisma.product.findUnique({
        where: {
            title
        }
    }).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    const result = await prisma.product.update({
        where: {
            title: title
        },
        data: {
            rating: product?.rating ? product.rating + 1 : 1
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
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ reason: 'Unauthorized' });
    }

    if (req.method === 'POST') {
        try {
            const { body } = req;
            const result = await addPointToProduct(body);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};