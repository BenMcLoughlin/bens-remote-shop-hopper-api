import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/loading-buffering-grey.gif';

const propTypes = {
    loading: PropTypes.bool
};

export const Counter = ({ loading }) => {
    const [globalState] = useGlobal();
    const { requests, success, fail } = globalState.counter;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
            <p style={{ marginRight: 20 }}>
                {requests} Requests <br />
                <span className="success">{success} Success</span> and{' '}
                <span className="fail">{fail} Fails</span> <br />
            </p>
            {loading && <Image src={loaderGif} className="loading" width={40} height={40} />}
        </div>
    );
};

Counter.propTypes = propTypes;