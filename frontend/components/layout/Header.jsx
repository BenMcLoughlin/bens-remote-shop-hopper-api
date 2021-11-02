import React from 'react';
import styled from 'styled-components';
import { Button, LinkText, LinkButton } from 'frontend/components';
import logo from 'public/assets/logos/shopHopperTitle.svg';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export const Header = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

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
                <LinkText title={'Featured'} href={'/shopper/featured'} />
                <LinkText title={'About'} href={'/shopper/about'} />
                {isAdmin && (
                    <>
                        <LinkText title={'Manager'} href={'/admin/manager'} />
                        <LinkText title={'Review'} href={'/admin/review'} />
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
    margin-left: 10rem;
    cursor: pointer;
    @media (max-width: 600px) {
        position: absolute;
        width: 0%;
        opacity: 0;
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
`;
