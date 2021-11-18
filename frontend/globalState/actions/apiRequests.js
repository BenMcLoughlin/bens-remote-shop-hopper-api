// We will split these up into concise containers
import * as templateClass from 'frontend/xhr/templateClass';
import * as products from 'frontend/xhr/products';

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
            console.log(`SUCCESSFULLY UPDATED ${uploaded.count} PRODUCTS from ${params.businessName}`);
            store.actions.counter.addResult([{ result: `SUCCESSFULLY UPDATED ${uploaded.count} PRODUCTS from ${params.businessName}`, status: 200 }]);
            store.actions.counter.addSuccess();

            return res;
        }

        console.log(`FAILED TO UPDATE ${params.businessName}`);
        store.actions.counter.addResult([{ result: `FAILED TO UPDATE ${params.businessName}`, status: 422 }]);
        store.actions.counter.addFail();

        return res;
    }
};

export const all = (store, shops) => {
    store.actions.counter.clearRequests();

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
        });

    return true;
};

export const searchProducts = (store, query) => {
    console.log('searchProducts query:', query);
    store.actions.products.setQuery(query);

    return products
        .searchProducts(query)
        .then((data) => {
            console.log('searchProducts:', data.result?.length);

            return data.result;
        })
        .catch((error) => {
            console.log('error:', error);
        });
};

export const searchProductById = (store, id) => {
    const body = JSON.stringify(id);

    console.log('searchProductById query:', body);

    return products
        .searchProductById(body)
        .then((data) => {
            console.log('searchProductById:', data.result);

            return data.result;
        })
        .catch((error) => {
            console.log('error:', error);
        });
};

export const nextPage = (store) => {
    const body = {
        column: store.state.products.query.column,
        metric: store.state.products.query.metric,
        size: store.state.products.query.size,
        cursor: store.state.products.cursor + store.state.products.amount,
        amount: store.state.products.amount
    };
    console.log('nextPage body:', body);

    return products
        .searchProducts(body)
        .then((data) => {
            store.actions.products.setData(data.result);
            store.actions.products.setCursor(body.cursor);

            return data.result;
        })
        .catch((error) => {
            console.log('error:', error);
        });
};

export const prevPage = (store) => {
    const body = {
        column: store.state.products.query.column,
        metric: store.state.products.query.metric,
        size: store.state.products.query.size,
        cursor: store.state.products.cursor - store.state.products.amount,
        amount: store.state.products.amount
    };
    console.log('prevPage body:', body);

    return products
        .searchProducts(body)
        .then((data) => {
            store.actions.products.setData(data.result);
            store.actions.products.setCursor(body.cursor);

            return data.result;
        })
        .catch((error) => {
            console.log('error:', error);
        });
};

export const getHotItems = (store, amount = 12) => {
    const body = {
        amount: amount
    };
    console.log('getHotItems body:', body);

    return products
        .getHotItems(body)
        .then((data) => {
            store.actions.products.setHotItems(data.result);

            return data.result;
        })
        .catch((error) => {
            console.log('error:', error);
        });
};

export const getColumn = (store, body) => products
    .getColumn(body)
    .then((data) => data)
    .catch((error) => {
        console.log('error:', error);
    });

export const getTemplateClass = (store, templateClassName) => {
    const body = templateClassName;

    console.log('getTemplateClass body:', body);

    return templateClass
        .getTemplateClass(body)
        .then((data) => {
            store.actions.templateClass.setData(data.result);

            return data.result;
        })
        .catch((error) => {
            console.log('error:', error);
        });
};

export const applyProductToTemplate = (store, pid, position, id) => {
    const body = {
        pid, 
        position,
        product_id: id
    };

    console.log('applyProductToTemplate body:', body);

    return templateClass
        .applyProductToTemplate(body)
        .then((data) => {
            store.actions.templateClass.setData(data.result);

            return data.result;
        })
        .catch((error) => {
            console.log('error:', error);
        });
};

export const checkTemplateClasses = (store) => {
    console.log('checkTemplateClasses');

    return templateClass
        .checkTemplateClasses()
        .then((data) => data.result)
        .catch((error) => {
            console.log('error:', error);
        });
};

export const resetTemplateClasses = (store, templateClasses) => {
    const body = templateClasses;

    console.log('resetTemplateClasses body:', body);

    return templateClass
        .resetTemplateClasses(body)
        .then(() => true)
        .catch((error) => {
            console.log('error:', error);
        });
};

export const wipeProducts = (store, body) => products
    .wipeProducts(body)
    .then((data) => {
        console.log('DESTROY PRODUCTS RESPONSE:', data);

        return data;
    })
    .catch((error) => {
        console.log('error:', error);
    });