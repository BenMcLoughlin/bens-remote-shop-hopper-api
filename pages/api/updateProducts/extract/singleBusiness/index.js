import * as sanitize from '../../sanitize';
import * as load from '../../load';
import * as metrics from '../../metrics';

export async function singleBusiness(businessName, domain) {
    let productsUploaded = 0;

    try {
        for (let page = 1; page <= 100; page++) {
            const url = `https://${ domain }/products.json?limit=250&page=${ page }`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.products.length === 0) {
                // Pages are often blank, if so jump to the next loop without doing anything
                continue;
            }

            const sanitizedData = await sanitize.products([ ...data.products ], businessName);
            const successfulUploads = await load.products(sanitizedData);

            productsUploaded += Number(successfulUploads);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

    let metric = {};

    if (productsUploaded > 0) {
        metric = await metrics.shops(productsUploaded, businessName);
    }

    let data = {
        metric,
        businessName,
        productsUploaded
    };

    return data;
}