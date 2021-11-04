export const single = async (store, params) => {
    store.actions.counter.addRequest();
    store.setState({ status: `UPLOADING ${params.businessName}` });

    const res = await fetch('/api/updateProducts', {
        method: 'POST',
        body: JSON.stringify(params)
    });

    if (res) {
        const uploaded = await res.json();

        if (res.status === 200) {
            store.actions.counter.addResult([
                { result: `${params.businessName} SUCCESS`, status: 200 }
            ]);

            console.log(`SUCCESSFULLY UPDATED ${uploaded.count} PRODUCTS`);
            store.setState({ result: `${params.businessName} SUCCESS`, status: 200 });
            store.actions.counter.addSuccess();

            return res;
        }

        console.log(`FAILED TO UPDATE ${params.businessName}`);
        store.setState({ result: `${params.businessName} FAILED`, status: 422 });
        store.actions.counter.addResult([{ result: `${params.businessName} FAILED`, status: 422 }]);
        store.actions.counter.addFail();

        return res;
    }
};

export const all = (store, shops) => {
    store.actions.counter.clearRequests();
    console.time('_updateAll');

    let promises = shops.data.map(async (shop, i) => {
        if (shop.domain) {
            let params = { 
                domain: shop.domain,
                businessName: shop.business_name,
                siteHost: ''
            };

            let res = await single(store, params);

            return { result: `${shop.business_name} SUCCESS`, status: 200 };
        }

        // todo: add sweet error handling
        return { result: `${shop.business_name} FAILED`, status: 422 };
    });

    Promise.all(promises)
        .then((results) => {
            store.actions.counter.addResult(results);
            console.timeEnd('_updateAll');
        });

    return true;
};

export const addRequest = (store) => {
    const products = { ...store.state.products };
    products.requests++;
    store.setState({ products: products });
};

export const setStatus = (store, state) => {
    const products = { ...store.state.products };
    products.status = state;
    store.setState({ products: products });
};

export const setData = (store, state) => {
    const products = { ...store.state.products };
    products.data = state;
    store.setState({ products: products });
};

export const setHotItems = (store, state) => {
    const products = { ...store.state.products };
    products.hotItems = state;
    store.setState({ products: products });
};

export const setQuery = (store, state) => {
    const products = { ...store.state.products };
    products.query = state;
    store.setState({ products: products });
};

export const setCursor = (store, state) => {
    const products = { ...store.state.products };
    products.cursor = state;
    store.setState({ products: products });
};

export const setLoading = (store, state) => {
    const products = { ...store.state.products };
    products.loading = state;
    store.setState({ products: products });
};
