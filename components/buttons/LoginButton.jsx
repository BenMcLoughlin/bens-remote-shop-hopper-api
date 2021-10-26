import React from 'react';
import styled from 'styled-components';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import { Google } from '@styled-icons/bootstrap/Google';
import { Github } from '@styled-icons/fa-brands/Github';

export const LoginButton = ({ label, oAuth, handleChange, valid = true }) => {
    const affiliate = {
        none: {
            icon: '',
            color: '#14C691',
        },
        facebook: {
            icon: FacebookSquare,
            color: '#3A5998',
        },
        google: {
            icon: Google,
            color: 'white',
            border: true,
        },
        github: {
            icon: Github,
            color: '#25292E',
            border: true,
        },
    };

    const renderIcon = (query, props) => {
        if (query.length > 0) {
            const Component = affiliate[query].icon;
            return query && <Component {...props} />;
        }
        return <div className=""></div>;
    };

    return (
        <Wrapper oAuth={affiliate[oAuth]} onClick={() => valid && handleChange()} valid={valid}>
            <Icon>{oAuth !== 'none' && renderIcon(oAuth)}</Icon>
            <Title>{label}</Title>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    background: ${(p) => (p.valid ? p.oAuth.color : 'grey')};
    color: ${(p) => (p.oAuth.color === 'white' ? 'black' : 'white')};
    border: ${(p) => p.oAuth.border && '1px solid grey'};
    height: 5rem;
    width: 36rem;
    cursor: ${(p) => p.valid && 'pointer'};
    display: flex;
    align-content: center;
    border-radius: 1rem;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    &: hover {
        background: ${(p) => p.valid && 'black'};
        color: white;
    }
    transition: all 0.2s ease;
    position: relative;
`;

const Title = styled.div`
    font-size: ${(p) => p.theme.font.small};
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 400;
    width: 100%;
    text-align: center;
`;
const Icon = styled.div`

    fill white;
     position: absolute;
        width: 2rem;
        height: 2rem;
        left: 3rem;
`;
