import singleBusiness from '../../controller/extract';

export const single = async (store, params) => {
    store.actions.counter.addRequest();
    let status = "LOADING";
    store.setState({ status });

    let productsExtracted = 0;
    

    try {
        for (let page = 1; page <= 3; page++) {
            const url = `https://${ params.domain }/products.json?limit=250&page=${ page }`;
            const response = await fetch(url);
            const data = await response.json();

            productsExtracted = [ ...data.products ];
        }

        status = productsExtracted ? "EMPTY" : "SUCCESS";
        store.setState({ products: productsExtracted, status });
        store.actions.counter.addSuccess();
    } catch (error) {
        const isError404 = error.response && error.response.status === 404;
        status = isError404 ? "NOT_FOUND" : "ERROR";
        store.setState({ status });
        store.actions.counter.addFail();
        console.log(error);
        throw error;
    }

    console.log('productsExtracted:', productsExtracted.length);

    // add status update and run other functions

    return productsExtracted;
};

export const all = async (store, shops) => {
    let status = "LOADING";
    store.setState({ status });
    store.actions.counter.addRequest();

    // let productsExtracted = 0;

    shops.forEach(async (shop) => {
        if (shop.domain) {
            let params = { 
                domain: shop.domain,
                businessName: shop.business_name,
                siteHost: ''
            };

            let items = await single(store, params);
        }
    });


    return true;
};