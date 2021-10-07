import prisma from '../../../prisma/prisma.js';

async function createRows(data) {
    let result = {};

    result = await prisma.product.createMany({
        data,
        skipDuplicates: true
    }).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    return result;
}

export async function products(data) {
    let results = [];

    results = await createRows(data);

    console.log('IN LOAD FUNCTION: ', results);

    return results
}
