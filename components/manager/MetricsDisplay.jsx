import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useGlobal from '../../globalState/store';
import { startCase } from '../../utils/strings';
import { formatDate } from '../../utils/dates/forDisplay';
import Button from '../../components/buttons/Button';
import { updateMetrics } from '../../requests/updateMetrics';
import fetchShopStatus from "../../requests/fetchShopStatus";

const MetricsDisplay = ({ header, selected, buttonClick, isHost, isLoading, buttonTitle, disabled }) => {
    const now = new Date();
    const [ globalState ] = useGlobal();
    const [ totalItems, setTotalItems ] = useState(0);
    const [ date, setDate ] = useState('TBA');

    useEffect(() => {
        updateMetrics(isHost, header).then((data) => {
            setTotalItems(data.result);
        });

    }, [ header, globalState.status ]);

    useEffect(() => {
        const _getShopStatus = async () => {
            const eachShop = await fetchShopStatus();

            if (eachShop) {
                eachShop.map((d) => {
                    if (d.business_name === header || isHost) {
                        return (
                            setDate(d.updated_at)
                        );
                    }

                    return true;
                });
            }
        };

        _getShopStatus();
    }, [ header, globalState.status ]);

    return (
        <div className="wrapper">
            <div className="header-row">
                {!isHost &&
                    <div className="header">
                        {startCase(header)}
                    </div>
                }
                {!disabled &&
                    <Button
                        loading={isLoading}
                        text={buttonTitle}
                        onClick={buttonClick}
                        disabled={disabled}
                        backgroundColor={isHost ? '#1469eb' : '#25E9AF'}
                    />
                }
            </div>
            <div className="row">
                <div className="column">
                    <p className="value">{totalItems}</p>
                    <p className="title">{startCase(header)} items in the database</p>
                </div>

                <div className="column">
                    {/* todo date format */}
                    <p className="value">{formatDate(date).substring(5, 10)} {formatDate(date).substring(11, 19)}</p>
                    <p className="title">Last Update</p>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                .header {
                    font-size: 2.0rem;
                    padding: 1rem;
                    text-align: left;,
                    color: white;
                }
                .header-row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    color: white;
                }
                .row {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    padding: 1rem;
                    color: white;
                }
                .column {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: center;
                    width: 10rem;
                    padding: 1rem;
                    border-right: 1px solid #d5d5d5;
                }
                .highlight {
                    height: 5rem;
                    width: 12rem;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .value {
                    height: 3.5rem;
                    font-size: 1rem;
                    // width: 10rem;
                    text-align: center;
                    font-weight: bold;
                    padding: 0.3rem;
                    border-bottom: 1px solid #d5d5d5;
                }
                .title {
                    padding: 1rem;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                }
            `}</style>
        </div>
    );
};

MetricsDisplay.propTypes = {
    header: PropTypes.string,
    selected: PropTypes.string,
    refresh: PropTypes.bool,
    buttonClick: PropTypes.func,
    isHost: PropTypes.bool,
    isLoading: PropTypes.bool,
    buttonTitle: PropTypes.string,
    disabled: PropTypes.bool
};

export default MetricsDisplay;