import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
    counters: {
        requests: 0,
        success: 0,
        fail: 0
    },
    status: "INITIAL",
    products: []
};

// const useGlobal = useGlobalHook(React, initialState, actions); todo
const useGlobal = useGlobalHook(initialState, actions);

export default useGlobal;