import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { GoogleMap } from 'frontend/components';

export const Location = (props) => (
    <Wrapper>
        <ImageWrapper>
            <Image
                src={'/../public/assets/onboard/shutterstock/womanInEurope.jpg'}
                width={1000}
                height={1000}
            />
        </ImageWrapper>
        <Left>
            <GoogleMap />
        </Left>
    </Wrapper>
);

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`;
const ImageWrapper = styled.div`
    width: 60%;
    margin-left: -10%;
    opacity: 0.8;
    @media (max-width: 600px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 110%;
        opacity: 0.2;
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    padding: 0.2rem;
    margin-top: 3rem;
`;
