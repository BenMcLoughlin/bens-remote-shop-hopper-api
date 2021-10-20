import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import useMergeState from '../../../hooks/mergeState';
// import Breadcrumbs from '../../../components/breadcrumbs';
import styled from 'styled-components';

import List from './Lists/List';
import Filters from './Filters';

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

const Board = ({ products, users, updateLocalProjectIssues }) => {
    const [ filters, mergeFilters ] = useMergeState(defaultFilters);

    return (
        <BoardWrapper>
            {/* <Breadcrumbs items={[ 'Projects', 'project.name', 'Add' ]} /> */}
            <Filters
                users={users}
                products={products}
                defaultFilters={defaultFilters}
                filters={filters}
                mergeFilters={mergeFilters}
            />
            <List
                products={products}
                filters={filters}
            />
        </BoardWrapper>
    );
};

Board.propTypes = propTypes;

export default Board;

export const BoardWrapper = styled.div`
    overflow: hidden;
`;