import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
    counters: {
        requests: 0,
        result: {},
        success: 0,
        fail: 0
    },
    status: "INITIAL",
    products: [],
    shops: []
};

const useGlobal = useGlobalHook(initialState, actions);

export default useGlobal;