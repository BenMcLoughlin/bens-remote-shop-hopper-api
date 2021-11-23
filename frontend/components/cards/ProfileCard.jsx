import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

export const ProfileCard = ({ imgSrc, title, subTitles }) => (
    <Wrapper>
        <ImagWrapper>
            <Image src={imgSrc} width={500} height={500} loading="eager" layout="fill" />
        </ImagWrapper>
        <Title>{title}</Title>
        {subTitles.map((subTitle) => (
            <SubTitle key={subTitle}>{subTitle}</SubTitle>
        ))}
    </Wrapper>
);

const propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    subTitles: PropTypes.array
};

ProfileCard.propTypes = propTypes;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;
export const ImagWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 16rem;
    width: 16rem;
    border-radius: 50%;
    overflow: hidden;
`;

export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
`;
export const SubTitle = styled.p`
    width: 90%;

    text-align: center;
    font-weight: 100;
`;
