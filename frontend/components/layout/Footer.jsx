import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from '..';
import logo from 'public/assets/logos/shophopper-logo.svg';
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
                    <Link key={policy} href={`${policy}`}>
                        <LinkText key={policy}>- {startCase(policy)} -</LinkText>
                    </Link>
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
    font-weight: 600;
    cursor: pointer;
    font-size: 1.5rem;
`;
const Policies = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`;
const Copyright = styled.div`
    height: 3rem;
    margin-top: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
`;
