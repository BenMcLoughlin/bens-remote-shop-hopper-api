import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, mixin } from 'frontend/styles/theme';

const propTypes = {
    businessName: PropTypes.string,
    openPage: PropTypes.func,
    details: PropTypes.string,
    iconType: PropTypes.func
};

const HostCard = ({ businessName, openPage, details, iconType }) => {
    let Icon = iconType;
    return (
        <Block onClick={openPage}>
            { iconType ? 
                <Icon size={30} />
                : null
            }
            <Card>
                <Title>{businessName}</Title>
                <Bottom>
                    <Details>
                        {details}
                    </Details>

                    <Border />
                </Bottom>
            </Card>
            <Details>{businessName}</Details>
        </Block>
    );
};

export const Block = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
    transition: background 0.1s;
    ${mixin.clickable}
    margin: .5rem;
    &:hover {
        background: ${color.backgroundLightest};
        box-shadow: none;
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

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
