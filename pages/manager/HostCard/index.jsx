import React from 'react';
import PropTypes from 'prop-types';
import { Shopify } from '@styled-icons/fa-brands/Shopify';
import styled from 'styled-components';

import { color, font, mixin } from 'styles/theme';

const propTypes = {
    id: PropTypes.number,
    businessName: PropTypes.string
};

const HostCard = ({ businessName }) => (
    <>
        <Block>
            <Shopify size={30} />
            <Card>
                <Title>{businessName}</Title>
                <Bottom>
                    <Details>
                        We will add some metrics and interesting info about each host type here as time goes on
                    </Details>
                        
                    <Border />
                </Bottom>
            </Card>
            <Details>{businessName}</Details>
        </Block>
    </>
);

export const Block = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
`;

export const Star = styled.p`
    transform: scale(3, 3) translate(30px, -10px);
`;

export const Details = styled.p`
    ${ font.size(11) }
    display: flex;
    flex-wrap: wrap;
`;

export const Border = styled.div`
    border-bottom: 1px solid ${ color.backgroundLight };
    margin: 5px;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // overflow: hidden;
    background: white;
    transition: box-shadow 0.1s ease-in;
    padding: 1rem;
`;

export const Img = styled.img`
    width: 200px;
    height: auto;
    max-height: 230px;
    object-fit: contain;
`;

HostCard.propTypes = propTypes;

export default HostCard;