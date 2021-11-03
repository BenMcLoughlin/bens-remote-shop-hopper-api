/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Dropdown, CheckBox } from 'frontend/components';
import womanInStore from 'public/assets/onboard/shutterstock/womanInStore.jpg';

export const Sizes = ({ sizes }) => {
    const { sizeTypes, handleChange } = sizes;

    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={womanInStore} width={900} height={1000} loading="eager" />
            </ImageWrapper>
            <Right>
                {sizeTypes.map((sizeType) => (
                    <SizeSelector key={sizeType}>
                        <Question>{sizeType.question}</Question>
                        <Dropdown {...sizeType} handleChange={handleChange} />
                    </SizeSelector>
                ))}
            </Right>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
`;
const ImageWrapper = styled.div`
    width: 50%;
    height: 70rem;
    opacity: 0.8;
    @media (max-width: 600px) {
        position: absolute;
        width: 100%;
        opacity: 0.2;
    }
`;
const Right = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const Question = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-family: 'Poppins', sans-serif;
    color: #12142d;
    height: 8rem;
`;

const SizeSelector = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
