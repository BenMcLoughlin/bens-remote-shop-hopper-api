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
