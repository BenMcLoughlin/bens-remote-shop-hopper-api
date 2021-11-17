import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font, mixin } from 'frontend/styles/theme';
import { truncate } from 'frontend/utils/strings';
import useGlobal from 'frontend/globalState/store';

const propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    position: PropTypes.string,
    populateCard: PropTypes.func,
    pid: PropTypes.string
};

export const Card = ({
    src,
    position,
    pid,
    populateCard,
    id
}) => {
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (id) {
            _getProduct(id);
        }
    }, [id]);

    const _getProduct = async (filters) => {
        const result = await globalActions.apiRequests.searchProductById(filters);

        if (result) {
            setProduct(result);
        }
    };

    const _populateCard = () => {
        populateCard(position);
    };

    return (
        <>
            <CardBlock onClick={() => _populateCard(position)}>
                <Details>{pid}</Details>
                <Bottom>
                    <Border />
                    <Details>Apply {position}</Details>
                </Bottom>
            </CardBlock>
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
    height: 300px;
    padding: 8px;
    margin: 5px;
    border-radius: 3px;
    background: #fff;
    box-shadow: 1px 1px 2px 2px rgba(9, 30, 66, 0.25);
    transition: background 0.1s;
    &:hover {
        background: ${color.backgroundLight};
    }
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
