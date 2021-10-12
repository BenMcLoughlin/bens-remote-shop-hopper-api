export const addShops = (store, shops) => {
    const totalShops = [ ...store.state.shops, ...shops ];
    store.setState({ shops: [ ...store.state.shops, ...shops ] });
};