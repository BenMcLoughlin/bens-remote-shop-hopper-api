import * as sanitize from '../../sanitize';
import * as load from '../../load';

export async function singleBusiness(businessName, domain) {
    let result = { productsUploaded: 0, }

    try {
        for (let page = 1; page <= 3; page++) {
            const url = `https://${domain}/products.json?limit=250&page=${page}`;
            const response = await fetch(url);
            const data = await response.json();

            const sanitizedData = await sanitize.products([...data.products], businessName);
            const successfulUploads = await load.products(sanitizedData);

            if (data.products.length === 0) continue;

            result.productsUploaded += successfulUploads.count;
        }
    } catch (error) {
        console.log(error);
    }

    return result;
}
