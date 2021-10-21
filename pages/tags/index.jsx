import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { sizes } from 'styles/theme';
import searchTwoParams from "requests/searchTwoParams";
import useGlobal from "globalState/store";
import Layout from 'components/Layout';
import NavbarLeft from 'components/NavbarLeft';
import Sidebar from './Sidebar';
import Tags from './Tags';

import { startData } from './mocks';

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

const TagReviewSystem = () => {
    const [ globalState, globalActions ] = useGlobal();

    const [ loading, setLoading ] = useState(false);
    const [ queryStrings, setQueryStrings ] = useState({
        column: 'buckets', 
        metric: "Casual"
    });

    useEffect(() => {
        _searchTwoParams(queryStrings);
    }, []);

    const _searchTwoParams = async () => {
        setLoading('search');
        const result = await searchTwoParams(queryStrings);

        if (result) {
            globalActions.products.setQuery(queryStrings);
            globalActions.products.setCursor(result.length);
            globalActions.products.setData(result);
            setLoading(false);
        }

        setLoading(false);
    };

    const project = startData.project;

    return (
        <Layout>
            <ProjectPage>
                <NavbarLeft />

                <Sidebar project={project} />

                <Tags />
            </ProjectPage>
        </Layout>
    );
};

export const ProjectPage = styled.div`
    padding: 25px 32px 50px ${ paddingLeft }px;
    @media (max-width: 1100px) {
        padding: 25px 20px 50px ${ paddingLeft - 20 }px;
    }
    @media (max-width: 999px) {
        padding-left: ${ paddingLeft - 20 - sizes.secondarySideBarWidth }px;
    }
`;

export default TagReviewSystem;