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
            <Link href="/">
                <Left>
                    <Logo>
                        <Image src={logo} width={200} height={100} />
                    </Logo>
                </Left>
            </Link>
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
                        <Link href="/auth/signup">
                            <HeaderButton href="/auth/signup">Sign up</HeaderButton>
                        </Link>

                        <Link href="/auth/login">
                            <HeaderButton href="/auth/login">Log In</HeaderButton>
                        </Link>
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
    display: flex;
    justify-content: space-between;
    height: 7rem;
`;

const Left = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 55px;
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
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
    justify-content: flex-end;
    flex-direction: row;
`;
const HeaderButton = styled.p`
    cursor: pointer;
    height: 2rem;
    display: flex;
    align-content: center;
    border-radius: 2rem;
    padding: 0 1rem 0 1rem;
    justify-content: center;
    align-items: center;
    background: ${ (props) => props.theme.color.backgroundThemeGreen };
    ${ (p) => p.theme.gradient[p.gradient] };
    color: white;
    &:hover {
        background: ${ (props) => props.theme.color.dark };
    }
    transition: all 0.6s ease;
`;