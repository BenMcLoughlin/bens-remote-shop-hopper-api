

export const extractAll = async (store, businessName, domain) => {
    store.actions.counter.addRequest();
    let status = "LOADING";
    store.setState({ status });

    let productsExtracted = 0;

    try {
        for (let page = 1; page <= 3; page++) {
            const url = `https://${ domain }/products.json?limit=250&page=${ page }`;
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

    return productsExtracted;
};