/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getSession } from 'next-auth/client';
import prisma from '../../../prisma/prisma.js';
import { fetchProducts } from '../fetch.ts';

async function createVariantsRows(variants) {
    let result = {};

    await Promise.all(variants.map(async (item) => {
        result = await prisma.variant.createMany({
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

            const besult = await prisma.variant.deleteMany({}) 
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
            let sanitizedVariants = [];
            let json = [];

            if (body) {
                json = await fetchProducts();
            }

            const stripIDs = (items) => {
                let idArray = [];

                items.map((item) => idArray.push(item.id));

                return idArray[0];
            };

            const stripVariants = async (variants) => {
                await variants.map((variant) => {
                    const readyVariant = {
                        id: variant.id,
                        title: variant.title,
                        option1: variant.option1,
                        option2: variant.option2,
                        option3: variant.option3,
                        sku: variant.sku,
                        requires_shipping: variant.requires_shipping,
                        taxable: variant.taxable,
                        featuredImageId: null,
                        available: variant.available,
                        price: variant.price,
                        grams: variant.grams,
                        compare_at_price: variant.compare_at_price,
                        position: variant.position,
                        product_id: variant.product_id,
                        createdAt: variant.created_at,
                        updatedAt: variant.updated_at
                    };

                    return sanitizedVariants.push(readyVariant);
                });

                return sanitizedVariants;
            };


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
                    tags,
                    variants
                    // images,
                    // options,
                } = product;

                stripVariants(variants);

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
                    // variants,
                    // todo
                    variantId: stripIDs(variants),
                    imageId: null,
                    optionId: null
                };

                return data; 
            });

            const variantResult = createVariantsRows(sanitizedVariants);
            const result = createRows(productArray);

            return res.status(200).json({ result, variantResult });
        } catch (error) {
            return res.status(422).json(error);
        }
    }

    res.end();

    return true;
};