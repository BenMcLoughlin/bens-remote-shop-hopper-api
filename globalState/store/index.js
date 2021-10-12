import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
    counter: {
        requests: 0,
        result: {},
        success: 0,
        fail: 0,
        loading: false
    },
    status: "INITIAL",
    products: [],
    shops: [],
    loading: false
};

const useGlobal = useGlobalHook(initialState, actions);

export default useGlobal;