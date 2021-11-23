import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { UiChecksGrid } from '@styled-icons/bootstrap/UiChecksGrid';
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill';
import { CheckCircle } from '@styled-icons/bootstrap/CheckCircle';
import styled, { css } from 'styled-components';

import useGlobal from 'frontend/globalState/store';
import { Button } from 'frontend/components';
import { color, sizes, font, mixin, zIndexValues } from 'frontend/styles/theme';
import logoSrc from 'public/assets/logos/shophopper-logo.svg';
import { templateClassesSeed } from '../templateClassesSeed';

export const ReviewSidebar = ({ isPID }) => {
    const router = useRouter();
    const [globalState, globalActions] = useGlobal();
    const [unSubmitted, setUnSubmitted] = useState(false);
    const [templateClassesList, setTemplateClassesList] = useState([]);

    useEffect(() => {
        _getClasses();
    }, []);

    const _getClasses = async () => {
        await globalActions.apiRequests.getTemplateClasses();

        setTemplateClassesList(globalState.templateClass.all);
    };

    const _checkClasses = async () => {
        const result = await globalActions.apiRequests.checkTemplateClasses();

        if (result) {
            return setUnSubmitted(result);
        }

        _resetClasses();
    };

    const _resetClasses = async () => {
        let response = confirm('Are you sure you want to delete ALL items stored for all classes from the database?');
        if (response) {
            await globalActions.apiRequests.resetTemplateClasses(templateClassesSeed);
        }

        setUnSubmitted(false);

        await globalActions.templateClass.setData([]);
    };

    if (!templateClassesList.length) {
        _getClasses();
        return null;
    }

    const renderLinkItem = (text, iconType, path, isSet) => {
        let isSelected = router.asPath.includes(path);
        let Icon = iconType;
        let CompleteIcon = CheckCircleFill;
        let InCompleteIcon = CheckCircle;

        return (
            <Link href={path} key={text}>
                <LinkItem isSelected={isSelected}>
                    <>
                        <Icon size={30} color={isSelected ? color.primary : "white"} />
                        <LinkText isSelected={isSelected}>{text}</LinkText>
                        {
                            isSet ? 
                                <CompleteIcon size={20} color="green" />
                                : 
                                <InCompleteIcon size={20} color="white" />
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
            <Link href={'/admin/review/'}>
                <Title>{ isPID ? 'Templates Home' : 'Review and Assign'}</Title>
            </Link>
            <Divider />
            {
                templateClassesList.map((item) => (
                    renderLinkItem(item.class_name, UiChecksGrid, `/admin/review/${item.class_name}`, item.isSet)
                ))
            }
            <Divider />
            {
                unSubmitted ?
                    <>
                        <Text>
                            Note, the following have not been submitted and will be lost:
                        </Text>
                        {unSubmitted?.map((item) => (
                            <Text key={item.class_name}>
                                <span style={{ color: 'red' }}>{item.class_name}</span>
                            </Text>
                        ))}
                        <Button
                            title={'Reset Anyway?'}
                            onClick={_resetClasses}
                        />
                        <Button
                            title={'Cancel'}
                            onClick={() => setUnSubmitted(false)}
                            gradient={'secondary'}
                            fullWidth
                        />
                    </>
                    :
                    <Button
                        title="Reset"
                        onClick={_checkClasses}
                        fullWidth
                    />
            }
        </SidebarWrapper>
    );
};

export const Title = styled.div`
    text-align: center;
    padding-top: 2px;
    font-size: 15px;
    cursor: pointer;
`;

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

const Text = styled.div`
    color: black;
    font-size: 14px;
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
    padding: 8px 5px;
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

ReviewSidebar.propTypes = {
    isPID: PropTypes.bool
    // price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // compareAtPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
