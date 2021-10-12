import singleBusiness from '../../controller/extract';
import * as load from '../../controller/load';
import * as metrics from '../../controller/metrics';

export const single = async (store, params) => {
    store.actions.counter.addRequest();
    let status = "REQUESTED";
    store.setState({ status });
    store.actions.counter.setLoading(true);

    const res = await fetch('/api/updateProducts', {
        method: 'POST',
        body: JSON.stringify(params)
    });

    if (res) {
        const uploaded = await res.json();

        if (res.status === 200) {
            store.actions.counter.setLoading(false);
            status = "SUCCESS";
            store.setState({ status });
            console.log(`SUCCESSFULLY UPDATED ${ uploaded.result } PRODUCTS`);
            store.actions.counter.addSuccess();

            return res;
        }

        store.actions.counter.setLoading(false);
        status = "FAILED";
        store.setState({ status });
        console.log(`FAILED TO UPDATE ${ params.businessName }`);
        store.actions.counter.addFailure();

        return res;
    }
};

export const all = (store, shops) => {

    shops.forEach(async (shop, i) => {
        if (shop.domain) {
            let params = { 
                domain: shop.domain,
                businessName: shop.business_name,
                siteHost: ''
            };

            let result = await single(store, params);

            console.log('all:', result);

            return result;
        }
    });

    return true;
};