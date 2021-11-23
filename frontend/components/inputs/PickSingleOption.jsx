/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

export const PickSingleOption = ({ handleChange, value, name, options }) => {
    console.log('value: ', value);
    const [selected, setSelected] = useState(value);

    const { length } = options;
    const positionIndex = options.findIndex((d) => d === selected);

  
    return (
        <Wrapper value={value} options={options} length={options.length}>
            {options.map((option, i) => (
                <Number
                    key={option}
                    selected={option === value}
                    onClick={() => {
                        handleChange(option, name);
                        setSelected(option);
                    }}>
                    {option}
                </Number>
            ))}

            <Pill value={value} options={options} positionIndex={positionIndex} />
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 3.5rem;
    display: flex;
    width: ${(props) => props.length * 7}rem;
    justify-content: left;
    align-items: center;
    position: relative;

    margin: 0 auto;
`;

const Number = styled.div`
    height: 7rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.font.medium};
    font-weight: bold;
    cursor: pointer;
    color: ${(p) => (p.selected ? 'white' : p.theme.color.text)};
    z-index: 1;
`;

const Pill = styled.div`
        position: absolute;
        min-width: 6rem;
        height: 6rem;
        top: -4ren;
        left: .5rem;
        border-radius: 50%;
        background: ${(props) => props.theme.color.blue};
          transform: ${(props) => `translate(${props.positionIndex * 7}rem, 0)`};
        transition: all .3s ease;
        animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
        -webkit-box-shadow: 0.1rem 11px 42px -28px rgba(0,0,0,0.75);
-moz-box-shadow: 0.1rem 11px 42px -28px rgba(0,0,0,0.75);
box-shadow: 0.1rem 11px 42px -28px rgba(0,0,0,0.75);
}
`;
