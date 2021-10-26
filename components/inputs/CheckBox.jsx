/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { startCase } from '../../utils/strings/startCase.js';

export const CheckBox = ({ label, value, handleChange }) => (
    <Wrapper onClick={() => handleChange(!value)}>
        <Box selected={value} />
        <Text onClick={() => handleChange(!value)} selected={value}>
            {startCase(label)}
        </Text>
    </Wrapper>
);

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.ul`
    display: flex;
    align-items: center;
    width: 37rem;
    cursor: pointer;
    height: 8rem;
    margin-left: 4rem;
`;

const Text = styled.div`
    padding-left: 2rem;
    font-size: ${ (p) => p.theme.font.small };
`;

const Box = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 0.2rem;
    background: ${ (p) => (p.selected ? p.theme.color.dark : 'white') };
    border: 1px solid ${ (props) => props.theme.color.darkGrey };
    transition: all 0.2s ease;
`;