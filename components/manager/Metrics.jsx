import React, { useState, useEffect } from 'react';
import { startCase } from '../../utils/strings';
import { formatDate } from '../../utils/dates/forDisplay';
import { updateMetrics } from '../../lib/requests/updateMetrics'

const Metrics = ({ header, selected, refresh, shopsList, isShopify }) => {
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
            <div className="header">
                {startCase(header)}
            </div>
            <div className="row">
                <div className="column">
                    <p className="value">{totalItems}</p>
                    <p className="title">{startCase(header)}</p>
                </div>

                <div className="column">
                    <p className="value">{formatDate(date)}</p>
                    <p className="title">Last Update</p>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 2rem;
                    display: flex;
                    align-content: center;
                    align-items: left;
                    flex-direction: column;
                }
                .header {
                    height: 5rem;
                    width: 20rem;
                    font-size: 2.4rem;
                    padding: 1rem;
                    text-align: left;
                }
                .row {
                    display: flex;
                    flex-direction: row;
                    // flex-wrap: wrap;
                    justify-content: flex-start;
                    padding: 2rem;
                    // height: 7rem;
                    align-content: center;
                }
                .column {
                    min-width: 5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: center;
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
