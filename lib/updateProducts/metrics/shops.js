import prisma from '../../../../prisma/prisma.js';

async function createRow(data) {
    let result = {};

    result = await prisma.status
        .create({
            data
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

export async function shops(number, business_name) {
    let result = {};
    let data = {
        business_name,
        products: number
    };

    result = await createRow(data);

    console.log('IN METRICS.SHOPS FUNCTION: ', result);

    return result;
}