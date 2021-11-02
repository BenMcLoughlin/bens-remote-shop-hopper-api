/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { blotches } from 'public/assets/landing/paintBlobs/blotches.js';
import { clothingIcons } from 'public/assets/landing/clothingIcons/index.js';
import { background } from 'public/assets/landing/shutterstock/index.js';

export const Callout = ({ title, subTitle, image, blotch1, blotch2, clothingIcon }) => (
    <Wrapper>
        <BackgroundImage>
            <Image src={background[image]} width={3000} height={2000} />
        </BackgroundImage>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />
        <Blotch1>
            <Image src={blotches[blotch2]} width={3000} height={2000} />
        </Blotch1>
        <Blotch2>
            <Image src={blotches[blotch1]} width={200} height={200} />
        </Blotch2>
        <ClothingIcon>
            <Image src={clothingIcons[clothingIcon]} width={200} height={200} />
        </ClothingIcon>
    </Wrapper>
);

export default Callout;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    margin-top: 10rem;
    color: black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    opacity: ${(p) => p.theme.opacity};
    position: relative;
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    position: relative;
    padding: 3rem;
    width: 100%;
    height: 40rem;
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 53rem;
    width: 115%;
    clip-path: polygon(0 0, 100% 4.5%, 100% 93%, 0% 100%);
    overflow: hidden;
    margin-left: -10%;
    @media (max-width: 600px) {
        opacity: 0.2;
        margin-left: -5%;
        width: 105%;
    }
    opacity: 0.6;
`;
const Title = styled.div`
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-size: ${(p) => p.theme.font.large};
    ${(props) => props.theme.flex.vertical.center};
    width: 80%;
    line-height: 5rem;
    text-transform: uppercase;
    text-align: center;
    z-index: 4;
    margin-left: 7rem;
    height: 20%;
    margin-top: -10%;
`;

const SubTitle = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-weight: bold;
    text-transform: uppercase;
    ${(props) => props.theme.flex.vertical.center};
    font-weight: bold;
    z-index: 4;
    font-weight: 500;
    margin-top: 5rem;
`;

const Blotch1 = styled.div`
    position: absolute;
    width: 15%;
    left: -10%;
    top: -10%;
    opacity: 0.7;
    @media (max-width: 600px) {
        top: -5%;
    }
`;
const Blotch2 = styled.div`
    position: absolute;
    bottom: -20%;
    right: 0%;
    height: 15%;
    width: 15%;
    opacity: 0.7;
    @media (max-width: 600px) {
        bottom: 5%;
    }
`;
const ClothingIcon = styled.div`
    position: absolute;
    bottom: -20%;
    right: 0%;
    height: 10%;
    width: 10%;
    opacity: 0.7;
    transform: rotate(-30deg);
    @media (max-width: 600px) {
        bottom: 5%;
    }
`;
