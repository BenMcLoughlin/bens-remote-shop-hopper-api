import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import useMergeState from '../../../hooks/mergeState';
import { Breadcrumbs } from '../../../components/breadcrumbs';

import Header from './Header';
import Filters from './Filters';
import Lists from './Lists';

const propTypes = {
    project: PropTypes.object.isRequired,
    updateLocalProjectIssues: PropTypes.func
};

const defaultFilters = {
    searchTerm: '',
    userIds: [],
    myOnly: false,
    recent: false
};

const ProjectBoard = ({ project, updateLocalProjectIssues }) => {
    const [ filters, mergeFilters ] = useMergeState(defaultFilters);

    return (
        <Fragment>
            <Breadcrumbs items={[ 'Projects', 'project.name', 'Kanban Board' ]} />
            <Header />
            <Filters
                projectUsers={project.users}
                defaultFilters={defaultFilters}
                filters={filters}
                mergeFilters={mergeFilters}
            />
            <Lists
                project={project}
                filters={filters}
                updateLocalProjectIssues={updateLocalProjectIssues}
            />
        </Fragment>
    );
};

ProjectBoard.propTypes = propTypes;

export default ProjectBoard;