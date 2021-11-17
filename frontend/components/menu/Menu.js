import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

export const Menu = ({ open, setAs, hotItems }) => {
    const isHidden = Boolean(open);
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open}>
            <p onClick={() => setAs('topLeft')} tabIndex={tabIndex}>
                Apply to Top Left
            </p>
            <p onClick={() => setAs('topRight')} tabIndex={tabIndex}>
                Apply to Top Right
            </p>
            <p onClick={() => setAs('bottomLeft')} tabIndex={tabIndex}>
                Apply to Bottom Left
            </p>
            <p onClick={() => setAs('bottomRight')} tabIndex={tabIndex}>
                Apply to Bottom Right
            </p>
            <Border />
            <p onClick={hotItems} tabIndex={tabIndex}>
                Save in Hot Items
            </p>
            <p onClick={() => ''} tabIndex={tabIndex}>
                See details (todo)
            </p>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.color.background};
    text-align: left;
    padding: 2rem;
    transition: transform 0.3s ease-in-out;
    p {
        font-size: 1.2rem;
        text-transform: uppercase;
        padding: 1rem 8px;
        margin: .5rem 0;
        letter-spacing: 0.3rem;
        color: ${({ theme }) => theme.color.primaryDark};
        text-decoration: none;
        transition: color 0.2s linear;
        cursor: pointer;
        &:hover {
            background: ${({ theme }) => theme.color.backgroundMedium};
            font-weight: 900;
            color: ${({ theme }) => theme.color.blueDark};
        }
    }
`;

export const Border = styled.div`
    border-bottom: ${({ theme }) => `1px solid  ${theme.color.backgroundMedium}`};
    margin: 0.05rem;
    width: 100%;
`;

Menu.propTypes = {
    open: bool.isRequired,
    setAs: Function.isRequired,
    hotItems: Function.isRequired
}; 