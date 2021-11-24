import useGlobalHook from 'use-global-hook';

import * as actions from '../actions';

const initialState = {
    counter: {
        requests: 0,
        result: false,
        success: 0,
        fail: 0,
        loading: false
    },
    templateClass: {
        data: [],
        all: [],
        result: false,
        query: {},
        status: 'INITIAL',
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
    user: {
        hasAccount: false,
        birthdate: 1988,
        gender: '',
        location: {
            lat: 49.8,
            lng: -119.6,
            address: ''
        },
        favourite: {
            styles: [],
            brands: [],
            venders: []
        },
        size: {
            top: '',
            shoes: '',
            bottom: ''
        },
        styles: [],
        brands: []
    },
    ui: {
        onboardPageNum: 0
    },
    loading: false
};

const useGlobal = useGlobalHook(initialState, actions);

export default useGlobal;
