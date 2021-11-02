/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

export const DevTools = () => {
    const [response, setResponse] = useState('');

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

    return (
        <Wrapper>
            {/* <Button onClick={() => sendEmail()}> Send Email</Button>
            <Status>{response}</Status> */}
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Button = styled.button`
    height: 5rem;
    width: 13rem;
    background: #474f59;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    cursor: pointer;
    border: none;
`;
const Wrapper = styled.div`
    position: absolute;
    top: 25rem;
    right: -2rem;
    width: 20rem;
    height: 25rem;
    position: absolute;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: left;
    font-size: 1.4rem;
    cursor: pointer;
    flex-direction: column;
    gap: 3rem;
`;
const Status = styled.div`
    color: red;
    margin-left: 5rem;
`;
