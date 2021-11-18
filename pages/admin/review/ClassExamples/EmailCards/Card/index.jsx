import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font } from 'frontend/styles/theme';
import useGlobal from 'frontend/globalState/store';
// Ben can you replace this (SingleProduct) with something true to the Email templates we will send. Not identical, just sharing similar info
import { SingleProduct } from './SingleProduct';

const propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    position: PropTypes.string,
    populateCard: PropTypes.func,
    pid: PropTypes.string,
    currentItems: PropTypes.array
};

const locationMap = {
    'Top Left': 'topLeft',
    'Top Right': 'topRight',
    'Bottom Left': 'bottomLeft',
    'Bottom Right': 'bottomRight'
};

export const Card = ({
    position,
    populateCard,
    currentItems
}) => {
    const router = useRouter();
    const { pid } = router.query;
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const current = currentItems?.filter((item) => item.position === locationMap[position]);

        if (current[0]?.product_id) {
            _getProduct(current[0]?.product_id);
        }

        setProduct({});
    }, [currentItems]);

    const _getProduct = async (filter) => {
        const result = await globalActions.apiRequests.searchProductById(filter);

        if (result) {
            setProduct(result);
        }
    };

    const _populateCard = () => {
        populateCard(position);
    };

    return (
        <>
            {
                product.id ?
                    <SingleProduct
                        id={product.id}
                        businessName={product.business_name}
                        src={product.images[0]?.src}
                        title={product.title}
                        rating={product.rating}
                        price={(product.original_price / 100).toFixed(2)}
                        compareAtPrice={(product.original_price / 100).toFixed(2)}
                        tags={product.tags}
                        buckets={product.buckets}
                        sizes={product.sizes}
                    />
                    : 
                    <CardBlock>
                        <Details>{pid}</Details>
                        <Bottom>
                            <Border />
                            <Details>Apply {position}</Details>
                        </Bottom>
                    </CardBlock>
            }
        </>
    );
};

Card.propTypes = propTypes;

export const CardBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22%;
    max-width: 250px;
    height: 330px;
    padding: 8px;
    margin: 5px;
    border-radius: 3px;
    background: #fff;
    transition: background 0.1s;
    @media (max-width: 1100px) {
        width: 46%;
    }
`;

export const Title = styled.p`
    padding-bottom: 11px;
    ${font.size(15)}
    @media (max-width: 1100px) {
        ${font.size(14.5)}
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
`;

export const Star = styled.p`
    transform: scale(3, 3) translate(30px, -0.1rem);
`;

export const Details = styled.p`
    ${font.size(11)}
    display: flex;
    flex-wrap: wrap;
`;

export const Border = styled.div`
    border-bottom: 1px solid ${color.backgroundLight};
    margin: 0.05rem;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 250px;
    // overflow: hidden;
    background: white;
    transition: box-shadow 0.1s ease-in;
    min-height: 500px;
    padding: 1rem;
`;

export const Img = styled.img`
    width: 200px;
    height: auto;
    max-height: 230px;
    object-fit: contain;
`;
