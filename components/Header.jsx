import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { LinkText } from '../components';
import logoSrc from '../public/assets/logos/shophopper-logo.svg';

const Header = () => {
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

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
                    <LinkText title={'Products'} accent="" />
                </Row>
                <Row>
                    <User>{session.user.name} ({session.user.email})</User>
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

const User = styled.p`
    @media (max-width: 700px) {
        display: none;
    }
`;
const Nav = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    background: white;
    @media (max-width: 1000px) {
       margin-left: 40px;
    }
`;
const Logo = styled.div`
    height: 5rem;
    cursor: pointer;
    @media (max-width: 700px) {
        display: none;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-end;
    }
`;
const Right = styled.div`
    margin-left: auto;
`;

export default Header;