import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search, LinkText } from '../../components';
import logo from '../../public/assets/logos/shopHopperTitle.svg';
import Image from 'next/image';
import { QuestionSquare } from '@styled-icons/bootstrap/QuestionSquare';

export const Footer = () => {
    const links = [
        'Making payments',
        'Rating and Reviews',
        '',
        '',
        'Help Center',
        'Contact Us',
        'Policies & Rules',
        '',
        'Our Commitments',
        'Meet Our Founder',
        'FAQs',
        'Sitemap',
        'Business Identity',
        'Logistics Service',
        '',
        '',
        'Supplier Memberships',
        'Learning Center',
        'Partner Program',
        '',
        'Facebook',
        'Instagram',
        'Youtube',
        'Twitter'
    ];
    const policies = [
        'Product Listing Policy',
        'Intellectual Property Protection',
        ' Privacy Policy',
        ' Terms of Use',
        'User Information Legal Enquiry Guide'
    ];

    const copyright = '© 1999-2021 ShopHopper.ca. All rights reserved';
    
    return (
        <Wrapper>
            <Links>
                {links?.map((link) => (
                    <Link key={link}>{link}</Link>
                ))}
            </Links>
            <Policies>
                {policies.map((policy) => (
                    <Policy key={policy}>- {policy} - </Policy>
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
        font-size: .8rem;
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
const Link = styled.div`
    height: 4rem;
    width: 10%;
    font-weight: 600;
    cursor: pointer;
`;
const Policies = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
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