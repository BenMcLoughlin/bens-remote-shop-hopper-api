export const setData = (store, state) => {
    const templateClass = { ...store.state.templateClass };
    templateClass.data = state;
    store.setState({ templateClass: templateClass });
};

export const setLoading = (store, state) => {
    const templateClass = { ...store.state.templateClass };
    templateClass.loading = state;
    store.setState({ templateClass: templateClass });
};
