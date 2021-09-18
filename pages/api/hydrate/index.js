/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getSession } from 'next-auth/client';
import prisma from '../../../lib/prisma.js';
import { fetchProducts } from '../fetch.ts';

async function createRows(productArray) {
    let result = {};

    await Promise.all(productArray.map(async (item) => {
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

export default async (req, res) => {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ reason: 'Unauthorized' });
    }

    if (req.method === 'POST') {
        if (req.body.request === 'DESTROY') {
            console.log("DESTROY");

            // be careful this wipes the DB
            const result = await prisma.product.deleteMany({}) 
                .catch((e) => {
                    console.log('e:', e);
                    throw e;
                }).finally(async () => {
                    await prisma.$disconnect();
                });

            return res.status(200).json({ removed: result, action: "DESTROYED" }); 
        }

        try {
            const { body } = req;
            let json = [];

            if (body) {
                json = await fetchProducts();
            }

            const productArray = await json.products.map((product) => {
                const {
                    // id,
                    title,
                    handle,
                    body_html,
                    published_at,
                    // created_at,
                    updated_at,
                    vendor,
                    product_type,
                    tags
                    // variants,
                    // images,
                    // options,
                } = product;

                const data = {
                    // id,
                    title,
                    handle,
                    body_html,
                    vendor,
                    product_type,
                    publishedAt: published_at,
                    updatedAt: updated_at,
                    tags,
                    // todo
                    variantId: null,
                    imageId: null,
                    optionId: null
                };

                return data;
            });

            const result = createRows(productArray);

            return res.status(200).json(result);
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};