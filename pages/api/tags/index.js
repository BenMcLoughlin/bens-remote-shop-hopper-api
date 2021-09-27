/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';

export async function getRows() {
    const result = await prisma.$queryRaw`
        SELECT tags FROM product
  `.catch((e) => {
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

    if (req.method === 'GET') {
        try {
            const result = await getRows();

            let uniqueTags = [];

            result.map((obj) => obj.tags.map((tag) => {
                if (!uniqueTags.includes(tag)) {
                    uniqueTags.push(tag);
                }

                return true;
            }));

            console.log('uniqueTags:', uniqueTags)

            return res.status(200).json({ uniqueTags });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};