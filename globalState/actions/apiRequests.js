import * as products from '../../xhr/products';
// import * as types from './types/products'; todo

export const userProducts = (store, query) => {
    store.actions.products.setLoading(true);
    console.log('userProducts query:', query);
    store.actions.products.setQuery(query);

    return products.userProducts(query)
        .then((data) => {
            // store.actions.products.setData(data.result);
            console.log('store.state.products:', store.state.products.data.length);

            store.actions.products.setLoading(false);

            return data.result;
        })
        .catch((error) => {
            store.actions.products.setLoading(false);
            console.log('error:', error);
            // notifier.displayError(error.verbiage); todo
        });
};