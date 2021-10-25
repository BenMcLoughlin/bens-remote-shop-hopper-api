import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import useGlobal from 'globalState/store';
import { startCase } from 'utils/strings';
import Button from 'components/buttons/Button';
import { updateMetrics } from 'requests/updateMetrics';

const MetricsDisplay = ({ header, buttonClick, cancel, isHost, loading, buttonTitle, disabled }) => {
    const [ globalState, globalActions ] = useGlobal();
    const [ totalItems, setTotalItems ] = useState(0);
    const [ date, setDate ] = useState('');

    useEffect(() => {
        updateMetrics(isHost, header).then((data) => {
            setTotalItems(data.result);
        });

    }, [ header, globalState.status ]);

    useEffect(() => {
        const _getShopStatus = async () => {
            const shops = await globalActions.shops.shopStatuses();
            setDate("NULL");

            if (shops) {
                shops.map((d) => {
                    console.log('run:', header, d.business_name);
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
            <HeaderRow>
                {!isHost &&
                    <div className="header">
                        {startCase(header)}
                    </div>
                }
                {!disabled &&
                    <Button
                        loading={loading}
                        text={buttonTitle}
                        onClick={buttonClick}
                        disabled={disabled}
                        backgroundColor={isHost ? '#1469eb' : '#25E9AF'}
                    />
                }
                {loading &&
                    <p onClick={cancel} className="cancel">Cancel</p>
                }
            </HeaderRow>
            <Row>
                <div className="column">
                    <p className="value">{totalItems}</p>
                    <p className="title">{startCase(header)} items in the database</p>
                </div>

                <div className="column">
                    <p className="value">
                        {moment(date).format("MM/DD hh:ssa") !== 'Invalid date' ? moment(date).format("MM/DD hh:ssa") : 'No record'}
                    </p>
                    <p className="title">Last Update</p>
                </div>
            </Row>
            <style jsx>{`
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    padding: 1rem;
                }
                .header {
                    font-size: 2.0rem;
                    padding: 1rem;
                    text-align: left;,
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
                    // width: 10rem;
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
                    height: 2.5rem;
                    font-size: 1rem;
                    text-align: center;
                    font-weight: bold;
                    padding: 0.3rem;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    border-bottom: 1px solid #d5d5d5;
                }
                .title {
                    padding: 20px;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: right;
                }
                .cancel {
                    padding: 5px;
                    font-size: .8rem;
                    color: red;
                }       
            `}</style>
        </div>
    );
};

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    color: white;
    @media (max-width: 680px) {
        padding: 5px;
        width: unset;
        align-items: flex-end;
        flex-direction: column;
        justify-content: space-around;
    }
`;

const HeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    @media (max-width: 680px) {
        flex-direction: column;
        justify-content: space-around;
    }
`;

MetricsDisplay.propTypes = {
    header: PropTypes.string,
    loading: PropTypes.bool,
    cancel: PropTypes.func,
    refresh: PropTypes.bool,
    buttonClick: PropTypes.func,
    isHost: PropTypes.bool,
    buttonTitle: PropTypes.string,
    disabled: PropTypes.bool
};

export default MetricsDisplay;