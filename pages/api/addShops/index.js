/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';
import shopifySHopArray from '../../../mock/shopsLists/kelowna.json';

async function createAllShops() {
    let result = {};
    let shopArray = [];

    shopifySHopArray.map((shop) => {
        if (shop.site_host.toLowerCase() === 'shopify') {
            const data = {
                business_name: shop.business_name,
                domain: shop.domain,
                vertical: shop.vertical,
                buckets: shop.buckets,
                site_host: 'Shopify',
                city: shop.City,
                province: shop.State,
                postal_code: shop.Zip,
                country: shop.Country
            };

            shopArray.push(data);
        }

        return true;
    });

    result = await prisma.shop
        .createMany({
            data: shopArray,
            skipDuplicates: true
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

async function createNewShop(shopData) {
    let result = {};

    result = await prisma.shop
        .create({
            data: shopData
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

export default async (req, res) => {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ reason: 'Unauthorized' });
    }

    if (req.method === 'POST') {
        try {
            const shopData = req.body;

            let result = shopData === 'all' ? await createAllShops() : await createNewShop(shopData);

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};