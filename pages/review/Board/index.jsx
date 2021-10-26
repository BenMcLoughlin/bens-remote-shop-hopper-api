import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import useGlobal from 'globalState/store';
import { buckets } from 'content/variables';
import loaderGif from 'public/assets/loader/octo_loader.gif';

// import Breadcrumbs from '../../../components/breadcrumbs';
import List from './List';
import Filters from './Filters';

const Board = () => {
    const [ globalState, globalActions ] = useGlobal();
    const [ loading, setLoading ] = useState(false);
    const [ products, setProducts ] = useState([]);
    const [ columnData, setColumnData ] = useState([]);
    const [ defaultFilter, setDefaultFilter ] = useState({
        column: 'buckets', 
        metric: 'Beauty'
    });
    const mountedRef = useRef(true);

    useEffect(() => {
        setLoading(true);
        const _fetchDefault = async () => {
            const success = await globalActions.apiRequests.getColumn("buckets");

            if (success.result) {
                await setColumnData(success.result);

                // console.log('success.result:', success.result[1].value); todo
                
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
    }, [ ]);

    useEffect(() => {
        mountedRef.current && setProducts(globalState.products.data);

        // return () => {
        //     mountedRef.current = false;
        // };
    }, [ globalState.products.data ]);

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
            {/* <Breadcrumbs items={[ 'Projects', 'project.name', 'Add' ]} /> */}
            <Filters
                defaultFilters={defaultFilter}
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