import singleBusiness from '../../controller/extract';
import * as load from '../../controller/load';
import * as metrics from '../../controller/metrics';

export const single = async (store, params) => {
    store.actions.counter.addRequest();
    let status = "LOADING";
    store.setState({ status });

    let result = singleBusiness(params.businessName, params.domain);

    console.log('sanitizedData:', result.sanitizedData.length);

    const successfulUploads = await load.products(result.sanitizedData);

    let metric = {};

    // if (successfulUploads.length > 0) {
    //     metric = await metrics.shops(productsUploaded, businessName);
    // }

    let data = {
        metric,
        businessName: params.businessName,
        successfulUploads
    };

    return data;
};

export const all = async (store, shops) => {
    shops.forEach(async (shop) => {
        if (shop.domain) {
            let params = { 
                domain: shop.domain,
                businessName: shop.business_name,
                siteHost: ''
            };

            let items = await single(store, params);

            // console.log('items.length:', items.length);
        }
    });


    return true;
};