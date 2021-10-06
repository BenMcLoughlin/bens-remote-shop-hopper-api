import React from 'react';
import styled from 'styled-components';
import { Explainer } from '../../components';
import Image from 'next/image';
import womanChoosing from '../../public/assets/shutterstock/womanChoosing.jpg';
import blotch1 from '../../public/assets/paintBlobs/hero-bg-2.png';
import blotch2 from '../../public/assets/paintBlobs/basketball4all_graphic1-2.png';

export const WhoWeAre = ({ title, subTitles, cards }) => {
    return (
        <Wrapper>
            <Section>
                <BackgroundImage>
                    <Image src={womanChoosing} width={3000} height={2000} />
                </BackgroundImage>

                <Title>{title}</Title>
            </Section>
            <SubTitles>
                {subTitles.map((subTitle, i) => (
                    <SubTitle i={i}>{subTitle}</SubTitle>
                ))}
            </SubTitles>
            <Cards>
                {cards.map((card) => (
                    <Explainer {...card} />
                ))}
            </Cards>
            <Blotch1>
                <Image src={blotch1} width={300} height={200} />
            </Blotch1>
            <Blotch2>
                <Image src={blotch2} width={200} height={200} />
            </Blotch2>
        </Wrapper>
    );
};

export default WhoWeAre;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    margin-top: 15rem;
    position: relative;
 
`;
const Section = styled.div`
    height: 60em;
    display: flex;
    justify-content: center;
`;
const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 53rem;
    width: 110%;
    clip-path: polygon(0 0, 100% 4.5%, 100% 93%, 0% 100%);
    overflow: hidden;
    margin-left: -10%;
`;
const Title = styled.div`
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-size: ${(p) => p.theme.font.large};
    ${(props) => props.theme.flex.vertical.center};
    color: black;
    width: 60rem;
    height: 37rem;
    line-height: 5rem;
    text-transform: uppercase;
    text-align: center;
    z-index: 4;
    margin-left: 7rem;
    
`;
const SubTitles = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: black;
`;
const SubTitle = styled.div`
    font-weight: bold;
    text-transform: none;
    ${(props) => props.theme.flex.vertical.center};
    width: 70rem;
    text-align: center;
    height: 20rem;
    line-height: 5rem;
    font-weight: ${(props) => (props.i > 0 ? 300 : 800)};
`;
const Cards = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    width: 80%;
    gap: 1rem;
    margin-top: 4rem;
    justify-content: space-around;
    padding-top: 5rem;
    flex-wrap: wrap;
    margin: 0 auto;
`;
const Blotch1 = styled.div`
    position: absolute;
    top: -8rem;
    left: -15rem;
    height: 22rem;
    width: 25rem;
`;
const Blotch2 = styled.div`
    position: absolute;
    top: 43rem;
    right: -4rem;
    height: 22rem;
    width: 24rem;
`;
