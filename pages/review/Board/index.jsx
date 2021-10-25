import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

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
    const [ globalState, globalActions ] = useGlobal();
    const [ products, setProducts ] = useState([]);
    const mountedRef = useRef(true);

    useEffect(() => {
        _getProducts(defaultFilters);
    }, []);

    useEffect(() => {
        mountedRef.current && setProducts(globalState.products.data);

        // return () => {
        //     mountedRef.current = false;
        // };
    }, [ globalState.products.data ]);

    const _getProducts = async (filters = defaultFilters) => {
        const result = await globalActions.apiRequests.searchProducts(filters); 

        if (result) {
            await globalActions.products.setQuery(filters);
            globalActions.products.setCursor(result.length);
            globalActions.products.setData(result);
        }
    };

    return (
        <BoardWrapper>
            {/* <Breadcrumbs items={[ 'Projects', 'project.name', 'Add' ]} /> */}
            <Filters
                defaultFilters={defaultFilters}
                search={_getProducts}
            />
            <List
                products={products}
                // products={globalState.products.data}
            />
        </BoardWrapper>
    );
};

export const BoardWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
`;

export default Board;