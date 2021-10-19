import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { intersection } from 'lodash';
import styled from 'styled-components';

import Product from './Product';
import { color, font, mixin } from 'styles/theme';
import incrementProduct from "../../../../../requests/incrementProduct";

const propTypes = {
    status: PropTypes.string,
    products: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    currentUserId: PropTypes.number
};

const defaultProps = {
    products: []
};

const ProjectBoardList = ({ status, products, filters, currentUserId }) => {
    const [ loading, setLoading ] = useState(false);
    const filteredProducts = filterProducts(products, filters, currentUserId);
    const filteredListProducts = getSortedListProducts(filteredProducts, status);
    const allListProducts = getSortedListProducts(products, status);


    const _incrementProduct = async (id) => {
        setLoading('incrementProduct');
        const result = await incrementProduct(id);
        if (result) {
            setLoading(false);
        }
    };

    return (
        <>
            <Title>
                {/* todo */}
                {"Insert query params here"}  
                <ProductsCount>{formatProductsCount(allListProducts, filteredListProducts)}</ProductsCount>
            </Title>
            <List>
                {filteredListProducts.map((product, index) => (
                    <Product 
                        key={product.id} 
                        index={index}
                        src={product.images[0].src}
                        title={product.title}
                        rating={product.rating}
                        id={product.id}
                        incrementProduct={_incrementProduct}
                    />
                ))}
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

ProjectBoardList.propTypes = propTypes;
ProjectBoardList.defaultProps = defaultProps;

export default ProjectBoardList;

// export const List = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin: 0 5px;
//     min-height: 400px;
//     width: 25%;
//     border-radius: 3px;
//     background: ${ color.backgroundLightest };
// `;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 5px;
    min-height: 400px;
    overflow-y: auto;
    max-height: 100vh;
    width: 100%;
    border-radius: 3px;
    background: ${ color.backgroundLightest };
    padding: 10px 8px 300px 8px;
    @media (max-width: 1100px) {
    }
    // &:hover {
    //     background: ${ color.backgroundLight };
    // }
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