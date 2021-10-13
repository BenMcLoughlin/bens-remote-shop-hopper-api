import React, { useState, useEffect } from 'react';
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { ArrowUp } from '@styled-icons/bootstrap/ArrowUp';
import { animateScroll as scroll } from 'react-scroll';

export const ScrollUp = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [ scrollY, setScrollY ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Wrapper onClick={() => scrollToTop()} scrollY={scrollY}>
            <Icon>
                <ArrowUp />
            </Icon>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 4rem;
    width: 4rem;
    position: fixed;
    top: ${ (p) => (p.scrollY > 200 ? '88vh' : '110vh') };
    right: 4%;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    transition: all 0.5s ease;
`;

const Title = styled.div`
    font-size: ${ (p) => p.theme.font.small };
    color: white;
    ${ (props) => props.theme.flex.vertical.center };
`;
const Icon = styled.div`
    height: 1.5rem;
    width: 1.5rem;
`;