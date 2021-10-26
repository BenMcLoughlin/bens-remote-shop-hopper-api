/* eslint-disable */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styled, { css } from 'styled-components';

import Header from '../components/layout/Header';

const Layout = (props) => {
    const router = useRouter();

    const isActive = (pathname) => router.pathname === pathname;

    return (
        <Main isManager={props.isManager}>
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
            {/* {!props.isMain && <Header />} */}
            {/* {props.isMain
                ? (
                    <div className="layout">{props.children}</div>
                )
                : (
                    <Link href="/api/auth/signin">
                        <div className="notice hov">
                            <a data-active={isActive('/signup')}>Might as well Log in</a>
                        </div>
                    </Link>
                )} */}

            <div className="layout">{props.children}</div>
            <style jsx>{`
                .layout {
                    width: 100vw;
                    height: 100%;
                }
            `}</style>
        </Main>
    );
};

export default Layout;

export const Main = styled.div`
    ${ (props) => props.isManager &&
    css`
        height: 100vh;
        overflow-y: auto;
    ` }
`;