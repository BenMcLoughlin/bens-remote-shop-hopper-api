import React from "react";
import Image from 'next/image';

import useGlobal from "../globalState/store";
import logoSrc from '../public/assets/loader/loading-buffering-grey.gif';

const Counter = () => {
    const [ globalState, globalActions ] = useGlobal();
    const { requests, success, fail, loading } = globalState.counters;

    return (
        <p style={{ marginLeft: 20 }}>
            {requests} Requests {loading && <Image src={logoSrc} className="loading" width={40} height={40} />} <br />
            <span className="success">{success} Success</span> and{" "}
            <span className="fail">{fail} Fails</span>
        </p>
    );
};

export default Counter;