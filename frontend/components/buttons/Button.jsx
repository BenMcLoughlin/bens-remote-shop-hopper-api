/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Rocket } from '@styled-icons/fa-solid/Rocket';
import { PaperPlane } from '@styled-icons/entypo/PaperPlane';
import { startCase } from 'frontend/utils/strings';

export const Button = ({ title = '', gradient = 'primary', icon, onClick, radius = 'square', onSubmit = null }) => {
    const icons = {
        rocket: <Rocket />,
        plane: <PaperPlane />
    };

    return (
        <Wrapper gradient={gradient} onClick={onClick} radius={radius} title={title} onSubmit={onSubmit && onSubmit}>
            {icon && <Icon>{icon === 'rocket' ? <Rocket /> : icon === 'plane' ? <PaperPlane /> : ''}</Icon>}
            <Title>{startCase(title)}</Title>
            {onSubmit && <SubmitOption type="submit" value="Submit" />}
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 5rem;
    min-width: 11rem;
    max-width: ${(p) => `${p.title.length * 2}rem`};
    cursor: pointer;
    position: relative;
    display: flex;
    align-content: center;
    border-radius: ${(p) => (p.radius === 'square' ? '0.1rem' : '40px')};
    padding: 0 2rem 0 2rem;
    justify-content: center;
    align-items: center;
    ${(p) => p.theme.gradient[p.gradient]};
    border: ${(p) => p.gradient === 'none' && '1px solid white'};
    opacity: 1;
    &:hover {
        background: ${(props) => props.theme.color.dark};
    }
    transition: all 0.6s ease;
`;
const SubmitOption = styled.input`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const Title = styled.div`
    font-size: 1.4rem;
    color: white;
    ${(props) => props.theme.flex.vertical.center};
`;
const Icon = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1.5rem;
`;
const NonLink = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1.5rem;
`;
