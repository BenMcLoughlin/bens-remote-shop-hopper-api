import prisma from '../../../../prisma/prisma.js';

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

    // await Promise.all(data.map(async (item) => {
    //     result = await prisma.product.createMany({
    //         data: item,
    //         skipDuplicates: true
    //     });
    // })).catch((e) => {
    //     console.log('e:', e);
    //     throw e;
    // }).finally(async () => {
    //     await prisma.$disconnect();
    // });

    return result;
}

export async function products(data) {
    let result = false;
    let traunch = 50;
    let start = 0;
    let results = [];

    results = await createRows(data);

    // let iterate = async () => {
    //     let arr = [];

    //     data.map((item, i) => {
    //         if ((i + start) < traunch) {
    //             arr.push(item);
    //         }
    //     })

    //     result = await createRows(arr);
    //     if (result && (start < data.length)) {
    //         results.push(result);
    //         traunch += 50;
    //         start += 50;
    //         iterate();
    //         return console.log('ITERATE LOAD: ', result, start);
    //     }
    //     results.push(result);

    //     return { done: true, start, traunch }
    // }

    // await iterate();

    console.log('IN LOAD FUNCTION: ', results);

    return results
}
