export const single = async (store, params) => {
    store.actions.counter.addRequest();
    let status = "REQUESTED";
    store.setState({ status });
    // store.actions.counter.setLoading(true);

    const res = await fetch('/api/updateProducts', {
        method: 'POST',
        body: JSON.stringify(params)
    });

    if (res) {
        const uploaded = await res.json();
        // store.actions.counter.setLoading(false);

        if (res.status === 200) {
            console.log(`SUCCESSFULLY UPDATED ${ uploaded.count } PRODUCTS`);
            status = `SUCCESSFULLY UPDATED ${ uploaded.count } PRODUCTS`;
            store.setState({ status });
            store.actions.counter.addSuccess();

            return res;
        }

        status = "FAILED";
        store.setState({ status });
        console.log(`FAILED TO UPDATE ${ params.businessName }`);
        store.actions.counter.addFail();

        return res;
    }
};

export const all = (store, shops) => {
    store.actions.counter.clearRequests();
    store.actions.counter.setLoading(true);

    let promises = shops.map(async (shop, i) => {
        if (shop.domain) {
            let params = { 
                domain: shop.domain,
                businessName: shop.business_name,
                siteHost: ''
            };

            let res = await single(store, params);

            return { result: `${ shop.business_name } SUCCESS`, status: 200 };
        }

        // todo: add sweet error handling
        return { result: `${ shop.business_name } FAILED`, status: 422 };
    });

    Promise.all(promises)
        .then((results) => {
            store.actions.counter.setLoading(false);
            store.actions.counter.addResult(results);
        });

    return true;
};