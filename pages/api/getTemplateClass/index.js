
import prisma from 'prisma/prisma.js';

export async function getTemplateClass(templateClass) {

    const result = await prisma.templateClass
        .findUnique({
            where: {
                class_name: templateClass
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

            const result = await getTemplateClass(body);

            console.log('GET_TEMPLATE_CLASS:', result);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
