import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';

import List from './List';
import Filters from './Filters';

const Board = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [date, setDate] = useState(new Date());
    let dateFrom = new Date();
    let pastDate = dateFrom.getDate() - 7;
    dateFrom.setDate(pastDate);

    const [defaultFilter, setDefaultFilter] = useState({
        column: 'buckets',
        metric: pid
    });
    const mountedRef = useRef(true);

    // console.log('globalState:', globalState.user);

    useEffect(() => {
        _getInitialProducts({
            column: 'buckets',
            metric: pid,
            dateFrom
        });
    }, [pid]);

    useEffect(() => {
        mountedRef.current && setProducts(globalState.products.data);

        // return () => {
        //     mountedRef.current = false;
        // };
    }, [globalState.products.data]);

    const _getInitialProducts = async (filters = defaultFilter) => {
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
            <Filters defaultFilters={defaultFilter} search={_getInitialProducts} />
            <List products={products} />
        </BoardWrapper>
    );
};

export const BoardWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
`;

export default Board;
