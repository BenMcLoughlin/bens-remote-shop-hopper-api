
import prisma from 'prisma/prisma.js';

export async function resetRow(data) {
    const result = await prisma.$transaction(data.map((item) => prisma.templateClass.upsert({
        where: { class_name: item.class_name },
        update: item,
        create: item
    }))).catch((e) => {
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

            const result = await resetRow(body);

            console.log('RESET_TEMPLATE_CLASSES:', result);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};
