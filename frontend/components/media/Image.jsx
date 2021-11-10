import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

export const _Image = ({ src }) => (
    <Wrapper>
        <ImageWrapper>
            <Image src={src} width={50} height={50} loading="eager" layout="fill" />
        </ImageWrapper>
    </Wrapper>
);

const propTypes = {
    src: PropTypes.string
};

_Image.propTypes = propTypes;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
   
    padding: 5rem;
    @media (max-width: 800px) {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.1;
        width: 100%;
        border-radius: 2rem;
        overflow: hidden;
        height: 100%;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 85%;
    height: 95%;
`;
