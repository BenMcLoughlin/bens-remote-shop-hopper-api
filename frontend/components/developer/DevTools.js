/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { fillLoginForm, fillContactForm } from 'frontend/utils/devTools';

export const DevTools = ({}) => {
    const [response, setResponse] = useState('');
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const body = {
        name: 'ben',
        template: 'newProducts'
    };

    const sendEmail = async () => {
        const res = await fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        let data = await res.json();
        setResponse(data.status);
    };

    const buttonProps = [
        {
            label: 'sendEmail',
            onClick: () => sendEmail(),
            show: router.asPath.includes('/admin')
        },
        {
            label: 'Fill - New User',
            onClick: () => fillLoginForm('newUser'),
            show: router.asPath.includes('/signup')
        },
        {
            label: 'Fill - Contact',
            onClick: () => fillContactForm(),
            show: router.asPath.includes('/contact')
        },
        {
            label: 'Fill - Existing User',
            onClick: () => fillLoginForm('existingUser'),
            show: router.asPath.includes('/login')
        }
    ];

    return (
        <>
            <Wrapper open={open}>
                <Close onClick={() => setOpen(false)} />
                {buttonProps.map(
                    ({ label, onClick, show }) =>
                        show && (
                            <Button key={label} onClick={onClick}>
                                {label}
                            </Button>
                        )
                )}
                <Status>{response}</Status>
            </Wrapper>
            <Open open={open} onClick={() => setOpen(true)} />
        </>
    );
};

// ---------------------------STYLES-------------------------------------------//
const Wrapper = styled.div`
    position: fixed;
    top: 25rem;
    right: 2rem;
    min-width: 10rem;
    min-height: 5rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: left;
    font-size: 1.4rem;
    cursor: pointer;
    background: #505050;
    gap: 3rem;
    flex-wrap: wrap;
    z-index: 10000;
    -webkit-box-shadow: 3px 29px 68px -4px rgba(0, 0, 0, 0.32);
    -moz-box-shadow: 3px 29px 68px -4px rgba(0, 0, 0, 0.32);
    box-shadow: 3px 29px 68px -4px rgba(0, 0, 0, 0.32);
    display: ${(p) => !p.open && 'none'};
    padding: 1rem;
`;

const Button = styled.button`
    height: 3rem;
    width: 65%;
    background: #777777;
    color: white;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    border: none;
`;

const Status = styled.div`
    color: red;
    margin-left: 5rem;
`;

const shared = `
    position: fixed;
    cursor: pointer;
    right: 1rem;
    top: 1rem;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    &::before,
    &::after {
        top: 0.7rem;
        left: 0.25rem;
        position: absolute;
        content: '';
        width: 65%;
        border-radius: 3px;
        height: 1px; /* cross thickness */
        background-color: white;
    };
       &::before {
        transform: ${(props) => 'rotate(90deg)'};
    }

`;
const Close = styled.div`
    background: #ed6a5e;
    ${shared};
`;
const Open = styled.div`
    background: #61c454;
    ${shared};
    top: 35%;
    &::before {
        transform: ${'rotate(90deg)'};
    }
    display: ${(p) => p.open && 'none'};
`;
