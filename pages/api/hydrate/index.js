/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import { getSession } from 'next-auth/client';
import prisma from '../../../lib/prisma.ts';
import { fetchProducts } from '../fetch.ts';

async function createProducts(productArray) {
  let result = {};
  // async function createProducts() {
  //     await Promise.all(
  //         productArray.map(async (item) => {
  //             await prisma.product.create({
  //                 data: item,
  //                 skipDuplicates: true
  //             })
  //         })
  //     )
  // }

  // await prisma.product.deleteMany({}) // be careful this wipes the DB
  await Promise.all(
    productArray.map(async (item) => {
      result = await prisma.product.createMany({
        data: item,
        skipDuplicates: true,
      });
    }),
  ).catch((e) => {
    console.log('e:', e);
    throw e;
  }).finally(async (e) => {
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
      const { body } = req;
      let json = [];

      if (body) {
        json = await fetchProducts();
      }

      const productArray = await json.products.map((product) => {
        const {
          id,
          title,
          handle,
          body_html,
          published_at,
          created_at,
          updated_at,
          vendor,
          product_type,
          tags,
          variants,
          images,
          options,
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
          optionId: null,
        };

        return data;
      });

      const result = createProducts(productArray);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(422).json(error);
    }
  }

  res.end();

  return true;
};
