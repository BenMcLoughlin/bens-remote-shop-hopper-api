/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';

const Navbar = () => (
    <nav>
        <div className="logo" />
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/DB Manager">
            <a>DB Manager</a>
        </Link>
        {/* <Link href="/drafts/">
        <a>Drafts</a>
      </Link> */}
        <style jsx>
            {`
                nav {
                    margin: 10px auto 80px;
                    padding: 10px 0;
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
                    border-bottom: 1px solid #ddd;
                    padding-right: 3rem;
                    background: white;
                }
                nav a {
                    margin-left: 12px;
                    text-decoration: none;
                    color: grey;
                    font-size: 1.4rem;
                }
            `}
        </style>
    </nav>
);

export default Navbar;
