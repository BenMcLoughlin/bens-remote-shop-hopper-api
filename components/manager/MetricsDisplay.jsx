import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import useGlobal from 'globalState/store';
import { startCase } from 'utils/strings';
import { Button } from 'components/buttons/Button';
import { updateMetrics } from 'requests/updateMetrics';

const MetricsDisplay = ({
    headerTitle,
    buttonClick,
    cancel,
    isHost,
    loading,
    buttonTitle,
    disabled,
}) => {
    const [globalState, globalActions] = useGlobal();
    const [totalItems, setTotalItems] = useState(0);
    const [date, setDate] = useState('');

    useEffect(() => {
        updateMetrics(isHost, headerTitle).then((data) => {
            setTotalItems(data.result);
        });
    }, [headerTitle, globalState.status]);

    useEffect(() => {
        const _getShopStatus = async () => {
            const shops = await globalActions.shops.shopStatuses();
            setDate('NULL');

            if (shops) {
                shops.map((d) => {
                    if (d.business_name === headerTitle || isHost) {
                        return setDate(d.updated_at);
                    }

                    return true;
                });
            }
        };

        _getShopStatus();
    }, [headerTitle, globalState.status]);

    return (
        <Wrapper>
            <HeaderRow>
                {!isHost && <HeaderTitle>{startCase(headerTitle)}</HeaderTitle>}
                {!disabled && (
                    <Button
                        loading={loading}
                        title={buttonTitle}
                        onClick={buttonClick}
                        disabled={disabled}
                        backgroundColor={isHost ? '#1469eb' : '#25E9AF'}
                    />
                )}
            </HeaderRow>
            <Row>
                <Column>
                    <Value>{totalItems}</Value>
                    <NoOfItems>{startCase(headerTitle)} items in the database</NoOfItems>
                </Column>

                <Column>
                    <Value>
                        {moment(date).format('MM/DD hh:ssa') !== 'Invalid date'
                            ? moment(date).format('MM/DD hh:ssa')
                            : 'No record'}
                    </Value>
                    <NoOfItems>Last Update</NoOfItems>
                </Column>
            </Row>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
`;

const HeaderTitle = styled.div`
    font-size: 2rem;
    padding: 1rem;
    text-align: left;
    color: white;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    border-right: 1px solid #d5d5d5;
`;

const Value = styled.div`
    height: 2.5rem;
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    padding: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-bottom: 1px solid #d5d5d5;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    color: white;
    @media (max-width: 680px) {
        padding: 0.05rem;
        width: unset;
        align-items: flex-end;
        flex-direction: column;
        justify-content: space-around;
    }
`;

const NoOfItems = styled.div`
    padding: 0.2rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
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
    headerTitle: PropTypes.string,
    loading: PropTypes.bool,
    cancel: PropTypes.func,
    refresh: PropTypes.bool,
    buttonClick: PropTypes.func,
    isHost: PropTypes.bool,
    buttonTitle: PropTypes.string,
    disabled: PropTypes.bool,
};

export default MetricsDisplay;
