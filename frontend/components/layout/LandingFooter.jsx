/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import greenCircles from 'public/assets/landing/footer/greenCircles.png';
import phone from 'public/assets/landing/footer/phone.png';
import { LinkButton } from '..';
import { useOnScreen } from 'frontend/hooks/useOnScreen';

export const LandingFooter = ({ top, bottom, options }) => {
    const [setEntered, enteredScreen] = useOnScreen({ rootMargin: '-10%', threshold: 0 });

    return (
        <Wrapper>
            <Top>
                <Background>
                    <Image src={greenCircles} layout="fill" />
                </Background>
                <Phone ref={setEntered} visible={enteredScreen}>
                    <Image src={phone} width={600} height={800} />
                </Phone>
                <Right>
                    <Title>{top.title}</Title>
                    <SubTitle>{top.subTitle}</SubTitle>
                    <LinkButton
                        title={'Private Beta Sign Up'}
                        gradient={'secondary'}
                        icon={'rocket'}
                        href="auth/signup"
                    />
                </Right>
            </Top>
            <Bottom>
                <Title>{bottom.title}</Title>
                <SubTitle>{bottom.subTitle}</SubTitle>
                <Buttons>
                    <LinkButton title={'Private Beta Sign Up'} />
                    {/* <Button title={'News Letter'} gradient={'none'} icon={'plane'} radius="round" /> */}
                </Buttons>
                {/* <Social>
                    {options.social.map((d) => (
                        <SocialLink key={d}>{d}</SocialLink>
                    ))}
                </Social> */}
                {/*  <Copyright>
                    {options.copyright.map((d, i) => (
                        <>
                            <CopyrightText>{d}</CopyrightText>
                            {i < 2 && <Vr />}
                        </>
                    ))}
                </Copyright> */}
            </Bottom>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    margin-top: 30rem;
    color: white;
`;
const Top = styled.div`
    position: relative;
    background: -webkit-linear-gradient(bottom left, #14c792, #14e2a4);
    background: -moz-linear-gradient(bottom left, #14c792, #14e2a4);
    background: linear-gradient(to top right, #14c792, #14e2a4);
    height: 50rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const Right = styled.div`
    z-index: 2;
    right: 4rem;
    display: flex;
    width: 60%;
    height: 80%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const Title = styled.div`
    font-size: ${(props) => props.theme.font.mediumLarge};
    font-weight: 600;
`;
const SubTitle = styled.div`
    font-size: ${(props) => props.theme.font.smallMedium};
    font-weight: 200;
    line-height: 3rem;
`;

const Phone = styled.div`
    position: absolute;
    top: ${(p) => (p.visible ? '-25rem' : '-10rem')};
    left: 5rem;
    height: 80rem;
    width: 50rem;
    transition: all 1s ease;
    @media (max-width: 700px) {
        width: 20rem;
        height: 20rem;
    }
`;
const Background = styled.div`
    position: absolute;
    top: 0rem;
    left: 0rem;
    height: 100%;

    width: 100%;
`;
const Bottom = styled.div`
    background: yellow;
    height: 60rem;
    ${(props) => props.theme.flex.center};
    flex-direction: column;
    justify-content: space-around;
    padding: 5rem;
    ${(p) => p.theme.gradient.secondary};
`;
const Buttons = styled.div`
    width: 40rem;
    display: flex;
    justify-content: space-around;
`;
const Social = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;
const SocialLink = styled.div`
    border-bottom: 1px solid white;
    font-size: ${(props) => props.theme.font.small};
    height: 2.5rem;
    font-weight: 200;
    opacity: 0.6;
`;
const Copyright = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    display: flex;
    align-items: center;
    opacity: 0.6;
`;
const CopyrightText = styled.div`
    font-size: ${(props) => props.theme.font.small};
    height: 2.5rem;
    font-weight: 200;
`;
const Vr = styled.div`
    border-right: 1px solid white;
    height: 3.5rem;
`;
