import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import moment from 'moment';
import { intersection } from 'lodash';
import styled from 'styled-components';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';

import Product from 'components/Product';
import { color, font, mixin } from 'styles/theme';
import incrementProduct from "requests/incrementProduct";
import useGlobal from "globalState/store";
import loaderGif from 'public/assets/loader/octo_loader.gif';

const propTypes = {
    status: PropTypes.string,
    products: PropTypes.array.isRequired
};

const defaultProps = {
    products: []
};

const BoardList = ({ products }) => {
    const [ globalState, globalActions ] = useGlobal();
    const [ loading, setLoading ] = useState(false);
    const [ currentQuery, setCurrentQuery ] = useState('');

    useEffect(() => {
        setCurrentQuery(`${ globalState.products.query.column } : ${ globalState.products.query.metric }`);
    }, [ globalState.products.query ]);

    const _incrementProduct = async (id) => {
        await incrementProduct(id);
    };

    const _nextPage = async () => {
        // setLoading('nextPage');
        const result = await globalActions.apiRequests.nextPage();
        if (result) {
            // setLoading(false);
        }
    };

    const _prevPage = async () => {
        setLoading('prevPage');
        const result = await globalActions.apiRequests.prevPage();
        if (result) {
            setLoading(false);
        }
    };

    const formatProductsCount = () => {
        if (products.length !== globalState.products.cursor) {
            return `${ products.length } of ${ globalState.products.cursor }`;
        }

        return products.length;
    };

    // console.log('globalState:', globalState);

    return (
        <>
            <Title>
                {currentQuery}  
                <ProductsCount>: {formatProductsCount()} Items</ProductsCount>
            </Title>
            <ButtonsWrapper>
                {
                    globalState.products.cursor > products.length ?
                        <Icon onClick={_prevPage}>
                            <ArrowLeftShort />
                        </Icon>
                        :
                        <div></div>
                }
                <Icon onClick={_nextPage}>
                    <ArrowRightShort /> 
                </Icon>
            </ButtonsWrapper>
            <List>
                {
                    loading ?
                        <Image src={loaderGif} className="loading" width={800} height={600} />
                        :
                        <>
                            {products.map((product, index) => (
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
                                    incrementProduct={_incrementProduct}
                                />
                            ))}
                            <ButtonsWrapper>
                                {
                                    globalState.products.cursor > products.length ?
                                        <Icon onClick={_prevPage}>
                                            <ArrowLeftShort />
                                        </Icon>
                                        :
                                        <div></div>
                                }
                                <Icon onClick={_nextPage}>
                                    <ArrowRightShort /> 
                                </Icon>
                            </ButtonsWrapper>
                        </>
                }
            </List>
        </>
    );
};

const Icon = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1.5rem;
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
    margin: 0 5px;
    min-height: 400px;
    overflow-y: auto;
    height: 100vh;
    width: 100%;
    border-radius: 3px;
    background: ${ color.backgroundLightest };
    padding: 10px 8px 300px 8px;
`;

export const Title = styled.div`
    padding: 13px 10px 17px;
    text-transform: uppercase;
    color: ${ color.textMedium };
    ${ font.size(12.5) };
    ${ mixin.truncateText }
`;

export const ProductsCount = styled.span`
    text-transform: lowercase;
    ${ font.size(13) };
`;

export const Products = styled.div`
    height: 100%;
    padding: 0 5px;
`;

BoardList.propTypes = propTypes;
BoardList.defaultProps = defaultProps;

export default BoardList;