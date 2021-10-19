import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import { Issue, Title, Bottom, Assignees, AssigneeAvatar } from './Styles';

const propTypes = {
    projectUsers: PropTypes.array.isRequired,
    issue: PropTypes.object.isRequired,
    index: PropTypes.number
};

const ProjectBoardListIssue = ({ projectUsers, issue, index }) => {
    const assignees = issue.userIds.map((userId) => projectUsers.find((user) => user.id === userId));

    return (
        <>
            <Issue>
                <Title>{issue.title}</Title>
                <Bottom>
                    <div>
                        <Icon type={issue.type} />
                        <Icon priority={issue.priority} top={-1} left={4} />
                    </div>
                    <Assignees>
                        {assignees.map((user) => (
                            <AssigneeAvatar
                                key={user.id}
                                size={24}
                                avatarUrl={user.avatarUrl}
                                name={user.name}
                            />
                        ))}
                    </Assignees>
                </Bottom>
            </Issue>
        </>
    );
};

ProjectBoardListIssue.propTypes = propTypes;

export default ProjectBoardListIssue;