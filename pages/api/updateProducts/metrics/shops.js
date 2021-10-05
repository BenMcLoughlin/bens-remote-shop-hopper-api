import prisma from '../../../../prisma/prisma.js';

async function createRow(data) {
    let result = {};

    result = await prisma.status.create({
        data
    }).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    return result;
}

export async function shops(number, businessName) {
    let result = {};
    let data = {
        businessName,
        products: number
    };

    result = await createRow(data);

    console.log('IN METRICS.SHOPS FUNCTION: ', result);

    return result
}
