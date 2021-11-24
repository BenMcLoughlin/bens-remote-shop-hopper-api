import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { GoogleMap } from 'frontend/components';

export const Location = (props) => (
    <Wrapper>
        <Content>
            <GoogleMap />
        </Content>
    </Wrapper>
);

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    gap: 5rem;
`;

const Content = styled.div`

    width: 75%;
    display: flex;
    padding: 0.2rem;
    margin-top: 3rem;
`;
