import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import useMergeState from '../../../hooks/mergeState';
import Breadcrumbs from '../../../components/breadcrumbs';

import Header from './Header';
import Filters from './Filters';
import Lists from './Lists';

const propTypes = {
    products: PropTypes.array.isRequired,
    updateLocalProjectIssues: PropTypes.func
};

const defaultFilters = {
    searchTerm: '',
    userIds: [],
    myOnly: false,
    recent: false
};

const ProjectBoard = ({ products, updateLocalProjectIssues }) => {
    const [ filters, mergeFilters ] = useMergeState(defaultFilters);

    return (
        <Fragment>
            <Breadcrumbs items={[ 'Projects', 'project.name', 'Kanban Board' ]} />
            <Header />
            <Filters
                products={products}
                defaultFilters={defaultFilters}
                filters={filters}
                mergeFilters={mergeFilters}
            />
            <Lists
                products={products}
                filters={filters}
                updateLocalProjectIssues={updateLocalProjectIssues}
            />
        </Fragment>
    );
};

ProjectBoard.propTypes = propTypes;

export default ProjectBoard;