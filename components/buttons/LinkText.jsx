/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const LinkText = ({ title, accent }) => (
    <Wrapper>
        <Link href={`/${ title.toLowerCase() }`}>
            <Title accent={accent}>{title}</Title>
        </Link>
    </Wrapper>
);

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    cursor: pointer;
`;

const Title = styled.div`
    font-size: ${ (props) => props.theme.font.medium };
    color: ${ (props) => (props.accent ? props.theme.color.accent : '') };
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-weight: 300;
`;