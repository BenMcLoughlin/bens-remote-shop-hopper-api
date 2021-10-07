import React, { useState } from 'react';
import Metrics from './Metrics';
import SelectShop from './SelectShop';
import { updateMetrics } from '../../lib/requests/updateMetrics';
import { updateProducts } from '../../lib/requests/updateProducts';

const Display = (props) => {
    const { shopsList, set, selected } = props;
    const [ uploadedSuccess, setUpLoaded ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    const _updateProducts = async (params) => {
        setIsLoading(true);
        const success = await updateProducts(params);

        if (success) {
            setUpLoaded(success.result);
            setIsLoading(false);

            return true;
        }

        setUpLoaded('failed');
        setIsLoading(false);
        return alert("Product acquisition failed, please try again.");
    };

    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <div>
                        <Metrics
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
                        />
                    </div>
                    {
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
                                    // set.selectedSiteHost(''); todo
                                    _updateProducts(props.selected).then(() => {
                                        updateMetrics(true, selected.businessName);
                                    });
                                }}
                                disabled={false}
                            />
                        </div>
                    }
                </div>

                <SelectShop
                    shopsList={shopsList}
                    set={set}
                    selected={selected}
                    refresh={uploadedSuccess}
                />
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

export default Display;