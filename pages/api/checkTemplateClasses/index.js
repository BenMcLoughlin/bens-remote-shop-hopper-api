// // import { getSession } from 'next-auth/react';
import prisma from 'prisma/prisma.js';

export async function checkTemplateClasses() {
    const result = await prisma.templateClass
        .findMany({
            where: {
                submitted: false
            },
            select: {
                class_name: true
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

    if (req.method === 'GET') {
        try {
            const result = await checkTemplateClasses();

            console.log('CHECK_TEMPLATE_CLASSES:', result);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
