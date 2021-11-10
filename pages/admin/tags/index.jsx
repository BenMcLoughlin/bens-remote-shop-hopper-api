import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { sizes } from 'frontend/styles/theme';
// import Layout from 'frontend/components/Layout';
import { NavBarLeft, Layout } from 'frontend/components';
import useGlobal from 'frontend/globalState/store';
import Sidebar from './Sidebar';
import Tags from './Tags';

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

const TagReviewSystem = () => {
    const [globalState, globalActions] = useGlobal();

    const [loading, setLoading] = useState(false);
    const [queryStrings, setQueryStrings] = useState({
        column: 'buckets',
        metric: 'Athletic'
    });

    useEffect(() => {
        _searchTwoParams(queryStrings);
    }, []);

    const _searchTwoParams = async () => {
        setLoading('search');
        const result = await globalActions.apiRequests.searchProducts(queryStrings);

        if (result) {
            globalActions.products.setQuery(queryStrings);
            globalActions.products.setCursor(result.length);
            globalActions.products.setData(result);
            setLoading(false);
        }

        setLoading(false);
    };

    return (
        <Layout>
            <ProjectPage>
                <NavBarLeft />

                <Sidebar />

                <Tags />
            </ProjectPage>
        </Layout>
    );
};

export const ProjectPage = styled.div`
    padding: 20.05rem 32px 50px ${paddingLeft}px;
    @media (max-width: 1100px) {
        padding: 20.05rem 0.2rem 50px ${paddingLeft - 20}px;
    }
    @media (max-width: 999px) {
        padding-left: ${paddingLeft - 20 - sizes.secondarySideBarWidth}px;
    }
`;

export default TagReviewSystem;
