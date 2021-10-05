import React, { useState } from 'react';
import Metrics from './Metrics';
import Button from '../buttons/Button';
import SelectShop from './SelectShop';
import { updateMetrics } from './Metrics';

const Display = (props) => {
    const { shopsList, set, selected } = props;
    const [uploadedSuccess, setUpLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const updateProducts = async () => {
        setIsLoading(true);
        const res = await fetch('/api/updateProducts', {
            method: 'POST',
            body: JSON.stringify(props.selected),
        });

        if (res) {
            const uploaded = await res.json();
            console.log('uploaded:', uploaded.result.productsUploaded)
            setUpLoaded(uploaded.result.productsUploaded);
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <div className="metricsControl">
                        <Metrics
                            header={selected.siteHost}
                            total={uploadedSuccess}
                            isShopify
                            {...props}
                        />
                        <Button
                            loading={isLoading}
                            text={`Load All ${selected.siteHost} Shops`}
                            onClick={() => {
                                set.selectedBusinessName('');
                                updateProducts().then(() => {
                                    updateMetrics(true, selected.siteHost);
                                })
                            }}
                            disabled={selected.businessName}
                        />
                    </div>
                    {
                        selected.businessName &&
                        <div className="metricsControl">
                            <Metrics
                                header={selected.businessName}
                                total={uploadedSuccess}
                                isShopify={false}
                                {...props}
                            />
                            <Button
                                loading={isLoading}
                                text={`Load Only ${selected.businessName}`}
                                onClick={() => {
                                    // set.selectedSiteHost(''); todo
                                    updateProducts().then(() => {
                                        updateMetrics(true, selected.siteHost)
                                    })
                                }}
                            />
                        </div>
                    }
                </div>

                <SelectShop shopsList={shopsList} set={set} selected={selected} />
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
                    // height: 35rem;
                    width: 100%;
                }
                .metricsControl {
                    height: 15rem;
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </>
    );
};

export default Display;
