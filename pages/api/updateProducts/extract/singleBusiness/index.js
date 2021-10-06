import * as sanitize from '../../sanitize';
import * as load from '../../load';
import * as metrics from '../../metrics';

export async function singleBusiness(businessName, domain) {
    let productsUploaded = 0;

    try {
        for (let page = 1; page <= 3; page++) {
            const url = `https://${domain}/products.json?limit=250&page=${page}`;
            const response = await fetch(url);
            const data = await response.json();

            const sanitizedData = await sanitize.products([...data.products], businessName);
            const successfulUploads = await load.products(sanitizedData);

            if (data.products.length === 0) continue;

            productsUploaded += successfulUploads.count;
        }
    } catch (error) {
        console.log(error);
        throw error;
        // return { ERROR: error };
    }

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
}
