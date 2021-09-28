import React, { useState, useEffect } from 'react';
import { startCase } from '../../utils/strings';
import { formatDate } from '../../utils/dates/forDisplay';




const Metrics = ({ header, selected, shopsList, isShopify }) => {
    const now = new Date();
    const [totalItems, setTotalItems] = useState(0);
    const [date, setDate] = useState(now); // todo

    useEffect(() => {
        const updateMetrics = async () => {
            const res = await fetch('/api/dbMetrics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(isShopify ? 'all' : header)
            });
            const data = await res.json();
            console.log(`GET NUMBER OF PRODUCTS:`, data);

            console.log(data);
            setTotalItems(data.result);
            setDate(now);
        };

        updateMetrics();
    }, [header]);

    return (
        <div className="wrapper">
            <div className="header">
                {startCase(header)}
            </div>
            <div className="row">
                <div className="right">
                    <div className="value">{totalItems}</div>
                    <div className="title">{startCase(header)}</div>
                </div>

                <div className="right">
                    <div className="value">{formatDate(date)}</div>
                    <div className="title">Last Update</div>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 2rem;
                    height: 15rem;
                    display: flex;
                    align-content: center;
                    align-items: left;
                    width: 80rem;
                    flex-direction: column;
                }
                .header {
                    height: 5rem;
                    width: 38rem;
                    font-size: 2.4rem;
                    padding: 1rem;
                    text-align: left;
                }
                .row {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    padding: 2rem;
                    height: 7rem;
                    align-content: center;
                    width: 80rem;
                }
                .right {
                    min-width: 30rem;
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
                    font-size: 2rem;
                    // width: 10rem;
                    text-align: center;
                    font-weight: bold;
                    padding: 0.3rem;
                    border-bottom: 1px solid #d5d5d5;
                }
                .title {
                    padding: 1rem;
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
};

export default Metrics;
