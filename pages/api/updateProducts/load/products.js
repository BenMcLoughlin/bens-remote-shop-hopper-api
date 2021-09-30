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
    let set = [...new Set(data)]
    console.log('formatted set:', set.length);
    let result = false;
    let traunch = 50;
    let start = 0;
    let results = [];

    // hey don't judge : P
    let iterate = async () => {
        let arr = [];

        set.map((item, i) => {
            if ((i + start) < traunch) {
                arr.push(item);
            }
        })

        result = await createRows(arr);
        if (result && (traunch < set.length)) {
            results.push(result);
            traunch += 50;
            start += 50;
            iterate();
            return console.log('ITERATE LOAD FUNCTION: ', result, start);
        }
        results.push(result);

        return { done: true }
    }

    iterate();

    console.log('IN LOAD FUNCTION: ', results); // toda

    return result;
}
