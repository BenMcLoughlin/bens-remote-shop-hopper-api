import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from '..';
import logo from 'public/assets/logos/shopHopperTitle.svg';
import Image from 'next/image';
import { QuestionSquare } from '@styled-icons/bootstrap/QuestionSquare';
import { startCase } from 'frontend/utils/strings';
import Link from 'next/link';

export const Footer = () => {
    const links = [
        // 'Making payments',
        // 'Rating and Reviews',
        // '',
        // '',
        // 'Help Center',
        // 'Contact Us',
        // 'Policies & Rules',
        // ''
        // 'Our Commitments',
        // 'Meet Our Founder',
        // 'FAQs',
        // 'Sitemap',
        // 'Business Identity',
        // 'Logistics Service',
        // '',
        // '',
        // 'Supplier Memberships',
        // 'Learning Center',
        // 'Partner Program',
        // '',
        // 'Facebook',
        // 'Instagram',
        // 'Youtube',
        // 'Twitter'
    ];
    const policies = [
        'contact',
        'about',
        'welcome'
        // ' Privacy Policy',
        // ' Terms of Use',
        // 'User Information Legal Enquiry Guide'
    ];

    const copyright = '© 1999-2021 ShopHopper.ca. All rights reserved';

    return (
        <Wrapper>
            <Links>
                {links?.map((link, i) => (
                    <Link key={link + i}>{link}</Link>
                ))}
            </Links>
            <Policies>
                {policies.map((policy) => (
                    <Policy key={policy}>
                        <Link href={`${policy}`}>
                            <LinkText key={policy}>- {startCase(policy)} -</LinkText>
                        </Link>
                    </Policy>
                ))}
            </Policies>
            <Copyright>{copyright}</Copyright>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 30rem;
    display: flex;
    flex-direction: column;
    height: 30rem;
    padding: 4rem;
    @media (max-width: 600px) {
        width: 100%;
        font-size: 0.8rem;
    }
`;
const Links = styled.div`
    height: 16rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 7rem;
`;
const LinkText = styled.div`
    height: 4rem;
    width: 100%;
    font-weight: 600;
    cursor: pointer;
`;
const Policies = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`;
const Policy = styled.div`
    height: 3rem;
    margin-top: 4rem;
    width: 20%;
    display: flex;
    justify-content: center;
`;
const Copyright = styled.div`
    height: 3rem;
    margin-top: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
`;
