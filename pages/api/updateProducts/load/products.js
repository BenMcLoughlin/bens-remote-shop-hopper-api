import prisma from '../../../../prisma/prisma.js';

export function products(data) {
    console.log('IN LOAD FUNCTION: ', JSON.stringify(data[0].products[0], null, 4));
    console.log('IN LOAD FUNCTION: ', JSON.stringify(data[1].products[0], null, 4));
    //  console.log(prisma);
    return data;
}
