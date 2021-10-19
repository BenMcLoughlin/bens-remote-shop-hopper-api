import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, font, mixin } from 'styles/theme';

import Icon from 'components/Icon';

const propTypes = {
    projectUsers: PropTypes.array.isRequired,
    src: PropTypes.string.isRequired,
    index: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    incrementProduct: PropTypes.func,
    id: PropTypes.number
};

const ProjectBoardListProduct = ({ src, title, rating, id, incrementProduct }) => (
    <>
        <ProductBlock onClick={() => incrementProduct(id)}>
            <Title>{title}</Title>
            <Card>
                <Img src={src} />
                <Bottom>
                    {rating > 10 && (
                        <Star>⭐️</Star>
                    )}
                    <a>
                        Rating: <bold>{rating}</bold>
                    </a>
                </Bottom>
            </Card>
            <Bottom>
                <div>
                    <Icon type={title} />
                    <Icon priority={rating} top={-1} left={4} />
                </div>
            </Bottom>
        </ProductBlock>
    </>
);

ProjectBoardListProduct.propTypes = propTypes;

export default ProjectBoardListProduct;

export const ProductBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    padding: 10px;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
    transition: background 0.1s;
    ${ mixin.clickable }
    margin: 5px;
    &:hover {
        background: ${ color.backgroundLight };
    }
`;

export const Title = styled.p`
    padding-bottom: 11px;
    ${ font.size(15) }
    @media (max-width: 1100px) {
        ${ font.size(14.5) }
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        box-shadow: 1px 1px 3px #aaa;
    }
`;

export const Star = styled.p`
    transform: scale(3, 3) translate(-5px, -10px);
    &:hover {
        transform: scale(5, 5);
        transition: all 1s;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: white;
    transition: box-shadow 0.1s ease-in;
    height: 300px;
    padding: 1rem;
    &:hover {
        box-shadow: 1px 1px 3px #aaa;
    }
`;

export const Img = styled.img`
    width: 200px;
    height: auto;
    object-fit: contain;
`;