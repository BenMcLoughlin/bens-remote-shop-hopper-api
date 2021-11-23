import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Paragraph = ({ title, contents, align }) => (
    <Wrapper align={align}>
        <Title>{title}</Title>
        <Column>
            {contents.map((text) => (
                <Text>{text}</Text>
            ))}
        </Column>
    </Wrapper>
);

const propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string
};

Paragraph.propTypes = propTypes;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: 'Poppins', sans-serif;
    flex: 1;
    text-align: ${(p) => p.align};
`;

export const Title = styled.div`
    font-size: 3rem;
    font-weight: 900;
`;
export const Text = styled.p`
    font-size: 2rem;
    font-weight: 200;
    line-height: 4rem;
`;
export const Column = styled.p`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
