export const setList = (store, state) => {
    const siteHosts = { ...store.state.siteHosts };
    siteHosts.list = state;
    store.setState({ siteHosts: siteHosts });
};

export const setLoading = (store, state) => {
    const siteHosts = { ...store.state.siteHosts };
    siteHosts.loading = state;
    store.setState({ siteHosts: siteHosts });
};