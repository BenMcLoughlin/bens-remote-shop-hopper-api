import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';

import { Product } from 'frontend/components';
import { color, font, mixin } from 'frontend/styles/theme';
import incrementProduct from 'backend/requests/incrementProduct';
import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';

const propTypes = {
    pid: PropTypes.string,
    products: PropTypes.array.isRequired
};

const defaultProps = {
    products: [],
    pid: 'Athletic'
};

const ReviewBoardList = ({ pid }) => {
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [currentQuery, setCurrentQuery] = useState('');
    const mountedRef = useRef(true);
    let dateFrom = new Date();
    let pastDate = dateFrom.getDate() - 7;
    dateFrom.setDate(pastDate);

    useEffect(() => {
        const current = {
            column: 'buckets',
            metric: pid,
            dateFrom
        };
        _getInitialProducts(current);
        setCurrentQuery(current.metric);
    }, [pid]);

    const _incrementProduct = async (id) => {
        await incrementProduct(id);
    };

    const _getInitialProducts = async (filters) => {
        const result = await globalActions.apiRequests.searchProducts(filters);

        if (result) {
            globalActions.products.setData(result);
            globalActions.products.setCursor(result.length);
        }
    };

    const _nextPage = async () => {
        // setLoading('nextPage');
        const result = await globalActions.apiRequests.nextPage();
        if (result) {
            // setLoading(false);
        }
    };

    const _prevPage = async () => {
        // setLoading('prevPage');
        const result = await globalActions.apiRequests.prevPage();
        if (result) {
            // setLoading(false);
        }
    };

    const formatProductsCount = () => {
        if (globalState.products.data.length !== globalState.products.cursor) {
            return `${globalState.products.data.length} of ${globalState.products.cursor}`;
        }

        return globalState.products.data.length;
    };

    if (!globalState.products.data) {
        return <Image src={loaderGif} className="loading" width={800} height={600} />;
    }

    return (
        <>
            <Title>
                {currentQuery}
                <ProductsCount>: {formatProductsCount()} Items</ProductsCount>
            </Title>
            <ButtonsWrapper>
                {globalState.products.cursor > globalState.products.data.length ? (
                    <Icon onClick={_prevPage}>
                        <ArrowLeftShort />
                    </Icon>
                ) : (
                    <div></div>
                )}
                <Icon onClick={_nextPage}>
                    <ArrowRightShort />
                </Icon>
            </ButtonsWrapper>
            <List>
                <>
                    {globalState.products.data.map((product, index) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            businessName={product.business_name}
                            index={index}
                            src={product.images[0]?.src}
                            title={product.title}
                            rating={product.rating}
                            price={(product.original_price / 100).toFixed(2)}
                            compareAtPrice={(product.original_price / 100).toFixed(2)}
                            tags={product.tags}
                            buckets={product.buckets}
                            sizes={product.sizes}
                            incrementProduct={_incrementProduct}
                        />
                    ))}
                    <ButtonsWrapper>
                        {globalState.products.cursor > globalState.products.data.length ? (
                            <Icon onClick={_prevPage}>
                                <ArrowLeftShort />
                            </Icon>
                        ) : (
                            <div></div>
                        )}
                        <Icon onClick={_nextPage}>
                            <ArrowRightShort />
                        </Icon>
                    </ButtonsWrapper>
                </>
            </List>
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

export const List = styled.div`
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

ReviewBoardList.propTypes = propTypes;
ReviewBoardList.defaultProps = defaultProps;

export default ReviewBoardList;
