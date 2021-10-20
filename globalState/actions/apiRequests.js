import * as products from '../../xhr/products';
// import * as types from './types/products'; todo

export const userProducts = (store, query) => {
    store.actions.products.setLoading(true);
    console.log('userProducts query:', query);
    store.actions.products.setQuery(query);

    return products.searchProducts(query)
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

export const nextPage = (store) => {
    store.actions.products.setLoading(true);

    const body = {
        column: store.state.products.query.column,
        metric: store.state.products.query.metric,
        cursor: store.state.products.cursor + store.state.products.data.length,
        amount: store.state.products.amount
    }; 
    console.log('nextPage body:', body);

    return products.searchProducts(body)
        .then((data) => {
            store.actions.products.setData(data.result);
            store.actions.products.setCursor(body.cursor);
            store.actions.products.setLoading(false);

            return data.result;
        })
        .catch((error) => {
            store.actions.products.setLoading(false);
            console.log('error:', error);
            // notifier.displayError(error.verbiage); todo
        });
};

export const prevPage = (store) => {
    store.actions.products.setLoading(true);

    const body = {
        column: store.state.products.query.column,
        metric: store.state.products.query.metric,
        cursor: store.state.products.cursor - store.state.products.data.length,
        amount: store.state.products.amount
    }; 
    console.log('prevPage body:', body);

    return products.searchProducts(body)
        .then((data) => {
            store.actions.products.setData(data.result);
            store.actions.products.setCursor(body.cursor);
            store.actions.products.setLoading(false);

            return data.result;
        })
        .catch((error) => {
            store.actions.products.setLoading(false);
            console.log('error:', error);
            // notifier.displayError(error.verbiage); todo
        });
};