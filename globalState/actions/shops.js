import * as shops from '../../xhr/shops';

export const addShops = (store, shopsList) => {
    const shopsState = [ ...store.state.shops, ...shopsList ];
    store.setState({ shops: [ ...store.state.shops, ...shopsState ] });
};

export const setLoading = (store, state) => {
    const shopsState = { ...store.state.shops };
    shopsState.loading = state;
    store.setState({ shops: shopsState });
};

export const shopStatuses = (store) => {
    store.actions.shops.setLoading(true);

    return shops.shopStatuses()
        .then((data) => {
            console.log('SHOPS STATUSES:', data.result?.length);

            store.actions.shops.setLoading(false);

            return data.result;
        })
        .catch((error) => {
            setLoading(false);
            console.log('error:', error);
        });
};