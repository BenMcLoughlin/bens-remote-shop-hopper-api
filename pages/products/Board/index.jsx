import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import useMergeState from '../../../hooks/mergeState';
import Breadcrumbs from '../../../components/breadcrumbs';
import styled from 'styled-components';

import List from './Lists/List';
import Filters from './Filters';
// import Lists from './Lists';

const propTypes = {
    products: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    updateLocalProjectIssues: PropTypes.func
};

const defaultFilters = {
    searchTerm: '',
    userIds: [],
    myOnly: false,
    recent: false
};

const ProjectBoard = ({ products, users, updateLocalProjectIssues }) => {
    const [ filters, mergeFilters ] = useMergeState(defaultFilters);

    return (
        <Fragment>
            {/* <Breadcrumbs items={[ 'Projects', 'project.name', 'Add' ]} /> */}
            <Filters
                users={users}
                products={products}
                defaultFilters={defaultFilters}
                filters={filters}
                mergeFilters={mergeFilters}
            />
            {/* <Lists
                products={products}
                filters={filters}
                updateLocalProjectIssues={updateLocalProjectIssues}
            /> */}
            <List
                products={products}
                filters={filters}
            />
        </Fragment>
    );
};

ProjectBoard.propTypes = propTypes;

export default ProjectBoard;

export const Board = styled.div`
    overflow: hidden;
`;