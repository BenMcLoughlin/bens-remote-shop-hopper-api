import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { Link } from 'react-scroll';

export const Back = ({ handleChange }) => {
    return (
        <Wrapper>
            <Circle>
                <ArrowRight onClick={() => handleChange()} />
            </Circle>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled(Link)`
    z-index: 50;
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    transform: rotate(180deg);
    cursor: pointer;
`;

const Circle = styled.div`
    border-radius: 50%;
    ${(props) => props.theme.neomorph};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.2rem;
    width: 5.2rem;
`;

const ArrowRight = styled(ArrowIosForwardOutline)`
    height: 3.2rem;
    width: 3.2rem;
    color: ${(props) => props.theme.color.darkGrey};
    z-index: 500;
`;
