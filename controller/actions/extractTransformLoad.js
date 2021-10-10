
import * as sanitize from '../updateProducts/sanitize';
import * as load from '../../pages/api/updateProducts/load';
import * as metrics from '../updateProducts/metrics';

export const extractTransformLoad = async (store, businessName, domain) => {
    store.actions.counter.addRequest();
    let status = "LOADING";
    store.setState({ status });

    let productsUploaded = 0;

    try {
        for (let page = 1; page <= 3; page++) {
            const url = `https://${ domain }/products.json?limit=250&page=${ page }`;
            const response = await fetch(url);
            const data = await response.json();

            const sanitizedData = await sanitize.products([ ...data.products ], businessName);
            const successfulUploads = await load.products(sanitizedData);

            // if (data.products.length === 0) {
            //     continue;
            // }
            productsUploaded += successfulUploads.count;
        }

        status = productsUploaded ? "EMPTY" : "SUCCESS";
        store.setState({ products: productsUploaded, status });
        store.actions.counter.addSuccess();
    } catch (error) {
        const isError404 = error.response && error.response.status === 404;
        status = isError404 ? "NOT_FOUND" : "ERROR";
        store.setState({ status });
        store.actions.counter.addFail();
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
};