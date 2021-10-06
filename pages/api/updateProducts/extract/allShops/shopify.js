import prisma from '../../../../../prisma/prisma.js';
import * as extract from '../../extract';

async function getShopsDomains() {
    const result = await prisma.$queryRaw`
        SELECT domain, business_name FROM shops
    `.catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    return result;
}

export const shopify = async () => {
    try {
        const shops = await getShopsDomains();
        let result = {};

        shops.map(shop => {
            console.log('shop:', shop)
            // result = await extract.singleBusiness(businessName, domain);
        })

        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
