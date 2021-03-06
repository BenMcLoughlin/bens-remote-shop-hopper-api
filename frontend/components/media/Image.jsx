import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

export const _Image = ({ src, width = 900, height = 600 }) => (
    <Wrapper>
        <ImageWrapper>
            <Image src={src} width={width} height={height} loading="eager" />
        </ImageWrapper>
    </Wrapper>
);

const propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

_Image.propTypes = propTypes;

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    padding: 5rem;
    align-items: center;

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
    width: 100%;
`;
