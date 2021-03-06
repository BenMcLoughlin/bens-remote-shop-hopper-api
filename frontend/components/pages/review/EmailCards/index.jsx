import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useGlobal from 'frontend/globalState/store';
import { color } from 'frontend/styles/theme';
import { Card } from './Card';

const propTypes = {
    pid: PropTypes.string,
    items: PropTypes.array
};

const defaultProps = {
    pid: 'Athletic',
    items: []
};

export const EmailCards = ({ pid, items }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [globalState, globalActions] = useGlobal();

    useEffect(() => {
        let parsedItems = [];

        items?.map((item) => parsedItems.push(JSON.parse(item)));

        setCurrentItems(parsedItems);
    }, [items]);

    useEffect(() => {
        if (globalState.templateClass.data?.class_name === pid) {
            let parsedItems = [];
            globalState.templateClass.data?.items?.map((item) => parsedItems.push(JSON.parse(item)));

            setCurrentItems(parsedItems);
        }
    }, [globalState.templateClass.data]);

    return (
        <>
            <Top>
                <Card
                    position="Top Left"
                    pid={pid}
                    currentItems={currentItems}
                />
                <Card
                    position="Top Right"
                    pid={pid}
                    currentItems={currentItems}
                />
            </Top>
            <Bottom>
                <Card
                    position="Bottom Left"
                    pid={pid}
                    currentItems={currentItems}
                />
                <Card
                    position="Bottom Right"
                    pid={pid}
                    currentItems={currentItems}
                />
            </Bottom>
        </>
    );
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    // align-items: end;
    // justify-content: space-evenly;
    // flex-wrap: wrap;
    // overflow-y: auto;
    // width: 100%;
    // border-radius: 3px;
    // background: ${color.backgroundLightest};
    // padding: 8px 8px;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 100%;
    border-radius: 3px;
    background: ${color.backgroundLightest};
    padding: 8px 8px;
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 100%;
    border-radius: 3px;
    background: ${color.backgroundLightest};
    padding: 8px 8px;
`;

EmailCards.propTypes = propTypes;
EmailCards.defaultProps = defaultProps;
