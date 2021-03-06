import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Moment from 'react-moment';
import styled from 'styled-components';

import useGlobal from 'frontend/globalState/store';
import { camelCase } from 'frontend/utils/strings';
import { Button } from 'frontend/components';
import addShops from 'backend/requests/addShops';
import fetchShops from 'backend/requests/fetchShops';
import loaderGif from 'public/assets/loader/octo_loader.gif';
import { CreateShopModel } from './CreateShopModel';

export const SelectShop = ({ set, selected }) => {
    const [globalState, globalActions] = useGlobal();
    const [list, setList] = useState([]);
    const [statuses, setStatuses] = useState({});
    const [addShopModel, toggleAddShopModel] = useState(false);
    const [loading, setLoading] = useState(false || '');

    useEffect(() => {
        const _getShopStatus = async () => {
            // setLoading(true);
            const shops = await globalActions.shops.shopStatuses();

            let businessStatus = {};

            if (shops) {
                shops.map((d) => (businessStatus[d.business_name] = {
                    products: d.products,
                    updatedAt: d.updated_at
                }));

                setStatuses(businessStatus);
                // setLoading(false);
            }
        };

        _getShopStatus();
    }, [globalState.status]);

    useEffect(() => {
        const _getShopList = async () => {
            setLoading(true);
            const uniqueShops = await fetchShops();

            if (uniqueShops) {
                globalActions.shops.setShops(uniqueShops);
                const businessNames = uniqueShops.map((d) => d.business_name);

                setList(businessNames);
                setLoading(false);
            }
        };

        _getShopList();
    }, [addShopModel]);

    const _toggleAddShopModel = () => {
        toggleAddShopModel(!addShopModel);
    };

    const _addShop = async (shopData) => {
        setLoading(true);
        const result = await addShops(shopData);

        if (result.error) {
            return alert(result.error);
        }

        setLoading(false);
        _toggleAddShopModel();
    };

    return (
        <>
            <Wrapper>
                {addShopModel && (
                    <button className="send" onClick={() => _addShop('all')}>
                        Add All Shops from local JSON file
                    </button>
                )}

                {addShopModel && <CreateShopModel addShop={_addShop} close={_toggleAddShopModel} />}

                {loading ? (
                    <div className="header">
                        <Image src={loaderGif} className="loading" width={800} height={600} />
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="header">
                            <h4>Available Stores</h4>
                            <h4 className="button" onClick={_toggleAddShopModel}>
                                Add
                            </h4>
                        </div>

                        <Row>
                            {list.map((businessName) => (
                                <div
                                    key={businessName}
                                    className={`businessName ${camelCase(businessName)}`}
                                    onClick={() => set.selectedBusinessName(businessName)}>
                                    <div className="title">{businessName}</div>
                                    {statuses[businessName] && (
                                        <div className="updateColumn">
                                            <div>
                                                Most Recent:{' '}
                                                <span className="update">
                                                    {statuses[businessName]?.products}
                                                </span>
                                            </div>
                                            <div className="time">
                                                <Moment format="MM/DD hh:ssa">
                                                    {statuses[businessName]?.updatedAt}
                                                </Moment>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Row>
                    </React.Fragment>
                )}
            </Wrapper>
            <style jsx>{`
                .header {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    text-align: center;
                }
                .businessName {
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    justify-content: space-around;
                    width: 100%;
                    max-width: 300px;
                    margin: 1rem;
                    padding: 2rem;
                    border-radius: 0.05rem;
                    position: relative;
                    cursor: pointer;
                    transition: all 0.7s ease;
                    justify-content: left;
                    background: #f7f7f7;
                    box-shadow: 11px 11px 22px #dedede, -11px -11px 22px #ffffff;
                }
                .${camelCase(selected.businessName)} {
                    background: #485056;
                    color: white;
                }
                .title {
                    font-weight: bold;
                    font-size: 1.2rem;
                    width: 11rem;
                    text-align: left;
                }
                .updateColumn {
                    display: flex;
                    flex-direction: column;
                    justify-content: left;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #e7e7e7a6;
                    padding: 0.2rem;
                    width: 100%;
                }
                .time {
                    font-size: 0.8rem;
                }
                .update {
                    font-size: 0.8rem;
                    color: green;
                }
            `}</style>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    flex-direction: row;
    text-align: right;
    min-height: 17rem;
    width: 100%;
    gap: 2rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
`;

SelectShop.propTypes = {
    set: PropTypes.object,
    selected: PropTypes.object
};
