export const addRequest = (store) => {
    const counter = { ...store.state.counter };
    counter.requests++;
    store.setState({ counter: counter });
};

export const addSuccess = (store) => {
    const counter = { ...store.state.counter };
    counter.success++;
    store.setState({ counter: counter });
};

export const addFail = (store) => {
    const counter = { ...store.state.counter };
    counter.fail++;
    store.setState({ counter: counter });
};

export const clearRequests = (store) => {
    const counter = { ...store.state.counter };
    counter.loading = false;
    counter.fail = 0;
    counter.success = 0;
    counter.requests = 0;
    store.setState({ counter: counter });
};

export const setLoading = (store, state) => {
    const counter = { ...store.state.counter };
    counter.loading = state;
    store.setState({ counter: counter });

    // store.setState({ 
    //     counter: {
    //         ...store.state.counter,
    //         loading: state
    //     }
    // });
};