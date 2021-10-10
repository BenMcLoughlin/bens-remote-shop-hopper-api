import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import Counters from "../../components/Counters";
import SearchForm from "../../components/SearchForm";
import Products from "../Products";

import useGlobal from "../../controller/store";
import Metrics from './Metrics';
import SelectShop from './SelectShop';
import { updateMetrics } from '../../lib/requests/updateMetrics';
// import { updateProducts } from '../../controller/updateProducts';
import { updateAll } from '../../controller/updateAll';

import { updateProducts } from '../../lib/requests/updateProducts.js';

const Display = (props) => {
    const { shopsList, set, selected } = props;
    const [ uploadedSuccess, setUpLoaded ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ globalState, globalActions ] = useGlobal();

    // const searchSubmit = (e) => {
    //     e.preventDefault();
    //     // const username = e.target.username.value;
    //     globalActions.extract.extractSingle(businessName, domain);
    // };

    const _updateProducts = async (params) => {
        setIsLoading(true);
        // const success = await updateProducts(params);
        const success = await globalActions.extractSingle(params);

        console.log('globalActions:', globalActions);

        // if (success) {
        //     setUpLoaded(success.result);
        //     setIsLoading(false);

        //     return true;
        // }
    };

    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <SearchForm />
                    <Counters />
                    <Products />
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

Display.propTypes = {
    shopsList: PropTypes.array,
    set: PropTypes.object,
    selected: PropTypes.object
};

export default Display;