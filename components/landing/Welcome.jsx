import React, { useState } from 'react';
import styled from 'styled-components';
import { SquareButton } from '../../components';
import women from '../../public/assets/shutterstock/twoWomen.png';
import paint1 from '../../public/assets/paintBlobs/hero-bg-3.png';
import { useOnScreen } from '../../hooks/useOnScreen';

import Image from 'next/image';

export const Welcome = ({ title, subTitle }) => {
    const [setEntered, enteredScreen] = useOnScreen({ rootMargin: '-30%', threshold: 0 });
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0,
    });

    function handleMouseMove(ev) {
        setMousePosition({ left: ev.pageX, top: ev.pageY });
    }
    return (
        <Wrapper>
            <Left>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <ButtonWrapper>
                    <SquareButton title={'Start Shopping'} />
                </ButtonWrapper>
            </Left>
            <Right>
                <Blotch1 onMouseMove={(ev) => handleMouseMove(ev)} MousePosition={MousePosition}>
                    <Image src={paint1} width={1000} height={700} />
                </Blotch1>
                <ImageWrapper ref={setEntered} visible={enteredScreen}>
                    <Image src={women} width={1000} height={1200} />
                </ImageWrapper>
            </Right>
        </Wrapper>
    );
};

export default Welcome;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    position: relative;
    opacity: ${(props) => props.theme.opacity};
`;

const Title = styled.h1`
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-size: ${(p) => p.theme.font.largest};
    color: ${(p) => p.theme.color.text};
    font-weight: bold;
    text-transform: uppercase;
    line-height: 15rem;
    letter-spacing: 0.7px;
    margin-left: 4.5rem;
    width: 55rem;
    z-index: 2;
`;
const SubTitle = styled.h2`
    line-height: 3rem;
    font-size: ${(p) => p.theme.font.smallMedium};
    margin-top: 1rem;
    margin-left: 2rem;
    width: 60rem;
    font-weight: 400;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 3rem;
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
`;
const ImageWrapper = styled.div`
    position: absolute;
    top: -5rem;
    left: ${(p) => (p.visible ? '-5rem' : '10rem')};
    width: 55rem;
    transition: all 0.4s ease;
`;
const Blotch1 = styled.div`
    position: absolute;
    top: 15rem;
    width: 70rem;
    left: 12rme;
    transition: all 0.3s ease;
`;

const ButtonWrapper = styled.div`
    margin-top: 8rem;
    margin-left: 3rem;
`;
/*
const Blotch1 = styled.div`
    position: absolute;
    top: ${(p) => p.MousePosition.top / 70}rem;
    width: 70rem;
    left: ${(p) => -p.MousePosition.left / 100}rem;
    transition: all 0.3s ease;
`;
*/