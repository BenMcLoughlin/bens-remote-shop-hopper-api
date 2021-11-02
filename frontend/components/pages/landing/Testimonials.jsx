/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { profile, star } from 'public/assets/landing/testimonials/profile.js';

export const Testimonials = ({ title, subTitle, cards, i }) => (
    <Wrapper>
        <Top>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Top>
        <Cards>
            {cards.map(({ name, role, content, rating, image }) => (
                <Testimonial key={name}>
                    <ProfilePhoto>
                        <Image src={profile[image]} width={200} height={200} />
                    </ProfilePhoto>
                    <About>
                        <Name>{name}</Name>
                        <Role>{role}</Role>
                        <Content>{`"${content}"`}</Content>
                        <Stars>
                            {[1, 2, 3, 4, 5].map((d) => (
                                <Image key={d} src={star} width={15} height={15} />
                            ))}
                        </Stars>
                    </About>
                </Testimonial>
            ))}
        </Cards>
    </Wrapper>
);

export default Testimonials;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    margin-top: 20rem;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    height: 21rem;
    gap: 2rem;
    align-items: center;
    padding: 2rem;
`;
const Title = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    ${(props) => props.theme.flex.vertical.center};
    color: black;
    line-height: 5rem;
    text-align: center;
    font-weight: 800;
    margin-top: -0.8rem;
`;

const SubTitle = styled.div`
    font-size: ${(p) => p.theme.font.medium};
    ${(props) => props.theme.flex.vertical.center};
    line-height: 5rem;

    text-transform: uppercase;
`;

const Cards = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    padding-top: 5rem;
    flex-wrap: wrap;
    width: 100%;
`;

const Testimonial = styled.div`
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    justify-content: space-around;
    gap: 2rem;
    width: 32%;
    @media (max-width: 600px) {
        width: 80%;
    }
`;
const ProfilePhoto = styled.div`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    overflow: hidden;
    -webkit-box-shadow: 2px 39px 48px -16px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: 2px 39px 48px -16px rgba(0, 0, 0, 0.27);
    box-shadow: 2px 39px 48px -16px rgba(0, 0, 0, 0.27);
`;
const Name = styled.div`
    font-size: ${(p) => p.theme.font.smallMedium};
    font-weight: 800;
    margin-top: 5rem;
`;
const Role = styled.div`
    font-size: ${(p) => p.theme.font.smallMedium};
    font-weight: 300;
`;
const Content = styled.div`
    font-size: ${(p) => p.theme.font.small};
    font-style: italic;
    font-weight: 200;
    text-transform: none;
    text-align: center;
`;
const About = styled.div`
    font-size: ${(p) => p.theme.font.medium};
    flex: 2;

    padding: 2rem;
    margin-top: -7rem;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 6px 26px 48px -2px rgba(214, 214, 214, 1);
    -moz-box-shadow: 6px 26px 48px -2px rgba(214, 214, 214, 1);
    box-shadow: 6px 26px 48px -2px rgba(214, 214, 214, 1);
    &:hover {
        -webkit-box-shadow: 2px 3px 48px -16px rgba(0, 0, 0, 0.27);
        -moz-box-shadow: 2px 3px 48px -16px rgba(0, 0, 0, 0.27);
        box-shadow: 2px 3px 48px -16px rgba(0, 0, 0, 0.27);
    }
    transition: all 0.3s ease;
`;
const Stars = styled.div`
    font-size: ${(p) => p.theme.font.small};
    gap: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
