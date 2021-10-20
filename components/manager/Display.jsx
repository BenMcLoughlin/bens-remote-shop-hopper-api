import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import useGlobal from "globalState/store";
import { updateMetrics } from 'requests/updateMetrics';

const Display = (props) => {
    const { shopsList, set, selected } = props;
    const [ uploadedSuccess, setUpLoaded ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ globalState, globalActions ] = useGlobal();

    const _updateProducts = async (params) => {
        setIsLoading(true);
        // const success = await updateProducts(params);
        const success = await globalActions.products.single(params);

        if (success) {
            setUpLoaded(success.result);
            setIsLoading(false);

            return true;
        }
    };

    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <div>
                        <h1>TBA......</h1>
                        {/* <Metrics
                            {...props}
                            header={selected.siteHost}
                            refresh={uploadedSuccess}
                            isShopify
                            isLoading={isLoading}
                            buttonTitle={`Load All ${ selected.siteHost } Shops`}
                            buttonClick={() => {
                                set.selectedBusinessName('');

                                _updateProducts({
                                    siteHost: selected.siteHost,
                                    businessName: null,
                                    domain: null
                                }).then(() => {
                                    updateMetrics(true, selected.siteHost);
                                });
                            }}
                            disabled={selected.businessName}
                        /> */}
                    </div>

                    {/* {
                        uploadedSuccess === 'failed' &&
                        <p className="red">Product acquisition failed.</p>
                    }
                    {
                        selected.businessName &&
                        <div>
                            <Metrics
                                {...props}
                                header={selected.businessName}
                                refresh={uploadedSuccess}
                                isShopify={false}
                                isLoading={isLoading}
                                buttonTitle={`Load ${ selected.businessName }`}
                                buttonClick={() => {
                                    // set.selectedSiteHost('');
                                    _updateProducts(props.selected).then(() => {
                                        updateMetrics(true, selected.businessName);
                                    });
                                }}
                                disabled={false}
                            />
                        </div>
                    }  */}
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 3rem;
                    display: flex;
                    width: 85%;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    // height: 120rem;
                }
                .spinner {
                }
                .top {
                    width: 100%;
                }
            `}</style>
        </>
    );
};

Display.propTypes = {
    shopsList: PropTypes.array,
    set: PropTypes.object,
    selected: PropTypes.object
};

export default Display;