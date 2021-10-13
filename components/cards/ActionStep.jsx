import React from 'react';
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { SquareButton } from '../../components';
import Image from 'next/image';
import { brushNumber } from '../../public/assets/brushNumbers/allNumbers';
import { images } from '../../public/assets/actionStep/images.js';
import { blotches } from '../../public/assets/paintBlobs/blotches.js';
import arrow from '../../public/assets/arrows/DownBlueArrow.png';

export const ActionStep = ({ icon, title, subTitle, content, number, flexDirection, image }) => (
    <Wrapper flexDirection={flexDirection}>
        <Left>
            <Blotch number={number}>
                <Image src={blotches[number]} width={200} height={180} />
            </Blotch>
            <Photo>
                <Image src={images[image]} width={800} height={400} />
            </Photo>
            <Arrow number={number}>
                <Image src={arrow} width={200} height={180} />
            </Arrow>
        </Left>

        <Text>
            <Number>
                <Image src={brushNumber[number]} width={110} height={180} />
            </Number>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <Hr />
            <Content>{content}</Content>
            <SquareButton title={'Get Started'} />
        </Text>
    </Wrapper>
);

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 50rem;
    width: 100%;
    display: flex;
    flex-direction: ${ (p) => p.flexDirection };
    padding: 5rem;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    width: 80rem;
    position: relative;
    height: 40rem;
    display: flex;
    justify-content: center;
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 40rem;
    padding-left: 5rem;
    justify-content: space-around;
    position: relative;
`;
const Number = styled.div`
    position: absolute;
    top: -4rem;
    height: 10rem;
    width: 10rem;
    left: -4rem;
`;
const Arrow = styled.div`
    position: absolute;
    top: -5rem;
    height: 10rem;
    width: 15rem;
    left: 12rem;
    transform: scaleX(${ (props) => (props.number === 3 ? '1' : '-1') });
`;

const Title = styled.div`
    font-size: ${ (p) => p.theme.font.medium };
    margin-left: 10%;
    height: 10rem;
    width: 100%;
    text-align: left;
`;
const SubTitle = styled.div`
    font-size: ${ (p) => p.theme.font.small };
    height: 15rem;
    padding: 3rem;
`;
const Content = styled.div`
    font-size: ${ (p) => p.theme.font.small };
    padding: 3rem;
    height: 20rem;
    text-transform: none;
`;
const Blotch = styled.div`
    position: absolute;
    top: ${ (props) => (props.number < 3 ? '-5rem' : '30rem') };
    right: ${ (props) => (props.number < 3 ? '2rem' : '55rem') };
    height: 10rem;
    transform: scaleX(${ (props) => (props.number === 3 ? '1' : '-1') });
    z-index: ${ (props) => (props.number === 1 ? '-1' : '1') };
    width: ${ (props) => (props.number === 1 ? '25rem' : '15rem') };
`;
const Hr = styled.div`
    height: 0.1rem;
    width: 10%;
    margin-left: 10%;
    margin-top: 1rem;
    background: red;
`;
const Photo = styled.div`
    clip-path: polygon(0 19%, 100% 7%, 100% 88%, 0 77%);
    overflow: hidden;
`;