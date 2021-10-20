import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { intersection } from 'lodash';
import styled from 'styled-components';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';

import Product from './Product';
import { color, font, mixin } from 'styles/theme';
import incrementProduct from "requests/incrementProduct";
import useGlobal from "globalState/store";

const propTypes = {
    status: PropTypes.string,
    products: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    currentUserId: PropTypes.number
};

const defaultProps = {
    products: []
};

const BoardList = ({ status, products, filters, currentUserId }) => {
    const [ globalState, globalActions ] = useGlobal();
    const [ loading, setLoading ] = useState(false);
    const [ currentQuery, setCurrentQuery ] = useState('');
    const filteredProducts = filterProducts(products, filters, currentUserId);
    const filteredListProducts = getSortedListProducts(filteredProducts, status);
    const allListProducts = getSortedListProducts(products, status);

    useEffect(() => {
        setCurrentQuery(`${ globalState.products.query.column } : ${ globalState.products.query.metric }`);
    }, [ globalState.products.query ]);

    const _incrementProduct = async (id) => {
        setLoading('incrementProduct');
        const result = await incrementProduct(id);
        if (result) {
            setLoading(false);
        }
    };

    const _nextPage = async () => {
        setLoading('nextPage');
        const result = await globalActions.apiRequests.nextPage();
        if (result) {
            // setProducts(sorted);
            setLoading(false);
        }
    };

    const _prevPage = async () => {
        setLoading('prevPage');
        const result = await globalActions.apiRequests.prevPage();
        if (result) {
            // setProducts(sorted);
            setLoading(false);
        }
    };

    // console.log('globalState:', globalState);

    return (
        <>
            <Title>
                {currentQuery}  
                <ProductsCount>: {formatProductsCount(allListProducts, filteredListProducts)} Items</ProductsCount>
            </Title>
            <ButtonsWrapper>
                <Icon onClick={_prevPage}>
                    <ArrowLeftShort />
                </Icon>
                <Icon onClick={_nextPage}>
                    <ArrowRightShort /> 
                </Icon>
            </ButtonsWrapper>
            <List>
                {filteredListProducts.map((product, index) => (
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
                    <Icon onClick={_prevPage}>
                        <ArrowLeftShort />
                    </Icon>
                    <Icon onClick={_nextPage}>
                        <ArrowRightShort /> 
                    </Icon>
                </ButtonsWrapper>
            </List>
        </>
    );
};

const filterProducts = (projectProducts, filters, currentUserId) => {
    const { searchTerm, userIds, myOnly, recent } = filters;
    let products = projectProducts;

    if (searchTerm) {
        products = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (userIds.length > 0) {
        products = products.filter((product) => intersection(product.userIds, userIds).length > 0);
    }

    if (myOnly && currentUserId) {
        products = products.filter((product) => product.userIds.includes(currentUserId));
    }

    if (recent) {
        products = products.filter((product) => moment(product.updatedAt).isAfter(moment().subtract(3, 'days')));
    }

    return products;
};

const getSortedListProducts = (products, status) => products.filter((product) => product.status === status).sort((a, b) => a.listPosition - b.listPosition);

const formatProductsCount = (allListProducts, filteredListProducts) => {
    if (allListProducts.length !== filteredListProducts.length) {
        return `${ filteredListProducts.length } of ${ allListProducts.length }`;
    }

    return allListProducts.length;
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