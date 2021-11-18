import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font, mixin } from 'frontend/styles/theme';
import useGlobal from 'frontend/globalState/store';
import { Card } from './Card';

const propTypes = {
    pid: PropTypes.string
};

const defaultProps = {
    pid: 'Athletic'
};

const EmailCards = ({ pid }) => {
    const [globalState, globalActions] = useGlobal();
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        let parsedItems = [];

        globalState.templateClass.data?.items?.map((item) => parsedItems.push(JSON.parse(item)));

        setCurrentItems(parsedItems);
    }, [globalState.templateClass.data]);

    return (
        <>
            <Grid>
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
            </Grid>
        </>
    );
};

const Icon = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1.5rem;
    cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Grid = styled.div`
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

export const GridBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 0.05rem;
    min-height: 400px;
    overflow-y: auto;
    height: 100vh;
    width: 100%;
    border-radius: 3px;
    background: ${color.backgroundLightest};
    padding: 0.1rem 8px 300px 8px;
`;

export const Title = styled.div`
    padding: 13px 0.1rem 17px;
    text-transform: uppercase;
    color: ${color.textMedium};
    ${font.size(12.5)};
    ${mixin.truncateText}
`;

export const ProductsCount = styled.span`
    text-transform: lowercase;
    ${font.size(13)};
`;

export const Products = styled.div`
    height: 100%;
    padding: 0 0.05rem;
`;

EmailCards.propTypes = propTypes;
EmailCards.defaultProps = defaultProps;

export default EmailCards;
