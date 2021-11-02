/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Search, LinkText } from 'frontend/components';
import logo from 'public/assets/logos/shopHopperTitle.svg';
import Image from 'next/image';
import { QuestionSquare } from '@styled-icons/bootstrap/QuestionSquare';

export const OnboardHeader = ({ categories, links }) => (
    <Wrapper>
        <Top>
            <Logo>
                <Image src={logo} width={100} height={50} />
            </Logo>
            <Search />
            <Links>
                {links.top.map(({ title, subTitle }) => (
                    <Link key={title}>
                        <Icon>
                            <QuestionSquare />
                        </Icon>
                        <span>{title}</span>
                        <span>{subTitle}</span>
                    </Link>
                ))}
            </Links>
        </Top>
        <Bottom>
            <Categories>
                {categories.map((d) => (
                    <div key={d}>{d}</div>
                ))}
            </Categories>
            <Links>
                {links.bottom.map(({ title, subTitle }) => (
                    <Link key={title}>
                        <Icon>
                            <QuestionSquare />
                        </Icon>
                        <span>{title}</span>
                    </Link>
                ))}
                <span>EN</span>
                <span>CAD</span>
            </Links>
        </Bottom>
    </Wrapper>
);

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 12rem;
    display: flex;
    display: flex;
    flex-direction: column;
    height: 12rem;
`;

const Top = styled.div`
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Bottom = styled.div`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-content: bottom;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: 3rem;
    margin-right: 7rem;
`;
const Links = styled.div`
    display: flex;
    align-content: bottom;
    justify-content: flex-end;
    align-items: center;
    width: 16%;
    height: 80%;
    align-self: flex-end;
    justify-content: flex-start;
    gap: 1rem;
`;

const Link = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${(p) => p.theme.font.smallest};
    text-transform: uppercase;
    position: relative;
    padding-left: 3rem;
    width: 12rem;
    height: 5rem;
    position: relative;
    justify-content: center;
`;
const Icon = styled.div`
    position: absolute;
    top: 2rem;
    left: 1rem;
    height: 1.5rem;
    width: 1.5rem;
`;
const Categories = styled.div`
    width: 30%;
    height: 80%;
    display: flex;
    padding-left: 3rem;
    justify-content: space-around;
    align-items: center;
`;
