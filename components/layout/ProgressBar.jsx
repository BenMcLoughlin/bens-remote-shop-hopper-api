/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export const ProgressBar = ({ progress, length }) => {
    const completed = Number((progress / length) * 100).toFixed();

    return (
        <Wrapper>
            <Square completed={completed} />
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 0.5rem;
    width: 100%;
    background: #eae2e2;
    box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
    display: flex;
    position: relative;
`;

const Square = styled.div`
    height: 0.5rem;
    width: ${ (props) => `${ props.completed }%` };
    background: #14c691;
    transition: all 0.6s ease;
`;