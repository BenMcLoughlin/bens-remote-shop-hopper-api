import React from 'react';
import styled from 'styled-components';
import { LinkText } from '..';
import Image from 'next/image';
import guysTalking from '../../public/assets/shutterstock/group-of-young-businesspeople-with-laptop-working-8SHTZUN.jpeg';
import vrHeadset from '../../public/assets/shutterstock/wearingGoggles.jpeg';

export const Article = ({ icon, title, subTitle, content, number, flexDirection, image }) => {
    const images = {
        guysTalking,
        vrHeadset,
    };
    return (
        <Wrapper flexDirection={flexDirection}>
            <Left>
                <Image src={images[image]} width={1500} height={800} />{' '}
            </Left>
            <Text>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <Content>{content}</Content>
                <LinkText title={'Read More'} accent="red" />
            </Text>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 60rem;
    width: 100%;
    display: flex;
    flex-direction: ${(p) => p.flexDirection};
    opacity: ${(props) => props.theme.opacity};
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    width: 60%;
    padding: 3rem;
    height: 50rem;
    overflow: hidden;
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: space-around;
    position: relative;
    height: 30rem;
    width: 35rem;
    margin-top: 3rem;
`;

const Title = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    height: 10rem;

    text-align: left;

    font-weight: 500;

    line-height: 5.5rem;
`;
const SubTitle = styled.div`
    font-size: ${(p) => p.theme.font.small};
    height: 2rem;
    text-transform: none;
    font-weight: 400;
    margin-top: 1rem;

`;
const Content = styled.div`
    font-size: ${(p) => p.theme.font.small};
    height: 8rem;
    text-transform: none;
    font-weight: 400;


    margin-top: 1rem;
`;
