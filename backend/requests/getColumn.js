import * as products from 'frontend/xhr/products'; 

export const getColumn = (body) => {
    // store.actions.products.setLoading(true);
    console.log('getColumn body:', body);

    return products
        .getColumn(body)
        .then((data) => {
            // store.actions.products.setLoading(false);
            console.log('getColumn RESULT:', data);

            return data;
        })
        .catch((error) => {
            // store.actions.products.setLoading(false);
            console.log('error:', error);
        });
};