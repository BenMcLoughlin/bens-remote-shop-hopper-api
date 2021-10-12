export const addRequest = (store) => {
    const newCounters = { ...store.state.counters };
    newCounters.requests++;
    store.setState({ counters: newCounters });
};

export const addSuccess = (store) => {
    const newCounters = { ...store.state.counters };
    newCounters.success++;
    store.setState({ counters: newCounters });
};

export const addFail = (store) => {
    const newCounters = { ...store.state.counters };
    newCounters.fail++;
    store.setState({ counters: newCounters });
};

export const addResult = (store, result) => {
    const newCounters = { ...store.state.counters };
    newCounters.result = result;
    store.setState({ counters: newCounters });
};