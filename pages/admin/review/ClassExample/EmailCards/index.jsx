import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';

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
    const [loading, setLoading] = useState(false);
    const [currentQuery, setCurrentQuery] = useState('');
    const mountedRef = useRef(true);

    useEffect(() => {
        // _getInitialProducts(current);
        // setCurrentQuery(current.metric);
    }, [pid]);

    return (
        <>
            <Grid>
                <Card
                    position="Top Left"
                    pid={pid}
                    id={"product.id"}
                    // src={product.images[0]?.src}
                    // title={product.title}
                    // rating={product.rating}
                    // price={(product.original_price / 100).toFixed(2)}
                    // compareAtPrice={(product.original_price / 100).toFixed(2)}
                    // tags={product.tags}
                    // buckets={product.buckets}
                    // sizes={product.sizes}
                    // incrementProduct={_incrementProduct}
                />
                <Card
                    position="Top Right"
                    pid={pid}
                    id={"product.id"}
                    // src={product.images[0]?.src}
                    // title={product.title}
                    // rating={product.rating}
                    // price={(product.original_price / 100).toFixed(2)}
                    // compareAtPrice={(product.original_price / 100).toFixed(2)}
                    // tags={product.tags}
                    // buckets={product.buckets}
                    // sizes={product.sizes}
                    // incrementProduct={_incrementProduct}
                />
                <Card
                    position="Bottom Left"
                    pid={pid}
                    id={"product.id"}
                    // src={product.images[0]?.src}
                    // title={product.title}
                    // rating={product.rating}
                    // price={(product.original_price / 100).toFixed(2)}
                    // compareAtPrice={(product.original_price / 100).toFixed(2)}
                    // tags={product.tags}
                    // buckets={product.buckets}
                    // sizes={product.sizes}
                    // incrementProduct={_incrementProduct}
                />
                <Card
                    position="Bottom Right"
                    pid={pid}
                    id={"product.id"}
                    // src={product.images[0]?.src}
                    // title={product.title}
                    // rating={product.rating}
                    // price={(product.original_price / 100).toFixed(2)}
                    // compareAtPrice={(product.original_price / 100).toFixed(2)}
                    // tags={product.tags}
                    // buckets={product.buckets}
                    // sizes={product.sizes}
                    // incrementProduct={_incrementProduct}
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
