import React, { useState, useEffect } from 'react';
import { camelCase } from '../../utils/strings';
import addNewShop from "../../lib/requests/addNewShop";
import fetchShops from "../../lib/requests/fetchShops";
import fetchShopStatus from "../../lib/requests/fetchShopStatus";
import CreateShopModal from "../../components/CreateShopModal";

const SelectShop = ({ set, selected, shopsList, refresh }) => {
    const [list, setList] = useState([]);
    const [statuses, setStatuses] = useState({});
    const [addShopModal, toggleAddShopModal] = useState(false);
    const [loading, setLoading] = useState(false || "");

    useEffect(() => {
        const _getShopList = async () => {
            setLoading(true);
            const uniqueShops = await fetchShops();

            if (uniqueShops) {
                const businessNames = uniqueShops.map((d) => d.businessName);
                setList(businessNames);
                setLoading(false);
            }
        };

        _getShopList();
    }, [addShopModal]);

    useEffect(() => {
        const _getShopStatus = async () => {
            setLoading(true);
            const eachShop = await fetchShopStatus();

            let businessStatus = {};

            if (eachShop) {
                console.log('eachShop:', eachShop)
                eachShop.map((d) => (
                    businessStatus[d.businessName] = {
                        products: d.products,
                        updatedAt: d.updatedAt
                    }
                ));
                setStatuses(businessStatus);
                setLoading(false);
            }
        };

        _getShopStatus();
    }, [refresh]);

    const _toggleAddShopModal = () => {
        toggleAddShopModal(!addShopModal);
    };

    const _addShop = async (shopData) => {
        const result = await addNewShop(shopData);

        if (result.error) {
            return alert(result.error)
        }

        _toggleAddShopModal();
    };

    return (
        <>
            <div className="wrapper">
                {
                    addShopModal &&
                    <button className="send" onClick={() => _addShop('all')}>
                        Add All Shops from local file
                    </button>
                }

                {
                    addShopModal &&
                    <CreateShopModal
                        addShop={_addShop}
                        close={_toggleAddShopModal}
                    />
                }

                {
                    loading ?
                        <h3>Loading....</h3>
                        :
                        <React.Fragment>
                            <div className="header">
                                <h4>Available Stores</h4>
                                <h4 className="button" onClick={_toggleAddShopModal}>Add</h4>
                            </div>

                            <div className="row">
                                {list.map((businessName) => (
                                    <div
                                        key={businessName}
                                        className={`businessName ${camelCase(businessName)}`}
                                        onClick={() => set.selectedBusinessName(camelCase(businessName))}
                                    >
                                        <div className="title">{businessName}</div>
                                        {statuses[camelCase(businessName)] &&  // todo: Date format
                                            <div className="updateColumn">
                                            <div>Most Recent: <span className="update">{statuses[camelCase(businessName)]?.products}</span></div>
                                                <div className="time">{statuses[camelCase(businessName)]?.updatedAt.substring(0, 19)}</div>
                                            </div>
                                        }
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                }
            </div>
            <style jsx>{`
                .wrapper {
                    width: 100%;
                    min-height: 70rem;
                    display: flex;
                    flex-direction: column;
                    border-top: 1px solid grey;
                    
                }
                .header {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 1rem;
                    text-align: center;
                    margin-bottom: 1rem;
                }
                .row {
                    text-align: right;
                    min-height: 17rem;
                    width: 90%;
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                    gap: 2rem;
                    justify-content: start;
                }
                .businessName {
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    justify-content: space-around;
                    width: 44%;
                    gap: 1rem;
                    padding: 2rem;
                    border-radius: 5px;
                    position: relative;
                    cursor: pointer;
                    transition: all 0.7s ease;
                    justify-content: left;
                    background: #f7f7f7;
                    box-shadow: 11px 11px 22px #dedede, -11px -11px 22px #ffffff;
                }
                .${selected.businessName} {
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
                    padding: .2rem;
                    width: 100%;
                }
                .time {
                    font-size: .8rem;
                }
                .update {
                    font-size: .8rem;
                    color: green;
                }
            `}</style>
        </>
    );
};

export default SelectShop;