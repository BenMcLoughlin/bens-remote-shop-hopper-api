import React from "react";
import Image from 'next/image';

import useGlobal from "../globalState/store";
import logoSrc from '../public/assets/loader/loading-buffering-grey.gif';

const Counter = () => {
    const [ globalState ] = useGlobal();
    const { requests, success, fail, loading } = globalState.counter;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
            <p style={{ marginRight: 20 }}>{requests} Requests <br />
                <span className="success">{success} Success</span> and{" "}
                <span className="fail">{fail} Fails</span>
            </p>
            {loading && <Image src={logoSrc} className="loading" width={40} height={40} />} 
        </div>
    );
};

export default Counter;