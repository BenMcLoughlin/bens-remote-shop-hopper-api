import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Avatar from 'components/Avatar';

import {
    Sidebar,
    ProjectInfo,
    ProjectTexts,
    ProjectName,
    ProjectCategory,
    Divider,
    LinkItem,
    LinkText,
    NotImplemented
} from './Styles';

const propTypes = {
    project: PropTypes.object.isRequired
};

const ProjectSidebar = () => {
    console.log('const match = useRouteMatch();:');

    return (
        <Sidebar>
            <ProjectInfo>
                <Avatar />
                <ProjectTexts>
                    <ProjectName>Product Review System</ProjectName>
                    <ProjectCategory>{"ProjectCategoryCopy[project.category]"} project</ProjectCategory>
                </ProjectTexts>
            </ProjectInfo>

            {renderLinkItem("match", 'Kanban Board', 'board', '/board')}
            {renderLinkItem("match", 'Project settings', 'settings', '/settings')}
            <Divider />
            {renderLinkItem('match', 'Releases', 'shipping')}
            {renderLinkItem('match', 'Issues and filters', 'issues')}
            {renderLinkItem('match', 'Pages', 'page')}
            {renderLinkItem('match', 'Reports', 'reports')}
            {renderLinkItem('match', 'Components', 'component')}
        </Sidebar>
    );
};

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