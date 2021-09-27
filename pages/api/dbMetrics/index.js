import prisma from '../../../prisma/prisma.js';

async function getNumberOfProducts(body) {
    let result = 0;
    if (body === 'all') {
        result = await prisma.product.aggregate({
            _count: {
                businessName: true,
            },
        }).catch((e) => {
            console.log('e:', e);
            throw e;
        }).finally(async () => {
            await prisma.$disconnect();
        });

        return result._count.businessName;
    } else {
        result = await prisma.product.aggregate({
            where: {
                businessName: body
            },
            _count: {
                businessName: true,
            },
        }).catch((e) => {
            console.log('e:', e);
            throw e;
        }).finally(async () => {
            await prisma.$disconnect();
        });
    }

    return result._count.businessName;
}

export default async function (req, res) {
    if (req.method === 'POST') {
        try {
            const body = req.body;
            const result = await getNumberOfProducts(body);

            res.status(200).json({ result })
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();
};
