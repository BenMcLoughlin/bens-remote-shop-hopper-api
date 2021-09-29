import React, { ReactNode } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from "./Header";
import Navbar from "./Navbar";

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
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
                    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                background: rgb(252, 252, 252);
                background: linear-gradient(
                    14deg,
                    rgba(252, 252, 252, 1) 0%,
                    rgba(252, 252, 252, 0.3211659663865546) 38%,
                    rgba(242, 239, 239, 0.6797093837535014) 100%
                );
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
            }
        `}</style>
    </div>
);
}

export default Layout;