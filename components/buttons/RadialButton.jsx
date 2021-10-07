import React from 'react';
import styled from 'styled-components';
import { Rocket } from '@styled-icons/fa-solid/Rocket';
import { PaperPlane } from '@styled-icons/entypo/PaperPlane';

export const RadialButton = ({ title, gradient = 'primary', icon }) => {
    const icons = {
        rocket: <Rocket />,
        plane: <PaperPlane />,
    };

    return (
        <Wrapper gradient={gradient}>
            {icon && (
                <Icon>
                    {icon === 'rocket' ? <Rocket /> : icon === 'plane' ? <PaperPlane /> : ''}
                </Icon>
            )}
            <Title>{title}</Title>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 5rem;
    min-width: 11rem;
    cursor: pointer;
    display: flex;
    align-content: center;
    border-radius: 5rem;
    padding: 0 2rem 0 2rem;
    justify-content: center;
    align-items: center;
    ${(p) => p.theme.gradient[p.gradient]};
    border: ${(p) => p.gradient === 'none' && '1px solid white'};

    &:hover {
        background: ${(props) => props.theme.color.dark};
    }
    transition: all 0.6s ease;
`;

const Title = styled.div`
    font-size: ${(p) => p.theme.font.small};
    color: white;
    ${(props) => props.theme.flex.vertical.center};
`;
const Icon = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1.5rem;
`;
