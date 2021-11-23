import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Menu } from 'frontend/components/menu';
import { color, font, mixin } from 'frontend/styles/theme';
import { truncate } from 'frontend/utils/strings';

import incrementProduct from 'backend/requests/incrementProduct';

export const ReviewProduct = ({
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
}) => {
    const [localRating, setRating] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // todo
        setRating(rating);
    }, []);

    const _setAs = (location) => {
        setAs(location, id);
    };

    const _incrementProduct = async () => {
        await incrementProduct(id);
    };

    return (
        <Wrapper>
            {
                open ? 
                    <Menu 
                        open={open}
                        setAs={_setAs}
                        incrementProduct={_incrementProduct}
                    />
                    : null
            }
            <ProductBlock onClick={() => setOpen(!open)}>
                <Details>{businessName}</Details>
                <Card>
                    <Title>{truncate(title)}</Title>
                    <Img src={src} />
                    <Bottom>
                        <Details>Rating: {localRating}</Details>
                        {localRating > 0 && <Star>⭐️</Star>}

                        <Border />
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
                        <Details>Tags: {tags?.join(', ')}</Details>
                        <Border />
                        <Details>Buckets: {buckets?.join(', ')}</Details>
                        <Border />
                        <Details>Sizes: {sizes?.join(', ')}</Details>
                    </Bottom>
                </Card>
            </ProductBlock>
        </Wrapper>
    );
};

ReviewProduct.propTypes = {
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

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 250px;
    padding: 0.3rem;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
    transition: background 0.1s;
    ${mixin.clickable}
    margin: 0.5rem;
    &:hover {
        background: ${color.backgroundLight};
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
    ${font.size(15)}
    display: flex;
    flex-wrap: wrap;
`;

export const Border = styled.div`
    border-bottom: 1px solid ${color.backgroundLight};
    margin: 0.05rem;
    width: 100%;
`;

export const Card = styled.div`
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
