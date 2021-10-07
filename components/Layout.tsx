import React, { ReactNode } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from "./Header";
import Navbar from "./Navbar";
import Head from 'next/head';

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
    const session = useSession();
    const router = useRouter();

    const isLoggedIn = session[0]?.user;
    const isActive = (pathname) => router.pathname === pathname;

return (
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
        {
            isLoggedIn ?
                <div className="layout">{props.children}</div>
                :
                <Link href="/api/auth/signin">
                    <div className="notice hov">
                        <a data-active={isActive('/signup')}>Might as well Log in</a>
                    </div>
                </Link>
        }
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

            .notice {
                background: white;
                transition: box-shadow 0.1s ease-in;
                padding: 20px;
                margin: 1rem;
            }

            .hov:hover {
                box-shadow: 1px 1px 3px #aaa;
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
}

export default Layout;