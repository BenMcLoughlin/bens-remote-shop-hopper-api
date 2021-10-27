import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { Shop } from '@styled-icons/entypo/Shop';
import { Shopify } from '@styled-icons/fa-brands/Shopify';
import styled from 'styled-components';

import logoSrc from 'public/assets/logos/shophopper-logo.svg';
import { color, sizes, font, mixin, zIndexValues } from 'styles/theme';

const Sidebar = () => (
    <SidebarWrapper>
        <Info>
            <Link href="/">
                <Logo>
                    <Image src={logoSrc} width={200} height={100} />
                </Logo>
            </Link>
        </Info>

        {renderLinkItem('Shopify Stores', Shopify, '/manager')}
        <Divider />
        {renderLinkItem('Review Shops', Shop, '/manager')}
    </SidebarWrapper>
);

const renderLinkItem = (text, iconType, path) => {
    let Icon = iconType;

    return (
        <Link href={path}>
            <LinkItem>
                <>
                    <Icon size={30} />
                    <LinkText>{text}</LinkText>
                </>
            </LinkItem>
        </Link>
    );
};

export const SidebarWrapper = styled.div`
    position: fixed;
    z-index: ${zIndexValues.navLeft - 1};
    top: 0;
    left: ${sizes.appNavBarLeftWidth}px;
    height: 100vh;
    width: ${sizes.secondarySideBarWidth}px;
    padding: 0 16px 24px;
    background: ${color.backgroundLightest};
    border-right: 1px solid ${color.borderLightest};
    ${mixin.scrollableY}
    ${mixin.customScrollbar()}
    @media (max-width: 1100px) {
        width: ${sizes.secondarySideBarWidth - 10}px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`;

export const Logo = styled.div`
    height: 5rem;
    cursor: pointer;
`;

export const Info = styled.div`
    display: flex;
    padding: 24px 4px;
`;

export const Texts = styled.div`
    padding: 3px 0 0 0.1rem;
`;

export const Name = styled.div`
    color: ${color.textDark};
    ${font.size(15)};
    ${font.medium};
`;

export const Category = styled.div`
    color: ${color.textMedium};
    ${font.size(13)};
`;

export const Divider = styled.div`
    margin-top: 17px;
    padding-top: 18px;
    border-top: 1px solid ${color.borderLight};
`;

export const LinkItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    padding: 8px 12px;
    border-radius: 3px;
    cursor: pointer;
    i {
        margin-right: 10.05rem;
        font-size: 0.2rem;
    }
    &.active {
        color: ${color.primary};
        background: ${color.backgroundLight};
        i {
            color: ${color.primary};
        }
    }
`;

export const LinkText = styled.div`
    padding-top: 2px;
    margin-left: 10.05rem;
    ${font.size(14.7)};
`;

export default Sidebar;
