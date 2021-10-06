import React, { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Head from 'next/head';

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
    <div>
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
        <div className="layout">{props.children}</div>
        <style jsx global>{`
            html {
                box-sizing: border-box;
            }

            *,
            *:before,
            *:after {
                box-sizing: inherit;
            }
            body {
                margin: 0;
                padding: 0;
                background: rgb(252, 252, 252);
            }
            button {
                cursor: pointer;
            }
        `}</style>
        <style jsx>{`
            .layout {
                width: 100vw;
                height: 100%;
                background: yellow;
            }
        `}</style>
    </div>
);

export default Layout;