import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

import { LinkText } from '../components';
import logoSrc from '../public/assets/logos/shophopper-logo.svg';

const Header: React.FC = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname;

    const [ session, loading ] = useSession();

    let left = (
        <div>
            <Link href="/">
                <Logo>
                    <Image src={logoSrc} width={200} height={100} />
                </Logo>
            </Link>
        </div>
    );

    let right = null;

    if (loading) {
        left = (
            <div>
                <Link href="/">
                    <Logo>
                        <Image src={logoSrc} width={200} height={100} />
                    </Logo>
                </Link>
            </div>
        );

        right = (
            <Right>
                <p>Validating session ...</p>
            </Right>
        );
    }

    if (!session) {
        right = (
            <Right>
                <Link href="/api/auth/signin">
                    <a data-active={isActive('/signup')}>Log in</a>
                </Link>
            </Right>
        );
    }

    if (session) {
        left = (
            <div>
                <Link href="/">
                    <Logo>
                        <Image src={logoSrc} width={200} height={100} />
                    </Logo>
                </Link>
            </div>
        );

        right = (
            <Right>
                <Row>
                    <LinkText title={'Features'} accent="" />
                    <LinkText title={'Manager'} accent="" />
                    <LinkText title={'Tags'} accent="" />
                    <LinkText title={'Analytics'} accent="" />
                </Row>
                <Row>
                    <p>{session.user.name} ({session.user.email})</p>

                    <button onClick={() => signOut()}>
                        <a>Log out</a>
                    </button>
                </Row>
            </Right>
        );
    }

    return (
        <Nav>
            {left}
            {right}
        </Nav>
    );
};

const Nav = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    background: white;
`;
const Logo = styled.div`
    height: 5rem;
    cursor: pointer;
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const Right = styled.div`
    margin-left: auto;
`;

export default Header;