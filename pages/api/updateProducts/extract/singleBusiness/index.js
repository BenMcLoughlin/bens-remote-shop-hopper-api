import * as sanitize from '../../sanitize';
import * as load from '../../load';
<<<<<<< HEAD
import * as metrics from '../../metrics';

export async function singleBusiness(businessName, domain) {
    let productsUploaded = 0;
=======

export async function singleBusiness(businessName, domain) {
    let result = { productsUploaded: 0, }
>>>>>>> 29f69a55049789ea3b0766a7378488c5bf06b6d9

    try {
        for (let page = 1; page <= 3; page++) {
            const url = `https://${domain}/products.json?limit=250&page=${page}`;
            const response = await fetch(url);
            const data = await response.json();

            const sanitizedData = await sanitize.products([...data.products], businessName);
            const successfulUploads = await load.products(sanitizedData);

            if (data.products.length === 0) continue;

<<<<<<< HEAD
            productsUploaded += successfulUploads.count;
=======
            result.productsUploaded += successfulUploads.count;
>>>>>>> 29f69a55049789ea3b0766a7378488c5bf06b6d9
        }
    } catch (error) {
        console.log(error);
    }

<<<<<<< HEAD
    let metric = {};

    if (productsUploaded > 0) {
        metric = await metrics.shops(productsUploaded, businessName)
    }

    let data = {
        metric,
        businessName,
        productsUploaded
    };

    return data;
=======
    return result;
>>>>>>> 29f69a55049789ea3b0766a7378488c5bf06b6d9
}
