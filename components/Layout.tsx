import React, { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
    <div>
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
        `}</style>
        <style jsx>{`
            .layout {
                width: 100vw;
                height: 100%;
            }
        `}</style>
    </div>
);

export default Layout;