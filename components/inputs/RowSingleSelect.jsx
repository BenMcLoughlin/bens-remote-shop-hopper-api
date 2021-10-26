import React, { useState } from 'react';
import styled from 'styled-components';

export const RowSingleSelect = ({ options, handleChanges, styles, title, value }) => {
    const [selected, setSelected] = useState(value);

    const { length } = options;
    const positionIndex = options.findIndex((d) => d === selected);
    return (
        <Wrapper styles={styles}>
            <Title>{title}</Title>
            <Options length={length}>
                {options.map((option, i) => (
                    <Option
                        id={`option_${i + 1}`}
                        key={i}
                        className={'enablesTransition'}
                        onClick={() => {
                            handleChanges[option]();
                            setSelected(option);
                        }}
                        selected={option === selected}
                    >
                        {option}
                    </Option>
                ))}
                <Pill selected={selected} positionIndex={positionIndex}></Pill>
            </Options>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    ${(props) => props.styles}
`;

const Option = styled.div`
    position: relative;
    width: 10rem;
    min-height: 3rem;
    transition: all 2s ease;
    color: ${(props) => props.theme.color.darkGrey};
    text-align: center;
    z-index: 1;
    transition: all 100ms linear 0s;
    margin: 0px;
    border-radius: 2.5rem;
    text-transform: Capitalize;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.font.small};
`;
const Options = styled.div`
    display: flex;
    width: ${(props) => props.length * 10}rem;
    height: 5rem;
    margin: 0px;
    padding: 0px;
    flex-direction: row;
    position: relative;
`;
const Title = styled.div`
    position: relative;
    min-width: 10rem;
    min-height: 3rem;
    z-index: 1;
    text-transform: Capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.font.smallest};
`;
const Pill = styled.div`
        position: absolute;
        min-width: 10rem;
        height: 3rem;
        top: 1rem;
        background-color: #4F9190;
        transform: ${(props) => `translate(${props.positionIndex * 10}rem, 0)`};
        transition: all .3s ease;
        border-radius: 15px;
        animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
        ${(props) => props.theme.neomorph};
}
`;
