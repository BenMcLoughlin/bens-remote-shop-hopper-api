import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Search as SearchIcon } from '@styled-icons/bootstrap/Search';
import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle';

export const Brands = ({ brands }) => {
    const { selectedValues, handleChange, options } = brands;
    const [searchValue, setSearchValue] = useState('');

    let filteredOptions =
        searchValue.length > 2
            ? options.filter((d) => d.toLowerCase().includes(searchValue.toLowerCase()))
            : options;

    // filteredOptions = filteredOptions.filter((d) => !selectedValues.includes(d));
    return (
        <Wrapper>
            <Question>{brands.question}</Question>
            {/* <Options>
                {selectedValues.map((selected) => (
                    <Option>{selected}</Option>
                ))}
            </Options> */}
            {/* <SearchBar>
                <IconWrapper>
                    <SearchIcon />
                </IconWrapper>
                <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </SearchBar> */}
            <Options>
                {filteredOptions.slice(0, 10).map((option) => (
                    <Option
                        onClick={() => handleChange(option)}
                        selected={selectedValues.includes(option)}
                    >
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

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    height: 80rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin: 0 auto;
    gap: 2rem;
    @media (max-width: 600px) {
        height: 60rem;
    }
`;

const Question = styled.div`
    font-size: ${(p) => p.theme.font.mediumLarge};
    font-family: 'Poppins', sans-serif;
    color: #12142d;
    height: 8rem;
    text-align: center;
    @media (max-width: 600px) {
        width: 80%;
    }
`;

const Options = styled.div`
    width: 70%;
    min-height: 20rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 2rem;
    justify-content: space-around;
    z-index: 1;
    opacity: 0.8;

`;

const Option = styled.div`
    height: 7rem;
    width: 17rem;
    display: flex;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 5px;
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
        width: 47%;
        height: 25%;
    }
`;
const SearchBar = styled.div`
    width: 35rem;
    z-index: 3;
    height: 8rem;
    position: relative;
`;
const SearchInput = styled.input`
    height: 4rem;
    width: 35rem;
    background: white;
    padding: 1rem;
    border-radius: 5px;
`;
const IconWrapper = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 1.5rem;
    width: 1.5rem;
`;
const CheckCirlcleWrapper = styled.div`
    position: absolute;
    top: 0rem;
    right: 0rem;
    height: 2.5rem;
    width: 2.5rem;
    color: white;
`;