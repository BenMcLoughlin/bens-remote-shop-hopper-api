import React from 'react';
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Image from 'next/image';
import heels from '../../public/assets/shutterstock/heel.jpg';
import blotch1 from '../../public/assets/paintBlobs/basketball4all_graphic3-2.png';
import blotch2 from '../../public/assets/paintBlobs/basketball4all_graphic1-2.png';
import { SquareButton } from '../../components';

export const Callout = ({ title, subTitle, text }) => (
    <Wrapper>
        <BackgroundImage>
            <Image src={heels} className="image" width={3000} height={2000} />
        </BackgroundImage>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <ButtonWrapper>
            <SquareButton title={'Sign up!'} />
        </ButtonWrapper>
        <Blotch1>
            <Image src={blotch1} className="image" width={200} height={200} />
        </Blotch1>
        <Blotch2>
            <Image src={blotch2} className="image" width={500} height={400} />
        </Blotch2>
    </Wrapper>
);

export default Callout;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 63rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    opacity: ${ (p) => p.theme.opacity };
    position: relative;
    font-family: 'Yanone Kaffeesatz', Sans-serif;
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 0,
    left: 0;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 4.5%, 100% 93%, 0% 100%);
    height: 53rem;
`;
const Title = styled.div`
    font-size: ${ (p) => p.theme.font.large2 };
    ${ (props) => props.theme.flex.vertical.center };
    color: black;
    width: 70%;
    height: 12rem;
    line-height: 5rem;
    text-transform: uppercase;
    justify-content: center;
    margin-top: 2.8rem;
    color: white;
    z-index: 2;
`;
const SubTitle = styled.div`
    font-size: ${ (p) => p.theme.font.mediumLarge };
    font-weight: bold;
    text-transform: uppercase;
    ${ (props) => props.theme.flex.vertical.center };
    width: 70%;
    text-align: center;
    line-height: 5rem;
    font-weight: bold;
    color: white;
    z-index: 2;
    font-weight: 500;
`;
const ButtonWrapper = styled.div`
    margin-top: 8rem;
    margin-left: 3rem;
    z-index: 2;
`;
const Blotch1 = styled.div`
    position: absolute;
    top: -1rem;
    left: -2rem;
    height: 40rem;
    width: 30rem;
`;
const Blotch2 = styled.div`
    position: absolute;
    top: 40rem;
    right: 0rem;

    width: 40rem;
`;