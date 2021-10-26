import styled from 'styled-components';
import { explainerSvgs } from 'public/assets/svgs/explainers/explainerSvgs.js';
import Image from 'next/image';

export const WhoWeAre = ({ title, cards }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Cards>
                {cards.map(({ icon, title, subTitle }) => (
                    <Explainer>
                        <Icon>
                            <Image
                                src={explainerSvgs[icon]}
                                className="image"
                                width={80}
                                height={80}
                            />
                        </Icon>
                        <CardTitle>{title}</CardTitle>
                        <ExplainerSubTitle>{subTitle}</ExplainerSubTitle>
                    </Explainer>
                ))}
            </Cards>
        </Wrapper>
    );
};

export default WhoWeAre;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    margin-top: 15rem;
    position: relative;
    width: 100%;
`;

const Title = styled.div`
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-size: ${(p) => p.theme.font.large};
    ${(props) => props.theme.flex.vertical.center};
    line-height: 5rem;
    margin-top: 2.8rem;
    justify-content: center;
    margin-top: 8rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;

const Cards = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    width: 100%;
    gap: 2rem;
    margin-top: 4rem;
    justify-content: space-around;
    padding-top: 5rem;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    
`;

const Explainer = styled.div`
    height: 45rem;
    width: 23%;
    font-size: 1rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    border-radius: 3rem;
    &:hover {
        background: ${(p) => p.theme.color.blueLight};
        color: white;
    }
    transition: all 0.5s ease;
    padding: 2rem;

    justify-content: space-around;
    -webkit-box-shadow: 6px 26px 48px -2px rgba(214, 214, 214, 1);
    -moz-box-shadow: 6px 26px 48px -2px rgba(214, 214, 214, 1);
    box-shadow: 6px 26px 48px -2px rgba(214, 214, 214, 1);
    @media (max-width: 600px) {
        width: 42%;
    }
`;
const Icon = styled.div`
    height: 12rem;
    width: 12rem;
    margin: 0 auto;
`;
const CardTitle = styled.div`
    height: 30%;
    font-size: ${(p) => p.theme.font.smallMedium};
    font-weight: bold;
    padding: 2rem;
`;
const ExplainerSubTitle = styled.div`
    height: 40%;
    font-size: ${(p) => p.theme.font.small};
    padding: 2rem;
    font-weight: 200;
    text-transform: none;
`;
