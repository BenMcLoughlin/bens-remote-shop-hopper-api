import prisma from 'prisma/prisma.js';

export async function applyProductToTemplate(body) {
    let existingItems = await prisma.templateClass
        .findUnique({
            where: {
                class_name: body.pid
            },
            select: {
                items: true
            }
        }).finally(async () => {
            await prisma.$disconnect();
        });

    let itemString = [JSON.stringify(body)];

    if (existingItems.items.length) {
        let newArr = [];

        existingItems.items.map((item) => {
            if (!item.includes(body.position)) {
                newArr.push(item);
            }

            return true;
        });

        newArr.push(JSON.stringify(body));

        itemString = newArr;
    }

    const result = await prisma.templateClass
        .update({
            where: {
                class_name: body.pid
            },
            data: {
                items: itemString
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
