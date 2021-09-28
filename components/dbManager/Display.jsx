import React, { useState } from 'react';
import Metrics from './Metrics';
import Button from '../buttons/Button';
import SelectShop from './SelectShop';

const Display = (props) => {
    const { shopsList, set, selected } = props;

    const [isLoading, setIsLoading] = useState(false);

    const updateProducts = async () => {
        setIsLoading(true);
        const uploaded = await fetch('/api/updateProducts', {
            method: 'POST',
            body: JSON.stringify(props.selected),
        });
        uploaded && setIsLoading(false);
        console.log(uploaded);
    };
    console.log('selected: ', selected);
    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <div className="metricsControl">
                        <Metrics header={selected.siteHost} isShopify {...props} />
                        <Button
                            text={`Load All ${selected.siteHost} Shops`}
                            onClick={() => {
                                set.selectedBusinessName('');
                                updateProducts();
                            }}
                            disabled={selected.businessName}
                        />
                    </div>
                    {
                        selected.businessName &&
                        <div className="metricsControl">
                            <Metrics header={selected.businessName} isShopify={false} {...props} />
                            <Button
                                text={`Load Only ${selected.businessName}`}
                                onClick={() => {
                                    // set.selectedSiteHost(''); todo
                                    updateProducts();
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