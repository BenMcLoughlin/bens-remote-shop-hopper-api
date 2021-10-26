import React from 'react';
import styled from 'styled-components';
import { Button, LinkText } from '../../components';
import logo from '../../public/assets/logos/shopHopperTitle.svg';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export const Header = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    const admins = [ 'Moseley', 'McLoughlin', 'Lancaster' ];

    const isAdmin = admins.some((d) => session?.user.name?.includes(d));

    return (
        <Wrapper>
            <Left>
                <Logo>
                    <Image src={logo} width={200} height={100} />
                </Logo>
            </Left>
            <Right>
                <LinkText title={'Featured'} />
                <LinkText title={'About'} />
                <LinkText title={'Manager'} />
                <LinkText title={'Review'} />
                {isAdmin && (
                    <>
                        <LinkText title={'Manager'} />
                        <LinkText title={'Review'} />
                    </>
                )}
                {!session && (
                    <>
                        <Button title={'Sign up'} href="/auth/signup" radius="round" />

                        <Button title={'Log In'} href="/auth/login" radius="round" />
                    </>
                )}
                {session && (
                    <Link href="/">
                        <Button
                            title={'Sign Out'}
                            handleChange={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
                        />
                    </Link>
                )}
            </Right>
        </Wrapper>
    );
};

export default Header;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 7rem;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: space-around;

`;

const Left = styled.div`
    width: 40%;
    display: flex;
    justify-content: left;
    @media (max-width: 600px) {
        position: absolute;
        width: 0%;
        opacity: 0;
    }
`;
const Logo = styled.div`
    width: 10rem;
    margin-top: 1rem;
`;
const Right = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 600px) {
        width: 80%;
    }
`;