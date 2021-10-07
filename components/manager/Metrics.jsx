import React, { useState, useEffect } from 'react';
import { startCase } from '../../utils/strings';
import Button from '../buttons/Button';
import { formatDate } from '../../utils/dates/forDisplay';
import { updateMetrics } from '../../lib/requests/updateMetrics'

const Metrics = ({ header, selected, refresh, buttonClick, isShopify, isLoading, buttonTitle, disabled }) => {
    const now = new Date();
    const [totalItems, setTotalItems] = useState(0);
    const [date, setDate] = useState(now); // todo

    useEffect(() => {
        updateMetrics(isShopify, header).then((data) => {
            setTotalItems(data.result);
            setDate(now);
        })

    }, [header, refresh]);

    return (
        <div className="wrapper">
            <div className="header-row">
                <div className="header">
                    {startCase(header)}
                </div>
                {!disabled &&
                    <Button
                        loading={isLoading}
                        text={buttonTitle}
                        onClick={buttonClick}
                        disabled={disabled}
                    />
                }
            </div>
            <div className="row">
                <div className="column">
                    <p className="value">{totalItems}</p>
                    <p className="title">{startCase(header)} items in the database</p>
                </div>

                <div className="column">
                    <p className="value">{formatDate(date)}</p>
                    <p className="title">Last Update</p>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    display: flex;
                    align-content: center;
                    align-items: left;
                    flex-direction: column;
                }
                .header {
                    font-size: 2.0rem;
                    padding: 1rem;
                    text-align: left;
                }
                .header-row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }
                .row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .column {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: center;
                    width: 40rem;
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

export default Metrics;
