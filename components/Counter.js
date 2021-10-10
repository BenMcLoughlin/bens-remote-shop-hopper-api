import React from "react";

import useGlobal from "../globalState/store";

const Counter = () => {
    const [ globalState, globalActions ] = useGlobal();
    const { requests, success, fail } = globalState.counters;

    return (
        <p style={{ marginLeft: 20 }}>
            {requests} Requests <br />{" "}
            <span className="success">{success} Success</span> and{" "}
            <span className="fail">{fail} Fails</span>
        </p>
    );
};

export default Counter;