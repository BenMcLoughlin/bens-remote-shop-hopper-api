/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LandingFooter } from './LandingFooter';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { DevTools } from 'frontend/components';

export const Layout = (props) => {
    const router = useRouter();

    const isLandingPage = router.pathname === '/';
    // const isActive = (pathname) => router.pathname === pathname;

    return (
        <Wrapper>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;900&display=swap"
                    rel="stylesheet"
                />
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;900&display=swap')
                </style>
            </Head>

            <Header />
            {process.env.NODE_ENV === 'development' && <DevTools />}

            <Center isManager={props.isManager}>{props.children}</Center>
            {isLandingPage ? <LandingFooter {...props.children.props.footer} /> : <Footer />}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #f6f4f5;
    background: -webkit-linear-gradient(top left, #f6f4f5, #f6f4f5);
    background: -moz-linear-gradient(top left, #f6f4f5, #f6f4f5);
    background: linear-gradient(to bottom right, #f6f4f5, #f6f4f5);
`;

// Backgrounds
// background: #F6F4F5;
// background: -webkit-linear-gradient(top left, #F6F4F5, #F6F4F5);
// background: -moz-linear-gradient(top left, #F6F4F5, #F6F4F5);
// background: linear-gradient(to bottom right, #F6F4F5, #F6F4F5);

//    background: -webkit-linear-gradient(bottom left, #f6f4f5, #ffffff);
//     background: -moz-linear-gradient(bottom left, #f6f4f5, #ffffff);
//     background: linear-gradient(to top right, #f6f4f5, #ffffff);

const Center = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100vh;
    @media (min-width: 0px) {
        width: 95vw;
        min-height: 120vh;
    }
    @media (min-width: 768px) {
        width: 90vw;
    }
    @media (min-width: 1500px) {
        width: 75vw;
    }
    ${(props) =>
        props.isManager &&
        css`
            height: 100vh;
            overflow-y: auto;
        `}}
`;
