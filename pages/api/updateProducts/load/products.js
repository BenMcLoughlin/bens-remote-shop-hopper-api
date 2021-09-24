import prisma from '../../../../prisma/prisma.js';

export function products(data) {
    console.log('IN LOAD FUNCTION: ', data);
    //  console.log(prisma);
    return data;
}
