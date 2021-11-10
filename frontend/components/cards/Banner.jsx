import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

export const Banner = ({ title, subTitle, imgSrc }) => {
    return (
        <Wrapper>
            <Text>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </Text>

            <Background>
                <Image src={imgSrc} width={700} height={900} loading="eager" layout="fill" />
            </Background>
        </Wrapper>
    );
};

const propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    paragraph: PropTypes.string
};

Banner.propTypes = propTypes;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 120%;
    margin: 0 auto 0 -10%;
    height: 20rem;
    position: relative;
`;
const Background = styled.div`
    position: absolute;
    top: 0rem;
    left: 0rem;
    height: 20rem;
    width: 100%;
    opacity: 0.4;
`;
export const Title = styled.div`
    font-size: 8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    z-index: 1;

`;
export const SubTitle = styled.div`
    font-size: 3rem;
    z-index: 1;
    padding: 0;
    margin-top: -2rem;

`;
export const Text = styled.div`
    font-size: 3rem;
    z-index: 1;
    padding: 0;

    margin: 1% 25%;
    display: flex;
    flex-direction: column;
`;
