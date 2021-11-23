/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Search as SearchIcon } from '@styled-icons/bootstrap/Search';
import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle';
import brandsList from 'frontend/content/data/onboardOptions/brands.json';

export const Brands = ({ brands }) => {
    const { selectedValues, handleChange, options } = brands;
    const [selectedLetter, setSelectedLetter] = useState('A');
    const alphabet1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const alphabet2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const selectedBrands = brandsList.filter((d) => d[0] === selectedLetter);

    return (
        <Wrapper>
            <Question>{brands.question}</Question>
            <Alphabets>
                {[alphabet1, alphabet2].map((alphabet, i) => {
                    const positionIndex = alphabet.findIndex((d) => d === selectedLetter);
                    return (
                        <Alphabet key={i}>
                            {alphabet.includes(selectedLetter) && (
                                <Pill value={selectedLetter} options={alphabet} positionIndex={positionIndex} />
                            )}
                            {alphabet.map((letter) => (
                                <Letter
                                    key={letter}
                                    onClick={() => setSelectedLetter(letter)}
                                    selected={letter === selectedLetter}>
                                    {letter}
                                </Letter>
                            ))}
                        </Alphabet>
                    );
                })}
            </Alphabets>

            <Options>
                {selectedBrands.map((option) => (
                    <Option
                        key={option}
                        onClick={() => handleChange(option)}
                        selected={selectedValues.includes(option)}>
                        {option}
                        {selectedValues.includes(option) && (
                            <CheckCirlcleWrapper>
                                <CheckCircle />
                            </CheckCirlcleWrapper>
                        )}
                    </Option>
                ))}
            </Options>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin: 0 auto;
    gap: 2rem;
    @media (max-width: 600px) {
        height: 90rem;
    }
`;

const Question = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-family: 'Poppins', sans-serif;
    color: #12142d;
    height: 8rem;
    text-align: center;
    @media (max-width: 600px) {
        font-size: ${(p) => p.theme.font.medium};
        width: 80%;
    }
`;
const Alphabet = styled.div`


    height: 8rem;
    text-align: center;
    display: flex;
    position: relative;
    @media (max-width: 600px) {
        width: 80%;
    }
`;
const Alphabets = styled.div`
    height: 8rem;
    text-align: center;
    display: flex;
    position: relative;
    margin: 0 auto;
    @media (max-width: 600px) {
        flex-direction: column;
        height: 10rem;

    }
`;
const Letter = styled.div`
    color: ${(p) => (p.selected ? 'white' : ' #12142d')};
    font-size: ${(p) => p.theme.font.medium};
    width: 4rem;
    z-index: 10;
    cursor: pointer;
`;
const Pill = styled.div`
        position: absolute;
        min-width: 4rem;
        height: 4rem;
        top: -.4rem;
        left: -.1rem;
        border-radius: 50%;
        background: ${(props) => props.theme.color.blue};
          transform: ${(props) => `translate(${props.positionIndex * 4}rem, 0)`};
        transition: all .3s ease;
        animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
        -webkit-box-shadow: 0.1rem 11px 42px -28px rgba(0,0,0,0.75);
-moz-box-shadow: 0.1rem 11px 42px -28px rgba(0,0,0,0.75);
box-shadow: 0.1rem 11px 42px -28px rgba(0,0,0,0.75);
    @media (max-width: 600px) {
        transform: ${(props) => `translate(${props.positionIndex * 3.16}rem, 0)`};
    }
}
`;

const Options = styled.div`
    width: 70%;
    min-height: 20rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
    z-index: 1;
    margin: 0 auto;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const Option = styled.div`
    height: 7rem;
    width: 17rem;
    display: flex;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 0.05rem;
    background: ${(p) => (p.selected ? '#14C691' : '#e9ecef')};
    font-size: ${(p) => p.theme.font.small};
    justify-content: center;
    text-align: center;
    align-items: center;
    &:hover {
        background: #354e57;
        color: white;
    }
    padding: 1rem;
    position: relative;
    @media (max-width: 600px) {
        width: 17rem;
        height: 7rem;
    }
`;

const CheckCirlcleWrapper = styled.div`
    position: absolute;
    top: 0rem;
    right: 0rem;
    height: 2.5rem;
    width: 2.5rem;
    color: white;
`;
