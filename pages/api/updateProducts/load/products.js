import prisma from 'prisma/prisma.js';

async function createRows(data) {
    let result = {};

    // this one appears to update the info and is stable on local
    result = await prisma.$transaction(data.map((item) => prisma.product.upsert({
        where: { title: item.title },
        update: item,
        create: item
    }))).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    // result = await data.map((item) => prisma.product.upsert({ todo
    //     where: { title: item.title },
    //     update: item,
    //     create: item
    // }).catch((e) => {
    //     console.log('e:', e);
    //     throw e;
    // }).finally(async () => {
    //     await prisma.$disconnect();
    // }));

    // result = await prisma.product
    //     .createMany({
    //         data: data,
    //         skipDuplicates: true
    //     })
    //     .catch((e) => {
    //         console.log('e:', e);
    //         throw e;
    //     })
    //     .finally(async () => {
    //         await prisma.$disconnect();
    //     });

    return result;
}

export async function products(data) {
    let productsUploaded = [];

    productsUploaded = await createRows(data);

    console.log('IN LOAD FUNCTION: ', productsUploaded.length);

    return productsUploaded.length;
}
