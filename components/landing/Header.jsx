import React from 'react';
import styled from 'styled-components';
import { RadialButton, LinkText } from '../../components';
import logo from '../../public/assets/logos/shophopper-logo.svg';
import Image from 'next/image';

export const Header = ({ title, subTitle }) => {
    return (
        <Wrapper>
            <Left>
                <RadialButton title={'Sign up'} />
            </Left>
            <Logo>
                <Image src={logo} width={200} height={100} />
            </Logo>
            <Right>
                <LinkText title={'About'} />
                <LinkText title={'Features'} />
                <LinkText title={'Tags'} />
                <LinkText title={'Manager'} />
            </Right>
        </Wrapper>
    );
};

export default Header;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 15rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding-bottom: 2rem;
    opacity: ${(p) => p.theme.opacity};
    font-size: ${(p) => p.theme.font.small};
`;

const Left = styled.div`
    display: flex;
    align-content: bottom;

    width: 30%;
    align-self: flex-end;
`;
const Logo = styled.div`
    display: flex;
    align-content: bottom;
    justify-content: flex-end;
    align-items: flex-end;
    width: 20%;
    height: 30rem;
    align-self: flex-end;
    margin-top: 15rem;
`;
const Right = styled.div`
    display: flex;
    flex-direction: row;
    width: 30%;
    align-self: flex-end;
    justify-content: end;
    gap: 2rem;
    padding: 2rem;
`;
