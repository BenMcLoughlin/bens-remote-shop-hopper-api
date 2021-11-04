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
            console.log('SHOPS STATUSES:', data.result?.length);

            store.actions.shops.setLoading(false);
            store.setState({ status: 'SHOP STATUSES' });

            return data.result;
        })
        .catch((error) => {
            setLoading(false);
            console.log('error:', error);
        });
};
