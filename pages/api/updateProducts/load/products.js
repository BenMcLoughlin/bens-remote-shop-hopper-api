import prisma from '../../../../prisma/prisma.js';

async function createRows(data) {
    let result = {};

    await Promise.all(data.map(async (item) => {
        result = await prisma.product.createMany({
            data: item,
            skipDuplicates: true
        });
    })).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    return result;
}

export async function products(data) {
    console.log('formatted data:', data.length);

    const result = await createRows(data);

    console.log('IN LOAD FUNCTION: ', result);

    return result;
}
