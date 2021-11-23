/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { LinkButton } from 'frontend/components';
import Image from 'next/image';
import { brushNumber } from 'public/assets/landing/brushNumbers/allNumbers.js';
import { images } from 'public/assets/landing/actionStep/images.js';
import { blotches } from 'public/assets/landing/paintBlobs/blotches.js';

export const HowItWorks = ({ title, cards, about }) => (
    <Wrapper>
        <About>{about}</About>
        <Title>{title}</Title>
        <Cards>
            {cards.map(({ titleText, number, flexDirection, image, brushImage }, i) => (
                <ActionStep key={(titleText, i)} flexDirection={flexDirection}>
                    <Text>
                        <Number>
                            <Image src={brushNumber[number]} width={110} height={180} />
                        </Number>
                        <ActionTitle>{titleText}</ActionTitle>
                    </Text>
                    <Images>
                        <Blotch number={number}>
                            <Image src={blotches[number]} width={200} height={180} />
                        </Blotch>
                        <Photo>
                            <Image src={images[image]} width={800} height={400} />
                        </Photo>
                    </Images>
                </ActionStep>
            ))}
        </Cards>
        <LinkButton title={'sign up'} />
    </Wrapper>
);

export default HowItWorks;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    padding-top: 12rem;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Title = styled.div`
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-size: ${(p) => p.theme.font.large};
    ${(props) => props.theme.flex.vertical.center};
    line-height: 5rem;
    margin-top: 2.8rem;
    justify-content: center;
    margin-top: 8rem;
    text-transform: uppercase;
`;
const Cards = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    justify-content: center;
    padding-top: 5rem;
    margin: 0 auto;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const About = styled.div`
    font-weight: bold;
    font-size: ${(p) => p.theme.font.mediumLarge};
    text-transform: none;
    width: 80%;
    ${(props) => props.theme.flex.vertical.center};
    text-align: center;
    margin-top: 10%;
    line-height: 5rem;
    font-weight: ${(props) => (props.i > 0 ? 300 : 800)};
`;

const ActionStep = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    height: 45rem;
`;
const Images = styled.div`
    position: relative;
    flex: 1;
`;
const Text = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 5rem;
    justify-content: space-around;
    position: relative;
`;
const Number = styled.div`
    position: absolute;
    top: -7rem;
    width: 10rem;
    left: -4rem;
    z-index: 12;
`;

const ActionTitle = styled.div`
    font-size: 2.5rem;
    margin-left: 10%;
    width: 100%;
    text-align: left;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    margin-top: -4rem;
`;

const Blotch = styled.div`
    position: absolute;
    top: ${(props) => (props.number < 3 ? '-2rem' : '7rem')};
    right: ${(props) => (props.number < 3 ? '2rem' : '3rem')};
    transform: scaleX(${(props) => (props.number === 3 ? '1' : '-1')});
    width: ${(props) => (props.number === 1 ? '25rem' : '15rem')};
    @media (max-width: 768px) {
        opacity: 0.2;
    }
`;
const Photo = styled.div`
    clip-path: polygon(0 19%, 100% 7%, 100% 88%, 0 77%);
    overflow: hidden;
    width: 130%;
    margin-left: -20%;
    z-index: 4;
    @media (max-width: 768px) {
        margin-left: -10%;
        width: 110%;
    }
`;
