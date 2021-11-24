import React from 'react';
import styled from 'styled-components';
import { Button, LinkText, AuthButton } from 'frontend/components';
import logo from 'public/assets/logos/shophopper-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useUser } from '@auth0/nextjs-auth0';
export const Header = () => {
    const { user, isLoading } = useUser();

    const admins = ['Moseley', 'McLoughlin', 'Lancaster'];

    let isAdmin = false;
    // if (session) {
    //     isAdmin = admins.some((d) => session?.user?.email?.includes(d.toLowerCase()));
    // }

    return (
        <Wrapper>
            <Link href="/">
                <Left>
                    <Logo>
                        <Image src={logo} width={300} height={300} />
                    </Logo>
                </Left>
            </Link>
            <Right>
                <LinkText title={'About'} href={'/shopper/about'} />
                {isAdmin && (
                    <>
                        <LinkText title={'Featured'} href={'/shopper/featured'} />
                        <LinkText title={'Manager'} href={'/admin/manager'} />
                        <LinkText title={'Review'} href={'/admin/review'} />
                        <LinkText title={'Featured'} href={'/shopper/featured'} />
                    </>
                )}
                {!user ? (
                    <>
                        <AuthButton href="/api/auth/login" title="Sign up" radius="round" />
                        <AuthButton href="/api/auth/login" title="Log In" radius="round" />
                    </>
                ) : (
                    <AuthButton href="/api/auth/logout" title="Sign Out" radius="round" />
                )}
            </Right>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 7rem;
    gap: 3rem;
    width: 100%;
`;
const Left = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 5rem;
    cursor: pointer;
    @media (max-width: 1000px) {
        margin-left: 10rem;
    }
`;
const Logo = styled.div`
    width: 15rem;
    height: 15rem;
    margin-top: -2rem;
    display: flex;
    justify-content: flex-start;
    flex: 1;
    position: relative;
    @media (max-width: 600px) {
        width: 10rem;
        height: 10rem;
        margin-top: -1rem;
        margin-left: -5rem;
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    margin-right: 6rem;
    justify-content: flex-end;
    flex-direction: row;
    width: 40%;
    gap: 3rem;
    @media (max-width: 600px) {
        width: 100%;
    }
`;
