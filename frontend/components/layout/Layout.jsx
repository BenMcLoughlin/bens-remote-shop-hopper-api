/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LandingFooter } from './LandingFooter';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DevTools } from 'frontend/components';

export const Layout = (props) => {
    const router = useRouter();

    const isLandingPage = router.pathname === '/';
    const isActive = (pathname) => router.pathname === pathname;
    return (
        <Wrapper>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,800;1,200&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Header />
            {/* {process.env.NODE_ENV === 'development' && <DevTools />} */}

            <Center isManager={props.isManager}>{props.children}</Center>
            {isLandingPage ? <LandingFooter {...props.children.props.footer} /> : <Footer />}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(bottom left, #f6f4f5, #ffffff);
    background: -moz-linear-gradient(bottom left, #f6f4f5, #ffffff);
    background: linear-gradient(to top right, #f6f4f5, #ffffff);
`;
const Center = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100vh;
    @media (min-width: 0px) {
        width: 100vw;
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
        `}
`;
