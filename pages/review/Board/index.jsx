import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import useMergeState from 'hooks/mergeState';
import searchTwoParams from "requests/searchTwoParams";
// import Breadcrumbs from '../../../components/breadcrumbs';
import styled from 'styled-components';
import useGlobal from "globalState/store";

import List from './List';
import Filters from './Filters';

const defaultFilters = {
    column: 'buckets', 
    metric: "Casual"
};

const Board = () => {
    // const [ filters, mergeFilters ] = useMergeState(defaultFilters);
    const [ globalState, globalActions ] = useGlobal();
    const [ loading, setLoading ] = useState(false);
    const [ products, setProducts ] = useState([]);
    const [ filters, setFilters ] = useState(defaultFilters);

    useEffect(() => {
        _searchTwoParams(filters);
    }, []);

    useEffect(() => {
        setProducts(globalState.products.data);
    }, [ globalState.products.data ]);

    const _searchTwoParams = async () => {
        setLoading('search');
        const result = await searchTwoParams(filters);

        if (result) {
            globalActions.products.setQuery(filters);
            setFilters(filters);
            globalActions.products.setCursor(result.length);
            globalActions.products.setData(result);
            setLoading(false);
        }

        setLoading(false);
    };

    return (
        <BoardWrapper>
            {/* <Breadcrumbs items={[ 'Projects', 'project.name', 'Add' ]} /> */}
            <Filters
                defaultFilters={defaultFilters}
                filters={filters}
                setFilters={setFilters}
                // mergeFilters={mergeFilters}
            />
            <List
                products={products}
                filters={filters}
            />
        </BoardWrapper>
    );
};

export const BoardWrapper = styled.div`
    overflow: hidden;
`;

export default Board;