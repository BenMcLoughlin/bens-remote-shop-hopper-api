import React from 'react';
import { startCase } from '../../utils/strings';

const Metrics = ({ header, selected, shopsList }) => {
    const metrics = [
        { value: 32, title: 'localStores' },
        { value: 32, title: 'localStores' },
        { value: 32, title: 'localStores' },
        { value: 32, title: 'localStores' },
        ,
    ];

    return (
        <div className="wrapper">
            <div className="header">{startCase(header)}</div>
            <div className="row">
                <div className="left">
                    <div className="date">21 Sept 2021</div>
                    <span>Last Update</span>
                </div>
                {metrics.map(({ value, title }) => (
                    <div className="metric">
                        <div className="value">{value}</div>
                        <div className="title">{title}</div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 2rem;
                    height: 15rem;
                    display: flex;
                    align-content: center;
                    align-items: left;
                    width: 80rem;
                    display: flex;
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
                    padding: 2rem;
                    height: 7rem;
                    display: flex;
                    align-content: center;
                    align-items: center;
                    width: 80rem;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }
                .left {
                    height: 6rem;
                    width: 14rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid #d5d5d5;
                }
                .date {
                    font-size: 1.2rem;
                    border-bottom: 1px solid #d5d5d5;
                    height: 3rem;
                    padding: 1rem;
                }

                span {
                    font-size: 0.8rem;
                    height: 3rem;
                    padding: 1rem;
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
                    width: 10rem;
                    text-align: center;
                    font-weight: bold;
                    padding: 0.3rem;
                    border-bottom: 1px solid #d5d5d5;
                }
                .title {
                    height: 3rem;
                    width: 10rem;
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
