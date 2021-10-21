import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import SideNav from 'components/manager/SideNav';
import Display from 'components/manager/Display';
import * as shopsLists from '../../mock/shopsLists';
import { camelCase } from 'utils/strings';

import NavbarLeft from 'components/NavbarLeft';
import Sidebar from './Sidebar';
import SiteHostList from './SiteHostList';

import { sizes } from 'styles/theme';
const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

const manager = () => {
    const [ loading, setLoading ] = useState(false);
    const [ siteHost, setSelectedSiteHost ] = useState('shopify');
    const [ businessName, setSelectedBusinessName ] = useState('');
    const [ domain, setSelectedDomain ] = useState('');
    const city = 'kelowna';
    const shopsList = shopsLists[city];

    return (
        <Layout>
            <Page>
                <NavbarLeft />

                <Sidebar />

                <SiteHostList />
            </Page>
        </Layout>
    );
};

export const Page = styled.div`
    padding: 25px 32px 50px ${ paddingLeft }px;
    @media (max-width: 1100px) {
        padding: 25px 20px 50px ${ paddingLeft - 20 }px;
    }
    @media (max-width: 999px) {
        padding-left: ${ paddingLeft - 20 - sizes.secondarySideBarWidth }px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem;
    color: #14e2a4;
    background: #485056;
    white-space: nowrap;
`;

export default manager;