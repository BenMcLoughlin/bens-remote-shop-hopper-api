import * as shops from 'frontend/xhr/shops';

export const setShops = (store, state) => {
    const shopsState = { ...store.state.shops };
    shopsState.data = state;
    store.setState({ shops: shopsState });
};

export const setLoading = (store, state) => {
    const shopsState = { ...store.state.shops };
    shopsState.loading = state;
    store.setState({ shops: shopsState });
};

export const shopStatuses = (store) => {
    store.actions.shops.setLoading(true);

    return shops
        .shopStatuses()
        .then((data) => {
            store.actions.shops.setLoading(false);
            store.setState({ status: 'SHOP STATUSES' });

            return data.result;
        })
        .catch((error) => {
            store.actions.shops.setLoading(false);
            console.log('error:', error);
        });
};

export const updateMetrics = (store, isShopify, header) => {
    store.actions.shops.setLoading(true);

    return shops
        .updateMetrics(isShopify, header)
        .then((data) => {
            console.log(`GET NUMBER OF PRODUCTS:`, data.result);

            store.actions.shops.setLoading(false);
            return data;
        })
        .catch((error) => {
            store.actions.shops.setLoading(false);
            console.log('error:', error);
        });
};