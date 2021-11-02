/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import { Button } from 'frontend/components';

export const News = ({ title, cards }) => (
    <Wrapper>
        {/* <Title>{title}</Title>
            <Cards>
                {cards.map((card) => (
                    <Article {...card} />
                ))}
            </Cards>
            <Button title={'All Posts'} gradient="tertiary" /> */}
    </Wrapper>
);

export default News;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.div`
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-size: ${(p) => p.theme.font.large};
    ${(props) => props.theme.flex.vertical.center};
    line-height: 5rem;
    text-transform: uppercase;
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
    padding-top: 2rem;
    opacity: ${(p) => p.theme.opacity};
`;
