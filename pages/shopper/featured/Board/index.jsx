import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';

import List from './List';
import Filters from './Filters';

const Board = () => {
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [columnData, setColumnData] = useState([]);
    const [defaultFilter, setDefaultFilter] = useState({
        column: 'buckets',
        metric: globalState.user.buckets?.[0] || 'Athletic',
        size: globalState.user.size?.[0] || 'XXS'
    });
    const mountedRef = useRef(true);

    console.log('globalState:', globalState.user);

    useEffect(() => {
        const _fetchDefault = async () => {
            if (!globalState.user.buckets?.length < 1) {
                setLoading(true);
                const success = await globalActions.apiRequests.getColumn('buckets');

                console.log('getColumn result:', success.result[0]?.value);

                await setDefaultFilter({
                    column: 'buckets',
                    metric: columnData[0]?.value
                });

                setLoading(false);
                return true;
            }
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
            {/* <Filters defaultFilters={defaultFilter} search={_getProducts} /> */}
            <Title>
                Welcome to your new Local Shopping Tool!
            </Title>
            <H2>
                These {products.length} items match your Profile, browse what is available, or set some additional filters below.
            </H2>
            <List products={products} />
        </BoardWrapper>
    );
};

export const Title = styled.div`
    font-size: 36px;
    font-weight: bold;
    margin-top: 50px;
`;

export const H2 = styled.div`
    font-size: 16px;
`;

export const BoardWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
`;

export default Board;
