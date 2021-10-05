/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';
import array from '../../../mock/shopsLists/kelowna.json';

async function createAllShops() {
    let result = {};
    let shopArray = [];

    array.map(shop => {
        if (shop.site_host === "Shopify") {
            const data = {
                businessName: shop.business_name,
                domain: shop.domain,
                vertical: shop.vertical,
                siteHost: "Shopify",
                city: shop.City,
                province: shop.State,
                postalCode: shop.Zip,
                country: shop.Country
            };

            shopArray.push(data);
        }
    })

    // todo: is this broken?
    result = await prisma.shop.createMany({
        data: shopArray,
        skipDuplicates: true
    }).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    return result;
}

async function createNewShop(shopData) {
    let result = {};
    // let pattern = /^((http|https):\/\/)/;

    // // if it doesn't already start with http, then add it
    // if (!pattern.test(shopData.domain)) {
    //     shopData.domain = "https://" + shopData.domain;
    // }

    result = await prisma.shop.create({
        data: shopData
    }).catch((e) => {
        console.log('e:', e);
        throw e;
    }).finally(async () => {
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

            result = shopData === 'all' ? await createAllShops() : await createNewShop(shopData);

            console.log('result:', result)

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};