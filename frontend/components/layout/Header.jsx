import React from 'react';
import styled from 'styled-components';
import { Button, LinkText, LinkButton } from 'frontend/components';
import logo from 'public/assets/logos/shopHopperTitle.svg';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export const Header = () => {
    const { data: session, status } = useSession();
    // const loading = status === 'loading';

    const admins = ['Moseley', 'McLoughlin', 'Lancaster'];

    let isAdmin = false;
    if (session) {
        isAdmin = admins.some((d) => session?.user?.email?.includes(d.toLowerCase()));
    }

    return (
        <Wrapper>
            <Link href="/">
                <Left>
                    <Logo>
                        <Image src={logo} width={200} height={100} />
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
                {!session ? (
                    <>
                        <LinkButton href="/auth/signup" title="Sign up" radius="round" />
                        <LinkButton href="/auth/login" title="Log In" radius="round" />
                    </>
                ) : (
                    <Button
                        title={'Sign Out'}
                        // Do we need a URL for this in production BEN?
                        onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
                    />
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
    width: 10rem;
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
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
