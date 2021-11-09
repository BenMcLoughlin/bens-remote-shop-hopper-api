import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';

// import Breadcrumbs from 'frontend/components/breadcrumbs';
import List from './List';
import Filters from './Filters';

import { getColumn } from 'backend/requests/getColumn';

const Board = () => {
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [columnData, setColumnData] = useState([]);
    const [defaultFilter, setDefaultFilter] = useState({
        column: 'buckets',
        metric: 'Athletic'
    });
    const mountedRef = useRef(true);

    useEffect(() => {
        setLoading(true);
        const _fetchDefault = async () => {
            // Swap this function design and see if global state is causing the CORS error todo
            // const success = await globalActions.apiRequests.getColumn('buckets');
            const success = await getColumn('buckets');
            // console.log('success.result:', success.result[0]?.value);

            console.log('success.result:', success?.result[1].value);

            await setDefaultFilter({
                column: 'buckets',
                metric: columnData[0]?.value
            });

            setLoading(false);
            return true;
        };

        _fetchDefault();
        _getProducts(defaultFilter);
    }, []);

    useEffect(() => {
        mountedRef.current && setProducts(globalState.products.data);

        // return () => {
        //     mountedRef.current = false;
        // };
    }, [globalState.products.data]);

    const _getProducts = async (filters = defaultFilter) => {
        const result = await globalActions.apiRequests.searchProducts(filters);

        if (result) {
            await globalActions.products.setQuery(filters);
            globalActions.products.setCursor(result.length);
            globalActions.products.setData(result);
        }
    };

    if (!products) {
        return <Image src={loaderGif} className="loading" width={800} height={600} />;
    }

    return (
        <BoardWrapper>
            <Filters defaultFilters={defaultFilter} search={_getProducts} />
            <List products={products} />
        </BoardWrapper>
    );
};

export const BoardWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
`;

export default Board;
