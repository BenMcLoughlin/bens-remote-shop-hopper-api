import React from 'react';
import styled from 'styled-components';
import { ActionStep } from '../../components';


export const HowItWorks = ({ title, cards }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Cards>
                {cards.map((card) => (
                    <ActionStep {...card} />
                ))}
            </Cards>
        </Wrapper>
    );
};

export default HowItWorks;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    padding-top: 12rem;
    width: 90%;
    margin: 0 auto;
`;
const Title = styled.div`
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-size: ${(p) => p.theme.font.large};
    ${(props) => props.theme.flex.vertical.center};
    line-height: 5rem;
    margin-top: 2.8rem;
    justify-content: center;
    opacity: ${(p) => p.theme.opacity};
    
`;
const Cards = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    justify-content: space-around;
    padding-top: 5rem;
    margin: 0 auto;
    opacity: ${(p) => p.theme.opacity};
`;
