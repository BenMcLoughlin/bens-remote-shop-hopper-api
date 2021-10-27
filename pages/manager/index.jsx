import React from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import NavbarLeft from 'components/NavbarLeft';
import SiteHostList from './SiteHostList';
import Sidebar from './Sidebar';

import { sizes } from 'styles/theme';
const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

const manager = () => (
    <Layout>
        <Page>
            <NavbarLeft />

            <Sidebar />

            <SiteHostList />
        </Page>
    </Layout>
);

export const Page = styled.div`
    padding: 20.05rem 32px 50px ${paddingLeft}px;
    @media (max-width: 1100px) {
        padding: 20.05rem 0.2rem 50px ${paddingLeft - 20}px;
    }
    @media (max-width: 999px) {
        padding-left: ${paddingLeft - 20 - sizes.secondarySideBarWidth}px;
    }
`;

export default manager;
