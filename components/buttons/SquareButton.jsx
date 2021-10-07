import React from 'react';
import styled from 'styled-components';

export const SquareButton = ({ title, gradient = 'primary' }) => {
    return (
        <Wrapper gradient={gradient}>
            <Title>{title}</Title>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    background: ${(p) =>
        p.gradient === 'primary' ? p.theme.color.greenDark : p.theme.color.accent};
    height: 6rem;
    width: 20rem;
    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: center;
    &: hover {
        background: black;
    }
    transition: all 0.2s ease;
`;

const Title = styled.div`
    font-size: ${(p) => p.theme.font.smallMedium};
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    ${(props) => props.theme.flex.vertical.center};
    font-weight: 400;
`;
