import React from 'react';
import Metrics from './Metrics';
import Button from '../buttons/Button';
import SelectShop from './SelectShop';

const Display = (props) => {
    const { shopsList, set, selected } = props;

    const updateProducts = async () => {
        await fetch('/api/updateProducts', {
            method: 'POST',
            body: JSON.stringify(props.selected),
        });
    };

    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <div className="metricsControl">
                        <Metrics header={selected.siteHost} {...props} />
                        <Button
                            text={`Load All ${selected.siteHost} Shops`}
                            onClick={() => {
                                set.selectedBusinessName('');
                                updateProducts();
                            }}
                        />
                    </div>
                    <div className="metricsControl">
                        <Metrics header={selected.businessName} {...props} />
                        <Button
                            text={`Load Only ${selected.businessName}`}
                            onClick={() => {
                                set.selectedSiteHost('');
                                updateProducts();
                            }}
                        />
                    </div>
                </div>

                <SelectShop shopsList={shopsList} set={set} selected={selected} />
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 3rem;
                    display: flex;
                    height: 40rem;
                    width: 85%;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    height: 120rem;
                }
                .top {
                    height: 35rem;
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
