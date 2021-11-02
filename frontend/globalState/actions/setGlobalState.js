import { merge } from 'frontend/utils/objects';

export const setGlobalState = (store, payload) => {
    console.log('payload: ', payload);
    const updatedState = merge(store.state, payload);
    store.setState(updatedState);
};
