import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { UiChecksGrid } from '@styled-icons/bootstrap/UiChecksGrid';
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill';
import { CheckCircle } from '@styled-icons/bootstrap/CheckCircle';
import styled, { css } from 'styled-components';

import logoSrc from 'public/assets/logos/shophopper-logo.svg';
import { color, sizes, font, mixin, zIndexValues } from 'frontend/styles/theme';
import { templateClasses } from '../templateClasses';
import useGlobal from 'frontend/globalState/store';

const ReviewSidebar = () => {
    const router = useRouter();
    const [globalState, globalActions] = useGlobal();

    const renderLinkItem = (text, iconType, path, isSet) => {
        let isSelected = router.asPath.includes(path);
        let Icon = iconType;
        let CompleteIcon = CheckCircleFill;
        let InCompleteIcon = CheckCircle;

        return (
            <Link href={path} key={text}>
                <LinkItem isSelected={isSelected}>
                    <>
                        <Icon size={30} />
                        <LinkText isSelected={isSelected}>{text}</LinkText>
                        {
                            isSet ? 
                                <CompleteIcon size={20} color="green" />
                                : 
                                <InCompleteIcon size={20} />
                        }
                    </>
                </LinkItem>
            </Link>
        );
    };

    return (
        <SidebarWrapper>
            <Info>
                <Link href="/">
                    <Logo>
                        <Image src={logoSrc} width={200} height={100} />
                    </Logo>
                </Link>
            </Info>

            <Divider />
            <LinkText>Review and Assign</LinkText>
            <Divider />
            {
                templateClasses.map((item) => (
                    renderLinkItem(item.class_name, UiChecksGrid, `/admin/review/${item.class_name}`, item.isSet)
                ))
            }
        </SidebarWrapper>
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
    justify-content: space-between;
    padding: 8px 0;
    border-radius: 3px;
    cursor: pointer;
    i {
        margin-right: 1rem;
        font-size: 0.2rem;
    }
    ${(props) => props.isSelected &&
        css`
            color: ${color.primary};
            background: ${color.backgroundLight};
            i {
                color: ${color.primary};
            }
        `}
`;

export const LinkText = styled.div`
    padding-top: 2px;
    font-size: 12px;
    ${(props) => props.isSelected &&
        css`
            font-size: 15px;
        `}
`;

export default ReviewSidebar;
