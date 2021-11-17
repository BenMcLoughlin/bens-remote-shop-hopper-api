// // import { getSession } from 'next-auth/react';
import prisma from 'prisma/prisma.js';

export async function applyProductToTemplate(body) {

    const itemString = JSON.stringify(body);

    const result = await prisma.templateClass
        .update({
            where: {
                class_name: body.pid
            },
            data: {
                items: {
                    push: itemString
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
    // const session = await getSession({ req });

    // todo
    // if (!session) {
    //     return res.status(401).json({ reason: 'Unauthorized' });
    // }

    if (req.method === 'POST') {
        try {
            let body = req.body;

            const result = await applyProductToTemplate(body);

            console.log('APPLY_PRODUCT_TO_TEMPLATE:', result);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
