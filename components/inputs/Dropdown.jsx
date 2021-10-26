import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { startCase } from '../../utils/strings';

export const Dropdown = ({ title, options, value, handleChange, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper>
            <TitleBox onClick={() => setIsOpen(!isOpen)}>
                {value}
                <Icon isOpen={isOpen}>
                    <ArrowIosDownwardOutline />
                </Icon>
            </TitleBox>
            <Options isOpen={isOpen}>
                {options.map((option) => (
                    <Option
                        onClick={() => {
                            setIsOpen(false);
                            handleChange(option, name);
                        }}
                        selected={value === option}
                    >
                        {option}
                    </Option>
                ))}
            </Options>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.ul`
    display: flex;
    align-items: center;
    width: 28rem;
    height: 15rem;
    cursor: pointer;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
`;

const TitleBox = styled.div`
    border: 1px solid #354e57;
    height: 3rem;
    width: 100%;
    font-size: ${(p) => p.theme.font.small};
    padding: 0.5rem;
    position: relative;
    font-weight: bold;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${(p) => (p.isOpen ? '25rem' : '0')};
    overflow: scroll;
    transition: all 0.2s ease;
`;
const Option = styled.div`
    border: 1px solid #354e57;
    height: 3rem;
    width: 100%;
    padding: 0.5rem;
    padding-left: 0.9rem;
    font-size: ${(p) => p.theme.font.small};
    &:hover {
        background: #354e57;
        color: white;
    }
    transition: all 0.2s ease;
    text-align: center;
    cursor: pointer;
    background: ${(p) => p.selected && '#354e57'};
    color: ${(p) => p.selected && 'white'};
`;
const Icon = styled.div`
    height: 2.7rem;
    width: 2.7rem;
    position: absolute;
    top: 0.2rem;
    right: 0.3rem;
    transform: ${(p) => (p.isOpen ? 'rotate(0deg)' : 'rotate(-90deg)')};
    transition: all 0.2s ease;
`;
