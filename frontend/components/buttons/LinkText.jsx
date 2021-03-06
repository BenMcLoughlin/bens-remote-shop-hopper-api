/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const LinkText = ({ title, accent, href }) => (
    <Wrapper>
        <Link href={href}>
            <Title accent={accent}>{title}</Title>
        </Link>
    </Wrapper>
);

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    cursor: pointer;
    margin: 0 0.1rem 0 0.1rem;
    transition: all 0.6s ease;
`;

const Title = styled.div`
    font-size: ${(props) => props.theme.font.medium};
    color: ${(props) => (props.accent ? props.theme.color.accent : '')};
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-weight: 300;
`;