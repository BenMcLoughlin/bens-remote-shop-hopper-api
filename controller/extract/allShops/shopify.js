// import prisma from '../../../../prisma/prisma.js';
// import * as extract from '..';
// import { realtimeUpdates } from '../../metrics/realtime';

// async function getShopsDomains() {
//     const result = await prisma.$queryRaw`
//         SELECT domain, business_name FROM shops
//     `
//         .catch((e) => {
//             console.log('e:', e);
//             throw e;
//         })
//         .finally(async () => {
//             await prisma.$disconnect();
//         });

//     return result;
// }

// export const shopify = async () => {
//     try {
//         const shops = await getShopsDomains();
//         let result = [];

//         for (const shop of shops) {
//             // eslint-disable-next-line no-await-in-loop
//             result = await extract.singleBusiness(shop.business_name, shop.domain);

//             if (result) {
//                 realtimeUpdates(result);
//             }
//         }

//         return result;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };