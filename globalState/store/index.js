import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
    counter: {
        requests: 0,
        result: false,
        success: 0,
        fail: 0,
        loading: false
    },
    products: {
        data: [],
        hotItems: [],
        result: false,
        query: {
            column: 'buckets',
            metric: 'Athletic'
        },
        cursor: 0,
        amount: 12,
        status: 'INITIAL',
        loading: false
    },
    city: '',
    siteHosts: {
        list: [],
        status: 'INITIAL',
        loading: false
    },
    status: 'INITIAL',
    shops: {
        data: [],
        result: false,
        status: 'INITIAL',
        loading: false
    },
    loading: false
};

const useGlobal = useGlobalHook(initialState, actions);

export default useGlobal;