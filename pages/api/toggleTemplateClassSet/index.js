
import prisma from 'prisma/prisma.js';

export async function applyToRow(className) {
    let existingItems = await prisma.templateClass
        .findUnique({
            where: {
                class_name: className
            }
        }).finally(async () => {
            await prisma.$disconnect();
        });

    const result = await prisma.templateClass.update({
        where: { class_name: className },
        data: {
            isSet: !existingItems.isSet
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
    // const session = await getSession({ req });

    // todo
    // if (!session) {
    //     return res.status(401).json({ reason: 'Unauthorized' });
    // }

    if (req.method === 'POST') {
        try {
            let body = req.body;

            const result = await applyToRow(body);

            console.log('TEMPLATE_IS_SET:', result.isSet);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
