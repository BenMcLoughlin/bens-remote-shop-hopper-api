import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Icon from 'components/Icon';
import logoSrc from '../../../public/assets/logos/shophopper-logo.svg';

import {
    Sidebar,
    ProjectInfo,
    Divider,
    LinkItem,
    LinkText,
    NotImplemented,
    Logo
} from './Styles';

const propTypes = {
    project: PropTypes.object.isRequired
};

const ProjectSidebar = () => (
    <Sidebar>
        <ProjectInfo>
            <Link href="/">
                <Logo>
                    <Image src={logoSrc} width={200} height={100} />
                </Logo>
            </Link>
        </ProjectInfo>

        {renderLinkItem("match", 'Add presets', 'board', '/board')}
        {renderLinkItem("match", 'Project settings', 'settings', '/settings')}
        <Divider />
        {/* {renderLinkItem('match', 'Releases', 'shipping')}
            {renderLinkItem('match', 'Issues and filters', 'issues')}
            {renderLinkItem('match', 'Pages', 'page')}
            {renderLinkItem('match', 'Reports', 'reports')}
            {renderLinkItem('match', 'Components', 'component')} */}
    </Sidebar>
);

const renderLinkItem = (match, text, iconType, path) => {
    const isImplemented = Boolean(path);

    // const linkItemProps = isImplemented
    //     ? { as: Link, exact: true, to: `${ match.path }${ path }` }
    //     : { as: 'div' };

    return (
        // <LinkItem {...linkItemProps}>
        <LinkItem>
            <Icon type={iconType} />
            <LinkText>{text}</LinkText>
            {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
        </LinkItem>
    );
};

ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;