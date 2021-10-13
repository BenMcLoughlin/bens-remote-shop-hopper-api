import React from 'react';
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Testimonial } from '../../components';

export const Testimonials = ({ title, subTitle, cards }) => (
    <Wrapper>
        <Top>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Top>

        <Cards>
            {cards.map((card) => (
                <Testimonial key={card} {...card} />
            ))}
        </Cards>
    </Wrapper>
);

export default Testimonials;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    margin-top: 5rem;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    height: 21rem;
    gap: 2rem;
    align-items: center;
    padding: 2rem;
`;
const Title = styled.div`
    font-size: ${ (p) => p.theme.font.mediumLarge };
    ${ (props) => props.theme.flex.vertical.center };
    color: black;
    line-height: 5rem;
    text-align: center;
    font-weight: 800;
    margin-top: -0.8rem;
`;

const SubTitle = styled.div`
    font-size: ${ (p) => p.theme.font.medium };
    ${ (props) => props.theme.flex.vertical.center };
    line-height: 5rem;

  text-transform: uppercase;
`;

const Cards = styled.div`
    font-size: ${ (p) => p.theme.font.mediumLarge };
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    padding-top: 5rem;
    flex-wrap: wrap;
`;