import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';

export const Search = () => {
    return (
        <Wrapper>
            <Input placeholder={'Search your item here...'} />
            <SearchButton>
                <Icon>
                    <MagnifyingGlass />
                </Icon>
                Search
            </SearchButton>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 3.2rem;
    width: 48%;
    border-radius: 1rem;
    background: yellow;
    position: relative;
`;
const Input = styled.input`
    height: 3.2rem;
    width: 100%;
    border-radius: 1rem;
    padding-left: 2rem;
    background: white;
    font-size: ${(p) => p.theme.font.small};
    border: 1px solid ${(props) => props.theme.color.lightGrey};
    &:focus {
        outline: none;
        border: 1px solid ${(props) => props.theme.color.greenLight};
        color: ${(props) => props.theme.color.darkGrey};
    }
`;
const SearchButton = styled.button`
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    height: 3rem;
    width: 15%;
    border-radius: 1rem;
    cursor: pointer;
    background: ${(p) => p.theme.color.greenDark};
    color: white;
    border: none;
`;
const Icon = styled.div`
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    height: 2rem;
    width: 2rem;
    color: white;
`;
