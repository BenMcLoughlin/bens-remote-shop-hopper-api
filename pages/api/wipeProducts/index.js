
// import { getSession } from 'next-auth/react';
import prisma from '../../../prisma/prisma.js';

export default async (req, res) => {
    // const session = await getSession({ req });

    // if (!session) {
    //     return res.status(401).json({ reason: 'Unauthorized' });
    // }

    if (req.method === 'POST') {
        try {
            let result = '';
            if (req.body.request === 'DESTROY') {
                console.log('DESTROY');

                // be careful this wipes the DB
                result = await prisma.product
                    .deleteMany({})
                    .catch((e) => {
                        console.log('e:', e);
                        throw e;
                    })
                    .finally(async () => {
                        await prisma.$disconnect();
                    });

                return res.status(200).json({ removed: result, action: 'DESTROYED' });
            }

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};