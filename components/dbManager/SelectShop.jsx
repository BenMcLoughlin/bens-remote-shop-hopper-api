import React, { useState, useEffect } from 'react';
import { camelCase } from '../../utils/strings';

const SelectShop = ({ set, selected, shopsList }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const shopList = shopsList.filter(
            (d) => d.site_host.toLowerCase() === selected.siteHost.toLowerCase()
        );

        const businessNames = shopList.map((d) => d.business_name);
        setList(businessNames);
    }, [selected.siteHost]);

    return (
        <>
            <div className="wrapper">
                <div className="header">Available Stores</div>
                <div className="row">
                    {list.map((businessName) => (
                        <div
                            className={`businessName ${camelCase(businessName)}`}
                            onClick={() => set.selectedBusinessName(camelCase(businessName))}
                        >
                            <div className="title">{businessName}</div>
                            <div className="value">32</div>
                        </div>
                    ))}
                </div>
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
                    height: 5rem;
                    width: 24rem;
                    font-size: 3rem;
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
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-content: center;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    height: 3.5rem;
                    width: 18.5rem;
                    gap: 1rem;
                    padding-left: 2rem;
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
                    border-right: 1px solid grey;
                }
                .value {
                    font-weight: light;
                    font-size: 1.2rem;
                    width: 4rem;
                    text-align: center;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default SelectShop;
