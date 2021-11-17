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

const ProductsBlock = ({ pid }) => {
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [currentQuery, setCurrentQuery] = useState('');
    const mountedRef = useRef(true);
    let dateFrom = new Date();
    let pastDate = dateFrom.getDate() - 7;
    dateFrom.setDate(pastDate);

    useEffect(() => {
        const initial = {
            column: 'buckets',
            metric: pid,
            dateFrom
        };
        _getInitialProducts(initial);
        setCurrentQuery(`Items that match: ${initial.metric} and Updated since ${dateFrom.toString().slice(0, 16)}`);
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
        let products = globalState.products.data;
        let cursor = globalState.products.cursor;
        if (products.length !== cursor) {
            return `Items ${cursor - products.length} to ${cursor}`;
        }

        return `${products.length} Items`;
    };

    if (!globalState.products.data) {
        return <Image src={loaderGif} className="loading" width={800} height={600} />;
    }

    return (
        <>
            <Title>
                {currentQuery}
                <ProductsCount>: {formatProductsCount()}</ProductsCount>
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
                    <ButtonsWrapper>
                        {globalState.products.cursor > globalState.products.data.length ? (
                            <Icon onClick={_prevPage}>
                                <ArrowLeftShort />
                            </Icon>
                        ) : (
                            <div></div>
                        )}
                    </ButtonsWrapper>
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
    padding: 8px;
    // align-items: center;
    // justify-content: space-evenly;
    min-height: 400px;
    overflow-x: auto;
    height: 550px;
    // width: 100%;
    border-radius: 3px;
    background: ${color.backgroundLightest};
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

ProductsBlock.propTypes = propTypes;
ProductsBlock.defaultProps = defaultProps;

export default ProductsBlock;
