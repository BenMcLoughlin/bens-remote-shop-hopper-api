import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font } from 'frontend/styles/theme';
import { truncate } from 'frontend/utils/strings';

const propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    businessName: PropTypes.string,
    index: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    compareAtPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tags: PropTypes.array,
    buckets: PropTypes.array,
    sizes: PropTypes.array,
    setAs: PropTypes.func
};

export const SingleProduct = ({
    businessName,
    src,
    title,
    rating,
    id,
    price,
    compareAtPrice,
    tags,
    buckets,
    sizes,
    setAs
}) => (
    <ProductBlock>
        <Details>{businessName}</Details>
        <Card>
            <Title>{truncate(title)}</Title>
            <Img src={src} />
            <Bottom>
                <Details>Price: {price}</Details>
                {compareAtPrice > 0 && (
                    <>
                        <Details>Compare: {compareAtPrice}</Details>
                        <Details>
                                    Savings Ratio:{' '}
                            {(((compareAtPrice - price) / compareAtPrice) * 100).toFixed(2)}
                                    %
                        </Details>
                    </>
                )}
                <Border />
                <Details>Sizes: {sizes?.join(', ')}</Details>
            </Bottom>
        </Card>
    </ProductBlock>
);

SingleProduct.propTypes = propTypes;

export const ProductBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    width: 48%;
    max-width: 250px;
    height: 330px;
    margin: 5px;
    padding: 8px;
    background: #fff;
    box-shadow: 1px 1px 2px 2px rgba(9, 30, 66, 0.25);
    // border: 2px solid ${(props) => props.theme.color.blueDark};
    transition: background 0.1s;
    overflow-y: auto;
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
    margin: 10px;
`;

export const Star = styled.p`
    transform: scale(3, 3) translate(30px, -0.1rem);
`;

export const Details = styled.p`
    ${font.size(15)}
    display: flex;
    flex-wrap: wrap;
`;

export const Border = styled.div`
    border-bottom: 1px solid ${color.backgroundLight};
    margin: 5px;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 250px;
    width: 100%;
    overflow-y: auto;
    background: white;
    transition: box-shadow 0.1s ease-in;
    paddingBottom: 1rem;
`;

export const Img = styled.img`
    // width: 200px;
    height: auto;
    max-height: 230px;
    object-fit: contain;
`;
