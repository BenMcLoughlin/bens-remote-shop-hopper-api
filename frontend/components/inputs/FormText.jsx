/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { startCase } from 'frontend/utils/strings';

export const FormText = ({
    handleChange,
    value = '',
    label = '',
    handleErrors,
    type,
    setErrors,
    errors,
    fields
}) => {
    const [blurred, setBlurred] = useState(false);
    const [wasValid, setWasValid] = useState(false);
    const [error, setError] = useState(false);
    const reference = useRef('hi');

    useEffect(() => {
        if (blurred || wasValid) {
            const { isError, message } = handleErrors(value, fields);
            setError(isError ? message : false);
            setErrors({ ...errors, [label]: error });
        } else if (error) {
            setError(false);
            setWasValid(true);
        }
    }, [value, handleErrors, blurred, error, wasValid]);

    return (
        <Wrapper>
            <Input
                id={label}
                name={label}
                type={type}
                value={value}
                onChange={(e) => handleChange(e)}
                placeholder={''}
                onBlur={() => setBlurred(true)}
            />
            <Label textValue={value} htmlFor={label}>
                <LabelText>{startCase(label)}</LabelText>
            </Label>
            <Error error={error}>{error}</Error>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    position: relative;
    height: 7rem;
`;

const Input = styled.input`
    position: absolute;
    border: none;
    width: 36rem;
    top: 0.5rem;
    height: 4.3rem;
    padding: 0.5rem 0 0.5rem 2rem;
    font-size: ${(props) => props.theme.font.small};
    position: relative;
    background: white;
    border: none;
    color: ${(props) => props.theme.color.darkGrey};
    font-weight: bold;
    border-radius: 0.05rem;
    border: 1px solid ${(props) => props.theme.color.contrast};
    z-index: 2;
    &:focus {
        outline: none;
        border: 1px solid ${(props) => props.theme.color.green};
        color: ${(props) => props.theme.color.darkGrey};
    }
`;

const moveLabelUp = `
    top: -.2rem;
    font-size: 1.2rem;
    left 0.5rem;
    height: 1rem;
    font-weight: bold;
    width: auto;
    padding: .5rem;
`;

const Label = styled.label`
    height: 2rem;
    width: 20rem;
    position: absolute;
    top: 1.9rem;
    z-index: 2;
    left 3rem;
    cursor: text;
    display: flex;
    font-size: ${(props) => props.theme.font.small};
    justify-content: center;
            width: auto;
        padding: .5rem;
    align-items: center;
        ${Input}:focus ~ & {
    ${moveLabelUp}

  };
  ${(props) => props.textValue.toString().length > 0 && moveLabelUp};
  transition: all .5s ease;
`;

const LabelText = styled.div`
    z-index: 2;
    width: auto;
    margin-bottom: 1.2rem;
`;

const Error = styled.div`
    height: 3rem;
    width: 30rem;
    border-radius: 0.7rem;
    margin: 0 auto;
    margin-top: -0.2rem;
    padding: 1rem;
    text-align: center;
    color: ${(p) => (p.error ? '#F73D28' : 'none')};
    font-weight: bold;
    z-index: 3;
    position: relative;
    font-size: ${(p) => p.theme.font.smallest};
    transition: all 0.4s ease;
`;
