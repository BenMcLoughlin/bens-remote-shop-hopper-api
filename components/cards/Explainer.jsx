import React from 'react';
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Image from 'next/image';
import { explainerSvgs } from 'public/assets/svgs/explainers/explainerSvgs.js';

export const Explainer = ({ icon, title, subTitle }) => (
    <Wrapper>
        <Icon>
            <Image src={explainerSvgs[icon]} className="image" width={80} height={80} />
        </Icon>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
);

export default Explainer;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 45rem;
    width: 27em;
    font-size: 1rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    border-radius: 3rem;
    &:hover {
        background: ${ (p) => p.theme.color.blueLight };
        color: white;
    }
    transition: all 0.5s ease;
    padding: 2rem;

    justify-content: space-around;
`;
const Icon = styled.div`
    height: 12rem;  
    width: 12rem;
    margin: 0 auto;
`;
const Title = styled.div`
    height: 30%;
    font-size: ${ (p) => p.theme.font.smallMedium };
    font-weight: bold;
    padding: 2rem;
`;
const SubTitle = styled.div`
    height: 40%;
    font-size: ${ (p) => p.theme.font.small };
    padding: 2rem;
    font-weight: 200;
    text-transform: none;
`;

// class="svg-5"