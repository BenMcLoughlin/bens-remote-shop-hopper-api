/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Dropdown } from '../../components';

export const Gender = ({ gender }) => {
    const { images, dropdown, question } = gender;

    return (
        <Wrapper>
            <Left>
                {images.map(({ src, caption }) => (
                    <ImageWrapper key={caption}>
                        <Image src={src} layout="fill" />
                        <Caption>{caption}</Caption>
                    </ImageWrapper>
                ))}
            </Left>
            <Right>
                <Question>{question}</Question>
                <Dropdown {...dropdown} />
            </Right>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: row;
    }
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;
const ImageWrapper = styled.div`
    flex: 1;
    position: relative;
`;
const Caption = styled.div`
    position: absolute;
    top: 12rem;
    left: 5rem;
    text-transform: uppercase;
    font-size: ${ (p) => p.theme.font.medium };
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
`;
const Question = styled.div`
    font-size: ${ (p) => p.theme.font.mediumLarge };
    font-family: 'Poppins', sans-serif;
    color: #12142d;
`;