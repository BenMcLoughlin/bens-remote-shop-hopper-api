export const addRequest = (store) => {
    const counter = { ...store.state.counter };
    console.log('store:', store);

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

export const addResult = (store, result) => {
    const counter = { ...store.state.counter };
    counter.result = result;
    store.setState({ counter: counter });
};

export const clearRequests = (store) => {
    const counter = { ...store.state.counter };
    counter.fail = 0;
    counter.success = 0;
    counter.requests = 0;
    counter.result = false;
    store.setState({ counter: counter });
};

export const setLoading = (store, state) => {
    const counter = { ...store.state.counter };
    counter.loading = state;
    store.setState({ counter: counter });
};